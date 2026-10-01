# ==============================================================================
# extract_ppt_notes.ps1
# PowerPoint COM 자동화를 활용한 슬라이드 고화질 JPG 내보내기 및 발표자 노트 추출기
# ==============================================================================
param (
    [Parameter(Mandatory=$true)]
    [string]$PptxPath,

    [Parameter(Mandatory=$false)]
    [string]$OutputDir = ".\output"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $PptxPath)) {
    Write-Error "PPTX 파일을 찾을 수 없습니다: $PptxPath"
}

$resolvedPptx = (Resolve-Path $PptxPath).Path
$slidesDir = Join-Path $OutputDir "slides"
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
New-Item -ItemType Directory -Force -Path $slidesDir | Out-Null

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "🚀 PowerPoint 슬라이드 및 발표자 노트 자동 추출 시작" -ForegroundColor Cyan
Write-Host "📄 파일: $resolvedPptx" -ForegroundColor Yellow
Write-Host "📁 대상 폴더: $OutputDir" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

$pptApp = $null
$presentation = $null

try {
    $pptApp = New-Object -ComObject PowerPoint.Application
    # 0 = Hidden, -1 = ReadOnly
    $presentation = $pptApp.Presentations.Open($resolvedPptx, -1, 0, 0)
    $totalSlides = $presentation.Slides.Count

    Write-Host "총 슬라이드 수: $totalSlides" -ForegroundColor Green

    $slidesData = @()

    for ($i = 1; $i -le $totalSlides; $i++) {
        $slide = $presentation.Slides.Item($i)
        $imgName = "slide$i.jpg"
        $imgPath = Join-Path $slidesDir $imgName

        # 1920x1080 고화질 내보내기
        $slide.Export($imgPath, "JPG", 1920, 1080)

        # 제목 추출
        $title = "Slide $i"
        try {
            if ($slide.Shapes.HasTitle -eq -1) {
                $rawTitle = $slide.Shapes.Title.TextFrame.TextRange.Text.Trim()
                if ($rawTitle) { $title = $rawTitle }
            }
        } catch {}

        # 발표자 노트 추출
        $noteText = ""
        try {
            if ($slide.NotesPage.Shapes.Count -gt 0) {
                foreach ($shape in $slide.NotesPage.Shapes) {
                    if ($shape.HasTextFrame -eq -1) {
                        $txt = $shape.TextFrame.TextRange.Text.Trim()
                        # 헤더/푸터 제외 본문 노트 텍스트만 추출
                        if ($txt.Length -gt 10 -and -not ($txt -match "^Slide \d+$")) {
                            $noteText = $txt
                            break
                        }
                    }
                }
            }
        } catch {}

        # 영문 스피치 및 국문 가이드 분리 파싱
        $scriptEn = ""
        $scriptKo = ""

        if ($noteText) {
            # 국문/영문 혼합 패턴 분석
            if ($noteText -match "\[English\]|\[Speech\]|Presentation:") {
                # 명시적 태그 구분 분리
                $parts = $noteText -split "(?=\[(?:English|Korean|Guide|해설)\])"
                foreach ($p in $parts) {
                    if ($p -match "\[English\]|\[Speech\]") {
                        $scriptEn = ($p -replace "\[English\]|\[Speech\]", "").Trim()
                    } elseif ($p -match "\[Korean\]|\[Guide\]|\[해설\]") {
                        $scriptKo = ($p -replace "\[Korean\]|\[Guide\]|\[해설\]", "").Trim()
                    }
                }
            } else {
                # 기본: 한글 포함 여부로 영문/국문 단락 분리
                $paragraphs = $noteText -split "(\r?\n){2,}"
                $enList = @()
                $koList = @()

                foreach ($p in $paragraphs) {
                    $clean = $p.Trim()
                    if (-not $clean) { continue }
                    if ($clean -match "[\uAC00-\uD7A3]") {
                        $koList += $clean
                    } else {
                        $enList += $clean
                    }
                }
                $scriptEn = $enList -join "`n`n"
                $scriptKo = $koList -join "`n`n"
            }
        }

        # 기본 폴백값
        if (-not $scriptEn) { $scriptEn = "Presenter speech for Slide $i." }

        $slidesData += [PSCustomObject]@{
            index    = $i
            title    = $title
            subTitle = ""
            image    = $imgName
            scriptEn = $scriptEn
            scriptKo = $scriptKo
        }

        if ($i % 10 -eq 0 -or $i -eq $totalSlides) {
            Write-Host "[$i / $totalSlides] 슬라이드 내보내기 완료" -ForegroundColor Gray
        }
    }

    $jsonPath = Join-Path $OutputDir "slides_notes_extracted.json"
    $slidesData | ConvertTo-Json -Depth 5 | Set-Content -Path $jsonPath -Encoding utf8

    Write-Host "✅ 추출 완료! JSON 파일 저장됨: $jsonPath" -ForegroundColor Green

} catch {
    Write-Error "추출 중 오류 발생: $_"
} finally {
    if ($presentation) { $presentation.Close() }
    if ($pptApp) { $pptApp.Quit() }
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}

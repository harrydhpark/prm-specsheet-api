# ==============================================================================
# extract_all_2027.ps1
# 2027 LG TV & Partner Growth Strategy - Full Asset Extractor (JPG, MP4, Notes)
# ==============================================================================
$ErrorActionPreference = "Stop"

$currentDir = (Get-Location).Path
$PptxPath = Join-Path $currentDir "uploads\2027 LG TV & Partner Growth Strategy\[Sharing] 2027 LG TV & Partner Growth Strategy_V1.0_260922.pptx"
$PublishDir = Join-Path $currentDir "published\2027-partner-growth-strategy"
$FirebaseDir = Join-Path $currentDir "public_firebase\docs\2027-partner-growth-strategy"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "2027 Partner Growth Strategy Asset Extraction Pipeline" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "PPTX Path: $PptxPath"

# Directories
$pubSlides = Join-Path $PublishDir "slides"
$pubVideos = Join-Path $PublishDir "videos"
$fbSlides = Join-Path $FirebaseDir "slides"
$fbVideos = Join-Path $FirebaseDir "videos"

if (-not (Test-Path $pubSlides)) { New-Item -ItemType Directory -Force -Path $pubSlides | Out-Null }
if (-not (Test-Path $pubVideos)) { New-Item -ItemType Directory -Force -Path $pubVideos | Out-Null }
if (-not (Test-Path $fbSlides)) { New-Item -ItemType Directory -Force -Path $fbSlides | Out-Null }
if (-not (Test-Path $fbVideos)) { New-Item -ItemType Directory -Force -Path $fbVideos | Out-Null }

$pptApp = $null
$pres = $null

try {
    $pptApp = New-Object -ComObject PowerPoint.Application
    Write-Host "Opening presentation (1.18 GB)..." -ForegroundColor Yellow
    $pres = $pptApp.Presentations.Open($PptxPath, -1, 0, 0)
    $totalSlides = $pres.Slides.Count
    Write-Host "Total Slides loaded: $totalSlides" -ForegroundColor Green

    $slidesList = @()
    $animatedSlideIndices = @()

    # Phase 1: High-res JPG Export & Note Extraction
    Write-Host "`n--- Phase 1: Exporting 76 JPG Slides & Extracting Notes ---" -ForegroundColor Cyan
    for ($i = 1; $i -le $totalSlides; $i++) {
        $slide = $pres.Slides.Item($i)
        $imgName = "slide$i.jpg"
        $pubImg = Join-Path $pubSlides $imgName
        $fbImg = Join-Path $fbSlides $imgName

        # 1920x1080 export
        $slide.Export($pubImg, "JPG", 1920, 1080)
        Copy-Item -Path $pubImg -Destination $fbImg -Force

        # Title Extraction
        $title = ""
        try {
            if ($slide.Shapes.HasTitle -eq -1) {
                $rawTitle = $slide.Shapes.Title.TextFrame.TextRange.Text.Trim()
                if ($rawTitle) { $title = $rawTitle.Replace("`r`n", " ").Replace("`n", " ") }
            }
        } catch {}

        if (-not $title) {
            foreach ($shape in $slide.Shapes) {
                if ($shape.HasTextFrame -eq -1) {
                    $t = $shape.TextFrame.TextRange.Text.Trim()
                    if ($t.Length -gt 3 -and -not ($t -match "^(Strictly|LGE|567|202|\*)")) {
                        $title = ($t.Replace("`r`n", " ").Replace("`n", " "))
                        if ($title.Length -gt 60) { $title = $title.Substring(0, 60) }
                        break
                    }
                }
            }
        }
        if (-not $title) { $title = "Slide $i" }

        # Animations
        $animCount = $slide.TimeLine.MainSequence.Count
        $hasAnim = ($animCount -gt 0)
        if ($hasAnim) {
            $animatedSlideIndices += $i
        }

        # Notes Extraction
        $noteText = ""
        try {
            if ($slide.NotesPage.Shapes.Count -gt 0) {
                foreach ($shape in $slide.NotesPage.Shapes) {
                    if ($shape.HasTextFrame -eq -1) {
                        $txt = $shape.TextFrame.TextRange.Text.Trim()
                        if ($txt.Length -gt 10 -and -not ($txt -match "^Slide \d+$")) {
                            $noteText = $txt
                            break
                        }
                    }
                }
            }
        } catch {}

        # Parse English Speech and Korean Notes
        $scriptEn = ""
        $scriptKo = ""

        if ($noteText) {
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

        if (-not $scriptEn) {
            $scriptEn = "2027 LG TV & Partner Growth Strategy Presentation - Slide $i."
        }

        $videoFile = if ($hasAnim) { "videos/slide$i.mp4" } else { $null }

        $slidesList += [PSCustomObject]@{
            index     = $i
            title     = $title
            subTitle  = if ($hasAnim) { "Animated Slide ($animCount effects)" } else { "Executive Strategy" }
            image     = $imgName
            hasVideo  = $hasAnim
            videoUrl  = $videoFile
            animCount = $animCount
            scriptEn  = $scriptEn
            scriptKo  = $scriptKo
        }

        if ($i % 10 -eq 0 -or $i -eq $totalSlides) {
            Write-Host "[$i / $totalSlides] JPG & Note extracted" -ForegroundColor Gray
        }
    }

    Write-Host "Phase 1 Complete: 76 JPGs extracted. Animated Slides: $($animatedSlideIndices.Count)" -ForegroundColor Green

    # Save Intermediate JSON
    $metaJsonPath = Join-Path $currentDir "scratch\2027_slides_meta.json"
    $slidesList | ConvertTo-Json -Depth 5 | Set-Content -Path $metaJsonPath -Encoding utf8

    # Phase 2: Render 54 MP4 Videos for Animated Slides
    Write-Host "`n--- Phase 2: Rendering 54 Animated Slides to MP4 Videos ---" -ForegroundColor Cyan
    $vIndex = 0
    $totalVideos = $animatedSlideIndices.Count

    foreach ($slideNum in $animatedSlideIndices) {
        $vIndex++
        $mp4Name = "slide$slideNum.mp4"
        $pubMp4 = Join-Path $pubVideos $mp4Name
        $fbMp4 = Join-Path $fbVideos $mp4Name

        if (Test-Path $pubMp4) {
            Write-Host "[$vIndex / $totalVideos] (Skip) Slide $slideNum video already exists" -ForegroundColor Gray
            Copy-Item -Path $pubMp4 -Destination $fbMp4 -Force
            continue
        }

        Write-Host "[$vIndex / $totalVideos] Rendering Slide $slideNum (Anim Count: $($slidesList[$slideNum - 1].animCount))..." -ForegroundColor Yellow

        $tempPres = $pptApp.Presentations.Add([Microsoft.Office.Core.MsoTriState]::msoFalse)
        $tempPres.PageSetup.SlideWidth = $pres.PageSetup.SlideWidth
        $tempPres.PageSetup.SlideHeight = $pres.PageSetup.SlideHeight

        $pres.Slides.Item($slideNum).Copy()
        $null = $tempPres.Slides.Paste(1)

        $duration = [Math]::Min(12, [Math]::Max(6, [int]($slidesList[$slideNum - 1].animCount * 0.8 + 4)))

        # CreateVideo(FileName, UseTimingsAndNarrations, DefaultSlideDuration, VertResolution, FramesPerSecond, Quality)
        $tempPres.CreateVideo($pubMp4, $true, $duration, 720, 24, 75)

        $sec = 0
        while ($tempPres.CreateVideoStatus -in @(1, 2) -and $sec -lt 60) {
            Start-Sleep -Seconds 1
            $sec++
        }

        $tempPres.Close()

        if (Test-Path $pubMp4) {
            Copy-Item -Path $pubMp4 -Destination $fbMp4 -Force
            $size = (Get-Item $pubMp4).Length
            Write-Host "  -> Done! Slide $slideNum MP4: $([Math]::Round($size/1024, 1)) KB (${sec}s)" -ForegroundColor Green
        } else {
            Write-Host "  -> Warning: Slide $slideNum video creation timed out or failed" -ForegroundColor Red
        }
    }

    Write-Host "`nAll 54 Animated Slide Videos Rendered Successfully!" -ForegroundColor Green

} catch {
    Write-Error "Error during asset extraction: $_"
} finally {
    if ($pres) { $pres.Close() }
    if ($pptApp) { $pptApp.Quit() }
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}

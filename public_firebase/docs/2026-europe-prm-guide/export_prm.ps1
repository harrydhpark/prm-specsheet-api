[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$pptxPath = "d:/TV 유럽영업/15. AX Task/2026 AX 실행과제/07 제품 소개 사이트 자동 제작 에이전트/published/2026-europe-prm-guide/temp_prm.pptx"
$outDir = "d:/TV 유럽영업/15. AX Task/2026 AX 실행과제/07 제품 소개 사이트 자동 제작 에이전트/published/2026-europe-prm-guide/slides"

Write-Host "Opening PPTX:" $pptxPath
$ppt = New-Object -ComObject PowerPoint.Application
$pres = $ppt.Presentations.Open($pptxPath, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoFalse, [Microsoft.Office.Core.MsoTriState]::msoFalse)

Write-Host "Total Slides count:" $pres.Slides.Count

# Export slides as JPG (17 = ppSaveAsJPG)
$pres.SaveAs($outDir, 17)

$slideInfo = @()
for ($i = 1; $i -le $pres.Slides.Count; $i++) {
    $slide = $pres.Slides.Item($i)
    $texts = @()
    foreach ($shape in $slide.Shapes) {
        if ($shape.HasTextFrame -and $shape.TextFrame.HasText) {
            $t = $shape.TextFrame.TextRange.Text.Trim()
            if ($t.Length -gt 0) { $texts += $t }
        }
    }
    $slideInfo += @{
        slideNum = $i
        mainTitle = if ($texts.Count -gt 0) { $texts[0] } else { "슬라이드 " + $i }
        subTitle = if ($texts.Count -gt 1) { $texts[1] } else { "" }
        allTexts = $texts
    }
}

$pres.Close()
$ppt.Quit()

$jsonPath = Join-Path $outDir "slides.json"
$slideInfo | ConvertTo-Json -Depth 5 | Out-File -FilePath $jsonPath -Encoding utf8
Write-Host "Export completed successfully!"

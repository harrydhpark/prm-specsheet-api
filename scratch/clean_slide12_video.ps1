$ErrorActionPreference = "Stop"

$currentDir = (Get-Location).Path
$pptxPath = Join-Path $currentDir "uploads\2027 LG TV & Partner Growth Strategy\[Sharing] 2027 LG TV & Partner Growth Strategy_V1.0_260922.pptx"
$outMp4 = Join-Path $currentDir "scratch\slide12_clean.mp4"
$outJpg = Join-Path $currentDir "scratch\slide12_clean.jpg"

$pptApp = $null
$pres = $null
$tempPres = $null

try {
    $pptApp = New-Object -ComObject PowerPoint.Application
    Write-Host "Opening presentation..." -ForegroundColor Yellow
    $pres = $pptApp.Presentations.Open($pptxPath, -1, 0, 0)

    $tempPres = $pptApp.Presentations.Add([Microsoft.Office.Core.MsoTriState]::msoFalse)
    $tempPres.PageSetup.SlideWidth = $pres.PageSetup.SlideWidth
    $tempPres.PageSetup.SlideHeight = $pres.PageSetup.SlideHeight
    $tempPres.ApplyTemplate($pptxPath)

    $pres.Slides.Item(12).Copy()
    Start-Sleep -Milliseconds 800
    $null = $tempPres.Slides.Paste(1)
    $copiedSlide = $tempPres.Slides.Item(1)

    Write-Host "Slide 12 copied. Deleting text 'Hi Yeni! Looking great today!'..." -ForegroundColor Cyan

    for ($i = $copiedSlide.Shapes.Count; $i -ge 1; $i--) {
        $s = $copiedSlide.Shapes.Item($i)
        if ($s.Name -eq "TextBox 25" -or ($s.HasTextFrame -and $s.TextFrame.HasText -and $s.TextFrame.TextRange.Text -like "*Looking great today*")) {
            Write-Host "  Deleting shape: $($s.Name) (Text='$($s.TextFrame.TextRange.Text)')"
            $s.Delete()
        } elseif ($s.Name -eq "Rounded Rectangle 1" -and $s.Left -lt 0) {
            # The off-screen wipe rectangle
            Write-Host "  Deleting typing animation mask: $($s.Name)"
            $s.Delete()
        }
    }

    # Ensure background video audio is muted if any
    for ($i = 1; $i -le $copiedSlide.Shapes.Count; $i++) {
        $s = $copiedSlide.Shapes.Item($i)
        if ($s.Type -eq 16 -or $s.Name -like "*[VAP]*") {
            if ($s.MediaFormat) {
                $s.MediaFormat.Muted = $true
                $s.MediaFormat.Volume = 0
            }
        }
    }

    # Export clean static image
    Write-Host "Exporting clean static image to $outJpg..." -ForegroundColor Cyan
    $copiedSlide.Export($outJpg, "JPG", 1920, 1080)
    Write-Host "  Image exported. Size: $([Math]::Round((Get-Item $outJpg).Length / 1024, 1)) KB"

    # Export clean motion video
    Write-Host "Rendering clean video to $outMp4..." -ForegroundColor Cyan
    $tempPres.CreateVideo($outMp4, $true, 10.0, 720, 24, 80)

    $sec = 0
    while ($tempPres.CreateVideoStatus -in @(1, 2) -and $sec -lt 120) {
        Start-Sleep -Seconds 1
        $sec++
        if ($sec % 5 -eq 0) { Write-Host "  Rendering video... ${sec}s" }
    }

    if (Test-Path $outMp4) {
        $size = (Get-Item $outMp4).Length
        Write-Host "Clean Video exported successfully! Size: $([Math]::Round($size/1024, 1)) KB in ${sec}s" -ForegroundColor Green
    } else {
        Write-Host "Video export failed!" -ForegroundColor Red
    }

} catch {
    Write-Error "Error: $_"
} finally {
    if ($tempPres) { $tempPres.Close() }
    if ($pres) { $pres.Close() }
    if ($pptApp) { $pptApp.Quit() }
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}

$ErrorActionPreference = "Stop"

$currentDir = (Get-Location).Path
$pptxPath = Join-Path $currentDir "uploads\2027 LG TV & Partner Growth Strategy\[Sharing] 2027 LG TV & Partner Growth Strategy_V1.0_260922.pptx"
$testMp4 = Join-Path $currentDir "scratch\slide6_fixed.mp4"

$pptApp = $null
$pres = $null
$tempPres = $null

try {
    $pptApp = New-Object -ComObject PowerPoint.Application
    Write-Host "Opening original presentation..." -ForegroundColor Yellow
    $pres = $pptApp.Presentations.Open($pptxPath, -1, 0, 0)

    # Create temporary presentation and apply template
    Write-Host "Creating temp presentation and applying template..." -ForegroundColor Yellow
    $tempPres = $pptApp.Presentations.Add([Microsoft.Office.Core.MsoTriState]::msoFalse)
    $tempPres.PageSetup.SlideWidth = $pres.PageSetup.SlideWidth
    $tempPres.PageSetup.SlideHeight = $pres.PageSetup.SlideHeight
    $tempPres.ApplyTemplate($pptxPath)

    # Copy Slide 6 with retry loop to prevent clipboard timing issues
    $copiedSlide = $null
    for ($retry = 1; $retry -le 5; $retry++) {
        try {
            $pres.Slides.Item(6).Copy()
            Start-Sleep -Milliseconds 800
            $copiedSlide = $tempPres.Slides.Paste(1)
            if ($copiedSlide) { break }
        } catch {
            Write-Host "Clipboard paste retry $retry... ($($_))" -ForegroundColor Yellow
            Start-Sleep -Seconds 1
        }
    }
    if (-not $copiedSlide) { throw "Failed to paste slide 6 after 5 retries" }

    Write-Host "Slide 6 copied. Adjusting shapes and animations..." -ForegroundColor Cyan

    # 1. Adjust Rectangle 4 (First Prompt)
    $r4 = $copiedSlide.Shapes.Item("Rectangle 4")
    $r4.Width = 620
    $r4.TextFrame.WordWrap = 0 # msoFalse
    Write-Host "Adjusted Rectangle 4 width to 620, WordWrap=False" -ForegroundColor Green

    # 2. Adjust Rectangle 11 (Second Prompt)
    $r11 = $copiedSlide.Shapes.Item("Rectangle 11")
    $r11.Width = 620
    $r11.TextFrame.WordWrap = 0 # msoFalse
    Write-Host "Adjusted Rectangle 11 width to 620, WordWrap=False" -ForegroundColor Green

    # 3. Remove/Mute Typing sound shapes
    $shapesToDelete = @()
    for ($i = $copiedSlide.Shapes.Count; $i -ge 1; $i--) {
        $s = $copiedSlide.Shapes.Item($i)
        if ($s.Name -like "*TYPING*" -or $s.Name -like "*SOUND*") {
            Write-Host "Deleting sound effect shape: $($s.Name)" -ForegroundColor Yellow
            $s.Delete()
        } elseif ($s.Name -eq "영상" -or $i -eq 1) {
            if ($s.MediaFormat) {
                $s.MediaFormat.Muted = $true
                $s.MediaFormat.Volume = 0
                Write-Host "Muted background video: $($s.Name)" -ForegroundColor Yellow
            }
        }
    }

    # 4. Adjust Animations Timeline
    # Re-inspect animations in copied slide
    $seq = $copiedSlide.TimeLine.MainSequence
    Write-Host "Timeline animations count: $($seq.Count)"

    for ($i = 1; $i -le $seq.Count; $i++) {
        $eff = $seq.Item($i)
        $shapeName = if ($eff.Shape) { $eff.Shape.Name } else { "None" }

        # Change background video '영상' from AfterPrevious (3) to WithPrevious (2)
        if ($shapeName -eq "영상" -and $eff.Timing.TriggerType -eq 3) {
            $eff.Timing.TriggerType = 2 # msoAnimTriggerWithPrevious
            Write-Host "Anim $i ($shapeName): changed TriggerType to WithPrevious (2)" -ForegroundColor Green
        }

        # Change trigger on Straight Connector 41 that was waiting for page click (1)
        if ($shapeName -eq "Straight Connector 41" -and $eff.Timing.TriggerType -eq 1) {
            $eff.Timing.TriggerType = 2 # msoAnimTriggerWithPrevious
            $eff.Timing.TriggerDelayTime = 7.0 # Start prompt typing at 7.0s (synchronized with English narration)
            Write-Host "Anim $i ($shapeName): changed TriggerType to WithPrevious (2), Delay=7.0s" -ForegroundColor Green
        }
    }

    # Render video: duration 19.0s for complete narration synchronization
    Write-Host "Starting video export (duration 19.0s) to: $testMp4" -ForegroundColor Cyan
    $tempPres.CreateVideo($testMp4, $true, 19.0, 720, 24, 80)

    $sec = 0
    while ($tempPres.CreateVideoStatus -in @(1, 2) -and $sec -lt 180) {
        Start-Sleep -Seconds 1
        $sec++
        if ($sec % 5 -eq 0) { Write-Host "Rendering progress... ${sec}s" }
    }

    if (Test-Path $testMp4) {
        $size = (Get-Item $testMp4).Length
        Write-Host "Video export completed successfully! Size: $([Math]::Round($size/1024, 1)) KB in ${sec}s" -ForegroundColor Green

        $pubTarget = Join-Path $currentDir "published\2027-partner-growth-strategy\videos\slide6.mp4"
        $fbTarget = Join-Path $currentDir "public_firebase\docs\2027-partner-growth-strategy\videos\slide6.mp4"

        Copy-Item -Path $testMp4 -Destination $pubTarget -Force
        Write-Host "Copied to published: $pubTarget" -ForegroundColor Green

        if (Test-Path (Split-Path $fbTarget)) {
            Copy-Item -Path $testMp4 -Destination $fbTarget -Force
            Write-Host "Copied to firebase: $fbTarget" -ForegroundColor Green
        }
    } else {
        Write-Host "Video export failed or timed out!" -ForegroundColor Red
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

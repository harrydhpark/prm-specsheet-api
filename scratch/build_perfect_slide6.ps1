$ErrorActionPreference = "Stop"

$currentDir = (Get-Location).Path
$pptxPath = Join-Path $currentDir "uploads\2027 LG TV & Partner Growth Strategy\[Sharing] 2027 LG TV & Partner Growth Strategy_V1.0_260922.pptx"
$outMp4 = Join-Path $currentDir "scratch\slide6_perfect.mp4"

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

    $pres.Slides.Item(6).Copy()
    Start-Sleep -Milliseconds 800
    $null = $tempPres.Slides.Paste(1)
    $copiedSlide = $tempPres.Slides.Item(1)

    Write-Host "Slide 6 copied. Adjusting prompt widths..." -ForegroundColor Cyan
    $r4 = $copiedSlide.Shapes.Item("Rectangle 4")
    $r4.Width = 620
    $r4.TextFrame.WordWrap = 0 # msoFalse
    Write-Host "  Rectangle 4: Width=620, WordWrap=False"

    $r11 = $copiedSlide.Shapes.Item("Rectangle 11")
    $r11.Width = 620
    $r11.TextFrame.WordWrap = 0 # msoFalse
    Write-Host "  Rectangle 11: Width=620, WordWrap=False"

    # Delete typing sound shapes and mute any video
    for ($i = $copiedSlide.Shapes.Count; $i -ge 1; $i--) {
        $s = $copiedSlide.Shapes.Item($i)
        if ($s.Name -like "*TYPING*" -or $s.Name -like "*SOUND*") {
            Write-Host "  Deleting sound shape: $($s.Name)"
            $s.Delete()
        } elseif ($s.Name -eq "영상" -or $i -eq 1) {
            if ($s.MediaFormat) {
                $s.MediaFormat.Muted = $true
                $s.MediaFormat.Volume = 0
            }
        }
    }

    # Timeline adjustment
    $seq = $copiedSlide.TimeLine.MainSequence
    Write-Host "Timeline sequence count before edit: $($seq.Count)"

    # Delete the 12-second background video effect at Item 1 if duration > 5
    if ($seq.Item(1).Timing.Duration -gt 5) {
        Write-Host "  Deleting 12s background video effect at Item 1..."
        $seq.Item(1).Delete()
    }

    Write-Host "Sequence count after deleting Item 1: $($seq.Count)"

    # Now let's print and inspect all items
    for ($i = 1; $i -le $seq.Count; $i++) {
        $eff = $seq.Item($i)
        $shapeName = if ($eff.Shape) { $eff.Shape.Name } else { "None" }
        Write-Host "  [$i] Shape='$shapeName' Type=$($eff.EffectType) Trigger=$($eff.Timing.TriggerType) Delay=$($eff.Timing.TriggerDelayTime) Dur=$($eff.Timing.Duration)"
    }

    # 1. Start cursor & prompt 1 typing at 1.2s
    # Item 3 is Straight Connector 41 (the click trigger in original, now Item 3)
    $seq.Item(3).Timing.TriggerType = 2 # WithPrevious
    $seq.Item(3).Timing.TriggerDelayTime = 1.2
    Write-Host "  Item 3 (Straight Connector 41): Trigger=WithPrevious, Delay=1.2s"

    # Item 4 is Rectangle 4 appear (Trigger=AfterPrevious, Delay=0)
    # Item 5 is Straight Connector 5 appear (Trigger=WithPrevious, Delay=0)
    # Item 6 is Straight Connector 5 motion path (Duration=1.6s)
    # Item 7 is Straight Connector 5 duration 0.065s
    # Item 8 is Straight Connector 5 (hiding/transitioning) - change to Delay=2.0s so Prompt 1 stays visible!
    $seq.Item(8).Timing.TriggerDelayTime = 2.0
    $seq.Item(9).Timing.TriggerDelayTime = 2.0
    Write-Host "  Item 8 & 9 (Pause on Prompt 1): Delay=2.0s"

    # Item 10 is Rectangle 11 appear (Trigger=AfterPrevious)
    # Item 12 is Straight Connector 14 motion path (Duration=1.72s)
    # Item 14 is Rectangle 11 exit / results appearance - change to Delay=2.0s so Prompt 2 stays visible!
    $seq.Item(14).Timing.TriggerDelayTime = 2.0
    $seq.Item(15).Timing.TriggerDelayTime = 2.0
    $seq.Item(16).Timing.TriggerDelayTime = 2.0
    Write-Host "  Item 14, 15, 16 (Pause on Prompt 2): Delay=2.0s"

    Write-Host "`nRendering video to $outMp4..." -ForegroundColor Cyan
    $tempPres.CreateVideo($outMp4, $true, 12.0, 720, 24, 80)

    $sec = 0
    while ($tempPres.CreateVideoStatus -in @(1, 2) -and $sec -lt 120) {
        Start-Sleep -Seconds 1
        $sec++
        if ($sec % 5 -eq 0) { Write-Host "  Rendering... ${sec}s" }
    }

    if (Test-Path $outMp4) {
        $size = (Get-Item $outMp4).Length
        Write-Host "Perfect Video exported successfully! Size: $([Math]::Round($size/1024, 1)) KB in ${sec}s" -ForegroundColor Green
    } else {
        Write-Host "Failed!" -ForegroundColor Red
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

# ==============================================================================
# re_render_videos_with_theme.ps1
# Re-renders all animated slide videos with ApplyTemplate to preserve the Dark Theme
# ==============================================================================
$ErrorActionPreference = "Stop"

$currentDir = (Get-Location).Path
$pptxPath = Join-Path $currentDir "uploads\2027 LG TV & Partner Growth Strategy\[Sharing] 2027 LG TV & Partner Growth Strategy_V1.0_260922.pptx"
$pubVideos = Join-Path $currentDir "published\2027-partner-growth-strategy\videos"
$fbVideos = Join-Path $currentDir "public_firebase\docs\2027-partner-growth-strategy\videos"

if (-not (Test-Path $pubVideos)) { New-Item -ItemType Directory -Force -Path $pubVideos | Out-Null }
if (-not (Test-Path $fbVideos)) { New-Item -ItemType Directory -Force -Path $fbVideos | Out-Null }

$pptApp = $null
$pres = $null

try {
    $pptApp = New-Object -ComObject PowerPoint.Application
    Write-Host "Opening presentation for video re-rendering with dark theme..." -ForegroundColor Yellow
    $pres = $pptApp.Presentations.Open($pptxPath, -1, 0, 0)
    $totalSlides = $pres.Slides.Count

    # Find animated slides
    $animatedSlides = @()
    for ($i = 1; $i -le $totalSlides; $i++) {
        if ($i -in @(2, 3)) { continue } # Slide 2 and 3 deleted
        $s = $pres.Slides.Item($i)
        $cnt = $s.TimeLine.MainSequence.Count
        if ($cnt -gt 0) {
            $animatedSlides += [PSCustomObject]@{
                SlideNum  = $i
                AnimCount = $cnt
            }
        }
    }

    Write-Host "Total Animated Slides to render: $($animatedSlides.Count)" -ForegroundColor Cyan

    $vIdx = 0
    foreach ($item in $animatedSlides) {
        $vIdx++
        $slideNum = $item.SlideNum
        $animCount = $item.AnimCount
        $mp4Name = "slide$slideNum.mp4"
        $pubTarget = Join-Path $pubVideos $mp4Name
        $fbTarget = Join-Path $fbVideos $mp4Name

        Write-Host "[$vIdx / $($animatedSlides.Count)] Rendering Slide $slideNum (Anim: $animCount) with Dark Theme..." -ForegroundColor Yellow

        # Skip already completed slides
        if ($slideNum -in @(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21)) {
            Write-Host "[$vIdx / $($animatedSlides.Count)] Slide $slideNum already rendered with Dark Theme. Skipping..." -ForegroundColor Gray
            continue
        }

        # Create temporary presentation and apply template to preserve dark theme
        $tempPres = $pptApp.Presentations.Add([Microsoft.Office.Core.MsoTriState]::msoFalse)
        $tempPres.PageSetup.SlideWidth = $pres.PageSetup.SlideWidth
        $tempPres.PageSetup.SlideHeight = $pres.PageSetup.SlideHeight
        $tempPres.ApplyTemplate($pptxPath)

        $pres.Slides.Item($slideNum).Copy()
        $null = $tempPres.Slides.Paste(1)

        $duration = [Math]::Min(12, [Math]::Max(6, [int]($animCount * 0.8 + 4)))

        # Render video
        $tempPres.CreateVideo($pubTarget, $true, $duration, 720, 24, 75)

        $sec = 0
        while ($tempPres.CreateVideoStatus -in @(1, 2) -and $sec -lt 120) {
            Start-Sleep -Seconds 1
            $sec++
        }

        $tempPres.Close()

        if (Test-Path $pubTarget) {
            Copy-Item -Path $pubTarget -Destination $fbTarget -Force
            $size = (Get-Item $pubTarget).Length
            Write-Host "  -> Done! Slide $slideNum MP4: $([Math]::Round($size/1024, 1)) KB (${sec}s)" -ForegroundColor Green
        } else {
            Write-Host "  -> Warning: Slide $slideNum video creation timed out" -ForegroundColor Red
        }
    }

    Write-Host "`nAll Animated Slide Videos Re-rendered with Dark Theme Successfully!" -ForegroundColor Green

} catch {
    Write-Error "Error during video re-rendering: $_"
} finally {
    if ($pres) { $pres.Close() }
    if ($pptApp) { $pptApp.Quit() }
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}

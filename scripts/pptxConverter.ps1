param (
    [string]$InputPptx,
    [string]$OutputDir
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

$scriptDir = (Get-Item -Path ".").FullName

if (-not $InputPptx) {
    $pptxFile = Get-ChildItem -Path (Join-Path $scriptDir "uploads") -Filter "*.pptx" | Select-Object -First 1
    if (-not $pptxFile) {
        Write-Host "ERROR: No PPTX file found in uploads."
        exit 1
    }
    $InputPptx = $pptxFile.FullName
}

if (-not $OutputDir) {
    $OutputDir = Join-Path $scriptDir "published\ata-guide\slides"
}

if (-not (Test-Path -Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

Write-Host "Processing PPTX File: $InputPptx"
Write-Host "Output Directory: $OutputDir"

try {
    $pptApp = New-Object -ComObject PowerPoint.Application
    $pptApp.Visible = 1
    
    # Open presentation (1 = msoTrue ReadOnly)
    $pres = $pptApp.Presentations.Open($InputPptx, 1, 0, 0)
    
    # Export slides (17 = ppSaveAsPNG, 16 = ppSaveAsJPG)
    $pres.SaveAs($OutputDir, 17)
    Write-Host "Exported $($pres.Slides.Count) slides as high-resolution PNGs."

    $slideList = @()
    foreach ($slide in $pres.Slides) {
        $idx = $slide.SlideIndex
        $textBlocks = @()
        
        foreach ($shape in $slide.Shapes) {
            try {
                if ($shape.HasTextFrame -eq 1 -and $shape.TextFrame.HasText -eq 1) {
                    $txt = $shape.TextFrame.TextRange.Text.Trim()
                    if ($txt.Length -gt 0) {
                        $textBlocks += [PSCustomObject]@{
                            top = $shape.Top
                            left = $shape.Left
                            text = $txt
                        }
                    }
                }
            } catch {}
        }
        
        # Sort by top position to identify main title / subheader
        $sortedBlocks = $textBlocks | Sort-Object top
        
        $titleText = "슬라이드 " + $idx
        if ($sortedBlocks.Count -gt 0) {
            $firstLine = ($sortedBlocks[0].text -split "`r|`n")[0].Trim()
            if ($firstLine.Length -gt 0) {
                $titleText = $firstLine
            }
        }
        
        $fullContent = ($textBlocks | ForEach-Object { $_.text }) -join " "
        
        $slideList += [PSCustomObject]@{
            index = $idx
            title = $titleText
            image = ("슬라이드" + $idx + ".JPG")
            content = $fullContent
        }
    }
    
    $pres.Close()
    $pptApp.Quit()
    
    $docTitle = [System.IO.Path]::GetFileNameWithoutExtension($InputPptx)
    $jsonObj = [PSCustomObject]@{
        presentationTitle = $docTitle
        totalPages = $slideList.Count
        updatedAt = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
        slides = $slideList
    }
    
    $jsonStr = $jsonObj | ConvertTo-Json -Depth 5
    $jsonPath = Join-Path $OutputDir "slides.json"
    [System.IO.File]::WriteAllText($jsonPath, $jsonStr, [System.Text.Encoding]::UTF8)
    
    Write-Host "PPTX conversion completed successfully. Metadata written to slides.json."
} catch {
    Write-Host "ERROR during PowerPoint processing:" $_.Exception.Message
    if ($pptApp) {
        try { $pptApp.Quit() } catch {}
    }
    exit 1
}

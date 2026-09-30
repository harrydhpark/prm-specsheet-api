Add-Type -AssemblyName System.IO.Compression.FileSystem

$pptxPath = "D:\TV 유럽영업\15. AX Task\2026 AX 실행과제\07. 제품 소개 사이트 자동 제작 에이전트\uploads\2026 유럽 거래선 상담 자료_v9.pptx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($pptxPath)

$results = @()

for ($i = 1; $i -le 48; $i++) {
    $relName = "ppt/slides/_rels/slide$i.xml.rels"
    $relEntry = $zip.GetEntry($relName)
    if (-not $relEntry) {
        $results += [PSCustomObject]@{ slide = $i; hasNotes = $false; text = "" }
        continue
    }
    
    $stream = $relEntry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $relXml = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    
    $regex = [regex]'Target="\.\./notesSlides/(notesSlide\d+\.xml)"'
    $match = $regex.Match($relXml)
    if ($match.Success) {
        $notesFile = "ppt/notesSlides/" + $match.Groups[1].Value
        $nEntry = $zip.GetEntry($notesFile)
        if ($nEntry) {
            $ns = $nEntry.Open()
            $nr = New-Object System.IO.StreamReader($ns)
            $nXml = $nr.ReadToEnd()
            $nr.Close()
            $ns.Close()
            
            # Extract paragraphs / text
            $pMatches = [regex]::Matches($nXml, '<a:p[\s>].*?</a:p>')
            $pTexts = @()
            foreach ($p in $pMatches) {
                $tMatches = [regex]::Matches($p.Value, '<a:t>(.*?)</a:t>')
                $tLine = ($tMatches | ForEach-Object { $_.Groups[1].Value }) -join ''
                if ($tLine.Trim().Length -gt 0) {
                    $pTexts += $tLine.Trim()
                }
            }
            $fullNotes = $pTexts -join "`n"
            $results += [PSCustomObject]@{
                slide = $i
                notesFile = $match.Groups[1].Value
                hasNotes = ($fullNotes.Length -gt 0)
                text = $fullNotes
            }
        } else {
            $results += [PSCustomObject]@{ slide = $i; hasNotes = $false; text = "" }
        }
    } else {
        $results += [PSCustomObject]@{ slide = $i; hasNotes = $false; text = "" }
    }
}

$zip.Dispose()

Write-Host "Total checked: $($results.Count)"
$withNotes = $results | Where-Object { $_.hasNotes }
Write-Host "Slides with notes: $($withNotes.Count)"

foreach ($r in $results) {
    $status = if ($r.hasNotes) { "YES" } else { "NO " }
    $short = if ($r.text.Length -gt 70) { $r.text.Substring(0, 70).Replace("`n", " ") } else { $r.text.Replace("`n", " ") }
    Write-Host ("Slide {0,2} [{1}]: {2}" -f $r.slide, $status, $short)
}

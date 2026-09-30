Add-Type -AssemblyName System.IO.Compression.FileSystem

$pptxPath = "D:\TV 유럽영업\15. AX Task\2026 AX 실행과제\07. 제품 소개 사이트 자동 제작 에이전트\uploads\2026 유럽 거래선 상담 자료_v9.pptx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($pptxPath)

$notesList = @()

for ($i = 1; $i -le 48; $i++) {
    $relName = "ppt/slides/_rels/slide$i.xml.rels"
    $relEntry = $zip.GetEntry($relName)
    $rawNotes = ""
    $notesFile = ""
    
    if ($relEntry) {
        $s = $relEntry.Open()
        $r = New-Object System.IO.StreamReader($s)
        $relXml = $r.ReadToEnd()
        $r.Close()
        $s.Close()
        
        $match = [regex]::Match($relXml, 'notesSlides/(notesSlide\d+\.xml)')
        if ($match.Success) {
            $notesFile = $match.Groups[1].Value
            $nEntry = $zip.GetEntry("ppt/notesSlides/$notesFile")
            if ($nEntry) {
                $ns = $nEntry.Open()
                $nr = New-Object System.IO.StreamReader($ns)
                $nXml = $nr.ReadToEnd()
                $nr.Close()
                $ns.Close()
                
                # Extract paragraphs
                $pMatches = [regex]::Matches($nXml, '<a:p[\s>].*?</a:p>')
                $lines = @()
                foreach ($p in $pMatches) {
                    $tMatches = [regex]::Matches($p.Value, '<a:t>(.*?)</a:t>')
                    $tLine = ($tMatches | ForEach-Object { $_.Groups[1].Value }) -join ''
                    if ($tLine.Trim().Length -gt 0) {
                        $lines += $tLine.Trim()
                    }
                }
                $rawNotes = $lines -join "`n"
            }
        }
    }
    
    $notesList += [PSCustomObject]@{
        slide = $i
        notesFile = $notesFile
        notes = $rawNotes
    }
}

$zip.Dispose()

$json = $notesList | ConvertTo-Json -Depth 5
$outPath = "D:\TV 유럽영업\15. AX Task\2026 AX 실행과제\07. 제품 소개 사이트 자동 제작 에이전트\scratch\all_raw_notes.json"
[System.IO.File]::WriteAllText($outPath, $json, [System.Text.Encoding]::UTF8)
Write-Host "Successfully exported $($notesList.Count) slide notes to $outPath"

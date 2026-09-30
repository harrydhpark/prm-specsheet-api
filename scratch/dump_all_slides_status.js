const fs = require('fs');

const js = fs.readFileSync('published/2025-prm-consulting/slidesData.js', 'utf8');
const pData = JSON.parse(js.match(/const\s+PRESENTATION_DATA\s*=\s*(\{[\s\S]*\});\s*$/)[1]);
let rawNotes = fs.readFileSync('scratch/all_raw_notes.json', 'utf8');
if (rawNotes.charCodeAt(0) === 0xFEFF) rawNotes = rawNotes.slice(1);
const notes = JSON.parse(rawNotes);

const summary = pData.slides.map(s => {
  const n = notes.find(x => x.slide === s.index);
  const note = n ? n.notes.trim() : '';
  return {
    index: s.index,
    title: s.title,
    subTitle: s.subTitle,
    noteLength: note.length,
    rawNote: note,
    content: s.content
  };
});

fs.writeFileSync('scratch/slides_status_report.json', JSON.stringify(summary, null, 2), 'utf8');
console.log(`Saved report for ${summary.length} slides to scratch/slides_status_report.json`);

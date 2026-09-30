const fs = require('fs');

// Read slidesData.js
const slidesDataJs = fs.readFileSync('published/2025-prm-consulting/slidesData.js', 'utf8');
const jsonMatch = slidesDataJs.match(/const\s+PRESENTATION_DATA\s*=\s*(\{[\s\S]*\});\s*$/);
if (!jsonMatch) {
  console.error("Could not match PRESENTATION_DATA");
  process.exit(1);
}
const presentationData = JSON.parse(jsonMatch[1]);

// Read raw notes
let rawNotes = fs.readFileSync('scratch/all_raw_notes.json', 'utf8');
if (rawNotes.charCodeAt(0) === 0xFEFF) rawNotes = rawNotes.slice(1);
const notes = JSON.parse(rawNotes);

presentationData.slides.forEach(slide => {
  const noteObj = notes.find(n => n.slide === slide.index);
  const noteText = noteObj ? noteObj.notes.trim() : '';
  console.log(`\n=== SLIDE ${slide.index}: ${slide.title} ===`);
  console.log(`Sub: ${slide.subTitle || ''}`);
  console.log(`Existing Content: ${(slide.content || '').slice(0, 100).replace(/\r?\n/g, ' ')}...`);
  console.log(`Note length: ${noteText.length}`);
  if (noteText.length > 0) {
    console.log(`Note:\n${noteText}`);
  } else {
    console.log(`Note: [EMPTY]`);
  }
});

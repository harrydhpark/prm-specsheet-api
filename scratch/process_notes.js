const fs = require('fs');
const path = require('path');

let raw = fs.readFileSync('scratch/all_raw_notes.json', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) {
  raw = raw.slice(1);
}
const notes = JSON.parse(raw);
console.log(`Loaded ${notes.length} slides notes.`);

notes.forEach(n => {
  const text = (n.notes || '').trim();
  const preview = text.slice(0, 80).replace(/\r?\n/g, ' ');
  console.log(`[Slide ${n.slide.toString().padStart(2)}] (${text.length} chars) : ${preview}`);
});

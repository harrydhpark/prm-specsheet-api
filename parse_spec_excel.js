const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const excelPath = path.join(__dirname, 'uploads', 'SPEC TV S2026 TV E 7.5.0 1(20260624).xlsx');
const workbook = XLSX.readFile(excelPath);

console.log('--- SHEET NAMES ---');
console.log(workbook.SheetNames);

workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  console.log(`\n========================================`);
  console.log(`SHEET: ${sheetName} (${rows.length} rows)`);
  console.log(`========================================`);

  rows.slice(0, 30).forEach((row, i) => {
    if (row && row.some(cell => cell !== null && cell !== undefined && cell !== '')) {
      const cleanRow = row.map(c => c !== undefined && c !== null ? String(c).replace(/\r?\n|\r/g, ' ') : '');
      console.log(`Row ${i + 1}:`, cleanRow.slice(0, 15));
    }
  });
});

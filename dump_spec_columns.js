const XLSX = require('xlsx');
const path = require('path');

const excelPath = path.join(__dirname, 'uploads', 'SPEC TV S2026 TV E 7.5.0 1(20260624).xlsx');
const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

console.log('=== ROW 1 ===');
console.log(rows[0]);

console.log('\n=== ROW 2 ===');
console.log(rows[1]);

console.log('\n=== ROW 3 ===');
console.log(rows[2]);

console.log('\n=== ROW 4 ===');
console.log(rows[3]);

console.log('\n=== ROW 5 ===');
console.log(rows[4]);

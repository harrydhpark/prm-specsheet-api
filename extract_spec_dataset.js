const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const projDir = 'd:\\TV 유럽영업\\15. AX Task\\2026 AX 실행과제\\07 제품 소개 사이트 자동 제작 에이전트';
const excelPath = path.join(projDir, 'uploads', 'SPEC TV S2026 TV E 7.5.0 1(20260624).xlsx');

const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const modelHeaders = rawData[0].slice(8).map(m => m ? String(m).trim() : '');

const specDefs = [];
const uniqueModelsMap = {};

// Deduplicate Model Codes: Key is clean model code string
modelHeaders.forEach((mCode, colIdx) => {
  if (!mCode) return;
  const absColIdx = colIdx + 8;
  const cleanCode = mCode.trim();

  if (!uniqueModelsMap[cleanCode]) {
    let displayType = '4K TV';
    if (cleanCode.includes('OLED')) displayType = '4K OLED';
    else if (cleanCode.includes('MRGB')) displayType = '4K Micro RGB';
    else if (cleanCode.includes('QNED9') || cleanCode.includes('QNED8')) displayType = '4K QNED MiniLED';
    else if (cleanCode.includes('QNED')) displayType = '4K QNED';
    else if (cleanCode.includes('NANO') || cleanCode.includes('NU')) displayType = '4K NanoCell';

    let series = 'LG TV Series';
    if (cleanCode.includes('G6')) series = 'OLED G6 Series';
    else if (cleanCode.includes('C6')) series = 'OLED C6 Series';
    else if (cleanCode.includes('B6')) series = 'OLED B6 Series';
    else if (cleanCode.includes('M6')) series = 'OLED M6 Series';
    else if (cleanCode.includes('MRGB96')) series = 'Micro RGB 96 Series';
    else if (cleanCode.includes('MRGB9M')) series = 'Micro RGB 9M Series';
    else if (cleanCode.includes('MRGB8')) series = 'Micro RGB 8 Series';
    else if (cleanCode.includes('QNED93')) series = 'QNED 93 MiniLED Series';
    else if (cleanCode.includes('QNED87') || cleanCode.includes('QNED86') || cleanCode.includes('QNED85')) series = 'QNED 85/86/87 Series';
    else if (cleanCode.includes('QNED80') || cleanCode.includes('QNED70')) series = 'QNED 70/80 Series';

    uniqueModelsMap[cleanCode] = {
      code: cleanCode,
      name: cleanCode,
      displayType: displayType,
      series: series,
      colIndices: [absColIdx],
      specs: {}
    };
  } else {
    uniqueModelsMap[cleanCode].colIndices.push(absColIdx);
  }
});

// Iterate through spec rows starting at Row 3 (Index 3)
for (let r = 3; r < rawData.length; r++) {
  const row = rawData[r];
  if (!row || !row[0] || !row[2]) continue;

  const specId = String(row[0]).trim();
  const category = row[1] ? String(row[1]).trim() : 'GENERAL';
  const featureName = row[2] ? String(row[2]).trim() : '';
  const level = row[3] ? String(row[3]).trim() : '';
  const descKo = row[4] ? String(row[4]).trim() : '';
  const standardVal = row[5] ? String(row[5]).trim() : '';
  const descEn = row[6] ? String(row[6]).trim() : (descKo || '');

  specDefs.push({
    id: specId,
    category,
    feature: featureName,
    level,
    descKo,
    descEn,
    standardVal
  });

  // For each unique model, take the first non-empty spec value across its columns
  Object.keys(uniqueModelsMap).forEach(code => {
    const model = uniqueModelsMap[code];
    let foundVal = '-';
    
    for (let absColIdx of model.colIndices) {
      const cellVal = row[absColIdx];
      if (cellVal !== undefined && cellVal !== null && String(cellVal).trim() !== '' && String(cellVal).trim() !== '-') {
        foundVal = String(cellVal).trim();
        break;
      }
    }
    
    model.specs[specId] = {
      val: foundVal,
      category,
      feature: featureName
    };
  });
}

const modelsList = Object.values(uniqueModelsMap);

const resultData = {
  title: "2026 LG TV Specification Finder & Comparison Portal",
  version: "v7.5.0 1 (2026.06.24)",
  updatedAt: "2026-07-24",
  totalModels: modelsList.length,
  totalSpecs: specDefs.length,
  categories: Array.from(new Set(specDefs.map(s => s.category))),
  displayTypes: Array.from(new Set(modelsList.map(m => m.displayType))),
  specDefinitions: specDefs,
  models: modelsList
};

const outputDir = path.join(projDir, 'published', '2026-tv-spec-finder');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outputDir, 'specData.js'),
  `const SPEC_PORTAL_DATA = ${JSON.stringify(resultData, null, 2)};\nif (typeof module !== 'undefined' && module.exports) { module.exports = SPEC_PORTAL_DATA; }`
);

console.log(`Successfully generated deduplicated specData.js with ${modelsList.length} UNIQUE models and ${specDefs.length} specs!`);

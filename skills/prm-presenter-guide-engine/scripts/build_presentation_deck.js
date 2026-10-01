/**
 * build_presentation_deck.js
 * 추출된 슬라이드 및 발표자 노트 JSON을 프론트엔드용 slidesData.js로 가공/빌드하는 모듈
 */

const fs = require('fs');
const path = require('path');

function buildSlidesData(jsonFilePath, outputFilePath, metaOptions = {}) {
  if (!fs.existsSync(jsonFilePath)) {
    console.error(`Error: File not found: ${jsonFilePath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(jsonFilePath, 'utf8');
  const slides = JSON.parse(raw);

  const meta = {
    title: metaOptions.title || "2026 Europe Business Consultation Deck",
    subtitle: metaOptions.subtitle || "Executive Product Roadmap & Sales Strategy",
    version: metaOptions.version || "v1.0",
    totalSlides: slides.length,
    lastUpdated: new Date().toISOString().split('T')[0]
  };

  // 슬라이드 번호 기반 섹션 자동 그룹화 (또는 커스텀 지정)
  const sections = metaOptions.sections || [
    {
      id: "sec-1",
      title: "Part 1. Executive Summary & Market Status",
      subTitle: "Market Overview & Strategic Key Deliverables",
      slideIndices: slides.slice(0, Math.min(5, slides.length)).map(s => s.index)
    },
    {
      id: "sec-2",
      title: "Part 2. Product Roadmap & Lineup Innovation",
      subTitle: "Key Technologies & Series Breakdown",
      slideIndices: slides.slice(5).map(s => s.index)
    }
  ];

  const processedSlides = slides.map(s => {
    return {
      index: s.index,
      title: s.title || `Slide ${s.index}`,
      subTitle: s.subTitle || "Strategic Note",
      image: s.image || `slide${s.index}.jpg`,
      scriptEn: (s.scriptEn || "").trim(),
      scriptKo: (s.scriptKo || "").trim()
    };
  });

  const outputJs = `// ===================================================================
// Auto-generated Presentation Data
// Generated: ${new Date().toISOString()}
// ===================================================================

const presentationData = {
  meta: ${JSON.stringify(meta, null, 2)},
  sections: ${JSON.stringify(sections, null, 2)},
  slides: ${JSON.stringify(processedSlides, null, 2)}
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = presentationData;
}
`;

  fs.writeFileSync(outputFilePath, outputJs, 'utf8');
  console.log(`✅ slidesData.js successfully generated: ${outputFilePath} (${slides.length} slides)`);
}

// CLI 실행 지원
if (require.main === module) {
  const args = process.argv.slice(2);
  const input = args[0] || './output/slides_notes_extracted.json';
  const output = args[1] || './output/slidesData.js';
  buildSlidesData(input, output);
}

module.exports = { buildSlidesData };

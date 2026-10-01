const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname, '../published/2027-partner-growth-strategy/slidesData.js');
const rawCode = fs.readFileSync(srcPath, 'utf8');

// Load presentationData
const fn = new Function(rawCode + '\nreturn presentationData;');
const data = fn();

console.log('Original total slides:', data.slides.length);

// Extract old slides
const oldSlides = data.slides;

// Merged Slide 10
const mergedSlide10 = {
  index: 10,
  origPptIndex: 12,
  origPptLabel: "PPT p.12~14",
  title: "Living Room AI Agent: Conversational Voice Interaction",
  subTitle: "Interactive Avatar Agent Dialogue (p.10 / PPT p.12~14)",
  image: "slide12.jpg",
  hasVideo: true,
  videoUrl: "videos/slide12.mp4",
  animCount: 6,
  isDialogue: true,
  dialogueTurns: [
    {
      turn: 1,
      speaker: "ai",
      speakerNameEn: "LG AI",
      speakerNameKo: "LG AI",
      textEn: "Hi, Yeni! Looking great today!",
      textKo: "안녕하세요, 예니! 오늘 아주 멋져 보이네요!",
      pillCaption: "Hi Yeni! Looking great today!"
    },
    {
      turn: 2,
      speaker: "presenter",
      speakerNameEn: "Presenter (Yeni)",
      speakerNameKo: "발표자 (예니)",
      textEn: "Thanks, LG AI. We're here to introduce LG AI TV to our partners today. Can you help us make it memorable?",
      textKo: "고마워요, LG AI. 오늘 파트너분들께 LG AI TV를 소개해 드리려 하는데, 특별한 기억이 될 수 있도록 도와줄 수 있나요?",
      pillCaption: "Thanks, LG AI. Can you help us make today memorable?"
    },
    {
      turn: 3,
      speaker: "ai",
      speakerNameEn: "LG AI",
      speakerNameKo: "LG AI",
      textEn: "Absolutely! Why don't we show everyone how LG AI TV seamlessly works in the background to make everyday life easier and more enjoyable?",
      textKo: "물론이죠! LG AI TV가 일상 뒤에서 얼마나 자연스럽게 작동하며 하루를 더 편리하고 즐겁게 만들어주는지 직접 보여드리는 건 어떨까요?",
      pillCaption: "Absolutely! Why don't we show everyone how LG AI TV seamlessly works in the background to make everyday life easier and more enjoyable?"
    },
    {
      turn: 4,
      speaker: "presenter",
      speakerNameEn: "Presenter (Yeni)",
      speakerNameKo: "발표자 (예니)",
      textEn: "Sounds great. Instead of showing another slide, why don't we bring it to life with a short clip?",
      textKo: "좋은 생각이에요. 다음 슬라이드를 그냥 보여주기보다, 짧은 영상으로 생생하게 보여줄까요?",
      pillCaption: "Sounds great. Instead of showing another slide, why don't we bring it to life with a short clip?"
    },
    {
      turn: 5,
      speaker: "ai",
      speakerNameEn: "LG AI",
      speakerNameKo: "LG AI",
      textEn: "No problem.",
      textKo: "문제없죠. 바로 보여드릴게요.",
      pillCaption: "No problem."
    }
  ],
  scriptEn: "LG AI: “Hi, Yeni! Looking great today!”\r\n\r\nPresenter: “Thanks, LG AI. We're here to introduce LG AI TV to our partners today. Can you help us make it memorable?”\r\n\r\nLG AI: “Absolutely! Why don't we show everyone how LG AI TV seamlessly works in the background to make everyday life easier and more enjoyable?”\r\n\r\nPresenter: “Sounds great. Instead of showing another slide, why don't we bring it to life with a short clip?”\r\n\r\nLG AI: “No problem.”",
  scriptKo: "LG AI: \"안녕하세요, 예니! 오늘 아주 멋져 보이네요!\"\n\n발표자 (예니): \"고마워요, LG AI. 오늘 파트너분들께 LG AI TV를 소개해 드리려 하는데, 특별한 기억이 될 수 있도록 도와줄 수 있나요?\"\n\nLG AI: \"물론이죠! LG AI TV가 일상 뒤에서 얼마나 자연스럽게 작동하며 하루를 더 편리하고 즐겁게 만들어주는지 직접 보여드리는 건 어떨까요?\"\n\n발표자 (예니): \"좋은 생각이에요. 다음 슬라이드를 그냥 보여주기보다, 짧은 영상으로 생생하게 보여줄까요?\"\n\nLG AI: \"문제없죠. 바로 보여드릴게요.\""
};

// Build new slides array
const newSlides = [];

// Slides 1..9 (keep indices 1..9)
for (let i = 0; i < 9; i++) {
  newSlides.push(oldSlides[i]);
}

// Add merged Slide 10
newSlides.push(mergedSlide10);

// Old slides 13..74 (indices 13..74 in 1-based, which are slice(12))
for (let i = 12; i < oldSlides.length; i++) {
  const s = Object.assign({}, oldSlides[i]);
  s.index = s.index - 2; // re-index
  newSlides.push(s);
}

console.log('New total slides:', newSlides.length);
if (newSlides.length !== 72) {
  throw new Error(`Expected 72 slides, got ${newSlides.length}`);
}

// Update meta
data.meta.totalSlides = 72;
data.meta.animatedSlides = 52;
data.meta.lastUpdated = "2026-10-02";

// Update sections
data.sections = [
  {
    id: "sec-intro",
    title: "Executive Introduction & Agenda",
    subTitle: "Strategy Overview & 3-Part Framework (p.1~2 / PPT p.1, 4)",
    slideIndices: [1, 2]
  },
  {
    id: "sec-part1",
    title: "Part 1. Shifting TV Purchase Journey",
    subTitle: "Consumer Expectations, AI Search Trends & Market Opportunities (p.3~8 / PPT p.5~10)",
    slideIndices: [3, 4, 5, 6, 7, 8]
  },
  {
    id: "sec-part2",
    title: "Part 2. Powering Trusted Life Agent: LG AI TV Features & Experience",
    subTitle: "Yeni Avatar Agent, Everyday Scenarios, Home Sense & LG Shield (p.9~19 / PPT p.11~23)",
    slideIndices: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  },
  {
    id: "sec-part3",
    title: "Part 3. The Ultimate Purity of Color: LG OLED Leadership",
    subTitle: "Hyper Radiant Color Tech 27, Alpha 11, Gallery Design & 97\" OLED (p.20~43 / PPT p.24~47)",
    slideIndices: Array.from({ length: 24 }, (_, idx) => 20 + idx)
  },
  {
    id: "sec-part4",
    title: "Part 4. Beyond Limits: LG Micro RGB evo & Premium Lineup",
    subTitle: "Ultra Density Micro RGB, Pure RGB, 100\" Ultra Big Screen & QNED (p.44~67 / PPT p.48~71)",
    slideIndices: Array.from({ length: 24 }, (_, idx) => 44 + idx)
  },
  {
    id: "sec-part5",
    title: "Part 5. Appendix & Partner Growth Enablement",
    subTitle: "5-Year Warranty Expansion, Step Up Logic & Technical Spec Matrix (p.68~72 / PPT p.72~76)",
    slideIndices: [68, 69, 70, 71, 72]
  }
];

data.slides = newSlides;

// Generate final JS file content
const headerComment = `/**
 * 2027 LG TV & Partner Growth Strategy Presentation Data
 * Generated from '[Sharing] 2027 LG TV & Partner Growth Strategy_V1.0_260922.pptx'
 * Clean 72-slide structure with [원문 PPT p.X] cross-referencing, full-fidelity Korean/English scripts,
 * and unified interactive conversational dialogue engine (Slide 10 / PPT p.12~14).
 */

const presentationData = `;

const outCode = headerComment + JSON.stringify(data, null, 2) + ';\n';

fs.writeFileSync(srcPath, outCode, 'utf8');
console.log('Successfully wrote updated slidesData.js to:', srcPath);

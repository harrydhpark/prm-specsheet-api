/**
 * build_2027_slides_data.js
 * 2027 LG TV & Partner Growth Strategy - slidesData.js Builder
 * Generates polished presentationData structure for both published and public_firebase
 * Reflects deletion of Slide 2 and 3, sequential 1~74 renumbering, origPptIndex, and natural Korean scripts
 */

const fs = require('fs');
const path = require('path');
const { KOREAN_SPEECH_MAP } = require('./korean_speech_dataset');

const META_JSON = path.join(__dirname, '2027_slides_meta.json');
const PUB_OUT = path.join(__dirname, '../published/2027-partner-growth-strategy/slidesData.js');
const FB_OUT = path.join(__dirname, '../public_firebase/docs/2027-partner-growth-strategy/slidesData.js');

// Polished slide titles mapping by original PPT slide number
const TITLE_MAP = {
  1: "2027 LG TV & Partner Growth Strategy",
  4: "Executive Agenda: Shifting TV Purchase Journey",
  5: "2025: Hardware Specifications at the Center",
  6: "2026: The Shift to AI-Driven Questions & Value",
  7: "Search Trends: 5x Surge in AI TV Inquiries",
  8: "Consumer Focus: AI Features vs TV Fundamentals",
  9: "Consumer Voices: Recognition of AI Performance",
  10: "2027 Opportunity: The Trusted Life Agent",
  11: "Introducing LG AI TV Persona: Yeni",
  12: "Hi Yeni! Looking Great Today!",
  13: "LG AI Seamless Life Integration Experience",
  14: "Proactive Daily Assistant & Lifestyle Support",
  15: "Scenario 1: Mina Arrives Home (Welcome & Mood)",
  16: "Scenario 2: Alex Wakes Up (Morning Briefing & Routine)",
  17: "Wi-Fi Connected Living Experience",
  18: "1–7 Days After Purchase Experience",
  19: "LG AI Continuous Learning Engine",
  20: "Open Cast & Cross-Device Connectivity",
  21: "Contextual Situation Recognition",
  22: "Observing & Understanding Living Environments",
  23: "Trusted Security & Privacy Protection",
  24: "The Only Thing That Surpasses LG OLED is LG OLED",
  25: "CNET People's Choice Awards: Overwhelming Leadership",
  26: "Redefining Picture Quality & Spatial Design",
  27: "Perfect LG OLED, Evolved Again",
  28: "Hyper Radiant Color Tech 27: Complete Picture Quality",
  29: "Hyper Radiant Color Tech 27: Apex of Brightness & Color",
  30: "Reflection Free Technology & Glare Elimination",
  31: "100% Color Fidelity & Perfect Black",
  32: "Alpha 11 AI Processor 4K & Real-time Optimization",
  33: "RTINGS & Tom's Guide Best-in-Class Processing Recognition",
  34: "AI HDR Remastering Technology",
  35: "Dynamic Tone Mapping Ultra & Object Remastering Ultra",
  36: "AI Spatial Sound & Live Concert Stage Immersion",
  37: "AI Voice Remastering & Karaoke Mode",
  38: "World's First Creator Mode (Director's Intent)",
  39: "Flush Fit Gallery Design Architecture",
  40: "Tailored Collection: Essential Finishes & Spatial Harmony",
  41: "Purest Form of Spatial Design: Only Screen Remains",
  42: "LG OLED evo Lineup Architecture (G7 / C7 / B7)",
  43: "Expansive Viewing, Lasting Comfort — Eyesafe Certified",
  44: "5-Year Peace of Mind: OLED Panel Warranty",
  45: "Why LG OLED evo? Strategic Market Differentiation",
  46: "The Biggest, Brightest & Most Colorful 97” OLED TV",
  47: "Dolby Atmos FlexConnect Wireless Audio Integration",
  48: "Micro RGB evo: Revolutionary Light Source Innovation",
  49: "Pure Red, Pure Green, Pure Blue RGB Architecture",
  50: "World’s First & Only Ultra Density Micro RGB Technology",
  51: "Triple Crown Color Coverage Certified",
  52: "Alpha 11 AI Processor Light Control for Micro RGB",
  53: "Alpha 11 Gaming Experience & RPG Optimization",
  54: "Ultra Big Screen Dynamic & Powerful Sound",
  55: "Complete Cinema Experience across Every HDR Format",
  56: "Harmonic Blend Design: Seamless Spatial Fusion",
  57: "Ultra-Low Reflection Display for Big Screens",
  58: "Big Screen Comfort: Eyesafe Certified Display",
  59: "Why Micro RGB evo? Flagship Differentiation",
  60: "LG Micro RGB evo: The Highest-Rated Micro RGB",
  61: "LG Mini RGB evo: Proven Performance & Value",
  62: "Triple 100% Color Coverage with Alpha 11 AI",
  63: "Proprietary Alpha AI Processor Architecture",
  64: "100” Ultra Big Immersion with Vivid Colors",
  65: "AI Super Upscaling & Detail Enhancement",
  66: "Mini LED Display Technology & Dimming Precision",
  67: "Better Brightness Detail & Contrast Precision",
  68: "Linear Flow Design: Modern Aesthetics",
  69: "Nano Detail Enhancer with Alpha 6 AI Processor",
  70: "4K AI Upscaling & Picture Processing",
  71: "Endless Entertainment: Free to Enjoy on LG Channels",
  72: "Thank You & Partner Enablement",
  73: "5-Year Warranty Expansion to C Series",
  74: "2027 Lineup Step Up Logic & Transition Map",
  75: "Picture Quality Fundamental Spec Matrix",
  76: "QNED84C / Mass Premium Lineup Specifications"
};

const SUBTITLE_MAP = {
  1: "Keynote Strategy & Executive Summary",
  4: "3-Part Growth Framework",
  5: "Consumer Journey Shift (2025)",
  6: "AI Question Era (2026)",
  7: "Search Volume & Social Mentions Analysis",
  8: "AI Value Perception vs Hardware Specs",
  9: "Voice of Customer & Sentiment Analysis",
  10: "Strategic Roadmap to 2027",
  11: "LG AI TV Interactive Avatar Agent",
  12: "Conversational Natural Voice Interaction",
  13: "Living Room Lifestyle Integration",
  14: "Proactive Routine & Home Sense",
  15: "Evening Return Home Persona Scenario",
  16: "Morning Wake-Up Persona Scenario",
  17: "Zero-Setup Wireless Connectivity",
  18: "Onboarding & Habit Formation",
  19: "Edge AI & Cloud Intelligence",
  20: "Seamless Screen Sharing & Casting",
  21: "Vision & Ambient Sensor Integration",
  22: "Home Sense Spatial Awareness",
  23: "LG Shield Hardware-Level Security",
  24: "OLED Category Leadership",
  25: "Global Award Recognition & Reviews",
  26: "Evolution of Picture Quality & Form Factor",
  27: "OLED Technological Breakthrough",
  28: "Color Precision & Pure Emission",
  29: "Peak Luminance & Color Volume",
  30: "Anti-Reflective Coating & Contrast",
  31: "Intertek Certified Color Fidelity",
  32: "Alpha 11 Dual Neural Engine",
  33: "Benchmark Analysis vs Competitors",
  34: "Frame-by-Frame AI Dynamic Mapping",
  35: "Pixel-Level Object Depth Enhancement",
  36: "11.1.2 Virtual Surround Sound",
  37: "Vocal Isolation & Party Mode",
  38: "Filmmaker Mode & D65 White Point",
  39: "Zero-Gap Wall Mount Innovation",
  40: "Custom Bezel & Material Options",
  41: "Bezel-Less Floating Screen Aesthetic",
  42: "Premium Portfolio Hierarchy",
  43: "TUV / UL Low Blue Light Certification",
  44: "Comprehensive Panel Coverage Guarantee",
  45: "Competitive Advantages & Sell-In Points",
  46: "Super-Sized Flagship OLED Experience",
  47: "Multi-Channel Wireless Sound Innovation",
  48: "RGB Inorganic Light Emitting Architecture",
  49: "Independent Subpixel Color Control",
  50: "Micro-Pitch LED Matrix Engineering",
  51: "DCI-P3, BT.2020 & Adobe RGB Certified",
  52: "Micro-Dimming Alpha 11 Optimization",
  53: "Low Latency & High Refresh Gaming",
  54: "Integrated High-Power Multi-Channel Speakers",
  55: "Dolby Vision, HDR10 & HLG Compatibility",
  56: "Architecture-Inspired Living Room Blending",
  57: "Wide Viewing Angle & Anti-Glare Tech",
  58: "Flicker-Free Eye Comfort Display",
  59: "Commercial & Retail Strategy Highlights",
  60: "Industry Reviewer Praises & Accolades",
  61: "Mainstream Premium Value Proposition",
  62: "Wide Color Gamut & Processor Synergy",
  63: "Alpha AI Chipset Comparison",
  64: "Cinema-Grade Scale & Immersive Field of View",
  65: "Deep Learning Resolution Reconstruction",
  66: "Quantum Dot + NanoCell + Mini LED Backlight",
  67: "Precision Dimming Zones & Local Contrast",
  68: "Slim Silhouette & Minimalist Stand",
  69: "Alpha 6 AI 4K Processor Capabilities",
  70: "Intelligent Noise Reduction & Clarity",
  71: "Ad-Supported FAST Platform with 300+ Channels",
  72: "Strategic Partnership Summary",
  73: "Warranty Extension Terms & Retail Benefits",
  74: "Model Migration & Upselling Guide",
  75: "Tiered Technology & Performance Grid",
  76: "Detailed Technical Specifications"
};

function build() {
  if (!fs.existsSync(META_JSON)) {
    console.log(`Waiting for ${META_JSON}...`);
    return false;
  }

  let raw = fs.readFileSync(META_JSON, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF) {
    raw = raw.slice(1);
  }
  const rawSlides = JSON.parse(raw);

  // Filter out Slide 2 (Version History) and Slide 3 (Confidentiality Notice)
  const filtered = rawSlides.filter(s => s.index !== 2 && s.index !== 3);

  // Renumber sequentially 1 to 74
  const processedSlides = filtered.map((s, idx) => {
    const newIndex = idx + 1;
    const origIndex = s.index;
    const title = TITLE_MAP[origIndex] || s.title || `Slide ${origIndex}`;
    const subTitle = SUBTITLE_MAP[origIndex] || s.subTitle || (s.hasVideo ? "Animated Motion Slide" : "Executive Strategy");
    const scriptKo = KOREAN_SPEECH_MAP[origIndex] || (s.scriptKo || "").trim();

    return {
      index: newIndex,
      origPptIndex: origIndex,
      origPptLabel: `PPT p.${origIndex}`,
      title: title.trim(),
      subTitle: subTitle.trim(),
      image: `slide${origIndex}.jpg`,
      hasVideo: !!s.hasVideo,
      videoUrl: s.hasVideo ? `videos/slide${origIndex}.mp4` : null,
      animCount: s.animCount || 0,
      scriptEn: (s.scriptEn || "").trim(),
      scriptKo: scriptKo.trim()
    };
  });

  const meta = {
    title: "2027 LG TV & Partner Growth Strategy",
    subtitle: "Executive Product Roadmap & Business Expansion Plan",
    version: "V1.0",
    totalSlides: processedSlides.length,
    animatedSlides: processedSlides.filter(s => s.hasVideo).length,
    lastUpdated: "2026-10-01"
  };

  // Structured Sections with new sequential indices
  const sections = [
    {
      id: "sec-intro",
      title: "Executive Introduction & Agenda",
      subTitle: "Strategy Overview & 3-Part Framework (p.1~2 / PPT p.1, 4)",
      slideIndices: processedSlides.filter(s => s.origPptIndex >= 1 && s.origPptIndex <= 4).map(s => s.index)
    },
    {
      id: "sec-part1",
      title: "Part 1. Shifting TV Purchase Journey",
      subTitle: "Consumer Expectations, AI Search Trends & Market Opportunities (p.3~8 / PPT p.5~10)",
      slideIndices: processedSlides.filter(s => s.origPptIndex >= 5 && s.origPptIndex <= 10).map(s => s.index)
    },
    {
      id: "sec-part2",
      title: "Part 2. Powering Trusted Life Agent: LG AI TV Features & Experience",
      subTitle: "Yeni Avatar Agent, Everyday Scenarios, Home Sense & LG Shield (p.9~21 / PPT p.11~23)",
      slideIndices: processedSlides.filter(s => s.origPptIndex >= 11 && s.origPptIndex <= 23).map(s => s.index)
    },
    {
      id: "sec-part3",
      title: "Part 3. The Ultimate Purity of Color: LG OLED Leadership",
      subTitle: "Hyper Radiant Color Tech 27, Alpha 11, Gallery Design & 97\" OLED (p.22~45 / PPT p.24~47)",
      slideIndices: processedSlides.filter(s => s.origPptIndex >= 24 && s.origPptIndex <= 47).map(s => s.index)
    },
    {
      id: "sec-part4",
      title: "Part 4. Beyond Limits: LG Micro RGB evo & Premium Lineup",
      subTitle: "Ultra Density Micro RGB, Pure RGB, 100\" Ultra Big Screen & QNED (p.46~69 / PPT p.48~71)",
      slideIndices: processedSlides.filter(s => s.origPptIndex >= 48 && s.origPptIndex <= 71).map(s => s.index)
    },
    {
      id: "sec-part5",
      title: "Part 5. Appendix & Partner Growth Enablement",
      subTitle: "5-Year Warranty Expansion, Step Up Logic & Technical Spec Matrix (p.70~74 / PPT p.72~76)",
      slideIndices: processedSlides.filter(s => s.origPptIndex >= 72 && s.origPptIndex <= 76).map(s => s.index)
    }
  ];

  const jsContent = `// ===================================================================
// 2027 LG TV & Partner Growth Strategy - Presentation Dataset
// Generated: ${new Date().toISOString()}
// Total Slides: ${processedSlides.length} (Deleted Slide 2 & 3, Re-indexed 1~74)
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

  // Write to published directory
  fs.writeFileSync(PUB_OUT, jsContent, 'utf8');

  // Ensure public_firebase target directory exists and write
  const fbDir = path.dirname(FB_OUT);
  if (!fs.existsSync(fbDir)) {
    fs.mkdirSync(fbDir, { recursive: true });
  }
  fs.writeFileSync(FB_OUT, jsContent, 'utf8');

  console.log(`✅ slidesData.js built successfully for both published and public_firebase (${processedSlides.length} slides)`);
  return true;
}

if (require.main === module) {
  build();
}

module.exports = { build };

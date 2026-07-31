const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const { parsePdfPresentation } = require('./pdfParser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// Directories
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const PUBLISHED_DIR = path.join(__dirname, 'published');
const PUBLIC_DIR = path.join(__dirname, 'public');

fs.ensureDirSync(UPLOADS_DIR);
fs.ensureDirSync(PUBLISHED_DIR);

// Serve static agent UI
app.use(express.static(PUBLIC_DIR));
// Serve published site assets
app.use('/published', express.static(PUBLISHED_DIR));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Sample LGE TV Product Presentation Data Generator
function getSamplePresentationData() {
  return {
    meta: {
      title: "2026 LG OLED TV G6 & M6 Series Product Showcase",
      subtitle: "LGE Global TV Sales & Marketing Training Deck",
      author: "LGE HQ TV Europe Sales Dept.",
      date: "2026-07-23",
      category: "TV Business Division",
      version: "v1.1",
      securityTag: "LGE INTRANET ONLY (CONFIDENTIAL)"
    },
    sections: [
      {
        id: "sec-1",
        title: "1. Overview & Market Strategy",
        subTitle: "2026 Premium TV Market Dynamics",
        slides: ["slide-1", "slide-2"]
      },
      {
        id: "sec-2",
        title: "2. Key Product Innovations",
        subTitle: "Alpha 12 AI Processor & Brightness Booster Max",
        slides: ["slide-3", "slide-4", "slide-5"]
      },
      {
        id: "sec-3",
        title: "3. Lineup Specs & Model Comparison",
        subTitle: "OLED G6 vs M6 Wireless vs C6 Specs",
        slides: ["slide-6", "slide-7", "slide-8"]
      },
      {
        id: "sec-4",
        title: "4. Commercial & Sales Enablement",
        subTitle: "Retail Display Guide & Battle Card",
        slides: ["slide-9", "slide-10"]
      }
    ],
    slides: [
      {
        id: "slide-1",
        sectionId: "sec-1",
        sectionTitle: "1. Overview & Market Strategy",
        title: "Executive Summary: 2026 TV Market Strategy",
        type: "hero",
        badge: "STRATEGY",
        content: [
          "LG OLED maintains #1 Global Market Leadership for 13 Consecutive Years.",
          "Targeting 45%+ Share in Ultra-Large (77\"+) Premium Segment across European Subsidiaries.",
          "Dual-Pillar Strategy: OLED evo G6/M6 for Hyper-Premium, C6 Series for Mass-Premium Volume Expansion.",
          "Enhanced Synergy with webOS 26 Ecosystem & Personalised AI Concierge."
        ],
        metrics: [
          { label: "OLED M/S Target", value: "62%", change: "+4.2% YoY" },
          { label: "77\"+ Sales Ratio", value: "38%", change: "+8.5% YoY" },
          { label: "AI Feature Usage", value: "89%", change: "New Record" }
        ],
        notes: "Highlight LG's unbroken 13-year #1 streak to build confidence with retail buyers and local sales reps."
      },
      {
        id: "slide-2",
        sectionId: "sec-1",
        sectionTitle: "1. Overview & Market Strategy",
        title: "Key Market Drivers in European Territories",
        type: "cards",
        badge: "MARKET INSIGHT",
        cards: [
          {
            title: "Demand for Zero-Gap Design",
            desc: "74% of European premium TV buyers prefer flush wall-mounting without exposed cables."
          },
          {
            title: "AI Picture Customization",
            desc: "AI Picture Pro 4K upscale & Director's Tone Auto-Calibrator recognized as top purchase decision factor."
          },
          {
            title: "Gaming & High Refresh Rate",
            desc: "4K 165Hz VRR support attracts next-gen PC and console gamers seeking sub-0.1ms response times."
          }
        ],
        notes: "Use this slide when presenting to European key accounts like MediaMarkt, Fnac, and Currys."
      },
      {
        id: "slide-3",
        sectionId: "sec-2",
        sectionTitle: "2. Key Product Innovations",
        title: "Alpha 12 AI Processor: Quantum Leap in Picture & Sound",
        type: "features",
        badge: "TECHNOLOGY",
        content: [
          "4x Faster AI Processing Power compared to previous Gen 7 engines.",
          "AI Super Upscaling Pro: Real-time noise removal & facial detail enhancement per frame.",
          "AI Sound Pro 11.1.2 Virtual Surround: Acoustic Spatial Calibration matching room acoustics."
        ],
        highlights: [
          "NPU Performance +300%",
          "GPU Speed +150%",
          "Memory Bandwidth 48GB/s"
        ],
        notes: "Emphasize that the Alpha 12 processor is exclusive to G6 & M6 flagship models."
      },
      {
        id: "slide-4",
        sectionId: "sec-2",
        sectionTitle: "2. Key Product Innovations",
        title: "Brightness Booster Max: Up to 150% Brighter Peak Light",
        type: "hero",
        badge: "DISPLAY ENGINE",
        content: [
          "Micro Lens Array (MLA 3.0) Optical Architecture concentrates light output directly toward viewer.",
          "Heat Control Architecture: Advanced metal heat sink enables continuous high-peak luminescence.",
          "Vivid 100% Color Volume verified by Intertek for true-to-life HDR color reproduction."
        ],
        metrics: [
          { label: "Peak Brightness", value: "3,300 nits", change: "Highest in Class" },
          { label: "Reflective Glare", value: "< 0.9%", change: "Ultra Anti-Glare" }
        ],
        notes: "Demonstrate side-by-side anti-glare advantage under bright showroom ambient lighting."
      },
      {
        id: "slide-5",
        sectionId: "sec-2",
        sectionTitle: "2. Key Product Innovations",
        title: "Zero Connect Box: 4K 165Hz True Wireless Freedom",
        type: "cards",
        badge: "WIRELESS AV",
        cards: [
          {
            title: "Zero Cable Distraction",
            desc: "All source devices (HDMI 2.1, Soundbar, Consoles) plug into Zero Connect Box up to 10 meters away."
          },
          {
            title: "Ultra-Low Latency",
            desc: "Proprietary 60GHz wireless transmission protocol ensures zero lag for 4K 165Hz HDR gaming."
          },
          {
            title: "One Wall Design",
            desc: "Ultra-slim 19.9mm chassis mounts flush against the wall like a picture frame in a museum."
          }
        ],
        notes: "M6 wireless box transmission requires direct line-of-sight toward TV receiver antenna."
      },
      {
        id: "slide-6",
        sectionId: "sec-3",
        sectionTitle: "3. Lineup Specs & Model Comparison",
        title: "2026 LG TV Product Lineup Matrix",
        type: "grid",
        badge: "LINEUP MATRIX",
        table: {
          headers: ["Series", "Sizes Available", "Processor", "Design / Wall-mount", "Target Audience"],
          rows: [
            ["OLED M6 Wireless", "97\", 83\", 77\", 65\"", "Alpha 12 AI Pro", "Zero Gap Flush + Wireless Box", "Hyper-Luxury / Architects"],
            ["OLED G6 evo", "97\", 83\", 77\", 65\", 55\"", "Alpha 12 AI Pro", "One Wall Flush Mount", "Premium Home Theater Enthusiasts"],
            ["OLED C6 evo", "83\", 77\", 65\", 55\", 48\", 42\"", "Alpha 9 AI Pro", "Ultra Slim Gallery Stand", "Mass Premium & Hardcore Gamers"],
            ["QNED 99T 8K", "86\", 75\"", "Alpha 9 AI 8K", "Minimal Bezel", "Bright Living Rooms / Sports Fans"]
          ]
        },
        notes: "Ensure local sales reps focus 77\" and 83\" size recommendations for European luxury residences."
      },
      {
        id: "slide-7",
        sectionId: "sec-3",
        sectionTitle: "3. Lineup Specs & Model Comparison",
        title: "Detailed Spec Sheet: OLED G6 vs OLED M6",
        type: "cards",
        badge: "SPEC COMPARISON",
        cards: [
          {
            title: "LG OLED evo G6",
            desc: "• Panel: 4K MLA OLED 3.0\n• Refresh Rate: 165Hz VRR\n• Processor: Alpha 12 AI\n• Speaker: 60W 4.2ch Down-Firing\n• Wall Mount: Flush Mount Included"
          },
          {
            title: "LG OLED M6 Wireless",
            desc: "• Panel: 4K MLA OLED 3.0\n• Refresh Rate: 165Hz VRR\n• Processor: Alpha 12 AI\n• AV Transmission: Wireless Zero Connect Box\n• Wall Mount: Zero-Gap Flush Mount"
          }
        ],
        notes: "Note that both models feature identical picture processing, but M6 adds wireless AV convenience."
      },
      {
        id: "slide-8",
        sectionId: "sec-3",
        sectionTitle: "3. Lineup Specs & Model Comparison",
        title: "webOS 26 Smart Platform Key Features",
        type: "features",
        badge: "SOFTWARE",
        content: [
          "Re:New Program: Guaranteed 5 years of webOS OS version upgrades.",
          "Voice ID & AI Hands-free Voice Control: Recognizes user identity to customize home screen recommendations.",
          "Matter & LG ThinQ Smart Home Hub: Full control of IoT appliances directly on TV screen."
        ],
        highlights: [
          "5-Year webOS Upgrades",
          "Voice ID Profile Switching",
          "Matter Native Support"
        ],
        notes: "Highlight the webOS Re:New Program as a key differentiator against competitor OS obsolescence."
      },
      {
        id: "slide-9",
        sectionId: "sec-4",
        sectionTitle: "4. Commercial & Sales Enablement",
        title: "Retail Floor Display & Merchandising Guide",
        type: "cards",
        badge: "RETAIL GUIDE",
        cards: [
          {
            title: "Zone 1: Premium OLED Wall",
            desc: "Place G6/M6 flush mounted on dark slate wooden backdrop with active ambient halo LED lighting."
          },
          {
            title: "Zone 2: Wireless AV Demo Counter",
            desc: "Demonstrate Zero Connect Box by placing transmitter 5 meters away with interactive source switching button."
          },
          {
            title: "Zone 3: AI Picture & Gaming Pod",
            desc: "Set up PS5 / Gaming PC streaming 4K 165Hz VRR to showcase zero motion blur."
          }
        ],
        notes: "Store display setup guides must be distributed to regional store managers prior to Q3 launch."
      },
      {
        id: "slide-10",
        sectionId: "sec-4",
        sectionTitle: "4. Commercial & Sales Enablement",
        title: "Competitive Battle Card: Why Choose LG OLED",
        type: "hero",
        badge: "BATTLE CARD",
        content: [
          "Superior Black Levels: Self-lit pixels deliver perfect absolute black vs QD-OLED bloom.",
          "13 Years proven Reliability & Panel Protection Technology with 5-Year Panel Warranty.",
          "Dolby Vision & Dolby Atmos with Filmmaker Mode Precision Detail.",
          "Comprehensive Gaming Certification: G-Sync, FreeSync Premium Pro, HGIG, 4x HDMI 2.1 Full Bandwidth."
        ],
        metrics: [
          { label: "Panel Warranty", value: "5 Years", change: "Industry Leading" },
          { label: "Response Time", value: "0.1 ms", change: "Instant Pixel State" }
        ],
        notes: "End presentation with Q&A session and distribute local marketing co-op funds collateral."
      }
    ],
    videos: [
      {
        id: "vid-1",
        title: "2026 LG OLED evo G6 Official Brand Film",
        desc: "High-definition product introduction video showcasing Brightness Booster Max and One Wall Design aesthetics.",
        category: "Product Trailer",
        duration: "02:15",
        tags: ["G6", "OLED evo", "Product Trailer"],
        fileName: "g6_official_brand_film.mp4",
        poster: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      },
      {
        id: "vid-2",
        title: "Zero Connect Wireless Box Tech Demonstration",
        desc: "In-depth engineering video demonstrating 4K 165Hz zero-latency wireless AV transmission.",
        category: "Tech Deep-Dive",
        duration: "03:40",
        tags: ["M6", "Wireless", "Zero Connect"],
        fileName: "zero_connect_wireless_tech.mp4",
        poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      },
      {
        id: "vid-3",
        title: "Alpha 12 AI Processor Picture & Sound Demo",
        desc: "Visual comparison showing real-time AI Upscaling Pro and 11.1.2 Surround Sound calibration.",
        category: "Feature Demo",
        duration: "01:50",
        tags: ["Alpha 12", "AI Processor", "Audio/Visual"],
        fileName: "alpha12_ai_processor_demo.mp4",
        poster: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      },
      {
        id: "vid-4",
        title: "European Retail Display & Setup Guide",
        desc: "Step-by-step guidance for instore POS installation, wall-mounting bracket, and demo loop configuration.",
        category: "Retail Training",
        duration: "04:10",
        tags: ["Retail", "Store Display", "Training"],
        fileName: "european_retail_setup_guide.mp4",
        poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      }
    ]
  };
}

// API Routes

// GET Sample Data
app.get('/api/sample', (req, res) => {
  try {
    const data = getSamplePresentationData();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET Parse Specific Uploaded PDF File (e.g. 2026 TV Product Profile_v1.6_260529 배포.pdf)
app.get('/api/load-profile-pdf', async (req, res) => {
  try {
    const pdfPath = path.join(UPLOADS_DIR, '2026 TV Product Profile_v1.6_260529 배포.pdf');
    if (!await fs.pathExists(pdfPath)) {
      return res.status(404).json({ success: false, message: 'PDF file not found in uploads' });
    }
    const data = await parsePdfPresentation(pdfPath);
    res.json({ success: true, data });
  } catch (err) {
    console.error("PDF parse error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST File Upload Parsing (PDF / PPTX / MP4)
app.post('/api/upload', upload.fields([
  { name: 'pptFile', maxCount: 1 },
  { name: 'videoFiles', maxCount: 10 }
]), async (req, res) => {
  try {
    const files = req.files;
    const pptFile = files.pptFile ? files.pptFile[0] : null;
    const videoFiles = files.videoFiles || [];

    let baseData;
    if (pptFile && pptFile.originalname.endsWith('.pdf')) {
      baseData = await parsePdfPresentation(pptFile.path);
    } else {
      baseData = getSamplePresentationData();
      if (pptFile) {
        baseData.meta.title = pptFile.originalname.replace(/\.[^/.]+$/, "");
      }
    }

    if (videoFiles.length > 0) {
      const parsedVideos = videoFiles.map((v, idx) => ({
        id: `vid-up-${idx + 1}`,
        title: v.originalname.replace(/\.[^/.]+$/, ""),
        desc: `Uploaded video asset (${(v.size / (1024 * 1024)).toFixed(1)} MB). Direct streaming supported.`,
        category: "Uploaded Media",
        duration: "02:30",
        tags: ["Uploaded", "MP4"],
        fileName: v.filename,
        poster: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80",
        url: `/uploads/${v.filename}`
      }));
      baseData.videos = parsedVideos;
    }

    res.json({
      success: true,
      message: `Parsed file ${pptFile ? pptFile.originalname : ''} successfully!`,
      data: baseData
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Serve uploads directly
app.use('/uploads', express.static(UPLOADS_DIR));

// Helper function to build published standalone HTML site
function generatePublishedHtml(siteData) {
  const jsonData = JSON.stringify(siteData);

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${siteData.meta.title || 'LGE Product Introduction Site'}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --lge-red: #C40030;
      --lge-red-hover: #A00027;
      --primary-slate: #0F172A;
      --secondary-slate: #1E293B;
      --accent-teal: #0D9488;
      --accent-blue: #3B82F6;
      --bg-canvas: #090D16;
      --card-bg: rgba(30, 41, 59, 0.7);
      --card-border: rgba(255, 255, 255, 0.1);
      --text-main: #F8FAFC;
      --text-muted: #94A3B8;
      --font-headline: 'IBM Plex Sans', sans-serif;
      --font-body: 'Inter', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-body);
      background-color: var(--bg-canvas);
      color: var(--text-main);
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* Top Intranet Security Header */
    .pub-header {
      height: 56px;
      background: rgba(15, 23, 42, 0.95);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      backdrop-filter: blur(12px);
      z-index: 100;
    }
    .pub-brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .pub-logo {
      background: var(--lge-red);
      color: #fff;
      font-weight: 800;
      font-size: 14px;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 1px;
    }
    .pub-title-box h1 {
      font-family: var(--font-headline);
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
    .pub-title-box p {
      font-size: 12px;
      color: var(--text-muted);
    }
    .pub-security-tag {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(196, 0, 48, 0.15);
      border: 1px solid rgba(196, 0, 48, 0.4);
      color: #FF6B81;
      font-size: 11px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 20px;
      letter-spacing: 0.5px;
    }

    /* Dual Tab Navigation Header */
    .tab-bar {
      display: flex;
      background: #0F172A;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0 24px;
      gap: 16px;
    }
    .tab-btn {
      background: none;
      border: none;
      color: var(--text-muted);
      font-family: var(--font-headline);
      font-size: 14px;
      font-weight: 600;
      padding: 14px 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
    }
    .tab-btn:hover {
      color: #fff;
    }
    .tab-btn.active {
      color: #fff;
      border-bottom-color: var(--lge-red);
      background: rgba(196, 0, 48, 0.08);
    }
    .tab-btn .badge-count {
      background: rgba(255, 255, 255, 0.15);
      font-size: 11px;
      padding: 2px 7px;
      border-radius: 10px;
      color: #fff;
    }
    .tab-btn.active .badge-count {
      background: var(--lge-red);
    }

    /* Main Container */
    .pub-body {
      flex: 1;
      display: flex;
      overflow: hidden;
      position: relative;
    }

    /* Slide View Tab Layout */
    .slide-tab-content {
      display: flex;
      width: 100%;
      height: 100%;
    }

    /* Smart TOC Sidebar */
    .pub-sidebar {
      width: 320px;
      background: #0D1322;
      border-right: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    .toc-header {
      padding: 16px 20px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      color: var(--accent-teal);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      text-transform: uppercase;
    }
    .toc-section {
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }
    .toc-section-title {
      padding: 12px 20px 8px;
      font-size: 13px;
      font-weight: 700;
      color: #E2E8F0;
    }
    .toc-slide-item {
      padding: 8px 20px 8px 36px;
      font-size: 12px;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.15s ease;
    }
    .toc-slide-item:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
    }
    .toc-slide-item.active {
      background: rgba(196, 0, 48, 0.15);
      color: #fff;
      font-weight: 600;
      border-left: 3px solid var(--lge-red);
    }

    /* Main Slide Canvas */
    .pub-canvas {
      flex: 1;
      background: radial-gradient(circle at 50% 30%, #151F33 0%, #080C14 100%);
      display: flex;
      flex-direction: column;
      padding: 32px;
      overflow-y: auto;
      position: relative;
    }
    .slide-card-wrapper {
      max-width: 1000px;
      margin: 0 auto;
      width: 100%;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      backdrop-filter: blur(16px);
      min-height: 520px;
      display: flex;
      flex-direction: column;
    }
    .slide-badge {
      display: inline-block;
      align-self: flex-start;
      background: rgba(13, 148, 136, 0.2);
      border: 1px solid var(--accent-teal);
      color: #2DD4BF;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 16px;
    }
    .slide-title {
      font-family: var(--font-headline);
      font-size: 28px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 24px;
      line-height: 1.3;
    }
    .slide-content-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 32px;
    }
    .slide-content-bullets li {
      position: relative;
      padding-left: 24px;
      font-size: 16px;
      color: #CBD5E1;
      line-height: 1.6;
    }
    .slide-content-bullets li::before {
      content: '■';
      position: absolute;
      left: 0;
      color: var(--lge-red);
      font-size: 12px;
      top: 2px;
    }

    /* Metric Grid Cards */
    .metric-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: auto;
    }
    .metric-card {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 16px 20px;
    }
    .metric-label {
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 6px;
    }
    .metric-val {
      font-family: var(--font-mono);
      font-size: 24px;
      font-weight: 700;
      color: #fff;
    }
    .metric-change {
      font-size: 11px;
      color: #34D399;
      margin-top: 4px;
    }

    /* Feature / Card Grid */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .sub-bento-card {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 20px;
    }
    .sub-bento-title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 10px;
    }
    .sub-bento-desc {
      font-size: 13px;
      color: #94A3B8;
      line-height: 1.5;
      white-space: pre-line;
    }

    /* Bottom Control Bar */
    .canvas-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
    .nav-btn {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s;
    }
    .nav-btn:hover {
      background: var(--lge-red);
      border-color: var(--lge-red);
    }
    .slide-counter {
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--text-muted);
    }
    .notes-btn {
      background: rgba(13, 148, 136, 0.2);
      border: 1px solid var(--accent-teal);
      color: #2DD4BF;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    /* Video Library Tab Layout */
    .video-tab-content {
      display: none;
      width: 100%;
      height: 100%;
      padding: 32px 40px;
      overflow-y: auto;
    }
    .video-tab-content.active {
      display: block;
    }
    .video-header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 28px;
    }
    .video-header-title h2 {
      font-family: var(--font-headline);
      font-size: 22px;
      font-weight: 700;
      color: #fff;
    }
    .video-header-title p {
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 4px;
    }
    .video-filter-bar {
      display: flex;
      gap: 10px;
    }
    .filter-chip {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #94A3B8;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-chip.active, .filter-chip:hover {
      background: var(--lge-red);
      color: #fff;
      border-color: var(--lge-red);
    }

    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }
    .video-card {
      background: #0D1322;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 14px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .video-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.6);
      border-color: rgba(196, 0, 48, 0.5);
    }
    .video-thumb-box {
      position: relative;
      width: 100%;
      height: 180px;
      overflow: hidden;
      background: #000;
    }
    .video-thumb-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.85;
      transition: transform 0.3s;
    }
    .video-card:hover .video-thumb-img {
      transform: scale(1.05);
      opacity: 1;
    }
    .play-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      background: rgba(196, 0, 48, 0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 18px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    }
    .duration-badge {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: rgba(0,0,0,0.8);
      color: #fff;
      font-family: var(--font-mono);
      font-size: 11px;
      padding: 3px 7px;
      border-radius: 4px;
    }
    .video-info-box {
      padding: 18px;
    }
    .video-cat {
      font-size: 11px;
      color: var(--accent-teal);
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .video-card-title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
      line-height: 1.4;
    }
    .video-card-desc {
      font-size: 12px;
      color: #94A3B8;
      line-height: 1.5;
    }

    /* Video Player Modal */
    .video-modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.85);
      backdrop-filter: blur(8px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .video-modal.active {
      display: flex;
    }
    .modal-content {
      background: #0F172A;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      max-width: 900px;
      width: 100%;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0,0,0,0.8);
    }
    .modal-player-box {
      width: 100%;
      background: #000;
      aspect-ratio: 16/9;
    }
    .modal-player-box video {
      width: 100%;
      height: 100%;
      outline: none;
    }
    .modal-body {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .modal-info h3 {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
    }
    .modal-info p {
      font-size: 13px;
      color: #94A3B8;
    }
    .close-modal-btn {
      background: rgba(255,255,255,0.1);
      border: none;
      color: #fff;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    }

    /* Speaker Notes Modal */
    .notes-modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .notes-modal.active { display: flex; }
    .notes-box {
      background: #1E293B;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 14px;
      max-width: 550px;
      width: 90%;
      padding: 24px;
      color: #fff;
    }
  </style>
</head>
<body>

  <!-- Top Intranet Security Header -->
  <header class="pub-header">
    <div class="pub-brand">
      <span class="pub-logo">LG</span>
      <div class="pub-title-box">
        <h1>${siteData.meta.title || 'LGE Product Showcase'}</h1>
        <p>${siteData.meta.subtitle || 'Global Sales & Marketing Agent Site'}</p>
      </div>
    </div>
    <div class="pub-security-tag">
      <span>🔒</span>
      <span>${siteData.meta.securityTag || 'LGE INTRANET ONLY (CONFIDENTIAL)'}</span>
    </div>
  </header>

  <!-- Dual Tab Navigation Bar -->
  <nav class="tab-bar">
    <button class="tab-btn active" id="btn-slide-tab" onclick="switchTab('slides')">
      <span>📺 제품 슬라이드 (HTML Deck)</span>
      <span class="badge-count" id="slide-count-badge">${siteData.slides ? siteData.slides.length : 0}</span>
    </button>
    <button class="tab-btn" id="btn-video-tab" onclick="switchTab('videos')">
      <span>🎬 동영상 라이브러리 (Video Gallery)</span>
      <span class="badge-count" id="video-count-badge">${siteData.videos ? siteData.videos.length : 0}</span>
    </button>
  </nav>

  <!-- Main View Container -->
  <div class="pub-body">

    <!-- TAB 1: SLIDE VIEW -->
    <div class="slide-tab-content" id="tab-slides">
      <!-- Smart TOC Sidebar -->
      <aside class="pub-sidebar" id="toc-sidebar">
        <div class="toc-header">Smart TOC (목차)</div>
        <div id="toc-list-container"></div>
      </aside>

      <!-- Main Slide Canvas -->
      <main class="pub-canvas">
        <div class="slide-card-wrapper" id="slide-canvas-card">
          <!-- Rendered dynamically -->
        </div>

        <div class="canvas-controls">
          <button class="nav-btn" onclick="prevSlide()">◀ 이전 슬라이드</button>
          <div class="slide-counter" id="slide-counter-text">1 / 10</div>
          <button class="notes-btn" onclick="showNotesModal()">📝 발표자 노트</button>
          <button class="nav-btn" onclick="nextSlide()">다음 슬라이드 ▶</button>
        </div>
      </main>
    </div>

    <!-- TAB 2: VIDEO LIBRARY VIEW -->
    <div class="video-tab-content" id="tab-videos">
      <div class="video-header-bar">
        <div class="video-header-title">
          <h2>제품 시연 & 기술 동영상 라이브러리</h2>
          <p>고화질 MP4 동영상을 웹에서 직접 스트리밍 및 재생할 수 있습니다.</p>
        </div>
        <div class="video-filter-bar">
          <button class="filter-chip active" onclick="filterVideos('all')">전체</button>
          <button class="filter-chip" onclick="filterVideos('Product Trailer')">트레일러</button>
          <button class="filter-chip" onclick="filterVideos('Tech Deep-Dive')">기술 데모</button>
          <button class="filter-chip" onclick="filterVideos('Retail Training')">매장 교육</button>
        </div>
      </div>

      <div class="video-grid" id="video-grid-container">
        <!-- Rendered dynamically -->
      </div>
    </div>

  </div>

  <!-- Video Player Modal -->
  <div class="video-modal" id="video-modal" onclick="closeVideoModal(event)">
    <div class="modal-content" onclick="event.stopPropagation()">
      <div class="modal-player-box">
        <video id="modal-video-element" controls autoplay crossorigin="anonymous"></video>
      </div>
      <div class="modal-body">
        <div class="modal-info">
          <h3 id="modal-video-title">Video Title</h3>
          <p id="modal-video-desc">Video description goes here...</p>
        </div>
        <button class="close-modal-btn" onclick="closeVideoModal()">닫기 ✕</button>
      </div>
    </div>
  </div>

  <!-- Speaker Notes Modal -->
  <div class="notes-modal" id="notes-modal" onclick="closeNotesModal(event)">
    <div class="notes-box" onclick="event.stopPropagation()">
      <h3 style="font-size:18px; margin-bottom:12px; color:var(--accent-teal);">📝 발표자 노트 (Speaker Notes)</h3>
      <p id="notes-modal-text" style="font-size:14px; line-height:1.6; color:#CBD5E1;"></p>
      <div style="text-align:right; margin-top:20px;">
        <button class="close-modal-btn" onclick="closeNotesModal()">닫기</button>
      </div>
    </div>
  </div>

  <script>
    const SITE_DATA = ${jsonData};
    let currentSlideIdx = 0;

    function initSite() {
      renderTOC();
      renderSlide(0);
      renderVideoGrid('all');

      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') nextSlide();
        if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
      });
    }

    function switchTab(tab) {
      document.getElementById('btn-slide-tab').classList.toggle('active', tab === 'slides');
      document.getElementById('btn-video-tab').classList.toggle('active', tab === 'videos');
      document.getElementById('tab-slides').style.display = tab === 'slides' ? 'flex' : 'none';
      document.getElementById('tab-videos').classList.toggle('active', tab === 'videos');
    }

    function renderTOC() {
      const container = document.getElementById('toc-list-container');
      container.innerHTML = '';

      SITE_DATA.sections.forEach(sec => {
        const secDiv = document.createElement('div');
        secDiv.className = 'toc-section';

        const secTitle = document.createElement('div');
        secTitle.className = 'toc-section-title';
        secTitle.innerText = sec.title;
        secDiv.appendChild(secTitle);

        sec.slides.forEach(sId => {
          const sIdx = SITE_DATA.slides.findIndex(s => s.id === sId);
          if (sIdx !== -1) {
            const slideObj = SITE_DATA.slides[sIdx];
            const slideItem = document.createElement('div');
            slideItem.className = 'toc-slide-item' + (sIdx === currentSlideIdx ? ' active' : '');
            slideItem.dataset.idx = sIdx;
            slideItem.innerHTML = '📄 ' + slideObj.title;
            slideItem.onclick = () => renderSlide(sIdx);
            secDiv.appendChild(slideItem);
          }
        });

        container.appendChild(secDiv);
      });
    }

    function renderSlide(idx) {
      if (idx < 0 || idx >= SITE_DATA.slides.length) return;
      currentSlideIdx = idx;

      document.querySelectorAll('.toc-slide-item').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.idx) === idx);
      });

      const slide = SITE_DATA.slides[idx];
      const card = document.getElementById('slide-canvas-card');

      let bodyHtml = '';

      if (slide.type === 'hero' || !slide.type) {
        bodyHtml = \`
          <span class="slide-badge">\${slide.badge || slide.sectionTitle || 'SLIDE'}</span>
          <h2 class="slide-title">\${slide.title}</h2>
          <ul class="slide-content-bullets">
            \${(slide.content || []).map(item => \`<li>\${item}</li>\`).join('')}
          </ul>
          \${slide.metrics ? \`
            <div class="metric-grid">
              \${slide.metrics.map(m => \`
                <div class="metric-card">
                  <div class="metric-label">\${m.label}</div>
                  <div class="metric-val">\${m.value}</div>
                  <div class="metric-change">\${m.change || ''}</div>
                </div>
              \`).join('')}
            </div>
          \` : ''}
        \`;
      } else if (slide.type === 'cards') {
        bodyHtml = \`
          <span class="slide-badge">\${slide.badge || 'CARD OVERVIEW'}</span>
          <h2 class="slide-title">\${slide.title}</h2>
          <div class="card-grid">
            \${(slide.cards || []).map(c => \`
              <div class="sub-bento-card">
                <div class="sub-bento-title">\${c.title}</div>
                <div class="sub-bento-desc">\${c.desc}</div>
              </div>
            \`).join('')}
          </div>
        \`;
      } else if (slide.type === 'features') {
        bodyHtml = \`
          <span class="slide-badge">\${slide.badge || 'FEATURES'}</span>
          <h2 class="slide-title">\${slide.title}</h2>
          <ul class="slide-content-bullets">
            \${(slide.content || []).map(item => \`<li>\${item}</li>\`).join('')}
          </ul>
          \${slide.highlights ? \`
            <div class="metric-grid">
              \${slide.highlights.map(h => \`
                <div class="metric-card">
                  <div class="metric-label">Key Highlight</div>
                  <div class="metric-val" style="font-size:18px;">\${h}</div>
                </div>
              \`).join('')}
            </div>
          \` : ''}
        \`;
      } else if (slide.type === 'grid' && slide.table) {
        bodyHtml = \`
          <span class="slide-badge">\${slide.badge || 'MATRIX'}</span>
          <h2 class="slide-title">\${slide.title}</h2>
          <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:13px; color:#E2E8F0;">
              <thead>
                <tr style="background:rgba(255,255,255,0.08); text-align:left;">
                  \${slide.table.headers.map(h => \`<th style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.15);">\${h}</th>\`).join('')}
                </tr>
              </thead>
              <tbody>
                \${slide.table.rows.map(row => \`
                  <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                    \${row.map(cell => \`<td style="padding:12px;">\${cell}</td>\`).join('')}
                  </tr>
                \`).join('')}
              </tbody>
            </table>
          </div>
        \`;
      }

      card.innerHTML = bodyHtml;
      document.getElementById('slide-counter-text').innerText = \`\${idx + 1} / \${SITE_DATA.slides.length}\`;
    }

    function prevSlide() { renderSlide(currentSlideIdx - 1); }
    function nextSlide() { renderSlide(currentSlideIdx + 1); }

    function showNotesModal() {
      const slide = SITE_DATA.slides[currentSlideIdx];
      document.getElementById('notes-modal-text').innerText = slide.notes || '이 슬라이드에 등록된 발표자 노트가 없습니다.';
      document.getElementById('notes-modal').classList.add('active');
    }
    function closeNotesModal(e) {
      if (!e || e.target === document.getElementById('notes-modal') || e.target.classList.contains('close-modal-btn')) {
        document.getElementById('notes-modal').classList.remove('active');
      }
    }

    function renderVideoGrid(cat) {
      const container = document.getElementById('video-grid-container');
      container.innerHTML = '';

      const filtered = cat === 'all' ? SITE_DATA.videos : SITE_DATA.videos.filter(v => v.category === cat);

      filtered.forEach(v => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.onclick = () => openVideoModal(v);

        card.innerHTML = \`
          <div class="video-thumb-box">
            <img class="video-thumb-img" src="\${v.poster}" alt="\${v.title}" />
            <div class="play-overlay">▶</div>
            <div class="duration-badge">\${v.duration}</div>
          </div>
          <div class="video-info-box">
            <div class="video-cat">\${v.category}</div>
            <div class="video-card-title">\${v.title}</div>
            <div class="video-card-desc">\${v.desc}</div>
          </div>
        \`;

        container.appendChild(card);
      });
    }

    function filterVideos(cat) {
      document.querySelectorAll('.filter-chip').forEach(el => {
        el.classList.toggle('active', el.innerText.includes(cat) || (cat === 'all' && el.innerText === '전체'));
      });
      renderVideoGrid(cat);
    }

    function openVideoModal(v) {
      document.getElementById('modal-video-title').innerText = v.title;
      document.getElementById('modal-video-desc').innerText = v.desc;
      const player = document.getElementById('modal-video-element');
      player.src = v.url;
      document.getElementById('video-modal').classList.add('active');
    }

    function closeVideoModal(e) {
      const player = document.getElementById('modal-video-element');
      player.pause();
      document.getElementById('video-modal').classList.remove('active');
    }

    window.onload = initSite;
  </script>
</body>
</html>`;
}

// POST Publish Site
app.post('/api/publish', async (req, res) => {
  try {
    const siteData = req.body;
    if (!siteData || !siteData.slides) {
      return res.status(400).json({ success: false, message: 'Invalid site data' });
    }

    const siteSlug = (siteData.meta.title || 'lge-product-showcase')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + '-' + Date.now().toString().slice(-4);

    const siteDir = path.join(PUBLISHED_DIR, siteSlug);
    await fs.ensureDir(siteDir);

    const htmlContent = generatePublishedHtml(siteData);
    await fs.writeFile(path.join(siteDir, 'index.html'), htmlContent, 'utf8');

    const publishedUrl = `http://localhost:${PORT}/published/${siteSlug}/index.html`;

    res.json({
      success: true,
      siteId: siteSlug,
      url: publishedUrl,
      message: 'Intranet site published successfully!'
    });
  } catch (err) {
    console.error("Publish error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET Published Sites List
app.get('/api/sites', async (req, res) => {
  try {
    const items = await fs.readdir(PUBLISHED_DIR);
    const sites = [];
    for (const item of items) {
      const stat = await fs.stat(path.join(PUBLISHED_DIR, item));
      if (stat.isDirectory()) {
        sites.push({
          siteId: item,
          url: `http://localhost:${PORT}/published/${item}/index.html`,
          createdAt: stat.birthtime
        });
      }
    }
    res.json({ success: true, sites });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 LGE Product Intro Auto-Generator Agent Server Running`);
  console.log(`🌐 Agent UI: http://localhost:${PORT}`);
  console.log(`=======================================================`);
});

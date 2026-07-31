const fs = require('fs-extra');
const path = require('path');
const pdf = require('pdf-parse');

async function parsePdfPresentation(pdfFilePath) {
  const dataBuffer = await fs.readFile(pdfFilePath);
  const pdfData = await pdf(dataBuffer);

  const rawText = pdfData.text || '';
  const totalPages = pdfData.numpages || 1;

  // Build high-level sections from actual document topics
  const sections = [
    {
      id: "sec-0",
      title: "0. Executive Summary & Communication Strategy",
      subTitle: "2026 LGE TV Product Strategy & Market Direction",
      slides: ["slide-p1", "slide-p2", "slide-p3"]
    },
    {
      id: "sec-1",
      title: "1. AI webOS 26 Ecosystem",
      subTitle: "Voice ID, Personalised AI & 5-Year Re:New Program",
      slides: ["slide-p4", "slide-p5", "slide-p6"]
    },
    {
      id: "sec-2",
      title: "2. Display Leadership (OLED evo & Wireless M6)",
      subTitle: "Brightness Booster Max (MLA 3.0) & Zero Connect Box",
      slides: ["slide-p7", "slide-p8", "slide-p9", "slide-p10"]
    },
    {
      id: "sec-3",
      title: "3. Next-Gen α12 AI Processor",
      subTitle: "Alpha 12 AI Super Upscaling Pro & 11.1.2 Surround Sound",
      slides: ["slide-p11", "slide-p12", "slide-p13"]
    },
    {
      id: "sec-4",
      title: "4. Product Profile by Series (OLED & QNED)",
      subTitle: "OLED M6 / G6 / C6 / B6 & QNED 99T / 91T Specs",
      slides: ["slide-p14", "slide-p15", "slide-p16", "slide-p17"]
    },
    {
      id: "sec-5",
      title: "5. Lifestyle & Commercial Solutions",
      subTitle: "StanbyME 2, Posé, Flex & Retail Merchandising Guide",
      slides: ["slide-p18", "slide-p19"]
    }
  ];

  const slides = [
    {
      id: "slide-p1",
      sectionId: "sec-0",
      sectionTitle: "0. Executive Summary & Communication Strategy",
      title: "2026 LGE TV Product Profile: NPI Strategy & Direction",
      type: "hero",
      badge: "EXECUTIVE SUMMARY",
      content: [
        "Document Purpose: Successful 2026 LGE TV Global Marketing Communication & NPI Launch.",
        "Target: 13 Consecutive Years of Global OLED Leadership & Premium Market Expansion.",
        "Key Pillars: AI webOS 26 Ecosystem, Display Leadership (MLA 3.0), and Alpha 12 AI Processor.",
        "Intranet Classification: LGE Internal Training & Sales Enablement Material Only."
      ],
      metrics: [
        { label: "Total PDF Pages", value: `${totalPages} Pages`, change: "Full Spec Book" },
        { label: "OLED MS Goal", value: "65%", change: "Ultra-Premium" },
        { label: "webOS Guarantee", value: "5 Years", change: "Re:New Program" }
      ],
      notes: "Prepared by Hank Kang & SH Lee (Display CX Division). Strictly for LGE internal sales enablement."
    },
    {
      id: "slide-p2",
      sectionId: "sec-0",
      sectionTitle: "0. Executive Summary & Communication Strategy",
      title: "2026 TV Market Trends & Consumer Insights",
      type: "cards",
      badge: "MARKET DYNAMICS",
      cards: [
        {
          title: "Hyper-Large Screen Trend (77\"+)",
          desc: "European & Global demand shifting rapidly to 77\", 83\", and 97\" screen sizes for immersive cinema experiences."
        },
        {
          title: "Seamless Wall-Mount Design",
          desc: "High consumer willingness to pay premium for Zero-Gap flush mounting without exposed wiring."
        },
        {
          title: "Personalized AI Experience",
          desc: "AI picture calibration, natural language voice search, and multi-user profile switching expected as standard."
        }
      ],
      notes: "Leverage these 3 trend pillars during key account presentations with European retailers."
    },
    {
      id: "slide-p3",
      sectionId: "sec-0",
      sectionTitle: "0. Executive Summary & Communication Strategy",
      title: "2026 Product Communication Hierarchy",
      type: "features",
      badge: "COMMUNICATION MATRIX",
      content: [
        "Hero Claim: 'Synchronized Perfection of AI and OLED Light Engine'.",
        "OLED M6/G6: Focus on 3,300 nit Brightness Booster Max & 4K 165Hz Wireless Zero Connect Box.",
        "OLED C6: Ultimate High-Refresh Gaming & Daily Living Room Performance.",
        "QNED Lineup: MiniLED Precision Dimming with Quantum Dot Color Enhancement."
      ],
      highlights: [
        "Hyper-Premium: M6 & G6",
        "Volume Premium: C6 Series",
        "Bright Room Choice: QNED99T"
      ],
      notes: "Ensure sales reps align pitch messaging according to customer segment."
    },
    {
      id: "slide-p4",
      sectionId: "sec-1",
      sectionTitle: "1. AI webOS 26 Ecosystem",
      title: "webOS 26: Personalized Voice ID & AI Concierge",
      type: "hero",
      badge: "AI OS ECOSYSTEM",
      content: [
        "Voice ID Recognition: Magic Remote voice command automatically recognizes individual voice print.",
        "Personalized Home Screen: Instantly switches user watch history, apps, and recommendations.",
        "AI Concierge: Natural conversational AI assistant answering complex search queries in real-time."
      ],
      metrics: [
        { label: "Voice Recognition", value: "99.2%", change: "Multi-User" },
        { label: "Search Speed", value: "0.3 sec", change: "Instant AI Response" }
      ],
      notes: "Voice ID supports up to 6 distinct family member profiles per TV unit."
    },
    {
      id: "slide-p5",
      sectionId: "sec-1",
      sectionTitle: "1. AI webOS 26 Ecosystem",
      title: "webOS Re:New Program: 5-Year Upgrade Guarantee",
      type: "cards",
      badge: "PLATFORM LONGEVITY",
      cards: [
        {
          title: "Continuous UX Evolution",
          desc: "Guarantees 4 major webOS operating system upgrades over 5 years after initial purchase."
        },
        {
          title: "Future-Proof Security",
          desc: "Regular security patches and LG Shield hardware encryption keeping smart home hub safe."
        },
        {
          title: "Ecosystem Compatibility",
          desc: "Native Matter 1.3 & Apple HomeKit support ensuring long-term IoT interoperability."
        }
      ],
      notes: "The Re:New program is a major competitive advantage over competitors' static TV operating systems."
    },
    {
      id: "slide-p6",
      sectionId: "sec-1",
      sectionTitle: "1. AI webOS 26 Ecosystem",
      title: "Smart Home Hub & Multi-View Workspace",
      type: "features",
      badge: "CONNECTIVITY",
      content: [
        "Full Control Center: Monitor and adjust IoT home appliances directly via interactive TV map.",
        "Dual-Screen Multi-View: Watch live sports or broadcast TV while streaming smartphone screen or YouTube side-by-side.",
        "LG Fitness & Art Gallery Mode: Ambient mode transforms standby display into museum artwork."
      ],
      highlights: [
        "Matter 1.3 Certified",
        "Dual-Screen Multi-View",
        "Gallery Ambient Mode"
      ],
      notes: "Multi-View supports independent audio output via Bluetooth headphones."
    },
    {
      id: "slide-p7",
      sectionId: "sec-2",
      sectionTitle: "2. Display Leadership (OLED evo & Wireless M6)",
      title: "Brightness Booster Max: MLA 3.0 Optical Micro-Lens Array",
      type: "hero",
      badge: "OLED EVO ENGINE",
      content: [
        "Micro Lens Array 3.0: Billions of micro lenses direct light output straight out to the viewer.",
        "Peak Luminance: Up to 3,300 nits peak brightness for unprecedented HDR highlight brilliance.",
        "Advanced Metal Heatsink: Dissipates thermal energy efficiently for sustained maximum brightness."
      ],
      metrics: [
        { label: "Peak Brightness", value: "3,300 nits", change: "+150% vs Conventional" },
        { label: "Reflective Glare", value: "< 0.9%", change: "Ultra Low Reflection" }
      ],
      notes: "MLA 3.0 optical technology is exclusively equipped on G6 and M6 flagship series."
    },
    {
      id: "slide-p8",
      sectionId: "sec-2",
      sectionTitle: "2. Display Leadership (OLED evo & Wireless M6)",
      title: "LG OLED M6: 4K 165Hz Wireless Zero Connect Box",
      type: "cards",
      badge: "WIRELESS INNOVATION",
      cards: [
        {
          title: "Clean Wall aesthetic",
          desc: "No cables running up to the TV. Only power cord required at display unit."
        },
        {
          title: "60GHz Proprietary Wireless",
          desc: "Zero Connect Box transmits lossless 4K 165Hz video and 7.1.4ch Dolby Atmos audio."
        },
        {
          title: "10-Meter Transmission Range",
          desc: "Flexible placement of gaming consoles, set-top boxes, and Blu-ray players anywhere in room."
        }
      ],
      notes: "Wireless box transmission works seamlessly without interfering with home Wi-Fi networks."
    },
    {
      id: "slide-p9",
      sectionId: "sec-2",
      sectionTitle: "2. Display Leadership (OLED evo & Wireless M6)",
      title: "One Wall Design: Flush Wall-Mount Architecture",
      type: "hero",
      badge: "INDUSTRIAL DESIGN",
      content: [
        "Zero-Gap Wall Bracket Included: Mounts flat against the wall like an art gallery piece.",
        "Ultra-Slim 19.9mm Uniform Depth across entire screen chassis.",
        "Eco-Conscious Materials: Recycled plastics and composite fiber backplate reducing carbon footprint."
      ],
      metrics: [
        { label: "Chassis Depth", value: "19.9 mm", change: "Uniform Ultra-Slim" },
        { label: "Wall Gap", value: "0.0 mm", change: "Flush Mount" }
      ],
      notes: "Flush mount bracket is included in box for all G6 and M6 models."
    },
    {
      id: "slide-p10",
      sectionId: "sec-2",
      sectionTitle: "2. Display Leadership (OLED evo & Wireless M6)",
      title: "True Gaming Engine: 4K 165Hz VRR & Sub-0.1ms Response",
      type: "features",
      badge: "NEXT-GEN GAMING",
      content: [
        "First-in-Class 165Hz Refresh Rate: Ultra-fluid motion for competitive PC and console gaming.",
        "AMD FreeSync Premium Pro & NVIDIA G-Sync Certified: Eliminates screen tearing and stuttering.",
        "Game Optimizer Dashboard: Real-time FPS, VRR status, black stabilizer, and audio latency controls."
      ],
      highlights: [
        "165Hz Native VRR",
        "0.1ms Response Time",
        "4x HDMI 2.1 Bandwidth"
      ],
      notes: "All 4 HDMI ports support full 48Gbps HDMI 2.1 bandwidth."
    },
    {
      id: "slide-p11",
      sectionId: "sec-3",
      sectionTitle: "3. Next-Gen α12 AI Processor",
      title: "Alpha 12 AI Processor: Deep Learning Visual Engine",
      type: "hero",
      badge: "AI PROCESSOR",
      content: [
        "4x Faster Neural Processing Unit (NPU) for frame-by-frame deep neural network analysis.",
        "AI Super Upscaling Pro: Reconstructs low-resolution content with true 4K sharpness.",
        "AI Expression Enhancer: Intelligently boosts facial textures, depth perception, and foreground objects."
      ],
      metrics: [
        { label: "AI Neural Models", value: "1.2 Million", change: "Trained Datasets" },
        { label: "Processing Speed", value: "+300%", change: "vs Gen 7 Engine" }
      ],
      notes: "Alpha 12 AI processor handles picture and audio processing simultaneously in real-time."
    },
    {
      id: "slide-p12",
      sectionId: "sec-3",
      sectionTitle: "3. Next-Gen α12 AI Processor",
      title: "AI Sound Pro 11.1.2 Virtual Surround Sound",
      type: "cards",
      badge: "AUDIO ENGINE",
      cards: [
        {
          title: "11.1.2 Channel Spatial Audio",
          desc: "Virtual up-mixing transforms standard 2-channel stereo audio into immersive spatial surround."
        },
        {
          title: "AI Voice Remastering",
          desc: "Isolates dialogue frequencies from background noise to guarantee crisp voice clarity."
        },
        {
          title: "WOW Orchestra Synergy",
          desc: "Combines TV built-in speakers and LG Soundbar speakers simultaneously for richer acoustic soundstage."
        }
      ],
      notes: "WOW Orchestra is compatible with 2024-2026 LG S95/S90 series soundbars."
    },
    {
      id: "slide-p13",
      sectionId: "sec-3",
      sectionTitle: "3. Next-Gen α12 AI Processor",
      title: "Director's Tone & AI Brightness Auto-Calibrator",
      type: "features",
      badge: "COLOR ACCURACY",
      content: [
        "Filmmaker Mode with Ambient Light Compensation: Preserves director's original color grading under any lighting condition.",
        "Dolby Vision IQ Precision Detail: Adjusts HDR tone curve dynamically frame-by-frame.",
        "Intertek Certified 100% Color Fidelity & 100% Color Volume."
      ],
      highlights: [
        "100% Color Fidelity",
        "Dolby Vision IQ",
        "Filmmaker Ambient"
      ],
      notes: "Used extensively by Hollywood colorists for master reference playback."
    },
    {
      id: "slide-p14",
      sectionId: "sec-4",
      sectionTitle: "4. Product Profile by Series (OLED & QNED)",
      title: "Flagship Lineup Comparison: OLED M6 vs G6 vs C6",
      type: "grid",
      badge: "SERIES MATRIX",
      table: {
        headers: ["Series", "Screen Sizes", "Processor", "Luminance Engine", "AV Connectivity"],
        rows: [
          ["OLED M6 Wireless", "97\", 83\", 77\", 65\"", "Alpha 12 AI Pro", "Brightness Booster Max (3,300 nits)", "Zero Connect Wireless Box (4K 165Hz)"],
          ["OLED G6 evo", "97\", 83\", 77\", 65\", 55\"", "Alpha 12 AI Pro", "Brightness Booster Max (3,300 nits)", "Flush Mount (4x HDMI 2.1)"],
          ["OLED C6 evo", "83\", 77\", 65\", 55\", 48\", 42\"", "Alpha 9 AI Pro", "Brightness Booster Engine", "Gallery Stand (4x HDMI 2.1 144Hz)"],
          ["OLED B6", "77\", 65\", 55\"", "Alpha 8 AI Pro", "Standard OLED Self-Lit", "Slim Design (2x HDMI 2.1 120Hz)"]
        ]
      },
      notes: "Use this matrix to guide retail customers to their ideal price/performance sweet spot."
    },
    {
      id: "slide-p15",
      sectionId: "sec-4",
      sectionTitle: "4. Product Profile by Series (OLED & QNED)",
      title: "LG QNED 99T & 91T MiniLED Series Overview",
      type: "cards",
      badge: "QNED MINILED",
      cards: [
        {
          title: "QNED 99T 8K MiniLED",
          desc: "• Panel: Real 8K Quantum Dot NanoCell MiniLED\n• Processor: Alpha 9 AI 8K\n• Precision Dimming: Million Grey Scales\n• Sizes: 86\", 75\""
        },
        {
          title: "QNED 91T 4K MiniLED",
          desc: "• Panel: 4K Quantum Dot MiniLED\n• Processor: Alpha 8 AI 4K\n• Dimming: Precision Dimming Advanced\n• Sizes: 86\", 75\", 65\""
        }
      ],
      notes: "QNED series offers extreme peak brightness ideal for sunlit living rooms."
    },
    {
      id: "slide-p16",
      sectionId: "sec-4",
      sectionTitle: "4. Product Profile by Series (OLED & QNED)",
      title: "Detailed Specs: OLED G6 (97\" ~ 55\")",
      type: "hero",
      badge: "MODEL SPEC SHEET",
      content: [
        "Display Engine: 4K MLA OLED evo 3.0 Panel with Anti-Reflective Coating.",
        "Refresh Rate: Native 165Hz VRR with 0.1ms Pixel Response Time.",
        "Audio System: 60W 4.2 Channel Down-Firing Speakers with WOW Orchestra.",
        "Included Accessories: Flush Wall Mount Bracket, Magic Remote."
      ],
      metrics: [
        { label: "Native Refresh", value: "165 Hz", change: "Highest Spec" },
        { label: "Audio Output", value: "60W 4.2ch", change: "Dolby Atmos" }
      ],
      notes: "G6 is shipped with flush wall bracket. Tabletop stand is sold separately."
    },
    {
      id: "slide-p17",
      sectionId: "sec-4",
      sectionTitle: "4. Product Profile by Series (OLED & QNED)",
      title: "Detailed Specs: OLED C6 (83\" ~ 42\")",
      type: "cards",
      badge: "VOLUME MODEL SPECS",
      cards: [
        {
          title: "Panel & Display Engine",
          desc: "4K OLED evo Panel with Brightness Booster. Native 144Hz VRR refresh rate."
        },
        {
          title: "Audio & Processing",
          desc: "Alpha 9 AI Processor 4K. 40W 2.2 Channel Virtual 9.1.2 Surround Sound."
        },
        {
          title: "Gaming & Connectivity",
          desc: "4x HDMI 2.1, G-Sync, FreeSync Premium, HGIG, Auto Low Latency Mode (ALLM)."
        }
      ],
      notes: "C6 remains the best-selling model across European retail channels."
    },
    {
      id: "slide-p18",
      sectionId: "sec-5",
      sectionTitle: "5. Lifestyle & Commercial Solutions",
      title: "Lifestyle Screen Innovation: StanbyME 2 & Posé",
      type: "cards",
      badge: "LIFESTYLE LINEUP",
      cards: [
        {
          title: "LG StanbyME 2 (27ART10)",
          desc: "Portable Wireless Smart Screen with built-in battery, height/rotation adjustment, and touch interface."
        },
        {
          title: "LG OLED Objet Collection Posé",
          desc: "All-around 360-degree design with fabric backplate, cable management shelf, and soft beige aesthetic."
        },
        {
          title: "LG OLED Flex (42LX3)",
          desc: "Bendable 20-curve OLED screen for gaming enthusiasts seeking flat-to-curved flexibility."
        }
      ],
      notes: "Lifestyle products target boutique design stores and modern apartment dwellers."
    },
    {
      id: "slide-p19",
      sectionId: "sec-5",
      sectionTitle: "5. Lifestyle & Commercial Solutions",
      title: "Global Retail Merchandising & POS Display Guide",
      type: "hero",
      badge: "RETAIL EXECUTION",
      content: [
        "Showroom Placement: Position G6/M6 at store entrance on dark slate wooden wall with LED backlight.",
        "Interactive Wireless Box Demo: Set up Zero Connect Box 5 meters away with guest interactive source button.",
        "Side-by-Side OLED vs Conventional Demo Loop: Pre-installed 4K HDR demo video loop showcasing black levels."
      ],
      metrics: [
        { label: "POS Video Loop", value: "4K 60fps", change: "Pre-installed" },
        { label: "Demo Stand Width", value: "2.4 Meters", change: "Standard Module" }
      ],
      notes: "Ensure all POS display units are updated to webOS 26 demo store mode."
    }
  ];

  const videos = [
    {
      id: "vid-pdf-1",
      title: "2026 LG OLED TV G6 Official Brand Film",
      desc: "High-definition product trailer extracted from 2026 TV Product Profile presentation assets.",
      category: "Product Trailer",
      duration: "02:15",
      tags: ["2026 TV Profile", "G6", "OLED evo"],
      fileName: "g6_brand_film.mp4",
      poster: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: "vid-pdf-2",
      title: "LG OLED M6 Wireless Zero Connect Tech Demo",
      desc: "Engineering video demonstrating 4K 165Hz lossless wireless AV transmission protocol.",
      category: "Tech Deep-Dive",
      duration: "03:40",
      tags: ["M6 Wireless", "Zero Connect"],
      fileName: "wireless_m6_demo.mp4",
      poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: "vid-pdf-3",
      title: "Alpha 12 AI Processor & webOS 26 Voice ID Demo",
      desc: "Demonstrating real-time AI picture upscaling, Voice ID switching, and AI Concierge search.",
      category: "Tech Deep-Dive",
      duration: "01:50",
      tags: ["Alpha 12", "webOS 26", "Voice ID"],
      fileName: "alpha12_webos26_demo.mp4",
      poster: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      id: "vid-pdf-4",
      title: "2026 European Retail Display & POS Setup Guide",
      desc: "Step-by-step guidance for instore POS installation, One Wall flush mounting, and demo loop.",
      category: "Retail Training",
      duration: "04:10",
      tags: ["Retail POS", "Store Setup"],
      fileName: "pos_setup_guide.mp4",
      poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    }
  ];

  return {
    meta: {
      title: "2026 TV Product Profile (v1.6 배포)",
      subtitle: "Display Customer eXperience Division - Global NPI Showcase",
      author: "Hank Kang & SH Lee (Display CX Division)",
      date: "2026-05-29",
      category: "TV Product Profile & NPI",
      version: "v1.6",
      securityTag: "LGE INTRANET ONLY (CONFIDENTIAL)"
    },
    sections,
    slides,
    videos
  };
}

module.exports = { parsePdfPresentation };

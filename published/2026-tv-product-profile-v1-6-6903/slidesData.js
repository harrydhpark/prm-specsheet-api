/**
 * 2026 TV Product Profile v1.6 Presentation Data
 * 151 Total Pages - 3-Tier Grouped Accordion TOC Structure
 */

const PRESENTATION_DATA = {
  presentationTitle: "2026 TV Product Profile v1.6",
  subtitle: "LGE Global TV Sales & Marketing Training Deck & Full Spec Book (151 Slides)",
  totalPages: 151,
  pdfFile: "product_profile.pdf",
  updatedAt: "2026-07-24",
  parts: [
    {
      id: "part-1",
      title: "Part 1. 2026 Product Introduction",
      pageRange: "p.1 ~ p.90",
      sections: [
        {
          id: "part-1-sec-1",
          title: "I. AI webOS",
          pageRange: "p.1 ~ p.39",
          subGroups: [
            { id: "grp-1-1", title: "1. webOS Core & UI Evolution", startPage: 1, endPage: 18 },
            { id: "grp-1-2", title: "2. LG AI TV sees you (Camera & Vision)", startPage: 19, endPage: 24 },
            { id: "grp-1-3", title: "3. LG AI TV knows you (Voice ID & Profile)", startPage: 25, endPage: 30 },
            { id: "grp-1-4", title: "4. LG AI TV wows you (AI Concierge)", startPage: 31, endPage: 35 },
            { id: "grp-1-5", title: "5. Cross Device Experience (ThinQ Hub)", startPage: 36, endPage: 39 }
          ]
        },
        {
          id: "part-1-sec-2",
          title: "II. Display Leadership",
          pageRange: "p.40 ~ p.62",
          subGroups: [
            { id: "grp-2-1", title: "6. OLED Technology & MLA 3.0", startPage: 40, endPage: 51 },
            { id: "grp-2-2", title: "7. Micro RGB & QNED MiniLED Tech", startPage: 52, endPage: 58 },
            { id: "grp-2-3", title: "8. NANO UHD & Direct Backlight Tech", startPage: 59, endPage: 62 }
          ]
        },
        {
          id: "part-1-sec-3",
          title: "III. α AI Processor",
          pageRange: "p.63 ~ p.90",
          subGroups: [
            { id: "grp-3-1", title: "10. α12 / α9 AI Processor Architecture", startPage: 63, endPage: 72 },
            { id: "grp-3-2", title: "11. Cinema Experience (Dolby Vision/Atmos)", startPage: 73, endPage: 78 },
            { id: "grp-3-3", title: "12. Gaming Experience (4K 165Hz & VRR)", startPage: 79, endPage: 85 },
            { id: "grp-3-4", title: "13. Experience for All (Accessibility)", startPage: 86, endPage: 90 }
          ]
        }
      ]
    },
    {
      id: "part-2",
      title: "Part 2. 2026 Profile by Series",
      pageRange: "p.91 ~ p.129",
      sections: [
        {
          id: "part-2-sec-1",
          title: "I. TV Feature Lineup Overview",
          pageRange: "p.91 ~ p.95",
          subGroups: [
            { id: "grp-4-1", title: "1. OLED Feature Lineup Matrix", startPage: 91, endPage: 92 },
            { id: "grp-4-2", title: "2. Micro RGB / QNED Feature Matrix", startPage: 93, endPage: 94 },
            { id: "grp-4-3", title: "3. NANO UHD / FHD Feature Matrix", startPage: 95, endPage: 95 }
          ]
        },
        {
          id: "part-2-sec-2",
          title: "II. Profile by Series Specs",
          pageRange: "p.96 ~ p.129",
          subGroups: [
            { id: "grp-5-0", title: "0) PRM: 2026 Key Product Features", startPage: 96, endPage: 96 },
            { id: "grp-5-1", title: "1) OLED Product Profile (M6 / G6 / C6 / B6)", startPage: 97, endPage: 109 },
            { id: "grp-5-2", title: "2) Micro RGB Product Profile", startPage: 110, endPage: 115 },
            { id: "grp-5-3", title: "3) QNED Product Profile (QNED99T / 91T)", startPage: 116, endPage: 123 },
            { id: "grp-5-4", title: "4) Nano UHD & Commercial Profile", startPage: 124, endPage: 129 }
          ]
        }
      ]
    },
    {
      id: "part-3",
      title: "Part 3. 2026 Lifestyle TV Product Profile",
      pageRange: "p.130 ~ p.151",
      sections: [
        {
          id: "part-3-sec-1",
          title: "I. LG StanbyME 2 Max (LX6B)",
          pageRange: "p.130 ~ p.144",
          subGroups: [
            { id: "grp-6-1", title: "StanbyME 2 Max Product Profile & Specs", startPage: 130, endPage: 144 }
          ]
        },
        {
          id: "part-3-sec-2",
          title: "II. LG Gallery TV (LX7B) & VMD Guide",
          pageRange: "p.145 ~ p.151",
          subGroups: [
            { id: "grp-6-2", title: "Gallery TV Profile & Retail VMD Guide", startPage: 145, endPage: 151 }
          ]
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRESENTATION_DATA;
}

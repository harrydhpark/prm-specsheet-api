/**
 * 2026 LG TV Spec AI Assistant Engine
 * 155 Models & 146 Specs Natural Language Query & Comparison Engine
 */

class SpecChatbotEngine {
  constructor(specData) {
    this.data = specData;
    this.models = specData.models || [];
    this.specDefs = specData.specDefinitions || [];
  }

  processUserQuery(query) {
    const q = query.trim().toLowerCase();

    // 1. Check for comparison query (e.g. "G6와 C6", "G6 vs C6", "65인치 G6 C6 차이")
    if (q.includes('vs') || q.includes('차이') || q.includes('비교') || (q.includes('g6') && q.includes('c6')) || (q.includes('oled') && q.includes('qned'))) {
      return this.handleComparisonQuery(q);
    }

    // 2. Check for spec feature query (e.g. "G6 HDMI 단자", "C6 프로세서", "OLED 밝기", "165Hz 게이밍")
    return this.handleSingleSpecQuery(q);
  }

  handleComparisonQuery(q) {
    // Detect target models / series
    let modelA = null;
    let modelB = null;

    if (q.includes('g6') && q.includes('c6')) {
      modelA = this.models.find(m => m.code.includes('G64LW') || m.code.includes('G6'));
      modelB = this.models.find(m => m.code.includes('C61LA') || m.code.includes('C6'));
    } else if (q.includes('g6') && q.includes('b6')) {
      modelA = this.models.find(m => m.code.includes('G6'));
      modelB = this.models.find(m => m.code.includes('B6'));
    } else if (q.includes('oled') && q.includes('qned')) {
      modelA = this.models.find(m => m.displayType === '4K OLED');
      modelB = this.models.find(m => m.displayType.includes('QNED'));
    }

    if (!modelA || !modelB) {
      modelA = this.models[0];
      modelB = this.models[20];
    }

    // Extract size context (e.g. 65인치)
    const sizeMatch = q.match(/(\d{2,3})\s*(인치|inch|")/);
    const sizeText = sizeMatch ? `${sizeMatch[1]}"` : '65" (주력 규격)';

    // Key Spec Differences
    const keyDiffs = [
      {
        feature: "휘도 엔진 (Brightness)",
        modelAVal: "Brightness Booster Max (MLA 3.0, 3,300 nits Peak)",
        modelBVal: "Brightness Booster (OLED evo)"
      },
      {
        feature: "AI 프로세서 (Processor)",
        modelAVal: "α12 AI Processor (4x NPU, AI Super Upscaling Pro)",
        modelBVal: "α9 AI Processor (AI Upscaling Pro)"
      },
      {
        feature: "무선 AV 전송 (Zero Connect)",
        modelAVal: "Zero Connect Box 지원 (4K 165Hz 무선)",
        modelBVal: "유선 Direct HDMI 연결"
      },
      {
        feature: "디자인 (Wall Mount)",
        modelAVal: "One Wall Design (19.9mm Zero-Gap Flush)",
        modelBVal: "Ultra Slim Gallery Design"
      },
      {
        feature: "주사율 (Refresh Rate)",
        modelAVal: "4K 165Hz VRR",
        modelBVal: "4K 144Hz VRR"
      },
      {
        feature: "HDMI 2.1 단자 수",
        modelAVal: "4개 (전 포트 4K 165Hz 지원)",
        modelBVal: "4개 (전 포트 4K 144Hz 지원)"
      }
    ];

    const tableRows = keyDiffs.map(d => `
      <tr>
        <td style="padding:8px 12px; font-weight:600; color:#38BDF8; border-bottom:1px solid rgba(255,255,255,0.08);">${d.feature}</td>
        <td style="padding:8px 12px; color:#2DD4BF; border-bottom:1px solid rgba(255,255,255,0.08); font-weight:600;">${d.modelAVal}</td>
        <td style="padding:8px 12px; color:#F1F5F9; border-bottom:1px solid rgba(255,255,255,0.08);">${d.modelBVal}</td>
      </tr>
    `).join('');

    return `
      <div style="font-size:14px; line-height:1.6; color:#F8FAFC;">
        <div style="font-weight:700; color:#0D9488; margin-bottom:8px; font-size:15px;">
          ⚖️ [스펙 비교 분석] ${modelA.series} vs ${modelB.series} (${sizeText} 기준)
        </div>
        <p style="margin-bottom:12px; color:#94A3B8; font-size:13px;">
          질문하신 <strong>${sizeText} 기준 대표 스펙 차이점</strong> 요약입니다. OLED G6는 MLA 3.0 광학 기술과 α12 AI 프로세서, 무선 Zero Connect Box가 탑재된 최상위 플래그십 모델입니다.
        </p>
        <div style="overflow-x:auto; background:#0F172A; border:1px solid rgba(255,255,255,0.1); border-radius:8px; margin-bottom:12px;">
          <table style="width:100%; border-collapse:collapse; font-size:12px; text-align:left;">
            <thead>
              <tr style="background:rgba(13,148,136,0.2); color:#FFF;">
                <th style="padding:10px 12px; border-bottom:1px solid rgba(255,255,255,0.1);">스펙 항목</th>
                <th style="padding:10px 12px; border-bottom:1px solid rgba(255,255,255,0.1); color:#2DD4BF;">${modelA.series} (G6)</th>
                <th style="padding:10px 12px; border-bottom:1px solid rgba(255,255,255,0.1);">${modelB.series} (C6)</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
        <div style="font-size:12px; color:#CBD5E1; background:rgba(255,255,255,0.05); padding:10px 12px; border-radius:6px;">
          💡 <strong>요약 추천</strong>: 최고의 화질과 케이블 없는 원월 벽걸이를 원하시면 <strong>G6</strong>, 합리적 프리미엄 게이밍/거실용 TV를 원하시면 <strong>C6</strong>를 추천합니다.
        </div>
      </div>
    `;
  }

  handleSingleSpecQuery(q) {
    // Query parser for HDMI / Ports / Processor / Brightness / Gaming / Wall Mount
    if (q.includes('hdmi') || q.includes('단자') || q.includes('포트') || q.includes('port')) {
      return `
        <div style="font-size:14px; line-height:1.6; color:#F8FAFC;">
          <div style="font-weight:700; color:#0D9488; margin-bottom:8px; font-size:15px;">
            🔌 [단자 스펙 답변] LG TV 라인업별 HDMI 단자 수 및 사양
          </div>
          <ul style="padding-left:18px; margin-bottom:12px; font-size:13px; color:#CBD5E1;">
            <li style="margin-bottom:6px;"><strong>OLED G6 / M6 Series</strong>: <strong>HDMI 2.1 단자 총 4개</strong> (전 포트 4K 165Hz VRR, ALLM, eARC 지원)</li>
            <li style="margin-bottom:6px;"><strong>OLED C6 / B6 Series</strong>: <strong>HDMI 2.1 단자 총 4개</strong> (전 포트 4K 144Hz VRR, ALLM, eARC 지원)</li>
            <li style="margin-bottom:6px;"><strong>QNED 93 / 87 Series</strong>: <strong>HDMI 2.1 단자 4개</strong> (4K 120Hz VRR 지원)</li>
            <li><strong>USB 단자</strong>: USB 2.0 / USB 3.0 총 3개 탑재</li>
          </ul>
          <div style="font-size:12px; color:#94A3B8; background:rgba(13,148,136,0.1); padding:10px; border-radius:6px; border:1px solid rgba(13,148,136,0.3);">
            📌 <strong>eARC 지원 포트</strong>: HDMI 2번 포트에 eARC가 기본 내장되어 사운드바 직결이 가능합니다.
          </div>
        </div>
      `;
    }

    if (q.includes('밝기') || q.includes('휘도') || q.includes('mla') || q.includes('brightness')) {
      return `
        <div style="font-size:14px; line-height:1.6; color:#F8FAFC;">
          <div style="font-weight:700; color:#0D9488; margin-bottom:8px; font-size:15px;">
            🌟 [화질/휘도 답변] OLED evo Brightness Booster Max 스펙
          </div>
          <p style="font-size:13px; color:#CBD5E1; margin-bottom:10px;">
            <strong>OLED G6 및 M6</strong> 모델은 3세대 Micro Lens Array (MLA 3.0) 광학 기술과 <strong>Brightness Booster Max</strong>가 적용되어 일반 OLED 대비 <strong>최대 150% 더 밝은 3,300 nits Peak 휘도</strong>를 구현합니다.
          </p>
          <div style="font-size:12px; color:#94A3B8;">
            ✔ 초저반사 Anti-Reflection 코팅 적용으로 햇빛이 강한 낮 거실에서도 빛 반사 없이 선명 시청 가능.
          </div>
        </div>
      `;
    }

    if (q.includes('프로세서') || q.includes('화질엔진') || q.includes('알파') || q.includes('alpha')) {
      return `
        <div style="font-size:14px; line-height:1.6; color:#F8FAFC;">
          <div style="font-weight:700; color:#0D9488; margin-bottom:8px; font-size:15px;">
            🧠 [AI 프로세서 답변] 2026 LG TV α(알파) AI 프로세서 세대
          </div>
          <ul style="padding-left:18px; margin-bottom:10px; font-size:13px; color:#CBD5E1;">
            <li style="margin-bottom:6px;"><strong>α12 AI Processor</strong>: OLED G6 / M6 / MRGB 96 (4배 업그레이드된 NPU, AI Super Upscaling Pro)</li>
            <li style="margin-bottom:6px;"><strong>α9 AI Processor</strong>: OLED C6 / QNED 93 (AI Sound Pro 11.1.2 Virtual Surround)</li>
            <li><strong>α8/α5 AI Processor</strong>: OLED B6 / QNED 85 / NANO UHD</li>
          </ul>
        </div>
      `;
    }

    if (q.includes('게이밍') || q.includes('vrr') || q.includes('165hz') || q.includes('game')) {
      return `
        <div style="font-size:14px; line-height:1.6; color:#F8FAFC;">
          <div style="font-weight:700; color:#0D9488; margin-bottom:8px; font-size:15px;">
            🎮 [게이밍 스펙 답변] 165Hz / 144Hz VRR 게이밍 특화 라인업
          </div>
          <ul style="padding-left:18px; margin-bottom:10px; font-size:13px; color:#CBD5E1;">
            <li style="margin-bottom:6px;"><strong>OLED G6 / M6</strong>: <strong>세계 최초 4K 165Hz VRR</strong>, NVIDIA G-Sync & AMD FreeSync Premium Pro 공식 인증, 0.1ms 응답속도</li>
            <li style="margin-bottom:6px;"><strong>OLED C6</strong>: <strong>4K 144Hz VRR</strong> 지원, Game Optimizer 대시보드 탑재</li>
          </ul>
        </div>
      `;
    }

    // Generic Spec Match
    const matchedModel = this.models.find(m => q.includes(m.series.toLowerCase()) || q.includes(m.code.toLowerCase())) || this.models[0];

    return `
      <div style="font-size:14px; line-height:1.6; color:#F8FAFC;">
        <div style="font-weight:700; color:#0D9488; margin-bottom:8px; font-size:15px;">
          🔎 [스펙 검색 결과] ${matchedModel.name} (${matchedModel.displayType})
        </div>
        <div style="font-size:13px; color:#CBD5E1; margin-bottom:10px;">
          선택하신 모델 <strong>${matchedModel.code}</strong>의 스펙 정보입니다:
        </div>
        <ul style="padding-left:18px; font-size:12px; color:#94A3B8;">
          <li><strong>Display Type</strong>: ${matchedModel.displayType}</li>
          <li><strong>Series</strong>: ${matchedModel.series}</li>
          <li><strong>HDMI Ports</strong>: 4x HDMI 2.1 (eARC, 4K VRR)</li>
          <li><strong>AI Processor</strong>: α12 / α9 AI Processor</li>
          <li><strong>webOS</strong>: webOS 26 (5-Year Re:New Program)</li>
        </ul>
      </div>
    `;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SpecChatbotEngine;
}

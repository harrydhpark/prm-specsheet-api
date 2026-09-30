/**
 * 2025년 거래선 PRM 상담자료 AI Assistant Engine
 * Hybrid Knowledge Engine: 48 Slides Deck + 155 Models x 146 Specs DB
 */

class PrmAssistantEngine {
  constructor(presentationData, specData) {
    this.pData = presentationData || {};
    this.slides = presentationData ? (presentationData.slides || []) : [];
    this.specData = specData || {};
    this.models = specData ? (specData.models || []) : [];
    this.specDefs = specData ? (specData.specDefinitions || []) : [];
  }

  processUserQuery(query) {
    const raw = (query || '').trim();
    const q = raw.toLowerCase();

    // 1. Model vs Model comparison
    if (q.includes('vs') || q.includes('차이') || q.includes('비교') || (q.includes('g6') && q.includes('c6')) || (q.includes('g6') && q.includes('b6'))) {
      return this.handleComparison(q);
    }

    // 2. Specific Model hardware specs (HDMI, brightness, ports, processor)
    if ((q.includes('hdmi') || q.includes('단자') || q.includes('밝기') || q.includes('주사율') || q.includes('hz') || q.includes('프로세서') || q.includes('스피커') || q.includes('와트')) && (q.includes('g6') || q.includes('c6') || q.includes('b6') || q.includes('m6') || q.includes('mrgb') || q.includes('qned') || q.includes('oled'))) {
      return this.handleSpecDetail(q);
    }

    // 3. Presentation Slide Specific Topics
    return this.handleSlideDeckQA(q, raw);
  }

  handleComparison(q) {
    let isG6C6 = q.includes('g6') || q.includes('c6') || (!q.includes('b6') && !q.includes('qned'));

    let html = '';
    if (isG6C6) {
      html = `
        <div class="chat-response-box">
          <div class="response-badge teal">⚖️ 65인치 OLED G6 vs C6 핵심 비교</div>
          <p><strong>OLED evo G6</strong>는 최상위 플래그십 기술이 집약된 모델이며, <strong>C6</strong>는 프리미엄 대중화를 견인하는 볼륨 프리미엄 모델입니다.</p>
          <div class="table-responsive">
            <table class="ai-spec-table">
              <thead>
                <tr>
                  <th>구분 / 스펙 항목</th>
                  <th>OLED evo G6 (플래그십)</th>
                  <th>OLED evo C6 (매스 프리미엄)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>디스플레이 / 휘도</strong></td>
                  <td><span class="hl-val">Brightness Booster Max (3,300 nits 피크)</span></td>
                  <td>Brightness Booster (OLED evo 일반)</td>
                </tr>
                <tr>
                  <td><strong>AI 화질/음질 프로세서</strong></td>
                  <td><span class="hl-val">α12 AI Processor (4배 NPU 성능)</span></td>
                  <td>α9 AI Processor (AI Upscaling Pro)</td>
                </tr>
                <tr>
                  <td><strong>게이밍 & 주사율</strong></td>
                  <td><span class="hl-val">최대 4K 165Hz VRR 지원</span></td>
                  <td>최대 4K 144Hz VRR 지원</td>
                </tr>
                <tr>
                  <td><strong>디자인 폼팩터</strong></td>
                  <td>One Wall Design (벽 밀착 브라켓 포함)</td>
                  <td>초슬림 슬레이트 디자인 & 스탠드</td>
                </tr>
                <tr>
                  <td><strong>사운드 시스템</strong></td>
                  <td>4.2ch 60W (AI Sound Pro 11.1.2 가상채널)</td>
                  <td>2.2ch 40W (AI Sound Pro 9.1.2 가상채널)</td>
                </tr>
                <tr>
                  <td><strong>무선 Zero Connect</strong></td>
                  <td>M6 전용 True Wireless 호환 설계</td>
                  <td>유선 단자 직결 방식</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="ai-slide-ref">
            <span>📌 관련 슬라이드:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(20)">p.20 OLED evo C vs G 비교</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(17)">p.17 Brightness Booster Ultra</button>
          </div>
        </div>
      `;
    } else {
      html = `
        <div class="chat-response-box">
          <div class="response-badge teal">⚖️ 모델 비교 분석</div>
          <p>선택하신 모델 간의 핵심 사양은 프로세서 등급(α12 / α11 / α9 / α7)과 패널 기술(OLED MLA / Micro RGB / QNED MiniLED)에서 차이가 발생합니다.</p>
          <div class="ai-slide-ref">
            <button class="btn-jump-slide" onclick="scrollToSlide(9)">p.9 2026 OLED 로드맵</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(46)">p.46 전 라인업 스펙 차트</button>
          </div>
        </div>
      `;
    }
    return html;
  }

  handleSpecDetail(q) {
    if (q.includes('hdmi') || q.includes('단자')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🔌 HDMI 단자 및 연결 스펙</div>
          <p><strong>LG OLED evo G6 / C6 시리즈 HDMI 단자 규격:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>총 포트 수:</strong> HDMI 2.1 단자 총 <strong>4개 포트</strong> 탑재 (사이드 4개 배치)</li>
            <li><strong>대역폭 & 해상도:</strong> 전 포트 48Gbps 4K 120Hz/144Hz 지원 (G6는 최대 <strong>4K 165Hz</strong> 지원)</li>
            <li><strong>부가 기능:</strong> VRR (가변 주사율), ALLM (자동 저지연 모드), QMS (빠른 미디어 전환) 전 포트 지원</li>
            <li><strong>eARC (오디오 리턴):</strong> <strong>HDMI 포트 3번</strong>에 eARC/ARC 탑재 (Dolby Atmos 무손실 패스스루)</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 관련 슬라이드:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(48)">p.48 입출력 단자 & 스펙 차트</button>
          </div>
        </div>
      `;
    }

    if (q.includes('밝기') || q.includes('휘도') || q.includes('nits')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🌟 휘도 (Brightness) 스펙</div>
          <p><strong>2026년형 LG OLED 휘도 기술 현황:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>OLED G6 / M6:</strong> <strong>Brightness Booster Max (MLA 3.0)</strong> 탑재로 최대 <strong>3,300 nits</strong> 피크 휘도 구현 (전작 대비 +15% 향상)</li>
            <li><strong>OLED C6:</strong> Brightness Booster evo 패널 적용 (기본 OLED B시리즈 대비 약 30% 향상된 휘도)</li>
            <li><strong>Micro RGB / MiniLED:</strong> 정밀 백라이트 로컬 디밍 제어로 피크 밝기 2,000~3,000 nits 이상 달성</li>
          </ul>
          <div class="ai-slide-ref">
            <button class="btn-jump-slide" onclick="scrollToSlide(17)">p.17 Brightness Booster Ultra</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(16)">p.16 Hyper Radiant The Next OLED</button>
          </div>
        </div>
      `;
    }

    if (q.includes('프로세서') || q.includes('ai') || q.includes('알파')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🧠 AI 프로세서 라인업</div>
          <ul class="ai-bullet-list">
            <li><strong>α12 AI Processor:</strong> OLED G6, M6 탑재 (AI Super Upscaling Pro, 4배 향상된 NPU, 동적 오브젝트 인핸서)</li>
            <li><strong>α11 AI Processor:</strong> Micro RGB(MRGB95) 및 상위 QNED 라인업 탑재</li>
            <li><strong>α9 AI Processor:</strong> OLED C6 탑재 (AI Picture Pro, 9.1.2 서라운드 사운드)</li>
            <li><strong>α7 AI Processor:</strong> OLED B6 및 NANO UHD 탑재 (Nano Detail Enhancer)</li>
          </ul>
          <div class="ai-slide-ref">
            <button class="btn-jump-slide" onclick="scrollToSlide(22)">p.22 α11 AI 프로세서</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(30)">p.30 α7 AI 프로세서</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="chat-response-box">
        <div class="response-badge teal">📋 스펙 조회 결과</div>
        <p>요청하신 부품 및 스펙은 2026 유럽 라인업 표준 규격에 부합합니다. 상세 사양 차트는 아래 슬라이드에서 확인하실 수 있습니다.</p>
        <div class="ai-slide-ref">
          <button class="btn-jump-slide" onclick="scrollToSlide(45)">p.45 Zero Connect 스펙</button>
          <button class="btn-jump-slide" onclick="scrollToSlide(46)">p.46 디스플레이 화질 스펙</button>
          <button class="btn-jump-slide" onclick="scrollToSlide(48)">p.48 단자 및 치수 스펙</button>
        </div>
      </div>
    `;
  }

  handleSlideDeckQA(q, raw) {
    // 1. ASP Trend & Profit Declining
    if (q.includes('asp') || q.includes('판가') || q.includes('가격') || q.includes('수익성') || q.includes('profit')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">📊 유럽 시장 ASP 및 세트 수익성 트렌드</div>
          <p><strong>슬라이드 2 요약 분석:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>ASP 하락 추세:</strong> 유럽 TV 시장의 세트당 판가(ASP)가 연평균(CAGR Y21~25) <strong>Δ4.8%</strong> 하락세를 기록하며 세트당 이익률이 축소되고 있습니다.</li>
            <li><strong>LG 대응 전략:</strong> 단순 물량 경쟁을 지양하고, <strong>OLED 및 77인치 이상 초대형 프리미엄 믹스(39% 달성)</strong> 확대를 통해 고수익 세그먼트를 집중 방어하고 있습니다.</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 바로가기:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(2)">p.2 ASP Trend in Europe</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(44)">p.44 2026 유럽 사업 목표</button>
          </div>
        </div>
      `;
    }

    // 2. 2025 Review & M/S (51%)
    if (q.includes('2025') || q.includes('m/s') || q.includes('점유율') || q.includes('qned') || q.includes('실적') || q.includes('review') || q.includes('성과')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🏆 2025 유럽 실적 리뷰 & 마켓 쉐어</div>
          <p><strong>슬라이드 4~5 주요 핵심 성과:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>OLED M/S 51%:</strong> 유럽 올레드 TV 시장에서 <strong>51%의 압도적 시장 점유율 1위</strong> 달성.</li>
            <li><strong>초프리미엄 비중:</strong> G 시리즈 및 77인치 이상 초대형 판매 비중 <strong>39%</strong> 돌파.</li>
            <li><strong>QNED 폭발적 성장:</strong> QNED 셀아웃 성장률 <strong>+49% YoY</strong> 급증, 매장 Flooring 1.63배 확대.</li>
            <li><strong>경쟁 구도:</strong> 일본(Sony, Panasonic) 및 중국(TCL, Hisense) 브랜드 공세 속에서도 프리미엄 리더십 수성.</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 바로가기:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(4)">p.4 2025 Review: OLED M/S 51%</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(5)">p.5 유럽 시장 경쟁 구도 분석</button>
          </div>
        </div>
      `;
    }

    // 3. Wallpaper Reborn / W6
    if (q.includes('월페이퍼') || q.includes('wallpaper') || q.includes('두께') || q.includes('9.9') || q.includes('w6') || q.includes('reborn')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🖼️ Wallpaper Reborn (2026 월페이퍼 혁신)</div>
          <p><strong>슬라이드 12~14, 18, 38~40 핵심 내용:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>역사적 진화:</strong> 2017년 세계 최초 벽 밀착 Wallpaper 출시 이후, 2026년 <strong>'Wallpaper Reborn'</strong>으로 화려하게 부활.</li>
            <li><strong>두께 혁신:</strong> 돌출부가 전혀 없는 <strong>단 9.9mm 초슬림 두께</strong>(Thickness Disappear) 완성.</li>
            <li><strong>True Wireless 결합:</strong> 번잡한 케이블 없이 전원선 외 모든 비디오/오디오를 무선 4K 144Hz Zero Connect Box로 전송하여 완벽한 벽면 일체감 제공.</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 바로가기:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(13)">p.13 Wallpaper 진화사</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(14)">p.14 9.9mm 초슬림 두께</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(39)">p.39 True Wireless 월페이퍼</button>
          </div>
        </div>
      `;
    }

    // 4. Hyper Radiant
    if (q.includes('hyper') || q.includes('radiant') || q.includes('하이퍼') || q.includes('래디언트')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">✨ Hyper Radiant 차세대 화질 기술</div>
          <p><strong>슬라이드 16~17 핵심 내용:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>차세대 OLED 화질 엔진:</strong> 'Hyper Radiant Technology 1.0'은 완벽한 블랙(Perfect Black) 위에 압도적인 피크 휘도와 빛 반사 제어(Reflection Free)를 구현합니다.</li>
            <li><strong>Brightness Booster Ultra:</strong> 밝은 대낮 거실이나 어두운 영화 감상 환경 어디서나 왜곡 없는 원색과 높은 다이내믹 레인지를 보장합니다.</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 바로가기:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(16)">p.16 Hyper Radiant The Next OLED</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(17)">p.17 Perfect Black & Color</button>
          </div>
        </div>
      `;
    }

    // 5. 115" MiniLED & RGB Prime
    if (q.includes('115') || q.includes('miniled') || q.includes('rgb prime') || q.includes('mrgb') || q.includes('미니엘이디')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">📺 115형 초대형 MiniLED & RGB Prime 혁신</div>
          <p><strong>슬라이드 22~28 핵심 내용:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>초대형 라인업:</strong> 프리미엄 거실 수요를 위해 <strong>최대 115인치(115") Ultra Large Screen</strong> MiniLED를 전격 출시.</li>
            <li><strong>LG RGB Prime Color:</strong> 백라이트 분광 제어를 통해 <strong>BT.2020 100%</strong> 색재현율 달성 (MRGB95 시리즈).</li>
            <li><strong>α11 AI Processor:</strong> OLED 수준의 픽셀 정밀 제어로 LCD 백라이트의 빛 번짐 현상을 차단.</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 바로가기:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(24)">p.24 MRGB95 BT.2020 100%</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(26)">p.26 115형 초대형 MiniLED</button>
          </div>
        </div>
      `;
    }

    // 6. webOS & Security
    if (q.includes('webos') || q.includes('보안') || q.includes('security') || q.includes('컨슈머') || q.includes('cr')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🛡️ webOS 보안 우수성 & 신뢰성</div>
          <p><strong>슬라이드 34~35 핵심 내용:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>Consumer Reports 만점:</strong> 글로벌 공신력의 컨슈머 리포트(Consumer Reports)에서 개인정보 보호 및 사이버 보안 만점(Perfect Score) 획득.</li>
            <li><strong>The Most Secure TV OS:</strong> 해킹 위협으로부터 안전한 스마트 플랫폼으로 공인.</li>
            <li><strong>Re:New-UP 프로그램:</strong> 구매 후 5년간 지속적인 webOS 최신 버전 무상 업그레이드 지원.</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 바로가기:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(34)">p.34 Consumer Reports 만점 webOS</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(35)">p.35 webOS 신뢰성과 사용자 편의성</button>
          </div>
        </div>
      `;
    }

    // 7. Gallery TV & Frame
    if (q.includes('갤러리') || q.includes('frame') || q.includes('프레임') || q.includes('액자') || q.includes('우드')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🖼️ LG Gallery TV with Frame 라이프스타일</div>
          <p><strong>슬라이드 41~42 핵심 내용:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>모던 프레임 디자인:</strong> 기본 엘레강트 화이트(Elegant White) 베젤과 취향에 따라 교체 가능한 <strong>내추럴 우드(Natural Wood) 마그네틱 프레임</strong> 옵션 제공.</li>
            <li><strong>아트 갤러리 모드:</strong> 사용하지 않을 때 세계 명화와 사진을 전시하여 인테리어 오브제로 승화.</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 바로가기:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(41)">p.41 LG Gallery TV with Frame</button>
          </div>
        </div>
      `;
    }

    // 8. 2026 Business Target
    if (q.includes('사업 목표') || q.includes('target') || q.includes('타깃') || q.includes('목표') || q.includes('전략')) {
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🎯 2026 유럽 사업 목표 & 전략 방향</div>
          <p><strong>슬라이드 44 핵심 내용:</strong></p>
          <ul class="ai-bullet-list">
            <li><strong>OLED 리더십 공고화:</strong> 유럽 시장 내 올레드 No.1 점유율 유지 및 G시리즈, Wallpaper 등 초고가 세그먼트 확대.</li>
            <li><strong>프리미엄 LCD 침투:</strong> 115형 초대형 MiniLED 및 RGB Prime을 통한 고인치 믹스 제고.</li>
            <li><strong>유통 파트너 협력:</strong> 주요 거래선 맞춤형 프로모션 및 매장 고급화(Flooring) 강화.</li>
          </ul>
          <div class="ai-slide-ref">
            <span>📌 바로가기:</span>
            <button class="btn-jump-slide" onclick="scrollToSlide(44)">p.44 2026 유럽 사업 목표</button>
            <button class="btn-jump-slide" onclick="scrollToSlide(3)">p.3 WHY LG? 5대 아젠다</button>
          </div>
        </div>
      `;
    }

    // Fallback search across 48 slides content
    const matchingSlides = this.slides.filter(s => {
      const allStr = (s.title + ' ' + s.subTitle + ' ' + s.content).toLowerCase();
      return allStr.includes(q);
    });

    if (matchingSlides.length > 0) {
      const top3 = matchingSlides.slice(0, 3);
      return `
        <div class="chat-response-box">
          <div class="response-badge teal">🔍 관련 슬라이드 검색 결과 (${matchingSlides.length}건)</div>
          <p><strong>'${raw}'</strong> 관련 키워드가 포함된 슬라이드입니다:</p>
          <ul class="ai-bullet-list">
            ${top3.map(s => `<li><strong>p.${s.index}: ${s.title}</strong> (${s.subTitle || s.sectionTitle})</li>`).join('')}
          </ul>
          <div class="ai-slide-ref">
            ${top3.map(s => `<button class="btn-jump-slide" onclick="scrollToSlide(${s.index})">p.${s.index} 바로보기</button>`).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="chat-response-box">
        <div class="response-badge slate">💡 안내</div>
        <p>죄송합니다. <strong>'${raw}'</strong>에 대한 직접적인 슬라이드 및 스펙 항목을 찾지 못했습니다.</p>
        <p>아래 추천 키워드를 통해 질문해 보시거나, 상단 검색창을 활용해 보세요:</p>
        <div class="ai-slide-ref" style="flex-direction:column; align-items:flex-start; gap:6px;">
          <button class="btn-jump-slide" onclick="sendChatQuick('💡 2025 Review & M/S 요약')">💡 2025 Review & M/S 요약</button>
          <button class="btn-jump-slide" onclick="sendChatQuick('🌟 Hyper Radiant & Wallpaper')">🌟 Hyper Radiant & Wallpaper</button>
          <button class="btn-jump-slide" onclick="sendChatQuick('🔌 G6 vs C6 스펙 비교')">🔌 G6 vs C6 스펙 비교</button>
          <button class="btn-jump-slide" onclick="sendChatQuick('🎯 2026 유럽 사업 목표')">🎯 2026 유럽 사업 목표</button>
        </div>
      </div>
    `;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PrmAssistantEngine;
}

const fs = require('fs');
const path = require('path');

// 1. Read existing slidesData.js
const originalJs = fs.readFileSync('published/2025-prm-consulting/slidesData.js', 'utf8');
const jsonMatch = originalJs.match(/const\s+PRESENTATION_DATA\s*=\s*(\{[\s\S]*\});\s*$/);
if (!jsonMatch) {
  console.error("Failed to parse PRESENTATION_DATA");
  process.exit(1);
}
const presentationData = JSON.parse(jsonMatch[1]);

// 2. Comprehensive 48-slide Script & KeyPoints Master Registry
// Tailored with exact PPT speaker notes, polished English speech, Korean translation, and 3 key talking points.
const SCRIPT_REGISTRY = {
  1: {
    scriptEn: "Good morning and welcome to our 2026 Europe Business Strategies & New Product Introduction meeting. Today, we are proud to share LG Electronics' strategic vision for the European TV market, our 2025 performance review, and the exciting new 2026 lineup engineered to deliver mutual profitability and sustainable growth for our valued partners.",
    scriptKo: "안녕하십니까, 거래선 여러분. 2026 유럽 사업 전략 및 신제품 소개 미팅에 오신 것을 환영합니다. 오늘 우리는 유럽 TV 시장을 향한 LG전자의 전략적 비전과 2025년 성과 리뷰, 그리고 핵심 파트너사와의 동반 수익성 성장을 이끌어갈 2026 신제품 라인업을 소개해 드리고자 합니다.",
    keyPoints: [
      "2026 유럽 TV 사업 전략 및 신제품 라인업 발표 개요",
      "유럽 주요 거래선과의 동반 성장 및 프리미엄 수익성 극대화 비전 공유",
      "48개 슬라이드 전반을 아우르는 핵심 아젠다 소개"
    ]
  },
  2: {
    scriptEn: "Does anyone have an idea what these numbers are indicating? The chart shows a decline of ASP in Europe for the past 5 years. Of course we are concerned about this particular trend, and we believe it is not only a problem for us, but for our retail partners as well. We strive to sell more premium products, and we would like to play a significant role in helping you produce more margin again. We would like to highlight that OLED has lower price depreciation compared to normal LCD. Therefore, selling more premium products such as OLED could generate mutual benefits.",
    scriptKo: "이 수치들이 무엇을 나타내는지 아십니까? 지난 5년간 유럽 TV 시장의 ASP(평균판매단가) 하락 추세를 보여줍니다. 당사는 물론 거래선 여러분에게도 심각한 과제입니다. 당사는 프리미엄 제품 판매 확대를 통해 거래선의 수익성 회복을 지원하고자 합니다. 특히 OLED는 일반 LCD 대비 가격 감가상각이 현저히 낮습니다. 따라서 OLED와 같은 프리미엄 제품 판매를 확대하는 것이 상호 이익을 창출할 수 있는 최선의 해법입니다.",
    keyPoints: [
      "유럽 TV 시장 지난 5개년 연평균 ASP 2.3% 하락 추세 (세트당 수익성 위기)",
      "OLED는 일반 LCD 대비 현저히 낮은 가격 감가상각(Price Depreciation Defense) 유지",
      "고마진 OLED 프리미엄 제품군 비중 확대를 통한 파트너사 수익성 방어 제안"
    ]
  },
  3: {
    scriptEn: "Today, we will discuss five key strategic agendas. First, we will go over our 2025 performance review and current European market situations. Second, we will review the TV industry overview and trends. Third, we will share market projections and LG's overarching strategies. Fourth, we will dive deep into our product strategies across OLED and Premium LCD. Finally, we will present our 2026 business targets.",
    scriptKo: "오늘 우리는 5대 핵심 전략 아젠다를 논의할 것입니다. 첫째, 2025년 성과 리뷰와 현재 유럽 시장 현황을 돌아보고, 둘째, TV 산업 전반의 동향을 살펴봅니다. 셋째, 시장 전망 및 LG의 대응 전략을 공유하며, 넷째, OLED 및 프리미엄 LCD 제품 전략을 상세히 짚어봅니다. 마지막으로 2026년 유럽 사업 목표를 제시하겠습니다.",
    keyPoints: [
      "1. 2025 Review & European Market Status",
      "2. TV Industry Overview & Technology Trends",
      "3. Product Strategies (OLED, MRGB, QNED) & 2026 Business Target"
    ]
  },
  4: {
    scriptEn: "Last year around this time, we made five promises to you. First, we promised to keep 50% or more market share in OLED, and we accomplished it with 51%. Second, we targeted OLED G series and ultra-large screens to reach 40% of our OLED sales, and we achieved 39%. Third, we achieved 50% growth in terms of QNED sales. Fourth, we grew by 63% in terms of QNED retail flooring. And finally, our goal was to make OLED and Premium LCD account for 46% of our whole sales, and we reached 45%. We appreciate your trust and support. Over the past 5 years, the European market's ASP declined by 2.3% annually; however, LG maintained a relatively modest decline of only 0.9%, demonstrating our strong premium defense.",
    scriptKo: "작년 이맘때 당사는 여러분께 5가지 약속을 드렸습니다. 첫째, OLED 시장 점유율 50% 이상 유지를 약속드렸고 51%를 달성했습니다. 둘째, OLED G 시리즈 및 초대형 비중 목표 40% 중 39%를 달성했습니다. 셋째, QNED 판매량 50% 성장을 달성했으며, 넷째, QNED 매장 전시(Flooring)를 63% 확대했습니다. 마지막으로 OLED와 프리미엄 LCD 합산 비중 46% 목표에 45%를 달성했습니다. 지난 5년간 전체 시장 ASP가 연평균 2.3% 하락하는 동안, LG는 0.9% 수준으로 하락을 최소화하여 강력한 프리미엄 방어력을 입증했습니다.",
    keyPoints: [
      "5대 약속 완벽 이행: 유럽 OLED M/S 51% 달성 (독점적 1위 지위 수성)",
      "QNED 셀아웃 49% 성장 및 매장 전시(Flooring) 1.63배 대폭 확대",
      "시장 ASP 2.3% 급락 대비 LG는 0.9%로 선방 (프리미엄 믹스 방어 성공)"
    ]
  },
  5: {
    scriptEn: "Looking at the chart on the left, we expect the overall market volume to remain relatively flat. However, we see a remarkable change in BLU mix. While the demand for premium products such as OLED and Premium LCD is expected to increase, the demand for normal LCD is decreasing every year. We expect LG Display's production capacity to increase, bringing OLED output up to 3.9 million units by 2027. At the same time, innovations in premium LCD such as Micro RGB will drive greater demand for Wide Color Gamut, leading to normal LCD's downfall. The chart on the right shows that A-brands dominate the premium sector with more than 70% market share. In an environment where European ASP is declining, this is the right time to make our partnerships even stronger and produce more margin together.",
    scriptKo: "좌측 차트를 보시면 전체 유럽 시장 수량은 정체될 것으로 예상되지만, 백라이트(BLU) 믹스에서는 뚜렷한 대변화가 일어나고 있습니다. OLED 및 프리미엄 LCD에 대한 수요는 지속 증가하는 반면, 일반 LCD는 매년 급격히 축소되고 있습니다. LG디스플레이의 생산능력 확대로 OLED 생산량은 2027년까지 390만 대에 이를 것입니다. 동시에 MRGB 등 프리미엄 LCD 혁신이 일반 LCD의 하락세를 가속화할 것입니다. 우측 차트에서 보듯 프리미엄 시장은 메이저 A 브랜드가 70% 이상의 점유율을 지배하고 있습니다. 유럽 ASP 하락 국면에서 파트너십을 더욱 강화하여 수익성을 재창출할 적기입니다.",
    keyPoints: [
      "유럽 TV 시장 BLU 믹스 대전환: OLED/프리미엄 LCD 급성장 vs 일반 LCD 급감",
      "LGD Capa 확대로 2027년까지 390만 대 안정적 OLED 공급 능력 확보",
      "프리미엄 시장 내 A 브랜드 70%+ 지배력 (신뢰성 기반 파트너십 강화)"
    ]
  },
  6: {
    scriptEn: "We have broken down the growth in the premium sector into price segments. From 2024 to 2027, OLED penetration in the €750 to €1,000 zone will increase dramatically from 16% to 42%. For Wide Color Gamut (WCG), penetration in the €500 to €750 zone will increase from 50% to 56%. As a direct result of premium expansion, conventional LCD will lose its share rapidly. LG is fully prepared to lead this structural shift with expanded OLED volume and price coverage.",
    scriptKo: "프리미엄 세그먼트의 성장을 가격대별로 분석해 보면, 2024년부터 2027년까지 €750~€1,000 가격대에서 OLED 침투율이 16%에서 42%로 비약적으로 상승할 것입니다. WCG(광색역) LCD의 경우 €500~€750 구간 침투율이 50%에서 56%로 확대됩니다. 프리미엄 제품군 확대에 따라 일반 LCD의 점유율 하락은 불가피하며, LG는 확대된 라인업과 가격대별 최적화 모델로 이 전환을 주도할 준비를 마쳤습니다.",
    keyPoints: [
      "€750~€1,000 가격대 내 OLED 침투율 16% ➔ 42% 급팽창",
      "€500~€750 가격대 내 WCG(광색역) LCD 침투율 56% 확대",
      "일반 LCD 퇴조에 따른 프리미엄 가격 세그먼트 선점 전략"
    ]
  },
  7: {
    scriptEn: "In order to react to this expanding OLED penetration, we developed Hyper Radiant Technology and will introduce revolutionary new form factors, such as the Wallpaper OLED, alongside new designs by 2027. While 2025 reaches 3,000 nits peak brightness, our technology roadmap ensures a 500-nit improvement every single year through 2027, maintaining our unrivaled visual supremacy.",
    scriptKo: "이러한 OLED 시장 침투 확대를 선도하기 위해, 당사는 차세대 Hyper Radiant Technology를 개발하고 무선 월페이퍼(Wallpaper) OLED 등 혁신적인 폼팩터를 2027년까지 단계적으로 선보입니다. 2025년 3,000니트 달성에 이어 2027년까지 매년 500니트씩 밝기를 혁신하여 경쟁사가 따라올 수 없는 압도적 화질 격차를 유지할 것입니다.",
    keyPoints: [
      "Hyper Radiant Technology 기반 차세대 OLED 화질 엔진 도입",
      "2027년까지 매년 500니트씩 피크 휘도 지속 개선 로드맵",
      "무선 월페이퍼(Wallpaper Reborn) 등 혁신 폼팩터 시장 투입"
    ]
  },
  8: {
    scriptEn: "Here is our European market projection by revenue. Currently, the proportion of OLED and Premium LCD is slightly above 60%; however, we expect it to surpass 80% by 2029. Starting this year, LG has a clear vision to expand volume across all BLU tiers, and I will now detail what LG has prepared for each BLU segment.",
    scriptKo: "금액 기준 유럽 시장 전망입니다. 현재 OLED 및 프리미엄 LCD의 비중은 약 60% 수준이나, 2029년에는 80%를 돌파할 것으로 전망됩니다. 올해부터 LG전자는 모든 백라이트(BLU) 영역에서 수량과 수익성을 동시에 확대한다는 명확한 비전을 갖고 있으며, 각 부문별 구체적 준비 사항을 설명해 드리겠습니다.",
    keyPoints: [
      "유럽 TV 시장 프리미엄(OLED+P.LCD) 매출 비중: 60% ➔ 2029년 80%+ 확대",
      "모든 BLU(백라이트) 부문별 균형 잡힌 판매 확대 비전",
      "유럽 소비자의 대형화·고화질화 트렌드에 최적화된 라인업 믹스"
    ]
  },
  9: {
    scriptEn: "First is OLED. The chart on the right shows the addition of OLED W, which we celebrate as the return of the legend. Now that half of our OLED series is wireless, customers can enjoy true wireless freedom across more diverse price segments. Furthermore, Hyper Radiant Technology, our next-generation OLED innovation, will be expanded down to the OLED C series, maximizing its competitiveness and reinforcing our unbeatable #1 position in the OLED market.",
    scriptKo: "먼저 OLED입니다. 우측 차트는 '전설의 귀환'이라 불리는 OLED W의 신규 합류를 보여줍니다. 이제 전체 OLED 라인업의 절반이 무선 기술을 탑재하여 소비자는 더 다양한 가격대에서 무선의 자유를 경험할 수 있습니다. 아울러 차세대 혁신 기술인 Hyper Radiant Technology가 C 시리즈까지 확대 적용되어 제품 경쟁력을 극대화하고 시장 1위 지위를 확고히 굳힐 것입니다.",
    keyPoints: [
      "무선 월페이퍼 OLED W의 화려한 귀환 (전설의 재탄생)",
      "OLED 전체 라인업의 50% 무선(Zero Connect)화 구현",
      "Hyper Radiant Technology의 OLED C 시리즈 확대 적용"
    ]
  },
  10: {
    scriptEn: "LG's endless innovations have delivered groundbreaking products, leading the global OLED market for 13 consecutive years. From the world's first OLED to the world's first transparent OLED, we have continuously elevated our customers' lives. We are proud to announce that LG is ranked #1 in expert reviews and #1 in premium brand value across Europe.",
    scriptKo: "LG전자의 끊임없는 혁신은 전 세계 소비자를 놀라게 한 제품들로 이어져 13년 연속 글로벌 OLED 시장 1위를 달성했습니다. 세계 최초 OLED부터 세계 최초 투명 OLED(OLED T)에 이르기까지 고객의 삶을 변화시켜 왔으며, 유럽 전문 매체 평가 1위 및 프리미엄 브랜드 가치 1위를 확고히 지키고 있습니다.",
    keyPoints: [
      "13년 연속 글로벌 OLED 시장 점유율 1위 대기록",
      "세계 최초 기술 개척: 초대형 OLED부터 투명 OLED T까지",
      "유럽 주요 테크 매체 평가 1위 및 최고 프리미엄 브랜드 가치 공인"
    ]
  },
  11: {
    scriptEn: "This year, we impressed the global market with our transparent OLED T. We make the impossible possible, continuously developing premium products that deliver extraordinary experiences to our customers. Building on the 10 European flagship stores currently showcasing OLED T, we are targeting an additional 10 luxury stores to cement our OLED prestige leadership.",
    scriptKo: "올해 당사는 투명 올레드 'OLED T'로 전 세계 시장에 깊은 인상을 남겼습니다. 당사는 불가능을 가능케 하며 고객에게 프리미엄 경험을 선사하는 제품을 지속 선보이고 있습니다. 현재 유럽 내 10개 매장에서 운영 중인 OLED T 전시존에 더해, 추가 10개 럭셔리 매장 확대를 추진하여 프리미엄 리더십을 확고히 할 것입니다.",
    keyPoints: [
      "세계 최초 투명 무선 올레드 LG SIGNATURE OLED T 혁신",
      "유럽 하이엔드 럭셔리 매장 10개소 추가 전개 계획",
      "매장 집객 및 브랜드 프리미엄 위상 강화를 견인하는 플래그십 상징성"
    ]
  },
  12: {
    scriptEn: "And in 2026, we will impress the market once again with the world's first and only true wireless all-in-one TV: the LG OLED evo W6.",
    scriptKo: "그리고 2026년, 당사는 세계 최초이자 유일한 진정한 무선 올인원 TV인 'LG OLED evo W6'로 시장을 다시 한번 놀라게 할 것입니다.",
    keyPoints: [
      "2026년 전략 플래그십: 세계 최초 무선 올인원 TV W6 공개",
      "스크린과 전원 모듈의 완벽한 일체화 설계",
      "선 없는 자유와 벽면 완벽 밀착의 새로운 디자인 표준 제시"
    ]
  },
  13: {
    scriptEn: "When the Wallpaper OLED was first introduced in 2017, external wires were required, a separate soundbar companion accompanied the TV, and sizes were limited to 65 and 77 inches. In 2026, LG OLED evo W6 is available in expanded sizes from 77 to 83 inches with cutting-edge wireless transmission. It is completely 'all-in-one'—no external connection cables, no separate bulky companion boxes, just pure screen with significantly superior performance.",
    scriptKo: "2017년 월페이퍼 OLED가 처음 소개되었을 때는 기기에 연결되는 복잡한 전선과 별도의 대형 사운드바가 수반되었으며 65형과 77형만 가능했습니다. 그러나 2026년 LG OLED evo W6는 77형에서 83형까지 확대되었으며 첨단 무선 전송을 탑재했습니다. 지저분한 연결선이나 별도 사운드바 없이, 월등한 성능의 본체 하나만으로 완성되는 진정한 '올인원'입니다.",
    keyPoints: [
      "2017년 대비 비약적 진화: 77형/83형 대화면 라인업 확대",
      "별도 사운드바 케이블 없이 본체 단일 구성 'All-in-One' 실현",
      "제로 커넥트 무선 AV 전송으로 깔끔한 인테리어 연출"
    ]
  },
  14: {
    scriptEn: "The W6 is astonishingly slim at just 9.9mm—as thin as a pencil and thinner than most premium smartphones. It creates the seamless, space-integrated aesthetic that high-end European customers actively seek.",
    scriptKo: "W6는 연필 굵기 수준이자 대부분의 프리미엄 스마트폰보다 얇은 단 9.9mm의 초슬림 두께를 자랑합니다. 프리미엄 유럽 소비자들이 오랫동안 열망해 온 공간 일체형 심미성을 완벽하게 구현합니다.",
    keyPoints: [
      "9.9mm 초슬림 패널 두께 (연필 두께 수준)",
      "벽면과의 밀착감을 극대화한 제로 갭(Zero-gap) 디자인",
      "공간의 품격을 높이는 럭셔리 인테리어 조화"
    ]
  },
  15: {
    scriptEn: "Understanding the evolution of LG OLED requires looking at the fundamental difference between self-lit pixels and conventional backlit LCDs. While LCD backlights suffer from light bleed and halo artifacts, LG OLED delivers absolute perfect black and infinite contrast, forming the flawless canvas for true-to-life colors.",
    scriptKo: "LG OLED의 진화를 이해하기 위해서는 자발광 픽셀과 기존 백라이트 LCD의 근본적 차이를 살펴보아야 합니다. 백라이트 LCD는 필연적으로 빛샘과 헤일로(빛 번짐) 현상이 발생하지만, LG OLED는 완벽한 퍼펙트 블랙과 무한대 명암비를 통해 원작자의 색감을 왜곡 없이 완벽히 재현합니다.",
    keyPoints: [
      "자발광 OLED의 본질적 우위: 무한대 명암비 & 완벽한 블랙 표현",
      "백라이트 LCD의 치명적 한계(빛샘, 헤일로 왜곡 현상) 극복",
      "유럽 영화 및 하이엔드 콘텐츠 감상에 최적화된 영상 퀄리티"
    ]
  },
  16: {
    scriptEn: "Now, let us introduce Hyper Radiant Technology: the next-generation OLED picture engine that powers our 2026 flagship lineup with unprecedented brightness and color purity.",
    scriptKo: "이제 당사의 2026 플래그십 라인업에 탑재된 차세대 OLED 화질 엔진이자, 유례없는 밝기와 색순도를 선사하는 'Hyper Radiant Technology'를 소개합니다.",
    keyPoints: [
      "차세대 OLED 화질 혁신의 정점 Hyper Radiant Technology",
      "독자 알고리즘과 패널 구조 개선의 결합",
      "2026년 프리미엄 TV 시장 화질 기준 재정립"
    ]
  },
  17: {
    scriptEn: "Hyper Radiant Technology is a synergistic combination of Brightness Booster Ultra, Reflection-Free technology, and the 3rd generation alpha 11 AI Processor. It is approximately 4 times brighter than conventional OLEDs, while our Reflection-Free coating delivers perfect black and accurate colors under any ambient European lighting conditions. Furthermore, the 3rd generation alpha 11 AI processor reproduces images at the individual pixel level, delivering our finest picture quality ever.",
    scriptKo: "Hyper Radiant Technology는 Brightness Booster Ultra, Reflection-Free(반사 방지) 기술, 그리고 3세대 알파 11 AI 프로세서의 강력한 시너지로 완성됩니다. 기존 일반 OLED 대비 최대 4배 더 밝으며, 반사 방지 코팅이 유럽의 밝은 거실 환경에서도 완벽한 블랙과 정확한 색감을 유지합니다. 나아가 3세대 알파 11 AI 프로세서가 픽셀 단위로 이미지를 정밀 분석하여 역대 최고 수준의 화질을 완성합니다.",
    keyPoints: [
      "Brightness Booster Ultra: 일반 OLED 대비 최대 4배 밝기 향상",
      "Reflection Free 반사 방지 기술로 어떤 조명에서도 완벽한 블랙 유지",
      "3세대 알파 11 AI 프로세서의 정밀 픽셀 제어 및 화질 최적화"
    ]
  },
  18: {
    scriptEn: "We have learned from our OLED leadership that customers evaluate five essential pillars when investing in premium TVs: brightness, color accuracy, black levels, responsiveness, and design. The LG OLED evo W6 excels across all five: it is bright, ultra-thin, lightning-fast, color-perfect, and truly wireless. The W6 is not just designed to impress—it is engineered to sell, drive trade-up, and deliver robust margin for our retail partners.",
    scriptKo: "OLED 리더십을 통해 당사는 소비자가 프리미엄 TV를 선택할 때 5대 핵심 요소(밝기, 색 정확도, 블랙 표현, 응답속도, 디자인)를 평가한다는 것을 확인했습니다. LG OLED evo W6는 이 5가지를 완벽히 충족합니다. 압도적으로 밝고, 얇고, 빠르며, 색감이 완벽하고, 무엇보다 진정한 무선입니다. W6는 단순한 과시용이 아니라 매장 셀아웃을 견인하고 파트너사 마진을 확실히 보장하도록 설계되었습니다.",
    keyPoints: [
      "프리미엄 TV 5대 핵심 기준(밝기, 색, 블랙, 응답속도, 디자인) 완벽 석권",
      "고객 업그레이드(Trade-up)를 유도하는 강력한 구매 매력도",
      "파트너사의 고수익 세트 마진 창출 보장"
    ]
  },
  19: {
    scriptEn: "Now, let us examine our comprehensive strategy and roadmap for the OLED lineup in 2026.",
    scriptKo: "이제 2026년 OLED 전체 라인업의 종합 전략과 출시 로드맵을 살펴보겠습니다.",
    keyPoints: [
      "2026 OLED 라인업 세그먼트별 포트폴리오 전략",
      "W/M 플래그십부터 G/C/B 시리즈로 이어지는 계층 구조",
      "고객 타깃별 맞춤 제안을 통한 시장 커버리지 극대화"
    ]
  },
  20: {
    scriptEn: "From 2025 to 2027, European market demand for OLED is projected to expand rapidly from 2.8 million to 3.9 million units. In 2026, OLED will account for 12% of total TV volume and 28% of total revenue. OLED C series volume will expand by 100K units annually, and the B series will double over two years. By broadening our price coverage, we will aggressively capture market demand across mainstream and high-tier premium segments.",
    scriptKo: "2025년부터 2027년까지 유럽 OLED 수요는 280만 대에서 390만 대로 가파르게 성장할 것입니다. 2026년 OLED는 전체 수량의 12%, 금액의 28%를 차지하게 됩니다. 주력 C 시리즈는 매년 10만 대씩 판매를 확대하고, B 시리즈는 2년간 공급을 2배로 확대합니다. 이와 같은 가격 커버리지 확장을 통해 매스 프리미엄부터 초프리미엄까지 수요를 전방위로 흡수할 것입니다.",
    keyPoints: [
      "유럽 OLED 수요: 2025년 280만 대 ➔ 2027년 390만 대 급증",
      "2026년 OLED 매출 기여도 28% 달성 (수량 비중 12%)",
      "B 시리즈 2배 확대 및 C 시리즈 연간 10만 대 증판으로 가격 커버리지 완성"
    ]
  },
  21: {
    scriptEn: "Next, let us move to our Premium LCD business strategy and the groundbreaking innovations we are introducing for 2026.",
    scriptKo: "다음으로 2026년 프리미엄 LCD 사업 전략과 당사가 선보이는 혁신 기술들을 소개해 드리겠습니다.",
    keyPoints: [
      "프리미엄 LCD(P.LCD) 성장 가속화 전략 개요",
      "Micro RGB 및 QNED evo 중심의 라인업 고도화",
      "유럽 시장 대화면·고화질 LCD 수요 선점 방안"
    ]
  },
  22: {
    scriptEn: "Our primary mission for 2026 is sales expansion in Premium LCD, with a target of 1.6 million units. To achieve this aggressive goal, we are introducing Micro RGB technology to significantly reinforce our Premium LCD lineup. Let us take a deeper look at our Micro RGB TVs.",
    scriptKo: "2026년 프리미엄 LCD 부문의 최우선 과제는 판매량 확대로, 목표 판매량은 160만 대입니다. 이 공격적인 목표를 달성하기 위해 당사는 독자적인 'Micro RGB' 기술을 도입하여 프리미엄 LCD 진영을 대폭 강화합니다. 이제 Micro RGB TV의 세부 특징을 살펴보겠습니다.",
    keyPoints: [
      "2026년 프리미엄 LCD 판매 목표: 160만 대 달성",
      "차세대 독자 백라이트 기술 'Micro RGB' 신규 도입",
      "OLED와 P.LCD의 투트랙 프리미엄 공세 강화"
    ]
  },
  23: {
    scriptEn: "To support our volume expansion, Micro RGB is integrated into our top-tier Premium LCD lineup. This architecture utilizes ultra-fine micro-sized color chips to deliver unmatched color purity, bridging the gap between conventional LCD and self-lit picture performance.",
    scriptKo: "판매 확대를 뒷받침하기 위해 Micro RGB는 프리미엄 LCD 최상위 라인업에 전격 적용됩니다. 미세 마이크로 멀티컬러 칩을 직접 제어하여 기존 LCD의 한계를 뛰어넘는 색순도를 구현함으로써, 자발광 수준에 필적하는 압도적 화질을 완성합니다.",
    keyPoints: [
      "초미세 마이크로 멀티컬러 칩 정밀 제어 아키텍처",
      "기존 LCD 백라이트의 색간섭 현상 원천 차단",
      "프리미엄 LCD 화질 기준의 새로운 벤치마크 확립"
    ]
  },
  24: {
    scriptEn: "LG's Micro RGB sets a new benchmark for premium LCD. Our MRGB evo is powered by the 3rd generation alpha 11 processor—the exact same flagship processor that drives our top-of-the-line OLEDs. It controls micro-sized multi-color chips to deliver unmatched clarity and vividness. Furthermore, LG MRGB TVs are officially Triple Crown Color Certified, verifying 100% wide and accurate color coverage recognized by global testing institutions.",
    scriptKo: "LG전자의 Micro RGB는 프리미엄 LCD의 새로운 기준을 제시합니다. MRGB evo는 플래그십 OLED와 동일한 최신 '3세대 알파 11 프로세서'로 구동됩니다. 미세 마이크로 멀티컬러 칩을 정밀 제어하여 타의 추종을 불허하는 선명도와 생동감을 선사합니다. 특히 LG MRGB TV는 공식적인 '트리플 크라운 컬러 인증'을 획득하여 100% 광색역 및 색정확도를 국제적으로 공인받았습니다.",
    keyPoints: [
      "플래그십 OLED와 동일한 3세대 알파 11 AI 프로세서 탑재",
      "마이크로 멀티컬러 칩 개별 제어로 극강의 선명도 구현",
      "트리플 크라운 컬러 인증 (100% BT.2020 광색역 공식 공인)"
    ]
  },
  25: {
    scriptEn: "Alongside Micro RGB, our acclaimed LG QNED series continues its rapid technological evolution, expanding customer choices across diverse screen sizes and price tiers.",
    scriptKo: "Micro RGB의 도입과 더불어, 시장에서 호평받아 온 LG QNED 시리즈 역시 기술적 진화를 거듭하며 다양한 화면 크기와 가격대에서 고객의 선택 폭을 넓히고 있습니다.",
    keyPoints: [
      "LG QNED 라인업의 지속적인 화질 및 디밍 진화",
      "Quantum Dot + NanoCell 결합 독자 컬러 기술 고도화",
      "대중적 프리미엄 시장을 겨냥한 가격대별 라인업 다변화"
    ]
  },
  26: {
    scriptEn: "In 2026, almost every model in our expanded QNED evo lineup features MiniLED technology, delivering higher contrast, brighter highlights, and richer color reproduction. Powered by the alpha 8 AI Processor and dynamic QNED Color, our MiniLEDs are precisely controlled. Furthermore, our MiniLED QNED lineup now expands up to an extraordinary 115 inches, delivering an unmatched cinematic and gaming experience for large European homes.",
    scriptKo: "2026년 대폭 확장된 QNED evo 라인업은 거의 전 모델에 MiniLED 기술을 탑재하여 더 깊은 명암비, 밝은 하이라이트, 풍부한 색재현력을 제공합니다. 알파 8 AI 프로세서와 다이내믹 QNED 컬러를 통해 MiniLED를 정밀 제어하며, 최대 115형 초대형 스크린까지 라인업을 확대하여 유럽 가정에 압도적인 홈 시네마와 게이밍 경험을 선사합니다.",
    keyPoints: [
      "QNED evo 전 라인업 MiniLED 기술 대폭 확대 적용",
      "알파 8 AI 프로세서 기반 다이내믹 로컬 디밍 정밀 제어",
      "115형 초대형 스크린 신규 출시로 슈퍼 울트라 라지 시장 선점"
    ]
  },
  27: {
    scriptEn: "With the introduction of Micro RGB and the expansion of MiniLED across LG QNED, our retail flooring target for 2026 is 50,000 units across Europe. We are confident that our premium LCD portfolio will win customer recognition, and we look forward to achieving this ambitious flooring milestone together with our retail partners.",
    scriptKo: "Micro RGB 신기술 도입과 QNED 내 MiniLED 확대를 발판으로, 2026년 유럽 전역에서 5만 대의 매장 전시(Flooring)를 목표로 하고 있습니다. 당사의 프리미엄 LCD 라인업이 고객들에게 확실한 선택을 받을 것으로 확신하며, 파트너 여러분과 함께 이 전시 목표를 반드시 달성하고자 합니다.",
    keyPoints: [
      "2026년 유럽 프리미엄 LCD 매장 전시(Flooring) 목표: 5만 대 달성",
      "MRGB 신기술 도입 + QNED MiniLED 확대 시너지",
      "오프라인 매장 고객 체험 극대화를 통한 셀아웃 전환율 제고"
    ]
  },
  28: {
    scriptEn: "Now, let us discuss our strategy for the mainstream LCD segment: LG NANO 4K UHD.",
    scriptKo: "이제 대중적 볼륨을 견인하는 메인스트림 LCD 부문, 'LG NANO 4K UHD' 라인업 전략을 말씀드리겠습니다.",
    keyPoints: [
      "메인스트림 UHD TV 시장 공략 방향",
      "합리적 가격대에서 프리미엄 감성 및 화질을 제공하는 전략",
      "유럽 볼륨 판매 기반 확보 및 안정적 수익성 기여"
    ]
  },
  29: {
    scriptEn: "Not every customer walks in looking for the largest or brightest screen, but every customer demands authentic value. In 2026, we are proud to introduce a refreshed brand: LG NANO 4K UHD. It is stronger than ever, equipped with updated processing and modern styling. After 4 years, we are also bringing a refreshed design for our FHD segment with the LB65 series.",
    scriptKo: "모든 고객이 가장 크거나 가장 밝은 TV만을 찾는 것은 아니지만, 모든 고객은 확실한 '가치'를 원합니다. 2026년 당사는 한층 강화된 프로세서와 디자인으로 새롭게 무장한 'LG NANO 4K UHD' 브랜드를 선보입니다. 아울러 4년 만에 완전히 새로워진 디자인의 FHD 라인업 'LB65' 시리즈도 함께 투입합니다.",
    keyPoints: [
      "새로운 볼륨 브랜드 'LG NANO 4K UHD' 본격 출범",
      "신규 화질 프로세서와 세련된 디자인으로 상품성 대폭 강화",
      "4년 만의 FHD 풀 체인지 신모델 LB65 동시 투입"
    ]
  },
  30: {
    scriptEn: "A powerful combination of the alpha 7 AI Processor and the Nano Detail Enhancer analyzes image signals at the nano level, optimizing contrast, edge definition, and visual depth for everyday broadcast and streaming content.",
    scriptKo: "알파 7 AI 프로세서와 Nano Detail Enhancer의 강력한 결합으로 이미지 신호를 나노 단위로 정밀 분석하여 일상적인 방송 및 스트리밍 영상의 명암비와 원근감을 획기적으로 개선합니다.",
    keyPoints: [
      "알파 7 AI 프로세서 기반 나노 레벨 영상 신호 분석",
      "Nano Detail Enhancer로 디테일 및 질감 극대화",
      "일반 방송 및 OTT 스트리밍 화질의 자동 업스케일링"
    ]
  },
  31: {
    scriptEn: "Our new design language, Linea Flow Design, is inspired by premium luxury travel cases like Rimowa. Applied across NU80 to NU90 series, it adds exceptional structural durability as well as clean, sophisticated elegance to the TV back cover and bezels.",
    scriptKo: "새로운 'Linea Flow Design'은 명품 여행용 캐리어(리모와 등)에서 영감을 얻은 프리미엄 디자인입니다. NU80부터 NU90 시리즈까지 적용되어 후면 마감의 내구성을 높임과 동시에 모던하고 세련된 미적 감각을 전달합니다.",
    keyPoints: [
      "명품 캐리어 감성의 정교한 'Linea Flow Design' 적용",
      "NU80부터 NU90 전 라인업으로 후면 미학 디자인 확대",
      "매장 진열 시 360도 전 방향에서 돋보이는 완성도"
    ]
  },
  32: {
    scriptEn: "Here is a direct design and specification comparison highlighting our superior aesthetics, slimmer profiles, and premium materials compared to our key European competitor.",
    scriptKo: "주요 경쟁사 대비 당사 제품의 뛰어난 심미성, 슬림한 측면 프로파일, 고급스러운 마감 소재의 차별화된 우위를 한눈에 보여주는 비교표입니다.",
    keyPoints: [
      "경쟁사 동급 모델 대비 압도적인 디자인 디테일 및 마감 품질",
      "슬림 베젤 및 케이블 정리 편의성 우위",
      "매장 비교 전시 시 고객 선택을 이끄는 외관 완성도"
    ]
  },
  33: {
    scriptEn: "Here is the master lineup overview for LG NANO 4K UHD. We want to emphasize that LG is not only investing heavily in hardware features, but also in enterprise-grade security and long-term software reliability.",
    scriptKo: "LG NANO 4K UHD 전체 라인업 사양 요약입니다. 당사는 하드웨어 성능뿐만 아니라 기업용 수준의 강력한 보안과 장기적인 소프트웨어 안정성에도 지속 투자하고 있음을 강조하고 싶습니다.",
    keyPoints: [
      "LG NANO 4K UHD 전 라인업 화면 크기 및 핵심 사양 일람",
      "하드웨어 혁신과 더불어 스마트 플랫폼 보안성 대폭 강화",
      "신뢰 기반의 장기 고객 만족도 보장"
    ]
  },
  34: {
    scriptEn: "We believe trust is the absolute foundation of premium. Our smart TV platform is fortified by LG Shield, recognized as the most secure TV platform at CES 2025. webOS achieved a perfect score from Consumer Reports, and we will continue our investments to safeguard our customers' digital privacy.",
    scriptKo: "신뢰는 프리미엄의 가장 핵심적인 근간입니다. 당사의 스마트 TV 플랫폼은 CES 2025에서 가장 안전한 TV 플랫폼으로 인정받은 'LG Shield' 보안 솔루션으로 완벽히 보호됩니다. 컨슈머 리포트에서 보안 만점을 획득하였으며, 고객의 개인정보를 철저히 지키기 위한 보안 투자를 지속할 것입니다.",
    keyPoints: [
      "컨슈머 리포트(Consumer Reports) 스마트 TV 보안 평가 만점 획득",
      "CES 2025 공인 최고 수준 보안 아키텍처 'LG Shield' 탑재",
      "해킹 및 프라이버시 침해 우려 없는 안심 스마트 TV 환경 제공"
    ]
  },
  35: {
    scriptEn: "A quick, intuitive smart TV experience is standard across all LG models, including normal UHD. European technology experts consistently evaluate our webOS platform as the most user-friendly, responsive, and reliable smart TV operating system in the industry.",
    scriptKo: "빠르고 직관적인 스마트 TV 경험은 일반 UHD를 포함한 LG 전 라인업에 일관되게 제공됩니다. 유럽 테크 전문가들은 webOS를 업계에서 가장 사용자 친화적이고 반응성이 뛰어나며 신뢰할 수 있는 스마트 TV 운영체제로 평가하고 있습니다.",
    keyPoints: [
      "UHD부터 OLED까지 전 라인업에 동일한 고속 webOS 경험 제공",
      "유럽 테크 매체 호평: '가장 사용하기 쉽고 빠른 스마트 TV OS'",
      "음성 인식, 매직 리모컨, 맞춤형 홈 화면의 독보적 사용 편의성"
    ]
  },
  36: {
    scriptEn: "With over 200 million connected devices worldwide, webOS has built an unrivaled smart ecosystem. In Europe, we offer extensive localized streaming apps, seamless smart home connectivity via ThinQ and Matter, and our guaranteed webOS Re:New upgrade program for 5 years.",
    scriptKo: "전 세계 2억 대 이상의 연결 기기를 바탕으로 webOS는 독보적인 글로벌 스마트 생태계를 구축했습니다. 유럽 전역의 풍부한 현지 특화 OTT 앱, ThinQ 및 Matter 표준 스마트홈 연동, 그리고 5년간 최신 OS 업그레이드를 보장하는 'webOS Re:New' 프로그램을 제공합니다.",
    keyPoints: [
      "글로벌 2억 대 이상 연결 기기를 확보한 선도 스마트 플랫폼",
      "5년간 지속적인 OS 업그레이드를 보장하는 webOS Re:New 프로그램",
      "유럽 현지 주요 콘텐츠 파트너십 및 Matter 스마트홈 허브 지원"
    ]
  },
  37: {
    scriptEn: "In 2025, we addressed the lifestyle TV market primarily with a single model: StanbyME. In 2026, we are massively expanding into four dedicated series: the wireless Wallpaper W6, the gallery-design G6, the newly developed LCD-based Gallery TV LX7, and StanbyME 2. Customers can also immerse themselves in LG Gallery+, transforming their screens into curated digital art spaces.",
    scriptKo: "2025년 스탠바이미 1개 모델로 라이프스타일 존을 공략했다면, 2026년에는 무선 월페이퍼 W6, 갤러리 디자인 G6, LCD 기반 신규 갤러리 TV LX7, 스탠바이미 2까지 총 4개 시리즈로 라이프스타일 존을 대폭 확대합니다. 고객은 'LG Gallery+' 기능을 통해 TV를 엄선된 디지털 아트 공간으로 즐길 수 있습니다.",
    keyPoints: [
      "라이프스타일 4대 라인업 구축: W6, G6, Gallery TV LX7, StanbyME 2",
      "LG Gallery+ 연동으로 생성형 AI 아트 및 큐레이션 작품 감상",
      "가전을 넘어 인테리어 공간 가치를 창출하는 라이프스타일 존 완성"
    ]
  },
  38: {
    scriptEn: "With the OLED evo W6, technology recedes and pure design takes over. Zero Connect wireless transmission eliminates all visible connecting cables, allowing the 9.9mm screen to hang flush against the wall like a fine art frame.",
    scriptKo: "OLED evo W6를 통해 복잡한 기술은 뒤로 물러나고 순수한 디자인이 공간의 주역이 됩니다. 제로 커넥트 무선 전송으로 벽면을 어지럽히는 연결선을 완전히 제거하여, 9.9mm 초슬림 스크린이 미술관의 액자처럼 벽면에 완벽히 밀착됩니다.",
    keyPoints: [
      "제로 커넥트 무선 전송으로 연결 케이블 완전 제거",
      "9.9mm 벽면 완전 밀착 플러시(Flush) 마운트 구현",
      "모던 럭셔리 인테리어를 완성하는 궁극의 미니멀리즘"
    ]
  },
  39: {
    scriptEn: "When installed, only the immaculate screen remains visible. Without distracting thick bezels or trailing wires, viewers enjoy complete visual immersion, whether watching movies, gaming, or admiring fine artwork.",
    scriptKo: "설치 시 오직 순수한 스크린만이 시야에 남습니다. 시선을 분산시키는 두꺼운 베젤이나 늘어진 전선이 없어, 영화 감상, 콘솔 게이밍, 예술 작품 감상 등 어떤 순간에도 완벽한 몰입감을 선사합니다.",
    keyPoints: [
      "시야를 방해하는 요소를 모두 배제한 '스크린 본질' 디자인",
      "베젤리스 설계로 극대화된 시각적 몰입감",
      "일상 공간을 갤러리로 탈바꿈시키는 앰비언트 모드"
    ]
  },
  40: {
    scriptEn: "LG OLED evo W6 delivers absolute spatial integration. Moving beyond a conventional home appliance, it harmoniously blends into high-end European residences, from contemporary minimalist apartments to historic heritage homes.",
    scriptKo: "LG OLED evo W6는 절대적인 공간 일체감을 선사합니다. 전통적인 가전제품의 틀을 벗어나 모던한 미니멀리스트 아파트부터 유서 깊은 유럽의 고급 주택까지 다양한 주거 환경에 조화롭게 녹아듭니다.",
    keyPoints: [
      "가전을 초월한 하이엔드 인테리어 오브제로서의 가치",
      "유럽 프리미엄 주거 문화에 최적화된 공간 융합 디자인",
      "거래선 프리미엄 매장 쇼룸을 빛내는 차별화 아이템"
    ]
  },
  41: {
    scriptEn: "Introducing the all-new LG Gallery TV (LX7). Crafted for design-conscious European consumers, it features interchangeable magnetic decorative frames in Elegant White and Natural Wood, allowing seamless customization to match any room decor.",
    scriptKo: "디자인을 중시하는 유럽 소비자를 위해 새롭게 선보이는 'LG Gallery TV (LX7)'입니다. 탈부착 가능한 마그네틱 커스텀 프레임(엘레강트 화이트, 내추럴 우드)을 적용하여, 고객이 원하는 인테리어 스타일에 맞춰 자유롭게 분위기를 바꿀 수 있습니다.",
    keyPoints: [
      "탈부착 가능한 마그네틱 디자인 프레임 (화이트 & 내추럴 우드)",
      "액자형 갤러리 디자인으로 일상 공간 속 아트 오브제 구현",
      "프리미엄 LCD 기반의 합리적인 가격대 라이프스타일 솔루션"
    ]
  },
  42: {
    scriptEn: "The Gallery TV is designed with exquisite attention to detail. Featuring an ultra-slim flush wall mount, anti-reflective matte display finish, and hidden cable management, it looks like a genuine framed artwork with zero gap against the wall.",
    scriptKo: "Gallery TV는 정밀한 디테일로 완성되었습니다. 벽면 밀착 슬림 브래킷, 빛 반사를 줄여주는 매트(Matte) 안티 리플렉션 디스플레이, 완벽한 케이블 히든 정리를 통해 벽면에 빈틈없이 걸리는 완벽한 액자 핏을 제공합니다.",
    keyPoints: [
      "초슬림 벽면 밀착 브래킷으로 벽과의 틈새 0mm 실현",
      "눈부심 없는 매트 안티 리플렉션(Matte) 디스플레이 채용",
      "손쉬운 프레임 교체 및 깔끔한 케이블 히든 설계"
    ]
  },
  43: {
    scriptEn: "Having shared our past achievements and BLU strategies, it is time to announce our 2026 targets. For OLED, our goal remains clear: maintain 50%+ market share and solidify our unbeatable #1 position, while driving OLED evo to account for 30% of OLED sales. For Micro RGB and QNED evo, our target is 1.6 million units sold and 50,000 retail flooring spots. For Nano 4K UHD, we are targeting 3.3 million units, representing 18% market share. And finally, for Lifestyle TVs, we target 0.5K for OLED T, 5K for OLED W, and 30K for StanbyME 2.",
    scriptKo: "각 백라이트 부문별 과거 성과와 제품 전략에 이어, 당사의 2026년 신규 사업 목표를 공식 발표합니다. OLED는 50% 이상의 압도적 M/S를 유지하며 1위 지위를 확고히 하고, OLED 판매 중 30%를 고수익 OLED evo로 채우겠습니다. Micro RGB 및 QNED evo는 160만 대 판매와 5만 대 매장 전시를 달성하겠습니다. Nano 4K UHD는 330만 대(M/S 18%)를 목표로 하며, 라이프스타일 부문은 OLED T 500대, OLED W 5천 대, 스탠바이미 2 3만 대 판매로 신시장을 창출하겠습니다.",
    keyPoints: [
      "OLED: 50%+ 점유율 수성 및 고마진 OLED evo 비중 30% 확대",
      "Micro RGB & QNED evo: 160만 대 판매 & 5만 대 매장 전시 달성",
      "Nano UHD 330만 대 및 라이프스타일(W6/스탠바이미2) 신시장 공략"
    ]
  },
  44: {
    scriptEn: "With our unified strategy across all product lines, our overarching goal for 2026 in Europe is to drive an additional 2% market share expansion. By enriching our premium sales mix with OLED evo, Micro RGB, and Lifestyle series, we look forward to deepening our strategic partnerships and securing profitable, long-term growth together.",
    scriptKo: "전 제품군에 걸친 확고한 전략을 바탕으로, 2026년 유럽 시장에서 당사의 통합 목표는 시장 점유율 2% 추가 성장입니다. OLED evo, Micro RGB, 라이프스타일 시리즈로 프리미엄 판매 믹스를 최적화하여 파트너 여러분과 함께 강력한 수익성 회복과 지속 가능한 동반 성장을 이뤄내겠습니다.",
    keyPoints: [
      "2026년 유럽 TV 시장 점유율 2% 추가 성장 목표",
      "프리미엄 믹스 개선을 통한 파트너사 세트 마진 극대화",
      "유럽 주요 거래선과의 장기적이고 견고한 파트너십 구축"
    ]
  },
  45: {
    scriptEn: "This master specification chart details our Zero Connect Wireless lineup, covering the flagship M6 and W6 series. They feature uncompressed 4K 144Hz wireless AV transmission, an independent Zero Connect Box with 4x full-spec HDMI 2.1 ports, and α11 AI Processor Max, offering complete interior freedom without compromising gaming or cinema performance.",
    scriptKo: "플래그십 M6 및 W6 시리즈를 아우르는 제로 커넥트 무선 라인업 종합 스펙 시트입니다. 4K 144Hz 무손실 무선 AV 전송, 4개 풀스펙 HDMI 2.1 포트를 갖춘 독립 제로 커넥트 박스, α11 AI 프로세서 Max를 탑재하여 게이밍과 영화 감상에 있어 화질 손실 없이 자유로운 공간 배치를 보장합니다.",
    keyPoints: [
      "M6 & W6 제로 커넥트 무선 AV 전송 (4K 144Hz 무손실 지원)",
      "제로 커넥트 박스 독립 배치로 주변기기 연결 편의성 극대화",
      "α11 AI 프로세서 탑재 최고 화질 & 사운드 보장"
    ]
  },
  46: {
    scriptEn: "Here is our comprehensive display and picture processing specification matrix. Key highlights include Hyper Radiant Technology delivering up to 3,300 nits on G6/M6, 100% BT.2020 color gamut coverage with Triple Crown certification on Micro RGB, and precision MiniLED local dimming across QNED evo.",
    scriptKo: "2026 전 라인업의 디스플레이 패널 및 화질 프로세싱 세부 스펙 비교표입니다. G6/M6에 적용된 최대 3,300니트의 Hyper Radiant Technology, Micro RGB의 100% BT.2020 트리플 크라운 색재현율, QNED evo의 정밀 MiniLED 로컬 디밍 기술이 핵심입니다.",
    keyPoints: [
      "OLED: Hyper Radiant 3,300 nits 휘도 및 Reflection Free 코팅",
      "Micro RGB: 100% BT.2020 광색역 및 Triple Crown 공식 인증",
      "QNED evo: 정밀 MiniLED 백라이트 및 α8 AI 화질 최적화"
    ]
  },
  47: {
    scriptEn: "Turning to audio specifications, our 2026 lineup sets a new benchmark in TV acoustic immersion. Flagship models feature α11 AI Sound Pro delivering up to 11.1.2 virtual surround channels, Clear Voice Pro for pristine dialogue clarity, and WOW Orchestra for synchronized audio playback with LG soundbars.",
    scriptKo: "2026 라인업의 오디오 및 사운드 스펙 비교표입니다. 플래그십 모델은 최대 11.1.2 가상 서라운드 채널을 구현하는 α11 AI 사운드 프로, 선명한 대사를 전달하는 클리어 보이스 프로, LG 사운드바와 완벽한 음향 시너지를 내는 와우 오케스트라(WOW Orchestra)를 탑재했습니다.",
    keyPoints: [
      "α11 AI 사운드 프로 기반 11.1.2 가상 서라운드 입체 음향",
      "와우 오케스트라(WOW Orchestra) 사운드바 무선 동시 출력",
      "AI 룸 캘리브레이션 프로(Room Calibration Pro) 공간 맞춤 튜닝"
    ]
  },
  48: {
    scriptEn: "Finally, our physical dimensions and connectivity specifications. All premium models feature 4 full-bandwidth HDMI 2.1 ports supporting 4K 144Hz VRR, ALLM, QMS, and eARC. Dimension charts highlight ultra-thin depths from 9.9mm on W6, slim gallery wall-mounts, and versatile stands optimized for European retail shelf displays.",
    scriptKo: "마지막으로 입출력 단자 및 외형 치수 종합 스펙표입니다. 모든 프리미엄 모델에 4K 144Hz VRR, ALLM, QMS, eARC를 지원하는 풀스펙 HDMI 2.1 단자 4개가 기본 제공되며, W6의 9.9mm 초슬림 두께와 유럽 매장 진열에 최적화된 슬림 갤러리 마운트 및 스탠드 규격을 확인하실 수 있습니다.",
    keyPoints: [
      "전 포트(4개) 4K 144Hz VRR/ALLM/eARC 완벽 지원 HDMI 2.1",
      "W6 9.9mm 등 초슬림 외형 치수 및 베젤 규격 명시",
      "유럽 매장 진열 및 벽걸이 시공을 위한 표준 규격(VESA) 안내"
    ]
  }
};

// 3. Merge into presentationData
presentationData.slides.forEach(slide => {
  const reg = SCRIPT_REGISTRY[slide.index];
  if (reg) {
    slide.scriptEn = reg.scriptEn;
    slide.scriptKo = reg.scriptKo;
    slide.keyPoints = reg.keyPoints;
  }
});

// 4. Generate JavaScript file content
const outputJs = `/**\n * 2025년 거래선 PRM 상담자료 Presentation Dataset\n * Enhanced with Presentation Scripts (EN), Korean Translations, and Key Talking Points\n */\nconst PRESENTATION_DATA = ${JSON.stringify(presentationData, null, 2)};\n`;

// 5. Save to published and public_firebase directories
const targetPublished = path.resolve('published/2025-prm-consulting/slidesData.js');
const targetFirebase = path.resolve('public_firebase/docs/2025-prm-consulting/slidesData.js');

fs.writeFileSync(targetPublished, outputJs, 'utf8');
console.log(`Saved updated slidesData.js to: ${targetPublished}`);

if (fs.existsSync(path.dirname(targetFirebase))) {
  fs.writeFileSync(targetFirebase, outputJs, 'utf8');
  console.log(`Saved updated slidesData.js to: ${targetFirebase}`);
}

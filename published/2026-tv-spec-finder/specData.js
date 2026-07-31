const SPEC_PORTAL_DATA = {
  "title": "2026 LG TV Specification Finder & Comparison Portal",
  "version": "v7.5.0 1 (2026.06.24)",
  "updatedAt": "2026-07-24",
  "totalModels": 31,
  "totalSpecs": 146,
  "categories": [
    "PICTURE (DISPLAY)",
    "PICTURE (PROCESSING)",
    "GAMING",
    "SMART TV",
    "AUDIO",
    "BROADCASTING",
    "CONNECTIVITY",
    "ACCESSIBILITY",
    "POWER",
    "Design",
    "ACCESSORIES INCLUDED",
    "ADDITIONAL FEATURE"
  ],
  "displayTypes": [
    "4K OLED",
    "4K Micro RGB",
    "4K QNED MiniLED",
    "4K QNED",
    "4K TV",
    "4K NanoCell"
  ],
  "specDefinitions": [
    {
      "id": "1-1",
      "category": "PICTURE (DISPLAY)",
      "feature": "Display Type",
      "level": "LV1",
      "descKo": "8K OLED / 4K OLED / 4K Micro RGB / 4K Mini RGB / 8K QNED MiniLED / 4K QNED MiniLED / 4K QNED / 4K NanoCell / 4K UHD / FHD / HD",
      "descEn": "8K OLED / 4K OLED / 4K Micro RGB / 4K Mini RGB / 8K QNED MiniLED / 4K QNED MiniLED / 4K QNED / 4K NanoCell / 4K UHD / FHD / HD",
      "standardVal": "8K OLED / 4K OLED / 4K Micro RGB / 4K Mini RGB / 8K QNED MiniLED / 4K QNED MiniLED / 4K QNED / 4K NanoCell / 4K UHD / FHD / HD"
    },
    {
      "id": "1-2",
      "category": "PICTURE (DISPLAY)",
      "feature": "Display Resolution",
      "level": "LV1",
      "descKo": "디스플레이 가로 x 세로 픽셀 수",
      "descEn": "Number of pixels (horizontal x vertical)",
      "standardVal": "8K (7,680 x 4,320)\n4K Ultra HD (3,840 x 2,160)\nFull HD (1,920 x 1,080)\nHD (1,366 x 768)"
    },
    {
      "id": "1-3",
      "category": "PICTURE (DISPLAY)",
      "feature": "Backlight Type",
      "level": "LV1",
      "descKo": "LCD에서 Micro RGB, Mini, Direct, Edge등 BLU 플랫폼 구분",
      "descEn": "Classification of BLU platforms such as Micro RGB, Mini LED , Direct and Edge in LCD",
      "standardVal": "(For LCD Only)\nMicro RGB\nMini RGB\nMini LED\nEdge\nDirect"
    },
    {
      "id": "1-4",
      "category": "PICTURE (DISPLAY)",
      "feature": "Display Size",
      "level": "LV2",
      "descKo": "화면 대각선 길이 (by Inch)\n여기에서 내부 관리를 위해 32/32H로 구분하나, 최종 고객 노출은 32로만 진행",
      "descEn": "Diagonal Length (by Inch)",
      "standardVal": "115/100/98/97/88/86/85/83/77/75/70/65/55/50/48/43/42/32/32H/27/24\n\n※ 32/32H는 최종 고객 노출시 32로 통일"
    },
    {
      "id": "1-5",
      "category": "PICTURE (DISPLAY)",
      "feature": "Refresh Rate",
      "level": "LV1",
      "descKo": "Backlight scanning or Blinking 방식을 통해 MPRT를 개선하는 방법",
      "descEn": "Increasing the frequency of the output image will slightly smooth moving image by overlapping frames, if the original video has a frequency of 60(50) frames per second frame is duplicated 2 times more can be achieved in the frequency of 120(100) frames.",
      "standardVal": "120Hz Native (VRR 165Hz) /\n120Hz Native (VRR 144Hz) /\n120Hz Native (VRR 120Hz) /\n120Hz Native /\n60Hz Native"
    },
    {
      "id": "1-6",
      "category": "PICTURE (DISPLAY)",
      "feature": "Perfect Black",
      "level": "LV1",
      "descKo": "무한대 명암비로 진정한 블랙을 표현",
      "descEn": "express true black with infinite contrast ratio",
      "standardVal": "Yes / -"
    },
    {
      "id": "1-7",
      "category": "PICTURE (DISPLAY)",
      "feature": "Wide Color Gamut",
      "level": "LV1",
      "descKo": "색재현율 확대로 영상의 풍부한 색감 구현\n(DCI 수치로 구분)\n\n1) OLED \n - Perfect Color : Color Gamut ≥ 98% (W6, G6, C6, B6) (* B6E 미지원)\n\n2) Micro RGB\n - RGB Primary Color Ultra  : BT2020 ≥ 90%, Color Gamut ≥ 99% (MRGB95B)\n - RGB Primary Color Pro : BT2020 ≥ 75%, Color Gamut ≥ 97% (MRGB9MB, MRGB85B)\n\n3) QNED \n  - Dynamic QNED Color Pro : Color Gamut ≥ 95% (115QNED90B/85B/82B/8MB/80B)\n  - Dynamic QNED Color : Color Gamut ≥ 93% (85/75/65/55QNED90B, QNED70B)",
      "descEn": "provides richer colors by expanding the color gamut.\n\n1) OLED \n - Perfect Color : Color Gamut ≥ 98% (W6, G6, C6, B6)\n\n2) Micro RGB\n - RGB Primary Color Ultra  : BT2020 ≥ 90%, Color Gamut ≥ 99% (MRGB95B)\n - RGB Primary Color Pro : BT2020 ≥ 75%, Color Gamut ≥ 97% (MRGB9MB, MRGB85B)\n\n3) QNED \n  - Dynamic QNED Color Pro : Color Gamut ≥ 95% (115QNED90B/85B/82B/8MB/80B)\n  - Dynamic QNED Color : Color Gamut ≥ 93% (85/75/65/55QNED90B, QNED70B)",
      "standardVal": "Perfect Color /\nRGB Primary Color Ultra (Triple 100% Color certified) /\nRGB Primary Color Pro (Double 100% Color certified) /\nDynamic QNED Color Pro (100% Color Volume certified) /\nDynamic QNED Color (100% Color Volume certified)"
    },
    {
      "id": "2-1",
      "category": "PICTURE (PROCESSING)",
      "feature": "Picture Processor",
      "level": "LV1",
      "descKo": "각종 신호 입력을 처리하고, 스마트 기능의 성능을 좌우하며, 화질 음질을 향상시키는 신호처리 프로세서",
      "descEn": "A signal processing processor that processes various signal inputs, determines the performance of smart functions, and improves picture and sound quality",
      "standardVal": "O26 : Alpha 11 AI Processor 4K Gen3 with Dual AI Engine\nK26 : Alpha 8 AI Processor 4K Gen3\nK24 : Alpha 8 AI Processor 4K Gen2\nK25Lp : Alpha 7 AI Processor 4K Gen9\nLM24F : Alpha 5 AI Processor Gen9"
    },
    {
      "id": "2-1-1",
      "category": "PICTURE (PROCESSING)",
      "feature": "Number of CPUs",
      "level": "LV2",
      "descKo": "SoC 내 Main CPU 개수",
      "descEn": "Number of Main CPUs in SoC",
      "standardVal": "Octa/ Quad / Dual / Single"
    },
    {
      "id": "2-2",
      "category": "PICTURE (PROCESSING)",
      "feature": "Brightness Booster",
      "level": "LV1",
      "descKo": "초고화질 밝기 기술로 α11 AI 프로세서의 알고리즘을 통해 더 밝고 풍부한 색상을 구현함\n\nBrightness Booster Ultra : W6, 83/77/65/55G6\nBrightness Booster Pro : 48G6, 83/77C6\nBrightness Booster : 97G6, 65/55/48C6",
      "descEn": "Ultra-high color Brightness technology that makes brighter and richer color through the algorithm of α11 AI Processor\n\nBrightness Booster Ultra : W6, 83/77/65/55G6\nBrightness Booster Pro : 48G6, 83/77C6\nBrightness Booster : 97G6, 65/55/48C6",
      "standardVal": "Yes (Brightness Booster Ultra) /\nYes (Brightness Booster Pro) / \nYes /\n-"
    },
    {
      "id": "2-3",
      "category": "PICTURE (PROCESSING)",
      "feature": "Reflection Free",
      "level": "LV1",
      "descKo": "Anti-Glare 보다 뛰어난 Reflection Free 인증으로,  밝은 환경에서도 OLED의 완벽한 블랙을 재현함\n\nReflection Free Premium : Reflectivity < 0.5% (W6, 83/77/65/55G6)\nReflection Free : 0.5% ≤ Reflectivity < 1.0%",
      "descEn": "Certified Reflection Free, surpassing Anti-Glare, it reproduces OLED's perfect black even in bright environments",
      "standardVal": "Yes (Reflection Free Premium) /\nYes /\n-"
    },
    {
      "id": "2-4",
      "category": "PICTURE (PROCESSING)",
      "feature": "AI Picture Pro",
      "level": "LV1",
      "descKo": "딥러닝 알고리즘으로 화질 향상\n\nAI Picture Pro : (α11, α8 적용 모델)\nW6, G6, C6, B6, MRGB95B/9MB/85B,  QNED90B/85B/82B, 98NU85",
      "descEn": "Picture quality improvement with deep learning algorithm\n\nAI Picture Pro : (SoC α11/α8)\nW6, G6, C6, B6, MRGB95B/9MB/85B,  QNED90B/85B/82B, 98NU85",
      "standardVal": "Yes / -"
    },
    {
      "id": "2-4-1",
      "category": "PICTURE (PROCESSING)",
      "feature": "AI Upscaling",
      "level": "LV1",
      "descKo": "저해상도 영상을 디스플레이 또는 윈도우 해상도에 맞춰 업/다운 스케일링 해주는 기능 : 이 알고리즘 성능에 따라 디테일 복원 능력이 다르며, 머신러닝 또는 딥러닝이 사용될 수 있다\n\nAlpha 11 AI Super Upscaling 4K : W6, G6, C6, MRGB95B/9MB\n - AI Dual Super Upscaling : Sharpness & Noise Reduction, enhance Face & Subtitle expression\n\nAlpha 8 AI Super Upscaling 4K : B6, B6E, MRGB85B, QNED90B/85B/82B/8MB, 98NU85\n\n4K Super Upscaling : QNED80B/70B, 85/75/65/55/50/43NU85, NU80\n\nResolution Upscaler : LB70/LB65",
      "descEn": "A function that up/downscales a low-resolution image according to the display or window resolution\n\nAlpha 11 AI Super Upscaling 4K : W6, G6, C6, MRGB95B/9MB\n - AI Dual Super Upscaling : Sharpness & Noise Reduction, enhance Face & Subtitle expression\n\nAlpha 8 AI Super Upscaling 4K : B6, B6E, MRGB85B, QNED90B/85B/82B/8MB, 98NU85\n\n4K Super Upscaling : QNED80B/70B, 85/75/65/55/50/43NU85, NU80\n\nResolution Upscaler : LB70/LB65",
      "standardVal": "Alpha 11 AI Super Upscaling 4K /\nAlpha 8 AI Super Upscaling 4K /\n4K Super Upscaling /\nResolution Upscaler"
    },
    {
      "id": "2-4-2",
      "category": "PICTURE (PROCESSING)",
      "feature": "Dynamic Tone Mapping",
      "level": "LV1",
      "descKo": "1) Dynamic Tone Mapping : 영상 명암 정보를 세밀하게 분석하고 보정하는 기술로, 영상 장면마다 밝기와 명암비를 최적화해 밝은 곳은 더 밝게, 어두운 곳은 더 어둡게 표현해 화면의 입체감을 높여준다.\n\n2) Dynamic Tone Mapping Pro : Dynamic Tone Mapping 후에, 영상 장면마다 각 로컬 블록 단위별 최적의 Tone mapping을 한번더 수행한다.\n  ① Local Contrast Enhancer : α11는 5,184(96x54)개, α8는 2,040(60x34)개의 로컬 블록 영역으로 세분화하여 이미지 분석을 통해 최적의 톤 커브를 적용하여 로컬 영역별 Contrast 향상\n\n3) Dynamic Tone Mapping Ultra : Dynamic Tone Mapping Pro + Local Brightness Enhancer + AI Multi-Peak Dynamic Tone Mapping\n  ① Local Brightness Enhancer : 20,736개의 로컬 블록 영역의 grayscale 분석을 통해 영역별 밝기 향상\n  ② AI Multi-Peak Dynamic Tone Mapping : 과도하게 포화된 고계조 이미지와 중/저계조의 밝기를 개선",
      "descEn": "1) Dynamic Tone Mapping : It is a technology that analyzes and corrects image contrast information in detail. It optimizes the brightness and contrast ratio for each video scene, so that bright areas are brighter and dark areas are darker, enhancing the three-dimensional effect of the screen.\n\n2) Dynamic Tone Mapping Pro : After Dynamic Tone Mapping, perform optimal tone mapping for each local block once more for each video scene.  (α11 & α8 SoC)\n\n3) Dynamic Tone Mapping Ultra : Dynamic Tone Mapping Pro + Local Brightness Enhancer + AI Multi-Peak Dynamic Tone Mapping",
      "standardVal": "Yes (Dynamic Tone Mapping Ultra) : (O26) W6, G6, C6, MRGB95B/9MB \n\nYes (Dynamic Tone Mapping Pro) : (K26/K24) B6, B6E, MRGB85B, QNED90B/85B/82B/8MB, 98NU85\n\nYes : (K25Lp/LM24F) QNED80B/70B, 85/75/65/55/50/43NU85, NU80, LB70/LB65"
    },
    {
      "id": "2-4-3",
      "category": "PICTURE (PROCESSING)",
      "feature": "AI HDR Remastering",
      "level": "LV1",
      "descKo": "AI로 콘텐츠를 분석하고 각 장면의 HDR 레벨에 맞춰 색상, 밝기, 대비를 자동으로 최적화함",
      "descEn": "analyzes content with AI and automatically optimize color, brightness, and contrast for HDR levels in each scene.",
      "standardVal": "Yes / -\n\n* SoC O26/ K26 / K25Lp (UHD이상) 적용 모델 : W6, G6, C6, B6, B6E, MRGB95B/9MB/85B, 115QNED90B, QNED85B/82B/8MB/80B/70B, NU85/NU80"
    },
    {
      "id": "2-4-4",
      "category": "PICTURE (PROCESSING)",
      "feature": "HDR Expression Enhancer",
      "level": "LV2",
      "descKo": "돌비 비젼 컨텐츠에서 영상 장면마다 각 로컬 블록 단위의 최적의 Tone mapping을 수행한다.",
      "descEn": "In Dolby Vision contents, optimal tone mapping is performed for each local block for each video scene.",
      "standardVal": "Yes / -\n\n* SoC O26 적용 모델 : W6, G6, C6, MRGB95B/9MB"
    },
    {
      "id": "2-5",
      "category": "PICTURE (PROCESSING)",
      "feature": "Precision HDR Master Pro",
      "level": "LV2",
      "descKo": "영상을 장면 별로 분석하여 명암비 및 선명도를 향상하고 색감을 시원하게 조정하여, 일반 영상 콘텐츠는 HDR-like하게, HDR 콘텐츠는 더 생생하게 표현함",
      "descEn": "analyzes each frame of video content, enhancing contrast, sharpness, and color for improved image quality. SDR content is remastered to appear more like HDR, while HDR content is further refined for a more vibrant and realistic viewing experience.",
      "standardVal": "Yes / -"
    },
    {
      "id": "2-6",
      "category": "PICTURE (PROCESSING)",
      "feature": "4K Expression Enhancer",
      "level": "LV2",
      "descKo": "이미지의 피부색 영역이나 주요 신호 영역을 분석하여 얼굴의 표현력과 이미지의 주요 영역을 강화함",
      "descEn": "strengthen the expression of the face and the main area of image by analyzing the skin color area or the main signal area of the image.",
      "standardVal": "Yes / -\n\n*  (SoC O26 / K26 / K24 / K25Lp) : Yes"
    },
    {
      "id": "2-7",
      "category": "PICTURE (PROCESSING)",
      "feature": "AI Genre Selection",
      "level": "LV1",
      "descKo": "컨텐츠 장르를 판단하여 최적의 화질값으로 세팅",
      "descEn": "Determine the content genre and set the optimal image quality",
      "standardVal": "Yes (SDR/HDR) : (SoC O26 / K26 / K24) \nW6, G6, C6, B6, B6E, MRGB95B/9MB/85B, QNED90B/85B/82B, 98NU85"
    },
    {
      "id": "2-8",
      "category": "PICTURE (PROCESSING)",
      "feature": "Auto Brightness Control",
      "level": "LV1",
      "descKo": "조도 센서를 통해 밝거나 어두운 환경에서 최적의 계조 표현을 보여준다",
      "descEn": "It shows the optimal gradation expression in a bright or dark environment by using the illuminance sensor.",
      "standardVal": "Yes / -\n\nW6, G6, C6, B6, B6E, MRGB95B/9MB/85B, 115QNED90B, QNED85B/82B/8MB/80B/70B"
    },
    {
      "id": "2-9",
      "category": "PICTURE (PROCESSING)",
      "feature": "HDR (High Dynamic Range)",
      "level": "LV1",
      "descKo": "기존 SDR (Standard Dynamic Range) 컨텐츠의 휘도 및 칼라 표현 범위를 넓혀 컨텐츠를 인코딩하고 디코딩하여 디스플레이하는 화질 리얼리즘 기술",
      "descEn": "High dynamic range (HDR) is a dynamic range higher than what is considered to be standard dynamic range (SDR); SDR video describes images/rendering/video using a conventional gamma curve.",
      "standardVal": "1) Dolby Vision / HDR10 / HLG (OLED, MRGB, QNED90B/85B)\n2) HDR10 / HLG\n3) -"
    },
    {
      "id": "2-10",
      "category": "PICTURE (PROCESSING)",
      "feature": "FILMMAKER MODE™",
      "level": "LV1",
      "descKo": "UHDA에서 제안한 Color Optimized 기술 활용한 Expert 화질 모드",
      "descEn": "Expert picture quality mode using Color Optimized technology proposed by UHDA",
      "standardVal": "Yes / -"
    },
    {
      "id": "2-11",
      "category": "PICTURE (PROCESSING)",
      "feature": "HFR (High Frame Rate)",
      "level": "LV1",
      "descKo": "Capable of decoding and playing 4K 100/120p speedy content, with the resolution up to 4K for a smoother and clearer picture.\n\n(CP : 아직 서비스는 없으나 추후 서비스 계획이 생기면 지원 검토)",
      "descEn": "Capable of playing 4K 100/120p content for a smoother and more accurate picture.\n - IP : Global\n - RF : EU Only(LG SoC only)",
      "standardVal": "4K 120 fps (HDMI, RF, USB)\n4K 120 fps (HDMI, USB)\n4K 120 fps (HDMI)\n2K 120 fps (HDMI, RF, USB)\n2K 120 fps (HDMI, USB)\n2K 120 fps (HDMI)"
    },
    {
      "id": "2-12",
      "category": "PICTURE (PROCESSING)",
      "feature": "Dimming Technology",
      "level": "LV1",
      "descKo": "Pixel Dimming :OLED 스크린 분할 기술. 자체발광 픽셀의 특성을 활용하고 화면을 여러 영역으로 나누어 보다 효과적으로 전원을 제어 할 수 있음. 어두운 영역에서 더욱 적은 전력을 사용하고 이를 밝은 영역으로 보내 밝기가 증가하므로 명암비와 화질이 크게 향상됩니다.\n\nMicro Dimming / Precision Dimming : 블록 단위의 물체 정보를 추출하고 LED 로컬 디밍 블록에 매핑하여 자연스러운 이미지와 향상된 밝기를 제공합니다.",
      "descEn": "Pixel Dimming : OLED screen division technique.  Utilizing the nature of self-illuminated Pixels and by dividing the screen into multiple areas, power can be better controlled. In dark areas where little power is used, that power can be routed to brighter areas allowing for increased brightness thus significantly improving the contrast ratio and picture quality.\n\nMicro Dimming / Precision Dimming : Extracts block-by-block object information and maps it to a LED local dimming block to provide a natural image and enhanced brightness.",
      "standardVal": "1) OLED : Pixel Dimming\n\n2) Micro RGB\n  - Micro Dimming Ultra : 1,000블록 이상 (MRGB95B)\n  - Micro Dimming Pro : 100블록 이상 ~ 1,000블록 미만\n  - Micro Dimming : 99블록 이하\n\n3) Mini RGB / QNED\n  - Precision Dimming Ultra : 1,000블록 이상 (115QNED90B)\n  - Precision Dimming Pro : 100블록 이상 ~ 1,000블록 미만 (85/75/65/55QNED90B, 100QNED85B)\n  - Precision Dimming : 99블록 이하 (MRGB9MB, MRGB85B, 86/75/65/55/50QNED85B)"
    },
    {
      "id": "2-13",
      "category": "PICTURE (PROCESSING)",
      "feature": "Motion",
      "level": "LV1",
      "descKo": "블랙 데이터를 신호 사이에 넣어주면 인간의 눈은 동영상이 더 선명하다고 인지함. BLU 또는 알고리즘에 따라 이름을 달리함",
      "descEn": "Backlight On/Off technology is used to enhance the motion clarity because OLED and LCD is hold-type display unlike traditional cathold-ray tube. By inserting black frame or data during the signal data period of one frame, human perceives the motion is clearer and more sharp.",
      "standardVal": "(OLED)\nOLED Motion : Non-Adpative BFI (Black Frame Insertion)\n\n(Micro RGB, QNED90B/85B)\nMotion Pro : Non-Adpative BFI (Black Frame Insertion) or ABI(Adaptive Black data Insertion)\n* Local Dimming 있을시 지원"
    },
    {
      "id": "2-14",
      "category": "PICTURE (PROCESSING)",
      "feature": "QMS (Quick Media Switching)",
      "level": "LV1",
      "descKo": "같은 해상도에서 Frame Rete가 다른 영상((ex.60Hz →50Hz)으로 전환 시, 블랙스크린을 초래할 수 있는 지연 현상을 제거하여 화면을 부드럽게 전환함",
      "descEn": "When switching to a video with a different frame rate at the same resolution, the screen transitions smoothly by eliminating the delay that causes a black screen.",
      "standardVal": "Yes / -\n\n* O26, K26, K24 적용 모델 : W6, G6, C6, B6, B6E, MRGB95B/9MB/85B, QNED90B/85B/82B/8MB, 98NU85"
    },
    {
      "id": "2-15",
      "category": "PICTURE (PROCESSING)",
      "feature": "QFT (Quick Frame Transport)",
      "level": "LV1",
      "descKo": "소스에서 TV까지의 디스플레이 지연시간을 줄이는 기술",
      "descEn": "Technology that reduces display latency from the source to the TV",
      "standardVal": "Yes / -\n\n* O26, K26, K24 적용 모델 : W6, G6, C6, B6, B6E, MRGB95B/9MB/85B, QNED90B/85B/82B/8MB, 98NU85"
    },
    {
      "id": "2-16",
      "category": "PICTURE (PROCESSING)",
      "feature": "HEVC",
      "level": "LV2",
      "descKo": "고효율 비디오 코딩(HEVC/H265)(영어: High Efficiency Video Coding)는 H.264/MPEG-4 AVC의 성공에 힘입어 개발에 착수한 차세대 동영상 부호화 기술 (H.265로도 불림)",
      "descEn": "High Efficiency Video Codec / H.265",
      "standardVal": "해상도@Hz p/i, bit (예: 4K@60p, 10bit)\n\n8K 모델 : 8K@60p, 4K@120p, 10bit\n4K 모델 (120Hz) : 4K@120p, 10bit\n4K 모델 (60Hz) : 4K@60p, 10bit\nFHD/HD 모델 (60Hz) : 2K@60p, 10bit"
    },
    {
      "id": "2-17",
      "category": "PICTURE (PROCESSING)",
      "feature": "VP9 (Video Decoder)",
      "level": "LV2",
      "descKo": "구글이 개발한 고효율 비디오 코텍 (로열티 프리)",
      "descEn": "VP9 is an open and royalty free video coding format developed by Google",
      "standardVal": "해상도@Hz p/i, bit (예: 4K@60p, 10bit)"
    },
    {
      "id": "2-18",
      "category": "PICTURE (PROCESSING)",
      "feature": "AV1 (Video Decoder)",
      "level": "LV2",
      "descKo": "4K/8K 고해상도 decoder",
      "descEn": "4K/8K high resolution decoder",
      "standardVal": "8K : 8K@60P / 4K@60P 10bit\n4K : 4K@60P 10bit\nFHD/HD : 2K@60P 10bit"
    },
    {
      "id": "2-19",
      "category": "PICTURE (PROCESSING)",
      "feature": "Auto Calibration",
      "level": "LV1",
      "descKo": "CMR(Consumer Magazine Reviewers) 및 CI(Custom Installers) 등의 전문가를 위한 최적의 컬러를 빠르고 편리하게 설정함",
      "descEn": "Faster and more convenient to set the best optimized colors for experts \nsuch as Consumer Magazine Reviewers(CMR) and Custom Installers(CI).",
      "standardVal": "Yes / \nYes (except for Central Europe) /\n-"
    },
    {
      "id": "2-20",
      "category": "PICTURE (PROCESSING)",
      "feature": "Picture Mode",
      "level": "LV1",
      "descKo": "LG TV가 지원하는 화질 모드",
      "descEn": "Each picture mode is applied by different picture quality setting",
      "standardVal": "7 modes / 8 modes / 9 modes / 10 modes\n\n- 7 modes :\nVivid, Standard, Eco, Cinema Home, Game, (isf)Expert(Bright Room, daytime), (isf)Expert(Dark Room, night)\n\n- 8 modes (Soc K25Lp): \nVivid, Standard, Eco, Cinema Home, Game, Filmmaker, (isf)Expert(Bright Room, daytime), (isf)Expert(Dark Room, night)\n\n- 9 modes (Soc O26 / K26 / K25Lp, 4K UHD 이상): \nPersonalized Picture, Vivid, Standard, Eco, Cinema Home, Game, Filmmaker, (isf)Expert(Bright Room, daytime), (isf)Expert(Dark Room, night)\n\n- 10 modes (SoC K24, 4K UHD 이상):\nPersonalized Picture, Vivid, Standard, Eco, Cinema, Sports, Game, Filmmaker, (isf)Expert(Bright Room, daytime), (isf)Expert(Dark Room, night)"
    },
    {
      "id": "3-1",
      "category": "GAMING",
      "feature": "G-Sync Compatible (Nvidia)",
      "level": "LV1",
      "descKo": "nVIDIA의 G-Sync Compatible 기능",
      "descEn": "nVIDIA's G-Sync Compatible Feature",
      "standardVal": "Yes / -"
    },
    {
      "id": "3-2",
      "category": "GAMING",
      "feature": "FreeSync Compatible (AMD)",
      "level": "LV1",
      "descKo": "FreeSync 인증 TV",
      "descEn": "FreeSync Certified TV",
      "standardVal": "Yes / -"
    },
    {
      "id": "3-3",
      "category": "GAMING",
      "feature": "HGIG Mode",
      "level": "LV1",
      "descKo": "HDR Gaming Interest Group에서의 HDR 게임 모드 지원",
      "descEn": "supports HDR game mode of HDR Gaming Interest Group",
      "standardVal": "Yes / -"
    },
    {
      "id": "3-4",
      "category": "GAMING",
      "feature": "Game Optimizer",
      "level": "LV1",
      "descKo": "게임을 더욱 실감나게 즐길 수 있도록 다양한 기능 설정\n(HDMI 입력시 작동)",
      "descEn": "Set up various features to enjoy the game more realistically.\n(It only works with HDMI inputs.)",
      "standardVal": "Yes (Game Dashboard) / -"
    },
    {
      "id": "3-5",
      "category": "GAMING",
      "feature": "ALLM (Auto Low Latency Mode)",
      "level": "LV1",
      "descKo": "Auto Low Latency Mode (UHD 제품군 이상 ) 지원",
      "descEn": "support Auto Low Latency Mode (UHD or higher)",
      "standardVal": "Yes / -"
    },
    {
      "id": "3-6",
      "category": "GAMING",
      "feature": "VRR (Variable Refresh Rate)",
      "level": "LV1",
      "descKo": "Variable Refresh Rate 지원 \n(HDMI 2.1 및 Local Dimming 지원하는 4K 120Hz 모델)",
      "descEn": "support Variable Refresh Rate \n(4K 120Hz model with HDMI 2.1 and Local Dimming support)",
      "standardVal": "Yes (Up to 165Hz) /\nYes (Up to 144Hz) /\nYes (Up to 120Hz) /\nYes (Up to 60Hz) /\n-"
    },
    {
      "id": "3-7",
      "category": "GAMING",
      "feature": "Response Time",
      "level": "LV1",
      "descKo": "OLED TV의 응답속도",
      "descEn": "OLED TV's Response Time",
      "standardVal": "Less than 0.1ms / -"
    },
    {
      "id": "3-8",
      "category": "GAMING",
      "feature": "Motion Booster",
      "level": "LV1",
      "descKo": "게임 콘텐츠의 주사율을 자동으로 분석하고 주사율을 더욱 빠르게 향상시킴 (VRR를 지원하여 Tearing과 Blurring을 최소화함)",
      "descEn": "- automatically analyzes the refresh rate of game content and boosts it faster to help win across a wide range of genres, especially in fast-moving games where you're racing against the clock (supports VRR to minimize tearing and blurring on fast-moving games)",
      "standardVal": "Motion Booster 330 /\nMotion Booster 288 /\nMotion Booster 120 /\n-\n\n*Motion Booster 330 : MRGB95B, 115QNED90B\n*Motion Booster 288 : MRGB85B, QNED85B, QNED82B, 98NU85\n*Motion Booster 120 : 85/75/65/50/43QNED80B"
    },
    {
      "id": "3-9",
      "category": "GAMING",
      "feature": "Dolby Vision for Gaming (4K 120Hz)",
      "level": "LV1",
      "descKo": "4K 120Hz에서 돌비비전 게이밍 지원\n* QNED85B 이상",
      "descEn": "support Dolby Vision Gaming at 4K 120Hz",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-1",
      "category": "SMART TV",
      "feature": "Operating System (OS)",
      "level": "LV1",
      "descKo": "webOS allows you to access your content faster, control it easier, and explore more.",
      "descEn": "webOS allows you to access your content faster, control it easier, and explore more.",
      "standardVal": "webOS / -"
    },
    {
      "id": "4-2",
      "category": "SMART TV",
      "feature": "AI Agent",
      "level": "LV2",
      "descKo": "LG AI는 LG만의 AI 서비스로 음성 인식을 이용하여 TV 제어 및 다양한 컨텐츠 검색을 손쉽게 해 줌\n(25년 기준 \"LG AI\"로 전사 AI 네이밍 확정)",
      "descEn": "LG's own AI service that uses voice recognition to control TVs and easily search content.",
      "standardVal": "Yes / \nReady (requires AI Magic Remote) / \n-\n\nAI Magic Remote를 통해서만 동작하는 기능이므로, AI Magic Remote Ready 모델에 대해서는 'Ready (requires AI Magic Remote)' 로 표기 필요"
    },
    {
      "id": "4-2-1",
      "category": "SMART TV",
      "feature": "Intelligent Voice Recognition",
      "level": "LV1",
      "descKo": "-지능형 음성인식(서버 NLP 기반)  178개 이상 국가 지원.\n-TV 제어 및 외부 입력 전환, 장르, 정보 검색 서비스 강화.\n-사용자의 언어 설정에 따라 Global NLP 지원.",
      "descEn": "-Intelligent Speech Recognition (Server NLP based) Supported in more than 178 countries.\n-TV control and external input switching, genre and information retrieval service enhancement.\n-Global NLP support according to user's language setting.",
      "standardVal": "Yes / \nYes (with LG ThinQ app.) / \n-\n\nBT 기능이 있는 webOS는 모두 대응 가능하나 AI Magic Remote를 통해서 동작함. \nAI Magic Remote Ready 모델에 대해서는 LG ThinQ app.으로 기능 지원 가능함"
    },
    {
      "id": "4-2-2",
      "category": "SMART TV",
      "feature": "AI Concierge",
      "level": "LV2",
      "descKo": "음성 발화 사용법 안내 및 추천 발화 제공",
      "descEn": "Provides guidance on how to use voice utterances and recommended utterances",
      "standardVal": "Yes / \nReady (requires AI Magic Remote) / \n-"
    },
    {
      "id": "4-2-3",
      "category": "SMART TV",
      "feature": "AI Chatbot",
      "level": "LV1",
      "descKo": "TV CS Call 데이터 분석을 통해 빈도가 높고, 자가조치가 가능한 이슈에 대해 고객이 챗봇에 물으면(음성/텍스트), 자가 진단-자가 조치하여, 문제 발생 즉시 해결",
      "descEn": "Through the analysis of TV CS Call data, if a customer asks the chatbot (voice/text) about issues that are frequent and can be self-resolved, they can diagnose and resolve the issue immediately upon occurrence",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-2-4",
      "category": "SMART TV",
      "feature": "AI Voice ID",
      "level": "LV1",
      "descKo": "-LG계정에 voice를 등록하여, 음성인식 시 자동으로 계정 로그인/전환해주는 고객 자동인식 서비스\n-매직 리모컨 필요 기능 (블루투스 활용)",
      "descEn": "Registering a voice to the LG account to enable automatic account login/switching through voice recognition for customer identification service.",
      "standardVal": "Yes / \nReady (requires AI Magic Remote) / \n-\n\nAI Magic Remote를 통해서만 동작하는 기능이므로, AI Magic Remote Ready 모델에 대해서는 'Ready (requires AI Magic Remote)' 로 표기 필요"
    },
    {
      "id": "4-2-5",
      "category": "SMART TV",
      "feature": "Copilot",
      "level": "LV2",
      "descKo": "컨텐츠 외 복잡한 정보를 MS Copilot 웹 페이지를 연동하여 검색",
      "descEn": "- Searching for complex information beyond content by integrating the MS Copilot web page.",
      "standardVal": "Yes / -\n\n(지원국가 TBD) 중국, 러시아 제외 글로벌"
    },
    {
      "id": "4-2-6",
      "category": "SMART TV",
      "feature": "Generative AI Image",
      "level": "LV2",
      "descKo": "TPO(시간, 장소, 상황)에 맞게 내가 만들고 편집하는 생성형 이미지\n(Gallery+ related)\n-자유 프롬프트 기반 ‘내’ 상황에 맞는 다양한 이미지 생성\n-랜덤 추천 프롬프트 활용로 재미있는 시도\n-‘내’ 사진을 원하는 이미지로 재생성",
      "descEn": "Generative images that I create and edit to suit the TPO (Time, Place, Occasion).\n- Generating various images based on free prompts tailored to 'my' situation\n- Utilizing randomly suggested prompts \n- Recreating 'my' photos into desired images",
      "standardVal": "Yes / -\n\n(LG 빌링 지원 국가)\n\n(MR2 → MR1 변경) 85/75/65/55/50/43NU85, NU80"
    },
    {
      "id": "4-3",
      "category": "SMART TV",
      "feature": "AI Magic Remote",
      "level": "LV1",
      "descKo": "매직 리모컨 모델 구분 \n1) Built-in : 세트 구매 시 매직 리모컨 장입\n2) Ready (requires AI Magic Remote) : 매직 리모컨 미장입이지만 별도 액세서리로 구매시 사용 가능\n3) - : 매직 리모컨 장입해도 사용 불가  > 미장입\n\n*규제지역(이탈리아/영국/태국/싱가포르) : MR26GB(숫자키 있음) ※규제 국가 변경에 따른 업데이트 있을 수 있음.\n*비규제지역: MR26GA(숫자키 없음)",
      "descEn": "Classification of Magic Remote Control Models\n1) Built-in: Magic remote control included when purchasing a set\n2) Ready (requires AI Magic Remote) : Magic remote control is not included, but can be used when purchased as a separate accessory\n3) - : Cannot be used even if the magic remote control is inserted > Not included\n\n*Regulated area(Italy/UK/Thailand/Singapore : countries that number keys must be provided) : MR26GB(with number/color keys)\n※It can be updated according to changes in regulatory countries.\n\n*Non-regulated area : MR26GA(without number/color keys)",
      "standardVal": "Built-In / \nReady (requires AI Magic Remote) /\n-"
    },
    {
      "id": "4-4",
      "category": "SMART TV",
      "feature": "AI Picture/Sound Wizard",
      "level": "LV1",
      "descKo": "시청자의 선호도를 분석한 후 계정별로 맞춤화된 화질/음질 설정을 제공함\n\nSoC O26 / K26 / K25Lp",
      "descEn": "Provides a personalized Picture/Sound setting by each account after analyzing the viewer’s preference",
      "standardVal": "Yes /\n-"
    },
    {
      "id": "4-5-1",
      "category": "SMART TV",
      "feature": "Works with Naver Clova",
      "level": "LV2",
      "descKo": "사용자는 네이버 클로바 스피커를 연동하여, 사용자가 네이버 클로바 스피커에 TV컨트롤(볼륨, 채널 등)을 말하면 TV가 명령 수행함",
      "descEn": "By linking NAVER Clova speaker, the TV performs the command when the user speaks TV control (volume, channel, etc.) to the NAVER Clova speaker.",
      "standardVal": "Yes / - \n18Y MR 한국 / 이후 추가국가확대 없음\n   - 적용모델: webOS 4.5 이상 (FHD급 이상 모델)\n     ※ 단, NMRM 모델(webOS6.0)은 제외"
    },
    {
      "id": "4-5-2",
      "category": "SMART TV",
      "feature": "Works with Hey Google",
      "level": "LV2",
      "descKo": "Google Assistatnt와 호환하여 관련 연동 서비스 제공 \n - 구글 스마트 스피커 통한 TV 컨트롤 기능",
      "descEn": "Works with Google Assistatnt to provide related linked services\n\n- TV control function through Google Smart Speaker",
      "standardVal": "Yes / -\n\n지역별 상이"
    },
    {
      "id": "4-6",
      "category": "SMART TV",
      "feature": "Home",
      "level": "LV2",
      "descKo": "LG webOS TV내 모든 기능에 접근할 수 있도록 해주는 Home 기능으로, webOS TV를 대표하는 Feature\n-리모컨의 Home 버튼 입력 시, Full Home UI가 나타남\n-파워 온 부팅 시 Full Home 제공 (Setting에서 Last Input으로 변경 가능)\n- 실행했던 CP앱/외부입력앱/시스템앱 등 종료 시, Home으로 복귀함 (idle Home 구조대응)",
      "descEn": "Home function that allows access to all functions in LG webOS TV. It is a representative feature of webOS TV.\n-When pressing the Home button on the remote control, the Full Home UI appears.\n-Full Home provided during power-on booting (can be changed from settings to last Input)",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-6-1",
      "category": "SMART TV",
      "feature": "My Page",
      "level": "LV1",
      "descKo": "자주 보는 정보와 자주 사용하는 기능을 모아 개인 맞춤형 화면을 제공",
      "descEn": "Personalized screen by gathering the information you frequently view and the functions you often use",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-6-2",
      "category": "SMART TV",
      "feature": "AI Recommendation",
      "level": "LV2",
      "descKo": "AI기능을 TV에서 적극 대응하고 Nudge를 통해 고객에게 노출\n-사용자의 시청에 방해되지 않는 시점에 한해 필요한 ‘조작/기능’ 에 대해 기능 제안\n-사용자는 AI Recommendation Setting을 통해 서비스 이용 여부를 결정할 수 있음\n-사용패턴에 맞춰 AI Recommendation 제공 우선 순위를 조정하여 방해를 최소화 함",
      "descEn": "Expose AI function to customers through Nudge on TV\n-Propose functions for necessary 'operations/functions' only when they do not interfere with the user's viewing\n-Users can decide whether to use the service through AI Recommendation Setting\n- Minimize disruption by adjusting the priority of AI Recommendation provision according to usage patterns",
      "standardVal": "Yes / Yes (Simple Home UI)"
    },
    {
      "id": "4-7",
      "category": "SMART TV",
      "feature": "Home Hub",
      "level": "LV1",
      "descKo": "연결된 IoT 기기 (ThinQ, Matter, Google 에코 등)를 보여주고 모니터링/제어를 할 수 있는 스마트홈 서비스 앱",
      "descEn": "An smart home service app that shows and control connected IoT devices (e.g. ThinQ apppliances, Matter devices, Google devices, etc) at a glance",
      "standardVal": "Yes (Google Home, LG ThinQ(Homey)) /\nYes (Google Home, LG ThinQ) /\nYes (LG ThinQ) /\nYes (Google Home / LG ThinQ(Homey))-USA, Yes (Google Home / LG ThinQ)-Canada /\n-"
    },
    {
      "id": "4-7-1",
      "category": "SMART TV",
      "feature": "LG ThinQ + Homey / Hub",
      "level": "LV2",
      "descKo": "ThinQ앱에서 LG ThinQ가전과 Homey 생태계 기기 제어하기 위해 허브 역할을 함 \n(설정은 ThinQ앱 TV제품부에서 on/off를 할 수 있음)",
      "descEn": "It serves as a hub to control LG ThinQ appliances and devices within the Homey ecosystem. (shoud be activated on ThinQ app)",
      "standardVal": "Yes / - \nHomey는 한국, 미국만 적용"
    },
    {
      "id": "4-7-2",
      "category": "SMART TV",
      "feature": "Google Home / Hub",
      "level": "LV2",
      "descKo": "홈허브앱 내 구글홈 에코 연동을 통해 구글홈 기기를 제어할 수 있고, LG TV가 구글홈의 허브 역할을 하게됨 (25년 신규 기능)",
      "descEn": "Control and monitor the IoT devices of Google Home's ecosystem\nLG TV as a role of Google Home Hub",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-7-3",
      "category": "SMART TV",
      "feature": "Other Iot",
      "level": "LV2",
      "descKo": "홈허브앱 내 UEI 연결 기기를 등록하고 제어할 수 있음\n(브랜드 : 필립스, Bosch, IKEA, TP-link 등\n제품군 : 조명, 플러그, 스위치, 허브, 블라인드, 온도계 등)",
      "descEn": "Control and monitor the IoT devices that enabled by UEI\n(Brand: Philips, Bosch, IKEA, TP-link, etc.\nProduct range: Lighting, plugs, switches, hubs, blinds, thermometers, etc.)",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-7-4",
      "category": "SMART TV",
      "feature": "Google Cast",
      "level": "LV1",
      "descKo": "모바일 기기에서 TV로 캐스팅, Audio Streaming 기능 지원\n(24년 MR1 신규 기능)",
      "descEn": "Supports casting, and audio streaming functions from mobile devices to TV",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-7-5",
      "category": "SMART TV",
      "feature": "LG Smart Dongle Compatible",
      "level": "LV2",
      "descKo": "스마트홈 확장을 위한 LG스마트동글(Zigbee/Thread) 연동 \n(26년 HS본부에서 출시 예정)",
      "descEn": "Works with LG Smart Dongle(Zigbee/Thread)",
      "standardVal": "Yes / -\n\nwebOS 26 Homey 지원국가(한국/미국)와 동일하게 적용됨"
    },
    {
      "id": "4-7-6",
      "category": "SMART TV",
      "feature": "Matter (Wi-Fi)",
      "level": "LV2",
      "descKo": "Matter 규격 주변기기 연결 지원\n(TV와의 연결을 위해서는 IoT 소물 기기가 WiFi 지원 필요)",
      "descEn": "Able to connect and control Matter-compliant IoT devices(the IoT device should support WiFi to be used with LG Smart TVs)",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-8",
      "category": "SMART TV",
      "feature": "Works with Apple Home",
      "level": "LV1",
      "descKo": "iOS 기기와 Apple Home 호환 디바이스 통해서 TV 컨트롤 (볼륨, 채널 등)",
      "descEn": "TV control (volume, channel, etc.) via iOS device and Apple Home compatiable devices",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-9",
      "category": "SMART TV",
      "feature": "Works with Apple Airplay",
      "level": "LV1",
      "descKo": "Apple 기기에서 TV로 미러링, 캐스팅, Audio Streaming 기능 지원",
      "descEn": "Supports mirroring, casting, and audio streaming functions from Apple devices to TV",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-10",
      "category": "SMART TV",
      "feature": "Hands-free Voice Control",
      "level": "LV1",
      "descKo": "원거리 음성 입력을 통해 ThinQ 음성 인식 서비스 이용 가능",
      "descEn": "ThinQ voice recognition service available via far-field voice input",
      "standardVal": "Yes / - \n설정 메뉴의 사용자의 음성인식 설정에 따라 지원( 한국-한국어, 미국-영어, 영국-영어, 독일-독어, 프랑스-불어, 브라질-포르투갈어, 이태리-이태리어, 러시아-러시아어, 스페인-스페인어, 일본-일어, 호주-영어) \n\n’26년 원거리 음성인식 기능 적용 시리즈 : W6, G6, C6, MRGB95B"
    },
    {
      "id": "4-11",
      "category": "SMART TV",
      "feature": "App Store",
      "level": "LV2",
      "descKo": "Entertainment, Game, Life, News등 다양한 장르의 App의 Store 기능 제공",
      "descEn": "Provides App Store functions of various genres such as Entertainment, Game, Life, and News",
      "standardVal": "Yes(App) / - \n\n* webOS 전체 대응 (FHD 포함)"
    },
    {
      "id": "4-12",
      "category": "SMART TV",
      "feature": "Full Web Browser",
      "level": "LV1",
      "descKo": "인터넷 Full Browser\n\n*중국은 정부 규제사항으로 인해 미지원",
      "descEn": "Internet Full Browser\n\n*China does not support due to government regulations",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-13",
      "category": "SMART TV",
      "feature": "LG Channels",
      "level": "LV1",
      "descKo": "IP를 통한 방송 채널 제공 \n\n26Y webOS26 36개국 (2025/12/26 기준)\n\n* Korea : [Republic of Korea]\n* NA : [United States/Canada]\n* EU : [France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium/Poland]\n* LATAM : [Mexico/Brazil /Argentina/Chile/Colombia/Peru]\n* ASIA : [Australia/New Zealand/Singapore/Taiwan/UAE]\n* India : [India]\n* Japan : [Japan]\n* CIS : [Russia], Uzbekistan, Kazakhstan",
      "descEn": "Provides of broadcasting channels through IP",
      "standardVal": "Yes / -\n\n* Korea : [Republic of Korea]\n* NA : [United States/Canada]\n* EU : [France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium/Poland]\n* LATAM : [Mexico/Brazil /Argentina/Chile/Colombia/Peru]\n* ASIA : [Australia/New Zealand/Singapore/Taiwan/UAE]\n* India : [India]\n* Japan : [Japan]\n* CIS : [Russia], Uzbekistan, Kazakhstan"
    },
    {
      "id": "4-14",
      "category": "SMART TV",
      "feature": "LG Gallery+",
      "level": "LV1",
      "descKo": "LG 갤러리+의 5,000개 이상의 콘텐츠로 나만의 취향을 반영한 공간을 연출함\n\n*  SoC O26 / K26 / K24 / K25Lp\n\nOLED / MRGB / QNED90B/85B/82B/80B/70B, 98NU85\n(MR1 : 85/75/65/55/50/43NU85, NU80)",
      "descEn": "create a space that reflects personal style with over 5,000 pieces of content from LG Gallery+",
      "standardVal": "Yes (Paid service availability varies by country) /\n-"
    },
    {
      "id": "4-15",
      "category": "SMART TV",
      "feature": "Sports",
      "level": "LV2",
      "descKo": "국가별 인기 리그에 대한 실시간 방송 정보(EPG & CP), 경기 정보(과거, 현재, 미래), CP 콘텐츠(유튜브 등) 등을 제공하는 포탈 서비스 \n\n선호/관심 스포츠 팀을 등록하여 별도 페이지를 구성하고, 팀에 대한 경기 정보를 알람으로 제공 (경기 시작1분전, 득점시, 경기 결과)",
      "descEn": "Portal service that provides real-time broadcasting information (EPG & CP), game information (past, present, and future), CP content(Youtube, etc.) about popular leagues by country\n\nRegister your preferred/interested sports team in advance and provide game information about the team \n(1 minute before the start of the game, when scoring, and the result of the game)",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-16",
      "category": "SMART TV",
      "feature": "Multi View",
      "level": "LV1",
      "descKo": "하나의 화면에서 2개 앱 동시보기 지원\n\n*설정 가능 메뉴 \n- 레이아웃: Side-by-side, PIP, 듀얼모니터 \n- 사운드 출력 전환 \n- 사이즈(PIP만 지원): Large, Small\n*기능제약조건: 메모리 2GB & SoC K24이상",
      "descEn": "Supports for simultaneous viewing of two apps on one screen\n\n*Settable menu\n- Layout: Side-by-side, PIP, Dual Monitor\n- Switch sound output\n- Size (PIP only): Large, Small\n*Functional constraint: Memory 2GB↑ & SoC K24↑",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-17",
      "category": "SMART TV",
      "feature": "Usage Care",
      "level": "LV2",
      "descKo": "계정별 TV/앱별 사용시간정보, Parental control 관련 통합 설정 및 시력 및 청력보호 모드 제공, Parental Control 상황에서 TV/앱 사용정보 제공\nMemoy Care\n(구. Family Settings)",
      "descEn": "Provides usage time information for each TV/app, screen time (TV usage time control), eyesight and hearing protection mode\nMemory Care\n(Previous name is \"Family Settings\")",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-18",
      "category": "SMART TV",
      "feature": "Always Ready",
      "level": "LV1",
      "descKo": "저전력대기 모드를 통하여 별도의 전원 On 없이도 음성시작, 알림 등 기본 기능 제공\n * Always On Display : LG Gallery+에서 다운받은 컨텐츠를 Always Ready 화면으로 설정  (아트, 영상, 내사진, 음악, AI 이미지, 정보 등)\n\n - UHD 이상 & DDR 2GB 이상 : 지원 (Power Off에서도 동작)\n - UHD 이상 & DDR 1.5GB : 미 지원 (Power on 상태에서만 Gallery+ app만 동작) \n - FHD/HD : 미 지원",
      "descEn": "Provides basic functions such as voice start and notification without a separate power on through low-power standby mode\n * Always On Display: Set downloaded content from LG Gallery+ to Always Ready\n\n - UHD or higher, DDR 2GB or higher : Yes (Operates even when power is off)\n - UHD or higher, DDR 1.5GB: Not supported (Only the Gallery+ app operates when power is on)\n - FHD/HD: Not supported",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-19",
      "category": "SMART TV",
      "feature": "USB Camera Compatible",
      "level": "LV1",
      "descKo": "로지텍 웹 캠 연동 \n(지원모델: C920/C920s/C922 Pro/C922x/C925e/C930c/C930e)",
      "descEn": "Works with Logitech Webcams \n(Supported Models: C920/C920s/C922 Pro/C922x/C925e/C930c/C930e)",
      "standardVal": "Yes / -\n\nwebOS 26 / 25 전 플랫폼 USB 카메라 대응(메모리 2GB 이상)"
    },
    {
      "id": "4-20",
      "category": "SMART TV",
      "feature": "Home Office",
      "level": "LV2",
      "descKo": "업무에 필요한 서비스를 모아서 제공\n - PC원격 연결 제공 및 연결 가이드 강화 \n - 메일/문서/화상통화 서비스\n - 앱/북마크 리스트 편집/추가/삭제 기능 제공 \n - 적성국가(수단, 시리아, 이란, 쿠마, 소말리아)는 서비스 지원 불가",
      "descEn": "Provides work-related services\n - Remote PC\n - Mail/document/video call service \n - Provides app/bookmark list edit/add/delete function",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-21",
      "category": "SMART TV",
      "feature": "Games Service",
      "level": "LV2",
      "descKo": "게임 관련 서비스를 모아서 제공\n - 클라우드 게임 앱\n - 게임 추천/ 인기 게임\n\n*지원되는 국가가 서버 편성에 따라서 수시로 변경될 수 있으며, 특정 국가에서만 지원 되고 있음\n*지원 국가는 아래에 확인 가능\nhttp://collab.lge.com/main/display/WEBOSPLAN",
      "descEn": "Provides game-related services\n - Cloud game app\n - Game recommendations/ popular games",
      "standardVal": "Yes / - \n\n*클라우드 게임 서비스 국가에만 기능 제공 되며, 서비스 상황에 지원 여부 변경"
    },
    {
      "id": "4-22",
      "category": "SMART TV",
      "feature": "Music Service",
      "level": "LV2",
      "descKo": "뮤직서비스 고도화\n- 최근 재생 컨텐츠\n- App 목록 편집\n- 추천 list 리프레시 (지원하는 CP에 한함)\n- 생성형 음악 제공\n\n*음악 추천 컨텐츠가 제공되는 국가에만 기능 제공 되며, 컨텐츠 제휴/편성 상황에 지원 여부 변경\n*지원 국가는 아래에 확인 가능\nhttp://collab.lge.com/main/display/WEBOSPLAN",
      "descEn": "Advancement of music service\n- Recently played\n- Edit App list\n- Refresh recommendation list (Only for supported CP)\n - Generative Music\n\n*Supported only in countries where Music content recommendation functions are available.",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-23",
      "category": "SMART TV",
      "feature": "Tips",
      "level": "LV2",
      "descKo": "- 홍보/인지가 부족한 기능이나 USP 에 대한 소개를 통해 제품 소구 강화\n- 기능의 Value와 사용방법을 간략히 설명하여 사용 유도",
      "descEn": "Inducing Promoted or under-recognized features or USPs with\nbriefly explaining the value of the function and how to use it",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-24",
      "category": "SMART TV",
      "feature": "Smartphone Remote App",
      "level": "LV1",
      "descKo": "\"ThinQ\" 폰 앱 연동을 통한 모바일과 LG TV와 연결 및 TV Control, Network File Sharing, Voice 검색 지원",
      "descEn": "Connect with mobile and LG TV through \"ThinQ\" mobile app, and support TV Control, Network File Sharing, and Voice search",
      "standardVal": "Yes (LG ThinQ) / -"
    },
    {
      "id": "4-25",
      "category": "SMART TV",
      "feature": "FTMS / Xiaomi Wearable Device Connect",
      "level": "LV2",
      "descKo": "FTMS(Fitness Machine Service Protocol) 및 샤오미 기기를 지원하는 장치에서 TV로 실시간 운동 정보를 표시 (WebOS 26 부터, 2GB DDR Memory 이상 지원)",
      "descEn": "Display exercise information in real-time on the TV from devices that support FTMS (Fitness Machine Service Protocol) and Xiaomi devices",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-26",
      "category": "SMART TV",
      "feature": "LG Link",
      "level": "LV2",
      "descKo": "TV와 다른 기기 간에 파일과 이미지를 무선으로 공유  (WebOS 26 부터 적용)",
      "descEn": "With LG Link, you can wirelessly share files and images between your TV and other devices with a single connection and keep tabs on your TV.",
      "standardVal": "Yes / -"
    },
    {
      "id": "4-27",
      "category": "SMART TV",
      "feature": "LG Shield",
      "level": "LV1",
      "descKo": "LG의 독자적인 보안 시스템 LG Shield로 고객의 민감한 정보와 데이터를 안전하게 보호",
      "descEn": "LG's unique security system \"LG Shield\", which keeps customers' sensitive information and data safe.",
      "standardVal": "Yes / -"
    },
    {
      "id": "5-1",
      "category": "AUDIO",
      "feature": "Audio Output",
      "level": "LV1",
      "descKo": "전체 출력\nAudio Output : W",
      "descEn": "Audio Output : W",
      "standardVal": "xxW"
    },
    {
      "id": "5-1-1",
      "category": "AUDIO",
      "feature": "Woofer / per Channel Output",
      "level": "LV2",
      "descKo": "우퍼 / 채널별 출력 (W)",
      "descEn": "Woofer output / output per channel (W)",
      "standardVal": "WF:xxW, xxW per Channel"
    },
    {
      "id": "5-1-2",
      "category": "AUDIO",
      "feature": "Speaker System",
      "level": "LV1",
      "descKo": "x.y.z ch  \n(x는 Mid-range 채널, y는 별도의 WF box가 적용되고, Amp가 별도로 대응 된 경우에 한하여 .1 or .2 표기를 함, z는 Height 전용 channel )",
      "descEn": "Ch : Separate Woofer box is applied \n(.1 or .2 expressed only if amp is separately applied)",
      "standardVal": "x.x.x ch"
    },
    {
      "id": "5-1-3",
      "category": "AUDIO",
      "feature": "Speaker Direction",
      "level": "LV1",
      "descKo": "사운드 출력 방향",
      "descEn": "Sound output direction",
      "standardVal": "Front Firing\nDown Firing"
    },
    {
      "id": "5-2",
      "category": "AUDIO",
      "feature": "Dolby Atmos",
      "level": "LV1",
      "descKo": "오브젝트 기반 3차원 서라운드 사운드를 구현하여 현장에 있는 듯한 사운드 효과 제공",
      "descEn": "Realizes object-based 3D surround sound to provide a sound effect that makes you feel like you are in the scene",
      "standardVal": "Yes / -\n\n`26년 OLED / MRGB / QNED90B"
    },
    {
      "id": "5-2-1",
      "category": "AUDIO",
      "feature": "DAFC (Dolby Atmos FlecConnect)",
      "level": "LV2",
      "descKo": "원하는 위치에 무선 스피커를 간편하게 배치할 수 있는 유연성을 제공하며, TV와 스피커 설정에 맞춰 Dolby Atmos 경험을 최적화함\n\n(DAFC를 지원하는 LG 전용 스피커와 연결시)\nDolby Atmos 지원 모델 & SoC O26/K26 (MR1 반영, MRGB85B 이상 / 115QNED90B)",
      "descEn": "delivers the flexibility to simply place wireless speakers where you choose, and optimizes Dolby Atmos experience for your TV and speaker set up",
      "standardVal": "Yes /\n-"
    },
    {
      "id": "5-3",
      "category": "AUDIO",
      "feature": "AI Sound",
      "level": "LV1",
      "descKo": "※ SoC O26 (W6, G6, C6, MRGB95B/9MB) :  Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)\n  - AI Object Remastering Ultra\n  - Auto Balance Control\n\n※ SoC K26 (B6, B6E, MRGB85B, 115QNED90B, QNED85B/82B, 98NU85) : Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)\n  - AI Object Remastering Pro\n  - Auto Balance Control\n\n※ SoC K24, webOS25 (85/75/65/55QNED90B) : Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)\n  - Auto Balance Control\n\n※ SoC K24, webOS26 (QNED8MB) : Alpha 8 AI Sound Pro (Virtual 9.1.2 Up-mix)\n  - Auto Balance Control\n\n※ SoC K25Lp / LM24F : AI Sound Pro (Virtual 9.1.2 Up-mix)\n  - Auto Balance Control",
      "descEn": "※ SoC O26 (W6, G6, C6, MRGB95B/9MB) :  Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)\n  - AI Object Remastering Ultra\n  - Auto Balance Control\n\n※ SoC K26 (B6, B6E, MRGB85B, 115QNED90B, QNED85B/82B, 98NU85) : Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)\n  - AI Object Remastering Pro\n  - Auto Balance Control\n\n※ SoC K24, webOS25 (85/75/65/55QNED90B) : Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)\n  - Auto Balance Control\n\n※ SoC K24, webOS26 (QNED8MB) : Alpha 8 AI Sound Pro (Virtual 9.1.2 Up-mix)\n  - Auto Balance Control\n\n※ SoC K25Lp / LM24F : AI Sound Pro (Virtual 9.1.2 Up-mix)\n  - Auto Balance Control",
      "standardVal": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix) / \nAlpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix) /\nAlpha 8 AI Sound Pro (Virtual 9.1.2 Up-mix) /\nAI Sound Pro (Virtual 9.1.2 Up-mix)"
    },
    {
      "id": "5-3-1",
      "category": "AUDIO",
      "feature": "AI Object Remastering",
      "level": "LV1",
      "descKo": "원본 오디오 트랙에서 목소리, 효과음, 음악, 노래 보컬 및 베이스 사운드를 추출 및 분리하고, 이를 리마스터링하여 선명하고 몰입감 있는 사운드를 생성함\n\nSoC O26 : AI Object Remastering Ultra\nSoC K26 : AI Object Remastering Pro\nSoC K24 / K25Lp / LM24F : 미 지원",
      "descEn": "extract and separate voice, sound effects, music, singing vocal and bass from the original audio track, and remaster them to create clear and immersive sound\n\nSoC O26 : AI Object Remastering Ultra\nSoC K26 : AI Object Remastering Pro\nSoC K24 / K25Lp / LM24F : not support",
      "standardVal": "Yes (AI Object Remastering Ultra) / \nYes (AI Object Remastering Pro) / \n-"
    },
    {
      "id": "5-4",
      "category": "AUDIO",
      "feature": "Clear Voice Pro",
      "level": "LV1",
      "descKo": "배경음 대비 음성 명료도 강화함\n\nSoC O26 / K26 / K24 / K25Lp / LM24F\n\n(OLED, MRGB, QNED90B/85B/82B 는 목소리 추출 포함)",
      "descEn": "enhance voice clarity compared to background sound\n\nSoC O26 / K26 / K24 / K25Lp / LM24F",
      "standardVal": "Yes /\n-"
    },
    {
      "id": "5-5",
      "category": "AUDIO",
      "feature": "Precision Sound Master Pro",
      "level": "LV2",
      "descKo": "또렷한 목소리와 선명도 강화된 사운드로 시청하는 콘텐츠에 따라 실시간으로 최적화된 음향과 가상 서라운드를 감상할 수 있음\n  * \"TV 스피커로 듣기\" 또는 \"광 디지털 연결 기기+TV 스피커\"로 설정 필요함",
      "descEn": "analyzes the audio content and optimizes sound settings in real-time. It enhances dialogue clarity and creates a virtual surround sound effect.\n * set to \"TV speaker\" or \"Optical Out device + TV speaker\".",
      "standardVal": "Yes / -"
    },
    {
      "id": "5-6",
      "category": "AUDIO",
      "feature": "Adaptive Acoustic Tuning",
      "level": "LV1",
      "descKo": "매직 리모콘을 이용해 TV가 놓인 공간 크기, 위치, Room의 크기/가구 배치 등 사운드 재생 공간 인식을 통한  최적화된 사운드 EQ 자동 제공.",
      "descEn": "With just one touch, your AI Magic remote and TV can automatically offer optimized sound EQ by recognizing the TV's placement within the room. This effect can be maximized by surround sound.",
      "standardVal": "Yes /\nReady (requires AI Magic Remote) /\n-\n\nYes : 기능 대응 되어있고, 매직 리모콘 장입모델\nReady (requires AI Magic Remote) : 기능 대응 되어있으나, 별도 액세서리로 매직 리모컨 구매하여 사용 가능"
    },
    {
      "id": "5-7",
      "category": "AUDIO",
      "feature": "LG Sound Sync",
      "level": "LV1",
      "descKo": "광 디지털 음성 출력 단자로 연결한 LG전자 오디오 기기를 통해 TV의 소리를 들음\n(TV 리모컨으로 오디오 기기의 소리 크기를 조절 가능)",
      "descEn": "Enjoy TV sound through audio devices connected to the OPTICAL DIGITAL AUDIO OUT. \n(Adjust the volume of audio device with the remote control)",
      "standardVal": "Yes /  -"
    },
    {
      "id": "5-8",
      "category": "AUDIO",
      "feature": "Sound Mode Share",
      "level": "LV1",
      "descKo": "TV 스피커에 적용된 음향 모드를 사운드바에서 재생하거나, 사운드바의 음향 모드를 TV에서 선택해 재생함.\n(HDMI(ARC)에 연결된 사운드바가 TV 사운드 공유 또는 사운드 통합 컨트롤을 지원해야 사용 가능)",
      "descEn": "Enjoy TV Sound Mode from soundbar and Soundbar Sound Mode from the TV. \n(This feature is only available on devices that share TV sound from the soundbar connected to the HDMI(ARC) or on devices that support Soundbar Mode Control.)",
      "standardVal": "Yes /  -"
    },
    {
      "id": "5-9",
      "category": "AUDIO",
      "feature": "Simultaneous Audio Output",
      "level": "LV1",
      "descKo": "TV스피커와 Optical/헤드폰 동시 출력 여부 설정",
      "descEn": "Simultaneous Audio output through TV Speaker and Optical/Headpone)",
      "standardVal": "Yes / -\n\n(광출력/HP출력 Jack 이 모두 미대응된 모델일 경우 '-')"
    },
    {
      "id": "5-10",
      "category": "AUDIO",
      "feature": "Bluetooth Surround Ready",
      "level": "LV2",
      "descKo": "TV에 범용 BT 스피커 연결하여 서라운드 사운드 제공\n - BT 스피커를 연결하여 Auto Tuning 기능을 통해 AI 매직리모컨으로 TV-스피커 간 자동 사운드 Sync 가능\n - 범용 BT 스피커 연결 가능\n\n* 26년부터 BT 1개만 연결 가능 (ERRC로 BT 2개 연결 시나리오 삭제)",
      "descEn": "Provides surround sound by connecting universal BT speakers to the TV\n- BT speaker can be connected, and automatic sound sync between TV and speaker is possible with the AI Magic Remote control through the Auto Tuning function\n- Universal BT speaker connection is possible",
      "standardVal": "Yes (1 Way Playback) /  -\n(BT 지원 시)"
    },
    {
      "id": "5-11",
      "category": "AUDIO",
      "feature": "WOW Orchestra",
      "level": "LV1",
      "descKo": "LG TV와 LG사운드바와의 최상의 사운드를 조합함\n\nLG 제품 간의 완벽한 동기화로 TV와 사운드바가 하나의 스피커처럼 작동\n\n※ 사용자별 설치씬이 상이하여, 스탠드와의 이격거리는 스펙 정의에 포함하지 않음",
      "descEn": "Best combination of TV and sound bar sound\n\nWith the perfect sync between LG products, TV and sound bar works like one speaker",
      "standardVal": "Yes / -\n(O26, K26, K24, K25Lp 적용)"
    },
    {
      "id": "5-12",
      "category": "AUDIO",
      "feature": "Audio Codec",
      "level": "LV1",
      "descKo": "재생 가능한 오디오 코덱으로,\nBT 적용 모델만 추가로 apt-X 코덱 포함하여 명기함",
      "descEn": "Supported Audio Codec.\nSpecify apt-X codec only for Bluetooth adapted\"",
      "standardVal": "적용 Codec 항목\n(26년 전 모델 WMA/WMV 삭제)"
    },
    {
      "id": "6-1",
      "category": "BROADCASTING",
      "feature": "Digital TV Reception",
      "level": "LV1",
      "descKo": "지역별 DTV 방송 방식 기입 (or)\n지역별/모델별 DTV 적용 유무\n\n* Terrestrial : DVB-T2/T / ATSC3.0 / ISDB-T / DTMB etc.\n* Cable : DVB-C / Clear QAM etc.\n* Satellite : DVB-S2 / ISDB-S etc.",
      "descEn": "DTV broadcasting method by region",
      "standardVal": "* ATSC3.0/1.0 (Terrestrial), QAM (Cable)\n* DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)\n* DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)\n* DVB-T2/T (Terrestrial), DVB-C (Cable)\n* ISDB-T (Terrestrial), ISDB-S (Satellite)\n* DTMB (Terrestrial), DVB-C (Cable)\n* DTMB (Terrestrial), DVB-C (Cable, only China)\n* Yes\n* -"
    },
    {
      "id": "6-2",
      "category": "BROADCASTING",
      "feature": "Analog TV Reception",
      "level": "LV1",
      "descKo": "지역별 ATV 방송 방식 기입",
      "descEn": "지역별 ATV 방송 방식 기입",
      "standardVal": "Yes / -"
    },
    {
      "id": "6-3",
      "category": "BROADCASTING",
      "feature": "Multi Tuner",
      "level": "LV1",
      "descKo": "일본 : 3 Tuner OLED 적용\n유럽 : 2 Tuner (모델별 차등 적용)\nDemodulator 기준",
      "descEn": "(Based on Demodulator)\nJapan : OLED↑ 3 Tuner\nEU : (Differ by model)",
      "standardVal": "Twin Tuner / Triple Tuner / -"
    },
    {
      "id": "6-4",
      "category": "BROADCASTING",
      "feature": "Data Broadcasting (Country Spec)",
      "level": "LV2",
      "descKo": "- MHEG: 영국향 Digital 데이터 방송 및 Hybrid TV 방송, 영국(DTV only 모델)/홍콩/아일랜드/CI+ MMI 적용\n- BML: 일본 Data Broadcasting 표준, 일본/필리핀 적용\n- Hybridcast: 일본향 Data 방송, 일본 적용\n- DCSJP: 4K/8K 데이터 방송 규격, 일본 적용\n- Ginga: 브라질향 Digital 데이터 방송, 브라질/아르헨티나 적용\n- HbbTV: DVB 표준 Hybrid TV 방송, 유럽/중아/아주에 적용\n- Freeview Play: 영국 only HbbTV 기반 서비스\n 1. 영국 주요 방송사의 OTT 서비스 제공 (BBC iPlayer, iTV Player, All4. Demand5)\n 2. - +/- 7일 EPG 제공\n- IBB: 한국 Data 방송(ATSC3.0)\n\n<HbbTV 지원 국가>\n[ Default On ] \n• [EU] Germany, France, Spain, Netherlands, Czech, Poland, Finland, Denmark, Norway, Sweden, Switzerland, Austria, Hungary, Slovakia, Estonia, UK, Slovenia, Italy, Croatia, Greece\n• [AJ] Australia, NewZealand, Singapore, Malaysia\n• [JA] Iran\n[ Default Off ]\n• [EU] Albania, Belgium, Bosnia, Belarus, Bulgaria, Kazakhstan, Latvia, Lithuania, Luxembourg, Morocco, Portugal, Romania, Russia, Serbia, Turkey, Ukraine, Iceland\n• [AJ] VietNam, India, Indonesia, Thailand, Myanmar, Sri Lanka",
      "descEn": "Data broadcasting method by region",
      "standardVal": "HbbTV (UK, DG, BN….) / MHEG (UK, Ireland) / IBB(KR) etc."
    },
    {
      "id": "6-5",
      "category": "BROADCASTING",
      "feature": "CI + (Common Interface)",
      "level": "LV2",
      "descKo": "방송규격, 지역별 상이",
      "descEn": "방송규격, 지역별 상이",
      "standardVal": "Yes (CI+ 2.0) / \nYes (CI+ 1.4) / \nYes (CI+ 1.3) /\n-"
    },
    {
      "id": "6-6",
      "category": "BROADCASTING",
      "feature": "Teletext Page",
      "level": "LV2",
      "descKo": "방송규격, 지역별 상이",
      "descEn": "방송규격, 지역별 상이",
      "standardVal": "Yes (2000 page) / -"
    },
    {
      "id": "6-7",
      "category": "BROADCASTING",
      "feature": "Teletext (Top/Flof/List)",
      "level": "LV2",
      "descKo": "방송규격, 지역별 상이",
      "descEn": "방송규격, 지역별 상이",
      "standardVal": "Yes (TOP : Austria, Germany, Italy, Switzerland,--,\nFlof: Others) / -"
    },
    {
      "id": "6-7-1",
      "category": "BROADCASTING",
      "feature": "[DVB] Subtitle",
      "level": "LV2",
      "descKo": "방송규격, 지역별 상이",
      "descEn": "방송규격, 지역별 상이",
      "standardVal": "Yes / -"
    },
    {
      "id": "6-7-2",
      "category": "BROADCASTING",
      "feature": "[ATSC] Closed Caption",
      "level": "LV2",
      "descKo": "방송규격, 지역별 상이",
      "descEn": "방송규격, 지역별 상이",
      "standardVal": "Yes / -"
    },
    {
      "id": "6-8",
      "category": "BROADCASTING",
      "feature": "AD (Audio Description)",
      "level": "LV2",
      "descKo": "시각 장애인 용 화면 해설 방송의 Audio임. \n크게 두 가지 방식이 있음.\n\n1. receiver-mix \n   방송국에서 주음성과 해설음성을 별도로 송출하면, TV에서 Mix하여 오디오 출력.   \n   스트림의 한 채널에 Main Audio, AD Audio 가 들어오는데, AD on 하면 두 개 소리를 Mix함.\n\n2. broadcast-mix\n  방송국에서 주음성과 해설음성을 Mix하여 송출. \n  스트림의 한 채널에 Main Audio, Main Audio + AD 가 들어오는데, AD on 하면 2번 소리를 선택함.",
      "descEn": "시각 장애인 용 화면 해설 방송의 Audio임. \n크게 두 가지 방식이 있음.\n\n1. receiver-mix \n   방송국에서 주음성과 해설음성을 별도로 송출하면, TV에서 Mix하여 오디오 출력.   \n   스트림의 한 채널에 Main Audio, AD Audio 가 들어오는데, AD on 하면 두 개 소리를 Mix함.\n\n2. broadcast-mix\n  방송국에서 주음성과 해설음성을 Mix하여 송출. \n  스트림의 한 채널에 Main Audio, Main Audio + AD 가 들어오는데, AD on 하면 2번 소리를 선택함.",
      "standardVal": "Yes / -"
    },
    {
      "id": "6-9",
      "category": "BROADCASTING",
      "feature": "EPG (8days)",
      "level": "LV2",
      "descKo": "- 일반적으로 오늘, +7일 간 방송 정보 제공하나 ATSC3.0/Freeview Play의 경우 -7일 방송 정보 제공을 통해 Catch Up 서비스 이용 가능함.\n- 일본: 일본항 Giude는 별도로 구성됨.\n- 영국: 약관 동의 시 Freeview Play 관련 서비스 이용 가능하며 로고 표시, info key와 Explorer 앱 연결 등 특화 기능 반영됨.\n- STB 연결 시 Box에서 제공하는 방송 정보가 표시됨.(일부 국가)",
      "descEn": "- 일반적으로 오늘, +7일 간 방송 정보 제공하나 ATSC3.0/Freeview Play의 경우 -7일 방송 정보 제공을 통해 Catch Up 서비스 이용 가능함.\n- 일본: 일본항 Giude는 별도로 구성됨.\n- 영국: 약관 동의 시 Freeview Play 관련 서비스 이용 가능하며 로고 표시, info key와 Explorer 앱 연결 등 특화 기능 반영됨.\n- STB 연결 시 Box에서 제공하는 방송 정보가 표시됨.(일부 국가)",
      "standardVal": "Yes / -"
    },
    {
      "id": "7-1",
      "category": "CONNECTIVITY",
      "feature": "Wireless Transmission",
      "level": "LV1",
      "descKo": "저압축 및 고속 무선 전송을 통해 무선 환경에서도 유선 연결과 동일한 화질 경험을 제공함\n\nW6, MRGB9MB",
      "descEn": "provides same picture quality experience as a wired connection over true wireless with low compression and high-speed wireless transmission.",
      "standardVal": "Yes (Zero Connect Technology) /\n-"
    },
    {
      "id": "7-2",
      "category": "CONNECTIVITY",
      "feature": "HDMI Input",
      "level": "LV1",
      "descKo": "HDMI 단자 개수",
      "descEn": "# of HDMI Input",
      "standardVal": "① HDMI 2.1 4ea or 3ea:\n   - 4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)\n   - 3ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)\n\n② HDMI 2.0 3ea or 2ea: \n   - 3ea (supports eARC, ALLM)\n   - 2ea (supports eARC, ALLM)\n   - 2ea (supports eARC)\n\n③ HDMI 1.4 2ea : \n   - 2ea (supports eARC)\n\n④ HDMI 1.4 2ea w/o eARC :\n   - 2ea\n\n(Differ by Region)"
    },
    {
      "id": "7-2-1",
      "category": "CONNECTIVITY",
      "feature": "Simplink (HDMI CEC)",
      "level": "LV1",
      "descKo": "HDMI로 TV에 연결된 심플링크 기기(예: DVD 플레이어, 홈시어터 시스템)를 TV 리모컨으로 조작함\n(연결된 기기가 LG 제품이 아니면 다르게 작동할 수 있음)",
      "descEn": "Use the LG remote to control other SIMPLINK enabled devices such as DVD players or audio home theater systems connected to LG Smart TV by HDMI.\n(Connected devices may operate differently if they are not LG products.)",
      "standardVal": "Yes / -"
    },
    {
      "id": "7-2-2",
      "category": "CONNECTIVITY",
      "feature": "HDMI Audio Return Channel",
      "level": "LV1",
      "descKo": "HDMI(ARC) 로 연결된 오디오 기기가 eARC를 지원할 때 수신 주파수를 강화하여 더욱 풍부하고 생생한 음향을 제공",
      "descEn": "Provides richer and more vivid sound by enhancing the reception frequency when the HDMI(ARC) audio device supports eARC.",
      "standardVal": "eARC (HDMI2)\n※ 지원포트 넘버 표기"
    },
    {
      "id": "7-3",
      "category": "CONNECTIVITY",
      "feature": "USB Input",
      "level": "LV1",
      "descKo": "USB 단자 개수",
      "descEn": "# of USB Input",
      "standardVal": "1ea (v 2.0) / 2ea (v 2.0) / 3ea (v 2.0) / 3ea (v 3.0 1ea / v2.0 2ea)"
    },
    {
      "id": "7-4",
      "category": "CONNECTIVITY",
      "feature": "Wi-Fi",
      "level": "LV1",
      "descKo": "- /\nYes (Wi-Fi 5) / \nYes (Wi-Fi 6) /\nYes (Wi-Fi 6E)",
      "descEn": "- /\nYes (Wi-Fi 5) / \nYes (Wi-Fi 6) /\nYes (Wi-Fi 6E)",
      "standardVal": "- /\nYes (Wi-Fi 5) / \nYes (Wi-Fi 6) /\nYes (Wi-Fi 6E)"
    },
    {
      "id": "7-5",
      "category": "CONNECTIVITY",
      "feature": "Bluetooth Support",
      "level": "LV1",
      "descKo": "버전 5.3 / 5.1 / 5.0",
      "descEn": "Ver. 5.3 / 5.1 / 5.0",
      "standardVal": "Yes (v 5.3) / Yes (v 5.1) / Yes (v 5.0) / -"
    },
    {
      "id": "7-6",
      "category": "CONNECTIVITY",
      "feature": "Ethernet Input",
      "level": "LV1",
      "descKo": "# of Ethernet Input",
      "descEn": "# of Ethernet Input",
      "standardVal": "xx ea / -"
    },
    {
      "id": "7-7",
      "category": "CONNECTIVITY",
      "feature": "CI Slot",
      "level": "LV1",
      "descKo": "# of CI Slot",
      "descEn": "# of CI Slot",
      "standardVal": "xx ea / -"
    },
    {
      "id": "7-8",
      "category": "CONNECTIVITY",
      "feature": "RF Input (Antenna/Cable)",
      "level": "LV1",
      "descKo": "# of RF Input",
      "descEn": "# of RF Input",
      "standardVal": "xx ea / -"
    },
    {
      "id": "7-9",
      "category": "CONNECTIVITY",
      "feature": "SPDIF (Optical Digital Audio Out)",
      "level": "LV1",
      "descKo": "# of Digital Audio Output",
      "descEn": "# of Digital Audio Output",
      "standardVal": "xx ea / -"
    },
    {
      "id": "7-10",
      "category": "CONNECTIVITY",
      "feature": "Headphone output",
      "level": "LV1",
      "descKo": "# of Headphone output",
      "descEn": "# of Headphone output",
      "standardVal": "xx ea / -"
    },
    {
      "id": "7-10-1",
      "category": "CONNECTIVITY",
      "feature": "Line out",
      "level": "LV2",
      "descKo": "# of Line out",
      "descEn": "# of Line out",
      "standardVal": "xx ea / -"
    },
    {
      "id": "7-11",
      "category": "CONNECTIVITY",
      "feature": "RS-232C Input (Min Jack)",
      "level": "LV2",
      "descKo": "RS-232C 단자 지원",
      "descEn": "RS-232C jack support",
      "standardVal": "Yes / -"
    },
    {
      "id": "7-12",
      "category": "CONNECTIVITY",
      "feature": "IR Blaster",
      "level": "LV2",
      "descKo": "IR Blaster 지원",
      "descEn": "IR Blaster support",
      "standardVal": "Yes / -"
    },
    {
      "id": "8-1",
      "category": "ACCESSIBILITY",
      "feature": "High Contrast",
      "level": "LV1",
      "descKo": "시력이 좋지 않은 사용자가 TV 메뉴의 글자를 쉽게 알아볼 수 있게 밝은 부분과 어두운 부분이 구분이 잘 되도록 조정",
      "descEn": "Enhance the contrast between bright and dark areas of some menus, such as the background and text, for being easily viewed by those with low-vision.",
      "standardVal": "Yes / -"
    },
    {
      "id": "8-2",
      "category": "ACCESSIBILITY",
      "feature": "Gray Scale",
      "level": "LV1",
      "descKo": "영상 및 화면에 제공되는 메뉴의 색상을 흑백톤으로 변경해 색에 따른 모호한 경계를 또렷하게 함",
      "descEn": "Change the color of the menu on the screen to black and white tone for higher clarity.",
      "standardVal": "Yes / -"
    },
    {
      "id": "8-3",
      "category": "ACCESSIBILITY",
      "feature": "Invert Colors",
      "level": "LV1",
      "descKo": "시력이 좋지 않은 사용자가 메뉴를 잘 볼 수 있도록 배경과 글자 색상을 반전함",
      "descEn": "Invert and compensate certain colors in some menus to enhance the visibility of items displayed on the screen.",
      "standardVal": "Yes / -"
    },
    {
      "id": "9-1",
      "category": "POWER",
      "feature": "Power Supply (Voltage, Hz)",
      "level": "LV1",
      "descKo": "전압 규격",
      "descEn": "Voltage specification",
      "standardVal": "AC 100~240V 50~60Hz\n(지역별 상이)"
    },
    {
      "id": "9-2",
      "category": "POWER",
      "feature": "Standby Power Consumption",
      "level": "LV1",
      "descKo": "대기 소비 전력",
      "descEn": "Standby Power Consumption",
      "standardVal": "Under 0.xW"
    },
    {
      "id": "9-3",
      "category": "POWER",
      "feature": "Energy saving Mode",
      "level": "LV2",
      "descKo": "에너지 세이빙 모드",
      "descEn": "Energy saving Mode",
      "standardVal": "Yes / -"
    },
    {
      "id": "9-4",
      "category": "POWER",
      "feature": "Illuminance Green sensor",
      "level": "LV2",
      "descKo": "조도센서",
      "descEn": "Illuminance Green sensor",
      "standardVal": "Yes / -"
    },
    {
      "id": "9-5",
      "category": "POWER",
      "feature": "Energy Standard",
      "level": "LV2",
      "descKo": "Energy Standard",
      "descEn": "Energy Standard",
      "standardVal": "Yes / -"
    },
    {
      "id": "9-6",
      "category": "POWER",
      "feature": "ENERGY STAR® Qualified",
      "level": "LV2",
      "descKo": "ENERGY STAR 인증",
      "descEn": "ENERGY STAR Qualified",
      "standardVal": "Yes / -"
    },
    {
      "id": "10-1",
      "category": "Design",
      "feature": "Wallpaper Design",
      "level": "LV1",
      "descKo": "True Wireless 기술로 구현한 미니멀리즘 디자인으로, 모든 방해 요소를 제거하여 시청자의 몰입감을 극대화함\n\nOLED W6",
      "descEn": "LG's minimalist design, realized through true wireless technology, eliminates all distractions to maximize viewer immersion.",
      "standardVal": "Yes /\n-"
    },
    {
      "id": "11-1",
      "category": "ACCESSORIES INCLUDED",
      "feature": "Remote",
      "level": "LV1",
      "descKo": "리모컨 장입 사양",
      "descEn": "Remote Type",
      "standardVal": "* MR26 / MR25 / L-con / ART10 model\nAI Magic Remote MR26 /\nAI Magic Remote MR25 /\nStandard Remote /\nBasic Remote\n\n-MR26GA / MR25GA : w/o Number Key\n-MR26GB / MR25GB : w/ Number Key (United Kingdom / Italy / Thailand / Singapore)"
    },
    {
      "id": "11-2",
      "category": "ACCESSORIES INCLUDED",
      "feature": "Remote Control Batteries",
      "level": "LV2",
      "descKo": "배터리 사양",
      "descEn": "Battery type and quantity",
      "standardVal": "Yes (AAA x 2EA) / Yes (AA x 2EA) / -\n\n* MR26GA / MR25GA : AAA x 2EA\n  MR26GB /MR25GB : AA x 2EA (United Kingdom / Italy / Thailand / Singapore)\n  L-Con : AAA x 2EA"
    },
    {
      "id": "11-3",
      "category": "ACCESSORIES INCLUDED",
      "feature": "IR Blaster Cable",
      "level": "LV2",
      "descKo": "IR Blaster Cable 장입 여부",
      "descEn": "IR Blaster Cable Included",
      "standardVal": "Yes / -"
    },
    {
      "id": "11-4",
      "category": "ACCESSORIES INCLUDED",
      "feature": "Power Cable",
      "level": "LV1",
      "descKo": "전원 케이블 TV 본체와 연결/분리 여부",
      "descEn": "전원 케이블 TV 본체와 연결/분리 여부",
      "standardVal": "Yes (Attached) /\nYes (Detachable) /\nAdaptor"
    },
    {
      "id": "11-5",
      "category": "ACCESSORIES INCLUDED",
      "feature": "Zero Connect Box",
      "level": "LV1",
      "descKo": "Zero Connect Box 장입 여부",
      "descEn": "Zero Connect Box Included",
      "standardVal": "Yes / -"
    },
    {
      "id": "12-1",
      "category": "ADDITIONAL FEATURE",
      "feature": "OSD Language",
      "level": "LV2",
      "descKo": "지역별 상이\nex) EU 기준 36개 (webOS)",
      "descEn": "Differ by region\nex) EU - 36 language (webOS)",
      "standardVal": "xx 개 (지역별 상이)"
    },
    {
      "id": "12-2",
      "category": "ADDITIONAL FEATURE",
      "feature": "Time Machine (DVR)",
      "level": "LV2",
      "descKo": "아래 기능 중 하나라도 되면 적용",
      "descEn": "Recording in HDD/USB external storage.\nHDD : 80GB ~ 2TB",
      "standardVal": "Yes / -"
    },
    {
      "id": "12-2-1",
      "category": "ADDITIONAL FEATURE",
      "feature": "Digital Recording",
      "level": "LV2",
      "descKo": "HDD/USB 외부 저장매체 녹화 기능\n\n1) HDD 지원 용량 : 80GB ~ 2TB\n\n2) USB 지원용량 :\n  - FAT32 포멧 : 1개 파일 최대 용량 4GB, 드라이브 최대 크기 32GB\n  - NTFS 포멧 : 1개 파일 최대 용량 무제한(16TB), 드라이브 최대 크기 무제한(256TB)    \n  - exFAT 포멧 : 1개 파일 최대 용량 무제한(512TB), 드라이브 최대 크기 무제한(512TB)",
      "descEn": "Recording in HDD/USB external storage.\nHDD : 80GB ~ 2TB",
      "standardVal": "Yes / - \n\n*북미/CIS/이태리/그리스/한국 : DVR 기능 자체 미지원"
    },
    {
      "id": "12-2-2",
      "category": "ADDITIONAL FEATURE",
      "feature": "Time Shift",
      "level": "LV2",
      "descKo": "Using External Storage\nRF, AV/Composite only\ncan't support AV/Composite in case of Japan\nHDD 지원 용량 : 80GB ~ 2TB",
      "descEn": "Using External Storage\nRF, Composite only\ncan't support AV in case of Japan\nHDD : 80GB ~ 2TB",
      "standardVal": "Yes / - \n\n*북미/CIS/이태리/그리스/한국 : DVR 기능 자체 미지원"
    },
    {
      "id": "12-2-3",
      "category": "ADDITIONAL FEATURE",
      "feature": "Watch & Record",
      "level": "LV2",
      "descKo": "Watch & Record : 현재보는 것과 다른 것을 녹화하는 기능 (2Tuner)\n일본의 경우 전모델 2Tuner이므로 Watch&Record 지원",
      "descEn": "Watch & Record (2 Tuner Watch & Record) : Recording a content while watching the other one or using Smart funtions (2 Tuner)\n- All Japan models(2 /3 tuner) support Watch&Record",
      "standardVal": "Yes / - \n\n*북미/CIS/이태리/그리스/한국 : DVR 기능 자체 미지원"
    }
  ],
  "models": [
    {
      "code": "OLEDW6",
      "name": "OLEDW6",
      "displayType": "4K OLED",
      "series": "LG TV Series",
      "colIndices": [
        8
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "83/77",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Perfect Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "Yes (Brightness Booster Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "Yes (Reflection Free Premium)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "60W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "4.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "Yes (Zero Connect Technology)",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 3)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "Yes",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "Yes",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Head - Yes (Attached) / Zero Connect Box - Adaptor (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "Yes",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "OLED97G6",
      "name": "OLED97G6",
      "displayType": "4K OLED",
      "series": "OLED G6 Series",
      "colIndices": [
        9,
        10,
        11
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "97",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 120Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Perfect Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 120Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "60W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "4.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "3ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 200~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "OLED83/77/65/55G6",
      "name": "OLED83/77/65/55G6",
      "displayType": "4K OLED",
      "series": "OLED G6 Series",
      "colIndices": [
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "83/77/65/55",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Perfect Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "Yes (Brightness Booster Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "Yes (Reflection Free Premium)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "60W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "4.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "3ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GB (w/ Number Key)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "OLED48G6",
      "name": "OLED48G6",
      "displayType": "4K OLED",
      "series": "OLED G6 Series",
      "colIndices": [
        20,
        21,
        22
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "48",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Perfect Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "Yes (Brightness Booster Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "3ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GB (w/ Number Key)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "OLED83/77C6",
      "name": "OLED83/77C6",
      "displayType": "4K OLED",
      "series": "OLED C6 Series",
      "colIndices": [
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "83/77/65/55",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Perfect Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "Yes (Brightness Booster Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "OLED65/55C6",
      "name": "OLED65/55C6",
      "displayType": "4K OLED",
      "series": "OLED C6 Series",
      "colIndices": [
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "83/77/65/55",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Perfect Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "OLED48C6",
      "name": "OLED48C6",
      "displayType": "4K OLED",
      "series": "OLED C6 Series",
      "colIndices": [
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "48",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Perfect Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "OLED42C6",
      "name": "OLED42C6",
      "displayType": "4K OLED",
      "series": "OLED C6 Series",
      "colIndices": [
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "42",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Perfect Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "OLEDB6E",
      "name": "OLEDB6E",
      "displayType": "4K OLED",
      "series": "OLED B6 Series",
      "colIndices": [
        59,
        60,
        61,
        62,
        63
      ],
      "specs": {
        "1-1": {
          "val": "4K OLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "83/77/65/55/48",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 120Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "Yes",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Pixel Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "OLED Motion",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 120Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "Less than 0.1ms",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "MRGB95B",
      "name": "MRGB95B",
      "displayType": "4K Micro RGB",
      "series": "LG TV Series",
      "colIndices": [
        64,
        65,
        66,
        67,
        68,
        69
      ],
      "specs": {
        "1-1": {
          "val": "4K Micro RGB",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Micro RGB",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "100/86/75",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "RGB Primary Color Ultra (Triple 100% Color certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Micro Dimming Ultra",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 330",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "MRGB9MB",
      "name": "MRGB9MB",
      "displayType": "4K Micro RGB",
      "series": "Micro RGB 9M Series",
      "colIndices": [
        70
      ],
      "specs": {
        "1-1": {
          "val": "4K Mini RGB",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini RGB",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "86/75/65",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "RGB Primary Color Pro (Double 100% Color certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 11 AI Processor 4K Gen3 with Dual AI Engine",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 11 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Ultra)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI, RF, USB)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Precision Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 11 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Ultra)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "Yes (Zero Connect Technology)",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 3)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 6E)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "Yes",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Head - Yes (Attached) / Zero Connect Box - Adaptor (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "Yes",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "86/75/65MRGB85B",
      "name": "86/75/65MRGB85B",
      "displayType": "4K Micro RGB",
      "series": "Micro RGB 8 Series",
      "colIndices": [
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79
      ],
      "specs": {
        "1-1": {
          "val": "4K Mini RGB",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini RGB",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "86/75/65",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "RGB Primary Color Pro (Double 100% Color certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Precision Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 288",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "55/50MRGB85B",
      "name": "55/50MRGB85B",
      "displayType": "4K Micro RGB",
      "series": "Micro RGB 8 Series",
      "colIndices": [
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88
      ],
      "specs": {
        "1-1": {
          "val": "4K Mini RGB",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini RGB",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "55/50",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "RGB Primary Color Pro (Double 100% Color certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Precision Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 288",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "115QNED90B (ODM)",
      "name": "115QNED90B (ODM)",
      "displayType": "4K QNED MiniLED",
      "series": "LG TV Series",
      "colIndices": [
        89
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "115",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 165Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color Pro (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Precision Dimming Ultra",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 165Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 330",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "85/75/65/55QNED90B (ODM)",
      "name": "85/75/65/55QNED90B (ODM)",
      "displayType": "4K QNED MiniLED",
      "series": "LG TV Series",
      "colIndices": [
        90
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "85/75/65/55",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen2",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Precision Dimming Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "10 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 25",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "-",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 3)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "-",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR25GA / MR25GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR25GA : Yes (AAA x 2EA)\nMR25GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "100QNED85B",
      "name": "100QNED85B",
      "displayType": "4K QNED MiniLED",
      "series": "QNED 85/86/87 Series",
      "colIndices": [
        91,
        92
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "100",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color Pro (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Precision Dimming Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 288",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Attached)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "86/75/65QNED85B",
      "name": "86/75/65QNED85B",
      "displayType": "4K QNED MiniLED",
      "series": "QNED 85/86/87 Series",
      "colIndices": [
        93,
        94,
        95,
        96,
        97,
        98
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "86/75/65/55/50",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color Pro (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Precision Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 288",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "55/50QNED85B",
      "name": "55/50QNED85B",
      "displayType": "4K QNED MiniLED",
      "series": "QNED 85/86/87 Series",
      "colIndices": [
        99,
        100,
        101,
        102,
        103,
        104
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "86/75/65/55/50",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color Pro (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "Dolby Vision / HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "Precision Dimming",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "Motion Pro",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 288",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "50/43QNED80B",
      "name": "50/43QNED80B",
      "displayType": "4K QNED MiniLED",
      "series": "QNED 70/80 Series",
      "colIndices": [
        105,
        106,
        107,
        108,
        129,
        130,
        131,
        132,
        133
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "43",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 7 AI Processor 4K Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "4K Super Upscaling",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 60Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 120",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports eARC, ALLM)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.1)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "QNED82B",
      "name": "QNED82B",
      "displayType": "4K QNED MiniLED",
      "series": "LG TV Series",
      "colIndices": [
        109,
        110,
        111,
        112,
        113,
        114
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "85/75/65/55/50",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color Pro (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 288",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "QNED8MB",
      "name": "QNED8MB",
      "displayType": "4K QNED MiniLED",
      "series": "LG TV Series",
      "colIndices": [
        115
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "85/75/65/55/50",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color Pro (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen2",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "-",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "85/75/65QNED80B",
      "name": "85/75/65QNED80B",
      "displayType": "4K QNED MiniLED",
      "series": "QNED 70/80 Series",
      "colIndices": [
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "85/75/65",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color Pro (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 7 AI Processor 4K Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "4K Super Upscaling",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 60Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 120",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports eARC, ALLM)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "55QNED80B",
      "name": "55QNED80B",
      "displayType": "4K QNED MiniLED",
      "series": "QNED 70/80 Series",
      "colIndices": [
        124,
        125,
        126,
        127,
        128
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "55",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color Pro (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 7 AI Processor 4K Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "4K Super Upscaling",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 60Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports eARC, ALLM)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "QNED70B",
      "name": "QNED70B",
      "displayType": "4K QNED",
      "series": "QNED 70/80 Series",
      "colIndices": [
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        144,
        145
      ],
      "specs": {
        "1-1": {
          "val": "4K QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "85/75/65/55/50/43",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color (100% Color Volume certified)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 7 AI Processor 4K Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "4K Super Upscaling",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 60Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (Google Home, LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports eARC, ALLM)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "Yes (except for Italy, Greece)",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "연구소 확인",
      "name": "연구소 확인",
      "displayType": "4K TV",
      "series": "LG TV Series",
      "colIndices": [
        146
      ],
      "specs": {
        "1-1": {
          "val": "QNED MiniLED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "Full HD (1,920 x 1,080)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Mini LED",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "32",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "Dynamic QNED Color",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 5 AI Processor Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Resolution Upscaler",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "7 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "-",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "-",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "-",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "-",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "-",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "Yes (1 Way Playback)",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "-",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "2ea (supports eARC)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "-",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GB (w/ Number Key)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "98NU85 (ODM)",
      "name": "98NU85 (ODM)",
      "displayType": "4K NanoCell",
      "series": "LG TV Series",
      "colIndices": [
        147
      ],
      "specs": {
        "1-1": {
          "val": "4K UHD",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Direct",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "98",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native (VRR 144Hz)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 8 AI Processor 4K Gen3",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Alpha 8 AI Super Upscaling 4K",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes (Dynamic Tone Mapping Pro)",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "Yes (SDR/HDR)",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "4K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@120p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 144Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "Motion Booster 288",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "40W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "WF : 20W, 10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.2 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "Alpha 8 AI Sound Pro (Virtual 11.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "Yes (AI Object Remastering Pro)",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS, QFT)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "2ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "-",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "85/75/65/55/50/43NU85",
      "name": "85/75/65/55/50/43NU85",
      "displayType": "4K NanoCell",
      "series": "LG TV Series",
      "colIndices": [
        148,
        149,
        150,
        151,
        152
      ],
      "specs": {
        "1-1": {
          "val": "4K UHD",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Direct",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "85/75/65/55/50/43",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 7 AI Processor 4K Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "4K Super Upscaling",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 60Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Built-In",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "-",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "-",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports eARC, ALLM)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "-",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "AI Magic Remote MR26GA / MR26GB (w/ Number Key, United Kingdom / Italy)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "MR26GA : Yes (AAA x 2EA)\nMR26GB : Yes (AA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "NU80 (ODM)",
      "name": "NU80 (ODM)",
      "displayType": "4K NanoCell",
      "series": "LG TV Series",
      "colIndices": [
        153,
        154,
        155,
        156
      ],
      "specs": {
        "1-1": {
          "val": "4K UHD",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "4K Ultra HD (3,840 x 2,160)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Direct",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "85/75/65/55/50/43",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 7 AI Processor 4K Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "4K Super Upscaling",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "4K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "9 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "Yes (Up to 60Hz)",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes (with LG ThinQ app.)",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "Yes\n\nUK, Germany, Spain, France, Italy (MR1)\nAustria, Belgium, Netherlands, Portugal,Finland, Greece, Slovakia, Lithuania (`26년1Q)\nCroatia, Estonia, Ireland, Latvia,,Luxembourg, Malta, Slovenia (`26년3Q)",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "Yes (Paid service availability varies by country)",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "-",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "-",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2 (Terrestrial), DVB-C (Cable), DVB-S2 (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "3ea (supports eARC, ALLM)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50-60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "-",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "Standard Remote",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "Yes (AAA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "LB70",
      "name": "LB70",
      "displayType": "4K TV",
      "series": "LG TV Series",
      "colIndices": [
        157,
        158
      ],
      "specs": {
        "1-1": {
          "val": "FHD",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "Full HD (1,920 x 1,080)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Direct",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "27/24",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "120Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 5 AI Processor Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Resolution Upscaler",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "2K 120 fps (HDMI)",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "7 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "-",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "-",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes (with LG ThinQ app.)",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "-",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "-",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "-",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "10W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "5W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "-",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "2ea (supports eARC)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "-",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "Standard Remote",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "Yes (AAA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Adaptor",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "43LB65",
      "name": "43LB65",
      "displayType": "4K TV",
      "series": "OLED B6 Series",
      "colIndices": [
        159,
        160
      ],
      "specs": {
        "1-1": {
          "val": "FHD",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "Full HD (1,920 x 1,080)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Direct",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "43",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 5 AI Processor Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Resolution Upscaler",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "7 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "-",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "-",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes (with LG ThinQ app.)",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "-",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "-",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "-",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "20W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "10W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "-",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "2ea (supports eARC)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "-",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "Standard Remote",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "Yes (AAA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Yes (Detachable)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    },
    {
      "code": "32LB65",
      "name": "32LB65",
      "displayType": "4K TV",
      "series": "OLED B6 Series",
      "colIndices": [
        161,
        162
      ],
      "specs": {
        "1-1": {
          "val": "HD",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Type"
        },
        "1-2": {
          "val": "HD (1,366 x 768)",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Resolution"
        },
        "1-3": {
          "val": "Direct",
          "category": "PICTURE (DISPLAY)",
          "feature": "Backlight Type"
        },
        "1-4": {
          "val": "32H",
          "category": "PICTURE (DISPLAY)",
          "feature": "Display Size"
        },
        "1-5": {
          "val": "60Hz Native",
          "category": "PICTURE (DISPLAY)",
          "feature": "Refresh Rate"
        },
        "1-6": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Perfect Black"
        },
        "1-7": {
          "val": "-",
          "category": "PICTURE (DISPLAY)",
          "feature": "Wide Color Gamut"
        },
        "2-1": {
          "val": "Alpha 5 AI Processor Gen9",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Processor"
        },
        "2-1-1": {
          "val": "Quad",
          "category": "PICTURE (PROCESSING)",
          "feature": "Number of CPUs"
        },
        "2-2": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Brightness Booster"
        },
        "2-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Reflection Free"
        },
        "2-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Picture Pro"
        },
        "2-4-1": {
          "val": "Resolution Upscaler",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Upscaling"
        },
        "2-4-2": {
          "val": "Yes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dynamic Tone Mapping"
        },
        "2-4-3": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI HDR Remastering"
        },
        "2-4-4": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR Expression Enhancer"
        },
        "2-5": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Precision HDR Master Pro"
        },
        "2-6": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "4K Expression Enhancer"
        },
        "2-7": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "AI Genre Selection"
        },
        "2-8": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Brightness Control"
        },
        "2-9": {
          "val": "HDR10 / HLG",
          "category": "PICTURE (PROCESSING)",
          "feature": "HDR (High Dynamic Range)"
        },
        "2-10": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "FILMMAKER MODE™"
        },
        "2-11": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "HFR (High Frame Rate)"
        },
        "2-12": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Dimming Technology"
        },
        "2-13": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Motion"
        },
        "2-14": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QMS (Quick Media Switching)"
        },
        "2-15": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "QFT (Quick Frame Transport)"
        },
        "2-16": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "HEVC"
        },
        "2-17": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "VP9 (Video Decoder)"
        },
        "2-18": {
          "val": "2K@60p, 10bit",
          "category": "PICTURE (PROCESSING)",
          "feature": "AV1 (Video Decoder)"
        },
        "2-19": {
          "val": "-",
          "category": "PICTURE (PROCESSING)",
          "feature": "Auto Calibration"
        },
        "2-20": {
          "val": "7 modes",
          "category": "PICTURE (PROCESSING)",
          "feature": "Picture Mode"
        },
        "3-1": {
          "val": "-",
          "category": "GAMING",
          "feature": "G-Sync Compatible (Nvidia)"
        },
        "3-2": {
          "val": "-",
          "category": "GAMING",
          "feature": "FreeSync Compatible (AMD)"
        },
        "3-3": {
          "val": "Yes",
          "category": "GAMING",
          "feature": "HGIG Mode"
        },
        "3-4": {
          "val": "Yes (Game Dashboard)",
          "category": "GAMING",
          "feature": "Game Optimizer"
        },
        "3-5": {
          "val": "-",
          "category": "GAMING",
          "feature": "ALLM (Auto Low Latency Mode)"
        },
        "3-6": {
          "val": "-",
          "category": "GAMING",
          "feature": "VRR (Variable Refresh Rate)"
        },
        "3-7": {
          "val": "-",
          "category": "GAMING",
          "feature": "Response Time"
        },
        "3-8": {
          "val": "-",
          "category": "GAMING",
          "feature": "Motion Booster"
        },
        "3-9": {
          "val": "-",
          "category": "GAMING",
          "feature": "Dolby Vision for Gaming (4K 120Hz)"
        },
        "4-1": {
          "val": "webOS 26",
          "category": "SMART TV",
          "feature": "Operating System (OS)"
        },
        "4-2": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Agent"
        },
        "4-2-1": {
          "val": "Yes (with LG ThinQ app.)",
          "category": "SMART TV",
          "feature": "Intelligent Voice Recognition"
        },
        "4-2-2": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Concierge"
        },
        "4-2-3": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Chatbot"
        },
        "4-2-4": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Voice ID"
        },
        "4-2-5": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Copilot"
        },
        "4-2-6": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Generative AI Image"
        },
        "4-3": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "SMART TV",
          "feature": "AI Magic Remote"
        },
        "4-4": {
          "val": "-",
          "category": "SMART TV",
          "feature": "AI Picture/Sound Wizard"
        },
        "4-5-1": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Works with Naver Clova"
        },
        "4-5-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Hey Google"
        },
        "4-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home"
        },
        "4-6-1": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "My Page"
        },
        "4-6-2": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "AI Recommendation"
        },
        "4-7": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Home Hub"
        },
        "4-7-1": {
          "val": "Yes (LG ThinQ only)",
          "category": "SMART TV",
          "feature": "LG ThinQ + Homey / Hub"
        },
        "4-7-2": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Google Home / Hub"
        },
        "4-7-3": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Other Iot"
        },
        "4-7-4": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Google Cast"
        },
        "4-7-5": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Smart Dongle Compatible"
        },
        "4-7-6": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Matter (Wi-Fi)"
        },
        "4-8": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Home"
        },
        "4-9": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Works with Apple Airplay"
        },
        "4-10": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Hands-free Voice Control"
        },
        "4-11": {
          "val": "Yes (App)",
          "category": "SMART TV",
          "feature": "App Store"
        },
        "4-12": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Full Web Browser"
        },
        "4-13": {
          "val": "Yes\n\n[France/Germany/Spain/Italy/Austria/Switzerland/Ireland/Finland/Portugal/United Kingdom/Netherlands/Sweden/Norway/Denmark/Luxembourg/Belgium]",
          "category": "SMART TV",
          "feature": "LG Channels"
        },
        "4-14": {
          "val": "-",
          "category": "SMART TV",
          "feature": "LG Gallery+"
        },
        "4-15": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Sports"
        },
        "4-16": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Multi View"
        },
        "4-17": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Usage Care"
        },
        "4-18": {
          "val": "-",
          "category": "SMART TV",
          "feature": "Always Ready"
        },
        "4-19": {
          "val": "-",
          "category": "SMART TV",
          "feature": "USB Camera Compatible"
        },
        "4-20": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Home Office"
        },
        "4-21": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Games Service"
        },
        "4-22": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Music Service"
        },
        "4-23": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "Tips"
        },
        "4-24": {
          "val": "Yes (LG ThinQ)",
          "category": "SMART TV",
          "feature": "Smartphone Remote App"
        },
        "4-25": {
          "val": "-",
          "category": "SMART TV",
          "feature": "FTMS / Xiaomi Wearable Device Connect"
        },
        "4-26": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Link"
        },
        "4-27": {
          "val": "Yes",
          "category": "SMART TV",
          "feature": "LG Shield"
        },
        "5-1": {
          "val": "10W",
          "category": "AUDIO",
          "feature": "Audio Output"
        },
        "5-1-1": {
          "val": "5W per Channel",
          "category": "AUDIO",
          "feature": "Woofer / per Channel Output"
        },
        "5-1-2": {
          "val": "2.0 channel",
          "category": "AUDIO",
          "feature": "Speaker System"
        },
        "5-1-3": {
          "val": "Down Firing",
          "category": "AUDIO",
          "feature": "Speaker Direction"
        },
        "5-2": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Dolby Atmos"
        },
        "5-2-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "DAFC (Dolby Atmos FlecConnect)"
        },
        "5-3": {
          "val": "AI Sound Pro (Virtual 9.1.2 Up-mix)",
          "category": "AUDIO",
          "feature": "AI Sound"
        },
        "5-3-1": {
          "val": "-",
          "category": "AUDIO",
          "feature": "AI Object Remastering"
        },
        "5-4": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Clear Voice Pro"
        },
        "5-5": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Precision Sound Master Pro"
        },
        "5-6": {
          "val": "Ready (requires AI Magic Remote)",
          "category": "AUDIO",
          "feature": "Adaptive Acoustic Tuning"
        },
        "5-7": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "LG Sound Sync"
        },
        "5-8": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Sound Mode Share"
        },
        "5-9": {
          "val": "Yes",
          "category": "AUDIO",
          "feature": "Simultaneous Audio Output"
        },
        "5-10": {
          "val": "-",
          "category": "AUDIO",
          "feature": "Bluetooth Surround Ready"
        },
        "5-11": {
          "val": "-",
          "category": "AUDIO",
          "feature": "WOW Orchestra"
        },
        "5-12": {
          "val": "AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, apt-X (Refer to manual)",
          "category": "AUDIO",
          "feature": "Audio Codec"
        },
        "6-1": {
          "val": "DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)",
          "category": "BROADCASTING",
          "feature": "Digital TV Reception"
        },
        "6-2": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Analog TV Reception"
        },
        "6-3": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "Multi Tuner"
        },
        "6-4": {
          "val": "HbbTV (+MHEG : UK, Ireland)",
          "category": "BROADCASTING",
          "feature": "Data Broadcasting (Country Spec)"
        },
        "6-5": {
          "val": "Yes (CI+ 2.0)",
          "category": "BROADCASTING",
          "feature": "CI + (Common Interface)"
        },
        "6-6": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext Page"
        },
        "6-7": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "Teletext (Top/Flof/List)"
        },
        "6-7-1": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "[DVB] Subtitle"
        },
        "6-7-2": {
          "val": "-",
          "category": "BROADCASTING",
          "feature": "[ATSC] Closed Caption"
        },
        "6-8": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "AD (Audio Description)"
        },
        "6-9": {
          "val": "Yes",
          "category": "BROADCASTING",
          "feature": "EPG (8days)"
        },
        "7-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Wireless Transmission"
        },
        "7-2": {
          "val": "2ea (supports eARC)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Input"
        },
        "7-2-1": {
          "val": "Yes",
          "category": "CONNECTIVITY",
          "feature": "Simplink (HDMI CEC)"
        },
        "7-2-2": {
          "val": "eARC (HDMI 2)",
          "category": "CONNECTIVITY",
          "feature": "HDMI Audio Return Channel"
        },
        "7-3": {
          "val": "1ea (v 2.0)",
          "category": "CONNECTIVITY",
          "feature": "USB Input"
        },
        "7-4": {
          "val": "Yes (Wi-Fi 5)",
          "category": "CONNECTIVITY",
          "feature": "Wi-Fi"
        },
        "7-5": {
          "val": "Yes (v 5.3)",
          "category": "CONNECTIVITY",
          "feature": "Bluetooth Support"
        },
        "7-6": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "Ethernet Input"
        },
        "7-7": {
          "val": "1ea",
          "category": "CONNECTIVITY",
          "feature": "CI Slot"
        },
        "7-8": {
          "val": "2ea",
          "category": "CONNECTIVITY",
          "feature": "RF Input (Antenna/Cable)"
        },
        "7-9": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "SPDIF (Optical Digital Audio Out)"
        },
        "7-10": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Headphone output"
        },
        "7-10-1": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "Line out"
        },
        "7-11": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "RS-232C Input (Min Jack)"
        },
        "7-12": {
          "val": "-",
          "category": "CONNECTIVITY",
          "feature": "IR Blaster"
        },
        "8-1": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "High Contrast"
        },
        "8-2": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Gray Scale"
        },
        "8-3": {
          "val": "Yes",
          "category": "ACCESSIBILITY",
          "feature": "Invert Colors"
        },
        "9-1": {
          "val": "AC 100~240V 50/60Hz",
          "category": "POWER",
          "feature": "Power Supply (Voltage, Hz)"
        },
        "9-2": {
          "val": "Under 0.5W",
          "category": "POWER",
          "feature": "Standby Power Consumption"
        },
        "9-3": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy saving Mode"
        },
        "9-4": {
          "val": "-",
          "category": "POWER",
          "feature": "Illuminance Green sensor"
        },
        "9-5": {
          "val": "Yes",
          "category": "POWER",
          "feature": "Energy Standard"
        },
        "9-6": {
          "val": "-",
          "category": "POWER",
          "feature": "ENERGY STAR® Qualified"
        },
        "10-1": {
          "val": "-",
          "category": "Design",
          "feature": "Wallpaper Design"
        },
        "11-1": {
          "val": "Standard Remote",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote"
        },
        "11-2": {
          "val": "Yes (AAA x 2EA)",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Remote Control Batteries"
        },
        "11-3": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "IR Blaster Cable"
        },
        "11-4": {
          "val": "Adaptor",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Power Cable"
        },
        "11-5": {
          "val": "-",
          "category": "ACCESSORIES INCLUDED",
          "feature": "Zero Connect Box"
        },
        "12-1": {
          "val": "38개\nBosnian (Bosanski) \nCzech(\"čeština\" or \"český jazyk) \nDanish (Dansk)\nGerman (Deutsch)\nEstonian (eesti keel ) \nEnglish-DVB\nSpanish (español ) \nGreek (ελληνική γλώσσα ) \nFrench (français)\nIrish Gaeilge (Gaeilge) \nCroatian (hrvatski) \nItalian (italiano)\nKazakh (Қазақ) \nLatvian (latviešu valoda) \nLithuanian (lietuvių kalba)\nHungarian (Magyar) \nMacedonian (Македонски) \nDutch (Nederlands)\nNorwegian (Norsk) \nPolish (język polski) \nPortuguese (Português)\nRussian (Русский) \nRomanian (Româneşte)\nAlbanian (Shqip)\nSlovak (\"slovenský jazyk\" or \"slovenčina\") \nSlovenian (\"slovenský jazyk\" or \"slovenčina)\nSerbian (Srpski)\nFinnish (Suomi) \nSwedish (Svenska) \nTurkish (Türkçe)\nUkrainian (Українська) \nBulgarian (БЪЛГАРСКИ) \nArabic\n우즈베키스탄어\n몽골어(Mongo Cyrillic) \nAzeri\nIcelnadic language(íslenska)\n한국어",
          "category": "ADDITIONAL FEATURE",
          "feature": "OSD Language"
        },
        "12-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Machine (DVR)"
        },
        "12-2-1": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Digital Recording"
        },
        "12-2-2": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Time Shift"
        },
        "12-2-3": {
          "val": "-",
          "category": "ADDITIONAL FEATURE",
          "feature": "Watch & Record"
        }
      }
    }
  ]
};
if (typeof module !== 'undefined' && module.exports) { module.exports = SPEC_PORTAL_DATA; }
---
name: prm-presenter-guide-engine
description: PPTX 발표 자료의 발표자 영문 스피치 및 국문 상담 가이드를 분석하여 3단 인터랙티브 대시보드(TOC 목차 + 슬라이드 뷰어 + 발표 설명창), 세일즈 포털 임베드 최적화 헤더, 원클릭 KO/EN 언어 토글, 슬라이드쇼 TTS 음성 낭독 및 키보드 단축키 시스템을 사내 웹 배포 사이트로 자동 구축하는 스킬 지침
---

# PRM Presenter Guide & Slideshow TTS Engine Skill 지침

> [!NOTE]
> 본 스킬은 **`global-design-system`**의 Slate/Teal/Blue 디자인 토큰, 공통 UI 컴포넌트 표준 및 **`global-sales-portal`**의 임베디드 뷰어 통합 규격을 계승합니다.

---

## 1. 개요 및 핵심 가치 (Overview)

본 스킬은 제품 소개/전략 상담 PPTX 발표 자료로부터 **슬라이드별 발표자 노트(영문 스피치 대본 및 국문 상담 가이드)**를 자동 추출하여, 발표자와 영업 담당자가 거래선 미팅 및 프레젠테이션 시 즉시 활용할 수 있는 **차세대 3단 인터랙티브 상담 대시보드 웹사이트**를 구축하는 표준 운영 지침입니다.

### 5대 핵심 기능:
1. **3단 반응형 prompter 레이아웃**: 좌측 대목차(TOC) + 중앙 고해상도 슬라이드 뷰어 + 우측 발표 설명창(영문 스피치 & 국문 상담 가이드)
2. **세일즈 포털 임베드 최적화**: 중복 헤더 제거, 46px 컴팩트 헤더, 일체형 페이지네이션(`◀ 이전 [ 1 / N ] 다음 ▶`)
3. **원클릭 다국어(`KO` / `EN`) 토글**: 영문 모드 시 국문 가이드 자동 숨김 및 영문 스크립트 전면 확장, 목차 및 UI 일괄 영문화
4. **전체화면 슬라이드쇼(프레젠테이션) 모드 및 단축키**: 상·하단 듀얼 음성듣기(TTS) 컨트롤, `A`(음성 토글), `N`(노트), `P`(슬라이드쇼), `Esc`(종료)
5. **Web Speech API 듀얼 TTS 엔진**: 브라우저 내장 자연어 음성 합성, 슬라이드 전환 시 자동 정지 안전장치 탑재

---

## 2. 화면 레이아웃 및 UI 아키텍처 (Architecture Standard)

### 2.1 3단 반응형 구조 (3-Column Layout)
```
+----------------------------------------------------------------------------------------------------+
| Global Header: [← 포털로 돌아가기] | [◀ 이전 [ 1 / 48 ] 다음 ▶] | [KO | EN] | [🎙️ 설명창] [🖥️ 슬라이드쇼] |
+-----------------------+----------------------------------------------------+-----------------------+
| 좌측 대목차 (TOC)     | 중앙 슬라이드 뷰어                                  | 우측 발표 설명창       |
| - 6대 파트 아코디언   | - 고화질 16:9 반응형 캔버스                        | - 슬라이드 메타 배지  |
| - 슬라이드 번호 칩    | - 스크롤 기반 자동 활성화                           | - [▶ 음성 듣기 (A)]   |
| - 썸네일 그리드 탭    | - 확대/축소/맞춤 툴바                              | - [A-] [A+] [📋 복사] |
|                       |                                                    | - 🇬🇧 영문 스피치 대본 |
|                       |                                                    | - 🇰🇷 국문 상담 가이드 |
+-----------------------+----------------------------------------------------+-----------------------+
```

### 2.2 포털 iframe 임베드 컴팩트 헤더 규격
- **중복 헤더 방지 원칙**: 세일즈 포털의 대시보드 뷰어 내부 iframe으로 임베드될 경우, 포털 상단 바와 대시보드 상단 바가 2중으로 노출되는 현상을 방지합니다.
- **감지 로직 (`in-iframe`)**:
  ```javascript
  if (window.self !== window.top || window.location.search.includes('embedded=true') || window.location.search.includes('auth_token=')) {
    document.documentElement.classList.add('in-iframe');
  }
  ```
- **스타일 제약**:
  ```css
  html.in-iframe .app-header {
    height: 46px !important;
    padding: 0 16px !important;
  }
  html.in-iframe .btn-portal-back,
  html.in-iframe .header-branding {
    display: none !important; /* 포털 복귀 버튼 및 중복 로고 숨김 */
  }
  ```

---

## 3. 발표자 설명창 & 다국어(`KO`/`EN`) 엔진 규격

### 3.1 발표 설명창 패널 구조
- **영문 스피치 박스 (`.en-box`)**:
  - 원문 프레젠테이션 스피치 대본을 문단 단위(`<p>`)로 가독성 높게 표출
  - 프롬프터 룩앤필 (블루 틴트 그라데이션 및 명확한 폰트)
- **국문 상담 가이드 박스 (`.ko-box`)**:
  - 거래선 상담 시 강조해야 할 핵심 포인트 및 번역 해설 제공
  - 영문 모드(`EN`) 선택 시 **`display: none;`으로 즉시 완전 은닉** 처리
- **유틸리티 툴바**:
  - 폰트 크기 조절: `A-`, `A+` (11px ~ 20px 범위, 로컬 스토리지 기억)
  - 원클릭 스크립트 복사: `📋 복사` (영문 모드에서는 영문 대본만 단독 복사)

### 3.2 다국어(`KO` / `EN`) 토글 표준
- 언어 모드 변경 시 단일 함수 `setAppLanguage(lang)`를 통해 아래 항목을 원자적으로 동기화합니다:
  1. 상단 타이틀 및 버튼 라벨 (`◀ 이전` ↔ `◀ Prev`, `다음 ▶` ↔ `Next ▶`)
  2. 대목차(TOC) 6개 파트 섹션명 및 서브타이틀 일괄 번역 매핑
  3. 우측 발표 설명창 내 국문 가이드 컨테이너 표출/숨김 (`display: block` ↔ `none`)
  4. 슬라이드쇼 상·하단 TTS 버튼 라벨 (`음성 듣기 (A)` ↔ `Listen (A)`)
  5. 발표자 노트 드로어 내 국문 해설 숨김/노출

---

## 4. 슬라이드쇼(전체화면 프레젠테이션) & TTS 음성 엔진

### 4.1 상·하단 듀얼 툴바 컨트롤
- **상단 툴바 (`.overlay-top-bar`)**:
  - `[▶ 음성 듣기 (A)]` 버튼 + `[⏹]` 정지 버튼 + `[🎙️ 발표자 노트]` 토글 + `[✕ 나가기 (ESC)]`
- **하단 컨트롤 바 (`.overlay-bottom-bar`)**:
  - `[◀ 이전]` + `[ 1 / N ]` + `[다음 ▶]` + `[▶ 음성 듣기 (A)]` + `[⏹]` + 슬라이더 스크러버

### 4.2 슬라이드 번호 동적 판별
- 음성 재생 시 일반 뷰어 모드와 슬라이드쇼 모드의 인덱스를 반드시 구분하여 정확한 슬라이드의 스크립트를 낭독합니다:
  ```javascript
  const targetIndex = isPresentationMode ? presentationCurrentSlide : currentSlideIndex;
  const slide = presentationData.slides.find(s => s.index === targetIndex);
  ```

### 4.3 슬라이드 넘김 시 음성 자동 정지 (Safety Mechanism)
- 슬라이드를 좌우 방향키, 스페이스바, 하단 네비게이션 버튼, 슬라이더로 변경할 때 **기존 음성은 즉시 정지(`stopSpeech()`)**되어야 합니다. 자동 연속 낭독으로 인한 혼선을 원천 방지합니다.

### 4.4 듀얼 언어 음성 합성 (Web Speech API)
- 영문 모드: 미국/영국 Natural 보이스 우선 선택 (`lang = 'en-US'`)
- 국문 모드: 한국어 보이스 지원 (`lang = 'ko-KR'`)
- 상태별 UI 애니메이션: 재생 중일 때 오렌지/레드 그라데이션 및 펄스(`pulseTts`) 애니메이션 가동

### 4.5 글로벌 키보드 단축키 매핑
| 단축키 | 슬라이드쇼 모드 동작 | 일반 뷰어 모드 동작 |
| :---: | :--- | :--- |
| **`A` / `a`** | **현재 슬라이드 음성 재생 / 일시정지 / 재개** | **현재 슬라이드 음성 재생 / 일시정지** |
| **`N` / `n`** | 발표자 노트 드로어 열기/닫기 (ON/OFF) | - |
| **`P` / `p`** | - | 전체화면 슬라이드쇼 모드 진입 |
| **`S` / `s`** | - | 우측 발표 설명창 열기/닫기 |
| **`←` / `PageUp`** | 이전 슬라이드 (음성 자동 정지) | 이전 슬라이드 스크롤 |
| **`→` / `Space` / `PageDown`** | 다음 슬라이드 (음성 자동 정지) | 다음 슬라이드 스크롤 |
| **`Esc`** | 슬라이드쇼 종료 (현재 슬라이드로 복귀) | 검색창 포커스 해제 |

---

## 5. 원격 데스크톱(RDP) 오디오 라우팅 트러블슈팅

> **문제 현상**: 원격 가상 PC(RDP) 내부 브라우저에서 음성듣기 실행 시, 유튜브 등 일반 소리는 PC 스피커로 나오는데 TTS 음성만 이어폰/헤드셋으로 출력되는 현상

### 원인 및 1분 해결 표준 절차:
1. **원인**: RDP 가상 오디오 드라이버(`원격 오디오`)가 로컬 PC의 `원격 데스크톱 연결 (mstsc.exe)`로 소리를 보낼 때, 로컬 PC 윈도우 볼륨 믹서에서 `mstsc.exe`의 출력 장치가 이전의 '이어폰/통신 장치'로 고정(Device Pinning)되어 발생.
2. **해결 절차 (로컬 PC에서 수행)**:
   - 로컬 PC(실제 내 본체) 오른쪽 하단 작업 표시줄 스피커 아이콘 우클릭 ➔ **[볼륨 믹서]** 진입
   - 앱 목록에서 **`원격 데스크톱 연결` (mstsc.exe)** 찾기
   - 출력 장치를 **`스피커 (Realtek Audio 등 본체 스피커)`** 또는 **`기본값`**으로 변경
   - 대시보드에서 `A` 단축키를 두 번(일시정지 ➔ 재생) 누르면 PC 스피커로 즉시 출력

---

## 6. 표준 파일 구조 및 빌드 파이프라인

```
skills/prm-presenter-guide-engine/
├── SKILL.md                          # 본 스킬 종합 표준 지침
├── scripts/
│   ├── extract_ppt_notes.ps1         # PPTX 슬라이드 이미지 및 발표자 노트 추출 자동화
│   └── build_presentation_deck.js   # 추출 노트를 웹 데이터셋(slidesData.js)으로 빌드
├── templates/
│   ├── index.html                    # 3단 레이아웃 + 컴팩트 헤더 + 슬라이드쇼 오버레이 템플릿
│   ├── style.css                     # Stitch Slate/Teal 스타일, 글래스모피즘, 펄스 애니메이션
│   └── app.js                        # 듀얼 TTS, 단축키, KO/EN 토글, 포털 임베드 감지 엔진
└── references/
    └── rdp-audio-troubleshooting.md  # RDP 사운드 라우팅 및 볼륨 믹서 매뉴얼
```

---

## 7. 검증 체크리스트 (Verification Checklist)

- [ ] **헤더 최적화**: iframe 로드 시 복귀 버튼 및 대형 헤더가 숨겨지고 46px 단일 행 컴팩트 헤더로 렌더링되는가?
- [ ] **페이지네이션**: 상단 `[◀ 이전] [ 1 / N ] [다음 ▶]` 클릭 및 슬라이드 스크롤 시 번호가 양방향 동기화되는가?
- [ ] **다국어 토글**: `EN` 모드 전환 시 국문 가이드가 완전히 숨겨지고, TOC 및 UI 라벨이 영문화되는가?
- [ ] **음성 재생**: 상·하단 `음성 듣기 (A)` 버튼 및 키보드 `A` 키로 음성 재생/일시정지가 정상 작동하는가?
- [ ] **자동 정지**: 슬라이드를 넘길 때 이전 슬라이드의 음성이 즉시 자동 정지되는가?
- [ ] **슬라이드쇼 연동**: 슬라이드쇼 모드에서 현재 표시 중인 슬라이드의 정확한 영문 스크립트가 낭독되는가?
- [ ] **클립보드 복사**: 영문 모드에서 복사 시 국문 번역 없이 영문 스크립트만 단독 복사되는가?
- [ ] **비디오-나레이션 싱크**: 순차 등장/타이핑 애니메이션이 영문 나레이션 발화 시점과 어긋남 없이 일치하는가?

---

## 8. 모션 비디오 & 영문 스피치 대본 1:1 동기화 표준 (Motion Video & Narration Sync)

### 8.1 문제 정의 및 원칙
- **문제 현상**: PPT 원본 애니메이션이 슬라이드 시작 직후(0~1초대) 조기 실행되면, 서두 도입부를 읽고 있는 영문 나레이션과 시각 자료(질문 타이핑, 차트 공개 등) 간에 심각한 싱크 불일치가 발생합니다.
- **핵심 원칙 (Speech-First Timeline Alignment)**:
  1. 슬라이드 영문 스피치 대본의 문장별 발화 타임코드(기본 0.85배속 기준 단어당 약 0.35초)를 사전 측정합니다.
  2. 특정 키워드나 질문이 시작되는 정확한 초 단위 시점에 맞춰 PPT 애니메이션의 `TriggerDelayTime`을 지연 설정합니다.
  3. 비디오 전체 재생 길이(`Duration`)를 전체 나레이션 소요 시간에 맞춰 18~22초 수준으로 충분히 확장하여 마지막 결론까지 화면에 자연스럽게 유지되도록 합니다.

### 8.2 대표 적용 사례 (Slide 4 / PPT p.6 - AI 검색 질문 입력)
| 타임코드 | 영문 스피치 나레이션 대본 | 애니메이션 동작 (수정 전 ➔ 수정 후) |
| :---: | :--- | :--- |
| **0.0s ~ 7.0s** | *"But in 2026, the direction of consumer questions began to change..."* | **수정 전**: 1.2초에 질문 입력 시작 (조기 완료)<br>➔ **수정 후**: 빈 검색창 프레임 유지하며 차분한 도입부 연출 |
| **7.0s ~ 8.6s** | *`"Why does AI Upscaling matter?"`* | **질문 1 프롬프트 실시간 타이핑 애니메이션 시작 및 완성 (Delay = 7.0s)** |
| **8.6s ~ 10.0s** | *"and"* | 1.4초간 자연스러운 호흡 및 대기 |
| **10.0s ~ 11.8s** | *`"Which AI Processor creates a better TV experience?"`* | **질문 2 프롬프트 실시간 타이핑 애니메이션 시작 및 완성** |
| **12.5s ~ 18.5s** | *"This signals a shift in consumer interest..."* | 하단 2개 핵심 결론 배너 순차 등장 및 페이드 인 |
| **19.0s ~ 21.3s** | (슬라이드 나레이션 마무리) | 전체 완성 프레임 부드럽게 유지 (총 21.3초) |

### 8.3 PowerPoint COM 비디오 자동화 안전 수칙 (Anti-Hang & Stability)
1. **클립보드 무충돌 재시도 루프**:
   - `$pres.Slides.Item($i).Copy()` 직후 `$tempPres.Slides.Paste(1)`를 호출할 때 OS 클립보드 레이턴시로 인해 `Invalid request. Clipboard is empty` 에러가 발생하므로 반드시 800ms 지연 및 최대 5회 재시도 루프를 적용합니다:
     ```powershell
     $copiedSlide = $null
     for ($retry = 1; $retry -le 5; $retry++) {
         try {
             $pres.Slides.Item($slideNum).Copy()
             Start-Sleep -Milliseconds 800
             $copiedSlide = $tempPres.Slides.Paste(1)
             if ($copiedSlide) { break }
         } catch {
             Start-Sleep -Seconds 1
         }
     }
     if (-not $copiedSlide) { throw "Slide copy/paste failed after 5 retries" }
     ```
2. **사운드 및 미디어 충돌 방지**:
   - `CreateVideo` 호출 전, 슬라이드 내 삽입된 효과음 셰이프(`*TYPING*`, `*SOUND*`)는 삭제하고, 배경 비디오 셰이프는 `MediaFormat.Muted = $true; MediaFormat.Volume = 0`으로 음소거합니다.
3. **경로 인코딩 보존**:
   - PowerShell에서 한글 또는 특수문자(`[Sharing]`)가 포함된 경로 처리 시 문자열 하드코딩 대신 `$currentDir = (Get-Location).Path; Join-Path $currentDir ...`를 사용하여 COM의 `E_FAIL`을 원천 차단합니다.

---

## 9. 슬라이드쇼 모드 하이브리드 고정밀 자막 & 나레이션 동기화 표준 (Hybrid High-Precision Subtitle Sync Standard)

### 9.1 문제 정의 및 원인 규명
1. **클라우드 고음질 음성의 `onboundary` 미지원**:
   - Edge의 `Microsoft Aria Online (Natural)` 또는 Chrome의 `Google US English`와 같은 고품질 스트리밍 음성은 브라우저의 Web Speech API 구현상 단어 경계(`boundary`) 이벤트를 아예 전송하지 않거나 불완전하게 전달합니다.
   - 따라서 이들 음성을 사용할 경우 실시간 발화 이벤트가 아닌 **클록 타이머(Timer Clock)**가 자막 전환을 전적으로 관할하게 됩니다.
2. **타이머 클록의 과도한 시간 추정 (Over-estimation) 및 2.5초 락**:
   - 기존의 단어당 460~541ms 및 문장부호 450ms의 과다 시간 계산 모델로 인해, 150~160 WPM 속도로 유창하게 말하는 실제 음성에 비해 자막 전환 시점이 **슬라이드당 4~10초 이상 지연**되었습니다.
   - 또한 초기 2.5초 동안 타이머를 차단하는 락(`now - lastBoundaryEventTime < 2500`)으로 인해 **두 번째 자막 전환 시점부터 나레이션보다 한참 늦게 바뀌는 치명적 체감 지연**이 발생했습니다.
3. **고립 단어(Orphan Word) 파편화**:
   - 문장 분할 시 글자 수 기준(110자)으로 단순 절단할 경우, 문장 끝의 "experience."와 같은 1개 단어만 별도 자막 청크로 분리되어 부자연스러운 표출을 유발했습니다.

### 9.2 하이브리드 고정밀 동기화 구현 표준

1. **단일 기준 텍스트 정규화 (Single Source of Clean Text)**:
   - `SpeechSynthesisUtterance` 인스턴스, `prepareSubtitleChunks`, `renderPresentationSlide` 전 구간에 반드시 동일한 공백 정규화 텍스트(`cleanScript`)를 주입하여 문자 오프셋 및 단어 인덱스를 1:1로 일치시킵니다:
     ```javascript
     const cleanScript = (slide.scriptEn || '').replace(/\r\n/g, ' ').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
     currentSlideSubtitleChunks = prepareSubtitleChunks(cleanScript, currentSpeechRate);
     const utterance = new SpeechSynthesisUtterance(cleanScript);
     ```

2. **155 WPM 발표 음성 모델 기반 정밀 시간 캘리브레이션**:
   - 단어 수뿐만 아니라 문자 수(음절 길이), 쉼표 호흡, 마침표 휴지를 세분화하여 실제 TTS 발화 시간과 오차 5% 이내로 정밀 동기화합니다:
     ```javascript
     const rate = Math.max(0.5, speechRate);
     const baseWordMs = 175 / rate;
     const charMs = 34 / rate;
     const commaMs = 110 / rate;
     const periodMs = 240 / rate;

     const duration = Math.max(900, Math.round(
       words * baseWordMs +
       chars * charMs +
       commaCount * commaMs +
       periodCount * periodMs
     ));
     ```

3. **무지연 하이브리드 듀얼 모드 (Zero-Freeze Hybrid Clock & Boundary)**:
   - `hasValidBoundaryEvents` 플래그를 도입하여, 경계 이벤트가 수신되는 로컬 음성(Windows SAPI Zira 등) 환경에서는 `onboundary`가 0ms 실시간 우선 관할합니다.
   - 경계 이벤트가 발생하지 않는 온라인 고음질 음성(Aria Natural, Google 등) 환경에서는 **t=0 시점부터 지연 락 없이 50ms 고속 인터벌로 캘리브레이션 클록이 즉시 자막을 구동**합니다:
     ```javascript
     subtitleTrackerTimer = setInterval(() => {
       if (!isSpeaking || window.speechSynthesis.paused) return;
       const now = performance.now();
       if (hasValidBoundaryEvents && (now - lastBoundaryEventTime < 1200)) return;

       const elapsed = now - subtitleStartTime;
       let targetIdx = currentSlideSubtitleChunks.findIndex(c => elapsed >= c.startMs && elapsed < c.endMs);
       if (targetIdx !== -1 && targetIdx !== currentSubtitleChunkIndex) {
         currentSubtitleChunkIndex = targetIdx;
         updateSubtitleDisplay(currentSlideSubtitleChunks[targetIdx].text);
       }
     }, 50);
     ```

4. **고립 단어 방지 시네마틱 청킹 (Anti-Orphan Chunking)**:
   - 문장 절단 후 남은 꼬리 텍스트가 22자 미만이고 전체 문장이 135자 이내인 경우 분할하지 않고 한 청크로 유지하여 가독성을 극대화합니다:
     ```javascript
     const remainingAfter = remaining.slice(breakIdx).trim();
     if (remainingAfter.length > 0 && remainingAfter.length < 22 && remaining.length <= 135) {
       parts.push(remaining);
       remaining = '';
       break;
     }
     ```

5. **브라우저 캐시 무력화 버전 쿼리 배포**:
   - `index.html` 내 스크립트 태그에 `<script src="app.js?v=20261002_s10_nosub"></script>`와 같은 버전 쿼리를 명시하여 사용자가 브라우저 캐시로 인해 구버전 동기화 코드를 실행하는 현상을 원천 방지합니다.

### 9.3 특정 슬라이드 자막 숨김 제어 표준 (Slide-Specific Subtitle Suppression)
1. **문제 배경 및 적용 목적**:
   - 대화형 시뮬레이션(Living Room AI Agent, Slide 10 등)이나 인포그래픽 중심 슬라이드의 경우, 화면 자체에 대화창/텍스트가 이미 포함되어 있어 하단 자막 바가 콘텐츠를 가리고 가시성을 저해할 수 있습니다.
   - 이때 음성 나레이션(TTS 대화)은 정상적으로 들려주면서 화면의 투명 자막 바 및 오버레이 말풍선만 깔끔하게 숨기는 선택적 제어가 요구됩니다.
2. **구현 규칙**:
   - **선언적 메타데이터 (`slidesData.js`)**: 해당 슬라이드 객체에 `"hideSubtitles": true` 속성을 명시합니다.
   - **디펜시브 렌더링 락 (`app.js`)**:
     - `updateSubtitleDisplay(text)` 및 `renderPresentationSlide()`에서 `Boolean(slide.hideSubtitles || slide.index === 10)`을 검사하여 자막 바 노출(`bar.classList.add('visible')`)을 원천 차단하고 `clearSubtitleDisplay(true)`를 호출합니다.
     - 대화형 슬라이드의 경우 `updateDialogueVisuals()` 내의 플로팅 말풍선 오버레이(`overlay-dialogue-overlay`) 역시 슬라이드쇼 모드에서 함께 숨깁니다.
     - 다른 슬라이드로 전환 시에는 본래의 자막 설정(`isSubtitlesOpen`) 상태가 즉시 정상 복원됩니다.



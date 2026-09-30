/**
 * 2025년 거래선 PRM 상담자료 Web Application Logic
 * Stitch Strategic Insight System Standard Engine
 * Enhanced with 3-Column Presenter Script & Speech TTS
 */

let presentationData = null;
let currentSlideIndex = 1;
let totalSlidesCount = 48;
let currentZoomScale = 1.0;
let isPresentationMode = false;
let presentationCurrentSlide = 1;
let isPresentationNotesOpen = false;
let isScriptPanelOpen = true;
let activeRightTab = 'script';
let currentScriptFontSize = 13.5;
let observer = null;
let chatbotEngine = null;
let currentSpeechUtterance = null;
let isSpeaking = false;
let currentAppLang = 'ko';

// I18N Multilingual Dictionary (Korean / English)
const I18N_DICT = {
  ko: {
    portalBack: "← 포탈로 돌아가기",
    docTitle: "2025년 거래선 PRM 상담자료",
    prevBtn: "◀ 이전",
    nextBtn: "다음 ▶",
    panelToggle: "발표 설명창",
    modeToggle: "슬라이드쇼 모드",
    tabToc: "대목차 (TOC)",
    tabThumbs: "슬라이드",
    tocHeader: "6-PART AGENDA STRUCTURE",
    collapseAll: "전체 펼침/접힘",
    scriptPanelTitle: "슬라이드 발표 스크립트",
    ttsPlay: "음성 듣기",
    ttsStop: "음성 정지",
    ttsPlaying: "음성 재생 중...",
    ttsPaused: "일시 정지됨",
    ttsResume: "이어듣기",
    ttsSlideAudio: "음성 듣기 (A)",
    ttsSlidePause: "일시정지 (A)",
    ttsSlideResume: "이어듣기 (A)",
    copyBtn: "📋 복사",
    copiedToast: "📋 영문 발표 스크립트가 클립보드에 복사되었습니다.",
    speechLabel: "ENGLISH PRESENTATION SCRIPT",
    speechSubtag: "원문 발표 스피치",
    koGuideLabel: "국문 해설 및 거래선 상담 가이드",
    zoomReset: "화면 크기 맞춤",
    overlayNotes: "발표자 노트",
    overlayExit: "✕ 나가기 (ESC)",
    sections: [
      { id: "sec-1", title: "Part 1. 2025 Review & 유럽 시장 현황 (p.1~5)", subTitle: "유럽 TV 시장 ASP 하락 추세 및 LG OLED 51% M/S 성과" },
      { id: "sec-2", title: "Part 2. TV Industry Overview (p.6~8)", subTitle: "글로벌/유럽 시장 전망 및 4K 144Hz True Wireless 트렌드" },
      { id: "sec-3", title: "Part 3. Product Roadmap & OLED 혁신 (p.9~21)", subTitle: "Pinnacle of OLED, Wallpaper Reborn, Hyper Radiant, G6/C6 로드맵" },
      { id: "sec-4", title: "Part 4. Premium LCD (QNED / MiniLED / Nano UHD) (p.22~33)", subTitle: "LG RGB Prime Color, 115형 초대형 MiniLED, Nano Detail Enhancer" },
      { id: "sec-5", title: "Part 5. AI Processor & webOS Smart Life Solution (p.34~43)", subTitle: "Alpha 11 AI Gen2, 개인화 맞춤 AI 맞춤 화질/음향, webOS 5년 보증 업그레이드" },
      { id: "sec-6", title: "Part 6. 2026 유럽 사업 목표 & 핵심 라인업 Spec Chart (p.44~48)", subTitle: "2026 유럽 비즈니스 타깃, Zero Connect 무선 및 전 라인업 스펙 시트" }
    ]
  },
  en: {
    portalBack: "← Back to Portal",
    docTitle: "2025 PRM Consulting Deck",
    prevBtn: "◀ Prev",
    nextBtn: "Next ▶",
    panelToggle: "Presenter Script",
    modeToggle: "Slideshow",
    tabToc: "TOC",
    tabThumbs: "Slides",
    tocHeader: "6-PART AGENDA STRUCTURE",
    collapseAll: "Expand/Collapse All",
    scriptPanelTitle: "Slide Presentation Script",
    ttsPlay: "Play Audio",
    ttsStop: "Stop Audio",
    ttsPlaying: "Playing Speech Audio...",
    ttsPaused: "Playback Paused",
    ttsResume: "Resume",
    ttsSlideAudio: "Listen (A)",
    ttsSlidePause: "Pause (A)",
    ttsSlideResume: "Resume (A)",
    copyBtn: "📋 Copy",
    copiedToast: "📋 English speech script copied to clipboard.",
    speechLabel: "ENGLISH PRESENTATION SCRIPT",
    speechSubtag: "Original Speech",
    koGuideLabel: "Korean Guide & Notes",
    zoomReset: "Fit to Screen",
    overlayNotes: "Presenter Notes",
    overlayExit: "✕ Exit (ESC)",
    sections: [
      { id: "sec-1", title: "Part 1. 2025 Review & Europe Market Status (p.1~5)", subTitle: "Europe TV ASP Decline & LG OLED 51% M/S Achievements" },
      { id: "sec-2", title: "Part 2. TV Industry Overview (p.6~8)", subTitle: "Global/Europe Market Outlook & 4K 144Hz Wireless Trend" },
      { id: "sec-3", title: "Part 3. Product Roadmap & OLED Innovation (p.9~21)", subTitle: "Pinnacle of OLED, Wallpaper Reborn, Hyper Radiant, G6/C6 Roadmap" },
      { id: "sec-4", title: "Part 4. Premium LCD (QNED / MiniLED / Nano UHD) (p.22~33)", subTitle: "LG RGB Prime Color, 115-inch Ultra-Large MiniLED, Nano Detail Enhancer" },
      { id: "sec-5", title: "Part 5. AI Processor & webOS Smart Life Solution (p.34~43)", subTitle: "Alpha 11 AI Gen2, Personalized AI Picture/Sound, webOS 5-Year Upgrade" },
      { id: "sec-6", title: "Part 6. 2026 Europe Business Goals & Key Lineup Spec Chart (p.44~48)", subTitle: "2026 Europe Business Targets, Zero Connect Wireless & Lineup Spec Sheet" }
    ]
  }
};

// Initialize Web App on DOM Loaded
document.addEventListener('DOMContentLoaded', async () => {
  initIframeMode();
  initSavedSettings();
  await initPresentationData();
  initLanguage();
  setupEventListeners();
  initChatbot();
});

// Check and apply iframe mode to eliminate duplicate headers
function initIframeMode() {
  try {
    if (window.self !== window.top || window.location.search.includes('embedded=true') || window.location.search.includes('auth_token=')) {
      document.documentElement.classList.add('in-iframe');
    }
  } catch (e) {
    document.documentElement.classList.add('in-iframe');
  }
}

// Load Saved Local Storage Settings
function initSavedSettings() {
  const savedFontSize = localStorage.getItem('lge_script_font_size');
  if (savedFontSize) {
    currentScriptFontSize = parseFloat(savedFontSize) || 13.5;
    document.documentElement.style.setProperty('--script-font-size', `${currentScriptFontSize}px`);
  }
}

// Load Presentation Data
async function initPresentationData() {
  if (typeof PRESENTATION_DATA !== 'undefined' && PRESENTATION_DATA) {
    presentationData = PRESENTATION_DATA;
  } else {
    try {
      const res = await fetch('slides/slides.json');
      if (res.ok) {
        presentationData = await res.json();
      }
    } catch (err) {
      console.warn('slides.json fetch failed:', err);
    }
  }

  if (!presentationData) {
    console.error('Failed to load presentation data.');
    return;
  }

  totalSlidesCount = presentationData.totalPages || presentationData.slides.length;
  
  // Header Info
  const titleEl = document.getElementById('doc-title');
  if (titleEl && presentationData.presentationTitle) {
    titleEl.textContent = presentationData.presentationTitle;
  }
  const subEl = document.getElementById('doc-subtitle');
  if (subEl && presentationData.subtitle) {
    subEl.textContent = presentationData.subtitle;
  }
  const countEl = document.getElementById('tab-slide-count');
  if (countEl) countEl.textContent = totalSlidesCount;
  const overlayTotal = document.getElementById('overlay-total-num');
  if (overlayTotal) overlayTotal.textContent = totalSlidesCount;
  const scrubber = document.getElementById('overlay-scrubber');
  if (scrubber) scrubber.max = totalSlidesCount;

  renderTOC();
  renderThumbnails();
  renderSlideCards();
  setupIntersectionObserver();
  updateActiveSlideState(1);
}

// 1. Render Left 3-Tier Accordion TOC
function renderTOC() {
  const container = document.getElementById('toc-sections-list');
  if (!container || !presentationData) return;

  container.innerHTML = '';
  const sections = presentationData.sections || [];
  const tSections = (I18N_DICT[currentAppLang] && I18N_DICT[currentAppLang].sections) ? I18N_DICT[currentAppLang].sections : null;

  sections.forEach((sec) => {
    const groupEl = document.createElement('div');
    groupEl.className = 'toc-section-group';
    groupEl.id = `toc-group-${sec.id}`;

    const localizedSec = tSections ? tSections.find(s => s.id === sec.id) : null;
    const secTitle = localizedSec ? localizedSec.title : sec.title;

    const titleEl = document.createElement('div');
    titleEl.className = 'toc-section-title';
    titleEl.innerHTML = `
      <span>${secTitle}</span>
      <span class="toc-section-icon">▼</span>
    `;
    titleEl.onclick = () => {
      groupEl.classList.toggle('collapsed');
    };

    const listEl = document.createElement('div');
    listEl.className = 'toc-slide-list';

    sec.slideIndices.forEach(slideNum => {
      const slide = presentationData.slides.find(s => s.index === slideNum);
      if (!slide) return;

      const itemEl = document.createElement('a');
      itemEl.className = `toc-item ${slideNum === currentSlideIndex ? 'active' : ''}`;
      itemEl.id = `toc-item-${slideNum}`;
      itemEl.href = `#slide-card-${slideNum}`;
      itemEl.onclick = (e) => {
        e.preventDefault();
        scrollToSlide(slideNum);
      };

      itemEl.innerHTML = `
        <span class="toc-item-num">p.${slideNum}</span>
        <div class="toc-item-text-group">
          <div class="toc-item-title">${escapeHtml(slide.title)}</div>
          ${slide.subTitle ? `<div class="toc-item-sub">${escapeHtml(slide.subTitle)}</div>` : ''}
        </div>
      `;

      listEl.appendChild(itemEl);
    });

    groupEl.appendChild(titleEl);
    groupEl.appendChild(listEl);
    container.appendChild(groupEl);
  });
}

// Toggle all TOC Accordion Groups
let allTOCExpanded = true;
function toggleAllTOCGroups() {
  allTOCExpanded = !allTOCExpanded;
  const groups = document.querySelectorAll('.toc-section-group');
  groups.forEach(g => {
    if (allTOCExpanded) {
      g.classList.remove('collapsed');
    } else {
      g.classList.add('collapsed');
    }
  });
}

// 2. Render Slide Thumbnails Grid
function renderThumbnails() {
  const container = document.getElementById('thumbs-grid');
  if (!container || !presentationData) return;

  container.innerHTML = '';
  presentationData.slides.forEach(slide => {
    const cardEl = document.createElement('div');
    cardEl.className = `thumb-card ${slide.index === 1 ? 'active' : ''}`;
    cardEl.id = `thumb-card-${slide.index}`;
    cardEl.onclick = () => scrollToSlide(slide.index);

    cardEl.innerHTML = `
      <span class="thumb-badge">p.${slide.index}</span>
      <img class="thumb-img" src="slides/${slide.image}" alt="Slide ${slide.index}" loading="lazy">
      <div class="thumb-title" title="${escapeHtml(slide.title)}">${escapeHtml(slide.title)}</div>
    `;

    container.appendChild(cardEl);
  });
}

// 3. Render Main Stage Continuous Scroll Cards
function renderSlideCards() {
  const track = document.getElementById('slides-scroll-track');
  if (!track || !presentationData) return;

  track.innerHTML = '';
  presentationData.slides.forEach(slide => {
    const cardEl = document.createElement('article');
    cardEl.className = `slide-card ${slide.index === 1 ? 'active' : ''}`;
    cardEl.id = `slide-card-${slide.index}`;
    cardEl.dataset.slideIndex = slide.index;

    // Part tag label
    const sec = presentationData.sections.find(s => s.slideIndices.includes(slide.index));
    const secTag = sec ? sec.title.split('.')[0] : 'Part';

    cardEl.innerHTML = `
      <div class="slide-card-header">
        <div class="slide-header-left">
          <span class="slide-tag">${escapeHtml(secTag)}</span>
          <span class="slide-num-pill">Slide ${String(slide.index).padStart(2, '0')} / ${totalSlidesCount}</span>
          <div class="slide-title-row">
            <h2 class="slide-card-title">${escapeHtml(slide.title)}</h2>
            ${slide.subTitle ? `<span class="slide-card-subtitle">${escapeHtml(slide.subTitle)}</span>` : ''}
          </div>
        </div>
        <div class="slide-header-actions">
          <button class="btn-card-action" onclick="openPresentationAt(${slide.index})" title="이 슬라이드부터 전체화면 슬라이드쇼 보기">
            📽️ 슬라이드쇼
          </button>
        </div>
      </div>

      <div class="slide-card-body" onclick="openPresentationAt(${slide.index})" title="클릭 시 전체화면 슬라이드쇼로 확대">
        <img class="slide-img" src="slides/${slide.image}" alt="Slide ${slide.index}" loading="lazy">
      </div>

      <div class="slide-card-footer">
        <span>LGE TV Europe Sales PRM Deck • Confidential</span>
        <span>Slide ${slide.index} of ${totalSlidesCount}</span>
      </div>
    `;

    track.appendChild(cardEl);
  });
}

// 4. Setup Intersection Observer for Active State Tracking
function setupIntersectionObserver() {
  const cards = document.querySelectorAll('.slide-card');
  if (!cards.length) return;

  if (observer) observer.disconnect();

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
        const slideNum = parseInt(entry.target.dataset.slideIndex, 10);
        if (slideNum && slideNum !== currentSlideIndex) {
          updateActiveSlideState(slideNum);
        }
      }
    });
  }, {
    root: null,
    threshold: [0.35, 0.6]
  });

  cards.forEach(c => observer.observe(c));
}

// Update Active Highlights & Synchronize Script Panel
function updateActiveSlideState(slideNum) {
  currentSlideIndex = slideNum;

  // TOC active
  document.querySelectorAll('.toc-item').forEach(item => item.classList.remove('active'));
  const activeToc = document.getElementById(`toc-item-${slideNum}`);
  if (activeToc) {
    activeToc.classList.add('active');
    activeToc.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // Thumbnails active
  document.querySelectorAll('.thumb-card').forEach(card => card.classList.remove('active'));
  const activeThumb = document.getElementById(`thumb-card-${slideNum}`);
  if (activeThumb) {
    activeThumb.classList.add('active');
    activeThumb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // Card active
  document.querySelectorAll('.slide-card').forEach(c => c.classList.remove('active'));
  const activeCard = document.getElementById(`slide-card-${slideNum}`);
  if (activeCard) activeCard.classList.add('active');

  // Update Header Pagination Controls
  const pageInput = document.getElementById('page-input');
  if (pageInput) pageInput.value = slideNum;
  const prevBtn = document.getElementById('prev-slide-btn');
  if (prevBtn) prevBtn.disabled = (slideNum <= 1);
  const nextBtn = document.getElementById('next-slide-btn');
  if (nextBtn) nextBtn.disabled = (slideNum >= totalSlidesCount);

  // Synchronize Right Script Panel
  renderScriptPanel(slideNum);
}

// Smooth Scroll to Slide
function scrollToSlide(slideNum) {
  const target = document.getElementById(`slide-card-${slideNum}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateActiveSlideState(slideNum);
  }
}

// Header Slide Navigation Functions
function goToPrevSlide() {
  if (currentSlideIndex > 1) {
    scrollToSlide(currentSlideIndex - 1);
  }
}

function goToNextSlide() {
  if (currentSlideIndex < totalSlidesCount) {
    scrollToSlide(currentSlideIndex + 1);
  }
}

function handlePageJump(val) {
  let num = parseInt(val, 10);
  if (isNaN(num)) num = currentSlideIndex;
  num = Math.max(1, Math.min(totalSlidesCount, num));
  scrollToSlide(num);
}

// Left Sidebar Tab Switcher
function switchSidebarTab(tab) {
  document.getElementById('tab-toc-btn').classList.toggle('active', tab === 'toc');
  document.getElementById('tab-thumbs-btn').classList.toggle('active', tab === 'thumbs');
  document.getElementById('pane-toc').classList.toggle('active', tab === 'toc');
  document.getElementById('pane-thumbs').classList.toggle('active', tab === 'thumbs');
}

// Zoom Controls
function adjustZoom(delta) {
  currentZoomScale = Math.min(Math.max(0.6, currentZoomScale + delta), 1.8);
  applyZoom();
}

function resetZoom() {
  currentZoomScale = 1.0;
  applyZoom();
}

function applyZoom() {
  const track = document.getElementById('slides-scroll-track');
  const text = document.getElementById('zoom-level-text');
  if (track) {
    track.style.transform = `scale(${currentZoomScale})`;
    if (currentZoomScale > 1.0) {
      track.style.marginBottom = `${(currentZoomScale - 1.0) * 800}px`;
    } else {
      track.style.marginBottom = '0px';
    }
  }
  if (text) {
    text.textContent = `${Math.round(currentZoomScale * 100)}%`;
  }
}

// Fullscreen Toggle
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn('Fullscreen request failed:', err);
    });
  } else {
    document.exitFullscreen();
  }
}

// ===================================================================
// 5. Right-Side Presenter Script & Explanation Engine
// ===================================================================

// Render Content in Right Script Panel
function renderScriptPanel(slideNum) {
  if (!presentationData || !presentationData.slides) return;
  const slide = presentationData.slides.find(s => s.index === slideNum);
  if (!slide) return;

  // Header Elements
  const slideBadge = document.getElementById('script-slide-badge');
  const secBadge = document.getElementById('script-section-badge');
  const titleEl = document.getElementById('script-slide-title');
  const subEl = document.getElementById('script-slide-subtitle');
  
  // Section Tag
  const sec = presentationData.sections.find(s => s.slideIndices.includes(slide.index));
  const secTag = sec ? sec.title.split('.')[0] : 'Part';

  if (slideBadge) slideBadge.textContent = `SLIDE ${String(slide.index).padStart(2, '0')} / ${totalSlidesCount}`;
  if (secBadge) secBadge.textContent = secTag;
  if (titleEl) titleEl.textContent = slide.title;
  if (subEl) subEl.textContent = slide.subTitle || 'Executive Presentation Note';

  // English Script
  const enBox = document.getElementById('script-text-en');
  if (enBox) {
    const rawEn = slide.scriptEn || 'No presentation speech provided for this slide.';
    // Format paragraphs nicely
    enBox.innerHTML = rawEn
      .split('\n')
      .filter(p => p.trim().length > 0)
      .map(p => `<p>${escapeHtml(p.trim())}</p>`)
      .join('');
  }

  // Korean Translation & Guide (Hidden in English Mode)
  const koBoxContainer = document.getElementById('script-ko-box');
  if (koBoxContainer) {
    if (currentAppLang === 'en') {
      koBoxContainer.style.display = 'none';
    } else {
      koBoxContainer.style.display = 'block';
      const koBox = document.getElementById('script-text-ko');
      if (koBox) {
        const rawKo = slide.scriptKo || '해당 슬라이드의 국문 요약이 준비 중입니다.';
        koBox.innerHTML = rawKo
          .split('\n')
          .filter(p => p.trim().length > 0)
          .map(p => `<p>${escapeHtml(p.trim())}</p>`)
          .join('');
      }
    }
  }

  // Reset TTS if playing another slide
  stopSpeech();
}

// Toggle Script Sidebar Open / Closed
function toggleScriptPanel(forceState) {
  const mainBody = document.getElementById('main-body');
  const toggleBtn = document.getElementById('btn-script-panel-toggle');
  const collapseIcon = document.getElementById('collapse-icon');

  if (typeof forceState === 'boolean') {
    isScriptPanelOpen = forceState;
  } else {
    isScriptPanelOpen = !isScriptPanelOpen;
  }

  if (isScriptPanelOpen) {
    mainBody.classList.remove('script-collapsed');
    if (toggleBtn) toggleBtn.classList.add('active');
    if (collapseIcon) collapseIcon.textContent = '▶';
  } else {
    mainBody.classList.add('script-collapsed');
    if (toggleBtn) toggleBtn.classList.remove('active');
    if (collapseIcon) collapseIcon.textContent = '◀';
    stopSpeech();
  }
}

// Web Speech API: Text-to-Speech (TTS)
function playCurrentSlideSpeech() {
  if (!('speechSynthesis' in window)) {
    showToast(currentAppLang === 'en' ? '⚠️ Speech synthesis is not supported in this browser.' : '⚠️ 현재 브라우저가 음성 재생(SpeechSynthesis)을 지원하지 않습니다.');
    return;
  }

  if (isSpeaking) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      updateTtsUi(true, false);
      return;
    } else {
      window.speechSynthesis.pause();
      updateTtsUi(false, true);
      return;
    }
  }

  const targetIndex = isPresentationMode ? presentationCurrentSlide : currentSlideIndex;
  const slide = presentationData.slides.find(s => s.index === targetIndex);
  if (!slide || !slide.scriptEn) {
    showToast(currentAppLang === 'en' ? '⚠️ No English speech script for this slide.' : '⚠️ 재생할 영문 스크립트가 없습니다.');
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(slide.scriptEn);
  utterance.lang = 'en-US';
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  // Prefer English natural voices if available
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en-GB') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Samantha')));
  if (enVoice) {
    utterance.voice = enVoice;
  }

  utterance.onstart = () => {
    isSpeaking = true;
    updateTtsUi(true, false);
  };

  utterance.onend = () => {
    isSpeaking = false;
    updateTtsUi(false, false);
  };

  utterance.onerror = (e) => {
    console.warn('TTS playback error:', e);
    isSpeaking = false;
    updateTtsUi(false, false);
  };

  currentSpeechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window && (isSpeaking || window.speechSynthesis.speaking)) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  updateTtsUi(false, false);
}

function updateTtsUi(playing, paused) {
  // Sidebar Controls
  const playBtn = document.getElementById('btn-tts-play');
  const stopBtn = document.getElementById('btn-tts-stop');
  const ttsIcon = document.getElementById('tts-icon');
  const ttsText = document.getElementById('tts-text');
  const statusEl = document.getElementById('tts-status');

  // Slideshow Top Bar Controls
  const overlayTopBtn = document.getElementById('btn-overlay-tts-top');
  const overlayTopIcon = document.getElementById('overlay-tts-icon-top');
  const overlayTopText = document.getElementById('overlay-tts-text-top');
  const overlayTopStop = document.getElementById('btn-overlay-stop-top');

  // Slideshow Bottom Bar Controls
  const overlayBottomBtn = document.getElementById('btn-overlay-tts-bottom');
  const overlayBottomIcon = document.getElementById('overlay-tts-icon-bottom');
  const overlayBottomText = document.getElementById('overlay-tts-text-bottom');
  const overlayBottomStop = document.getElementById('btn-overlay-stop-bottom');

  // Presenter Notes Drawer Control
  const drawerTtsBtn = document.getElementById('drawer-tts-btn');

  const t = I18N_DICT[currentAppLang] || I18N_DICT.ko;

  if (playing && !paused) {
    // 1. Sidebar
    if (playBtn) playBtn.classList.add('playing');
    if (stopBtn) stopBtn.style.display = 'inline-flex';
    if (ttsIcon) ttsIcon.textContent = '⏸';
    if (ttsText) ttsText.textContent = (currentAppLang === 'en' ? 'Pause' : '일시정지');
    if (statusEl) statusEl.textContent = t.ttsPlaying;

    // 2. Overlay Top
    if (overlayTopBtn) overlayTopBtn.classList.add('playing');
    if (overlayTopIcon) overlayTopIcon.textContent = '⏸';
    if (overlayTopText) overlayTopText.textContent = t.ttsSlidePause;
    if (overlayTopStop) overlayTopStop.style.display = 'inline-flex';

    // 3. Overlay Bottom
    if (overlayBottomBtn) overlayBottomBtn.classList.add('playing');
    if (overlayBottomIcon) overlayBottomIcon.textContent = '⏸';
    if (overlayBottomText) overlayBottomText.textContent = t.ttsSlidePause;
    if (overlayBottomStop) overlayBottomStop.style.display = 'inline-flex';

    // 4. Notes Drawer
    if (drawerTtsBtn) {
      drawerTtsBtn.classList.add('playing');
      drawerTtsBtn.textContent = '⏸ ' + t.ttsSlidePause;
    }
  } else if (paused) {
    // 1. Sidebar
    if (playBtn) playBtn.classList.remove('playing');
    if (stopBtn) stopBtn.style.display = 'inline-flex';
    if (ttsIcon) ttsIcon.textContent = '▶';
    if (ttsText) ttsText.textContent = t.ttsResume;
    if (statusEl) statusEl.textContent = t.ttsPaused;

    // 2. Overlay Top
    if (overlayTopBtn) overlayTopBtn.classList.remove('playing');
    if (overlayTopIcon) overlayTopIcon.textContent = '▶';
    if (overlayTopText) overlayTopText.textContent = t.ttsSlideResume;
    if (overlayTopStop) overlayTopStop.style.display = 'inline-flex';

    // 3. Overlay Bottom
    if (overlayBottomBtn) overlayBottomBtn.classList.remove('playing');
    if (overlayBottomIcon) overlayBottomIcon.textContent = '▶';
    if (overlayBottomText) overlayBottomText.textContent = t.ttsSlideResume;
    if (overlayBottomStop) overlayBottomStop.style.display = 'inline-flex';

    // 4. Notes Drawer
    if (drawerTtsBtn) {
      drawerTtsBtn.classList.remove('playing');
      drawerTtsBtn.textContent = '▶ ' + t.ttsSlideResume;
    }
  } else {
    // 1. Sidebar
    if (playBtn) playBtn.classList.remove('playing');
    if (stopBtn) stopBtn.style.display = 'none';
    if (ttsIcon) ttsIcon.textContent = '▶';
    if (ttsText) ttsText.textContent = t.ttsPlay;
    if (statusEl) statusEl.textContent = '';

    // 2. Overlay Top
    if (overlayTopBtn) overlayTopBtn.classList.remove('playing');
    if (overlayTopIcon) overlayTopIcon.textContent = '▶';
    if (overlayTopText) overlayTopText.textContent = t.ttsSlideAudio;
    if (overlayTopStop) overlayTopStop.style.display = 'none';

    // 3. Overlay Bottom
    if (overlayBottomBtn) overlayBottomBtn.classList.remove('playing');
    if (overlayBottomIcon) overlayBottomIcon.textContent = '▶';
    if (overlayBottomText) overlayBottomText.textContent = t.ttsSlideAudio;
    if (overlayBottomStop) overlayBottomStop.style.display = 'none';

    // 4. Notes Drawer
    if (drawerTtsBtn) {
      drawerTtsBtn.classList.remove('playing');
      drawerTtsBtn.textContent = '▶ ' + t.ttsSlideAudio;
    }
  }
}

// Adjust Script Font Size
function adjustScriptFontSize(delta) {
  currentScriptFontSize = Math.min(Math.max(11, currentScriptFontSize + delta), 20);
  document.documentElement.style.setProperty('--script-font-size', `${currentScriptFontSize}px`);
  localStorage.setItem('lge_script_font_size', currentScriptFontSize);
  showToast(currentAppLang === 'en' ? `Font Size: ${currentScriptFontSize}px` : `글자 크기: ${currentScriptFontSize}px`);
}

// Copy Current Slide Script to Clipboard
function copyCurrentScript() {
  const slide = presentationData.slides.find(s => s.index === currentSlideIndex);
  if (!slide) return;

  const t = I18N_DICT[currentAppLang] || I18N_DICT.ko;
  const copyText = (currentAppLang === 'en')
    ? `[Slide ${slide.index}] ${slide.title}\n\n[ENGLISH PRESENTATION SCRIPT]\n${slide.scriptEn || ''}`
    : `[Slide ${slide.index}] ${slide.title}\n\n[ENGLISH PRESENTATION SCRIPT]\n${slide.scriptEn || ''}\n\n[한국어 해설]\n${slide.scriptKo || ''}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(copyText).then(() => {
      showToast(t.copiedToast);
    }).catch(() => {
      fallbackCopy(copyText);
    });
  } else {
    fallbackCopy(copyText);
  }
}

function fallbackCopy(text) {
  const t = I18N_DICT[currentAppLang] || I18N_DICT.ko;
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast(t.copiedToast);
}

// Toast Notification
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('app-toast');
  if (!toast) return;

  toast.textContent = message;
  toast.style.display = 'block';

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.display = 'none';
  }, 2400);
}

// ===================================================================
// 6. Presentation Slideshow Mode Engine & Presenter Notes Overlay
// ===================================================================
function togglePresentationMode() {
  if (isPresentationMode) {
    exitPresentationMode();
  } else {
    openPresentationAt(currentSlideIndex);
  }
}

function openPresentationAt(slideNum) {
  isPresentationMode = true;
  presentationCurrentSlide = Math.min(Math.max(1, slideNum), totalSlidesCount);
  
  const overlay = document.getElementById('presentation-overlay');
  if (overlay) overlay.style.display = 'flex';
  
  renderPresentationSlide();
}

function exitPresentationMode() {
  isPresentationMode = false;
  stopSpeech();
  const overlay = document.getElementById('presentation-overlay');
  if (overlay) overlay.style.display = 'none';

  // Close notes drawer
  const drawer = document.getElementById('presentation-notes-drawer');
  if (drawer) drawer.style.display = 'none';
  isPresentationNotesOpen = false;

  // Sync scroll to current presentation slide
  scrollToSlide(presentationCurrentSlide);
}

function renderPresentationSlide() {
  const slide = presentationData.slides.find(s => s.index === presentationCurrentSlide);
  if (!slide) return;

  const imgEl = document.getElementById('overlay-slide-img');
  const titleEl = document.getElementById('overlay-slide-title');
  const currentNumEl = document.getElementById('overlay-current-num');
  const scrubber = document.getElementById('overlay-scrubber');

  if (imgEl) imgEl.src = `slides/${slide.image}`;
  if (titleEl) titleEl.textContent = `[${slide.index}/${totalSlidesCount}] ${slide.title}`;
  if (currentNumEl) currentNumEl.textContent = slide.index;
  if (scrubber) scrubber.value = slide.index;

  // Render presenter notes drawer in presentation mode
  renderPresentationNotes(slide);
}

function togglePresentationNotes() {
  const drawer = document.getElementById('presentation-notes-drawer');
  const indicator = document.getElementById('overlay-notes-indicator');
  const toolBtn = document.getElementById('btn-overlay-notes-toggle');

  isPresentationNotesOpen = !isPresentationNotesOpen;

  if (drawer) {
    drawer.style.display = isPresentationNotesOpen ? 'flex' : 'none';
  }
  if (indicator) {
    indicator.textContent = isPresentationNotesOpen ? 'ON' : 'OFF';
  }
  if (toolBtn) {
    toolBtn.classList.toggle('active', isPresentationNotesOpen);
  }
}

function renderPresentationNotes(slide) {
  const drawerNum = document.getElementById('drawer-slide-num');
  const drawerTitle = document.getElementById('drawer-slide-title');
  const drawerSpeechEn = document.getElementById('drawer-speech-en');
  const drawerSpeechKo = document.getElementById('drawer-speech-ko');

  if (drawerNum) drawerNum.textContent = `SLIDE ${String(slide.index).padStart(2, '0')}`;
  if (drawerTitle) drawerTitle.textContent = slide.title;
  if (drawerSpeechEn) drawerSpeechEn.textContent = slide.scriptEn || 'No notes available.';
  if (drawerSpeechKo) {
    if (currentAppLang === 'en') {
      drawerSpeechKo.style.display = 'none';
    } else {
      drawerSpeechKo.style.display = 'block';
      drawerSpeechKo.textContent = slide.scriptKo || '';
    }
  }
}

function prevPresentationSlide() {
  if (presentationCurrentSlide > 1) {
    presentationCurrentSlide--;
    renderPresentationSlide();
    stopSpeech();
  }
}

function nextPresentationSlide() {
  if (presentationCurrentSlide < totalSlidesCount) {
    presentationCurrentSlide++;
    renderPresentationSlide();
    stopSpeech();
  }
}

function onOverlayScrubberChange(val) {
  presentationCurrentSlide = parseInt(val, 10);
  renderPresentationSlide();
  stopSpeech();
}

// ===================================================================
// 7. Event Listeners & Shortcuts
// ===================================================================
function setupEventListeners() {
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => onSearchInput(e.target.value));
  }

  // Pre-load Web Speech voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  // Global Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    // If input is focused, don't trigger global shortcuts (except Escape)
    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
      if (e.key === 'Escape') {
        document.activeElement.blur();
      }
      return;
    }

    if (isPresentationMode) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextPresentationSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevPresentationSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        presentationCurrentSlide = 1;
        renderPresentationSlide();
        stopSpeech();
      } else if (e.key === 'End') {
        e.preventDefault();
        presentationCurrentSlide = totalSlidesCount;
        renderPresentationSlide();
        stopSpeech();
      } else if (e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        playCurrentSlideSpeech();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        togglePresentationNotes();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        exitPresentationMode();
      }
      return;
    }

    // Continuous scroll mode shortcuts
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      goToPrevSlide();
    } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      goToNextSlide();
    } else if (e.key === 'a' || e.key === 'A') {
      e.preventDefault();
      playCurrentSlideSpeech();
    } else if (e.key === 's' || e.key === 'S') {
      e.preventDefault();
      toggleScriptPanel();
    } else if (e.key === 'p' || e.key === 'P') {
      e.preventDefault();
      togglePresentationMode();
    }
  });
}

// ===================================================================
// 8. Language Initialization & Switching Engine
// ===================================================================
function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('lge_prm_lang');
  const initialLang = (paramLang && (paramLang === 'en' || paramLang === 'ko')) 
    ? paramLang 
    : (savedLang || 'ko');
  setAppLanguage(initialLang, false);
}

function setAppLanguage(lang, persist = true) {
  currentAppLang = lang;
  if (persist) localStorage.setItem('lge_prm_lang', lang);

  document.documentElement.setAttribute('data-lang', lang);
  if (lang === 'en') {
    document.body.classList.add('lang-en');
  } else {
    document.body.classList.remove('lang-en');
  }

  // Toggle button active states
  const btnKo = document.getElementById('btnLangKo');
  const btnEn = document.getElementById('btnLangEn');
  if (btnKo) btnKo.classList.toggle('active', lang === 'ko');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');

  const t = I18N_DICT[lang];
  if (!t) return;

  // Update Static UI Texts
  const docTitle = document.getElementById('doc-title');
  if (docTitle) docTitle.textContent = t.docTitle;

  const prevBtnText = document.getElementById('prev-btn-text');
  if (prevBtnText) prevBtnText.textContent = t.prevBtn;

  const nextBtnText = document.getElementById('next-btn-text');
  if (nextBtnText) nextBtnText.textContent = t.nextBtn;

  const panelToggleText = document.getElementById('panel-toggle-text');
  if (panelToggleText) panelToggleText.textContent = t.panelToggle;

  const modeToggleText = document.getElementById('mode-toggle-text');
  if (modeToggleText) modeToggleText.textContent = t.modeToggle;

  const tabTocText = document.getElementById('tab-toc-text');
  if (tabTocText) tabTocText.textContent = t.tabToc;

  const tabThumbsText = document.getElementById('tab-thumbs-text');
  if (tabThumbsText) tabThumbsText.textContent = t.tabThumbs;

  const btnTocExpand = document.getElementById('btn-toc-expand-all');
  if (btnTocExpand) btnTocExpand.textContent = t.collapseAll;

  const scriptPanelHeaderTitle = document.getElementById('script-panel-header-title');
  if (scriptPanelHeaderTitle) scriptPanelHeaderTitle.textContent = t.scriptPanelTitle;

  const ttsText = document.getElementById('tts-text');
  if (ttsText && !isSpeaking) ttsText.textContent = t.ttsPlay;

  const copyBtnText = document.getElementById('btn-copy-text');
  if (copyBtnText) copyBtnText.textContent = t.copyBtn;

  const labelSubTagEn = document.getElementById('label-sub-tag-en');
  if (labelSubTagEn) labelSubTagEn.textContent = t.speechSubtag;

  const labelGuideKo = document.getElementById('label-guide-ko');
  if (labelGuideKo) labelGuideKo.textContent = t.koGuideLabel;

  const overlayNotesLabel = document.getElementById('overlay-notes-label');
  if (overlayNotesLabel) overlayNotesLabel.textContent = t.overlayNotes;

  const overlayExitBtn = document.getElementById('btn-overlay-close');
  if (overlayExitBtn) overlayExitBtn.textContent = t.overlayExit;

  const overlayPrevBtn = document.getElementById('overlay-prev-btn');
  if (overlayPrevBtn) overlayPrevBtn.textContent = t.prevBtn;

  const overlayNextBtn = document.getElementById('overlay-next-btn');
  if (overlayNextBtn) overlayNextBtn.textContent = t.nextBtn;

  const btnZoomReset = document.getElementById('btn-zoom-reset');
  if (btnZoomReset) btnZoomReset.title = t.zoomReset;

  // Re-render TOC to localize section titles
  renderTOC();

  // Re-render current script panel
  renderScriptPanel(currentSlideIndex);

  // Update TTS UI texts with new language
  const isCurrentlySpeaking = ('speechSynthesis' in window) && window.speechSynthesis.speaking;
  const isCurrentlyPaused = ('speechSynthesis' in window) && window.speechSynthesis.paused;
  updateTtsUi(isCurrentlySpeaking && !isCurrentlyPaused, isCurrentlyPaused);

  // Update presentation notes if currently in presentation mode
  if (isPresentationMode && presentationData && presentationData.slides) {
    const slide = presentationData.slides.find(s => s.index === presentationCurrentSlide);
    if (slide) renderPresentationNotes(slide);
  }
}

function onSearchInput(query) {
  const q = query.trim().toLowerCase();
  const clearBtn = document.getElementById('search-clear-btn');
  const countBadge = document.getElementById('search-result-count');

  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

  if (!q) {
    if (countBadge) countBadge.style.display = 'none';
    document.querySelectorAll('.slide-card').forEach(c => c.style.display = '');
    document.querySelectorAll('.toc-item').forEach(item => item.style.display = '');
    return;
  }

  let matchCount = 0;
  let firstMatchNum = null;

  presentationData.slides.forEach(slide => {
    const hay = (
      slide.title + ' ' + 
      (slide.subTitle || '') + ' ' + 
      (slide.content || '') + ' ' +
      (slide.scriptEn || '') + ' ' +
      (slide.scriptKo || '')
    ).toLowerCase();
    
    const isMatch = hay.includes(q);
    const cardEl = document.getElementById(`slide-card-${slide.index}`);
    const tocEl = document.getElementById(`toc-item-${slide.index}`);

    if (cardEl) cardEl.style.display = isMatch ? '' : 'none';
    if (tocEl) tocEl.style.display = isMatch ? '' : 'none';

    if (isMatch) {
      matchCount++;
      if (firstMatchNum === null) firstMatchNum = slide.index;
    }
  });

  if (countBadge) {
    countBadge.style.display = 'block';
    countBadge.textContent = `${matchCount}개 일치`;
  }

  if (firstMatchNum !== null) {
    scrollToSlide(firstMatchNum);
  }
}

function clearSearch() {
  const input = document.getElementById('global-search-input');
  if (input) {
    input.value = '';
    onSearchInput('');
    input.focus();
  }
}

// ===================================================================
// 8. AI Assistant Integration
// ===================================================================
function initChatbot() {
  if (typeof PrmAssistantEngine !== 'undefined') {
    const spec = (typeof SPEC_PORTAL_DATA !== 'undefined') ? SPEC_PORTAL_DATA : null;
    chatbotEngine = new PrmAssistantEngine(presentationData, spec);
  }
}

function toggleChatPanel() {
  // Switch right panel to AI tab and open
  switchRightPanelTab('ai');
}

function sendChatQuick(text) {
  const input = document.getElementById('chat-text-input');
  if (input) {
    input.value = text;
    onChatSubmit(new Event('submit'));
  }
}

function onChatSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('chat-text-input');
  if (!input) return;

  const query = input.value.trim();
  if (!query) return;

  input.value = '';

  // Append user bubble
  appendChatBubble('user', query);

  // Process via chatbot engine
  if (!chatbotEngine && typeof PrmAssistantEngine !== 'undefined') {
    initChatbot();
  }

  setTimeout(() => {
    let replyHtml = '';
    if (chatbotEngine) {
      replyHtml = chatbotEngine.processUserQuery(query);
    } else {
      replyHtml = '<p>챗봇 엔진을 초기화하는 중입니다. 잠시 후 다시 시도해 주세요.</p>';
    }
    appendChatBubble('ai', replyHtml, true);
  }, 350);
}

function appendChatBubble(sender, content, isHtml = false) {
  const wrap = document.getElementById('chat-messages-wrap');
  if (!wrap) return;

  if (sender === 'user') {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble-user';
    bubble.textContent = content;
    wrap.appendChild(bubble);
  } else {
    const container = document.createElement('div');
    container.className = 'chat-bubble-ai';
    container.innerHTML = `
      <div class="ai-avatar">🤖</div>
      <div class="ai-content">
        ${isHtml ? content : `<p>${escapeHtml(content)}</p>`}
      </div>
    `;
    wrap.appendChild(container);
  }

  wrap.scrollTop = wrap.scrollHeight;
}

// Utility: HTML Escape
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

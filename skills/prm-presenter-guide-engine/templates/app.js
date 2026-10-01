/**
 * PRM Presenter Guide & Slideshow TTS Engine - Core Runtime Application
 * Supporting Dual TTS, Fullscreen Slideshow, KO/EN Toggle, and Keyboard Shortcuts
 */

// ===================================================================
// 1. Global State
// ===================================================================
let currentSlideIndex = 1;
let totalSlidesCount = 1;
let currentZoomLevel = 1.0;
let isScriptPanelOpen = true;
let isPresentationMode = false;
let presentationCurrentSlide = 1;
let isPresentationNotesOpen = false;

// Audio & Web Speech API State
let isSpeaking = false;
let currentSpeechUtterance = null;
let currentScriptFontSize = 13.5;
let currentAppLang = 'ko';

// Multilingual Dictionary
const I18N_DICT = {
  ko: {
    portalBack: "← 포털로 돌아가기",
    docTitle: "거래선 PRM 프레젠테이션 상담 자료",
    prevBtn: "◀ 이전",
    nextBtn: "다음 ▶",
    panelToggle: "발표 설명창",
    modeToggle: "슬라이드쇼 모드",
    tabToc: "대목차 (TOC)",
    tabThumbs: "슬라이드",
    tocHeader: "AGENDA STRUCTURE",
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
    overlayExit: "✕ 나가기 (ESC)"
  },
  en: {
    portalBack: "← Back to Portal",
    docTitle: "PRM Presentation Consulting Deck",
    prevBtn: "◀ Prev",
    nextBtn: "Next ▶",
    panelToggle: "Presenter Script",
    modeToggle: "Slideshow",
    tabToc: "TOC",
    tabThumbs: "Slides",
    tocHeader: "AGENDA STRUCTURE",
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
    overlayExit: "✕ Exit (ESC)"
  }
};

// ===================================================================
// 2. Lifecycle & Initialization
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  initIframeMode();
  initPresentationData();
  initLanguage();
  setupEventListeners();
});

// Iframe Embedding Detection (Removes Duplicate Headers)
function initIframeMode() {
  try {
    if (window.self !== window.top || window.location.search.includes('embedded=true') || window.location.search.includes('auth_token=')) {
      document.documentElement.classList.add('in-iframe');
    }
  } catch (e) {
    document.documentElement.classList.add('in-iframe');
  }
}

// Presentation Data Setup
function initPresentationData() {
  if (typeof presentationData === 'undefined' || !presentationData.slides) {
    console.warn('presentationData is not loaded.');
    return;
  }
  totalSlidesCount = presentationData.slides.length;

  const headerTotal = document.getElementById('header-total-count');
  const headerInput = document.getElementById('header-page-input');
  const overlayTotal = document.getElementById('overlay-total-num');
  const overlayScrubber = document.getElementById('overlay-scrubber');

  if (headerTotal) headerTotal.textContent = totalSlidesCount;
  if (headerInput) headerInput.max = totalSlidesCount;
  if (overlayTotal) overlayTotal.textContent = totalSlidesCount;
  if (overlayScrubber) overlayScrubber.max = totalSlidesCount;

  renderTOC();
  renderThumbs();
  renderSlideCards();
  renderScriptPanel(1);
  setupScrollSpy();
}

// ===================================================================
// 3. Multilingual Engine
// ===================================================================
function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('lge_prm_lang');
  const initialLang = (paramLang && (paramLang === 'en' || paramLang === 'ko')) ? paramLang : (savedLang || 'ko');
  setAppLanguage(initialLang, false);
}

function setAppLanguage(lang, persist = true) {
  currentAppLang = lang;
  if (persist) localStorage.setItem('lge_prm_lang', lang);

  document.documentElement.setAttribute('data-lang', lang);
  const btnKo = document.getElementById('btnLangKo');
  const btnEn = document.getElementById('btnLangEn');
  if (btnKo) btnKo.classList.toggle('active', lang === 'ko');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');

  const t = I18N_DICT[lang] || I18N_DICT.ko;

  // Static Elements
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

  const scriptPanelTitle = document.getElementById('script-panel-header-title');
  if (scriptPanelTitle) scriptPanelTitle.textContent = t.scriptPanelTitle;

  const copyBtnText = document.getElementById('btn-copy-text');
  if (copyBtnText) copyBtnText.textContent = t.copyBtn;

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

  renderTOC();
  renderScriptPanel(currentSlideIndex);

  // Sync TTS UI labels
  const isCurrentlySpeaking = ('speechSynthesis' in window) && window.speechSynthesis.speaking;
  const isCurrentlyPaused = ('speechSynthesis' in window) && window.speechSynthesis.paused;
  updateTtsUi(isCurrentlySpeaking && !isCurrentlyPaused, isCurrentlyPaused);

  if (isPresentationMode && presentationData && presentationData.slides) {
    const slide = presentationData.slides.find(s => s.index === presentationCurrentSlide);
    if (slide) renderPresentationNotes(slide);
  }
}

// ===================================================================
// 4. Slide Rendering & Navigation
// ===================================================================
function renderSlideCards() {
  const stack = document.getElementById('slides-card-stack');
  if (!stack || !presentationData) return;

  stack.innerHTML = presentationData.slides.map(slide => `
    <div class="slide-card ${slide.index === 1 ? 'active-slide' : ''}" id="slide-card-${slide.index}" data-slide-index="${slide.index}">
      <div class="slide-card-header">
        <span class="card-num-badge">SLIDE ${String(slide.index).padStart(2, '0')}</span>
        <span class="card-title">${escapeHtml(slide.title)}</span>
      </div>
      <div class="slide-card-body">
        <img src="slides/${slide.image}" alt="${escapeHtml(slide.title)}" loading="lazy">
      </div>
    </div>
  `).join('');
}

function renderTOC() {
  const tree = document.getElementById('toc-tree');
  if (!tree || !presentationData) return;

  tree.innerHTML = presentationData.sections.map(sec => `
    <div class="toc-section-group" id="toc-sec-${sec.id}">
      <div class="toc-section-title" onclick="toggleTocGroup('${sec.id}')">
        <span>${escapeHtml(sec.title)}</span>
        <span class="toc-section-icon">▾</span>
      </div>
      <div class="toc-slide-list">
        ${sec.slideIndices.map(num => {
          const s = presentationData.slides.find(sl => sl.index === num);
          if (!s) return '';
          return `
            <a href="#slide-card-${s.index}" class="toc-item ${s.index === currentSlideIndex ? 'active' : ''}" onclick="onTocItemClick(event, ${s.index})">
              <span class="toc-item-num">${s.index}</span>
              <span class="toc-item-title">${escapeHtml(s.title)}</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function renderThumbs() {
  const grid = document.getElementById('thumbs-grid');
  if (!grid || !presentationData) return;

  grid.innerHTML = presentationData.slides.map(s => `
    <div class="thumb-card ${s.index === 1 ? 'active' : ''}" id="thumb-${s.index}" onclick="scrollToSlide(${s.index})">
      <img src="slides/${s.image}" alt="Slide ${s.index}" loading="lazy">
      <div class="thumb-label">${s.index}. ${escapeHtml(s.title)}</div>
    </div>
  `).join('');
}

function scrollToSlide(slideNum) {
  const target = document.getElementById(`slide-card-${slideNum}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

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
  const num = parseInt(val, 10);
  if (num >= 1 && num <= totalSlidesCount) {
    scrollToSlide(num);
  } else {
    const input = document.getElementById('header-page-input');
    if (input) input.value = currentSlideIndex;
  }
}

function setupScrollSpy() {
  const viewport = document.getElementById('slides-viewport');
  if (!viewport) return;

  let ticking = false;
  viewport.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSlideFromScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
}

function updateActiveSlideFromScroll() {
  const viewport = document.getElementById('slides-viewport');
  const cards = document.querySelectorAll('.slide-card');
  if (!viewport || cards.length === 0) return;

  const vpRect = viewport.getBoundingClientRect();
  const vpCenter = vpRect.top + vpRect.height / 2;

  let closestIndex = currentSlideIndex;
  let minDiff = Infinity;

  cards.forEach(card => {
    const r = card.getBoundingClientRect();
    const cCenter = r.top + r.height / 2;
    const diff = Math.abs(vpCenter - cCenter);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = parseInt(card.dataset.slideIndex, 10);
    }
  });

  if (closestIndex !== currentSlideIndex) {
    currentSlideIndex = closestIndex;
    onSlideChanged(currentSlideIndex);
  }
}

function onSlideChanged(slideNum) {
  // Update header input
  const input = document.getElementById('header-page-input');
  if (input) input.value = slideNum;

  // Update navigation button disabled state
  const prevBtn = document.getElementById('btn-header-prev');
  const nextBtn = document.getElementById('btn-header-next');
  if (prevBtn) prevBtn.disabled = (slideNum <= 1);
  if (nextBtn) nextBtn.disabled = (slideNum >= totalSlidesCount);

  // Update TOC active state
  document.querySelectorAll('.toc-item').forEach(item => {
    const isCurrent = item.getAttribute('href') === `#slide-card-${slideNum}`;
    item.classList.toggle('active', isCurrent);
  });

  // Update active slide card highlight
  document.querySelectorAll('.slide-card').forEach(c => {
    c.classList.toggle('active-slide', parseInt(c.dataset.slideIndex, 10) === slideNum);
  });

  // Render right script panel
  renderScriptPanel(slideNum);
}

// ===================================================================
// 5. Presenter Script Panel & Web Speech API (TTS)
// ===================================================================
function renderScriptPanel(slideNum) {
  if (!presentationData || !presentationData.slides) return;
  const slide = presentationData.slides.find(s => s.index === slideNum);
  if (!slide) return;

  const slideBadge = document.getElementById('script-slide-badge');
  const secBadge = document.getElementById('script-section-badge');
  const titleEl = document.getElementById('script-slide-title');
  const subEl = document.getElementById('script-slide-subtitle');

  const sec = presentationData.sections.find(s => s.slideIndices.includes(slide.index));
  const secTag = sec ? sec.title.split('.')[0] : 'Part';

  if (slideBadge) slideBadge.textContent = `SLIDE ${String(slide.index).padStart(2, '0')} / ${totalSlidesCount}`;
  if (secBadge) secBadge.textContent = secTag;
  if (titleEl) titleEl.textContent = slide.title;
  if (subEl) subEl.textContent = slide.subTitle || 'Executive Presentation Note';

  // English Speech
  const enBox = document.getElementById('script-text-en');
  if (enBox) {
    const rawEn = slide.scriptEn || 'No presentation speech provided for this slide.';
    enBox.innerHTML = rawEn
      .split('\n')
      .filter(p => p.trim().length > 0)
      .map(p => `<p>${escapeHtml(p.trim())}</p>`)
      .join('');
  }

  // Korean Guide (Hidden in English Mode)
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

  stopSpeech();
}

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
    showToast(currentAppLang === 'en' ? '⚠️ Speech synthesis is not supported in this browser.' : '⚠️ 현재 브라우저가 음성 재생을 지원하지 않습니다.');
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
  if (!slide) return;

  // Decide speech text and language
  let speechText = slide.scriptEn;
  let speechLang = 'en-US';

  // Flexible dual TTS: If Korean mode and user clicks speech without English script, fall back to Korean
  if (currentAppLang === 'ko' && (!speechText || speechText.length < 5) && slide.scriptKo) {
    speechText = slide.scriptKo;
    speechLang = 'ko-KR';
  }

  if (!speechText) {
    showToast(currentAppLang === 'en' ? '⚠️ No speech script for this slide.' : '⚠️ 재생할 스크립트가 없습니다.');
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(speechText);
  utterance.lang = speechLang;
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  // Select natural voices
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => (v.lang.startsWith(speechLang.split('-')[0])) && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Samantha')));
  if (voice) utterance.voice = voice;

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

  // Slideshow Controls
  const overlayTopBtn = document.getElementById('btn-overlay-tts-top');
  const overlayTopIcon = document.getElementById('overlay-tts-icon-top');
  const overlayTopText = document.getElementById('overlay-tts-text-top');
  const overlayTopStop = document.getElementById('btn-overlay-stop-top');

  const overlayBottomBtn = document.getElementById('btn-overlay-tts-bottom');
  const overlayBottomIcon = document.getElementById('overlay-tts-icon-bottom');
  const overlayBottomText = document.getElementById('overlay-tts-text-bottom');
  const overlayBottomStop = document.getElementById('btn-overlay-stop-bottom');

  const drawerTtsBtn = document.getElementById('drawer-tts-btn');
  const t = I18N_DICT[currentAppLang] || I18N_DICT.ko;

  if (playing && !paused) {
    if (playBtn) playBtn.classList.add('playing');
    if (stopBtn) stopBtn.style.display = 'inline-flex';
    if (ttsIcon) ttsIcon.textContent = '⏸';
    if (ttsText) ttsText.textContent = (currentAppLang === 'en' ? 'Pause' : '일시정지');
    if (statusEl) statusEl.textContent = t.ttsPlaying;

    if (overlayTopBtn) overlayTopBtn.classList.add('playing');
    if (overlayTopIcon) overlayTopIcon.textContent = '⏸';
    if (overlayTopText) overlayTopText.textContent = t.ttsSlidePause;
    if (overlayTopStop) overlayTopStop.style.display = 'inline-flex';

    if (overlayBottomBtn) overlayBottomBtn.classList.add('playing');
    if (overlayBottomIcon) overlayBottomIcon.textContent = '⏸';
    if (overlayBottomText) overlayBottomText.textContent = t.ttsSlidePause;
    if (overlayBottomStop) overlayBottomStop.style.display = 'inline-flex';

    if (drawerTtsBtn) {
      drawerTtsBtn.classList.add('playing');
      drawerTtsBtn.textContent = '⏸ ' + t.ttsSlidePause;
    }
  } else if (paused) {
    if (playBtn) playBtn.classList.remove('playing');
    if (stopBtn) stopBtn.style.display = 'inline-flex';
    if (ttsIcon) ttsIcon.textContent = '▶';
    if (ttsText) ttsText.textContent = t.ttsResume;
    if (statusEl) statusEl.textContent = t.ttsPaused;

    if (overlayTopBtn) overlayTopBtn.classList.remove('playing');
    if (overlayTopIcon) overlayTopIcon.textContent = '▶';
    if (overlayTopText) overlayTopText.textContent = t.ttsSlideResume;
    if (overlayTopStop) overlayTopStop.style.display = 'inline-flex';

    if (overlayBottomBtn) overlayBottomBtn.classList.remove('playing');
    if (overlayBottomIcon) overlayBottomIcon.textContent = '▶';
    if (overlayBottomText) overlayBottomText.textContent = t.ttsSlideResume;
    if (overlayBottomStop) overlayBottomStop.style.display = 'inline-flex';

    if (drawerTtsBtn) {
      drawerTtsBtn.classList.remove('playing');
      drawerTtsBtn.textContent = '▶ ' + t.ttsSlideResume;
    }
  } else {
    if (playBtn) playBtn.classList.remove('playing');
    if (stopBtn) stopBtn.style.display = 'none';
    if (ttsIcon) ttsIcon.textContent = '▶';
    if (ttsText) ttsText.textContent = t.ttsPlay;
    if (statusEl) statusEl.textContent = '';

    if (overlayTopBtn) overlayTopBtn.classList.remove('playing');
    if (overlayTopIcon) overlayTopIcon.textContent = '▶';
    if (overlayTopText) overlayTopText.textContent = t.ttsSlideAudio;
    if (overlayTopStop) overlayTopStop.style.display = 'none';

    if (overlayBottomBtn) overlayBottomBtn.classList.remove('playing');
    if (overlayBottomIcon) overlayBottomIcon.textContent = '▶';
    if (overlayBottomText) overlayBottomText.textContent = t.ttsSlideAudio;
    if (overlayBottomStop) overlayBottomStop.style.display = 'none';

    if (drawerTtsBtn) {
      drawerTtsBtn.classList.remove('playing');
      drawerTtsBtn.textContent = '▶ ' + t.ttsSlideAudio;
    }
  }
}

function adjustScriptFontSize(delta) {
  currentScriptFontSize = Math.min(Math.max(11, currentScriptFontSize + delta), 20);
  document.documentElement.style.setProperty('--script-font-size', `${currentScriptFontSize}px`);
  showToast(currentAppLang === 'en' ? `Font Size: ${currentScriptFontSize}px` : `글자 크기: ${currentScriptFontSize}px`);
}

function copyCurrentScript() {
  const slide = presentationData.slides.find(s => s.index === currentSlideIndex);
  if (!slide) return;

  const t = I18N_DICT[currentAppLang] || I18N_DICT.ko;
  const copyText = (currentAppLang === 'en')
    ? `[Slide ${slide.index}] ${slide.title}\n\n[ENGLISH PRESENTATION SCRIPT]\n${slide.scriptEn || ''}`
    : `[Slide ${slide.index}] ${slide.title}\n\n[ENGLISH PRESENTATION SCRIPT]\n${slide.scriptEn || ''}\n\n[한국어 해설]\n${slide.scriptKo || ''}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(copyText).then(() => showToast(t.copiedToast));
  }
}

// ===================================================================
// 6. Presentation Slideshow Mode
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

  const drawer = document.getElementById('presentation-notes-drawer');
  if (drawer) drawer.style.display = 'none';
  isPresentationNotesOpen = false;

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

  renderPresentationNotes(slide);
}

function togglePresentationNotes() {
  const drawer = document.getElementById('presentation-notes-drawer');
  const indicator = document.getElementById('overlay-notes-indicator');
  const toolBtn = document.getElementById('btn-overlay-notes-toggle');

  isPresentationNotesOpen = !isPresentationNotesOpen;
  if (drawer) drawer.style.display = isPresentationNotesOpen ? 'flex' : 'none';
  if (indicator) indicator.textContent = isPresentationNotesOpen ? 'ON' : 'OFF';
  if (toolBtn) toolBtn.classList.toggle('active', isPresentationNotesOpen);
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
// 7. Global Keyboard Event Listeners
// ===================================================================
function setupEventListeners() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  window.addEventListener('keydown', (e) => {
    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
      if (e.key === 'Escape') document.activeElement.blur();
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

    // Normal Viewer Mode
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

// Utility Toast & Escape Helper
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('app-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = 'block';
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.style.display = 'none'; }, 2400);
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

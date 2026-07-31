/**
 * Global Sales Insight Portal - Standalone Presentation Viewer Engine
 * Stitch Strategic Insight System Design Standard
 */

let presentationData = null;
let currentSlideIndex = 1;
let totalSlidesCount = 13;
let currentZoomScale = 1.0;
let observer = null;

// Initialize Web App on DOM Loaded
document.addEventListener('DOMContentLoaded', async () => {
  setupEventListeners();
  await loadPresentationData();
});

// Load Presentation Data (First check embedded PRESENTATION_DATA, then fallback to fetch)
async function loadPresentationData() {
  if (typeof PRESENTATION_DATA !== 'undefined' && PRESENTATION_DATA) {
    presentationData = PRESENTATION_DATA;
    console.log('Loaded embedded PRESENTATION_DATA successfully');
  } else {
    try {
      const res = await fetch('slides/slides.json');
      if (res.ok) {
        presentationData = await res.json();
      }
    } catch (err) {
      console.warn('Fetch slides.json failed, checking fallback:', err);
    }
  }

  if (!presentationData) {
    console.error('No presentation data available.');
    return;
  }

  totalSlidesCount = presentationData.totalPages || presentationData.slides.length;
  
  // Update Header Titles
  if (presentationData.presentationTitle) {
    const titleEl = document.getElementById('doc-title');
    if (titleEl) titleEl.textContent = presentationData.presentationTitle;
  }
  if (presentationData.subtitle) {
    const subEl = document.getElementById('doc-subtitle');
    if (subEl) subEl.textContent = presentationData.subtitle;
  }

  renderTOCSections();
  renderThumbnails();
  renderSlideCards();
  setupIntersectionObserver();

  // Initial State Highlight
  updateActiveSlideState(1);
}

// Render TOC Left Sidebar Tree (Section Groups & Main/Sub Slide Titles)
function renderTOCSections() {
  const container = document.getElementById('toc-sections-list');
  if (!container || !presentationData) return;

  container.innerHTML = '';

  const sections = presentationData.sections || [
    { id: 'sec-all', title: '전체 목차', slideIndices: Array.from({length: totalSlidesCount}, (_, i) => i + 1) }
  ];

  sections.forEach(sec => {
    const groupEl = document.createElement('div');
    groupEl.className = 'toc-section-group';

    const titleEl = document.createElement('div');
    titleEl.className = 'toc-section-title';
    titleEl.innerHTML = `
      <span>${sec.title}</span>
      <span style="font-size:10px; opacity:0.6;">▼</span>
    `;

    const listEl = document.createElement('div');
    listEl.className = 'toc-slide-list';

    sec.slideIndices.forEach(slideNum => {
      const slide = presentationData.slides.find(s => s.index === slideNum);
      if (!slide) return;

      const itemEl = document.createElement('a');
      itemEl.className = `toc-item ${slideNum === 1 ? 'active' : ''}`;
      itemEl.id = `toc-item-${slideNum}`;
      itemEl.onclick = (e) => {
        e.preventDefault();
        scrollToSlide(slideNum);
      };

      const mainHeading = slide.mainTitle || slide.title || `슬라이드 ${slideNum}`;
      const subHeading = slide.subTitle || '';

      itemEl.innerHTML = `
        <span class="toc-item-num">${String(slideNum).padStart(2, '0')}</span>
        <div class="toc-item-text-wrap">
          <span class="toc-item-main">${mainHeading}</span>
          ${subHeading ? `<span class="toc-item-sub">${subHeading}</span>` : ''}
        </div>
      `;

      listEl.appendChild(itemEl);
    });

    groupEl.appendChild(titleEl);
    groupEl.appendChild(listEl);
    container.appendChild(groupEl);
  });
}

// Render Sidebar Thumbnails List
function renderThumbnails() {
  const container = document.getElementById('thumbs-grid');
  if (!container || !presentationData) return;

  container.innerHTML = '';

  presentationData.slides.forEach(slide => {
    const card = document.createElement('div');
    card.className = `thumb-card ${slide.index === 1 ? 'active' : ''}`;
    card.id = `thumb-card-${slide.index}`;
    card.onclick = () => scrollToSlide(slide.index);

    card.innerHTML = `
      <img src="slides/${slide.image}" class="thumb-img" alt="${slide.title}" loading="lazy">
      <div class="thumb-caption">
        <span>Slide ${slide.index}</span>
        <span style="font-weight:400; opacity:0.7;">16:9</span>
      </div>
    `;

    container.appendChild(card);
  });
}

// Render Main Slide Cards Stack in Stage Area with Smart Dual Rendering
function renderSlideCards() {
  const container = document.getElementById('slides-stack');
  if (!container || !presentationData) return;

  container.innerHTML = '';

  presentationData.slides.forEach(slide => {
    const card = document.createElement('div');
    card.className = `slide-card ${slide.index === 1 ? 'active-stage' : ''}`;
    card.id = `slide-card-${slide.index}`;
    card.setAttribute('data-slide-index', slide.index);

    const mainText = slide.mainTitle || slide.title || `슬라이드 ${slide.index}`;
    const subText = slide.subTitle || '';

    // Build Rich Content Body
    let richBodyHtml = '';
    const hasRichContent = !!(slide.content || slide.metrics || slide.cards || slide.highlights || slide.table);

    if (hasRichContent) {
      const badgeText = slide.badge || 'PRESENTATION SPEC';
      const bulletsHtml = (slide.content || []).map(b => `<li>${b}</li>`).join('');
      
      let metricsHtml = '';
      if (slide.metrics) {
        metricsHtml = `
          <div class="metric-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-top:20px;">
            ${slide.metrics.map(m => `
              <div class="metric-card" style="background:#0F172A; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:16px;">
                <div class="metric-label" style="font-size:12px; color:#94A3B8;">${m.label}</div>
                <div class="metric-val" style="font-family:var(--font-mono); font-size:22px; font-weight:700; color:#0D9488;">${m.value}</div>
                ${m.change ? `<div style="font-size:11px; color:#34D399; margin-top:4px;">${m.change}</div>` : ''}
              </div>
            `).join('')}
          </div>
        `;
      }

      let cardsHtml = '';
      if (slide.cards) {
        cardsHtml = `
          <div class="card-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-top:20px;">
            ${slide.cards.map(c => `
              <div style="background:#0F172A; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:18px;">
                <div style="font-size:15px; font-weight:700; color:#FFF; margin-bottom:8px;">${c.title}</div>
                <div style="font-size:13px; color:#94A3B8; line-height:1.5;">${c.desc}</div>
              </div>
            `).join('')}
          </div>
        `;
      }

      richBodyHtml = `
        <div class="slide-rich-content" style="padding:28px 32px; background:#0D1322;">
          <span class="slide-badge-teal" style="margin-bottom:12px; display:inline-block;">${badgeText}</span>
          <h3 style="font-family:var(--font-title); font-size:22px; font-weight:700; color:#FFF; margin-bottom:16px;">${mainText}</h3>
          ${bulletsHtml ? `<ul class="slide-content-bullets" style="margin-bottom:20px;">${bulletsHtml}</ul>` : ''}
          ${metricsHtml}
          ${cardsHtml}
        </div>
      `;
    }

    // Always render original high-resolution slide image if present
    const renderImage = !!(slide.image);

    card.innerHTML = `
      <div class="slide-card-header">
        <div>
          <span class="slide-card-title-main">${mainText}</span>
          ${subText ? `<span class="slide-card-subtitle">| ${subText}</span>` : ''}
        </div>
        <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted);">SLIDE ${slide.index} / ${totalSlidesCount}</span>
      </div>
      ${renderImage ? `
        <div class="slide-image-wrapper" id="slide-img-wrap-${slide.index}">
          <img src="slides/${slide.image}" class="slide-img" alt="${slide.title}" onerror="handleSlideImgError(${slide.index})">
        </div>
      ` : ''}
      <div id="slide-fallback-${slide.index}" style="${renderImage ? 'display:none;' : 'display:block;'}">
        ${richBodyHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

// Fallback handler for missing/broken slide images (prevents broken image icons)
function handleSlideImgError(slideIndex) {
  const imgWrap = document.getElementById(`slide-img-wrap-${slideIndex}`);
  if (imgWrap) imgWrap.style.display = 'none';

  const fallback = document.getElementById(`slide-fallback-${slideIndex}`);
  if (fallback) fallback.style.display = 'block';
}

// Setup Scroll Sync with IntersectionObserver
function setupIntersectionObserver() {
  if (observer) observer.disconnect();

  const stage = document.getElementById('slide-stage');
  if (!stage) return;

  const options = {
    root: stage,
    rootMargin: '-20% 0px -50% 0px',
    threshold: 0.1
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slideIdx = parseInt(entry.target.getAttribute('data-slide-index'), 10);
        updateActiveSlideState(slideIdx);
      }
    });
  }, options);

  document.querySelectorAll('.slide-card').forEach(card => observer.observe(card));
}

// Update Active Slide State
function updateActiveSlideState(index) {
  currentSlideIndex = index;

  // 1. Header & Floating Controls
  const badge = document.getElementById('current-slide-num-badge');
  if (badge) badge.textContent = `Slide ${index} / ${totalSlidesCount}`;

  const input = document.getElementById('page-input');
  if (input) input.value = index;

  const currentSlideObj = presentationData?.slides?.find(s => s.index === index);
  if (currentSlideObj) {
    const titleEl = document.getElementById('current-slide-title');
    if (titleEl) {
      titleEl.textContent = currentSlideObj.mainTitle || currentSlideObj.title || `슬라이드 ${index}`;
    }
  }

  // 2. TOC Item Highlight
  document.querySelectorAll('.toc-item').forEach(el => el.classList.remove('active'));
  const activeTocItem = document.getElementById(`toc-item-${index}`);
  if (activeTocItem) {
    activeTocItem.classList.add('active');
    activeTocItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // 3. Thumbnails Highlight
  document.querySelectorAll('.thumb-card').forEach(el => el.classList.remove('active'));
  const activeThumbCard = document.getElementById(`thumb-card-${index}`);
  if (activeThumbCard) activeThumbCard.classList.add('active');

  // 4. Slide Stage Card Active Border
  document.querySelectorAll('.slide-card').forEach(el => el.classList.remove('active-stage'));
  const activeCard = document.getElementById(`slide-card-${index}`);
  if (activeCard) activeCard.classList.add('active-stage');

  // Nav Buttons State
  const prevBtn = document.getElementById('prev-slide-btn');
  if (prevBtn) prevBtn.disabled = (index <= 1);
  const nextBtn = document.getElementById('next-slide-btn');
  if (nextBtn) nextBtn.disabled = (index >= totalSlidesCount);
}

// Scroll Stage to Target Slide Index
function scrollToSlide(index) {
  if (index < 1 || index > totalSlidesCount) return;
  const card = document.getElementById(`slide-card-${index}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateActiveSlideState(index);
  }
}

function goToPrevSlide() {
  scrollToSlide(currentSlideIndex - 1);
}

function goToNextSlide() {
  scrollToSlide(currentSlideIndex + 1);
}

function handlePageJump(val) {
  const target = parseInt(val, 10);
  if (!isNaN(target)) scrollToSlide(target);
}

// Zoom Controls
function adjustZoom(delta) {
  currentZoomScale = Math.min(Math.max(0.5, currentZoomScale + delta), 2.5);
  applyZoom();
}

function resetZoom() {
  currentZoomScale = 1.0;
  applyZoom();
}

function applyZoom() {
  const stack = document.getElementById('slides-stack');
  if (stack) {
    stack.style.transform = `scale(${currentZoomScale})`;
    const indicator = document.getElementById('zoom-level-text');
    if (indicator) indicator.textContent = `${Math.round(currentZoomScale * 100)}%`;
  }
}

// Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key) {
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        goToPrevSlide();
        break;
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        goToNextSlide();
        break;
      case '/':
        e.preventDefault();
        searchInput?.focus();
        break;
      case '+':
      case '=':
        e.preventDefault();
        adjustZoom(0.1);
        break;
      case '-':
        e.preventDefault();
        adjustZoom(-0.1);
        break;
      case '0':
        e.preventDefault();
        resetZoom();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
    }
  });
}

function handleSearch(query) {
  const q = query.trim().toLowerCase();
  const clearBtn = document.getElementById('search-clear-btn');
  const countBadge = document.getElementById('search-result-count');

  if (!q) {
    if (clearBtn) clearBtn.style.display = 'none';
    if (countBadge) countBadge.style.display = 'none';
    document.querySelectorAll('.toc-item').forEach(el => el.style.display = 'flex');
    return;
  }

  if (clearBtn) clearBtn.style.display = 'block';

  let matchCount = 0;
  presentationData.slides.forEach(slide => {
    const tocEl = document.getElementById(`toc-item-${slide.index}`);
    const haystack = `${slide.mainTitle || ''} ${slide.subTitle || ''} ${slide.title || ''} ${slide.content || ''}`.toLowerCase();
    
    if (haystack.includes(q)) {
      matchCount++;
      if (tocEl) tocEl.style.display = 'flex';
    } else {
      if (tocEl) tocEl.style.display = 'none';
    }
  });

  if (countBadge) {
    countBadge.style.display = 'block';
    countBadge.textContent = `${matchCount}개 슬라이드`;
  }
}

function clearSearch() {
  const input = document.getElementById('global-search-input');
  if (input) input.value = '';
  handleSearch('');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar-container');
  if (sidebar) sidebar.classList.toggle('collapsed');
}

function switchSidebarTab(tab) {
  document.querySelectorAll('.sidebar-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.sidebar-pane').forEach(pane => pane.classList.remove('active'));

  if (tab === 'toc') {
    document.getElementById('tab-toc-btn').classList.add('active');
    document.getElementById('pane-toc').classList.add('active');
  } else {
    document.getElementById('tab-thumbs-btn').classList.add('active');
    document.getElementById('pane-thumbs').classList.add('active');
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.log(err));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

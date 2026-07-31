/**
 * 2026 TV Product Profile v1.6 App Engine
 * 151-Page 100% Lossless PDF.js Rendering & 3-Tier Accordion TOC Engine
 */

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let pdfDoc = null;
let currentSlideIndex = 1;
let totalSlidesCount = 151;
let currentScale = 1.35;
let observer = null;
let renderedPages = new Set();

document.addEventListener('DOMContentLoaded', () => {
  initPdfApp();
  setupEventListeners();
});

async function initPdfApp() {
  try {
    const loadingTask = pdfjsLib.getDocument('product_profile.pdf');
    pdfDoc = await loadingTask.promise;
    totalSlidesCount = pdfDoc.numPages;

    document.getElementById('page-total-text').textContent = `/ ${totalSlidesCount}`;
    document.getElementById('page-input').max = totalSlidesCount;

    render3TierTOC();
    renderPdfSlideCanvasStack();
    setupIntersectionObserver();
  } catch (err) {
    console.error('Failed to load PDF:', err);
  }
}

// Render 3-Tier Grouped Accordion TOC
function render3TierTOC() {
  const container = document.getElementById('toc-sections-list');
  if (!container || !PRESENTATION_DATA.parts) return;

  let html = '';

  PRESENTATION_DATA.parts.forEach(part => {
    html += `
      <div class="toc-part-group" style="margin-bottom:12px;">
        <div class="toc-part-header" onclick="toggleTocAccordion('${part.id}')" style="background:rgba(15, 23, 42, 0.8); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px 14px; cursor:pointer; display:flex; align-items:center; justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="toc-arrow" id="arrow-${part.id}" style="font-size:10px; transition:transform 0.2s;">▼</span>
            <span style="font-size:14px; font-weight:700; color:#FFF;">${part.title}</span>
          </div>
          <span style="font-family:var(--font-mono); font-size:11px; color:#0D9488; background:rgba(13,148,136,0.15); padding:2px 8px; border-radius:10px;">${part.pageRange}</span>
        </div>
        <div class="toc-part-body" id="body-${part.id}" style="padding-left:8px; margin-top:6px;">
          ${part.sections.map(sec => `
            <div class="toc-sec-group" style="margin-bottom:8px;">
              <div class="toc-sec-header" onclick="toggleTocAccordion('${sec.id}')" style="font-size:13px; font-weight:600; color:#38BDF8; cursor:pointer; padding:6px 10px; display:flex; justify-content:space-between; align-items:center; background:rgba(30,41,59,0.5); border-radius:6px;">
                <span>▶ ${sec.title}</span>
                <span style="font-family:var(--font-mono); font-size:10px; color:#94A3B8;">${sec.pageRange}</span>
              </div>
              <div class="toc-sec-body" id="body-${sec.id}" style="padding-left:10px; margin-top:4px;">
                ${sec.subGroups.map(grp => `
                  <div class="toc-sub-item" onclick="jumpToPageRange(${grp.startPage})" style="font-size:12px; color:#CBD5E1; padding:6px 10px; cursor:pointer; border-radius:4px; margin-bottom:2px; display:flex; justify-content:space-between; align-items:center; transition:background 0.2s;" onmouseover="this.style.background='rgba(13,148,136,0.2)'" onmouseout="this.style.background='transparent'">
                    <span>• ${grp.title}</span>
                    <span style="font-family:var(--font-mono); font-size:10px; color:#2DD4BF; background:rgba(13,148,136,0.1); padding:1px 6px; border-radius:8px;">p.${grp.startPage}~${grp.endPage}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Toggle Accordion Group
function toggleTocAccordion(id) {
  const body = document.getElementById(`body-${id}`);
  const arrow = document.getElementById(`arrow-${id}`);
  if (!body) return;

  if (body.style.display === 'none') {
    body.style.display = 'block';
    if (arrow) arrow.style.transform = 'rotate(0deg)';
  } else {
    body.style.display = 'none';
    if (arrow) arrow.style.transform = 'rotate(-90deg)';
  }
}

// Jump to specific slide page
function jumpToPageRange(pageNum) {
  goToSlide(pageNum);
}

// Render 151-Page PDF Slide Stack
function renderPdfSlideCanvasStack() {
  const container = document.getElementById('slides-stack');
  if (!container) return;

  container.innerHTML = '';

  for (let p = 1; p <= totalSlidesCount; p++) {
    const card = document.createElement('div');
    card.className = `slide-card ${p === 1 ? 'active-stage' : ''}`;
    card.id = `slide-card-${p}`;
    card.setAttribute('data-slide-index', p);

    card.innerHTML = `
      <div class="slide-card-header" style="display:flex; justify-content:space-between; align-items:center; padding:12px 20px; background:#0F172A; border-bottom:1px solid rgba(255,255,255,0.1);">
        <div>
          <span class="slide-card-title-main" style="font-weight:700; color:#FFF; font-size:15px;">Slide ${p}</span>
        </div>
        <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted);">PAGE ${p} / ${totalSlidesCount}</span>
      </div>
      <div class="slide-pdf-canvas-wrap" style="display:flex; justify-content:center; background:#0B0F19; padding:16px; min-height:400px; position:relative;">
        <canvas id="pdf-canvas-${p}" class="pdf-slide-canvas" style="box-shadow:0 8px 24px rgba(0,0,0,0.6); border-radius:4px; max-width:100%;"></canvas>
      </div>
    `;

    container.appendChild(card);
  }
}

// Render specific PDF page on canvas (Lazy-load on view)
async function renderPdfPage(pageNum) {
  if (!pdfDoc || renderedPages.has(pageNum)) return;
  renderedPages.add(pageNum);

  try {
    const page = await pdfDoc.getPage(pageNum);
    const canvas = document.getElementById(`pdf-canvas-${pageNum}`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: currentScale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    await page.render(renderContext).promise;
  } catch (e) {
    console.error(`Error rendering page ${pageNum}:`, e);
  }
}

// IntersectionObserver for 151 pages scroll sync & lazy rendering
function setupIntersectionObserver() {
  if (observer) observer.disconnect();

  const stage = document.getElementById('slide-stage');
  if (!stage) return;

  const options = {
    root: stage,
    rootMargin: '200px 0px 200px 0px',
    threshold: 0.05
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const pageNum = parseInt(entry.target.getAttribute('data-slide-index'), 10);
      
      if (entry.isIntersecting) {
        // Render PDF page when near viewport
        renderPdfPage(pageNum);

        // Pre-render next 2 pages for super smooth scrolling
        if (pageNum + 1 <= totalSlidesCount) renderPdfPage(pageNum + 1);
        if (pageNum + 2 <= totalSlidesCount) renderPdfPage(pageNum + 2);

        updateActiveSlideState(pageNum);
      }
    });
  }, options);

  document.querySelectorAll('.slide-card').forEach(card => observer.observe(card));

  // Render initial page 1
  renderPdfPage(1);
  renderPdfPage(2);
}

// Update Active State
function updateActiveSlideState(index) {
  currentSlideIndex = index;

  document.querySelectorAll('.slide-card').forEach(c => c.classList.remove('active-stage'));
  const activeCard = document.getElementById(`slide-card-${index}`);
  if (activeCard) activeCard.classList.add('active-stage');

  document.getElementById('current-slide-num-badge').textContent = `Slide ${index} / ${totalSlidesCount}`;
  document.getElementById('current-slide-title').textContent = `Slide Page ${index} (151 Total Slides)`;
  document.getElementById('page-input').value = index;

  const prevBtn = document.getElementById('prev-slide-btn');
  const nextBtn = document.getElementById('next-slide-btn');
  if (prevBtn) prevBtn.disabled = (index <= 1);
  if (nextBtn) nextBtn.disabled = (index >= totalSlidesCount);
}

// Navigation Functions
function goToSlide(index) {
  if (index < 1 || index > totalSlidesCount) return;

  const targetCard = document.getElementById(`slide-card-${index}`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    renderPdfPage(index);
    updateActiveSlideState(index);
  }
}

function goToPrevSlide() {
  if (currentSlideIndex > 1) goToSlide(currentSlideIndex - 1);
}

function goToNextSlide() {
  if (currentSlideIndex < totalSlidesCount) goToSlide(currentSlideIndex + 1);
}

function handlePageJump(val) {
  const pageNum = parseInt(val, 10);
  if (!isNaN(pageNum)) goToSlide(pageNum);
}

function adjustZoom(delta) {
  currentScale = Math.max(0.8, Math.min(2.5, currentScale + delta));
  document.getElementById('zoom-level-text').textContent = `${Math.round((currentScale / 1.35) * 100)}%`;
  renderedPages.clear();
  
  // Re-render visible page
  renderPdfPage(currentSlideIndex);
}

function resetZoom() {
  currentScale = 1.35;
  document.getElementById('zoom-level-text').textContent = `100%`;
  renderedPages.clear();
  renderPdfPage(currentSlideIndex);
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar-container');
  const btn = document.getElementById('sidebar-toggle-btn');
  sidebar.classList.toggle('collapsed');
  btn.textContent = sidebar.classList.contains('collapsed') ? '▶' : '◀';
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function setupEventListeners() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') goToNextSlide();
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') goToPrevSlide();
  });
}

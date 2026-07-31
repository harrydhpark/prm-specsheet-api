window.PreviewModule = {
  activeTab: 'slide',
  currentSlideIdx: 0,

  render(siteData) {
    const container = document.getElementById('preview-render-box');
    if (!container || !siteData) return;

    if (this.activeTab === 'slide') {
      this.renderSlideView(container, siteData);
    } else {
      this.renderVideoView(container, siteData);
    }
  },

  setTab(tab, siteData) {
    this.activeTab = tab;
    document.getElementById('prev-btn-slide').classList.toggle('active', tab === 'slide');
    document.getElementById('prev-btn-video').classList.toggle('active', tab === 'video');
    this.render(siteData);
  },

  renderSlideView(container, siteData) {
    let tocHtml = '';
    siteData.sections.forEach(sec => {
      tocHtml += `
        <div class="toc-section">
          <div class="toc-section-title">${sec.title}</div>
      `;
      sec.slides.forEach(sId => {
        const sIdx = siteData.slides.findIndex(s => s.id === sId);
        if (sIdx !== -1) {
          const sObj = siteData.slides[sIdx];
          const isActive = sIdx === this.currentSlideIdx;
          tocHtml += `
            <div class="toc-slide-item ${isActive ? 'active' : ''}" onclick="PreviewModule.jumpToSlide(${sIdx})">
              📄 ${sObj.title}
            </div>
          `;
        }
      });
      tocHtml += `</div>`;
    });

    const slide = siteData.slides[this.currentSlideIdx] || siteData.slides[0];
    let cardBody = '';

    if (!slide) {
      cardBody = `<div style="padding:40px; color:#fff;">등록된 슬라이드가 없습니다.</div>`;
    } else if (slide.type === 'hero' || !slide.type) {
      cardBody = `
        <span class="slide-badge">${slide.badge || slide.sectionTitle || 'SLIDE'}</span>
        <h2 class="slide-title">${slide.title}</h2>
        <ul class="slide-content-bullets">
          ${(slide.content || []).map(b => `<li>${b}</li>`).join('')}
        </ul>
        ${slide.metrics ? `
          <div class="metric-grid">
            ${slide.metrics.map(m => `
              <div class="metric-card">
                <div class="metric-label">${m.label}</div>
                <div class="metric-val">${m.value}</div>
                <div class="metric-change">${m.change || ''}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      `;
    } else if (slide.type === 'cards') {
      cardBody = `
        <span class="slide-badge">${slide.badge || 'CARDS'}</span>
        <h2 class="slide-title">${slide.title}</h2>
        <div class="card-grid">
          ${(slide.cards || []).map(c => `
            <div class="sub-bento-card">
              <div class="sub-bento-title">${c.title}</div>
              <div class="sub-bento-desc">${c.desc}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.type === 'features') {
      cardBody = `
        <span class="slide-badge">${slide.badge || 'FEATURES'}</span>
        <h2 class="slide-title">${slide.title}</h2>
        <ul class="slide-content-bullets">
          ${(slide.content || []).map(b => `<li>${b}</li>`).join('')}
        </ul>
        ${slide.highlights ? `
          <div class="metric-grid">
            ${slide.highlights.map(h => `
              <div class="metric-card">
                <div class="metric-label">Key Highlight</div>
                <div class="metric-val" style="font-size:16px;">${h}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      `;
    } else if (slide.type === 'grid' && slide.table) {
      cardBody = `
        <span class="slide-badge">${slide.badge || 'MATRIX'}</span>
        <h2 class="slide-title">${slide.title}</h2>
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:13px; color:#E2E8F0;">
            <thead>
              <tr style="background:rgba(255,255,255,0.08); text-align:left;">
                ${slide.table.headers.map(h => `<th style="padding:10px; border-bottom:1px solid rgba(255,255,255,0.15);">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${slide.table.rows.map(row => `
                <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                  ${row.map(cell => `<td style="padding:10px;">${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    container.innerHTML = `
      <div style="display:flex; width:100%; height:100%;">
        <!-- Preview Sidebar -->
        <aside class="pub-sidebar" style="width:240px; background:#090D16; border-right:1px solid rgba(255,255,255,0.08); overflow-y:auto;">
          <div class="toc-header">Smart TOC (목차)</div>
          ${tocHtml}
        </aside>

        <!-- Preview Main Slide -->
        <main class="pub-canvas" style="flex:1; padding:24px; display:flex; flex-direction:column; overflow-y:auto;">
          <div class="slide-card-wrapper" style="min-height:420px; padding:32px;">
            ${cardBody}
          </div>
          <div class="canvas-controls">
            <button class="nav-btn" onclick="PreviewModule.prevSlide()">◀ 이전</button>
            <div class="slide-counter">${this.currentSlideIdx + 1} / ${siteData.slides.length}</div>
            <button class="notes-btn" onclick="PreviewModule.showNotes()">📝 발표자 노트</button>
            <button class="nav-btn" onclick="PreviewModule.nextSlide()">다음 ▶</button>
          </div>
        </main>
      </div>
    `;
  },

  renderVideoView(container, siteData) {
    let videoCardsHtml = '';
    siteData.videos.forEach(v => {
      videoCardsHtml += `
        <div class="video-card">
          <div class="video-thumb-box">
            <img class="video-thumb-img" src="${v.poster}" alt="${v.title}" />
            <div class="play-overlay">▶</div>
            <div class="duration-badge">${v.duration}</div>
          </div>
          <div class="video-info-box">
            <div class="video-cat">${v.category}</div>
            <div class="video-card-title">${v.title}</div>
            <div class="video-card-desc">${v.desc}</div>
          </div>
        </div>
      `;
    });

    container.innerHTML = `
      <div style="width:100%; height:100%; padding:24px; overflow-y:auto; background:#080C14;">
        <div style="margin-bottom:20px;">
          <h3 style="font-size:18px; color:#fff;">🎬 동영상 라이브러리 (Video Gallery)</h3>
          <p style="font-size:12px; color:#94A3B8;">${siteData.videos.length}개의 고화질 제품 및 기술 MP4 동영상</p>
        </div>
        <div class="video-grid">
          ${videoCardsHtml}
        </div>
      </div>
    `;
  },

  jumpToSlide(idx) {
    this.currentSlideIdx = idx;
    this.render(window.currentSiteData);
  },

  prevSlide() {
    if (this.currentSlideIdx > 0) {
      this.currentSlideIdx--;
      this.render(window.currentSiteData);
    }
  },

  nextSlide() {
    if (window.currentSiteData && this.currentSlideIdx < window.currentSiteData.slides.length - 1) {
      this.currentSlideIdx++;
      this.render(window.currentSiteData);
    }
  },

  showNotes() {
    if (!window.currentSiteData) return;
    const slide = window.currentSiteData.slides[this.currentSlideIdx];
    alert(`[발표자 노트 (Speaker Notes)]\n\n${slide.notes || '슬라이드 노트가 없습니다.'}`);
  }
};

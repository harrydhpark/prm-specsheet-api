window.EditorModule = {
  renderTocEditor(siteData, onDataChanged) {
    const container = document.getElementById('toc-editor-list');
    if (!container) return;
    container.innerHTML = '';

    siteData.sections.forEach((sec, sIdx) => {
      const card = document.createElement('div');
      card.className = 'toc-edit-card';

      card.innerHTML = `
        <div class="toc-edit-header">
          <strong style="color:#2DD4BF; font-size:13px;">섹션 ${sIdx + 1}</strong>
          <button class="btn btn-outline" style="padding:2px 8px; font-size:11px;" onclick="EditorModule.deleteSection(${sIdx})">삭제 ✕</button>
        </div>
        <div class="form-group" style="margin-bottom:8px;">
          <input type="text" class="form-control" value="${sec.title}" oninput="EditorModule.updateSecTitle(${sIdx}, this.value)">
        </div>
        <div style="font-size:11px; color:#94A3B8; margin-top:4px;">
          포함된 슬라이드 (${sec.slides.length}개): ${sec.slides.join(', ')}
        </div>
      `;

      container.appendChild(card);
    });

    this.onDataChanged = onDataChanged;
  },

  updateSecTitle(sIdx, val) {
    if (!window.currentSiteData) return;
    window.currentSiteData.sections[sIdx].title = val;
    if (this.onDataChanged) this.onDataChanged();
  },

  deleteSection(sIdx) {
    if (!window.currentSiteData) return;
    window.currentSiteData.sections.splice(sIdx, 1);
    this.renderTocEditor(window.currentSiteData, this.onDataChanged);
    if (this.onDataChanged) this.onDataChanged();
  },

  populateSlideSelector(siteData) {
    const select = document.getElementById('slide-selector');
    if (!select) return;
    select.innerHTML = '';

    siteData.slides.forEach((s, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.innerText = `[Slide ${idx + 1}] ${s.title}`;
      select.appendChild(opt);
    });

    this.loadSlideToEditor(0);
  },

  loadSlideToEditor(idx = 0) {
    const select = document.getElementById('slide-selector');
    const sIdx = idx !== undefined ? idx : parseInt(select.value || 0);

    const slide = window.currentSiteData.slides[sIdx];
    if (!slide) return;

    document.getElementById('edit-slide-title').value = slide.title || '';
    document.getElementById('edit-slide-badge').value = slide.badge || slide.sectionTitle || '';
    document.getElementById('edit-slide-bullets').value = (slide.content || []).join('\n');
    document.getElementById('edit-slide-notes').value = slide.notes || '';
  },

  saveSlideEdit() {
    const select = document.getElementById('slide-selector');
    const sIdx = parseInt(select.value || 0);
    const slide = window.currentSiteData.slides[sIdx];
    if (!slide) return;

    slide.title = document.getElementById('edit-slide-title').value;
    slide.badge = document.getElementById('edit-slide-badge').value;
    const bulletsRaw = document.getElementById('edit-slide-bullets').value;
    slide.content = bulletsRaw.split('\n').filter(line => line.trim() !== '');
    slide.notes = document.getElementById('edit-slide-notes').value;

    if (this.onDataChanged) this.onDataChanged();
  },

  populateVideoSelector(siteData) {
    const select = document.getElementById('video-selector');
    if (!select) return;
    select.innerHTML = '';

    siteData.videos.forEach((v, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.innerText = `[Video ${idx + 1}] ${v.title}`;
      select.appendChild(opt);
    });

    this.loadVideoToEditor(0);
  },

  loadVideoToEditor(idx = 0) {
    const select = document.getElementById('video-selector');
    const vIdx = idx !== undefined ? idx : parseInt(select.value || 0);

    const video = window.currentSiteData.videos[vIdx];
    if (!video) return;

    document.getElementById('edit-video-title').value = video.title || '';
    document.getElementById('edit-video-category').value = video.category || 'Uploaded Media';
    document.getElementById('edit-video-desc').value = video.desc || '';
  },

  saveVideoEdit() {
    const select = document.getElementById('video-selector');
    const vIdx = parseInt(select.value || 0);
    const video = window.currentSiteData.videos[vIdx];
    if (!video) return;

    video.title = document.getElementById('edit-video-title').value;
    video.category = document.getElementById('edit-video-category').value;
    video.desc = document.getElementById('edit-video-desc').value;

    if (this.onDataChanged) this.onDataChanged();
  }
};

window.currentSiteData = null;
window.selectedPptFile = null;
window.selectedVideoFiles = [];

document.addEventListener('DOMContentLoaded', async () => {
  // Auto load sample data on initial launch
  await loadSampleData();
});

async function loadSampleData() {
  try {
    updateStep(2);
    const data = await ParserModule.fetchSampleData();
    window.currentSiteData = data;
    onDataLoaded();
  } catch (err) {
    alert("샘플 데이터 로딩 실패: " + err.message);
  }
}

async function loadPdfProfileData() {
  try {
    updateStep(2);
    const res = await fetch('/api/load-profile-pdf');
    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    window.currentSiteData = json.data;
    onDataLoaded();
    alert("2026 TV Product Profile_v1.6_260529 배포 PDF 파일 파싱 및 Smart TOC 계층 구성 완료!");
  } catch (err) {
    alert("PDF 파싱 오류: " + err.message);
  }
}

function updateStep(stepNum) {
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById(`step-${i}-indicator`);
    if (el) el.classList.toggle('active', i <= stepNum);
  }
}

function onDataLoaded() {
  const data = window.currentSiteData;
  if (!data) return;

  // Update Summary bar
  document.getElementById('summary-sec-count').innerText = data.sections.length;
  document.getElementById('summary-slide-count').innerText = data.slides.length;
  document.getElementById('summary-video-count').innerText = data.videos.length;

  // Populate Editors
  EditorModule.renderTocEditor(data, () => onDataUpdated());
  EditorModule.populateSlideSelector(data);
  EditorModule.populateVideoSelector(data);

  // Render Preview
  PreviewModule.render(data);
  updateStep(3);
}

function onDataUpdated() {
  const data = window.currentSiteData;
  if (!data) return;
  document.getElementById('summary-sec-count').innerText = data.sections.length;
  document.getElementById('summary-slide-count').innerText = data.slides.length;
  document.getElementById('summary-video-count').innerText = data.videos.length;
  PreviewModule.render(data);
}

function switchEditorTab(tab) {
  const tabs = ['ingest', 'toc', 'slides', 'videos'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const pane = document.getElementById(`pane-${t}`);
    if (btn) btn.classList.toggle('active', t === tab);
    if (pane) pane.classList.toggle('active', t === tab);
  });
}

function switchPreviewTab(tab) {
  PreviewModule.setTab(tab, window.currentSiteData);
}

function triggerFileSelect(type) {
  if (type === 'ppt') {
    document.getElementById('ppt-file-input').click();
  } else {
    document.getElementById('video-files-input').click();
  }
}

document.getElementById('ppt-drop-zone').onclick = () => triggerFileSelect('ppt');
document.getElementById('video-drop-zone').onclick = () => triggerFileSelect('video');

function updateFileLabel(type) {
  if (type === 'ppt') {
    const input = document.getElementById('ppt-file-input');
    if (input.files && input.files[0]) {
      window.selectedPptFile = input.files[0];
      document.getElementById('ppt-file-name').innerText = `📄 ${input.files[0].name} (${(input.files[0].size / 1024 / 1024).toFixed(1)} MB)`;
    }
  } else {
    const input = document.getElementById('video-files-input');
    if (input.files && input.files.length > 0) {
      window.selectedVideoFiles = Array.from(input.files);
      document.getElementById('video-file-names').innerText = `🎬 ${input.files.length}개 동영상 선택됨`;
    }
  }
}

async function handleUploadSubmit(e) {
  e.preventDefault();
  if (!window.selectedPptFile && (!window.selectedVideoFiles || window.selectedVideoFiles.length === 0)) {
    alert("업로드할 PPTX 파일 또는 MP4 동영상 파일을 선택하세요.");
    return;
  }

  try {
    updateStep(2);
    const parsedData = await ParserModule.uploadAndParseFiles(window.selectedPptFile, window.selectedVideoFiles);
    window.currentSiteData = parsedData;
    onDataLoaded();
    switchEditorTab('toc');
    alert("파일 파싱 및 Smart TOC 자동 구성이 완료되었습니다!");
  } catch (err) {
    alert("파일 업로드 파싱 오류: " + err.message);
  }
}

function addTocSection() {
  if (!window.currentSiteData) return;
  const newSecNum = window.currentSiteData.sections.length + 1;
  const newSec = {
    id: `sec-${newSecNum}`,
    title: `${newSecNum}. New Custom Section`,
    subTitle: "Custom Section Overview",
    slides: []
  };
  window.currentSiteData.sections.push(newSec);
  EditorModule.renderTocEditor(window.currentSiteData, () => onDataUpdated());
  onDataUpdated();
}

function loadSlideToEditor() {
  EditorModule.loadSlideToEditor();
}

function saveSlideEdit() {
  EditorModule.saveSlideEdit();
}

function loadVideoToEditor() {
  EditorModule.loadVideoToEditor();
}

function saveVideoEdit() {
  EditorModule.saveVideoEdit();
}

async function publishSite() {
  if (!window.currentSiteData) {
    alert("배포할 사이트 데이터가 없습니다.");
    return;
  }

  try {
    updateStep(4);
    const res = await fetch('/api/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(window.currentSiteData)
    });
    const json = await res.json();

    if (!json.success) throw new Error(json.message);

    document.getElementById('published-url-input').value = json.url;
    document.getElementById('published-url-link').href = json.url;
    document.getElementById('publish-modal').classList.add('active');
  } catch (err) {
    alert("사이트 배포 실패: " + err.message);
  }
}

function closePublishModal() {
  document.getElementById('publish-modal').classList.remove('active');
}

function copyPublishedUrl() {
  const input = document.getElementById('published-url-input');
  input.select();
  document.execCommand('copy');
  alert("사내 인트라넷 URL이 클립보드에 복사되었습니다:\n" + input.value);
}

async function openSitesHistoryModal() {
  try {
    const res = await fetch('/api/sites');
    const json = await res.json();
    const container = document.getElementById('sites-list-container');
    container.innerHTML = '';

    if (!json.sites || json.sites.length === 0) {
      container.innerHTML = `<p style="color:#94A3B8; font-size:13px;">배포된 사이트가 아직 없습니다.</p>`;
    } else {
      json.sites.forEach(s => {
        const item = document.createElement('div');
        item.className = 'site-history-item';
        item.innerHTML = `
          <div class="site-history-info">
            <h4>${s.siteId}</h4>
            <p>배포일시: ${new Date(s.createdAt).toLocaleString()}</p>
          </div>
          <a href="${s.url}" target="_blank" class="btn btn-secondary" style="font-size:11px;">새 창 열기 🚀</a>
        `;
        container.appendChild(item);
      });
    }

    document.getElementById('sites-modal').classList.add('active');
  } catch (err) {
    alert("배포 이력 조회 오류: " + err.message);
  }
}

function closeSitesHistoryModal() {
  document.getElementById('sites-modal').classList.remove('active');
}

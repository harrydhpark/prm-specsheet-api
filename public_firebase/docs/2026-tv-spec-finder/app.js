/**
 * 2026 LG TV Spec Finder & AI Assistant Client App
 * Features:
 * 1. Category Multi-Select Filtering
 * 2. Fixed 4-Column Aligned Tables (CATEGORY, SPEC ITEMS, SPEC VALUE, SPEC DESCRIPTION)
 * 3. KOR / ENG Language Switcher (SPEC DESCRIPTION KOR vs ENG)
 * 4. Deduplicated Sidebar Product List without Checkboxes
 */

let activeModel = null;
let currentLang = 'KOR'; // 'KOR' | 'ENG'
let selectedCategories = new Set();
let chatbotEngine = null;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof SPEC_PORTAL_DATA !== 'undefined') {
    activeModel = SPEC_PORTAL_DATA.models[0];
    
    // Select all categories by default
    SPEC_PORTAL_DATA.categories.forEach(cat => selectedCategories.add(cat));

    if (typeof SpecChatbotEngine !== 'undefined') {
      chatbotEngine = new SpecChatbotEngine(SPEC_PORTAL_DATA);
    }

    render3TierSidebar();
    renderCategoryFilterChips();
    renderMainSpecViewer();
  }
});

// Language Switcher Function
function setLanguage(lang) {
  currentLang = lang;

  document.getElementById('lang-btn-kor').classList.toggle('active', lang === 'KOR');
  document.getElementById('lang-btn-eng').classList.toggle('active', lang === 'ENG');

  renderMainSpecViewer();
}

// Render 3-Tier Sidebar Product Tree without Checkboxes & Deduplicated Model Names
function render3TierSidebar() {
  const container = document.getElementById('sidebar-tree');
  if (!container || !SPEC_PORTAL_DATA) return;

  const displayTypes = SPEC_PORTAL_DATA.displayTypes;
  let html = '';

  displayTypes.forEach((dtype, idx) => {
    const typeModels = SPEC_PORTAL_DATA.models.filter(m => m.displayType === dtype);
    
    // Group models by series
    const seriesMap = {};
    typeModels.forEach(m => {
      if (!seriesMap[m.series]) seriesMap[m.series] = [];
      seriesMap[m.series].push(m);
    });

    html += `
      <div class="type-group">
        <div class="type-header" onclick="toggleSidebarAccordion('type-body-${idx}')">
          <span>📺 ${dtype} (${typeModels.length})</span>
          <span style="font-size:10px;">▼</span>
        </div>
        <div id="type-body-${idx}" style="padding-left:8px; margin-top:4px;">
          ${Object.keys(seriesMap).map((seriesName, sIdx) => `
            <div style="margin-bottom:6px;">
              <div class="series-header" onclick="toggleSidebarAccordion('series-body-${idx}-${sIdx}')">
                <span>▶ ${seriesName}</span>
                <span style="font-family:var(--font-mono); font-size:10px; color:var(--text-muted);">${seriesMap[seriesName].length}개 모델</span>
              </div>
              <div id="series-body-${idx}-${sIdx}" style="padding-left:12px; margin-top:2px;">
                ${seriesMap[seriesName].map(m => `
                  <div class="model-item ${m.code === activeModel.code ? 'active' : ''}" onclick="selectModel('${m.code}')">
                    <span>${m.code}</span>
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

function toggleSidebarAccordion(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function selectModel(mCode) {
  const found = SPEC_PORTAL_DATA.models.find(m => m.code === mCode);
  if (found) {
    activeModel = found;
    render3TierSidebar();
    renderMainSpecViewer();
  }
}

// Render Category Multi-Select Filter Bar Chips
function renderCategoryFilterChips() {
  const container = document.getElementById('cat-chips-grid');
  if (!container || !SPEC_PORTAL_DATA) return;

  const html = SPEC_PORTAL_DATA.categories.map(catName => `
    <button class="cat-chip ${selectedCategories.has(catName) ? 'active' : ''}" onclick="toggleCategoryFilter('${catName}')">
      <span>${selectedCategories.has(catName) ? '✓' : '+'}</span>
      <span>${catName}</span>
    </button>
  `).join('');

  container.innerHTML = html;
}

function toggleCategoryFilter(catName) {
  if (selectedCategories.has(catName)) {
    if (selectedCategories.size === 1) {
      alert('최소 1개 이상의 카테고리를 선택해야 합니다.');
      return;
    }
    selectedCategories.delete(catName);
  } else {
    selectedCategories.add(catName);
  }
  renderCategoryFilterChips();
  renderMainSpecViewer();
}

function selectAllCategories() {
  SPEC_PORTAL_DATA.categories.forEach(cat => selectedCategories.add(cat));
  renderCategoryFilterChips();
  renderMainSpecViewer();
}

function deselectAllCategories() {
  selectedCategories.clear();
  selectedCategories.add(SPEC_PORTAL_DATA.categories[0]); // keep 1st category
  renderCategoryFilterChips();
  renderMainSpecViewer();
}

// Render Main Spec Workspace (Fixed 4-Column Aligned Table Layout)
function renderMainSpecViewer() {
  if (!activeModel) return;

  document.getElementById('active-model-title').textContent = activeModel.code;
  document.getElementById('active-model-type').textContent = activeModel.displayType;

  const catContainer = document.getElementById('spec-categories-list');
  let html = '';

  const activeCategories = SPEC_PORTAL_DATA.categories.filter(cat => selectedCategories.has(cat));

  activeCategories.forEach((catName, cIdx) => {
    const catSpecs = SPEC_PORTAL_DATA.specDefinitions.filter(s => s.category === catName);

    html += `
      <div class="spec-cat-panel">
        <div class="spec-cat-header" onclick="toggleCatTable('cat-tbl-${cIdx}')">
          <span>⚙️ ${catName} (${catSpecs.length}개 스펙 항목)</span>
          <span>▼</span>
        </div>
        <div id="cat-tbl-${cIdx}">
          <table class="spec-table-fixed">
            <colgroup>
              <col class="col-cat">
              <col class="col-item">
              <col class="col-val">
              <col class="col-desc">
            </colgroup>
            <thead>
              <tr>
                <th>CATEGORY</th>
                <th>SPEC ITEMS</th>
                <th>SPEC VALUE</th>
                <th>SPEC DESCRIPTION (${currentLang === 'ENG' ? 'ENG' : 'KOR'})</th>
              </tr>
            </thead>
            <tbody>
              ${catSpecs.map(specDef => {
                const specValue = activeModel.specs[specDef.id] ? activeModel.specs[specDef.id].val : '-';
                const descText = currentLang === 'ENG' ? (specDef.descEn || specDef.descKo) : specDef.descKo;

                return `
                  <tr>
                    <td class="col-cat-td">${specDef.category}</td>
                    <td class="col-item-td">${specDef.feature}</td>
                    <td class="col-val-td">${specValue}</td>
                    <td class="col-desc-td">${descText}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  catContainer.innerHTML = html;
}

function toggleCatTable(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// Chatbot Panel Interactions
function toggleChatbotPanel() {
  const panel = document.getElementById('chatbot-panel');
  panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const query = input.value.trim();
  if (!query) return;

  appendUserMsg(query);
  input.value = '';

  setTimeout(() => {
    if (chatbotEngine) {
      const responseHtml = chatbotEngine.processUserQuery(query);
      appendBotMsg(responseHtml);
    }
  }, 400);
}

function sendQuickPrompt(promptText) {
  appendUserMsg(promptText);
  setTimeout(() => {
    if (chatbotEngine) {
      const responseHtml = chatbotEngine.processUserQuery(promptText);
      appendBotMsg(responseHtml);
    }
  }, 300);
}

function appendUserMsg(msg) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.textContent = msg;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendBotMsg(htmlContent) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = htmlContent;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function filterModels(q) {
  const searchVal = q.trim().toLowerCase();
  document.querySelectorAll('.model-item').forEach(el => {
    const text = el.textContent.toLowerCase();
    el.style.display = text.includes(searchVal) ? 'flex' : 'none';
  });
}

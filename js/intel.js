// 市場情報頁面
(function () {
  const container = document.getElementById('intel-app');
  let activeTag = 'all';
  let expandedId = window.location.hash ? window.location.hash.slice(1) : null;

  // ── 收集所有 tags ──
  const allTags = ['全部'];
  INTEL_DATA.forEach(d => d.tags.forEach(t => { if (!allTags.includes(t)) allTags.push(t); }));

  // ── Filter bar ──
  const filterBar = document.createElement('div');
  filterBar.className = 'intel-filter-bar';
  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'intel-tag-btn' + (tag === '全部' ? ' active' : '');
    btn.textContent = tag;
    btn.addEventListener('click', () => {
      activeTag = tag === '全部' ? 'all' : tag;
      document.querySelectorAll('.intel-tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards();
    });
    filterBar.appendChild(btn);
  });
  container.appendChild(filterBar);

  // ── Cards container ──
  const cardsWrap = document.createElement('div');
  cardsWrap.id = 'intel-cards';
  container.appendChild(cardsWrap);

  function renderCards() {
    cardsWrap.innerHTML = '';
    const filtered = activeTag === 'all'
      ? INTEL_DATA
      : INTEL_DATA.filter(d => d.tags.includes(activeTag));

    if (!filtered.length) {
      cardsWrap.innerHTML = '<div class="intel-empty">沒有符合的情報</div>';
      return;
    }

    filtered.forEach(entry => {
      const isOpen = expandedId === entry.id;
      const card = document.createElement('div');
      card.className = 'intel-card' + (isOpen ? ' open' : '');
      card.dataset.id = entry.id;
      card.id = entry.id;

      const dateParts = entry.date.split('-');
      const dateStr = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;

      card.innerHTML = `
        <div class="intel-card-header" data-toggle="${entry.id}">
          <div class="intel-card-meta">
            <span class="intel-date">${dateStr}</span>
            <span class="intel-source">${entry.source}</span>
            <span class="intel-category">${entry.category}</span>
          </div>
          <div class="intel-card-title">${entry.title}</div>
          <div class="intel-card-tags">
            ${entry.tags.map(t => `<span class="intel-tag">${t}</span>`).join('')}
          </div>
          <div class="intel-card-summary">${entry.summary}</div>
          <div class="intel-card-companies">
            ${entry.companies.map(c => `<span class="intel-co-chip">${c}</span>`).join('')}
          </div>
          <button class="intel-toggle-btn">${isOpen ? '▲ 收起' : '▼ 展開完整報告'}</button>
        </div>
        <div class="intel-card-body" style="display:${isOpen ? 'block' : 'none'}">
          ${renderKeyNumbers(entry.keyNumbers)}
          ${entry.sections.map(renderSection).join('')}
        </div>
      `;

      card.querySelector('[data-toggle]').addEventListener('click', () => {
        expandedId = expandedId === entry.id ? null : entry.id;
        renderCards();
      });

      cardsWrap.appendChild(card);
    });
  }

  function renderKeyNumbers(nums) {
    if (!nums?.length) return '';
    return `
      <div class="intel-keynums">
        <div class="intel-section-title">📊 關鍵數字速覽</div>
        <div class="intel-keynums-grid">
          ${nums.map(n => `
            <div class="intel-keynum-card">
              <div class="intel-keynum-val">${n.value}</div>
              <div class="intel-keynum-label">${n.label}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  function renderSection(sec) {
    return `
      <div class="intel-section">
        <div class="intel-section-title">▌ ${sec.title}</div>
        <ul class="intel-bullets">
          ${sec.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>`;
  }

  renderCards();

  // 若有 hash，滾動到對應卡片
  if (expandedId) {
    setTimeout(() => {
      const target = document.getElementById(expandedId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
})();

// Supply chain index page — tree layout
(function () {
  // Cartoon SVG illustrations per layer
  const LAYER_ILLU = {
    0: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56"><polygon points="32,4 56,18 56,46 32,60 8,46 8,18" fill="#e05252" stroke="#111" stroke-width="3" stroke-linejoin="round"/><polygon points="32,14 48,23 48,41 32,50 16,41 16,23" fill="#f08080" stroke="#111" stroke-width="2" stroke-linejoin="round"/><line x1="32" y1="4" x2="32" y2="14" stroke="#111" stroke-width="2"/><line x1="56" y1="18" x2="48" y2="23" stroke="#111" stroke-width="2"/><line x1="8" y1="18" x2="16" y2="23" stroke="#111" stroke-width="2"/><line x1="32" y1="34" x2="32" y2="26" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.7"/><line x1="27" y1="30" x2="37" y2="30" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.7"/></svg>`,
    1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56"><rect x="14" y="14" width="36" height="36" rx="6" fill="#f5b800" stroke="#111" stroke-width="3"/><circle cx="24" cy="28" r="4" fill="#111"/><circle cx="40" cy="28" r="4" fill="#111"/><circle cx="25" cy="27" r="1.5" fill="#fff"/><circle cx="41" cy="27" r="1.5" fill="#fff"/><path d="M22 38 Q32 44 42 38" stroke="#111" stroke-width="2.5" fill="none" stroke-linecap="round"/><line x1="20" y1="14" x2="20" y2="7" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><line x1="32" y1="14" x2="32" y2="7" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><line x1="44" y1="14" x2="44" y2="7" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><line x1="20" y1="50" x2="20" y2="57" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><line x1="32" y1="50" x2="32" y2="57" stroke="#111" stroke-width="2.5" stroke-linecap="round"/><line x1="44" y1="50" x2="44" y2="57" stroke="#111" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56"><rect x="6" y="26" width="52" height="32" rx="4" fill="#1db887" stroke="#111" stroke-width="3"/><polyline points="6,26 32,12 58,26" fill="#25d4a0" stroke="#111" stroke-width="3" stroke-linejoin="round"/><line x1="32" y1="12" x2="32" y2="58" stroke="#111" stroke-width="2.5"/><line x1="6" y1="26" x2="58" y2="26" stroke="#111" stroke-width="2.5"/><rect x="22" y="36" width="20" height="12" rx="3" fill="#0a8060" stroke="#111" stroke-width="2"/><text x="32" y="45" text-anchor="middle" font-size="8" fill="#4dffc0" font-weight="bold">AI</text></svg>`,
    3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56"><rect x="8" y="6" width="48" height="52" rx="4" fill="#f07020" stroke="#111" stroke-width="3"/><rect x="14" y="13" width="36" height="8" rx="2" fill="#c05010" stroke="#111" stroke-width="2"/><rect x="14" y="25" width="36" height="8" rx="2" fill="#c05010" stroke="#111" stroke-width="2"/><rect x="14" y="37" width="36" height="8" rx="2" fill="#c05010" stroke="#111" stroke-width="2"/><circle cx="44" cy="17" r="2.5" fill="#1db887"/><circle cx="44" cy="29" r="2.5" fill="#f5b800"/><circle cx="44" cy="41" r="2.5" fill="#e05252"/><rect x="23" y="49" width="8" height="4" rx="1" fill="#c05010" stroke="#111" stroke-width="1.5"/></svg>`,
    4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56"><rect x="8" y="28" width="48" height="30" rx="3" fill="#9b5cf0" stroke="#111" stroke-width="3"/><ellipse cx="20" cy="26" rx="10" ry="9" fill="#9b5cf0" stroke="#111" stroke-width="3"/><ellipse cx="34" cy="22" rx="13" ry="11" fill="#9b5cf0" stroke="#111" stroke-width="3"/><ellipse cx="48" cy="26" rx="9" ry="8" fill="#9b5cf0" stroke="#111" stroke-width="3"/><rect x="8" y="26" width="48" height="6" fill="#9b5cf0"/><rect x="16" y="34" width="10" height="12" rx="2" fill="#ede0ff" stroke="#111" stroke-width="1.5"/><rect x="38" y="34" width="10" height="12" rx="2" fill="#ede0ff" stroke="#111" stroke-width="1.5"/><rect x="27" y="40" width="10" height="18" rx="2" fill="#ede0ff" stroke="#111" stroke-width="1.5"/></svg>`,
    5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56"><circle cx="32" cy="32" r="26" fill="#ecfdf5" stroke="#059669" stroke-width="3"/><rect x="26" y="16" width="12" height="32" rx="4" fill="#059669"/><rect x="16" y="26" width="32" height="12" rx="4" fill="#059669"/></svg>`,
  };

  const SECTOR_META = {
    ai: {
      title: '全球 AI 算力・光通訊・能源管理 產業鏈全景圖',
      subtitle: '從底層晶圓材料到終端雲端巨頭，完整追蹤產業鏈每個環節的關鍵公司',
      chainDef: () => CHAIN_DEFINITION,
      showBattle: true,
    },
    biotech: {
      title: '台灣生技／細胞治療 產業鏈全景圖',
      subtitle: '聚焦 CAR-T 細胞治療、精準醫療與生技里程碑選擇權型標的',
      chainDef: () => BIOTECH_CHAIN_DEFINITION,
      showBattle: false,
    },
  };

  const container = document.getElementById('chain');
  const battleBanner = document.getElementById('battleBanner');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');

  function renderChain(chainDef) {
    container.innerHTML = '';
    container.className = 'tree-chain';

    chainDef.forEach((layerDef, idx) => {
      if (idx > 0) container.appendChild(makeConnector());

      const layer = getLayer(layerDef.layer);
      if (!layer) return;
      const totalCompanies = layerDef.categories.reduce((n, c) => n + c.entries.length, 0);
      const illu = LAYER_ILLU[layer.id] || '';

      const block = document.createElement('div');
      block.className = `tree-layer-block tl-${layer.id}`;

      const header = document.createElement('div');
      header.className = 'tree-layer-header';
      header.innerHTML = `
        <div class="tree-layer-number">${layer.id}</div>
        <div class="tree-layer-title">【第 ${layer.id} 層：${layer.name}】</div>
        <span class="tree-layer-count">${totalCompanies} 家公司</span>
        <div class="tree-layer-illu">${illu}</div>
      `;
      block.appendChild(header);

      const body = document.createElement('div');
      body.className = 'tree-layer-body';

      layerDef.categories.forEach(catDef => {
        const row = document.createElement('div');
        row.className = 'tree-row';

        const branch = document.createElement('span');
        branch.className = 'tree-branch';
        branch.textContent = ' └─ ';
        row.appendChild(branch);

        const catName = document.createElement('span');
        catName.className = 'tree-cat-name';
        catName.textContent = catDef.name + '：';
        row.appendChild(catName);

        const chips = document.createElement('div');
        chips.className = 'tree-chips';

        catDef.entries.forEach(entry => {
          const co = COMPANIES[entry.id];
          if (!co) return;

          const note = entry.note || co.badge;
          const ticker = formatTicker(co.ticker);
          const isSpanning = entry.spanLayers?.length > 1;
          const chip = document.createElement('a');
          chip.className = 'co-chip' + (isSpanning ? ' co-chip-platform' : '') + (co.platform ? ' co-chip-eco' : '');
          chip.href = `company.html?id=${co.id}`;
          chip.title = co.tagline || co.description || '';

          const spanTag = isSpanning
            ? `<span class="chip-span-badge">橫跨 L${entry.spanLayers[0]}→L${entry.spanLayers[entry.spanLayers.length-1]}</span>`
            : '';
          const ecoTag = co.platform
            ? `<span class="chip-eco-badge">${co.platform}</span>`
            : '';

          chip.innerHTML = `
            <span class="chip-flag">${co.flag}</span>
            <span class="chip-name">${co.name}</span>
            <span class="chip-ticker">${ticker}</span>
            ${note ? `<span class="chip-note">${note}</span>` : ''}
            ${spanTag}${ecoTag}
          `;
          chips.appendChild(chip);
        });

        row.appendChild(chips);
        body.appendChild(row);
      });

      block.appendChild(body);
      container.appendChild(block);
    });
  }

  function switchSector(sector) {
    const meta = SECTOR_META[sector];
    if (!meta) return;

    pageTitle.textContent = meta.title;
    pageSubtitle.textContent = meta.subtitle;
    battleBanner.style.display = meta.showBattle ? '' : 'none';

    renderChain(meta.chainDef());

    document.querySelectorAll('.sector-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sector === sector);
    });
  }

  // Tab click handlers
  document.querySelectorAll('.sector-tab').forEach(btn => {
    btn.addEventListener('click', () => switchSector(btn.dataset.sector));
  });

  // Initial render
  switchSector('ai');

  // Scroll top button
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 300);
  });

  // ── Helpers ──
  function formatTicker(raw) {
    const t = raw.split(' / ')[0].trim();
    if (t.endsWith('.TW') || t.endsWith('.TWO')) return `(${t})`;
    if (t.endsWith('.T') || t.endsWith('.JP')) return `(${t})`;
    if (t.includes('中資') || t.includes('A股')) return '';
    return `($${t})`;
  }

  function makeConnector() {
    const div = document.createElement('div');
    div.className = 'tree-connector';
    div.innerHTML = `
      <div class="tree-connector-lines">
        <span class="tc-bar">│</span>
        <span class="tc-arrow">▼</span>
      </div>
    `;
    return div;
  }
})();

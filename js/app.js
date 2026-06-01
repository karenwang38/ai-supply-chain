// Supply chain index page — tree layout
(function () {
  const container = document.getElementById('chain');
  container.className = 'tree-chain';

  CHAIN_DEFINITION.forEach((layerDef, idx) => {
    if (idx > 0) {
      container.appendChild(makeConnector());
    }

    const layer = getLayer(layerDef.layer);
    const totalCompanies = layerDef.categories.reduce((n, c) => n + c.entries.length, 0);

    // Layer block
    const block = document.createElement('div');
    block.className = `tree-layer-block tl-${layer.id}`;

    // Header: 【第 X 層：Name】
    const header = document.createElement('div');
    header.className = 'tree-layer-header';
    header.innerHTML = `
      <div class="tree-layer-number">${layer.id}</div>
      <div class="tree-layer-title">【第 ${layer.id} 層：${layer.name}】</div>
      <span class="tree-layer-count">${totalCompanies} 家公司</span>
    `;
    block.appendChild(header);

    // Body: category rows
    const body = document.createElement('div');
    body.className = 'tree-layer-body';

    layerDef.categories.forEach(catDef => {
      const row = document.createElement('div');
      row.className = 'tree-row';

      // └─ prefix
      const branch = document.createElement('span');
      branch.className = 'tree-branch';
      branch.textContent = ' └─ ';
      row.appendChild(branch);

      // Category name with colon
      const catName = document.createElement('span');
      catName.className = 'tree-cat-name';
      catName.textContent = catDef.name + '：';
      row.appendChild(catName);

      // Chips
      const chips = document.createElement('div');
      chips.className = 'tree-chips';

      catDef.entries.forEach(entry => {
        const co = COMPANIES[entry.id];
        if (!co) return;

        const note = entry.note || co.badge;
        const ticker = formatTicker(co.ticker);
        const chip = document.createElement('a');
        chip.className = 'co-chip';
        chip.href = `company.html?id=${co.id}`;
        chip.title = co.tagline || co.description || '';
        chip.innerHTML = `
          <span class="chip-flag">${co.flag}</span>
          <span class="chip-name">${co.name}</span>
          <span class="chip-ticker">${ticker}</span>
          ${note ? `<span class="chip-note">${note}</span>` : ''}
        `;
        chips.appendChild(chip);
      });

      row.appendChild(chips);
      body.appendChild(row);
    });

    block.appendChild(body);
    container.appendChild(block);
  });

  // Scroll top button
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 300);
  });

  // ── Helpers ──
  function formatTicker(raw) {
    // Take the primary ticker (before " / ")
    const t = raw.split(' / ')[0].trim();
    if (t.endsWith('.TW')) return `(${t})`;
    if (t.endsWith('.TW)')) return `(${t}`;
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

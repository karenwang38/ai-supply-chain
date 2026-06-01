// Company detail page
(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const app = document.getElementById('app');

  if (!id || !COMPANIES[id]) {
    app.innerHTML = `
      <div class="not-found">
        <h2>找不到公司資料</h2>
        <p>請回到<a href="index.html" style="color:var(--accent)">產業鏈總覽</a>頁面選擇公司</p>
      </div>`;
    return;
  }

  const co = COMPANIES[id];
  const layer = getLayer(co.layer);

  document.title = `${co.name} (${co.ticker}) — AI 產業鏈分析`;

  const layerColor = `var(--l${co.layer})`;
  const layerBg    = `var(--l${co.layer}-bg)`;

  // ── Hero ──
  const hero = document.createElement('div');
  hero.className = 'company-hero';
  hero.innerHTML = `
    <div class="company-hero-top">
      <button class="back-btn" onclick="history.back()">← 返回</button>
    </div>
    <div class="company-big-flag">${co.flag}</div>
    <div class="company-big-name">${co.name}</div>
    <div class="company-ticker-row">
      <span class="company-ticker-tag">${co.ticker}</span>
      <span class="company-layer-tag" style="background:${layerBg};color:${layerColor}">
        第 ${co.layer} 層：${layer.name}
      </span>
      <span class="company-category-tag">${co.category}</span>
    </div>
    <div class="company-tagline">${co.tagline}</div>
  `;
  app.appendChild(hero);

  // ── Breadcrumb ──
  const bc = document.createElement('div');
  bc.className = 'breadcrumb';
  bc.innerHTML = `
    <a href="index.html">產業鏈總覽</a>
    <span>›</span>
    <span>第 ${co.layer} 層：${layer.name}</span>
    <span>›</span>
    <span>${co.category}</span>
    <span>›</span>
    <span style="color:var(--text)">${co.name}</span>
  `;
  app.appendChild(bc);

  // ── Tabs ──
  const TABS = [
    { id: 'overview',  label: '📋 概覽' },
    { id: 'stock',     label: '📈 股票分析' },
    { id: 'tech',      label: '⚙️ 技術與產品' },
    { id: 'market',    label: '📊 市場占比' },
    { id: 'customers', label: '🤝 客戶分析' },
    { id: 'outlook',   label: '🔭 展望與挑戰' },
    { id: 'risks',     label: '⚠️ 風險評估' },
  ];

  const tabsBar = document.createElement('div');
  tabsBar.className = 'tabs-bar';
  TABS.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = t.label;
    btn.dataset.tab = t.id;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + t.id).classList.add('active');
    });
    tabsBar.appendChild(btn);
  });
  app.appendChild(tabsBar);

  // ── 1. Overview ──
  const tabOverview = makeTab('overview', true);
  tabOverview.appendChild(block('公司概覽', `<p>${co.overview}</p>`));
  tabOverview.appendChild(block('產業鏈定位', `
    <p>所在層級：<strong>第 ${co.layer} 層 — ${layer.name}</strong></p>
    <p style="margin-top:8px;color:var(--text-muted);font-size:13px">${layer.desc}</p>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:14px">
      ${LAYERS.map(l =>
        `<span style="font-size:12px;padding:4px 10px;border-radius:6px;background:${l.id===co.layer?`var(--l${l.id})`:'var(--bg3)'};color:${l.id===co.layer?'white':'var(--text-dim)'}">
          L${l.id} ${l.name.split('—')[0].trim()}
        </span>`
      ).join('')}
    </div>
  `));
  app.appendChild(tabOverview);

  // ── 2. Stock ──
  const tabStock = makeTab('stock');
  tabStock.appendChild(block('關鍵財務指標', renderStockMetrics(co.stockMetrics, co.ticker)));
  tabStock.appendChild(block('個人分析筆記', renderNotesEditor(co.id, co.notes)));
  app.appendChild(tabStock);

  // ── 3. Tech ──
  const tabTech = makeTab('tech');
  if (co.technology) {
    tabTech.appendChild(block('核心技術', `<p>${co.technology.core}</p>`));
    if (co.technology.products?.length)
      tabTech.appendChild(block('主要產品', bulletList(co.technology.products)));
    if (co.technology.advantages?.length)
      tabTech.appendChild(block('競爭優勢', bulletList(co.technology.advantages)));
  }
  app.appendChild(tabTech);

  // ── 4. Market Share ──
  const tabMarket = makeTab('market');
  if (co.marketShare) {
    const pct = parseFloat(co.marketShare.global);
    const barW = isNaN(pct) ? 0 : Math.min(pct, 100);
    tabMarket.appendChild(block('全球市場占比', `
      ${barW > 0 ? `
        <div class="market-share-bar">
          <div class="label"><span>${co.name}</span><span>${co.marketShare.global}</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${barW}%"></div></div>
        </div>
      ` : `<p style="font-size:20px;font-weight:700;color:var(--accent);margin-bottom:8px">${co.marketShare.global}</p>`}
      <p style="margin-top:12px;font-size:14px">${co.marketShare.desc}</p>
    `));
  }
  app.appendChild(tabMarket);

  // ── 5. Customers ──
  const tabCustomers = makeTab('customers');

  // 5a. Customer breakdown (pie chart or bullet list)
  if (co.customers?.major?.length) {
    const isRich = typeof co.customers.major[0] === 'object';
    if (isRich) {
      tabCustomers.appendChild(block('客戶收入佔比', renderPieChart(co.customers.major)));
    } else {
      tabCustomers.appendChild(block('主要客戶', bulletList(co.customers.major)));
    }
  }

  // 5b. Breakdown text
  if (co.customers?.breakdown)
    tabCustomers.appendChild(block('客戶結構分析', `<p>${co.customers.breakdown}</p>`));

  // 5c. Competitor analysis (table or tag list)
  if (co.marketShare?.competitors?.length) {
    const isRich = typeof co.marketShare.competitors[0] === 'object';
    if (isRich) {
      tabCustomers.appendChild(block('競爭對手分析', renderCompTable(co.marketShare.competitors)));
    } else {
      tabCustomers.appendChild(block('競爭對手', `
        <div class="tag-list">${co.marketShare.competitors.map(c=>`<span class="tag-item">${c}</span>`).join('')}</div>
      `));
    }
  }

  app.appendChild(tabCustomers);

  // ── 6. Outlook ──
  const tabOutlook = makeTab('outlook');
  if (co.outlook) {
    if (co.outlook.positive?.length)
      tabOutlook.appendChild(block('正面展望', bulletList(co.outlook.positive)));
    if (co.outlook.catalysts?.length)
      tabOutlook.appendChild(block('關鍵催化劑 / 觀察指標', bulletList(co.outlook.catalysts)));
  }
  if (co.challenges?.length)
    tabOutlook.appendChild(block('挑戰', bulletList(co.challenges)));
  app.appendChild(tabOutlook);

  // ── 7. Risks ──
  const tabRisks = makeTab('risks');
  if (co.risks?.length) {
    const levels = ['high', 'high', 'medium', 'medium', 'low'];
    tabRisks.appendChild(block('風險因素',
      co.risks.map((r, i) => `<div class="risk-item ${levels[i] || 'low'}">${r}</div>`).join('')
    ));
  }
  tabRisks.appendChild(block('風險等級說明', `
    <div class="risk-item high"  style="margin-bottom:8px">🔴 高風險 — 對公司估值有重大影響</div>
    <div class="risk-item medium"style="margin-bottom:8px">🟡 中風險 — 需持續關注</div>
    <div class="risk-item low">🟢 低風險 — 短期影響有限</div>
  `));
  app.appendChild(tabRisks);

  // ── Rendering helpers ──

  function renderNotesEditor(companyId, defaultNotes) {
    const KEY = `notes_${companyId}`;
    const uid = `notes-ta-${companyId}`;
    const sid = `notes-st-${companyId}`;

    // Use saved value; fall back to defaultNotes from companies.js on first visit
    const saved = localStorage.getItem(KEY) !== null
      ? localStorage.getItem(KEY)
      : (defaultNotes || '');
    const ts    = localStorage.getItem(KEY + '_ts') || '';

    const html = `
      <div class="notes-wrap">
        <div class="notes-header">
          <span class="notes-status" id="${sid}">${ts ? '上次儲存：' + ts : ''}</span>
          <button class="notes-clear-btn" id="notes-clear-${companyId}">清除</button>
        </div>
        <textarea class="notes-textarea" id="${uid}"
          placeholder="記錄分析想法、觀察重點、買賣邏輯……（自動儲存在瀏覽器本地）"
        >${saved}</textarea>
      </div>`;

    // Attach listeners after DOM is ready
    setTimeout(() => {
      const ta  = document.getElementById(uid);
      const st  = document.getElementById(sid);
      if (!ta) return;
      let timer;
      ta.addEventListener('input', () => {
        clearTimeout(timer);
        st.textContent = '正在輸入…';
        timer = setTimeout(() => {
          localStorage.setItem(KEY, ta.value);
          const now = new Date();
          const t = now.toLocaleString('zh-TW', { month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit' });
          localStorage.setItem(KEY + '_ts', t);
          st.textContent = '已儲存 ' + t;
        }, 800);
      });
      document.getElementById(`notes-clear-${companyId}`).addEventListener('click', () => {
        if (!confirm('確定要清除筆記嗎？')) return;
        ta.value = '';
        localStorage.removeItem(KEY);
        localStorage.removeItem(KEY + '_ts');
        st.textContent = '已清除';
      });
    }, 0);

    return html;
  }

  function renderStockMetrics(m, ticker) {
    const DEFS = [
      { key: 'pe',           label: '本益比',        hint: 'P/E Ratio' },
      { key: 'eps',          label: 'EPS',           hint: '每股盈餘' },
      { key: 'epg',          label: 'EPG',           hint: 'EPS 成長率' },
      { key: 'peg',          label: 'PEG',           hint: '本益成長比' },
      { key: 'marketCap',    label: '市值',          hint: 'Market Cap' },
      { key: 'week52High',   label: '52週高',        hint: '52-Week High' },
      { key: 'week52Low',    label: '52週低',        hint: '52-Week Low' },
      { key: 'divYield',     label: '殖利率',        hint: 'Dividend Yield' },
    ];

    const cards = DEFS.map(d => {
      const raw = m?.[d.key];
      const isEmpty = !raw;
      const val = raw || '—';
      // 正負顏色
      const isPos = typeof val === 'string' && /^\+/.test(val);
      const isNeg = typeof val === 'string' && /^-/.test(val);
      const valClass = isPos ? 'metric-pos' : isNeg ? 'metric-neg' : '';
      return `
        <div class="metric-card${isEmpty ? ' metric-empty' : ''}">
          <div class="metric-label">${d.label}</div>
          <div class="metric-value ${valClass}">${val}</div>
          <div class="metric-sub">${d.hint}</div>
        </div>`;
    }).join('');

    const t = ticker.split(' / ')[0];
    const yahooUrl = `https://finance.yahoo.com/quote/${t}`;
    const tvUrl    = `https://www.tradingview.com/chart/?symbol=${t}`;

    return `
      <div class="metrics-grid">${cards}</div>
      <div class="metric-links">
        快速連結：
        <a href="${yahooUrl}" target="_blank">Yahoo Finance ↗</a>
        <a href="${tvUrl}"    target="_blank">TradingView ↗</a>
      </div>`;
  }

  function renderPieChart(customers) {
    const COLORS = [
      '#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b',
      '#ef4444', '#10b981', '#f97316', '#6366f1', '#ec4899',
    ];

    const items = customers.map((c, i) => ({
      name: c.name, note: c.note || '', pct: c.pct || '—',
      num: parseFloat(c.pct ? c.pct.replace(/[~%<>≈]/g, '') : '0') || 0,
      color: COLORS[i % COLORS.length],
    }));

    const total = items.reduce((s, c) => s + c.num, 0) || 100;

    // Canvas with extra room on sides for leader lines
    const W = 290, H = 230, cx = 145, cy = 115, OR = 78, IR = 41;
    const MR = (OR + IR) / 2;

    // Pre-compute slice geometry
    let a = -Math.PI / 2;
    const slices = items.map(item => {
      const sweep = (item.num / total) * 2 * Math.PI;
      const startA = a, midA = a + sweep / 2, endA = a + sweep;
      const deg = (item.num / total) * 360;
      a = endA;
      return { ...item, sweep, startA, midA, endA, deg };
    });

    // Donut paths
    const paths = slices.map(s => {
      const lg = s.sweep > Math.PI ? 1 : 0;
      const ox1 = cx + OR * Math.cos(s.startA), oy1 = cy + OR * Math.sin(s.startA);
      const ox2 = cx + OR * Math.cos(s.endA),   oy2 = cy + OR * Math.sin(s.endA);
      const ix1 = cx + IR * Math.cos(s.endA),   iy1 = cy + IR * Math.sin(s.endA);
      const ix2 = cx + IR * Math.cos(s.startA), iy2 = cy + IR * Math.sin(s.startA);
      const d = `M${ox1} ${oy1} A${OR} ${OR} 0 ${lg} 1 ${ox2} ${oy2} L${ix1} ${iy1} A${IR} ${IR} 0 ${lg} 0 ${ix2} ${iy2}Z`;
      return `<path d="${d}" fill="${s.color}" stroke="var(--bg2)" stroke-width="2"/>`;
    }).join('');

    // Short name helper
    const shortName = name => {
      const raw = name.replace(/（[^）]*）/g, '').replace(/\([^)]*\)/g, '').trim();
      return raw.length > 5 ? raw.slice(0, 4) + '…' : raw;
    };

    // Labels: inside if big enough, leader line if too small
    // s.deg is out of 360; LARGE≈15%, MEDIUM≈8% of total
    const LARGE = 54, MEDIUM = 28; // in degrees (out of 360)

    const labels = slices.map(s => {
      if (s.deg < 2) return '';

      if (s.deg >= MEDIUM) {
        // ── Inside label ──
        const tx = cx + MR * Math.cos(s.midA);
        const ty = cy + MR * Math.sin(s.midA);
        const ts = `text-anchor="middle" font-family="-apple-system,sans-serif" paint-order="stroke" stroke="rgba(0,0,0,0.5)" stroke-linejoin="round" stroke-width="2"`;
        if (s.deg >= LARGE) {
          const sn = shortName(s.name);
          return `
            <text x="${tx}" y="${ty - 6}" ${ts} font-size="10" fill="rgba(255,255,255,0.9)">${sn}</text>
            <text x="${tx}" y="${ty + 7}" ${ts} font-size="11" fill="white">${s.pct}</text>`;
        }
        return `<text x="${tx}" y="${ty + 4}" ${ts} font-size="11" fill="white">${s.pct}</text>`;
      }

      // ── Leader line (small slice) ──
      const P1_R  = OR + 6;   // start: just outside slice
      const P2_R  = OR + 20;  // bend point
      const H_LEN = 22;       // horizontal segment

      const p1x = cx + P1_R * Math.cos(s.midA), p1y = cy + P1_R * Math.sin(s.midA);
      const p2x = cx + P2_R * Math.cos(s.midA), p2y = cy + P2_R * Math.sin(s.midA);
      const right = Math.cos(s.midA) >= 0;
      const p3x = p2x + (right ? H_LEN : -H_LEN), p3y = p2y;
      const labelX = p3x + (right ? 4 : -4);
      const anchor = right ? 'start' : 'end';
      const label  = `${shortName(s.name)} ${s.pct}`;

      return `
        <circle cx="${p1x}" cy="${p1y}" r="1.8" fill="${s.color}"/>
        <polyline points="${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y}"
          fill="none" stroke="${s.color}" stroke-width="1" opacity="0.7"/>
        <text x="${labelX}" y="${p3y + 4}" text-anchor="${anchor}"
          font-family="-apple-system,sans-serif" font-size="10" fill="${s.color}">${label}</text>`;
    }).join('');

    const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" class="pie-svg">
      ${paths}${labels}
    </svg>`;

    const legend = slices.map(s => `
      <div class="pie-leg-row">
        <span class="pie-leg-dot" style="background:${s.color}"></span>
        <span class="pie-leg-name">${s.name}</span>
        ${s.note ? `<span class="pie-leg-note">${s.note}</span>` : ''}
        <span class="pie-leg-pct" style="color:${s.color}">${s.pct}</span>
      </div>`).join('');

    return `<div class="pie-wrap"><div class="pie-svg-box">${svg}</div><div class="pie-legend">${legend}</div></div>`;
  }

  function renderCompTable(competitors) {
    const THREAT = { high: '🔴 高', medium: '🟡 中', low: '🟢 低' };
    const rows = competitors.map(c => `
      <tr>
        <td class="comp-name">${c.name}</td>
        <td class="comp-share">${c.share || '—'}</td>
        <td class="comp-note">${c.note || '—'}</td>
        <td><span class="threat-badge threat-${c.threat || 'medium'}">${THREAT[c.threat] || '🟡 中'}</span></td>
      </tr>`).join('');
    return `
      <table class="comp-table">
        <thead><tr><th>競爭者</th><th>估計市佔</th><th>核心優勢 / 定位</th><th>威脅</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  }

  function bulletList(items) {
    return `<ul class="bullet-list">${items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
  }

  function makeTab(id, active = false) {
    const div = document.createElement('div');
    div.id = 'tab-' + id;
    div.className = 'tab-content' + (active ? ' active' : '');
    return div;
  }

  function block(title, html) {
    const div = document.createElement('div');
    div.className = 'content-block';
    div.innerHTML = `<h3>${title}</h3>${html}`;
    return div;
  }
})();

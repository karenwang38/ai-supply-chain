// 市場情報頁面 — 個股分組檢視
(function () {
  const container = document.getElementById('intel-app');
  let expandedGroups = new Set();  // 展開中的公司 group id
  let expandedCards  = new Set();  // 展開中的 intel card id

  // ── VIP 存取管理 ──
  const VIP_KEY = 'intel-vip-hash';

  async function hashPassphrase(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  function isVipUnlocked() { return !!localStorage.getItem(VIP_KEY); }
  async function verifyPassphrase(input) {
    return localStorage.getItem(VIP_KEY) === await hashPassphrase(input.trim());
  }
  async function setPassphrase(input) {
    localStorage.setItem(VIP_KEY, await hashPassphrase(input.trim()));
  }
  function clearVip() { localStorage.removeItem(VIP_KEY); }

  // ── VIP 模態視窗 ──
  function showVipModal(mode) {
    document.getElementById('vip-modal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'vip-modal';
    modal.className = 'vip-modal-overlay';

    if (mode === 'unlock') {
      modal.innerHTML = `
        <div class="vip-modal">
          <div class="vip-modal-icon">🔐</div>
          <h3>VIP 限定情報</h3>
          <p class="vip-modal-desc">請輸入你的私人密語以解鎖。</p>
          <input class="vip-passphrase-input" id="vip-input" type="password" placeholder="輸入密語..." autocomplete="off"/>
          <button class="vip-btn-primary" id="vip-submit">解鎖</button>
          <div class="vip-modal-status" id="vip-status"></div>
          <button class="vip-btn-close" id="vip-close">取消</button>
        </div>`;
    } else if (mode === 'set') {
      modal.innerHTML = `
        <div class="vip-modal">
          <div class="vip-modal-icon">🔑</div>
          <h3>設定你的 VIP 密語</h3>
          <p class="vip-modal-desc">這是你<strong>自己設定</strong>的私人密語，輸入任何你好記的字串。<br>設定後此裝置會永久解鎖，換新裝置再輸入一次即可。</p>
          <input class="vip-passphrase-input" id="vip-input"  type="password" placeholder="輸入你想要的密語（至少6字）..." autocomplete="new-password"/>
          <input class="vip-passphrase-input" id="vip-input2" type="password" placeholder="再次確認密語..." autocomplete="new-password" style="margin-top:8px"/>
          <button class="vip-btn-primary" id="vip-submit">設定並解鎖</button>
          <div class="vip-modal-status" id="vip-status"></div>
          <button class="vip-btn-close" id="vip-close">取消</button>
        </div>`;
    } else if (mode === 'manage') {
      modal.innerHTML = `
        <div class="vip-modal">
          <div class="vip-modal-icon">⚙️</div>
          <h3>VIP 存取管理</h3>
          <p class="vip-modal-desc">你目前已解鎖 VIP 情報。</p>
          <button class="vip-btn-danger" id="vip-lock">鎖定（清除本機存取）</button>
          <button class="vip-btn-close" id="vip-close" style="margin-top:8px">關閉</button>
        </div>`;
    }

    document.body.appendChild(modal);
    document.getElementById('vip-close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

    if (mode === 'unlock') {
      const doUnlock = async () => {
        const val = document.getElementById('vip-input').value.trim();
        const st  = document.getElementById('vip-status');
        if (!val) { st.textContent = '請輸入密語'; return; }
        st.textContent = '驗證中…';
        if (await verifyPassphrase(val)) {
          st.innerHTML = '<span style="color:#00ffaa">✓ 已解鎖</span>';
          setTimeout(() => { modal.remove(); render(); }, 600);
        } else {
          st.innerHTML = '<span style="color:#ff2d78">✗ 密語不正確</span>';
          document.getElementById('vip-input').value = '';
        }
      };
      document.getElementById('vip-submit').addEventListener('click', doUnlock);
      document.getElementById('vip-input').addEventListener('keydown', e => { if (e.key === 'Enter') doUnlock(); });
    }
    if (mode === 'set') {
      document.getElementById('vip-submit').addEventListener('click', async () => {
        const val  = document.getElementById('vip-input').value.trim();
        const val2 = document.getElementById('vip-input2').value.trim();
        const st   = document.getElementById('vip-status');
        if (val.length < 6) { st.textContent = '密語至少需要 6 個字元'; return; }
        if (val !== val2)   { st.textContent = '兩次密語不一致，請重試'; return; }
        await setPassphrase(val);
        st.innerHTML = '<span style="color:#00ffaa">✓ 密語已儲存，正在解鎖…</span>';
        setTimeout(() => { modal.remove(); render(); }, 800);
      });
    }
    if (mode === 'manage') {
      document.getElementById('vip-lock').addEventListener('click', () => {
        clearVip(); modal.remove(); render();
      });
    }
    setTimeout(() => document.getElementById('vip-input')?.focus(), 50);
  }

  // ── 建立 intelId → companyId 對應（依 COMPANIES.relatedIntel 的順序） ──
  const intelToCompany = new Map();
  if (typeof COMPANIES !== 'undefined') {
    Object.values(COMPANIES).forEach(co => {
      co.relatedIntel?.forEach(id => {
        if (!intelToCompany.has(id)) intelToCompany.set(id, co.id);
      });
    });
  }

  // ── 建立分組（保持 INTEL_DATA 順序，同公司的 entries 依原始順序） ──
  function buildGroups() {
    const groupMap  = new Map(); // coId → { co, entries[] }
    const otherGroup = { co: null, entries: [] };

    INTEL_DATA.forEach(entry => {
      const coId = intelToCompany.get(entry.id);
      if (coId && typeof COMPANIES !== 'undefined' && COMPANIES[coId]) {
        if (!groupMap.has(coId)) groupMap.set(coId, { co: COMPANIES[coId], entries: [] });
        groupMap.get(coId).entries.push(entry);
      } else {
        otherGroup.entries.push(entry);
      }
    });

    const groups = [...groupMap.values()];
    if (otherGroup.entries.length) groups.push(otherGroup);
    return groups;
  }

  // ── 主渲染 ──
  function render() {
    container.innerHTML = '';

    // VIP 按鈕列
    const topBar = document.createElement('div');
    topBar.className = 'intel-filter-bar';
    const vipBtn = document.createElement('button');
    vipBtn.className = 'intel-tag-btn vip-manage-btn';
    vipBtn.innerHTML = isVipUnlocked() ? '🔓 VIP 已解鎖' : '🔐 設定 VIP 閱讀';
    vipBtn.addEventListener('click', () => {
      if (isVipUnlocked()) showVipModal('manage');
      else if (!localStorage.getItem(VIP_KEY)) showVipModal('set');
      else showVipModal('unlock');
    });
    topBar.appendChild(vipBtn);
    container.appendChild(topBar);

    // 分組渲染
    const groups = buildGroups();
    const groupsWrap = document.createElement('div');
    groupsWrap.className = 'intel-groups';

    groups.forEach(({ co, entries }) => {
      const groupId = co ? co.id : '__other';
      const isOpen  = expandedGroups.has(groupId);

      const groupEl = document.createElement('div');
      groupEl.className = 'intel-group' + (isOpen ? ' open' : '');

      // ── 群組 Header ──
      const vipCount = entries.filter(e => e.vip).length;
      const vipHint  = vipCount ? ` <span class="group-vip-hint">含 ${vipCount} 筆 VIP</span>` : '';

      const header = document.createElement('div');
      header.className = 'intel-group-header';
      if (co) {
        header.innerHTML = `
          <span class="group-flag">${co.flag}</span>
          <span class="group-name">${co.name}</span>
          <span class="group-ticker">${co.ticker}</span>
          <span class="group-count">${entries.length} 篇情報${vipHint}</span>
          <span class="group-arrow">${isOpen ? '▲' : '▼'}</span>`;
      } else {
        header.innerHTML = `
          <span class="group-flag">📋</span>
          <span class="group-name">主題／綜合分析</span>
          <span class="group-count">${entries.length} 篇情報</span>
          <span class="group-arrow">${isOpen ? '▲' : '▼'}</span>`;
      }
      header.addEventListener('click', () => {
        if (expandedGroups.has(groupId)) expandedGroups.delete(groupId);
        else expandedGroups.add(groupId);
        render();
      });
      groupEl.appendChild(header);

      // ── 群組 Body（只在展開時渲染） ──
      if (isOpen) {
        const body = document.createElement('div');
        body.className = 'intel-group-body';
        entries.forEach(entry => {
          body.appendChild(buildCard(entry));
        });
        groupEl.appendChild(body);
      }

      groupsWrap.appendChild(groupEl);
    });

    container.appendChild(groupsWrap);
  }

  // ── 單張 Intel 卡片 ──
  function buildCard(entry) {
    const isVip    = !!entry.vip;
    const isLocked = isVip && !isVipUnlocked();
    const isOpen   = expandedCards.has(entry.id) && !isLocked;

    const card = document.createElement('div');
    card.className = 'intel-card' + (isOpen ? ' open' : '') + (isVip ? ' intel-card-vip' : '');
    card.id = entry.id;

    const [y, m, d] = entry.date.split('-');
    const dateStr = `${y}/${m}/${d}`;
    const vipBadge = isVip
      ? `<span class="intel-vip-badge">${isLocked ? '🔐 VIP 限定' : '🔓 VIP'}</span>`
      : '';

    if (isLocked) {
      card.innerHTML = `
        <div class="intel-card-header intel-card-locked" data-vip-unlock="true">
          <div class="intel-card-meta">
            <span class="intel-date">${dateStr}</span>
            ${vipBadge}
          </div>
          <div class="intel-card-title">${entry.title}</div>
          <div class="intel-vip-lock-banner">
            <span class="intel-vip-lock-icon">🔐</span>
            <span>${!localStorage.getItem(VIP_KEY)
              ? 'VIP 限定情報 — 點此設定你的私人密語（首次使用）'
              : 'VIP 限定情報 — 點此輸入密語解鎖'}</span>
          </div>
        </div>`;
      card.querySelector('[data-vip-unlock]').addEventListener('click', () => {
        showVipModal(localStorage.getItem(VIP_KEY) ? 'unlock' : 'set');
      });
    } else {
      card.innerHTML = `
        <div class="intel-card-header" data-toggle="${entry.id}">
          <div class="intel-card-meta">
            <span class="intel-date">${dateStr}</span>
            ${vipBadge}
          </div>
          <div class="intel-card-title">${entry.title}</div>
          <div class="intel-card-summary">${entry.summary}</div>
          <button class="intel-toggle-btn">${isOpen ? '▲ 收起' : '▼ 展開完整報告'}</button>
        </div>
        <div class="intel-card-body" style="display:${isOpen ? 'block' : 'none'}">
          ${renderKeyNumbers(entry.keyNumbers)}
          ${entry.sections.map(renderSection).join('')}
        </div>`;
      card.querySelector('[data-toggle]').addEventListener('click', () => {
        if (expandedCards.has(entry.id)) expandedCards.delete(entry.id);
        else expandedCards.add(entry.id);
        render();
      });
    }
    return card;
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

  // ── 處理 URL hash（直接跳到對應卡片） ──
  const hashId = window.location.hash?.slice(1);
  if (hashId) {
    const targetEntry = INTEL_DATA.find(d => d.id === hashId);
    if (targetEntry) {
      const coId = intelToCompany.get(hashId) || '__other';
      expandedGroups.add(coId);
      expandedCards.add(hashId);
    }
  }

  render();

  if (hashId) {
    setTimeout(() => {
      document.getElementById(hashId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
})();

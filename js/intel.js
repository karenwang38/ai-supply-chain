// 市場情報頁面
(function () {
  const container = document.getElementById('intel-app');
  let activeTag = 'all';
  let expandedId = window.location.hash ? window.location.hash.slice(1) : null;

  // ── VIP 存取管理 ──
  const VIP_KEY = 'intel-vip-hash';

  async function hashPassphrase(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function isVipUnlocked() {
    return !!localStorage.getItem(VIP_KEY);
  }

  async function verifyPassphrase(input) {
    const h = await hashPassphrase(input.trim());
    const stored = localStorage.getItem(VIP_KEY);
    return stored === h;
  }

  async function setPassphrase(input) {
    const h = await hashPassphrase(input.trim());
    localStorage.setItem(VIP_KEY, h);
  }

  function clearVip() {
    localStorage.removeItem(VIP_KEY);
  }

  // ── VIP 模態視窗 ──
  function showVipModal(mode) {
    const existing = document.getElementById('vip-modal');
    if (existing) { existing.remove(); }

    const modal = document.createElement('div');
    modal.id = 'vip-modal';
    modal.className = 'vip-modal-overlay';

    if (mode === 'unlock') {
      modal.innerHTML = `
        <div class="vip-modal">
          <div class="vip-modal-icon">🔐</div>
          <h3>VIP 限定情報</h3>
          <p class="vip-modal-desc">此情報為私密內容，請輸入存取密語以解鎖。</p>
          <input class="vip-passphrase-input" id="vip-input" type="password"
            placeholder="輸入密語..." autocomplete="off" />
          <button class="vip-btn-primary" id="vip-submit">解鎖</button>
          <div class="vip-modal-status" id="vip-status"></div>
          <button class="vip-btn-close" id="vip-close">取消</button>
        </div>`;
    } else if (mode === 'set') {
      modal.innerHTML = `
        <div class="vip-modal">
          <div class="vip-modal-icon">🔑</div>
          <h3>設定你的 VIP 密語</h3>
          <p class="vip-modal-desc">這是你<strong>自己設定</strong>的私人密語，請輸入任何你好記的字串。<br>設定後此裝置會永久解鎖，換新裝置再輸入一次即可。</p>
          <input class="vip-passphrase-input" id="vip-input" type="password"
            placeholder="輸入你想要的密語（至少6字）..." autocomplete="new-password" />
          <input class="vip-passphrase-input" id="vip-input2" type="password"
            placeholder="再次確認密語..." autocomplete="new-password"
            style="margin-top:8px" />
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
      const submit = document.getElementById('vip-submit');
      const input  = document.getElementById('vip-input');
      const status = document.getElementById('vip-status');
      const doUnlock = async () => {
        const val = input.value.trim();
        if (!val) { status.textContent = '請輸入密語'; return; }
        status.textContent = '驗證中…';
        const ok = await verifyPassphrase(val);
        if (ok) {
          status.innerHTML = '<span style="color:#00ffaa">✓ 已解鎖</span>';
          setTimeout(() => { modal.remove(); renderCards(); }, 600);
        } else {
          status.innerHTML = '<span style="color:#ff2d78">✗ 密語不正確</span>';
          input.value = '';
        }
      };
      submit.addEventListener('click', doUnlock);
      input.addEventListener('keydown', e => { if (e.key === 'Enter') doUnlock(); });
    }

    if (mode === 'set') {
      const submit = document.getElementById('vip-submit');
      const input  = document.getElementById('vip-input');
      const input2 = document.getElementById('vip-input2');
      const status = document.getElementById('vip-status');
      submit.addEventListener('click', async () => {
        const val = input.value.trim();
        const val2 = input2.value.trim();
        if (val.length < 6) { status.textContent = '密語至少需要 6 個字元'; return; }
        if (val !== val2) { status.textContent = '兩次密語不一致，請重試'; return; }
        await setPassphrase(val);
        status.innerHTML = '<span style="color:#00ffaa">✓ 密語已儲存，正在解鎖…</span>';
        setTimeout(() => { modal.remove(); renderCards(); }, 800);
      });
    }

    if (mode === 'manage') {
      document.getElementById('vip-lock').addEventListener('click', () => {
        clearVip();
        modal.remove();
        renderCards();
      });
    }

    // focus input
    setTimeout(() => document.getElementById('vip-input')?.focus(), 50);
  }

  // ── VIP 管理按鈕列 ──
  const filterBar = document.createElement('div');
  filterBar.className = 'intel-filter-bar';

  const vipManageBtn = document.createElement('button');
  vipManageBtn.className = 'intel-tag-btn vip-manage-btn';
  vipManageBtn.innerHTML = isVipUnlocked() ? '🔓 VIP 已解鎖' : '🔐 設定 VIP 閱讀';
  vipManageBtn.addEventListener('click', () => {
    if (isVipUnlocked()) {
      showVipModal('manage');
    } else if (localStorage.getItem(VIP_KEY) === null) {
      showVipModal('set');
    } else {
      showVipModal('unlock');
    }
  });
  filterBar.appendChild(vipManageBtn);
  container.appendChild(filterBar);

  // ── Cards container ──
  const cardsWrap = document.createElement('div');
  cardsWrap.id = 'intel-cards';
  container.appendChild(cardsWrap);

  function renderCards() {
    // 更新 VIP 按鈕文字
    vipManageBtn.innerHTML = isVipUnlocked() ? '🔓 VIP 已解鎖' : '🔐 VIP 解鎖';

    cardsWrap.innerHTML = '';
    const filtered = INTEL_DATA;

    if (!filtered.length) {
      cardsWrap.innerHTML = '<div class="intel-empty">沒有符合的情報</div>';
      return;
    }

    filtered.forEach(entry => {
      const isVip     = !!entry.vip;
      const isLocked  = isVip && !isVipUnlocked();
      const isOpen    = expandedId === entry.id && !isLocked;

      const card = document.createElement('div');
      card.className = 'intel-card' + (isOpen ? ' open' : '') + (isVip ? ' intel-card-vip' : '');
      card.dataset.id = entry.id;
      card.id = entry.id;

      const dateParts = entry.date.split('-');
      const dateStr = `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;

      const vipBadge = isVip
        ? `<span class="intel-vip-badge">${isLocked ? '🔐 VIP 限定' : '🔓 VIP'}</span>`
        : '';

      if (isLocked) {
        card.innerHTML = `
          <div class="intel-card-header intel-card-locked" data-vip-unlock="true">
            <div class="intel-card-meta">
              <span class="intel-date">${dateStr}</span>
              <span class="intel-source">${entry.source}</span>
              <span class="intel-category">${entry.category}</span>
              ${vipBadge}
            </div>
            <div class="intel-card-title">${entry.title}</div>
            <div class="intel-vip-lock-banner">
              <span class="intel-vip-lock-icon">🔐</span>
              <span>${localStorage.getItem(VIP_KEY) === null
                ? 'VIP 限定情報 — 點此設定你的私人密語（首次使用）'
                : 'VIP 限定情報 — 點此輸入密語解鎖'}</span>
            </div>
          </div>`;
        card.querySelector('[data-vip-unlock]').addEventListener('click', () => {
          const hasStored = localStorage.getItem(VIP_KEY) !== null;
          showVipModal(hasStored ? 'unlock' : 'set');
        });
      } else {
        card.innerHTML = `
          <div class="intel-card-header" data-toggle="${entry.id}">
            <div class="intel-card-meta">
              <span class="intel-date">${dateStr}</span>
              <span class="intel-source">${entry.source}</span>
              <span class="intel-category">${entry.category}</span>
              ${vipBadge}
            </div>
            <div class="intel-card-title">${entry.title}</div>
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
      }

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

  if (expandedId) {
    setTimeout(() => {
      const target = document.getElementById(expandedId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
})();

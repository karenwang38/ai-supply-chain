// GitHub Gist 跨裝置筆記同步
const NoteSync = (() => {
  const LS_TOKEN   = 'gist_token';
  const LS_GIST_ID = 'gist_id';
  const GIST_FILE  = 'ai-supply-chain-notes.json';
  const GIST_DESC  = 'AI 產業鏈分析 - 個人筆記';

  const getToken  = () => localStorage.getItem(LS_TOKEN);
  const getGistId = () => localStorage.getItem(LS_GIST_ID);
  const isConfigured = () => !!(getToken() && getGistId());

  async function apiFetch(url, opts = {}) {
    const token = getToken();
    const res = await fetch(url, {
      ...opts,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...(opts.headers || {}),
      },
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `HTTP ${res.status}`);
    }
    return res.json();
  }

  async function fetchAllNotes() {
    const data = await apiFetch(`https://api.github.com/gists/${getGistId()}`);
    const content = data.files?.[GIST_FILE]?.content;
    return content ? JSON.parse(content) : {};
  }

  async function loadNote(companyId, defaultContent = '') {
    if (!isConfigured()) {
      const v = localStorage.getItem(`notes_${companyId}`);
      return v !== null ? v : defaultContent;
    }
    try {
      const notes = await fetchAllNotes();
      return companyId in notes ? notes[companyId] : defaultContent;
    } catch (e) {
      console.warn('Gist 讀取失敗，fallback localStorage', e.message);
      const v = localStorage.getItem(`notes_${companyId}`);
      return v !== null ? v : defaultContent;
    }
  }

  async function saveNote(companyId, text) {
    // Always keep localStorage in sync as offline cache
    localStorage.setItem(`notes_${companyId}`, text);
    if (!isConfigured()) return;

    let notes = {};
    try { notes = await fetchAllNotes(); } catch (e) {}
    notes[companyId] = text;

    await apiFetch(`https://api.github.com/gists/${getGistId()}`, {
      method: 'PATCH',
      body: JSON.stringify({
        files: { [GIST_FILE]: { content: JSON.stringify(notes, null, 2) } },
      }),
    });
  }

  async function setup(token) {
    // Validate token
    const meRes = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!meRes.ok) throw new Error('Token 無效，請確認有 gist 權限');
    const me = await meRes.json();

    // Find existing gist by description
    const gists = await (await fetch('https://api.github.com/gists?per_page=100', {
      headers: { Authorization: `Bearer ${token}` },
    })).json();
    let gist = gists.find(g => g.description === GIST_DESC);

    if (!gist) {
      // Create new private gist
      const res = await fetch('https://api.github.com/gists', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: GIST_DESC,
          public: false,
          files: { [GIST_FILE]: { content: '{}' } },
        }),
      });
      if (!res.ok) throw new Error('建立 Gist 失敗');
      gist = await res.json();
    }

    localStorage.setItem(LS_TOKEN, token);
    localStorage.setItem(LS_GIST_ID, gist.id);
    return { login: me.login, gistId: gist.id };
  }

  function disconnect() {
    localStorage.removeItem(LS_TOKEN);
    localStorage.removeItem(LS_GIST_ID);
  }

  return { isConfigured, setup, loadNote, saveNote, disconnect, getGistId };
})();

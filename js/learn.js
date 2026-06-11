// 技術科普頁面
(function () {
  // ── Term tagging helpers ──────────────────────────────────────
  function T(term, cls) {
    return `<span class="tt tt-${cls||'tech'}">${term}</span>`;
  }
  function co(id, label) {
    return `<a class="tt tt-co" href="company.html?id=${id}">${label}</a>`;
  }
  function L(n) {
    return `<span class="tt tt-layer tt-l${n}">L${n}</span>`;
  }

  // ── Section data ──────────────────────────────────────────────
  const SECTIONS = [
    {
      id: 'npo-cpo',
      icon: '🔬',
      title: 'NPO vs CPO：光學封裝進化論',
      html: `
        <p class="learn-lead">這兩種技術的誕生，都是為了打破 AI 資料中心因傳統插拔式光模組傳輸距離過長所導致的「高功耗、高延遲、散熱瓶頸」三重困境。本質是：把「光電轉換模組」與「ASIC 交換主晶片」的物理距離強行拉近。</p>

        <div class="learn-compare-grid">
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('NPO','spec')} Near-Packaged Optics</div>
            <div class="learn-compare-sub">近端封裝光學</div>
            <p><strong>技術本質：</strong>將晶片（大腦）與光模組（翻譯官）放置在「同一塊系統基板（${T('Substrate','spec')}）」上，兩者成為緊鄰的鄰居，而非插拔式外掛。</p>
            <p><strong>2026 年現狀：</strong>技術已成熟落地，進入大規模商用拉貨。${co('AMZN','Amazon')} 正釋出千萬個 ${T('6.4T','spec')} 需求（折算 ${T('1.6T','spec')} 達 4,000 萬個），生命週期預計延伸至 2028-2029 年，與 CPO 持續並行。</p>
            <div class="learn-tag-row">
              ${T('可維修','pro')} ${T('成本低','pro')} ${T('已大規模商用','pro')}
            </div>
          </div>
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('CPO','spec')} Co-Packaged Optics</div>
            <div class="learn-compare-sub">共同封裝光學</div>
            <p><strong>技術本質：</strong>終極型態。直接將光引擎晶片與 ASIC 交換晶片「熔接在同一個晶圓級中介層（${T('Interposer','spec')}）」上，融合成一顆超大手掌大晶片。</p>
            <p><strong>2026 年現狀：</strong>技術攻關與早期驗證階段。${co('NVDA','NVIDIA')} 正推動 ${T('Spectrum-X CPO Switch','spec')} 規格標準化，採用高壁壘的 ${T('MRM 微環調變器','spec')} 架構，被視為 CPO 商轉元年的先驅。</p>
            <div class="learn-tag-row">
              ${T('功耗極低','pro')} ${T('延遲最短','pro')} ${T('壞了難維修','con')} ${T('成本高','con')}
            </div>
          </div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">💡</div>
          <div><strong>關鍵結論：</strong>CPO 的「怕熱、壞了無法單獨維修」限制，讓 NPO 生命週期被大幅拉長至 2028-2029 年。兩者並行而非取代，${co('XINYI','新易盛')} 等 NPO 供應商的護城河比市場想像的更持久。</div>
        </div>
      `
    },

    {
      id: 'supply-chain',
      icon: '🗺️',
      title: '光通訊 AI 供應鏈心智圖',
      html: `
        <p class="learn-lead">從最底層材料到終端 CSP 金主，完整拆解每一層的技術分工與代表公司。</p>

        <div class="learn-mindmap">

          <div class="mm-layer mm-l0">
            <div class="mm-layer-label">${L(0)} 底層物理材料與設計工具</div>
            <div class="mm-rows">
              <div class="mm-row">
                <span class="mm-cat">特殊材料晶圓</span>
                <div class="mm-chips">
                  ${co('SOI','Soitec')} <span class="mm-note">全球 70-80% SOI 晶圓壟斷</span>
                  ${co('6488.TW','環球晶')} <span class="mm-note">矽晶圓全球第三・FOPLP 方形晶圓</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">EDA 設計軟體</span>
                <div class="mm-chips">
                  ${co('SNPS','新思科技')} <span class="mm-note">EDA 雙寡頭</span>
                  ${co('CDNS','益華電腦')} <span class="mm-note">類比/混合信號領導者</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">戰略稀有金屬</span>
                <div class="mm-chips">
                  ${co('7610.TW','聯友金屬')} <span class="mm-note">亞洲唯一非紅鎢供應鏈・鎢酸鹽全球第二</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mm-arrow">▼ 向上游提供設計工具與材料</div>

          <div class="mm-layer mm-l1">
            <div class="mm-layer-label">${L(1)} 上游—晶片、光源、製程設備</div>
            <div class="mm-rows">
              <div class="mm-row">
                <span class="mm-cat">${T('AI 算力平台','spec')}</span>
                <div class="mm-chips">
                  ${co('NVDA','NVIDIA')} <span class="mm-note nvda-note">⬡ 制高點・橫跨 L1→L3・制定全供應鏈規格</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">晶圓代工封裝</span>
                <div class="mm-chips">
                  ${co('2330.TW','台積電')} <span class="mm-note">CoWoS 先進封裝・NVIDIA 唯一代工</span>
                  ${co('GFS','格羅方德')} <span class="mm-note">Fotonix CPO 開放平台</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">晶片設計</span>
                <div class="mm-chips">
                  ${co('2454.TW','聯發科')} <span class="mm-note">推論 ASIC</span>
                  ${co('3661.TW','世芯')}
                  ${co('3443.TW','創意電子')}
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">雷射光源</span>
                <div class="mm-chips">
                  ${co('LITE','Lumentum')} <span class="mm-note">50-60% 龍頭</span>
                  ${co('SIVE','Sivers')} <span class="mm-note">InP 雷射陣列・AMD 生態奇兵</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">BMC 管理晶片</span>
                <div class="mm-chips">
                  ${co('4919.TW','新唐科技')} <span class="mm-note">AI 伺服器 BMC・一台 NVL72 機櫃需 72 顆</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">先進製程設備</span>
                <div class="mm-chips">
                  ${co('8027.TWO','鈦昇')} <span class="mm-note">TGV 玻璃打孔</span>
                  ${co('8064.TWO','東捷')} <span class="mm-note">雷射載板剝離</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">高階測試</span>
                <div class="mm-chips">
                  ${co('6515.TW','穎崴')} <span class="mm-note">1.6T 高速同軸測試座・光電共測探針卡</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mm-arrow">▼ NVIDIA 向下發射 Spec，中游照單全收</div>

          <div class="mm-layer mm-l2">
            <div class="mm-layer-label">${L(2)} 中游—功能模組與熱能整合</div>
            <div class="mm-rows">
              <div class="mm-row">
                <span class="mm-cat">光模組 / 光引擎</span>
                <div class="mm-chips">
                  ${co('XUCHUANG','旭創')} <span class="mm-note">Google 2.4T 輕相干大單</span>
                  ${co('XINYI','新易盛')} <span class="mm-note">Amazon NPO 20-30% 份額</span>
                  ${co('TFC','天孚通信')} <span class="mm-note">Nvidia 光引擎・利潤 55-60 億人民幣</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">液冷散熱系統</span>
                <div class="mm-chips">
                  ${co('3324.TW','雙鴻')} <span class="mm-note">冷板式 + 浸沒式 CDU・照 NVDA 規範客製</span>
                  ${co('8996.TW','高力')}
                </div>
              </div>
            </div>
          </div>

          <div class="mm-arrow">▼ 按照 NVIDIA 整機藍圖組裝</div>

          <div class="mm-layer mm-l3">
            <div class="mm-layer-label">${L(3)} 下游—最終系統設備商</div>
            <div class="mm-rows">
              <div class="mm-row">
                <span class="mm-cat">AI 伺服器 ODM</span>
                <div class="mm-chips">
                  ${co('2382.TW','廣達')} <span class="mm-note">NVIDIA AI 伺服器最大 ODM</span>
                  ${co('6669.TW','緯穎')} <span class="mm-note">Meta 首選</span>
                  ${co('2317.TW','鴻海')} <span class="mm-note">AI + 機器人雙線</span>
                </div>
              </div>
              <div class="mm-row">
                <span class="mm-cat">網路設備品牌</span>
                <div class="mm-chips">
                  ${co('CSCO','思科')} ${co('ANET','Arista')}
                </div>
              </div>
            </div>
          </div>

          <div class="mm-arrow">▼ 採購算力、部署資料中心</div>

          <div class="mm-layer mm-l4">
            <div class="mm-layer-label">${L(4)} 終端—CSP 金主與雲端巨頭</div>
            <div class="mm-rows">
              <div class="mm-row">
                <span class="mm-cat">超大型雲端服務</span>
                <div class="mm-chips">
                  ${co('AMZN','Amazon')} <span class="mm-note">NPO 瘋狂拉貨者</span>
                  ${co('GOOG','Google')} <span class="mm-note">TPU v9 自研・旭創 2.4T 大客戶</span>
                  ${co('MSFT','Microsoft')} <span class="mm-note">OpenAI 算力主力</span>
                  ${co('META','Meta')} <span class="mm-note">35 萬張 H100+</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">⚔️</div>
          <div><strong>兩大陣營對決：</strong>
            <br>【${T('NVIDIA + 台積電','hot')} 國家隊】私有 CoWoS 封裝 + CUDA 生態系 + InfiniBand 互連，制定整個 AI 產業鏈規格
            <br>【${T('AMD + 格羅方德 + 聯發科','alt')} 反壟斷聯盟】以 ${co('SOI','Soitec')} SOI 頂級材料為基底、${co('GFS','GF')} Fotonix 開放 CPO 平台、${co('SIVE','Sivers')} InP 雷射為「奇兵」，嘗試繞過 CUDA 壟斷
          </div>
        </div>
      `
    },

    {
      id: 'nvidia-dominance',
      icon: '⬡',
      title: 'NVIDIA 制高點：橫跨 L1→L3 的帝國統治',
      html: `
        <p class="learn-lead">NVIDIA 不是單純的 L1 晶片廠。它「住在 L1，卻透過主導高速互連專利（${T('NVLink','spec')}）與軟體生態（${T('CUDA','spec')}），強行控制 L2 散熱規格與 L3 整機組裝，最後把整台價值數百萬美元的系統機櫃直接賣給 L4 金主」。</p>

        <div class="learn-flow">
          <div class="learn-flow-block lf-l1">
            <div class="learn-flow-layer">${L(1)} 晶片設計</div>
            <div class="learn-flow-title">${co('NVDA','NVIDIA')} 大腦</div>
            <ul>
              <li>研發 ${T('Blackwell','spec')} / ${T('Rubin','spec')} 晶片架構</li>
              <li>交台積電以 ${T('CoWoS','spec')} 先進封裝代工</li>
              <li>深度綁定 ${co('4919.TW','新唐')} 提供 ${T('BMC 管理晶片','spec')}</li>
              <li>每台 NVL72 機櫃需搭載 <strong>72 顆</strong> BMC 晶片</li>
            </ul>
          </div>
          <div class="learn-flow-arrow">↓ 向下發射 Spec 規格，吞噬中下游利潤</div>
          <div class="learn-flow-block lf-l2">
            <div class="learn-flow-layer">${L(2)} 中游模組</div>
            <div class="learn-flow-title">照規格客製化</div>
            <ul>
              <li>${co('3324.TW','雙鴻')} / ${co('3017.TW','奇鋐')} 必須照 NVIDIA 熱設計規範造液冷 ${T('CDU','spec')} 系統</li>
              <li>無法自主定義產品形態，毛利率受限</li>
            </ul>
          </div>
          <div class="learn-flow-arrow">↓</div>
          <div class="learn-flow-block lf-l3">
            <div class="learn-flow-layer">${L(3)} 下游組裝</div>
            <div class="learn-flow-title">黑手組裝勞動力</div>
            <ul>
              <li>${co('2382.TW','廣達')} / ${co('6669.TW','緯穎')} / ${co('2317.TW','鴻海')} 按 NVIDIA 整機藍圖組裝</li>
              <li>毛利率僅 3-5%，利潤幾乎全被 NVIDIA 截走</li>
            </ul>
          </div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">🎯</div>
          <div><strong>CPO 的 NVIDIA 策略：</strong>NVIDIA 正推動 ${T('Spectrum-X CPO Switch','spec')} 規格標準化，採用 ${T('MRM 微環調變器','spec')} 架構。在未來 CPO 架構下，NVIDIA 將在台積電直接把自家 ASIC 交換晶片、${T('HBM','spec')} 記憶體與光引擎黏成一塊手掌大超級晶片，從源頭扼殺傳統外掛光模組廠的防線。</div>
        </div>
      `
    },

    {
      id: 'cuda-moat',
      icon: '🔐',
      title: 'CUDA 護城河：Layer 1.5 的軟體鎖',
      html: `
        <p class="learn-lead">${T('CUDA','spec')}（Compute Unified Device Architecture，統一計算架構）是 NVIDIA 在 2006 年開發的軟體平台與程式架構，它是 NVIDIA 帝國最深、最難以被打破的「終極護城河（Moat）」。</p>

        <h3 class="learn-h3">為什麼需要 CUDA？</h3>
        <div class="learn-compare-grid">
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('CPU','spec')} 的特性</div>
            <p>像一個「天才數學家」，核心少（8-16個），但每個核心都很強。一次只能做少數幾件事。</p>
            <div class="learn-compare-head" style="margin-top:12px">CUDA 出現前的困境</div>
            <p>工程師想用 GPU 做 AI 運算，必須把數學題偽裝成「3D 遊戲畫面」輸入，算完後再解譯回來——極度繁瑣。</p>
          </div>
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('GPU','spec')} + ${T('CUDA','spec')} 的組合</div>
            <p>GPU 有上萬個「普通工人（微核心）」，${T('CUDA','spec')} 就是「數位對講機指揮系統」。</p>
            <p>CUDA 精確切分工作區塊，同一秒鐘對 5,000 個工人下令，讓他們同時動手（${T('平行運算','spec')}）。</p>
            <p>結果：幾分鐘完成 CPU 需要數天的運算量。</p>
          </div>
        </div>

        <h3 class="learn-h3">CUDA 在產業鏈的位置：${T('Layer 1.5','spec')} 軟體護城河</h3>
        <div class="learn-flow-linear">
          <span class="lfl-block lfl-l1">${L(1)} 硬體算力<br><small>Blackwell / Rubin GPU</small></span>
          <span class="lfl-arrow">→</span>
          <span class="lfl-block lfl-special">${T('L1.5 CUDA 軟體鎖','spec')}<br><small>全球 400萬+ AI 工程師的代碼生態</small></span>
          <span class="lfl-arrow">→</span>
          <span class="lfl-block lfl-l2">${L(2)}${L(3)} 整機系統</span>
          <span class="lfl-arrow">→</span>
          <span class="lfl-block lfl-l4">${L(4)} CSP 金主<br><small>Microsoft / Google / Meta</small></span>
        </div>

        <h3 class="learn-h3">為什麼 CUDA 是 AMD 與聯發科最痛苦的無解高牆？</h3>
        <div class="learn-table-wrap">
          <table class="learn-table">
            <thead><tr><th>面向</th><th>實際情況</th></tr></thead>
            <tbody>
              <tr><td>工程師肌肉記憶</td><td>全球所有 AI 代碼（${T('PyTorch','spec')}、${T('TensorFlow','spec')}）都是原生基於 CUDA 語法寫出來的</td></tr>
              <tr><td>轉移成本</td><td>換用 AMD/ASIC 晶片 = 內部數萬名工程師需重寫所有 AI 代碼，軟體不相容崩潰</td></tr>
              <tr><td>商業護城河</td><td>客戶付的錢，20% 買晶片（硬體），<strong>80% 買 CUDA 生態通行證</strong></td></tr>
              <tr><td>毛利率來源</td><td>CUDA 軟體毛利率接近 100%，直接拉升 NVIDIA 整體毛利率至 75-80%</td></tr>
            </tbody>
          </table>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">⚠️</div>
          <div><strong>CUDA 的破壞性威脅（何時護城河會倒？）：</strong>
            AMD 主導的 ${T('ROCm','alt')}（開源軟體平台）以及各大雲端巨頭推動的 ${T('Triton 語言','alt')}，目標是建立一條免除 CUDA 壟斷的「繞道公路」。一旦工程師不需要 CUDA 也能輕鬆在 AMD/ASIC 晶片上跑 AI，NVIDIA 股價將面臨估值大修正。</div>
        </div>
      `
    },

    {
      id: 'cpu-gpu',
      icon: '🧠',
      title: 'CPU 的幕後角色：AI 時代的指揮家',
      html: `
        <p class="learn-lead">CPU 在 AI 時代不但依然需要，反而扮演「交響樂團的指揮家」——沒有 CPU 領頭，再強大的 GPU 都會癱瘓成無法運作的廢鐵。</p>

        <div class="learn-compare-grid">
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('CPU','spec')} 中央處理器</div>
            <p><strong>比喻：</strong>工地的「監工（工程師）」</p>
            <ul>
              <li>執行 ${T('作業系統','spec')}（Linux / Windows）的啟動、記憶體分配、硬碟讀取</li>
              <li>為 GPU「分派工作」——讀取資料、整理、餵給 GPU</li>
              <li>複雜邏輯判斷（If/Else）與序列運算，GPU 完全不具備</li>
            </ul>
          </div>
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('GPU','spec')} 圖形處理器</div>
            <p><strong>比喻：</strong>力大無窮的「苦力」</p>
            <ul>
              <li>上萬個微核心，專為平行運算設計</li>
              <li>擅長同時執行海量的簡單計算（矩陣乘法、向量運算）</li>
              <li>不具備管理系統、處理複雜邏輯的能力</li>
            </ul>
          </div>
        </div>

        <h3 class="learn-h3">NVIDIA 的解法：${T('Grace CPU','spec')}（自研）</h3>
        <p>傳統 Intel / AMD CPU 速度跟不上 Blackwell GPU 的恐怖算力需求，成為系統瓶頸。NVIDIA 砸數十億自研 ${T('Grace CPU','spec')}，並在 ${T('GB200','spec')} 系統中將 Grace CPU 與 Blackwell GPU 緊鄰焊接在同一塊主機板上，確保 GPU 戰力 100% 釋放。</p>

        <h3 class="learn-h3">完整系統的角色分工</h3>
        <div class="learn-role-grid">
          <div class="learn-role-card">
            <div class="learn-role-icon">👔</div>
            <div class="learn-role-name">${T('CPU','spec')}</div>
            <div>總經理：管理公司制度（作業系統）、決定策略、分配工作</div>
          </div>
          <div class="learn-role-card">
            <div class="learn-role-icon">💪</div>
            <div class="learn-role-name">${T('GPU','spec')} + ${T('CUDA','spec')}</div>
            <div>5000 位特級包裝工人，在統一對講機指揮下以極速處理 AI 平行運算</div>
          </div>
          <div class="learn-role-card">
            <div class="learn-role-icon">🔒</div>
            <div class="learn-role-name">${co('4919.TW','新唐 BMC')}</div>
            <div>廠房保全：監控冷氣溫度、過熱時強制斷電保護</div>
          </div>
          <div class="learn-role-card">
            <div class="learn-role-icon">🚄</div>
            <div class="learn-role-name">${T('1.6T 光模組','spec')}</div>
            <div>高鐵網絡：將打包好的巨量資料（光訊號）以光速運送到其他資料中心</div>
          </div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">📊</div>
          <div><strong>預算結構的歷史性轉變：</strong>
            傳統時代，CPU 拿走伺服器 80% 預算；AI 時代，90% 預算在買 GPU 與高階光通訊。CPU 預算佔比被稀釋，但功能剛性從未消失——它從「個人英雄」進化為「統御整座 GPU 算力叢林的幕後大腦」。
            分析 ${co('2454.TW','聯發科')} 轉型 ASIC 時，永遠要追蹤它與 CPU 之間高速介面（${T('PCIe Gen6','spec')} / ${T('CXL','spec')}）的對接良率。
          </div>
        </div>
      `
    },

    {
      id: 'blackwell',
      icon: '📦',
      title: 'Blackwell 四層解析：從晶片到機櫃',
      html: `
        <p class="learn-lead">${T('Blackwell','spec')} 不是主機板，是 NVIDIA 的「AI 晶片架構技術代號」。從最微觀的單顆晶片到最宏觀的整台機櫃，分成四個硬體層級。</p>

        <div class="learn-bw-stack">
          <div class="learn-bw-level">
            <div class="learn-bw-num">層級 4</div>
            <div class="learn-bw-name">${T('GB200 NVL72','spec')}　整機機櫃（終極交付形態）</div>
            <p>高達兩公尺的超級運算怪獸。插滿 <strong>36 塊</strong> Grace CPU 主機板 + <strong>72 顆</strong> Blackwell GPU，透過高達 <strong>9 英里</strong>特製銅線與 ${T('ConnectX-8','spec')} 網路卡串聯成一個大晶片運作。</p>
            <p>供應商：${co('2382.TW','廣達')} / ${co('6669.TW','緯穎')} / ${co('2317.TW','鴻海')} 組裝，${co('3324.TW','雙鴻')} 機櫃液冷</p>
          </div>
          <div class="learn-bw-level">
            <div class="learn-bw-num">層級 3</div>
            <div class="learn-bw-name">AI 伺服器機箱（機台）</div>
            <p>多塊 AI 主機板疊在一起推入鋼製機箱，加上電源與光纖通訊卡。${co('3324.TW','雙鴻')} 為機箱客製化極精密的水冷分流管（${T('Manifold','spec')}），否則晶片直接燒毀。</p>
          </div>
          <div class="learn-bw-level">
            <div class="learn-bw-num">層級 2</div>
            <div class="learn-bw-name">AI 運算板 / 節點（這才是「AI 主機板」）</div>
            <p>電路板上裝入 <strong>2 顆</strong> ${T('Grace CPU','spec')}（自研）+ <strong>4 顆</strong> Blackwell GPU 晶片，搭配散熱水冷板與無數線路。</p>
            <p>${co('2382.TW','廣達')} / ${co('6669.TW','緯穎')} 按 NVIDIA 規格代工組裝。</p>
          </div>
          <div class="learn-bw-level learn-bw-core">
            <div class="learn-bw-num">層級 1</div>
            <div class="learn-bw-name">${T('Blackwell GPU 核心晶片','spec')}（物理本質）</div>
            <p>在 ${co('2330.TW','台積電')} 透過 ${T('CoWoS','spec')} 先進封裝製造。一塊手掌大的封裝上黏有 <strong>2 顆超大算力大腦</strong> + <strong>8-12 顆 ${T('HBM3e','spec')} 高頻寬記憶體</strong>。</p>
            <p>測試：${co('6515.TW','穎崴')} 提供耐高壓高溫同軸測試座，進行出廠前光電共測。</p>
          </div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">🚅</div>
          <div><strong>最直觀的比喻：</strong>
            如果主機板是「高鐵底盤與車廂（載體）」，Blackwell 就是 NVIDIA 發明的「次世代磁浮引擎（晶片核心）」。
            NVIDIA 可以單獨賣引擎，也可以把引擎裝在自家底盤上，組成完整的「機櫃高鐵（GB200 NVL72）」直接打包賣給 CSP 客戶。
          </div>
        </div>
      `
    },

    {
      id: 'rubin',
      icon: '🚀',
      title: 'Rubin 架構：Blackwell 之後的次世代',
      html: `
        <p class="learn-lead">${T('Rubin','spec')} 是 NVIDIA 繼 Blackwell 之後的「下一代 AI 算力平台技術代號」，預計 <strong>2026 年</strong>正式推出，2027 年推出 Rubin Ultra。本質是一場「材料物理」與「晶片立體封裝」的雙重革命。</p>

        <h3 class="learn-h3">三大核心技術質變</h3>
        <div class="learn-spec-grid">
          <div class="learn-spec-card">
            <div class="learn-spec-icon">💾</div>
            <div class="learn-spec-title">記憶體升級至 ${T('HBM4','spec')}</div>
            <p>Blackwell 用 8-12 顆 ${T('HBM3e','spec')}；Rubin 全面導入 ${T('HBM4','spec')}，首批 8 顆、高階版 12 顆。晶片與記憶體之間的頻寬與資料交換速度幾何級數跳升，解決算力「飢餓狀態」。</p>
          </div>
          <div class="learn-spec-card">
            <div class="learn-spec-icon">🔬</div>
            <div class="learn-spec-title">製程升級至 ${T('3nm','spec')} + 超大封裝</div>
            <p>由 ${co('2330.TW','台積電')} 採用 ${T('N3P 製程','spec')} 代工。封裝時使用的中介層（${T('Interposer','spec')}）光罩面積擴大至傳統的 ${T('3.3-4 倍以上','spec')}。晶片面積比成年人手掌還大，逼近物理極限。</p>
          </div>
          <div class="learn-spec-card">
            <div class="learn-spec-icon">⚡</div>
            <div class="learn-spec-title">網速推升至 ${T('1.6T','spec')} / ${T('3.2T','spec')}</div>
            <p>原生配備 ${T('ConnectX-9','spec')} 網路卡，傳輸速率直接推升至 1.6T（朝 3.2T 邁進）。傳統銅線全面撞上物理牆，倒逼採購矽光子傳輸方案。</p>
          </div>
        </div>

        <h3 class="learn-h3">Rubin 對供應鏈的連鎖衝擊</h3>
        <div class="learn-impact-list">
          <div class="learn-impact-item">
            <span class="learn-impact-who">${co('3324.TW','雙鴻')} / ${co('3017.TW','奇鋐')}</span>
            <span class="learn-impact-arrow">←</span>
            <div>Rubin 功耗突破 <strong>${T('1,200-1,500W','spec')}</strong>，風扇氣冷完全絕跡。水冷板（${T('Cold Plate','spec')}）與液冷機櫃（${T('CDU','spec')}）的單位價值（${T('ASP','spec')}）再次往上移。</div>
          </div>
          <div class="learn-impact-item">
            <span class="learn-impact-who">${co('6515.TW','穎崴')}</span>
            <span class="learn-impact-arrow">←</span>
            <div>Rubin 面積過大、${T('HBM4','spec')} 接腳密密麻麻，出廠前需同時進行高速電訊號與光的「${T('光電共測','spec')}」，高階同軸測試座（${T('Coaxial Socket','spec')}）迎來超高溢價剛需。</div>
          </div>
          <div class="learn-impact-item">
            <span class="learn-impact-who">${co('SOI','Soitec')} / ${co('6488.TW','環球晶')}</span>
            <span class="learn-impact-arrow">←</span>
            <div>${T('ConnectX-9','spec')} 帶來的 1.6T 協議，讓傳統銅線全面過熱衰減，倒逼 CSP 加速採購以 ${T('SOI 晶圓','spec')} 為基底的矽光子傳輸方案。</div>
          </div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">📈</div>
          <div><strong>估值邏輯：</strong>只要 NVIDIA 能按 Roadmap 在 2026 年順利交出 Rubin，就能向市場證明其 EPS 成長率依然踩得比股價快，維持健康的低 ${T('PEG','spec')}。這也是為什麼 ${co('2454.TW','聯發科')} 必須全力在 ASIC 領域搶攻 ${T('Chiplet','spec')} 異質封裝——不跟上 Rubin 規則，就只能被邊緣化。</div>
        </div>
      `
    },

    {
      id: 'stock-math',
      icon: '📐',
      title: '股票數學・估值進化論',
      html: `
        <p class="learn-lead">當一檔股票創歷史新高、進入「無頭部行情」時，過去所有的歷史本益比區間與河流圖，會瞬間「報廢」不能用。這在股市裡有一個專有名詞，叫做 <strong>${T('本益比上修','spec')}（P/E Re-rating）</strong>。</p>

        <h3 class="learn-h3">一、公司「基因」發生突變（毛毛蟲變蝴蝶）</h3>
        <p>過去的歷史資料，建立在公司的「舊業務」上。當股價衝破歷史新高，通常意味著它<strong>跨入了全新、暴利的未知領域</strong>。</p>

        <div class="learn-insight">
          <div class="learn-insight-icon">🏭</div>
          <div>
            <strong>經典案例：${co('2330.TW','台積電（2330）')}</strong><br>
            智慧型手機時代，市場對台積電的認知是「高級代工廠」，歷史本益比被死死壓在 ${T('15～18倍','spec')}。當 AI 時代來臨，台積電靠著 ${T('CoWoS','spec')} 先進封裝和 2 奈米成為全球 AI 晶片的唯一咽喉——市場賦予它全新身份「AI 基礎建設」，本益比直接拉高到 ${T('25～30倍','spec')}。<br>
            <strong>過去的歷史資料不是錯了，而是它「不配」用在現在的台積電身上了。</strong>
          </div>
        </div>

        <h3 class="learn-h3">二、黃金公式與動態滾動預測</h3>
        <p>過去資料失效後，法人和高手會把舊的歷史表格丟掉，改用「<strong>${T('動態滾動預測','spec')}（Rolling Forecast）</strong>」——不看過去 P/E 區間，而是重新去算這場新變革能帶來多大的<strong>極限獲利</strong>。</p>

        <div class="learn-formula-box">
          <div class="learn-formula-label">黃金公式</div>
          <div class="learn-formula-eq">股價 ＝ 預估 EPS × 本益比</div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">💡</div>
          <div>
            <strong>EPS 暴放大案例：${co('5274.TW','信驊（5274）')}</strong><br>
            過去一台通用伺服器只需 1 顆 BMC 晶片；現在一台 ${T('NVIDIA NVL72','spec')} 機櫃架構需要 ${T('72 顆','spec')} BMC。出貨量直接翻了幾十倍，預估明後年的 EPS 出現非線性暴增（例如從 NT$30 直接跳到 NT$80～100）。<strong>就算本益比不變，光靠 EPS 的暴放大，就能解釋為什麼股價可以創歷史新高。</strong>
          </div>
        </div>

        <h3 class="learn-h3">三、本夢比：買的是「無法證偽的未來」</h3>
        <p>當股價創歷史新高，連明年預估 EPS 都快解釋不了當下股價時，市場進入最瘋狂也最唯心的階段——</p>

        <div class="learn-compare-grid">
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('本益比','spec')}（P/E）</div>
            <div class="learn-compare-sub">Price-to-Earnings</div>
            <p>用<strong>已實現或可預測的 EPS</strong> 來估價。歷史上有跡可循，分析師可以建模驗證。</p>
            <p>適用場景：公司處於正常成長軌道，業務模式無根本改變。</p>
          </div>
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('本夢比','dream')}（P/Dream）</div>
            <div class="learn-compare-sub">Price-to-Dream Ratio</div>
            <p>買的是一個「<strong>當下無法被證明，但也無法被否定（無法證偽）</strong>」的宏大夢想。</p>
            <p>歷史新高前方沒有「學長（歷史套牢區）」在賣股，天空沒有天花板，熱錢不斷湧入把本益比主觀估計值推到 ${T('50～60倍','spec')}。</p>
          </div>
        </div>

        <h3 class="learn-h3">實戰結論：看到創新高，第一個動作是什麼？</h3>

        <div class="learn-role-grid">
          <div class="learn-role-card">
            <div class="learn-role-title">😰 平庸的投資人</div>
            <p>「這比過去歷史<strong>貴太多了</strong>」→ 提早下車 → 錯失後面最肥美的翻倍行情。</p>
          </div>
          <div class="learn-role-card">
            <div class="learn-role-title">🎯 頂尖的投資人</div>
            <p>「公司一定發生了過去歷史<strong>沒發生過的大事</strong>」→ 立刻修正模型，放棄舊資料，評估公司最新的<strong>未來極限獲利能力</strong>。</p>
          </div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">📌</div>
          <div>股市永遠迷人，因為它是一門<strong>永遠在修正過去、擁抱未來的動態心理學</strong>。遇到創新高股票，不要先問「貴不貴」，而是先問：<em>「它的基因突變了什麼？」</em></div>
        </div>
      `
    },

    {
      id: 'foplp-tgv',
      icon: '🔲',
      title: 'FOPLP vs TGV：次世代先進封裝雙引擎',
      html: `
        <p class="learn-lead">這兩者是半導體新聞裡最常被混淆的名詞。直接說結論：<strong>${T('FOPLP','spec')} 是封裝的「排版生產方式（方法論）」；${T('TGV','spec')} 是在玻璃上「垂直打孔導通的核心技術」</strong>。兩者的關係像「舞台與特技」——FOPLP 搭好方形舞台，TGV 是在舞台採用玻璃材料時必須施展的硬核特技。</p>

        <div class="learn-compare-grid">
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('FOPLP','spec')} 面板級扇出封裝</div>
            <div class="learn-compare-sub">Fan-Out Panel Level Packaging</div>
            <p><strong>本質：「排版形狀與面積」的製程革命。</strong></p>
            <p>傳統封裝用<strong>圓形晶圓</strong>排晶片；FOPLP 改用像 LCD 面板廠那樣的<strong>方形大面板</strong>去排晶片，一次完成大面積曝光與封裝。</p>
            <p>⬆ 方形排晶片利用率高、廢邊少、產出大 → <strong>成本降低</strong></p>
            <div class="learn-tag-row">${T('由圓轉方','spec')} ${T('成本為王','pro')} ${T('Warpage 是大敵','con')}</div>
          </div>
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('TGV','spec')} 玻璃穿孔技術</div>
            <div class="learn-compare-sub">Through Glass Via</div>
            <p><strong>本質：「材料與垂直導通」的微細加工技術。</strong></p>
            <p>當封裝改用「玻璃」當底座（極度平整、不變形、低損耗），問題出現：玻璃是絕緣體，訊號怎麼從晶片傳到下層？</p>
            <p>→ 用高精密雷射在玻璃上轟出數百萬個微米級垂直通孔（Via），填入銅，讓電流縱向穿透玻璃。</p>
            <div class="learn-tag-row">${T('訊號損耗極低','pro')} ${T('不翹曲','pro')} ${T('加工難度極高','con')}</div>
          </div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">🎯</div>
          <div><strong>一句話總結：</strong>${T('FOPLP','spec')} 決定封裝是「方形大面積」以追求極致成本；${T('TGV','spec')} 則是封裝採用「玻璃」這種完美材料時，解決晶片訊號上下導通的「雷射打孔特技」。</div>
        </div>

        <h3 class="learn-h3">兩者交織：玻璃基板面板級封裝（Glass Substrate FOPLP）</h3>
        <p>當兩者結合，就是目前半導體界最頂級的次世代方案：</p>
        <div class="learn-flow">
          <div class="learn-flow-block lf-l0">
            <div class="learn-flow-layer">舞台</div>
            <div class="learn-flow-title">${T('FOPLP','spec')} 方形大面板</div>
            <p>方形排晶片，產量最大、成本最低</p>
          </div>
          <div class="learn-flow-arrow">↓ 面板材料選用玻璃</div>
          <div class="learn-flow-block lf-l1">
            <div class="learn-flow-layer">材料升級</div>
            <div class="learn-flow-title">${T('玻璃基板','spec')} Glass Core Substrate</div>
            <p>超平整・不翹曲・低介電損耗，解決有機塑料基板的致命弱點</p>
          </div>
          <div class="learn-flow-arrow">↓ 玻璃是絕緣體 → 需要垂直導通</div>
          <div class="learn-flow-block lf-l1">
            <div class="learn-flow-layer">核心特技</div>
            <div class="learn-flow-title">${T('TGV','spec')} 玻璃穿孔導通</div>
            <p>雷射在玻璃上鑽孔 → 填入銅 → 訊號穿透玻璃完成上下互連</p>
          </div>
          <div class="learn-flow-arrow">↓ 商轉預測</div>
          <div class="learn-flow-block lf-l3">
            <div class="learn-flow-layer">市場時程</div>
            <div class="learn-flow-title">2027 ~ 2028 商轉量產</div>
            <p>${co('INTC','Intel')} 跑最快，${co('2330.TW','台積電')} CoPoS 技術驗證中，${co('3711.TW','日月光')} VIPack 整合 FOPLP + TGV 平台</p>
          </div>
        </div>

        <h3 class="learn-h3">為什麼「玻璃」比傳統「有機塑料基板」好？</h3>
        <div class="learn-table-wrap">
          <table class="learn-table">
            <thead><tr><th>特性</th><th>${T('有機塑料（ABF）','con')}</th><th>${T('玻璃基板','pro')}</th></tr></thead>
            <tbody>
              <tr><td>翹曲（Warpage）</td><td>❌ 熱漲冷縮變形嚴重，AI 大晶片封裝良率殺手</td><td>✅ 極度剛性，幾乎不變形</td></tr>
              <tr><td>訊號損耗</td><td>❌ 有機材料介電損耗高，高頻訊號衰減明顯</td><td>✅ 低介電損耗（Low Dk/Df），1.6T/3.2T 高頻適配</td></tr>
              <tr><td>線路精細度</td><td>❌ 線寬/間距（L/S）難以小於 10μm</td><td>✅ 玻璃表面極平整，L/S 可達 2μm 以下</td></tr>
              <tr><td>加工難度</td><td>✅ 成熟製程，設備廠商多</td><td>❌ 脆、硬、絕緣，需 TGV 雷射鑽孔，難度極高</td></tr>
              <tr><td>成本</td><td>✅ 現階段成本低</td><td>❌ 目前加工成本高，量產後成本下降</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="learn-h3">台灣玻璃基板生態供應鏈</h3>
        <div class="learn-table-wrap">
          <table class="learn-table">
            <thead>
              <tr><th>角色</th><th>公司</th><th>技術定位</th><th>商轉時程</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>${T('IC 載板（客戶）','spec')}</td>
                <td>${co('3037.TW','欣興（3037）')}</td>
                <td>Intel 玻璃基板官方 R&D 合作夥伴；FC-BGA 全球前二</td>
                <td>2027-2028 量產</td>
              </tr>
              <tr>
                <td>${T('IC 載板（客戶）','spec')}</td>
                <td>${co('8046.TW','南電（8046）')}</td>
                <td>南亞集團材料整合優勢；CoPoS 玻璃核心增層製程</td>
                <td>驗證中</td>
              </tr>
              <tr>
                <td>${T('TGV 雷射鑽孔','spec')}</td>
                <td>${co('8027.TWO','鈦昇（8027）')}</td>
                <td>TGV 雷射改質與鑽孔設備；主導「E-Core 玻璃基板大聯盟」</td>
                <td>設備驗收中</td>
              </tr>
              <tr>
                <td>${T('TGV 金屬化','spec')}</td>
                <td>${co('3580.TW','友威科（3580）')}</td>
                <td>TGV 通孔電漿去渣活化 + RDL 晶種層真空濺鍍</td>
                <td>製程驗證中</td>
              </tr>
              <tr>
                <td>${T('TGV 濕製程','spec')}</td>
                <td>${co('3583.TW','辛耘（3583）')}</td>
                <td>TGV 鑽孔後化學濕蝕刻與垂直填孔前處理</td>
                <td>製程驗證中</td>
              </tr>
              <tr>
                <td>${T('壓合・翹曲控制','spec')}</td>
                <td>${co('6664.TW','群翊（6664）')}</td>
                <td>ABF 壓合設備・真空壓膜熱風烤箱；大面積翹曲控制核心</td>
                <td>量產設備供應中</td>
              </tr>
              <tr>
                <td>${T('FOPLP 剝離設備','spec')}</td>
                <td>${co('8064.TWO','東捷（8064）')}</td>
                <td>大面積雷射載板剝離設備；FOPLP 前段雷射製程</td>
                <td>量產設備供應中</td>
              </tr>
              <tr>
                <td>${T('OSAT 整合量產','spec')}</td>
                <td>${co('3711.TW','日月光（3711）')}</td>
                <td>VIPack FOPLP + TGV 整合量產；全球 OSAT 第一</td>
                <td>2027-2028 量產</td>
              </tr>
              <tr>
                <td>${T('封裝材料','spec')}</td>
                <td>${co('3595.TW','山太士（3595）')}</td>
                <td>抗翹曲膠膜・雷射解膠層・FOPLP 製程材料</td>
                <td>出貨中</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">📈</div>
          <div><strong>投資觀察重點：</strong>
            <br>• <strong>最前線風向球：</strong>設備商（${co('8027.TWO','鈦昇')}、${co('3580.TW','友威科')}、${co('6664.TW','群翊')}）的客戶裝機驗收進度，代表良率爬坡速度
            <br>• <strong>中長線收割者：</strong>載板龍頭 ${co('3037.TW','欣興')}（Intel 指定夥伴）在 2027 年後的商轉量產良率，才是真正財報貢獻的轉折點
            <br>• <strong>最大尾部風險：</strong>Intel 玻璃基板商轉時間延遲（此技術已延遲過一次），或有機基板材料有突破性改良而降低玻璃基板的轉換動力
          </div>
        </div>
      `
    },

    {
      id: 'burn-in',
      icon: '🔥',
      title: 'AI 老化測試（Burn-in）生態解析',
      html: `
        <p class="learn-lead">在 AI 算力時代，一顆晶片出廠前必須通過「高溫高壓長時間老化測試」才能出貨。這道工序原本只是傳統半導體的常規品管，但因為 AI 晶片的高整合度與高叢集依賴性，它正在經歷一場前所未有的技術與商業革命。</p>

        <h3 class="learn-h3">一、為什麼 Burn-in 在 AI 時代變成關鍵瓶頸？</h3>

        <div class="learn-compare-grid">
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('傳統伺服器','spec')} 的容錯邏輯</div>
            <p>一台伺服器壞了，換掉那台就好。整個機房的其他伺服器<strong>照常運作</strong>，對整體業務衝擊有限。</p>
            <div class="learn-tag-row">${T('單點故障','con')} ${T('影響有限','pro')}</div>
          </div>
          <div class="learn-compare-card">
            <div class="learn-compare-head">${T('AI 算力叢集','spec')} 的零容錯邏輯</div>
            <p>一台 ${T('NVL72 機櫃','spec')} 內 72 顆 GPU 透過 ${T('NVLink','spec')} 高速互連，任何一顆 GPU 故障，<strong>整個叢集停機</strong>——需停止訓練、重啟任務，從上一個 ${T('Checkpoint','spec')} 恢復，損失從數小時到數天的算力。</p>
            <div class="learn-tag-row">${T('全群故障','con')} ${T('DPPM 要求 &lt;10','spec')}</div>
          </div>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">📊</div>
          <div>
            <strong>${T('DPPM','spec')}（Defects Per Million，每百萬顆缺陷數）</strong> 是衡量出廠品質的核心指標。<br>
            傳統消費電子可接受 500-1,000 ${T('DPPM','spec')}；${T('NVIDIA H100','spec')} 等 AI 訓練晶片要求嚴苛至 <strong>&lt;10 ${T('DPPM','spec')}</strong>。<br>
            Burn-in 正是清除「早夭型缺陷（Infant Mortality）」的關鍵工序——讓脆弱晶片在出廠前就死在測試台上，不要死在客戶的算力叢集裡。
          </div>
        </div>

        <h3 class="learn-h3">二、四大技術挑戰</h3>
        <div class="learn-impact-list">
          <div class="learn-impact-item">
            <span class="learn-impact-who">${T('①精密溫控','spec')}</span>
            <span class="learn-impact-arrow">→</span>
            <div>一台 Handler 同時承載 ${T('77 顆以上','spec')} AI 晶片，每顆功耗達 <strong>200W+</strong>，需在高達 ${T('125°C','spec')} 的測試環境下維持每顆晶片溫差 <strong>±1°C</strong> 以內，否則測試資料無效，良率分析崩潰。${co('6268.TW','鴻勁')} 是核心解決方案提供者。</div>
          </div>
          <div class="learn-impact-item">
            <span class="learn-impact-who">${T('②高壓接觸座','spec')}</span>
            <span class="learn-impact-arrow">→</span>
            <div>Burn-in Socket（老化測試座）必須在高溫下保持精準電氣接觸，同時承受每次插拔的機械疲勞。AI 晶片接腳密度暴增，${T('ASP','spec')} 從傳統 Socket 的 3-5 美元跳升至 AI 高階 Socket 的 <strong>20-50 美元以上</strong>。${co('6515.TW','穎崴')} 的同軸測試座正是這個轉型的直接受益者。</div>
          </div>
          <div class="learn-impact-item">
            <span class="learn-impact-who">${T('③CPO 光電共測','spec')}</span>
            <span class="learn-impact-arrow">→</span>
            <div>進入 ${T('CPO','spec')} 時代，晶圓老化測試需要在熱循環（${T('Thermal Cycling','spec')}）過程中同時做光電對準，精度要求在 <strong>&lt;1μm（微米）</strong> 以內。一顆晶圓熱膨脹不均就可能讓探針與接墊錯位，測試結果完全失效。${co('6223.TW','旺矽')} 正在攻關這個全球最高難度的晶圓探針台技術。</div>
          </div>
          <div class="learn-impact-item">
            <span class="learn-impact-who">${T('④晶圓級 Burn-in','spec')}</span>
            <span class="learn-impact-arrow">→</span>
            <div>傳統 Burn-in 在封裝後進行。但 ${T('CoWoS','spec')} 先進封裝成本高昂（每顆 AI 晶片封裝成本數萬美元），業界正快速推進「在晶圓切割前就做 Burn-in」，把壞品淘汰在封裝之前，大幅降低廢品損失。這是 ${co('6223.TW','旺矽')} 晶圓探針台業務的長期成長邏輯。</div>
          </div>
        </div>

        <h3 class="learn-h3">三、台灣 Burn-in 生態供應鏈</h3>
        <div class="learn-table-wrap">
          <table class="learn-table">
            <thead>
              <tr>
                <th>角色</th><th>公司</th><th>核心產品</th><th>AI 時代升級點</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${T('測試介面/Socket','spec')}</td>
                <td>${co('6515.TW','穎崴（6515）')}</td>
                <td>Cobra Socket、SLT 同軸測試座、光電共測探針卡</td>
                <td>AI 晶片高頻高壓需求驅動 Socket ${T('ASP','spec')} 翻倍，Burn-in Socket 升級浪潮直接受益</td>
              </tr>
              <tr>
                <td>${T('Handler 分類機','spec')}</td>
                <td>${co('6268.TW','鴻勁（6268）')}</td>
                <td>Burn-in Handler、FT Handler、SLT 整合平台</td>
                <td>全球 <strong>70%+</strong> 市佔；Handler 從「搬運機器手」升格「精密溫控平台」，單機 ${T('ASP','spec')} 大幅提升</td>
              </tr>
              <tr>
                <td>${T('晶圓探針台','spec')}</td>
                <td>${co('6223.TW','旺矽（6223）')}</td>
                <td>Prober 晶圓探針台、CPO 光電共測探針台</td>
                <td>晶圓級 Burn-in 趨勢 + CPO &lt;1μm 光電對準攻關；全球前段晶圓 Prober 市佔前三</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="learn-insight">
          <div class="learn-insight-icon">💡</div>
          <div><strong>投資邏輯總結：</strong>
            Burn-in 供應鏈在 AI 時代享有三重紅利：
            <br>① <strong>量的增加</strong>：AI 晶片出貨量非線性成長，老化測試需求同步跳升
            <br>② <strong>ASP 的提升</strong>：每顆 AI 晶片的測試複雜度遠高於傳統晶片，單件測試費用大幅提高
            <br>③ <strong>功能的升維</strong>：Handler/Prober 整合更多測試功能（Burn-in + FT + SLT + 光電共測），單機 ${T('ASP','spec')} 向上遷移
            <br>核心觀察指標：${T('DPPM','spec')} 良率目標 → ${T('ASP','spec')} 趨勢 → ${co('6268.TW','鴻勁')} / ${co('6515.TW','穎崴')} 毛利率是否持續上行。
          </div>
        </div>
      `
    },

    {
      id: 'key-terms',
      icon: '📖',
      title: '術語速查表',
      html: `
        <p class="learn-lead">快速查閱本網站出現的核心技術術語。</p>
        <div class="learn-glossary">
          ${[
            ['NPO', 'Near-Packaged Optics 近端封裝光學', '光模組緊鄰 ASIC 晶片放在同一基板，已進入 2026 大規模商用'],
            ['CPO', 'Co-Packaged Optics 共同封裝光學', '光引擎與 ASIC 直接熔接在同一晶圓級中介層，功耗最低但難維修'],
            ['CUDA', 'Compute Unified Device Architecture', 'NVIDIA 的 GPU 軟體平台，AI 代碼生態系護城河，相當於 L1.5 層'],
            ['HBM', 'High Bandwidth Memory 高頻寬記憶體', '疊加在 GPU 旁邊的超高速記憶體，Blackwell 用 HBM3e，Rubin 升級 HBM4'],
            ['CoWoS', 'Chip on Wafer on Substrate', '台積電的先進封裝技術，將 GPU + HBM 緊密整合於同一封裝'],
            ['NVLink', 'NVIDIA 高速晶片互聯協議', '連接同一機櫃內 GPU 的私有高速匯流排，1.8Tbps 頻寬，競爭對手難以複製'],
            ['CDU', 'Coolant Distribution Unit 冷卻液分配單元', '液冷系統核心設備，雙鴻/奇鋐主要產品，需照 NVIDIA 規格客製'],
            ['BMC', 'Baseboard Management Controller', '伺服器遠端管理晶片，新唐（4919）主要產品，一台 NVL72 機櫃需 72 顆'],
            ['SOI', 'Silicon On Insulator 絕緣矽晶圓', 'Soitec 壟斷 70-80%，矽光子晶片不可或缺的物理地基'],
            ['InP', 'Indium Phosphide 磷化銦', '高速雷射的關鍵材料，Sivers（SIVE）的核心技術'],
            ['EML', 'Electro-absorption Modulated Laser', '電吸收調製雷射，CPO 光引擎核心光源組件'],
            ['TGV', 'Through-Glass Via 穿玻璃通孔', '玻璃基板先進封裝的核心技術：雷射在玻璃上鑽孔填銅，實現垂直導通；鈦昇（8027）設備、友威科（3580）金屬化'],
            ['FOPLP', 'Fan-Out Panel Level Packaging 面板級扇出封裝', '化圓為方的封裝革命：用方形大面板取代圓晶圓排晶片，成本更低、產出更大；2027-2028 導入玻璃基板'],
            ['Glass Substrate', '玻璃基板', '以玻璃替代有機塑料作為封裝底座：不翹曲、低介電損耗、線路更精細；Intel 2026-2028 商轉，欣興（3037）是 Intel 指定台廠夥伴'],
            ['CoPoS', 'Chip on Package on Substrate', '台積電次世代封裝平台：將矽中介層部分以玻璃中介層替換，兼顧成本與電氣性能'],
            ['FC-BGA', 'Flip Chip Ball Grid Array', 'AI 晶片高階封裝基板；欣興（3037）、南電（8046）主力產品，隨 AI GPU 需求爆增'],
            ['Warpage', '翹曲變形', '大面積封裝因熱漲冷縮導致的基板彎曲，是 FOPLP 最大良率殺手；群翊（6664）壓合設備、山太士（3595）抗翹曲膠膜是解決方案'],
            ['ASP', 'Average Selling Price 平均銷售單價', '分析散熱、模組廠毛利結構的關鍵指標'],
            ['P/E Re-rating', '本益比上修', '股價創新高時，市場重新給予更高的本益比倍數，原因是公司基因突變進入新賽道'],
            ['本夢比', 'Price-to-Dream Ratio', '連預估 EPS 都解釋不了股價時的估值邏輯；買的是「無法被證偽的宏大夢想」'],
            ['Burn-in', '老化測試（高溫高壓加速壽命測試）', '將晶片置於高溫高壓環境長時間運作，篩除「早夭型缺陷（Infant Mortality）」，AI 晶片要求 DPPM <10'],
            ['DPPM', 'Defects Per Million 每百萬顆缺陷數', '出廠品質核心指標；傳統消費電子 500-1,000 DPPM；AI 訓練晶片要求 <10 DPPM，因整個算力叢集零容錯'],
            ['Handler', 'Burn-in Handler 老化測試分類機', '執行 Burn-in 的自動化機械平台，鴻勁（6268）全球市佔 70%+；AI 時代升格為精密溫控測試整合平台'],
            ['Prober', '晶圓探針台', '在晶圓切割前接觸探針進行電性測試的機台；旺矽（6223）為全球前三，CPO 光電共測是下一個技術制高點'],
            ['PEG', 'Price/Earnings to Growth 市盈增長比', 'P/E 除以 EPS 成長率，<1.0 表示成長被低估，>1.14 開始過熱'],
            ['PCIe', 'Peripheral Component Interconnect Express', 'CPU 與 GPU 之間的標準高速介面，Gen 6 是下一代'],
            ['CXL', 'Compute Express Link', '新一代 CPU-GPU-記憶體互連協議，解決傳統 PCIe 延遲瓶頸'],
          ].map(([term, full, desc]) => `
            <div class="learn-glossary-item">
              <div class="learn-glossary-term">${T(term,'spec')}</div>
              <div class="learn-glossary-full">${full}</div>
              <div class="learn-glossary-desc">${desc}</div>
            </div>
          `).join('')}
        </div>
      `
    },
  ];

  // ── Render ────────────────────────────────────────────────────
  const main = document.getElementById('learnMain');
  const nav  = document.getElementById('learnNav');

  SECTIONS.forEach(sec => {
    // Nav link
    const a = document.createElement('a');
    a.className = 'learn-nav-link';
    a.href = '#' + sec.id;
    a.innerHTML = `<span class="learn-nav-icon">${sec.icon}</span>${sec.title}`;
    a.addEventListener('click', () => {
      document.querySelectorAll('.learn-nav-link').forEach(l => l.classList.remove('active'));
      a.classList.add('active');
    });
    nav.appendChild(a);

    // Section
    const section = document.createElement('section');
    section.className = 'learn-section';
    section.id = sec.id;
    section.innerHTML = `
      <h2 class="learn-section-title">${sec.icon} ${sec.title}</h2>
      ${sec.html}
    `;
    main.appendChild(section);
  });

  // Scrollspy
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        document.querySelectorAll('.learn-nav-link').forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  document.querySelectorAll('.learn-section').forEach(s => observer.observe(s));
})();

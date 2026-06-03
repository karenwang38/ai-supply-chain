// 產業鏈資料 — 新增公司只需在對應 layer 的 companies 陣列加入物件
// ticker 格式: "2454.TW" / "TSLA" / "SOI.PA" / "4063.JP"

const LAYERS = [
  { id: 0, name: "底層物理材料與設計工具", emoji: "🧱", color: "#7c3aed",
    desc: "整個科技帝國的畫布與畫筆，掌握底層專利才能在物理世界實現 AI 晶片與光學傳輸" },
  { id: 1, name: "上游－晶片設計、核心組件與半導體製程", emoji: "🧩", color: "#2563eb",
    desc: "晶片設計、晶圓製造、光學元件、測試設備的核心供應層" },
  { id: 2, name: "中游－功能模組與熱能/電力系統整合", emoji: "📦", color: "#0891b2",
    desc: "將晶片、雷射、光收發元件、散熱管線進行第一階段功能性打包" },
  { id: 3, name: "下游－最終系統設備商（整機組裝）", emoji: "🖥️", color: "#c2410c",
    desc: "組裝成可直接插電、插網線、放進機房的完整巨大機台" },
  { id: 4, name: "終端客戶－雲端大廠與綠能營運（金主）", emoji: "🏢", color: "#b45309",
    desc: "整個 AI 帝國的終極金主，負責蓋起資料中心並將算力轉化為軟體服務" },
];

const COMPANIES = {

  // ── Layer 0 ──────────────────────────────────────────────────
  "7610.TW": {
    id: "7610.TW", name: "聯友金屬-創", ticker: "7610", flag: "🇹🇼",
    layer: 0, category: "戰略稀有金屬回收",
    badge: "亞洲唯一非紅鎢供應鏈",
    tagline: "中國封鎖受益者：循環冶金卡位地緣政治紅利",
    overview: "聯友金屬（7610，創新板）是台灣首家以濕法冶金循環經濟生產鎢酸鈉（Na₂WO₄）的專業製造商，2024 年全球鎢酸鹽出口排名第二（市佔 26%）。核心競爭力：中國對美日實施「一單一證」戰略管制，導致亞洲高純度鎢粉嚴重斷料，聯友是「中國以外亞洲唯一的非紅供應鏈廠商」。美日大廠面臨斷料危機甚至空運搶料，直接推升銷貨單價。2026 年 Q1 單季營收 10.02 億元（YoY +484%）、毛利率爆衝至 74%、EPS 10.87 元。短期估值極端（P/B >60x），但地緣政治壟斷地位支撐高溢價，2026 下半年氧化鎢產線、7 月新設備量產為關鍵觀察點。",
    technology: {
      core: "濕法冶金（Hydrometallurgy）技術處理廢硬質合金與二次鎢鈷資源",
      products: [
        "鎢酸鈉（Na₂WO₄）— 主力產品，2024 全球出口第二（26%市佔）",
        "APT（仲鎢酸銨）— 2026 年建置中，產品高值化第一步",
        "氧化鎢（WO₃）— 2026 年建置，計價含氧元素直接增 26.1% 毛利",
        "鈷金屬副產品 — 代工模式可固定取得 6-10% 鈷，結構性壓低成本",
        "鎢粉／碳化鎢（2027 屏科廠）— 2027/09 量產，總投資 6.5 億"
      ],
      advantages: [
        "濕法冶金專利 + ITIA/RMI/UL2809 認證，可處理高難度混合廢料",
        "M 系列低帳面成本庫存：可抵抗國際鎢價回檔 30~40% 的毛利防禦水庫",
        "中國鎢出口增值稅無法退稅，聯友天然享有 13% 成本利差",
        "NDAA（美國國防採購法）明確排除中俄來源，聯友為合規替代唯一選項"
      ]
    },
    marketShare: {
      global: "26%（鎢酸鹽出口）",
      desc: "全球鎢酸鹽出口第二，僅次於中國（29%）。菲律賓 21%、越南 10% 為主要競爭者，但技術主要是物理燒結，難處理高難度混料",
      competitors: [
        { name: "中國鎢企", share: "29%", threat: "high", note: "受出口管制反而利好聯友" },
        { name: "菲律賓廠商", share: "21%", threat: "medium", note: "傳統礦山，設備老舊" },
        { name: "越南廠商", share: "10%", threat: "low", note: "規模小，技術落後" }
      ]
    },
    customers: {
      major: [
        { name: "AMJ（日本Alconix集團）", pct: "~24%", note: "關係人客戶，日本法人董事母公司旗下，Q1達2.40億元" },
        { name: "日本硬質合金廠", pct: "~35%", note: "中央電氣、關東電化、Fuji Die 等中游材料廠" },
        { name: "歐美軍工/半導體廠", pct: "~25%", note: "美國NDAA法規下搶料客戶，空運急單頻現" },
        { name: "台灣及其他", pct: "~16%", note: "其他亞洲中游材料廠" }
      ],
      breakdown: "日本客戶為大宗（AMJ+日本材料廠~59%），歐美軍工急單快速增加；目標逐步直接對接 Toyota、BMW、歐美軍工承包商等終端品牌"
    },
    outlook: {
      positive: [
        "2026/07 新設備量產：4 月底裝機完成試車中，7 月起產出斜率性噴發",
        "氧化鎢產線 2026 建置：計價含氧元素，公式上直接多拿 26.1% 毛利，且鎢酸鈉產能全轉移至高值化品",
        "2027/09 屏科廠量產：鎢粉＋碳化鎢產線，總投資 6.5 億，產能增幅 100%",
        "中國「一單一證」管制長期化：供給缺口 8,000~10,000 噸，聯友定價權穩固",
        "鈷價翻倍（~$54/kg）：副產品收益結構性提升，攤低自售成本"
      ],
      catalysts: [
        "7 月新設備量產出貨量（最重要近期觀察指標）",
        "氧化鎢產線正式開出時間點（2026 Q3-Q4）",
        "廢清法官司一審判決結果（下半年風險事件）",
        "可轉債（CB）8 億元轉換進度與籌碼壓力觀察"
      ]
    },
    stockMetrics: {
      pe: "~98x (TTM) / ~40x (預估)",
      eps: "~16.32元 (TTM) / Q1單季10.87元",
      epg: "虧轉盈，YoY 極高",
      peg: "~1.14（1,600元 / G=35%）",
      marketCap: "~NT$780億（創新板）",
      week52High: "1,600元+",
      week52Low: "創新板，流動性有限",
      divYield: "0%"
    ,
      sharesOut: "NT$3.9億"
    },
    relatedIntel: ["2026-06-01-7610-kanghe", "2026-06-02-7610-demand"],
    notes: `【聯友金屬 (7610) 完整分析備忘】
→ 詳細法人報告：市場情報「康和投顧 2026/06/01 深度速報」
─────────────────────────────
■ 三大實打實需求（地緣政治 + 技術升級硬逼出來）

1. 日本斷料危機（最急迫）
   中國 2026/02～04 對日鎢加工品出口量歸零
   Toyota、工具機、精密半導體大廠庫存見底
   聯友 = 中國外亞洲唯一非紅精煉商
   → 日本客戶捧錢求貨，空運費 $17,000（海運僅 $3,000）也願意付

2. 美國國防軍工去中俄化（長線大單）
   NDAA 法規：2027/01/01 起國防採購鎢鈷不得含中俄來源
   川普「Project Vault」戰略儲備計畫（2026/02 啟動）
   → 美國 DLA 2025 財年鎢採購量暴增 666%
   聯友持有 ITIA / RMI / UL2809 三大國際認證 = 軍工入場券

3. 新能源技術升級（長線結構需求）
   光伏鎢絲滲透率：20% → 40%（2026），單產業年耗 4,500+ 噸
   子公司金屬鈷粉 2026 Q2 量產，單價比硫酸鈷高 30-40%
   → 航太高溫合金 + 下一代鋰電池非中國鈷源

■ 超前部署算盤：借錢→擴產→吃大單
  現有：鎢酸鈉（低價品）
     ↓ 2026 H2
  APT / 氧化鎢（+26.1% 計價毛利，純靠氧元素質量增加）
     ↓ 2027 Q4
  鎢粉 / 碳化鎢（屏科廠，投資 6.5 億，產能 +100%）

■ 2026 Q1 財務爆炸
  • 營收 10.02 億（YoY +484%）
  • 毛利率 74%，營益率 66%，淨利率 52%
  • 單季 EPS 10.87 元（法人估 2026 全年 71.84 元）

■ 估值動態（股價 1,600 元）
  • 歷史 P/E：~98x ／ 動態 P/E：~40x
  • PEG：~1.14（已突破 1.0 警戒線）
  • P/B：>60x（財報狗通過率僅 17%！）

■ 2026/06 窒息期警告（最關鍵的短期觀察）
  6月底：日本大筆現金才到期入帳
  現在：最缺現金的窒息期
  管理層押上 11.22 億個人擔保，賭的是：
    ① 7月新產能如期開出
    ② 日本款項順利入帳
    ③ 8億CB順利拿到現金
  → 三件事同時成立 = 上天堂；任一失敗 = 容錯率極低

■ 危險三大炸彈
  1. 廢清法起訴（2025/08 屏東地檢，尚未審結）
  2. 個人擔保銀行借款 11.22億（關鍵人風險）
  3. 8億CB + 2,000仟股現增 → 籌碼稀釋

■ 護城河
  • 中國「一單一證」管制 → 亞洲唯一非紅供應鏈
  • M系列低成本庫存 → 抵抗鎢價回檔 30-40%
  • 中國出口增值稅差 13%（天然成本利差）`,
    challenges: [
      "P/B超過60倍，財報狗地雷股通過率僅17%，應收帳款與存貨Q1單季激增4.07億",
      "8億元零息可轉債 + 2,000仟股現增：高位籌碼稀釋壓力，套利空間大",
      "創新板合格投資人限制，二級市場流動性有限",
      "石墨等原料受管制，屏科廠擴產手續尚在辦理，執行風險存在"
    ],
    risks: [
      "廢清法官司一審利空：若有罪判決，營運許可與銀行授信將面臨重大衝擊",
      "董事長/總經理個人擔保 11.22億：關鍵人士異動將直接引發銀行授信危機",
      "7月新設備若延遲或良率不如預期，高估值立即崩解（容錯率近乎為零）",
      "國際鎢價若大幅回落（雖有M系列防禦，但超過40%回落仍傷毛利）",
      "中國管制若鬆綁或被替代品取代，非紅溢價消失"
    ]
  },

  "SOI": {
    id: "SOI", name: "Soitec", ticker: "SOI.PA", flag: "🇫🇷",
    layer: 0, category: "底層特殊材料晶圓",
    badge: "市佔 70-80%",
    tagline: "全球 SOI 晶圓絕對霸主",
    overview: "Soitec 是全球高端絕緣矽（SOI）晶圓的絕對霸主，市佔率達 70-80%。其 SOI 晶圓是矽光子晶片（Silicon Photonics）不可或缺的物理地基，也是 CPO（共封裝光學）生態系能否突破台積電私有架構壟斷的關鍵材料。【AMD＋格羅方德＋聯發科】反壟斷聯盟選擇以頂級 Soitec SOI 材料為基底，正是因為 GF 的 Fotonix 平台依賴此材料才能達到 1.6T 傳輸效能。",
    technology: {
      core: "絕緣矽（SOI）與應變矽（Strained-SOI）晶圓製造技術，SmartCut™ 薄膜轉移專利技術",
      products: ["Smart Cut SOI 晶圓", "RF-SOI（射頻用途）", "FD-SOI（完全空乏式，功耗極低）", "矽光子用 SOI 底板"],
      advantages: ["SmartCut™ 專利壁壘深厚，短期無法被模仿", "矽光子需求強勁，AI 資料中心光互連採用量快速成長", "與信越化學的技術授權合作，確保產能供應"]
    },
    marketShare: {
      global: "70-80%",
      desc: "在 SOI 晶圓細分市場幾乎是壟斷地位。主要競爭者為 SUMCO（住友電工旗下），但在高端 SOI 方面差距明顯。",
      competitors: [
        { name: "SUMCO（日）", share: "~10%", note: "矽晶圓龍頭，SOI 比重低", threat: "low" },
        { name: "信越化學", share: "技術合作", note: "SOI 技術授權合作夥伴，非直接競爭者", threat: "low" },
        { name: "Okmetic（芬蘭）", share: "~5%", note: "特殊 SOI 應用", threat: "low" },
      ]
    },
    customers: { major: [
      { name: "格羅方德（GF）", note: "CPO/Fotonix 平台核心材料", pct: "~35%" },
      { name: "三星", note: "RF-SOI 射頻元件", pct: "~25%" },
      { name: "ST Microelectronics", note: "FD-SOI 生態系", pct: "~15%" },
      { name: "Intel", note: "矽光子研發", pct: "~10%" },
      { name: "其他", note: "各類半導體客戶", pct: "~15%" },
    ], breakdown: "GF 的 Fotonix 矽光子平台是最重要的新興客戶群，直接受益於 AMD/GF 反壟斷聯盟的崛起" },
    outlook: {
      positive: ["AI 資料中心光互連（CPO/NPO）需求預計2025-2028年年增30%+", "RF-SOI 受 5G/6G 基礎建設持續拉動", "AMD+GF 生態系擴大，Soitec 成唯一指定供應商"],
      catalysts: ["GF Fotonix 平台量產時程（2026-2027）", "POET Technologies 採用 SOI 基底擴大"]
    },
    stockMetrics: {
      pe: "96.1x",
      eps: "€-6.21",
      epg: "-34.7%",
      peg: "20.52",
      marketCap: "$6.3B",
      week52High: "€200.50",
      week52Low: "€22.62",
      divYield: "0%"
    ,
      sharesOut: "29.5M"
    },
    challenges: ["資本支出龐大，擴產周期長", "法國地緣政治風險（歐洲半導體自主化政策可能影響出口）", "客戶集中度偏高（GF/三星佔比重）"],
    risks: ["SOI 晶圓需求若被其他技術路線替代（如 GaN-on-Si）", "匯率風險（歐元計價，受美元波動影響獲利）", "擴產速度若跟不上 CPO 放量需求"]
  },

  "4063.JP": {
    id: "4063.JP", name: "信越化學", ticker: "4063.JP", flag: "🇯🇵",
    layer: 0, category: "底層特殊材料晶圓",
    badge: "全球晶圓龍頭",
    tagline: "全球矽晶圓出貨量第一",
    overview: "信越化學是全球矽晶圓出貨量最大的企業，同時也是 Soitec SmartCut™ 技術的主要授權合作夥伴，提供 Soitec 所需的基礎矽晶圓原材料。在半導體材料領域涵蓋矽晶圓、光阻材料、PVC 等多個核心品類。",
    technology: {
      core: "CZ法（柴可拉斯基法）與 FZ法單晶矽晶圓，300mm 大口徑晶圓技術",
      products: ["300mm 矽晶圓（主流 AI 晶片製程）", "200mm 晶圓（功率半導體）", "光阻材料（EUV 光阻）", "有機矽材料"],
      advantages: ["規模經濟最強，良率與均一性業界第一", "EUV 光阻材料獨特技術壁壘", "垂直整合，從石英砂到成品晶圓一條龍"]
    },
    marketShare: { global: "~28%（矽晶圓全球份額）", desc: "與 SUMCO 合計佔全球矽晶圓約 60%，形成雙寡頭壟斷", competitors: ["SUMCO（日）", "Siltronic（德）", "SK Siltron（韓）"] },
    customers: { major: ["台積電", "三星", "Intel", "SK Hynix"], breakdown: "全球前十大半導體廠幾乎全部是其客戶" },
    outlook: { positive: ["AI 晶片需求推動 300mm 晶圓長期供不應求", "EUV 光阻材料隨先進製程普及快速成長"], catalysts: ["台積電 2nm/1.4nm 量產拉動高規格晶圓需求"] },
    stockMetrics: {
      pe: "30.5x",
      eps: "¥252.14",
      epg: "-6.3%",
      peg: "2.16",
      marketCap: "¥14.3T",
      week52High: "¥7,930",
      week52Low: "¥4,280",
      divYield: "1.37%"
    },
    challenges: ["日圓貶值影響採購成本但有利出口獲利", "中國半導體禁令可能影響部分市場"],
    risks: ["晶圓景氣周期性（2023年曾大幅去庫存）", "新進者（中芯晶圓等中資）持續追趕"]
  },

  "6488.TW": {
    id: "6488.TW", name: "環球晶圓", ticker: "6488.TW", flag: "🇹🇼",
    layer: 0, category: "底層特殊材料晶圓",
    badge: "全球矽晶圓第三大、轉型進行式",
    tagline: "從矽晶圓到先進封裝材料的關鍵一躍",
    overview: "環球晶（6488）是台灣最大矽晶圓廠，全球排名第三（市佔 ~17%），客戶覆蓋台積電、三星、英飛凌等一線廠商。關鍵認知：晶圓廠景氣落底後，矽晶圓通常 lag 2～3 季才回溫，因為晶圓廠優先消化庫存。目前正同步推進三大轉型：① 12吋先進晶圓占比拉高至 65% 目標、② 310×310mm 方形晶圓（FOPLP）Q4 2026 量產、③ 美國 MEMC 廠 12吋 SOI 晶圓瞄準矽光子（CPO）應用。短期 Q1 2026 折舊增加壓制獲利，H2 2026 有望價格調漲，為觀察重點。",
    technology: {
      core: "CZ 法矽晶圓、SOI 晶圓、SiC 基板、FOPLP 方形晶圓",
      products: [
        "300mm（12吋）先進矽晶圓 — 目標占營收 65%",
        "310×310mm 方形晶圓 — FOPLP 先進封裝用，Q4 2026 量產",
        "12吋 SOI 晶圓（美國 MEMC 廠）— CPO/矽光子應用，GFS 預訂",
        "200mm/150mm 矽晶圓",
        "SiC 基板（碳化矽）— 電動車與資料中心電源"
      ],
      advantages: [
        "FOPLP 方形晶圓唯一量產時程最早的矽晶圓廠，先佔位優勢",
        "美國 MEMC 廠生產 SOI，本地化供應矽光子材料，受益 CHIPS Act $4.06億補貼",
        "台灣本土最大廠，與台積電地緣近，供應鏈黏著度高",
        "SiC 布局早，已量產切入歐洲車用半導體廠"
      ]
    },
    marketShare: {
      global: "~17%",
      desc: "全球第三大矽晶圓廠（信越 ~27%、SUMCO ~24%、環球晶 ~17%），台灣最大。先進 12吋晶圓占比持續提升中",
      competitors: [
        { name: "信越化學", share: "27%", threat: "high", note: "全球最大，技術領先" },
        { name: "SUMCO", share: "24%", threat: "high", note: "日本第二大，12吋主力" },
        { name: "Siltronic", share: "12%", threat: "medium", note: "環球晶持股，策略夥伴" },
        { name: "SK Siltron", share: "10%", threat: "medium", note: "韓系，三星供應商" }
      ]
    },
    customers: {
      major: [
        { name: "台積電", pct: "~35%", note: "最大客戶，12吋先進晶圓主要買家" },
        { name: "三星", pct: "~15%", note: "Logic & Memory 晶圓需求" },
        { name: "英飛凌", pct: "~12%", note: "SiC 基板主要客戶，車用" },
        { name: "聯電/力積電", pct: "~13%", note: "台灣成熟製程廠" },
        { name: "GFS（GlobalFoundries）", pct: "~10%", note: "SOI 晶圓預訂，矽光子應用" },
        { name: "其他", pct: "~15%", note: "歐美日各晶片廠" }
      ],
      breakdown: "台積電占大宗，SOI/矽光子客戶（GFS 等）為新成長向量，SiC 客戶以歐洲車用廠為主"
    },
    outlook: {
      positive: [
        "H2 2026 矽晶圓價格調漲計畫：供需改善後有望啟動，直接拉升毛利",
        "FOPLP 方形晶圓 Q4 2026 量產：台積電/日月光 CoWoS-R 潛在供應商，先佔材料位置",
        "SOI 晶圓需求爆發：CPO（Co-Packaged Optics）矽光子需求 2026-2028 快速放量，MEMC 廠獨家供應",
        "美國 CHIPS Act $4.06億補貼：大幅降低 MEMC 廠資本支出負擔",
        "SiC 市場 2025-2030 CAGR 30%+：英飛凌、安森美長約支撐"
      ],
      catalysts: [
        "H2 2026 晶圓均價是否調漲（最重要觀察指標）",
        "FOPLP 方形晶圓首批客戶確認（Q3-Q4 2026）",
        "GFS SOI 晶圓訂單正式量產出貨",
        "Q2 2026 法說會：折舊高峰是否過去、毛利率回升訊號"
      ]
    },
    stockMetrics: {
      pe: "N/A",
      eps: "虧轉盈進行中",
      epg: "折舊壓制中",
      peg: "N/A",
      marketCap: "~$4.5B",
      week52High: "N/A",
      week52Low: "N/A",
      divYield: "~1.5%"
    ,
      sharesOut: "NT$38.2億"
    },
    notes: `【環球晶關鍵數字備忘】
─────────────────────────────
■ 轉型三軸
  • 12吋先進晶圓：目標占營收 65%（現況 ~50%）
  • 方形晶圓 310×310mm：Q4 2026 量產，FOPLP 先進封裝用
  • SOI 晶圓（美國 MEMC 廠）：矽光子 / CPO 用，GFS 已預訂

■ 美國布局
  • 德州 GWA 廠：2025/05 啟用，12吋先進晶圓產能
  • MEMC 廠：SOI 晶圓，CHIPS Act 獲補貼 $4.06 億

■ 短期壓力
  • Q1 2026 折舊大幅增加（GWA廠攤提），壓制 EPS
  • 矽晶圓景氣 lag 晶圓廠 2-3 季，現仍在回溫等待期

■ 關鍵觀察
  • H2 2026 價格調漲是否啟動（供需拐點信號）
  • FOPLP 客戶是否正式確認（台積電或封測廠）
  • Siltronic 持股：策略夥伴，持股估值影響帳上淨值

■ 競爭地位
  全球第三（~17%）：信越27% > SUMCO 24% > 環球晶 17%
  FOPLP 方形晶圓：全球最早量產計畫之一`,
    challenges: [
      "折舊高峰期（2026）：GWA + MEMC 兩廠同步攤提，短期壓制獲利能力",
      "矽晶圓景氣 lag：晶圓廠庫存去化前，漲價談判難度高",
      "FOPLP 方形晶圓量產良率：310mm 大尺寸切割技術尚未完全驗證",
      "SiC 中國競爭者（天科合達等）低價搶市，侵蝕毛利"
    ],
    risks: [
      "H2 2026 漲價若未能落實，股價估值難以支撐",
      "台積電/客戶若延遲 FOPLP 布局，方形晶圓需求落空",
      "Siltronic 持股估值波動影響帳面淨值，干擾財報解讀",
      "美中貿易戰升級：MEMC 廠美國客戶若受限，SOI 需求縮減",
      "電動車銷量不如預期：SiC 基板需求增速放緩"
    ]
  },

  "SNPS": {
    id: "SNPS", name: "新思科技", ticker: "SNPS", flag: "🇺🇸",
    layer: 0, category: "EDA 設計軟體與 IP 授權",
    badge: "EDA 雙寡頭之一",
    tagline: "半導體設計工具壟斷者",
    overview: "新思科技是全球最大的 EDA（電子設計自動化）軟體公司，與益華電腦（Cadence）形成 EDA 市場近 70% 的雙寡頭壟斷。沒有 Synopsys 的工具，幾乎無法完成現代先進晶片設計。聯發科、世芯、創意等所有 ASIC 設計廠都是其客戶。",
    technology: {
      core: "EDA 軟體套件、晶片 IP 授權、AI輔助設計（DSO.ai）",
      products: ["Design Compiler（邏輯合成）", "IC Compiler（佈局繞線）", "VCS（電路模擬驗證）", "DesignWare IP（PHY/SerDes IP）", "DSO.ai（AI 驅動設計優化）"],
      advantages: ["學習曲線極高，客戶黏著度極強", "DesignWare IP 是先進封裝互連的重要授權來源", "軟體授權商業模式，毛利率 80%+"]
    },
    marketShare: { global: "~32%（EDA 市場）", desc: "與 Cadence 合計約 65-70%，形成事實壟斷", competitors: ["益華電腦（Cadence）", "Siemens EDA（前 Mentor）"] },
    customers: { major: ["台積電", "英特爾", "三星", "聯發科", "高通", "所有主要晶片設計廠"], breakdown: "全球前 20 大半導體公司 100% 是其客戶" },
    outlook: { positive: ["AI 晶片設計複雜度倍增，EDA 工具需求升級", "DSO.ai 將 EDA 流程 AI 化，打開新收費空間"], catalysts: ["Ansys 收購（2024年完成），擴入 EDA+仿真整合市場"] },
    stockMetrics: {
      pe: "108.6x",
      eps: "$4.38",
      epg: "-96.0%",
      peg: "3.02",
      marketCap: "$91.1B",
      week52High: "$651.73",
      week52Low: "$376.18",
      divYield: "0%"
    ,
      sharesOut: "148M"
    },
    challenges: ["美國對中國出口限制（部分中資晶片廠無法使用）", "Ansys 收購整合的執行風險"],
    risks: ["AI 驅動的開源 EDA 工具崛起威脅（長期）", "地緣政治導致中國市場萎縮"]
  },

  "CDNS": {
    id: "CDNS", name: "益華電腦", ticker: "CDNS", flag: "🇺🇸",
    layer: 0, category: "EDA 設計軟體與 IP 授權",
    badge: "EDA 雙寡頭之一",
    tagline: "類比/混合信號設計領導者",
    overview: "益華電腦（Cadence）是全球第二大 EDA 軟體公司，在類比電路、混合信號設計與驗證領域與新思科技分庭抗禮。Virtuoso 平台是業界公認類比晶片設計的標準工具，CPO 光電整合晶片的光學/電路協同設計大量依賴 Cadence 工具。",
    technology: {
      core: "Virtuoso 類比設計平台、Spectre 電路模擬器、Palladium 硬體加速驗證",
      products: ["Virtuoso Studio（類比 IC 設計）", "Spectre X 模擬器", "Palladium Z2（硬體模擬加速）", "Cerebrus（AI 驅動晶片優化）"],
      advantages: ["類比/混合信號設計無可取代", "AI Cerebrus 工具縮短設計周期 20-30%", "硬體加速驗證業務快速成長"]
    },
    marketShare: { global: "~28%（EDA 市場）", desc: "類比設計工具市佔接近50%，為絕對領導者", competitors: ["新思科技（Synopsys）", "Siemens EDA"] },
    customers: { major: ["所有主要 fabless 晶片廠", "Intel", "台積電", "高通", "博通"], breakdown: "與 Synopsys 客戶高度重疊，幾乎是所有先進晶片廠的必用工具" },
    outlook: { positive: ["AI 晶片光電整合設計需求大增", "硬體模擬加速器市場高速成長"], catalysts: ["光子設計工具（Clarity 3D Solver）滲透 CPO 市場"] },
    stockMetrics: {
      pe: "87.8x",
      eps: "$4.27",
      epg: "+23.0%",
      peg: "3.56",
      marketCap: "$103.4B",
      week52High: "$383.80",
      week52Low: "$262.75",
      divYield: "0%"
    ,
      sharesOut: "270M"
    },
    challenges: ["與 Synopsys 競爭激烈，部分客戶傾向單一供應商", "中國市場受出口管制影響"],
    risks: ["AI 驅動設計工具若降低對傳統 EDA 依賴", "地緣政治加劇"]
  },

  // ── Layer 1 ──────────────────────────────────────────────────
  "NVDA": {
    id: "NVDA", name: "輝達", ticker: "NVDA", flag: "🇺🇸",
    layer: 1, category: "AI 算力平台制定者",
    spanLayers: [1, 2, 3],
    badge: "AI 產業鏈制高點",
    tagline: "向下發射 Spec，吞噬整條供應鏈利潤",
    overview: "NVIDIA 是整條 AI 算力產業鏈的絕對制高點。它不只設計晶片（Blackwell / Rubin），更透過 CUDA 生態系、NVLink 互聯、NVL 整機規格，由上往下「制定標準、分配利潤」：台積電照它訂的先進封裝規格代工、信驊（AST）照它定義的 BMC 介面設計監控晶片、雙鴻/奇鋐照它的熱設計規範造液冷 CDU、廣達/緯穎/鴻海照它的整機藍圖組裝出貨。NVIDIA 本身不碰金屬、不摸螺絲，卻拿走每台 GB200 機櫃最高的毛利。這種「平台制定者」的結構，是 AI 產業鏈中最接近贏家通吃的商業模式。",
    technology: {
      core: "GPU 微架構設計（Blackwell / Rubin）、CUDA 軟體生態系、NVLink 高速互聯、整機規格制定",
      products: [
        "Blackwell GPU（B100/B200/GB200）— 現役旗艦，AI 訓練與推論主力",
        "Rubin GPU（2026-2027）— 下一代，HBM4 + 台積電 N2 製程",
        "NVL72/NVL576 整機機櫃規格 — 強制供應鏈按規格供貨",
        "CUDA 生態系 — 全球超過 400 萬開發者鎖定，切換成本極高",
        "NVLink Switch — GB200 機櫃內 GPU 高速互聯，1.8Tbps 頻寬"
      ],
      advantages: [
        "CUDA 護城河：17 年積累，模型、框架、人才全部鎖定，競爭者在生態上追趕需十年",
        "Spec 制定權：每一代新架構都重新定義整個供應鏈的設計規格，台積電/ODM/散熱廠必須跟著跑",
        "資料中心整機捆綁：NVL 整機規格讓客戶採購整套，避免零件被替代",
        "軟體毛利飛輪：CUDA 授權、NeMo、Omniverse 等軟體業務毛利率 100%，正在拉高整體利潤結構"
      ]
    },
    marketShare: {
      global: "~80%（AI GPU 市場）",
      desc: "AI 訓練 GPU 市佔超過 80%，推論端因 AMD/自研 ASIC 競爭略降但仍超過 70%。在 AI 伺服器出貨量最快的 2024-2026 年窗口，幾乎是壟斷",
      competitors: [
        { name: "AMD", share: "~10%", threat: "medium", note: "MI300X/MI350 追趕中，生態差距仍大" },
        { name: "Google TPU", share: "~5%", threat: "medium", note: "自用為主，不對外銷售" },
        { name: "AWS Trainium/Inf", share: "~3%", threat: "low", note: "雲端自研，供應鏈影響有限" },
        { name: "Intel Gaudi", share: "~2%", threat: "low", note: "市佔極低，生態弱" }
      ]
    },
    customers: {
      major: [
        { name: "Microsoft (Azure)", pct: "~20%", note: "OpenAI 訓練主力算力客戶" },
        { name: "Google (GCP)", pct: "~15%", note: "同時採購 NVDA + 自研 TPU" },
        { name: "Amazon (AWS)", pct: "~15%", note: "UltraCluster 大規模採購 GB200" },
        { name: "Meta", pct: "~12%", note: "LLaMA 訓練主力，已採購 35 萬張 H100+" },
        { name: "各國主權 AI 與企業", pct: "~38%", note: "中東、日本、台灣主權 AI 加速器與企業 AI 轉型" }
      ],
      breakdown: "五大雲端 CSP 合計約 60%，其餘 40% 為各國主權 AI 投資與企業端推論算力部署"
    },
    outlook: {
      positive: [
        "Rubin 架構 2026 H2 出貨：台積電 N2 + HBM4，算力再翻 3-5 倍，換機潮觸發新一輪採購",
        "推論端爆發：ChatGPT 類應用日均 Token 生成量每年倍增，推論 GPU 需求結構性成長",
        "主權 AI 採購潮：中東（沙特 500 億美元）、日本（Preferred Networks）等國家隊大規模採購",
        "NIM 微服務平台：NVIDIA 正在把 CUDA 從 GPU 工具升級為企業 AI 開發的「作業系統」"
      ],
      catalysts: [
        "Rubin / Rubin Ultra 出貨時程（2026 H2 / 2027）",
        "中國出口管制是否鬆綁（H20 替代方案）",
        "AMD MI350 是否搶走顯著市佔（觀察指標）",
        "季度 Data Center 營收成長斜率是否維持 YoY 100%+"
      ]
    },
    stockMetrics: {
      pe: "~35x (Forward)",
      eps: "~$2.70/季（FY2026）",
      epg: "+~120% YoY",
      peg: "~0.29",
      marketCap: "~$3.3T",
      week52High: "~$165",
      week52Low: "~$86",
      divYield: "~0.03%"
    ,
      sharesOut: "24.4B"
    },
    notes: `【NVIDIA 產業鏈制高點結構圖】
─────────────────────────────
■ 三層制霸邏輯

  L1【NVIDIA 本人】— 設計 Blackwell/Rubin 晶片大腦
     ├─ 深度綁定 台積電 (CoWoS 先進封裝代工)
     └─ 深度綁定 信驊 (BMC 監控晶片，按 NVIDIA 定義介面)

     ↓ 向下發射 Spec，下游照單全收

  L2【中游】— 雙鴻/奇鋐
     → 必須照 NVIDIA NVL 規格客製化液冷 CDU 系統
     → 無法自主定義產品形態，毛利率受限

     ↓

  L3【下游】— 廣達/緯穎/鴻海
     → 按照 NVIDIA 整機藍圖提供黑手組裝勞動力
     → 毛利率 3-5%，利潤幾乎全被 NVIDIA 截走

■ 護城河關鍵數字
  • CUDA 生態：400萬+ 開發者、鎖定 17 年
  • Data Center 收入：~$35B+/季（FY2026 Q4）
  • AI GPU 市佔：訓練端 ~80%，推論端 ~70%
  • Blackwell → Rubin：2026 H2 台積電 N2 製程

■ 關鍵生態系綁定
  • 台積電（2330）：CoWoS 先進封裝唯一代工
  • 信驊（5274）：BMC 晶片 70% 壟斷，NVL72 每台 72 顆
  • 新唐（4919）：BMC 二供 + BBU 電池管理
  • 雙鴻（3324）/奇鋐（3017）：液冷 CDU 照 NVDA Spec 客製

■ 觀察指標
  • 每季 DC 營收成長率是否維持 100%+ YoY
  • Rubin 出貨節奏（2026 H2）
  • 中國 H20 替代方案（出口管制影響）`,
    challenges: [
      "出口管制：中國市場（原佔營收 ~25%）受 H20 限制，每季損失 40-50 億美元潛在收入",
      "供應鏈集中：台積電 CoWoS 先進封裝產能是唯一瓶頸，Blackwell 出貨量受制於台積電產能",
      "AMD 追趕：MI300X/MI350 在推論端性價比接近，大型雲廠開始多元採購降低對 NVDA 依賴",
      "自研 ASIC 威脅：Google TPU、AWS Trainium、Meta MTIA 長期侵蝕訓練端份額"
    ],
    risks: [
      "台海衝突：台積電若受波及，Blackwell/Rubin 產能中斷，無替代來源",
      "中國客戶轉向國產（華為昇騰）：H20 替代品若性能追上，中國市場永久流失",
      "估值過高：P/E ~35x 已 Price in 完美成長，若任一季營收不如預期將劇烈修正",
      "反壟斷調查：美國、歐盟持續關注 CUDA 生態壟斷性，潛在拆分或授權要求"
    ]
  },

  "2454.TW": {
    id: "2454.TW", name: "聯發科", ticker: "2454.TW", flag: "🇹🇼",
    layer: 1, category: "晶片設計服務與高速 IP",
    badge: "AI ASIC 新勢力",
    tagline: "雲端 AI 推論 ASIC 挑戰者",
    overview: "聯發科正從手機 SoC 廠商全面轉型為雲端 AI 推論 ASIC 設計服務商。目標在 2027-2028 年拿下雲端 ASIC TAM（總潛在市場）10-15%。Google 是其最重要的 ASIC 大客戶（TPU 相關），其高速互連 IP（PCIe、UCIe）是 CPO 生態系的核心資產。聯發科在【AMD＋格羅方德】反台積電壟斷聯盟中，負責設計 Compute die 與高速互連 IP，是整個非台積電陣營的大腦。",
    technology: {
      core: "ASIC 晶片設計、高速互連 IP（PCIe 6.0、UCIe）、AI 推論架構優化",
      products: ["客製化 AI 推論 ASIC（為 Google、微軟等 CSP 設計）", "高速互連 IP（SerDes、PCIe Gen6）", "天璣系列手機 SoC（現有現金流支柱）", "車用晶片平台（Dimensity Auto）"],
      advantages: ["CPO 生態系高速 IP 具備差異化競爭力", "Google 大客戶關係確立，作為 AI ASIC 廠商信用背書", "ARM 架構授權基礎深厚，設計能力成熟"]
    },
    marketShare: { global: "手機 AP 市佔約 36%；AI ASIC 目標 2027 年 10-15%", desc: "ASIC 設計服務目前對手為博通（Broadcom）與 Marvell，聯發科是後起之秀",
      competitors: [
        { name: "博通（Broadcom）", share: "~45%（ASIC）", note: "ASIC 市場老玩家，Google/Apple 深度客戶關係", threat: "high" },
        { name: "高通（Qualcomm）", share: "~30%（手機 AP）", note: "手機 AP 最強競爭者，5G 調制解調器領先", threat: "high" },
        { name: "Marvell", share: "~15%（ASIC）", note: "網路 ASIC 與資料中心客製晶片", threat: "medium" },
        { name: "世芯-KY / 創意", share: "~5%（設計服務）", note: "台灣純 ASIC 設計服務競爭", threat: "low" },
      ]
    },
    customers: { major: [
      { name: "手機品牌（小米/OPPO/vivo/三星）", note: "手機 SoC 現有現金流", pct: "~55%" },
      { name: "Google", note: "TPU / AI ASIC 設計", pct: "~15%" },
      { name: "微軟", note: "Azure AI 晶片接洽中", pct: "~5%" },
      { name: "車用 / IoT", note: "Dimensity Auto 等", pct: "~10%" },
      { name: "其他", note: "", pct: "~15%" },
    ], breakdown: "AI ASIC 業務目前 Google 佔比最高，正積極開拓微軟、亞馬遜等其他 CSP；手機 SoC 業務提供穩定現金流支撐 ASIC 轉型" },
    outlook: {
      positive: ["2025-2027 CSP 客製 ASIC 支出預計翻倍", "UCIe 開放標準生態系讓聯發科有機會切入更多客戶", "AMD+GF 反壟斷聯盟中擔任核心腦力角色"],
      catalysts: ["Google 新世代 TPU 設計訂單確認", "台積電以外生產線（GF/三星）良率突破"]
    },
    challenges: ["博通（Broadcom）在 ASIC 市場深耕多年，客戶關係難撼動", "從消費電子轉型雲端 B2B 需要時間建立信任", "ASIC 設計周期長（2-3年），前期投入大"],
    risks: ["CSP 若削減自研晶片投資（景氣轉差時）", "台積電先進製程取得若受限（地緣政治）", "手機市場若持續疲軟壓縮現金流"],
    stockMetrics: {
      pe: "68.2x",
      eps: "NT$65.94",
      epg: "-17.7%",
      peg: "2.10",
      marketCap: "NT$71745億",
      week52High: "NT$4710",
      week52Low: "NT$1130",
      divYield: "1.24%"
    ,
      sharesOut: "NT$159億"
    },
  },

  "3661.TW": {
    id: "3661.TW", name: "世芯-KY", ticker: "3661.TW", flag: "🇹🇼",
    layer: 1, category: "晶片設計服務與高速 IP",
    badge: "純 ASIC 設計服務",
    tagline: "台灣 ASIC 設計服務龍頭",
    overview: "世芯-KY 是台灣最純粹的 ASIC 設計服務廠，幫助無自有晶片設計能力的科技公司設計客製化晶片。近年受益於 AI 加速器晶片設計需求爆發，大型雲端廠商委託其設計 AI 推論晶片。",
    technology: { core: "ASIC 全流程設計服務（從 RTL 到 GDS）", products: ["AI 加速器 ASIC 設計", "網路交換晶片設計", "儲存控制器晶片"], advantages: ["設計服務「中立」，不與客戶競爭", "台積電先進製程設計能力強"] },
    marketShare: { global: "台灣 ASIC 設計服務前三大", desc: "與創意電子並列，為純設計服務代表廠", competitors: ["創意電子（台積電子公司）", "聯發科（兼做）", "博通（美系）"] },
    customers: { major: ["北美大型雲端公司（未公開）", "中國 AI 晶片廠（部分已受限）"], breakdown: "客戶高度保密，主要為北美與亞洲 AI 公司" },
    outlook: { positive: ["ASIC 需求取代 GPU 的趨勢長期利好", "新客戶擴增中"], catalysts: ["AI 晶片設計需求持續放量"] },
    stockMetrics: {
      pe: "71.2x",
      eps: "NT$67.55",
      epg: "-2.6%",
      marketCap: "NT$3949億",
      week52High: "NT$5640",
      week52Low: "NT$2480",
      divYield: "0.83%"
    ,
      sharesOut: "NT$34.3億"
    },
    challenges: ["客戶集中度高", "地緣政治影響中國客戶訂單"],
    risks: ["大型 CSP 若轉向自建設計團隊", "台積電先進製程取得風險"]
  },

  "3443.TW": {
    id: "3443.TW", name: "創意電子", ticker: "3443.TW", flag: "🇹🇼",
    layer: 1, category: "晶片設計服務與高速 IP",
    badge: "台積電關聯廠",
    tagline: "台積電體系 ASIC 設計服務",
    overview: "創意電子是台積電的策略性投資廠商（台積電持股約 35%），提供完整 ASIC 設計服務，具備台積電最先進製程的優先設計存取權，是進入台積電 N3/N2 先進製程最快的設計服務管道之一。",
    technology: { core: "ASIC 全流程設計，台積電最先進製程優先認證", products: ["AI ASIC 設計", "HPC 加速器晶片", "車用 ASIC"], advantages: ["台積電技術合作夥伴，先進製程取得最快", "獨特護城河：競爭者難以複製的台積電關係"] },
    marketShare: { global: "台灣 ASIC 設計服務前三大", desc: "因台積電關係，在先進製程客戶中具備差異化優勢", competitors: ["世芯-KY", "聯發科"] },
    customers: { major: ["透過台積電生態系引入的大型晶片客戶"], breakdown: "受台積電保密協議限制，客戶未公開" },
    outlook: { positive: ["台積電 2nm/1.4nm 量產帶動最先進 ASIC 需求"], catalysts: ["台積電 N2 製程正式量產（2025）"] },
    stockMetrics: {
      pe: "164.9x",
      eps: "NT$28.02",
      epg: "+71.6%",
      peg: "0.50",
      marketCap: "NT$6191億",
      week52High: "NT$5950",
      week52Low: "NT$1030",
      divYield: "0.43%"
    ,
      sharesOut: "NT$22.5億"
    },
    challenges: ["台積電若改變投資策略可能影響關係", "ASIC 設計人才招募競爭激烈"],
    risks: ["過度依賴台積電單一代工廠", "台積電地緣政治風險連帶影響"]
  },

  "2330.TW": {
    id: "2330.TW", name: "台積電", ticker: "2330.TW / TSM", flag: "🇹🇼",
    layer: 1, category: "晶圓代工製造",
    platform: "NVDA",
    badge: "全球半導體心臟",
    tagline: "全球最先進晶圓代工壟斷者",
    overview: "台積電是全球先進製程晶圓代工的絕對霸主，掌握 COUPE/CoWoS 先進封裝整合平台，是【輝達＋台積電】國家隊的核心。全球超過 90% 最先進晶片（<5nm）由台積電製造。NVIDIA H100/H200/B100 全系列、蘋果 A 系列晶片、AMD MI300X 均由台積電生產。",
    technology: { core: "N3/N2 先進製程、CoWoS 先進封裝、COUPE 矽光子整合平台", products: ["N3E/N3P（3nm 系列）", "N2（2nm，2025量產）", "CoWoS-L/S（高頻寬記憶體整合封裝）", "COUPE 矽光子平台"], advantages: ["先進製程良率全球最高", "CoWoS 封裝技術讓 HBM 整合成為可能", "客戶生態系最完整，EDA/IP 合作夥伴最多"] },
    marketShare: { global: "先進製程（<5nm）市佔 >90%，整體晶圓代工約 60%", desc: "形成事實性壟斷，競爭者（三星、Intel）短期無法追上",
      competitors: [
        { name: "三星晶圓代工", share: "~10%（先進製程）", note: "良率仍落後台積電 1-2 個世代", threat: "medium" },
        { name: "Intel Foundry Services", share: "~2%", note: "18A 製程仍在驗證，2026-2027 觀察", threat: "low" },
        { name: "格羅方德（GF）", share: "~6%（成熟製程）", note: "不同市場區間，特殊製程差異化", threat: "low" },
        { name: "聯電（UMC）", share: "~7%（成熟製程）", note: "28nm 以上成熟節點競爭", threat: "low" },
      ]
    },
    customers: { major: [
      { name: "Apple", note: "A/M 系列 SoC", pct: "~25%" },
      { name: "NVIDIA", note: "GPU / AI 加速器", pct: "~12%" },
      { name: "AMD", note: "CPU / GPU", pct: "~10%" },
      { name: "高通 Qualcomm", note: "手機 SoC / 射頻", pct: "~8%" },
      { name: "博通 Broadcom", note: "網路/ASIC 晶片", pct: "~7%" },
      { name: "聯發科", note: "手機 SoC", pct: "~6%" },
      { name: "其他", note: "各類客戶", pct: "~32%" },
    ], breakdown: "NVIDIA 佔台積電約 11-12% 收入，為最大單一客戶；Apple 長期為最大客戶但 NVIDIA 快速逼近" },
    outlook: { positive: ["AI 算力需求驅動 CoWoS 產能長期供不應求", "N2 量產進一步鞏固領先地位", "美國/日本/德國建廠分散地緣政治風險"], catalysts: ["CoWoS 月產能突破 35K 片（2025年目標）", "N2 良率提升進度"] },
    challenges: ["台灣地緣政治風險是全球供應鏈最大隱憂", "海外建廠成本較台灣高出 30-50%，壓縮毛利率"],
    risks: ["台海衝突（黑天鵝風險）", "CoWoS 產能若跟不上 AI 伺服器需求，可能導致 NVIDIA 出貨受限", "三星/Intel 追趕（長期）"],
    stockMetrics: {
      pe: "35.9x",
      eps: "$11.67",
      epg: "+58.4%",
      peg: "1.30",
      marketCap: "$2.17T",
      week52High: "$430.55",
      week52Low: "$192.20",
      divYield: "0.91%"
    ,
      sharesOut: "NT$2,593億"
    },
    notes: `【台積電 (2330 / TSM) 分析備忘】

■ 核心戰略地位
• 全球先進製程（<5nm）市佔 >90%，形成事實性壟斷
• AI 算力時代的「唯一咽喉」：NVIDIA GB200/B100/H100 全系列由台積電生產
• CoWoS 先進封裝月產能持續擴充（2025 目標 35K 片/月）

■ 本益比上修邏輯（P/E Re-rating）
• 智慧型手機時代被定義為「高級代工廠」→ 歷史 P/E 死壓 15-18x
• AI 時代基因突變，被重新定義為「AI 基礎建設」→ 市場給予 25-30x
• 過去歷史資料已不適用現在的台積電，不能再用河流圖低買高賣

■ 關鍵觀察指標（2026）
• CoWoS 月產能是否按計畫突破 35K 片
• N2（2nm）良率爬坡速度
• 美國/日本廠海外成本攤銷對毛利率的壓力
• NVIDIA Rubin（2026 H2）量產前是否提前拉貨

■ 主要風險
• 台海地緣政治（黑天鵝）
• 海外建廠毛利率壓力（海外比台灣貴 30-50%）
• CoWoS 產能瓶頸若無法跟上 NVIDIA 出貨節奏`,
  },

  "GFS": {
    id: "GFS", name: "格羅方德", ticker: "GFS", flag: "🇺🇸",
    layer: 1, category: "晶圓代工製造",
    badge: "反壟斷聯盟基地",
    tagline: "AMD/CPO 反台積電陣營晶圓廠",
    overview: "格羅方德（GlobalFoundries）是全球第三大晶圓代工廠，積極拉攏反台積電壟斷陣營，自建 CPO/光子官方生態系——Fotonix 平台。其以 Soitec SOI 晶圓為基底的矽光子製程，是【AMD＋格羅方德＋聯發科】聯盟在非台積電路線上的物理實現基礎。",
    technology: { core: "22FDX（FD-SOI 22nm）、Fotonix 矽光子平台、射頻 CMOS", products: ["Fotonix（矽光子 CPO 平台）", "22FDX（低功耗物聯網/汽車）", "RF-SOI（射頻前端）", "GaN 電源管理"], advantages: ["Fotonix 是目前唯一成熟商用的矽光子 CPO 整合平台", "美國本土產能，符合 CHIPS Act 補貼資格", "不與客戶競爭（純代工）"] },
    marketShare: { global: "整體晶圓代工約 6-7%（成熟製程）", desc: "先進製程已退出競爭，專注特殊製程與成熟節點", competitors: ["台積電（成熟製程部分）", "聯電（UMC）", "中芯國際（SMIC）"] },
    customers: { major: ["AMD（重要策略夥伴）", "高通（RF-SOI）", "Sivers（InP 雷射整合）", "美國國防部（保密晶片）"], breakdown: "AMD 是最重要的策略客戶，Fotonix 平台依賴 AMD 生態系推廣" },
    outlook: { positive: ["CHIPS Act 補貼帶來擴產資金", "Fotonix 若成為 CPO 主流平台，將吸引大量客戶", "RF-SOI 受 5G/Wi-Fi 7 持續拉動"], catalysts: ["Fotonix 平台第一個大客戶量產時程（2026-2027）"] },
    stockMetrics: {
      pe: "50.9x",
      eps: "$1.57",
      epg: "-52.5%",
      peg: "1.62",
      marketCap: "$43.9B",
      week52High: "$92.55",
      week52Low: "$31.51",
      divYield: "0.60%"
    ,
      sharesOut: "560M"
    },
    challenges: ["先進製程競爭力不足，無法承接 NVIDIA/Apple 等頂級客戶", "盈利能力持續受壓（資本支出龐大但毛利率低）"],
    risks: ["Fotonix 商業化若失敗，失去差異化定位", "AMD 若減少使用 GF 產能，收入衝擊大"]
  },

  "LITE": {
    id: "LITE", name: "Lumentum", ticker: "LITE", flag: "🇺🇸",
    layer: 1, category: "光學元件與雷射光源",
    badge: "雷射市佔 50-60%",
    tagline: "全球傳統雷射光源龍頭",
    overview: "Lumentum 是全球傳統光通訊雷射光源的絕對龍頭，市佔率 50-60%。提供 VCSEL（垂直腔面射型雷射）、DFB 雷射等核心光源元件，是當前 NPO（近封裝光學）模組與傳統光模組的主力供應商。",
    technology: { core: "VCSEL 陣列、DFB 雷射、EML 電吸收調製雷射", products: ["VCSEL（用於 3D 感測與短距傳輸）", "DFB 雷射（長距光通訊）", "EML（800G/1.6T 高速傳輸）", "光放大器（EDFA）"], advantages: ["VCSEL 製造良率業界最高", "EML 雷射是 400G/800G 模組不可或缺的組件", "專利布局深厚，後進者進入門檻高"] },
    marketShare: { global: "傳統光通訊雷射 50-60%", desc: "在 VCSEL 與 DFB 市場長期維持領先，但新型 InP 雷射（如 Sivers 的客製化方案）帶來競爭壓力", competitors: ["II-VI / Coherent（重要競爭者）", "Sivers Semiconductors（CPO 黑馬）", "天孚通信（中資）"] },
    customers: { major: ["Cisco（光模組）", "Ciena", "亞馬遜（AWS 光互連）", "Meta（資料中心互連）"], breakdown: "超大型雲端資料中心（Hyperscaler）是最重要的成長引擎" },
    outlook: { positive: ["800G 升級 1.6T 光模組帶動 EML 雷射需求倍增", "AI 資料中心光互連需求 2025-2028 年每年成長 30%+"], catalysts: ["1.6T LPO/NPO 模組大規模採購（亞馬遜 4000 萬個需求）"] },
    stockMetrics: {
      pe: "151.6x",
      eps: "$5.64",
      epg: "+90.1%",
      peg: "0.63",
      marketCap: "$66.5B",
      week52High: "$1,086",
      week52Low: "$72.29",
      divYield: "0%"
    ,
      sharesOut: "67M"
    },
    challenges: ["CPO 架構若廣泛採用，可能要求更高規格的雷射（InP 陣列），威脅現有產品", "中資廠商（天孚、旭創）在部分低端市場提供更低價格"],
    risks: ["CPO 技術路線轉換速度比預期快", "客戶（思科等）若垂直整合雷射製造"]
  },

  "SIVE": {
    id: "SIVE", name: "Sivers Semiconductors", ticker: "SIVE", flag: "🇸🇪",
    layer: 1, category: "光學元件與雷射光源",
    badge: "AI/國防雙護城河",
    tagline: "130人公司打四個世界級戰場",
    overview: "Sivers 是全球員工僅約 130 人的瑞典精品 Fabless 晶片設計商，卻同時卡位了 AI 資料中心 CPO 革命與美國頂級國防合約兩條高壁壘賽道。核心分兩大部門：**Sivers Photonics** 擁有自主 InP100 磷化銦雷射技術平台，是 GFS CPO 生態系除 Lumentum 外唯一指定雷射供應商；**Sivers Wireless** 專精毫米波與 5G/6G FR3 波束成形晶片，已與 Raytheon、Ericsson 聯合開發 Daybreak™ 晶片並切入美國 PWSA 軍用衛星鏈。2026 年 4 月宣布推進美國 Nasdaq 雙重上市，同月與 Jabil（捷普）簽署 1.6T AI 光模組量產合作，潛在合約價值 5,300 萬至 1.38 億美元，預計 2026 Q4 量產。",
    technology: {
      core: "InP100 磷化銦雷射平台、毫米波/FR3 波束成形 IC（Daybreak™）、STAR 全雙工雷達晶片",
      products: [
        "InP 雷射陣列（GF Fotonix CPO 平台核心光源）",
        "1.6T AI 光收發模組（與 Jabil 聯合量產）",
        "Daybreak™ 5G/6G FR3 波束成形晶片（與 Ericsson/Raytheon 聯合開發）",
        "STAR 全雙工雷達晶片（BAE Systems 合作，電子戰用途）",
        "LEO 衛星用高頻波束成形陣列（PWSA 軍用衛星）"
      ],
      advantages: [
        "InP 在功耗與波長密度上優於矽基 VCSEL，是 CPO 不可替代的外部雷射光源（ELS）",
        "GFS CPO 生態系二選一供應商（另一家是市值 640 億的 Lumentum），超大規模客戶必須扶持雙供應商",
        "軍民兩用技術護城河：Raytheon/BAE 的黑魔法國防項目提供極高毛利與政治保護傘",
        "嵌入美國東北微電子聯盟（NEMC Hub，總預算 20 億美元）作為不可替代的外國技術節點"
      ]
    },
    marketShare: {
      global: "CPO InP 雷射：GFS 生態系唯二供應商之一",
      desc: "在 GFS 的 Fotonix 共封裝光學平台中，Sivers 與 Lumentum 並列為唯二官方雷射光源供應商。以 P/S 約 45 倍的估值，市場已大幅提前定價其 AI 與美股上市預期。",
      competitors: [
        { name: "Lumentum ($LITE)", share: "市值 640 億美元", note: "GFS 生態系同場競爭，產能強但價格高", threat: "medium" },
        { name: "II-VI / Coherent", share: "傳統市場", note: "不同技術路線（VCSEL），CPO 佔比低", threat: "low" },
        { name: "台積電 COUPE 平台", share: "整合式方案", note: "若自解雷射整合問題則繞過外部雷射需求", threat: "high" },
      ]
    },
    customers: {
      major: [
        { name: "格羅方德（GF）", note: "Fotonix CPO 平台核心雷射供應商，最重要客戶", pct: "~45%" },
        { name: "Jabil（捷普）", note: "2026/4 簽署 1.6T 光模組量產合作協議", pct: "~20%" },
        { name: "Raytheon / Ericsson", note: "Daybreak™ FR3 波束成形晶片聯合開發夥伴", pct: "~20%" },
        { name: "BAE Systems", note: "STAR 全雙工電子戰雷達晶片合作", pct: "~10%" },
        { name: "其他 LEO/國防", note: "PWSA 軍用衛星與低軌衛星陣列應用", pct: "~5%" },
      ],
      breakdown: "高度集中在 GF CPO 生態系與美國頂級國防承包商，兩條賽道互為保險。若 CPO 量產延遲，國防合約毛利率可支撐現金流；若 CPO 爆發，則 GF/Jabil 訂單可能成為十倍股催化劑。"
    },
    outlook: {
      positive: [
        "2026 Q4 量產：光學與無線技術已獲戰略客戶採用，潛在合約 5,300 萬～1.38 億美元",
        "Jabil 合作確認 1.6T AI 模組量產路徑，Jabil 的製造能力解決了 Sivers 130 人規模瓶頸",
        "美國 Nasdaq 雙重上市（預估 2026 Q3/Q4），將打開美國機構投資人的資金池",
        "GFS CPO 生態系二選一地位：超大規模客戶（Hyperscaler）為避免被 LITE 壟斷，必然扶持 Sivers"
      ],
      catalysts: [
        "2026/6/15 AGM：正式敲定赴美上市時間表",
        "2026 Q4 量產良率確認（make-or-break 事件）",
        "第一個 Hyperscaler 客戶公開宣布採用 GF Fotonix + Sivers 雷射的 CPO 方案"
      ]
    },
    stockMetrics: {
      marketCap: "~$950M",
      divYield: "0%"
    ,
      sharesOut: "270M"
    },
    notes: `【成真度查證筆記】2026/06

▌ 核心定位
130 人 Fabless 公司，同時卡位兩條高壁壘賽道：
• Sivers Photonics：InP100 磷化銦雷射平台 → GFS CPO 生態系唯二雷射供應商（另一家是市值 640 億的 Lumentum）
• Sivers Wireless：毫米波 / 5G FR3 波束成形 IC → 美國頂級國防承包商供應鏈

▌ 重大事件時間線
2026/03  Daybreak™ FR3 波束成形晶片發布（與 Ericsson + Raytheon 聯合開發）
2026/03  GF 官方網路研討會首次公開確認 Sivers 為 CPO 雷射供應商
2026/04/16  宣布推進美國 Nasdaq 雙重上市計畫
2026/04  與 Jabil（捷普）簽署 1.6T AI 光模組量產合作協議
2026/05/15  2025 年報發布（延期，配合美國 PCAOB 審計標準）
2026/06/15  AGM，預計敲定赴美上市時間表

▌ 關鍵數字
• 潛在合約價值：5,300 萬 ～ 1.38 億美元（2026 Q4 量產）
• CHIPS Act 所屬 NEMC Hub 總預算：20 億美元
• 市值：約 9.5 億美元（瑞典 Nasdaq，SIVE.ST）
• P/S：約 45 倍（遠超歐洲半導體同業）

▌ 護城河評估
✅ GFS 生態系二選一地位：Hyperscaler 多供應商策略必然扶持 Sivers
✅ 軍民兩用：Raytheon / BAE 國防項目提供政治保護傘與高毛利
✅ InP 技術不可替代：CPO 外部雷射光源（ELS）目前無矽基替代方案

▌ 核心風險
🔴 2026 Q4 量產良率不達標 → 訂單被 Lumentum 吃掉
🔴 台積電 COUPE 若自解外部雷射整合問題 → 整個 ELS 商業模式被繞過
🟡 美國 Nasdaq 上市延遲 → 催化劑消失，估值承壓
🟡 130 人人力極限：InP 博士被 Broadcom / Marvell 挖角則研發停擺

▌ 估值狀態
P/S 45x 已大幅 price-in AI + 美股上市預期。
現階段是「相信故事、等待執行驗證」的賭注，
make-or-break 事件 = 2026 Q4 量產良率公告。`,
    challenges: [
      "130 人同時打四個世界級戰場，人力極度吃緊，採 Fabless 外包製造以槓桿產能",
      "關鍵人才風險：精通 InP 與覆晶封裝（Flip-chip）的 PhD 博士若被 Broadcom/Marvell 挖角，研發即停擺",
      "目前仍淨虧損，若量產推遲需要再度融資，稀釋股權風險高",
      "P/S 約 45 倍，遠超歐洲半導體同業，估值已大幅反映未來預期"
    ],
    risks: [
      "2026 Q4 量產良率不達標 → 訂單被 Lumentum 吃掉（最大短期風險）",
      "台積電 COUPE 矽光子平台若自解外部雷射整合問題 → 繞過 Sivers 整個商業模式",
      "美國 Nasdaq 上市若因審計或市場條件延遲 → 催化劑消失，股價壓力大",
      "GF 若失去 AMD 以外的 Hyperscaler 客戶 → Fotonix 生態系規模縮水，連帶衝擊 Sivers 訂單"
    ]
  },

  "GLW": {
    id: "GLW", name: "康寧", ticker: "GLW", flag: "🇺🇸",
    layer: 1, category: "光學元件與雷射光源",
    badge: "光纖基礎建設",
    tagline: "AI 資料中心高規格光纖供應商",
    overview: "康寧是全球光纖製造龍頭，為 AI 資料中心提供高規格外部連接光纖。隨著 AI 算力需求爆發，資料中心間（DCI）與資料中心內部的光纖用量大幅增加，康寧直接受益。微軟與 Meta 等超大規模雲端廠商已與康寧簽署長期供應協議。",
    technology: { core: "光纖拉絲技術、低損耗單模光纖、多模光纖、特殊玻璃", products: ["SMF-28 Ultra 低損耗單模光纖", "LEAF 光纖（長距離傳輸）", "OM5 多模光纖（短距高頻寬）", "Evolent 資料中心光纜解決方案"], advantages: ["全球最大光纖製造商，產能規模無可匹敵", "多項低損耗光纖專利，競爭對手難以達到相同品質", "與微軟/Meta 的長期供應協議鎖定收入"] },
    marketShare: { global: "光纖市場約 40%（全球最大）", desc: "與 Prysmian、CommScope 並列全球三大，康寧在高端資料中心光纖市佔最高", competitors: ["Prysmian（義大利）", "藤倉（日本）", "中天科技（中資）"] },
    customers: { major: ["微軟（長期供應協議）", "Meta（長期供應協議）", "亞馬遜 AWS", "Verizon/AT&T（電信）"], breakdown: "AI 超大規模資料中心佔新增需求約 60-70%" },
    outlook: { positive: ["微軟/Meta 長期供應協議提供確定性收入", "AI 資料中心光纖採購量 2024-2027 預計翻3倍", "美國製造光纖受 CHIPS Act 精神支持"], catalysts: ["2025-2026 年資料中心建設加速期"] },
    stockMetrics: {
      pe: "87.1x",
      eps: "$2.08",
      epg: "+138.9%",
      peg: "1.42",
      marketCap: "$155.9B",
      week52High: "$211.79",
      week52Low: "$49.10",
      divYield: "0.62%"
    ,
      sharesOut: "840M"
    },
    challenges: ["光纖產品毛利率受原材料（二氧化矽）成本影響", "顯示玻璃（Gorilla Glass）業務受手機市場疲軟拖累"],
    risks: ["資料中心建設若放緩或延遲", "中資廠商低價競爭擠壓市場"]
  },

  "3324.TW": {
    id: "3324.TW", name: "雙鴻", ticker: "3324.TW", flag: "🇹🇼",
    layer: 1, category: "重電與散熱基礎元件",
    platform: "NVDA",
    badge: "液冷散熱雙架構",
    tagline: "冷板式+浸沒式液冷解決方案",
    overview: "雙鴻從傳統散熱片廠商升級為能夠提供「冷板式」與「浸沒式」雙架構的 CDU（冷卻液分配裝置）整機機櫃方案商。AI 伺服器的散熱需求從傳統風冷轉向液冷，雙鴻是台灣液冷散熱的核心廠商之一，出現在產業鏈第 1 層（元件）與第 2 層（系統整合）。",
    technology: { core: "液冷水冷板（Cold Plate）、CDU、浸沒式液冷槽", products: ["冷板式水冷板（GPU 直接接觸冷卻）", "CDU 冷卻液分配裝置", "浸沒式液冷整機機櫃", "Manifold 分流管"], advantages: ["雙架構能力（冷板＋浸沒）差異化優勢", "台灣本土廠，鄰近廣達/緯穎 AI 伺服器客戶", "從元件到整機系統方案的垂直整合"] },
    marketShare: { global: "台灣液冷散熱市場前二大", desc: "與奇鋐並列台灣液冷雙雄", competitors: ["奇鋐（3017.TW）", "高力（8996.TW）", "Vertiv（美系整合商）"] },
    customers: { major: ["廣達（AI 伺服器 CDU）", "緯穎", "鴻海（鴻準）"], breakdown: "台灣 AI 伺服器 ODM 廠是主要客戶群" },
    outlook: { positive: ["AI GPU（H100/B100/GB200）功耗 700W-1000W，風冷無法處理，液冷滲透率快速提升", "浸沒式液冷為次世代高功耗需求準備就緒"], catalysts: ["GB200 NVL72 Rack-scale 機櫃大規模出貨（2025）"] },
    stockMetrics: {
      divYield: "0%"
    ,
      sharesOut: "NT$18.5億"
    },
    challenges: ["浸沒式液冷技術尚未大規模商業化，驗證周期長", "競爭激烈，海外廠商（Vertiv、Modine）也在搶台積電客戶"],
    risks: ["液冷滲透速度若不如預期", "客戶將散熱業務自主化"]
  },

  "3017.TW": {
    id: "3017.TW", name: "奇鋐科技", ticker: "3017.TW", flag: "🇹🇼",
    layer: 1, category: "重電與散熱基礎元件",
    platform: "NVDA",
    badge: "散熱龍頭",
    tagline: "AI 伺服器散熱模組龍頭",
    overview: "奇鋐是台灣散熱模組龍頭，從傳統風冷散熱模組切入液冷解決方案，為 AI 伺服器（尤其是 NVIDIA GPU 伺服器）提供核心散熱元件。客戶涵蓋廣達、緯穎等主要 AI 伺服器 ODM 廠。",
    technology: { core: "熱管（Heat Pipe）、均溫板（Vapor Chamber）、液冷冷板", products: ["AI GPU 散熱模組", "均溫板（VC）", "液冷冷板", "伺服器散熱組件"], advantages: ["台灣最大散熱模組廠，規模優勢", "均溫板技術領先，AI GPU 散熱需求直接受益"] },
    marketShare: { global: "台灣散熱模組市佔最大，全球伺服器散熱前三", desc: "與雙鴻差異：奇鋐以散熱模組起家，雙鴻偏向液冷系統整合", competitors: ["雙鴻（3324.TW）", "建碁（亞馬遜散熱供應商）", "海外 Modine"] },
    customers: { major: ["廣達", "緯穎", "富士康/鴻海", "戴爾（間接）"], breakdown: "NVIDIA GB200 相關機台散熱是近期最大訂單驅動力" },
    outlook: { positive: ["GB200/B300 系列散熱需求極高（每 GPU 液冷強制要求）", "均溫板單價隨 AI 升級而上升"], catalysts: ["NVIDIA Blackwell Ultra 系列出貨節奏"] },
    stockMetrics: {
      pe: "57.5x",
      eps: "NT$48.24",
      epg: "+145.8%",
      marketCap: "NT$10893億",
      week52High: "NT$3010",
      week52Low: "NT$608",
      divYield: "0.37%"
    ,
      sharesOut: "NT$33.2億"
    },
    challenges: ["風冷轉液冷若轉換過快，風冷模組業務下滑", "客戶集中度高（廣達緯穎）"],
    risks: ["NVIDIA 散熱規格若改變（影響現有設計)", "競爭加劇導致毛利率下滑"]
  },

  "6805.TW": {
    id: "6805.TW", name: "富世達", ticker: "6805.TW", flag: "🇹🇼",
    layer: 1, category: "重電與散熱基礎元件",
    badge: "液冷快接頭",
    tagline: "液冷系統快速接頭專家",
    overview: "富世達提供液冷系統中不可或缺的快速接頭（Quick Disconnect，QD），是 AI 資料中心機房液冷管路部署的關鍵連接零件。快接頭看似不起眼，但決定整個液冷系統的洩漏率與維護效率。",
    technology: { core: "快速接頭（QD）設計與製造，無洩漏密封技術", products: ["乾式快接頭（Dry-break QD）", "濕式快接頭", "液冷管路連接組件"], advantages: ["快接頭進入門檻高（密封性能驗證周期長）", "客戶認證後高黏著度"] },
    marketShare: { global: "台灣液冷快接頭主要供應商之一", desc: "與嘉澤並列台灣快接頭雙雄", competitors: ["嘉澤（3533.TW）", "Stäubli（瑞士，高端市場）", "Colder Products（美）"] },
    customers: { major: ["雙鴻（CDU 系統用）", "廣達/緯穎（AI 伺服器機櫃）"], breakdown: "液冷滲透率每提升 10%，快接頭需求倍數成長" },
    outlook: { positive: ["液冷滲透率上升直接拉動快接頭需求", "AI 機房佈署標準化推動規模化採購"], catalysts: ["GB200 NVL72 大規模部署"] },
    stockMetrics: {
      pe: "68.2x",
      eps: "NT$31.07",
      epg: "+157.3%",
      marketCap: "NT$1453億",
      week52High: "NT$2275",
      week52Low: "NT$561",
      divYield: "0.41%"
    ,
      sharesOut: "NT$4.3億"
    },
    challenges: ["國際大廠若降低採購門檻擠壓毛利", "快接頭技術壁壘持續維護需要研發投入"],
    risks: ["液冷標準若走向整合（廠商自製接頭）", "原材料（金屬）成本波動"]
  },

  "3533.TW": {
    id: "3533.TW", name: "嘉澤端子", ticker: "3533.TW", flag: "🇹🇼",
    layer: 1, category: "重電與散熱基礎元件",
    badge: "CPU/GPU 連接器",
    tagline: "高速連接器與快接頭雙線佈局",
    overview: "嘉澤端子以 CPU/GPU Land Grid Array（LGA）插座聞名，同時切入液冷快接頭市場。LGA 插座是連接 Intel/AMD CPU 與主機板的核心連接器，AI 伺服器 CPU 升級換代直接拉動需求。",
    technology: { core: "LGA 插座設計製造、精密連接器、快速接頭", products: ["Intel/AMD CPU LGA 插座", "DDR5 記憶體插槽", "液冷快接頭"], advantages: ["LGA 插座與 CPU 廠同步設計（Intel 認證供應商）", "高精度衝壓與電鍍技術壁壘"] },
    marketShare: { global: "台灣 LGA 插座主要供應商", desc: "全球 LGA 插座由少數廠商供應，嘉澤具備重要地位", competitors: ["富世達（快接頭競爭）", "3M（連接器）"] },
    customers: { major: ["廣達", "緯穎", "ASUS 伺服器", "SuperMicro"], breakdown: "Intel/AMD 伺服器平台升級是主要需求驅動" },
    outlook: { positive: ["AI 伺服器 CPU 每年升級，LGA 規格持續演進", "液冷快接頭新業務打開成長空間"], catalysts: ["Intel Xeon 6 / AMD EPYC Turin 伺服器平台出貨"] },
    stockMetrics: {
      pe: "37.8x",
      eps: "NT$69.96",
      epg: "+5.6%",
      marketCap: "NT$2968億",
      week52High: "NT$2955",
      week52Low: "NT$1140",
      divYield: "1.57%"
    ,
      sharesOut: "NT$13億"
    },
    challenges: ["LGA 插座是成熟市場，成長有天花板", "快接頭新市場需要時間建立客戶認證"],
    risks: ["Intel/AMD 伺服器 CPU 若改變封裝形式（BGA 化）", "液冷快接頭業務尚未規模化"]
  },

  "6125.TW": {
    id: "6125.TW", name: "廣運機械", ticker: "6125.TW", flag: "🇹🇼",
    layer: 1, category: "重電與散熱基礎元件",
    badge: "液冷槽體製造",
    tagline: "浸沒式液冷槽體與特製機殼",
    overview: "廣運機械生產浸沒式液冷的關鍵槽體（Tank）結構，這是承載整塊 AI 伺服器板卡浸泡在冷卻液中的金屬容器，是浸沒式液冷路線的核心結構件。",
    technology: { core: "精密金屬加工、液冷槽體設計與製造", products: ["浸沒式液冷槽體", "儲能系統機殼", "特製工業機殼"], advantages: ["金屬加工精度與大型結構件製造能力", "浸沒式液冷市場先佈局"] },
    marketShare: { global: "台灣浸沒式液冷槽體利基廠", desc: "市場尚早期，先行者優勢明顯", competitors: ["晟銘電（3013.TW）", "海外特殊機殼廠"] },
    customers: { major: ["液冷整合商", "資料中心建設廠商"], breakdown: "浸沒式液冷需求正在從實驗室走向商業化" },
    outlook: { positive: ["浸沒式液冷 2026-2028 年預計開始大規模商業化", "GB300/未來超高功耗 GPU 將強制要求浸沒式"], catalysts: ["主要 Hyperscaler 宣布採用浸沒式液冷的時程"] },
    stockMetrics: {
      divYield: "0%"
    ,
      sharesOut: "NT$6.1億"
    },
    challenges: ["浸沒式液冷商業化速度比預期慢", "技術驗證周期長"],
    risks: ["浸沒式液冷若被其他散熱技術取代", "市場啟動時間延遲"]
  },

  "3013.TW": {
    id: "3013.TW", name: "晟銘電子", ticker: "3013.TW", flag: "🇹🇼",
    layer: 1, category: "重電與散熱基礎元件",
    badge: "儲能/液冷機殼",
    tagline: "AI 伺服器與儲能系統機殼",
    overview: "晟銘電子生產 AI 伺服器機殼與儲能系統特製機殼，是液冷系統槽體的重要供應商之一，與廣運機械在此利基市場競爭合作。",
    technology: { core: "金屬衝壓、鈑金加工、表面處理", products: ["AI 伺服器機殼", "儲能系統機殼", "液冷槽體"], advantages: ["台灣本土供應，交期短", "彈性小量接單能力"] },
    marketShare: { global: "台灣中小型機殼廠", desc: "市場分散，以本土客戶服務為主", competitors: ["廣運機械（6125.TW）", "勤誠興業"] },
    customers: { major: ["台灣 AI 伺服器整合商", "儲能系統廠商"], breakdown: "本土中小型客戶為主" },
    outlook: { positive: ["AI 伺服器與儲能需求帶動機殼訂單成長"], catalysts: ["浸沒式液冷槽體訂單放量"] },
    stockMetrics: {
      pe: "31.0x",
      eps: "NT$4.01",
      epg: "+62.1%",
      marketCap: "NT$255億",
      week52High: "NT$148",
      week52Low: "NT$90",
      divYield: "0.49%"
    ,
      sharesOut: "NT$8.1億"
    },
    challenges: ["低毛利金屬加工業務，難以提升獲利能力", "大廠競爭"],
    risks: ["規模難以擴大", "被整合商自製取代"]
  },

  // ── Layer 2 ──────────────────────────────────────────────────
  "POET": {
    id: "POET", name: "POET Technologies", ticker: "POET", flag: "🇨🇦",
    layer: 2, category: "光通訊模組與光引擎",
    badge: "CPO 光學中介層",
    tagline: "次世代 CPO 光學整合平台",
    overview: "POET Technologies 提供次世代 CPO（共封裝光學）光學中介層（Optical Interposer）架構整合平台，能夠在單一基板上整合雷射、調製器、探測器與波導，是 CPO 技術路線的重要創新者。若 CPO 成為主流，POET 的平台技術可能成為關鍵授權資產。",
    technology: { core: "POET 光學中介層（Optical Interposer）— 異質整合平台", products: ["光學中介層平台", "光引擎模組（400G/800G）", "CPO 整合解決方案"], advantages: ["獨特的平台技術允許電光異質整合", "不依賴特定晶圓代工廠，技術開放性高", "專利組合覆蓋 CPO 關鍵整合架構"] },
    marketShare: { global: "CPO 光學中介層市場超早期", desc: "目前商業化程度有限，技術驗證階段為主", competitors: ["Ayar Labs（矽光子 CPO）", "Intel（COUPE）", "台積電（內部）"] },
    customers: { major: ["AI 晶片廠商（未公開）", "光模組廠商技術合作"], breakdown: "正在洽談 Tier-1 客戶，進入量產驗證階段" },
    outlook: { positive: ["CPO 市場 2027-2030 年預計規模達數十億美元", "若平台技術獲大廠採用，爆發式成長可期"], catalysts: ["第一個 Tier-1 量產客戶確認", "與主要 ASIC 廠的設計合作宣布"] },
    stockMetrics: {
      pe: "infx",
      eps: "$-0.8400",
      epg: "+1075.3%",
      marketCap: "$2.1B",
      week52High: "$20.81",
      week52Low: "$3.87",
      divYield: "0%"
    ,
      sharesOut: "200M"
    },
    challenges: ["小型公司資金有限，技術商業化時間壓力大", "大型競爭者（Intel、台積電）也在做 CPO"],
    risks: ["技術商業化時程延遲", "大廠以自有平台取代外部方案", "資金不足導致競爭力下滑"]
  },

  "8996.TW": {
    id: "8996.TW", name: "高力熱處理", ticker: "8996.TW", flag: "🇹🇼",
    layer: 2, category: "熱能與電力調度系統整合",
    badge: "CDU + 熱交換",
    tagline: "CDU 與板式熱交換器供應商",
    overview: "高力熱處理供應關鍵的 CDU（冷卻液分配裝置）與板式熱交換器，是 AI 資料中心液冷系統的核心基礎設備，也是廢熱回收（Data Center Heat Reuse）解決方案的重要零件。",
    technology: { core: "板式熱交換器、CDU 設計製造、廢熱回收系統", products: ["板式熱交換器", "CDU（冷卻液分配裝置）", "廢熱回收熱交換模組"], advantages: ["熱交換器設計與材料選配經驗豐富", "台灣本土廠，符合 AI 機房就近供貨需求"] },
    marketShare: { global: "台灣 CDU/熱交換器利基廠", desc: "AI 液冷市場成長紅利受益者", competitors: ["Alfa Laval（瑞典，全球熱交換器龍頭）", "雙鴻（CDU 整機）"] },
    customers: { major: ["資料中心建設商", "台灣 AI 伺服器廠"], breakdown: "CDU 訂單跟隨 AI 資料中心建設節奏" },
    outlook: { positive: ["資料中心廢熱回收法規趨嚴，熱交換需求上升", "AI 機房液冷改裝（Retrofit）市場開啟"], catalysts: ["台灣大型資料中心液冷改裝項目"] },
    stockMetrics: {
      pe: "117.4x",
      eps: "NT$8.94",
      epg: "+311.8%",
      marketCap: "NT$975億",
      week52High: "NT$1310",
      week52Low: "NT$235",
      divYield: "0.42%"
    ,
      sharesOut: "NT$7.5億"
    },
    challenges: ["規模較小，接大單能力有限", "與 Alfa Laval 等國際大廠競爭"],
    risks: ["液冷標準若改變設計規格", "毛利率受壓"]
  },

  "FLNC": {
    id: "FLNC", name: "Fluence Energy", ticker: "FLNC", flag: "🇺🇸",
    layer: 2, category: "熱能與電力調度系統整合",
    badge: "AI 微電網儲能",
    tagline: "AI 資料中心微電網儲能整合",
    overview: "Fluence Energy（Siemens+AES 合資）負責 AI 資料中心微電網的儲能系統整合與軟體調度演算法（Mosaic 平台）。隨著 AI 資料中心電力消耗暴增，穩定可靠的儲能系統成為關鍵基礎設施，Fluence 是北美最大的電網級儲能系統整合商之一。",
    technology: { core: "大型電池儲能系統（BESS）整合、Mosaic 軟體調度平台", products: ["Gridstack（電網級儲能系統）", "Mosaic（儲能調度 AI 軟體）", "Ultrastack（超大型模組化儲能）"], advantages: ["Siemens+AES 背書，進入大型公用事業採購門檻低", "Mosaic 軟體平台具備 AI 優化調度能力", "北美市場關係網絡深厚"] },
    marketShare: { global: "北美電網級儲能系統整合前三大", desc: "與 Tesla Megapack、BYD（巴西/美國）等競爭", competitors: ["Tesla Megapack", "BYD 儲能", "Powin Energy"] },
    customers: { major: ["NextEra Energy（最大公用事業客戶）", "AES（母公司/客戶）", "資料中心開發商"], breakdown: "公用事業客戶為主，AI 資料中心儲能是新興成長市場" },
    outlook: { positive: ["美國 IRA 法案推動儲能部署加速", "AI 資料中心 24/7 用電需求推動配套儲能採購"], catalysts: ["EBITDA 轉正（持續觀察中）", "AI 資料中心大型儲能合約"] },
    stockMetrics: {
      pe: "102.8x",
      eps: "$-0.3100",
      epg: "+7.7%",
      peg: "3.18",
      marketCap: "$3.5B",
      week52High: "$33.51",
      week52Low: "$4.40",
      divYield: "0%"
    ,
      sharesOut: "178M"
    },
    challenges: ["毛利率仍為負（大型整合商常見問題）", "與 Tesla Megapack 的價格競爭激烈"],
    risks: ["儲能市場競爭加劇導致持續虧損", "美國政策風險（IRA 若修改）", "原材料（鋰電池）成本波動"]
  },

  "STEM": {
    id: "STEM", name: "Stem Inc.", ticker: "STEM", flag: "🇺🇸",
    layer: 2, category: "熱能與電力調度系統整合",
    badge: "儲能 AI 軟體調度",
    tagline: "Athena AI 儲能調度平台",
    overview: "Stem Inc. 專注於 AI 驅動的儲能調度軟體（Athena 平台），幫助資料中心和工商業客戶優化儲能系統使用，降低電力成本並提高電網穩定性。定位為儲能的「智慧大腦」，而非硬體製造。",
    technology: { core: "Athena AI 儲能調度平台、機器學習電力市場預測", products: ["Athena 軟體平台（SaaS 訂閱）", "儲能系統採購整合服務", "碳足跡追蹤模組"], advantages: ["純軟體商業模式，毛利率高", "跨廠商硬體相容，客戶不鎖定特定電池品牌"] },
    marketShare: { global: "AI 儲能調度軟體市場早期領導者", desc: "競爭者逐漸增多（Fluence Mosaic、Tesla Autobidder）", competitors: ["Tesla Autobidder", "Fluence Mosaic", "AutoGrid"] },
    customers: { major: ["工商業儲能客戶", "公用事業公司", "資料中心開發商"], breakdown: "軟體訂閱客戶持續增長，但硬體業務承壓" },
    outlook: { positive: ["儲能軟體市場需求大幅成長", "AI 資料中心電力管理需求上升"], catalysts: ["EBITDA 轉正觀察（改善中）"] },
    stockMetrics: {
      pe: "-1.7x",
      eps: "$-8.35",
      epg: "-10.8%",
      marketCap: "$87M",
      week52High: "$32.23",
      week52Low: "$5.92",
      divYield: "0%"
    ,
      sharesOut: "189M"
    },
    challenges: ["硬體業務虧損持續拖累整體財務", "需要盡快轉型為純軟體/平台商"],
    risks: ["Tesla、Fluence 等大廠推出競爭軟體", "客戶若選擇電池廠自帶軟體（如 CATL、BYD）"]
  },

  // ── Layer 3 ──────────────────────────────────────────────────
  "CSCO": {
    id: "CSCO", name: "思科", ticker: "CSCO", flag: "🇺🇸",
    layer: 3, category: "網絡交換機與 AI 伺服器整機",
    badge: "網絡設備巨頭",
    tagline: "全球品牌網絡設備龍頭",
    overview: "思科是全球最大的企業網絡設備廠商，正積極轉型為 AI 時代的網絡基礎設施提供商。在 NPO/CPO 架構下，思科與 Arista 是定義終端機台規格的品牌旗手，其 800G/1.6T 交換機設備是 AI 資料中心互連的關鍵骨幹。",
    technology: { core: "網絡交換晶片（與博通合作）、光互連、Silicon One 自研晶片", products: ["Nexus 9000 系列（資料中心交換機）", "Silicon One（自研交換晶片）", "Cisco 8000 系列路由器", "AI 推論邊緣設備"], advantages: ["全球最完整的企業網絡生態系", "Silicon One 自研晶片降低對博通的依賴", "軟體訂閱轉型提高收入可見度"] },
    marketShare: { global: "企業網絡設備全球市佔約 45%", desc: "在資料中心交換機市場與 Arista 競爭，Arista 在高速 AI 互連市場快速追趕", competitors: ["Arista Networks（ANET）", "Juniper（HPE 收購中）", "華為（中國市場）"] },
    customers: { major: ["所有大型企業與電信公司", "微軟 Azure（資料中心互連）", "亞馬遜 AWS"], breakdown: "企業客戶多元，AI 資料中心是新興高成長市場" },
    outlook: { positive: ["AI 資料中心網絡升級到 800G/1.6T 創造更換需求", "軟體訂閱轉型提高利潤率"], catalysts: ["Silicon One 交換晶片廣泛採用進度"] },
    stockMetrics: {
      pe: "40.1x",
      eps: "$3.00",
      epg: "+37.1%",
      peg: "1.67",
      marketCap: "$474.6B",
      week52High: "$121.43",
      week52Low: "$62.71",
      divYield: "1.40%"
    ,
      sharesOut: "4.2B"
    },
    challenges: ["Arista 在雲端客戶中快速搶佔市場份額", "Splunk 收購整合消化"],
    risks: ["AI 資料中心若從傳統以太網轉向 InfiniBand（NVIDIA 主導）", "企業 IT 支出景氣周期"]
  },

  "ANET": {
    id: "ANET", name: "Arista Networks", ticker: "ANET", flag: "🇺🇸",
    layer: 3, category: "網絡交換機與 AI 伺服器整機",
    badge: "AI 資料中心網絡王者",
    tagline: "超大型雲端資料中心網絡首選",
    overview: "Arista Networks 是 AI 資料中心網絡的最大贏家，憑藉 EOS 操作系統與博通 Tomahawk/Jericho 晶片的深度整合，成為 Meta、微軟、Google 等超大規模雲端廠商的首選網絡設備供應商。在 AI GPU 叢集（AI Cluster）互連方面，Arista 是以太網陣營的旗手。",
    technology: { core: "EOS（Extensible Operating System）、高密度以太網交換機", products: ["7800 系列（AI Spine 交換機）", "7500 系列（核心路由）", "CloudVision（網絡管理 SaaS）", "AI Networking（AI GPU 叢集專用互連）"], advantages: ["EOS 軟體靈活性遠超思科 NX-OS", "AI Networking 方案直接競爭 NVIDIA InfiniBand", "Meta/微軟長期戰略客戶關係"] },
    marketShare: { global: "100G+ 以太網交換機市佔約 35-40%", desc: "快速從思科手中奪取雲端資料中心市場份額",
      competitors: [
        { name: "思科（Cisco）", share: "~45%（企業整體）", note: "企業網路霸主，雲端市場份額被 Arista 持續侵蝕", threat: "medium" },
        { name: "NVIDIA InfiniBand", share: "~35%（AI 訓練互連）", note: "AI GPU 叢集訓練場景強勢，Arista 難以撼動", threat: "high" },
        { name: "Juniper/HPE", share: "~10%", note: "傳統企業網路，雲端競爭力弱", threat: "low" },
      ]
    },
    customers: { major: [
      { name: "微軟 Azure", note: "AI 資料中心高速互連", pct: "~20%" },
      { name: "Meta", note: "AI 叢集以太網互連", pct: "~16%" },
      { name: "Google Cloud", note: "GCP 網路升級", pct: "~8%" },
      { name: "金融業", note: "HFT 低延遲網路", pct: "~12%" },
      { name: "其他企業", note: "財富 500 企業", pct: "~44%" },
    ], breakdown: "Meta 和微軟合計佔收入約 35-40%；客戶集中度是最主要的業務風險" },
    outlook: { positive: ["AI GPU 叢集規模擴大，互連需求暴增", "400G→800G→1.6T 升級周期持續", "UEC（超以太網聯盟）標準若普及，取代 InfiniBand"], catalysts: ["UEC 標準採用速度", "Meta/微軟 AI 資料中心新一輪建設"] },
    challenges: ["客戶集中度高（Meta+微軟 35%+）", "NVIDIA InfiniBand 在 AI 訓練場景的優勢很難撼動"],
    risks: ["客戶自研網絡晶片（Meta 推出 Wedge 系列）", "NVIDIA InfiniBand 生態系鎖定更多 AI 客戶"],
    stockMetrics: {
      pe: "55.0x",
      eps: "$2.90",
      epg: "+25.0%",
      peg: "2.05",
      marketCap: "$200.8B",
      week52High: "$179.80",
      week52Low: "$85.58",
      divYield: "0%"
    ,
      sharesOut: "308M"
    },
  },

  "2382.TW": {
    id: "2382.TW", name: "廣達電腦", ticker: "2382.TW", flag: "🇹🇼",
    layer: 3, category: "網絡交換機與 AI 伺服器整機",
    platform: "NVDA",
    badge: "AI 伺服器 ODM 龍頭",
    tagline: "NVIDIA AI 伺服器最大 ODM",
    overview: "廣達是全球最大的筆電與伺服器 ODM，在 AI 伺服器市場已成為 NVIDIA GB200/NVL72 的主要組裝夥伴。廣達雲達（QCT）部門承接的 AI 伺服器訂單，是台灣 AI 供應鏈最大的訂單流量集散地，上游散熱（雙鴻/奇鋐）、電源、連接線等全部匯集於此。",
    technology: { core: "AI 伺服器機架組裝、散熱系統整合、GPU 叢集互連", products: ["GB200 NVL72 機架（NVIDIA 合作）", "QuantaGrid D54Q-2U（AI 推論伺服器）", "液冷 AI 伺服器", "網絡交換機白牌"], advantages: ["NVIDIA 最重要的 ODM 合作夥伴地位", "供應鏈管理能力世界一流", "液冷整合能力快速升級"] },
    marketShare: { global: "AI 伺服器 ODM 市佔第一（約 30-35%）", desc: "與緯穎並列 AI 伺服器 ODM 雙雄，廣達規模更大",
      competitors: [
        { name: "緯穎科技（6669.TW）", share: "~25%", note: "Meta 為主，OCP 架構效率強", threat: "medium" },
        { name: "鴻海（2317.TW）", share: "~20%", note: "Apple 為主，AI 伺服器快速追趕", threat: "medium" },
        { name: "英業達", share: "~10%", note: "傳統伺服器 ODM 轉型中", threat: "low" },
        { name: "緯創（Wistron）", share: "~8%", note: "傳統 ODM，AI 市佔偏低", threat: "low" },
      ]
    },
    customers: { major: [
      { name: "微軟 Azure", note: "AI 伺服器第一大客戶", pct: "~30%" },
      { name: "Google Cloud", note: "TPU 伺服器 / AI 基礎設施", pct: "~20%" },
      { name: "Meta", note: "AI 訓練叢集", pct: "~15%" },
      { name: "Amazon AWS", note: "Trainium 伺服器", pct: "~10%" },
      { name: "其他 CSP / 企業", note: "傳統伺服器 + 新 AI 客戶", pct: "~25%" },
    ], breakdown: "微軟是廣達 AI 伺服器最大買家，近年比重持續提高；GB200 NVL72 每台售價 $300K+，帶動 ASP 大幅提升" },
    outlook: { positive: ["AI 伺服器單價大幅高於傳統伺服器（$10K→$200K+）", "GB200 NVL72 機架出貨量 2025-2026 高速成長", "液冷整合能力提升，接更高單價訂單"], catalysts: ["GB200/NVL72 出貨節奏加速", "下一代 Rubin GPU 平台設計合作確認"] },
    challenges: ["AI 伺服器毛利率仍受 NVIDIA 壓縮（ODM 本質低毛利）", "供應鏈複雜度大幅提升（液冷、光模組整合）"],
    risks: ["NVIDIA 若改變 ODM 合作策略", "AI 伺服器需求若出現週期性調整"],
    stockMetrics: {
      pe: "19.7x",
      eps: "NT$18.92",
      epg: "+5.9%",
      peg: "1.02",
      marketCap: "NT$14358億",
      week52High: "NT$372",
      week52Low: "NT$252",
      divYield: "3.83%"
    ,
      sharesOut: "NT$387.6億"
    },
  },

  "6669.TW": {
    id: "6669.TW", name: "緯穎科技", ticker: "6669.TW", flag: "🇹🇼",
    layer: 3, category: "網絡交換機與 AI 伺服器整機",
    platform: "NVDA",
    badge: "Meta AI 伺服器首選",
    tagline: "高效率 AI 伺服器 ODM",
    overview: "緯穎科技（緯創旗下獨立公司）是以超高效率著稱的 AI 伺服器 ODM，Meta 是其最重要的策略客戶。緯穎的設計哲學強調能源效率（PUE）最佳化，符合 Meta 對綠色資料中心的要求，也是台灣 AI 伺服器 ODM 中毛利率相對較高的廠商。",
    technology: { core: "高效率 AI 伺服器設計、Open Compute Project（OCP）架構", products: ["AI GPU 伺服器（Meta 定製規格）", "網絡交換機白牌", "OCP 開放架構伺服器", "液冷 AI 伺服器"], advantages: ["OCP 開放架構深度參與，設計靈活性高", "Meta 長期客戶關係", "相對廣達毛利率更高（專注高效率設計）"] },
    marketShare: { global: "AI 伺服器 ODM 第二大（約 20-25%）", desc: "Meta 市場份額領先，微軟市場被廣達主導", competitors: ["廣達（2382.TW）", "鴻海（2317.TW）"] },
    customers: { major: ["Meta（最大客戶，約 40-50% 收入）", "Amazon AWS", "Microsoft（少量）"], breakdown: "Meta 集中度偏高，正積極分散客戶" },
    outlook: { positive: ["Meta AI 基礎設施投資 2025-2026 年大幅增加", "OCP 標準若普及有利緯穎設計能力變現"], catalysts: ["Meta Llama AI 基礎設施擴充計畫"] },
    stockMetrics: {
      pe: "20.8x",
      eps: "NT$265.72",
      epg: "+43.5%",
      marketCap: "NT$10258億",
      week52High: "NT$5880",
      week52Low: "NT$2360",
      divYield: "2.66%"
    ,
      sharesOut: "NT$17.9億"
    },
    challenges: ["Meta 單一客戶集中度過高（風險）", "液冷整合能力追趕廣達"],
    risks: ["Meta 若放緩資料中心投資", "AI 伺服器設計若轉向台積電 COUPE 要求 ODM 重新設計"]
  },

  "2317.TW": {
    id: "2317.TW", name: "鴻海精密", ticker: "2317.TW", flag: "🇹🇼",
    layer: 3, category: "網絡交換機與 AI 伺服器整機",
    platform: "NVDA",
    badge: "AI+機器人雙線",
    tagline: "全球最大代工廠轉型 AI 平台",
    overview: "鴻海（富士康母公司）是全球最大電子代工廠，AI 伺服器業務（GB200 組裝）、電動車平台（MIH）與人形機器人是三大轉型主軸。廣宇（2328.TW）是鴻海集團旗下負責高階連接線束的子公司，AIoT 業務正在成為鴻海第二成長曲線。",
    technology: { core: "大規模電子製造、GB200 AI 伺服器組裝、MIH 電動車平台", products: ["GB200 AI 伺服器（NVIDIA 合作）", "MIH 電動車底盤", "工業機器人 AFM 系列", "iGo 充電樁"], advantages: ["全球最大的供應鏈整合能力", "NVIDIA 多元 ODM 策略受益者", "墨西哥/印度建廠分散地緣政治風險"] },
    marketShare: { global: "代工製造全球最大，AI 伺服器 ODM 約 15-20%", desc: "AI 伺服器市佔低於廣達/緯穎，但基數龐大成長空間大", competitors: ["廣達", "緯穎", "和碩"] },
    customers: { major: ["Apple（最大客戶）", "NVIDIA GB200", "Amazon", "微軟"], breakdown: "Apple 仍是最大收入來源，AI 伺服器佔比快速上升中" },
    outlook: { positive: ["AI 伺服器業務從邊緣走向核心", "機器人業務若商業化成功，打開新估值空間"], catalysts: ["GB200/GB300 出貨節奏", "Optimus/人形機器人供應鏈合作宣布"] },
    stockMetrics: {
      pe: "22.1x",
      eps: "NT$13.41",
      epg: "+18.1%",
      peg: "1.28",
      marketCap: "NT$41446億",
      week52High: "NT$304",
      week52Low: "NT$151",
      divYield: "2.01%"
    ,
      sharesOut: "NT$1,386億"
    },
    challenges: ["AI 伺服器毛利率低於傳統代工", "MIH 電動車平台商業化進度緩慢"],
    risks: ["Apple 訂單轉移（地緣政治）", "AI 伺服器需求週期調整"]
  },

  "2328.TW": {
    id: "2328.TW", name: "廣宇科技", ticker: "2328.TW", flag: "🇹🇼",
    layer: 3, category: "網絡交換機與 AI 伺服器整機",
    badge: "AI 連接線束轉型",
    tagline: "鴻海旗下 AI 伺服器高階線束",
    overview: "廣宇科技是鴻海集團旗下，負責 AI 伺服器與特種機器人（AFM 電機）的高階內外部連接線束組裝。AI 伺服器連接線束（Power Cable、Signal Cable、Optical Cable Assembly）是廣宇正在切入的高價值業務。目前 AI 相關營收佔比約 1%，處於轉型陣痛期，但潛在成長空間大。",
    technology: { core: "高速連接線束組裝、精密連接器、電機繞組", products: ["AI 伺服器內部電源線束", "高速信號線束（DAC/AOC）", "AFM 電機連接線束", "機器人關節線束"], advantages: ["鴻海集團背書，打入 GB200 供應鏈", "機器人電機線束是差異化業務", "線束組裝技術門檻相對有限，但客戶認證壁壘高"] },
    marketShare: { global: "AI 伺服器線束供應商，市佔尚小", desc: "AI 線束市場快速成長，廣宇搶先佈局", competitors: ["正崴（鴻海系）", "Foxlink", "住友電工"] },
    customers: { major: ["鴻海集團內部（AI 伺服器組裝）", "機器人廠商（AFM 業務）"], breakdown: "鴻海集團內部銷售比重高，AI 伺服器線束為新增長點" },
    outlook: { positive: ["GB200 機架每台需要大量高規格線束", "機器人（AFM）業務若商業化，廣宇直接受益"], catalysts: ["AI 伺服器線束訂單明顯增加的時間點", "鴻海機器人規模化量產"] },
    stockMetrics: {
      pe: "39.1x",
      eps: "NT$1.56",
      epg: "-25.6%",
      peg: "0.71",
      marketCap: "NT$316億",
      week52High: "NT$64",
      week52Low: "NT$37",
      divYield: "1.62%"
    ,
      sharesOut: "NT$24.8億"
    },
    challenges: ["轉型速度慢（AI 佔比僅 1%）", "線束業務毛利率偏低"],
    risks: ["轉型若失敗，傳統業務萎縮", "機器人商業化時程延遲"]
  },

  "ETN": {
    id: "ETN", name: "伊頓", ticker: "ETN", flag: "🇺🇸",
    layer: 3, category: "電力輸配與重電終端",
    badge: "北美重電+UPS",
    tagline: "AI 資料中心電力管理旗手",
    overview: "伊頓（Eaton）是北美重電與電力管理大廠，其 UPS（不斷電系統）、PDU（電力分配單元）、配電盤是每個資料中心不可或缺的基礎設施。AI 資料中心的電力密度提升 3-5 倍，直接拉動伊頓高端配電產品的需求與售價。股價受資料中心推升創歷史新高。",
    technology: { core: "UPS（不斷電系統）、電力分配、中壓變壓器", products: ["9PX/93PR UPS（資料中心等級）", "PowerXpert PDU", "中壓開關設備（15-38kV）", "電力管理軟體（Brightlayer）"], advantages: ["全球資料中心電力基礎設施標準供應商", "中壓配電與 UPS 雙業務協同優勢", "軟體訂閱（Brightlayer）提升經常性收入"] },
    marketShare: { global: "UPS 市場全球前三（與 Schneider、Vertiv 並列）", desc: "在北美資料中心電力管理市場具主導地位", competitors: ["施耐德電氣（Schneider Electric）", "Vertiv（VIRT）", "GE Vernova（重電部分）"] },
    customers: { major: ["主要資料中心開發商（微軟/亞馬遜/Google 間接）", "大型工業與基礎設施客戶"], breakdown: "資料中心佔電力業務約 30-35%，且快速成長中" },
    outlook: { positive: ["AI 資料中心電力密度提升，UPS/PDU 升級換代", "中壓配電設備需求因電網更新創歷史高峰"], catalysts: ["美國 CHIPS Act 半導體廠建設電力需求", "資料中心電力系統從 480V 升級到 800V+"] },
    stockMetrics: {
      pe: "39.2x",
      eps: "$10.22",
      epg: "-9.4%",
      peg: "3.02",
      marketCap: "$155.6B",
      week52High: "$435.43",
      week52Low: "$311.90",
      divYield: "1.10%"
    ,
      sharesOut: "398M"
    },
    challenges: ["重電業務交期長（12-18 個月），短期供應瓶頸", "估值已高（AI 資料中心溢價充分反映）"],
    risks: ["資料中心建設若出現景氣反轉", "替代技術（直流配電系統）普及"]
  },

  "GEV": {
    id: "GEV", name: "GE Vernova", ticker: "GEV", flag: "🇺🇸",
    layer: 3, category: "電力輸配與重電終端",
    badge: "電網核心設備",
    tagline: "美國電網基礎設施旗艦",
    overview: "GE Vernova 是從 GE 能源部門分拆的獨立上市公司，業務涵蓋發電設備（天然氣渦輪機）、電網設備（變壓器、開關）、風力渦輪機，是 AI 時代電力供應最關鍵的重型設備製造商。其高壓變壓器因交期達 2-3 年而成為 AI 資料中心建設最大瓶頸之一。",
    technology: { core: "重型燃氣渦輪機（HA 系列）、高壓變壓器、風力渦輪機", products: ["7HA/9HA 天然氣渦輪機（全球效率最高）", "高壓 EHV 變壓器", "Vernova 風力渦輪機（Haliade-X）", "電網軟體（OPGEE）"], advantages: ["重型燃氣渦輪機全球最高效率（64%+）", "高壓變壓器是唯一無法快速量產的稀缺品", "電網現代化是必然趨勢，GEV 是最直接受益者"] },
    marketShare: { global: "大型燃氣渦輪機全球前二（與 Siemens Energy 並列）", desc: "高壓變壓器市場因產能稀缺而具備定價權", competitors: ["Siemens Energy", "三菱電機（MHPS）", "伊頓（配電部分）"] },
    customers: { major: ["美國電力公司（Duke Energy, NextEra 等）", "AI 資料中心開發商（間接）", "全球各國電網公司"], breakdown: "電力公用事業為主，AI 資料中心是新興高需求客戶" },
    outlook: { positive: ["美國電網老化需要大規模更新，替換需求確定性高", "AI 資料中心用電推動電廠與電網新建", "通貨膨脹帶動重電設備價格上漲"], catalysts: ["美國 IRA 電力基礎設施補貼落地", "高壓變壓器產能擴充"] },
    stockMetrics: {
      pe: "28.3x",
      eps: "$34.18",
      epg: "+1816.5%",
      peg: "1.67",
      marketCap: "$260.2B",
      week52High: "$1,182",
      week52Low: "$458.65",
      divYield: "0.21%"
    ,
      sharesOut: "272M"
    },
    challenges: ["重型製造業勞工成本高漲", "交期長導致收入確認延遲"],
    risks: ["能源轉型速度若導致天然氣發電需求萎縮", "風電業務毛利率持續承壓"]
  },

  "1503.TW": {
    id: "1503.TW", name: "士林電機", ticker: "1503.TW", flag: "🇹🇼",
    layer: 3, category: "電力輸配與重電終端",
    badge: "配電業務 72%",
    tagline: "台灣配電設備核心廠",
    overview: "士林電機是台灣三大重電廠商之一，配電業務（變壓器、開關設備）佔營收約 72%，為台灣重電廠中配電業務佔比最高者。AI 資料中心在台灣大量建設，直接帶動士電的配電設備訂單。",
    technology: { core: "配電變壓器、高壓開關設備、電力控制系統", products: ["電力變壓器（中壓）", "金屬封閉開關設備", "馬達驅動控制器"], advantages: ["台灣本土重電採購首選", "配電業務高佔比，受益於台灣資料中心建設"] },
    marketShare: { global: "台灣重電三雄之一（配電業務市佔最高）", desc: "台灣本土市場與出口市場雙線成長", competitors: ["華城電機（1519.TW）", "中興電工（1513.TW）"] },
    customers: { major: ["台電（台灣電力公司）", "資料中心開發商", "工業廠房"], breakdown: "台電為最大客戶，AI 資料中心訂單快速增加" },
    outlook: { positive: ["台灣 AI 資料中心建設潮（台積電/微軟/Google）拉動配電需求", "台電電網更新計畫帶動大型訂單"], catalysts: ["微軟/Google 在台資料中心建設時程"] },
    stockMetrics: {
      pe: "35.1x",
      eps: "NT$6.26",
      epg: "-14.5%",
      peg: "9.47",
      marketCap: "NT$1144億",
      week52High: "NT$252",
      week52Low: "NT$160",
      divYield: "2.05%"
    ,
      sharesOut: "NT$19.3億"
    },
    challenges: ["台灣本土市場有限", "海外拓展能力弱於競爭者"],
    risks: ["台電資本支出若縮減", "重電業務景氣周期"]
  },

  "1519.TW": {
    id: "1519.TW", name: "華城電機", ticker: "1519.TW", flag: "🇹🇼",
    layer: 3, category: "電力輸配與重電終端",
    badge: "外銷基期高",
    tagline: "台灣重電出口代表廠",
    overview: "華城電機是台灣重電三雄中外銷比重最高者，產品線涵蓋高壓變壓器、大型馬達、配電盤，出口至東南亞、中東等市場。台灣 AI 資料中心建設帶來本土訂單，外銷市場則受益於全球電力基礎建設投資潮。",
    technology: { core: "高壓電力變壓器、大型馬達、電力自動化", products: ["超高壓變壓器（69-345kV）", "大型工業馬達", "配電自動化系統"], advantages: ["高壓變壓器製造能力是台灣廠中最強", "外銷客戶分散，營收穩定性高於同業"] },
    marketShare: { global: "台灣重電三雄之一，外銷比重最高", desc: "高壓變壓器出口東南亞具競爭力", competitors: ["士林電機（1503.TW）", "中興電工（1513.TW）"] },
    customers: { major: ["台電", "東南亞電力公司", "台灣資料中心業者"], breakdown: "外銷比重約 50-60%，高於其他台灣重電廠" },
    outlook: { positive: ["全球電網更新投資潮（IEA 估計 2024-2030 年 $9000 億美元）", "東南亞電力需求高速成長"], catalysts: ["東南亞 AI 資料中心建設帶動電力基礎設施"] },
    stockMetrics: {
      pe: "62.4x",
      eps: "NT$13.98",
      epg: "+20.6%",
      marketCap: "NT$2758億",
      week52High: "NT$1115",
      week52Low: "NT$403",
      divYield: "1.03%"
    ,
      sharesOut: "NT$16億"
    },
    challenges: ["外銷競爭激烈（歐美大廠、中資廠商）", "匯率風險"],
    risks: ["外銷市場若受保護主義影響", "大型訂單交期長，收入波動大"]
  },

  "1513.TW": {
    id: "1513.TW", name: "中興電工", ticker: "1513.TW", flag: "🇹🇼",
    layer: 3, category: "電力輸配與重電終端",
    badge: "台灣重電三雄",
    tagline: "台灣電力設備多元廠",
    overview: "中興電工是台灣重電三雄之一，業務涵蓋配電設備、軌道運輸電力系統、再生能源連接系統，業務多元性高於士電與華城。捷運與台鐵電力系統是其傳統強項，AI 資料中心配電是新成長引擎。",
    technology: { core: "配電設備、軌道電力系統、再生能源連接", products: ["配電變壓器", "軌道電力牽引系統", "太陽能/風電連接設備", "電力監控系統"], advantages: ["軌道電力系統長期合約，收入穩定", "業務多元，抗景氣周期能力強"] },
    marketShare: { global: "台灣重電三雄之一", desc: "軌道電力市場在台灣幾乎壟斷", competitors: ["士林電機（1503.TW）", "華城電機（1519.TW）"] },
    customers: { major: ["台電", "台鐵/高鐵（軌道電力）", "資料中心業者"], breakdown: "政府機關（台電/台鐵）為主要客戶，提供收入穩定性" },
    outlook: { positive: ["台灣軌道電化持續推進（長期穩定訂單）", "AI 資料中心配電需求", "再生能源電力連接需求"], catalysts: ["台灣離岸風電電力系統連接合約"] },
    stockMetrics: {
      pe: "20.9x",
      eps: "NT$8.08",
      epg: "-43.8%",
      marketCap: "NT$835億",
      week52High: "NT$189",
      week52Low: "NT$142",
      divYield: "3.60%"
    ,
      sharesOut: "NT$13.9億"
    },
    challenges: ["政府採購流程緩慢，訂單確認周期長", "人才招募困難（重電工程師短缺）"],
    risks: ["政府基礎建設預算縮減", "競爭加劇"]
  },

  // ── Layer 4 ──────────────────────────────────────────────────
  "AMZN": {
    id: "AMZN", name: "亞馬遜 / AWS", ticker: "AMZN", flag: "🇺🇸",
    layer: 4, category: "全球雲端服務商（CSP）",
    badge: "NPO 最大採購者",
    tagline: "全球雲端龍頭，NPO 光模組大買家",
    overview: "亞馬遜 AWS 是全球最大的雲端服務商，也是當前 NPO（近封裝光學）架構的最大採購者，已釋出約 4000 萬個 1.6T 等級光模組需求。AWS Trainium 自研 AI 晶片由 Annapurna Labs 設計，台積電製造。AWS 是康寧（高規格光纖合約）、Lumentum（雷射光源）、新易盛（光模組）的重要客戶。",
    technology: { core: "自研 Trainium/Inferentia AI 晶片、自研 Nitro 虛擬化、Project Kuiper 衛星", products: ["AWS EC2（計算服務）", "AWS SageMaker（AI/ML 平台）", "Amazon Bedrock（基礎模型 API）", "Trainium 2 AI 訓練晶片"], advantages: ["全球 34% 雲端市場份額，最廣泛的服務組合", "Trainium 降低對 NVIDIA GPU 的依賴", "全球數據中心布局最廣泛（33個區域）"] },
    marketShare: { global: "雲端市場 34%（2025 年）", desc: "雲端三巨頭（AWS/Azure/Google）合計佔全球 65%+",
      competitors: [
        { name: "微軟 Azure", share: "~31%", note: "企業 AI 採用率第一，OpenAI 加持", threat: "high" },
        { name: "Google Cloud（GCP）", share: "~12%", note: "AI 模型技術最強，Gemini 商業化加速", threat: "medium" },
        { name: "阿里雲", share: "~4%", note: "亞太市場有力競爭者，中國市場主導", threat: "low" },
        { name: "Oracle Cloud", share: "~3%", note: "資料庫遷移客戶，AI 基礎設施快速建設", threat: "low" },
      ]
    },
    customers: { major: [
      { name: "電商（Online Store）", note: "自營零售業務", pct: "~41%" },
      { name: "第三方賣家（3P）", note: "平台抽成", pct: "~24%" },
      { name: "AWS 雲端服務", note: "企業 / 政府 / AI", pct: "~16%" },
      { name: "廣告服務", note: "Sponsored Products 等", pct: "~8%" },
      { name: "其他（Prime / 實體店）", note: "", pct: "~11%" },
    ], breakdown: "AWS 雖只佔收入 16%，卻貢獻 Amazon 約 60% 的營業利益；AI 推論服務是 AWS 成長最快的業務線" },
    outlook: { positive: ["AI 推論需求爆炸，Bedrock 平台快速成長", "4000 萬個 1.6T 光模組採購計畫顯示長期算力投資確定性"], catalysts: ["Trainium 3 量產降低 GPU 採購成本", "AWS 企業 AI 代理（Agent）服務商業化"] },
    challenges: ["資本支出龐大（2025 年預計 $1000 億美元）", "Azure/Google 在企業 AI 採用中搶奪份額"],
    risks: ["反壟斷監管（FTC）", "主要客戶自建私有雲"],
    stockMetrics: {
      pe: "31.7x",
      eps: "$8.55",
      epg: "+74.8%",
      peg: "1.83",
      marketCap: "$2.91T",
      week52High: "$278.56",
      week52Low: "$196.00",
      divYield: "0%"
    ,
      sharesOut: "10.5B"
    },
  },

  "GOOG": {
    id: "GOOG", name: "Google / Alphabet", ticker: "GOOG", flag: "🇺🇸",
    layer: 4, category: "全球雲端服務商（CSP）",
    badge: "TPU 自研晶片最強",
    tagline: "AI 原生雲端，聯發科與旭創最大客戶",
    overview: "Google 是 AI 技術最深厚的雲端巨頭，自研 TPU（Tensor Processing Unit）是全球技術最先進的 AI 訓練晶片之一。聯發科的 ASIC 業務最重要的客戶正是 Google（TPU 相關），旭創也拿下 Google TPU v9 的 2.4T 輕相干模組與 12.8T LPO 模組訂單。",
    technology: { core: "TPU v4/v5/v9 自研 AI 晶片、Tensor 深度學習框架", products: ["Google Cloud（GCP）", "Gemini AI 模型", "TPU 加速計算（自研）", "YouTube / Search（流量入口）"], advantages: ["TPU 架構在 AI 訓練效率上領先", "Gemini 模型接近 GPT-4o 水準", "搜索廣告業務提供龐大現金流支持 AI 投資"] },
    marketShare: { global: "雲端市場 12%，快速成長中", desc: "雲端市佔低於 AWS/Azure，但 AI 模型技術領先",
      competitors: [
        { name: "Amazon AWS", share: "~34%", note: "雲端最大，服務最廣泛，企業黏著度高", threat: "high" },
        { name: "微軟 Azure", share: "~31%", note: "企業 AI 整合最強，Office 365 鎖定效應", threat: "high" },
        { name: "阿里雲", share: "~4%", note: "亞太市場競爭，中國市場無法觸及", threat: "low" },
      ]
    },
    customers: { major: [
      { name: "廣告主（Search / YouTube）", note: "核心現金流引擎", pct: "~56%" },
      { name: "Google Cloud（GCP）", note: "企業雲端與 AI 服務", pct: "~11%" },
      { name: "YouTube 訂閱 / 其他", note: "Premium / 硬體", pct: "~10%" },
      { name: "其他 Bets", note: "Waymo / DeepMind 授權", pct: "~2%" },
      { name: "Google Play / Apps", note: "應用程式生態", pct: "~21%" },
    ], breakdown: "廣告收入佔約 56%，GCP 快速成長中（YoY +30%+）；Gemini AI 是廣告個人化與 GCP 的雙核成長引擎" },
    outlook: { positive: ["Gemini 大語言模型商業化加速", "TPU 自研降低成本，AI 服務毛利率更高"], catalysts: ["TPU v6 規格確認", "Gemini 企業應用訂閱增長"] },
    challenges: ["搜索廣告受 AI 替代威脅（ChatGPT 等）", "反壟斷訴訟（美國司法部）"],
    risks: ["AI 搜索取代傳統廣告模式", "歐盟 GDPR/競爭法規制"],
    stockMetrics: {
      pe: "28.7x",
      eps: "$13.10",
      epg: "+82.0%",
      peg: "1.48",
      marketCap: "$4.56T",
      week52High: "$404.47",
      week52Low: "$163.33",
      divYield: "0.23%"
    ,
      sharesOut: "12.2B"
    },
  },

  "MSFT": {
    id: "MSFT", name: "微軟", ticker: "MSFT", flag: "🇺🇸",
    layer: 4, category: "全球雲端服務商（CSP）",
    badge: "OpenAI 戰略夥伴",
    tagline: "企業 AI 最大整合者",
    overview: "微軟透過對 OpenAI 的投資（持股約 49%）掌握 GPT 系列模型的商業化權利，Azure OpenAI Service 成為企業 AI 採用最重要的入口。微軟是廣達 AI 伺服器最大客戶、康寧長期光纖供應協議簽署方，也與聯發科深度接洽 AI ASIC 合作。",
    technology: { core: "Azure 雲端平台、Microsoft 365 Copilot、Maia AI 自研晶片", products: ["Azure OpenAI Service（GPT-4o/o1）", "Microsoft 365 Copilot", "Azure AI 基礎設施", "Maia 100（自研 AI 訓練晶片）"], advantages: ["Office 365/Teams 2.3 億用戶是 AI Copilot 最大分發管道", "Azure + OpenAI 雙引擎，企業採用率第一", "GitHub Copilot 開發者生態深度布局"] },
    marketShare: { global: "雲端市場 31%，AI 企業應用第一", desc: "企業 AI 整合滲透率全球最高", competitors: ["AWS（34%）", "Google Cloud（12%）"] },
    customers: { major: ["Fortune 500 企業（Office 365）", "政府機關", "開發者（GitHub Copilot）"], breakdown: "B2B 企業客戶為主，Microsoft 365 訂閱是最穩定現金流" },
    outlook: { positive: ["Copilot 每月活躍用戶持續倍增", "Azure AI 新業務快速成長"], catalysts: ["Microsoft 365 Copilot 滲透率提升", "Azure OpenAI 新模型發布"] },
    stockMetrics: {
      pe: "26.8x",
      eps: "$16.79",
      epg: "+23.4%",
      peg: "1.39",
      marketCap: "$3.34T",
      week52High: "$555.45",
      week52Low: "$356.28",
      divYield: "0.81%"
    ,
      sharesOut: "7.4B"
    },
    challenges: ["資本支出暴增（$800 億美元/年）壓縮自由現金流", "AI 投資回報時程的市場疑慮"],
    risks: ["OpenAI 若另起爐灶或被競爭對手超越", "反壟斷監管（歐盟）"]
  },

  "META": {
    id: "META", name: "Meta Platforms", ticker: "META", flag: "🇺🇸",
    layer: 4, category: "全球雲端服務商（CSP）",
    badge: "開源 AI 先鋒",
    tagline: "Llama 開源 AI 生態系建構者",
    overview: "Meta 以開源 Llama 大語言模型策略顛覆 AI 市場，透過開放原始碼削弱 OpenAI/Google 的護城河，同時為自身廣告業務提供最強大的個人化引擎。Meta 是緯穎 AI 伺服器最大客戶，也是康寧長期光纖供應協議的簽署方，大舉採購 CPO 聯盟規格。",
    technology: { core: "Llama 系列大語言模型、MTIA 自研 AI 推論晶片", products: ["Llama 3/4 開源模型", "Meta AI 助理（WhatsApp/Instagram）", "MTIA（Meta Training and Inference Accelerator）", "廣告 AI 個人化引擎"], advantages: ["Llama 開源策略建立龐大開發者生態", "WhatsApp/Instagram/Facebook 32 億月活用戶", "廣告業務盈利能力極強，支撐 AI 投資"] },
    marketShare: { global: "社交媒體廣告全球第二（僅次 Google）", desc: "Llama 是最廣泛使用的開源 AI 模型", competitors: ["Google（廣告）", "TikTok（社交）", "OpenAI（AI 模型）"] },
    customers: { major: ["全球廣告主（30M+）", "企業 AI 應用開發者（Llama）"], breakdown: "廣告主佔近 100% 收入，Llama 生態系是戰略護城河" },
    outlook: { positive: ["廣告 AI 個人化持續提升 ARPU", "Llama 開源生態鎖定開發者", "Reality Labs（AR/VR）長期潛力"], catalysts: ["Llama 4 在企業採用中的規模增長", "Meta AI 助理月活突破里程碑"] },
    stockMetrics: {
      pe: "23.0x",
      eps: "$27.51",
      epg: "+62.4%",
      peg: "0.91",
      marketCap: "$1.61T",
      week52High: "$796.25",
      week52Low: "$520.26",
      divYield: "0.33%"
    ,
      sharesOut: "2.5B"
    },
    challenges: ["Reality Labs 每年虧損 $150-200 億（長期拖累）", "歐盟 GDPR 廣告數據監管"],
    risks: ["TikTok 持續搶奪年輕用戶廣告預算", "反壟斷（Instagram/WhatsApp 強制分拆風險）"]
  },

  "NEE": {
    id: "NEE", name: "NextEra Energy", ticker: "NEE", flag: "🇺🇸",
    layer: 4, category: "乾淨電力供給營運商",
    badge: "全球再生能源龍頭",
    tagline: "AI 算力的頭號綠電房東",
    overview: "NextEra Energy 是全球最大的再生能源發電商，擁有全球最大的太陽能與風力發電組合，是 AI 超大型資料中心（Microsoft/Amazon/Google）購買綠電 PPA（長期購電協議）的頭號對象。資料中心的 24/7 綠電需求完全符合 NextEra 的長期合約商業模式。",
    technology: { core: "大型太陽能農場、陸上/海上風電、電池儲能 BESS", products: ["長期購電協議（PPA）", "太陽能+儲能混合方案", "核電（Florida Power & Light）", "NextEra Energy Resources（再生能源子公司）"], advantages: ["全球最大可再生能源發電組合（超過 35GW）", "AI 資料中心 PPA 議價能力強（長期穩定對象）", "核電（基載電力）提供差異化綠電方案"] },
    marketShare: { global: "美國再生能源開發商市佔最大", desc: "與 Brookfield Renewable、Duke Energy Renewables 並列頂級，但規模最大", competitors: ["Brookfield Renewable（BEP）", "Enphase（分散式）", "Duke Energy"] },
    customers: { major: ["微軟（長期 PPA）", "亞馬遜 AWS（PPA）", "Google（PPA）", "Florida 一般電力用戶（FPL）"], breakdown: "Hyperscaler PPA 是成長最快的收入來源" },
    outlook: { positive: ["AI 資料中心 2025-2030 年新增用電需求等於新建幾個核電站", "IRA 法案補貼加速再生能源部署", "核電小型模組反應爐（SMR）布局"], catalysts: ["與 Hyperscaler 新 PPA 簽署宣布", "SMR（小型核反應爐）規劃進度"] },
    stockMetrics: {
      pe: "22.1x",
      eps: "$3.94",
      epg: "+160.0%",
      peg: "1.92",
      marketCap: "$181.5B",
      week52High: "$98.75",
      week52Low: "$67.20",
      divYield: "2.86%"
    ,
      sharesOut: "2.0B"
    },
    challenges: ["電網連接瓶頸（Interconnection Queue 等待時間過長）", "稀土材料（風機磁鐵）供應鏈風險"],
    risks: ["美國能源政策轉向化石燃料", "利率上升壓縮再生能源 IRR（資本密集型）"]
  },

  "BE": {
    id: "BE", name: "Bloom Energy", ticker: "BE", flag: "🇺🇸",
    layer: 4, category: "乾淨電力供給營運商",
    badge: "燃料電池專家",
    tagline: "AI 資料中心 24/7 不間斷微電網",
    overview: "Bloom Energy 是固態氧化物燃料電池（SOFC）專家，為 CSP 提供全天候不間斷的微電網乾淨電力。燃料電池的優勢在於 24/7 可用（不像太陽/風力受天氣影響），是 AI 資料中心高可靠度電力需求的理想補充方案。",
    technology: { core: "固態氧化物燃料電池（SOFC）、氫能應用", products: ["Bloom Energy Server（SOFC 發電模組）", "電解槽（綠氫生產）", "資料中心微電網整合方案"], advantages: ["SOFC 效率最高的燃料電池技術（65%+ 電效率）", "能使用天然氣、沼氣、氫氣多種燃料", "不受天氣影響的穩定電力輸出"] },
    marketShare: { global: "SOFC 市場幾乎唯一商業化廠商（全球）", desc: "SOFC 技術壁壘極高，後進者短期無法追趕", competitors: ["Ballard Power（PEMFC）", "Plug Power（PEMFC 氫能）", "傳統柴油發電機"] },
    customers: { major: ["韓國 SK ecoplant（最大客戶）", "微軟（資料中心微電網）", "亞馬遜", "台積電（台灣廠試點）"], breakdown: "韓國 SK 是最重要客戶，美國資料中心客戶快速增加" },
    outlook: { positive: ["AI 資料中心對高可靠度電力的迫切需求", "氫能市場若商業化，SOFC 電解槽業務爆發", "台積電等半導體廠需要穩定潔淨電力"], catalysts: ["大型資料中心 SOFC 部署宣布", "氫能電解槽規模化訂單"] },
    stockMetrics: {
      pe: "65.5x",
      eps: "$-0.0300",
      epg: "+130.4%",
      peg: "1.51",
      marketCap: "$81.1B",
      week52High: "$322.83",
      week52Low: "$18.12",
      divYield: "0%"
    ,
      sharesOut: "308M"
    },
    challenges: ["設備成本仍高（$5,000-10,000/kW，高於傳統電力）", "SOFC 運維複雜度較高"],
    risks: ["天然氣價格若大幅上漲侵蝕成本優勢", "政策支持若減少（IRA 氫能補貼）"]
  },

  "TSLA": {
    id: "TSLA", name: "特斯拉", ticker: "TSLA", flag: "🇺🇸",
    layer: 4, category: "物理 AI 與移動算力終端",
    badge: "機器人+儲能雙飛輪",
    tagline: "Dojo 超算 + Optimus 機器人 + Megapack",
    overview: "特斯拉在 2026 年已全面將重心從傳統電動車銷售轉向 Optimus 人形機器人與 Cybercab 無人計程車。自研 Dojo 超級電腦提供 FSD/Optimus AI 訓練算力。能源部門（Megapack/Powerwall）成為第二獲利支柱，為 AI 資料中心提供全套儲能與 Autobidder 軟體交易技術。",
    technology: { core: "自研 Dojo D1 超算晶片、FSD 自動駕駛神經網絡、SOFC 電池技術", products: ["Optimus 人形機器人", "Cybercab（無人計程車）", "Megapack（電網級儲能）", "FSD（完全自動駕駛）", "Autobidder（儲能套利 AI 軟體）"], advantages: ["全球最大的真實世界 AI 訓練數據集（2M+ 輛電動車）", "Megapack 毛利率 25%+，遠高於汽車", "Autobidder 能源套利軟體無競爭對手"] },
    marketShare: { global: "電動車市佔 17-20%（2025），人形機器人市場尚早期", desc: "電動車業務受比亞迪競爭壓縮，機器人是下一個增長故事", competitors: ["比亞迪（電動車）", "Figure AI/波士頓動力（機器人）", "Tesla Megapack vs. Fluence/BYD（儲能）"] },
    customers: { major: ["個人消費者（電動車）", "電網運營商（Megapack）", "Robotaxi 乘客（未來）"], breakdown: "能源業務比重正在上升，Megapack 訂單已超過汽車等待清單" },
    outlook: { positive: ["Optimus 若量產，馬斯克預計 2030 年出貨 1 億台", "Cybercab 無人計程車 2026 年在德州上市", "能源業務自由現金流持續提升"], catalysts: ["Optimus 出貨量里程碑", "Cybercab 正式量產時程", "Dojo 算力對外開放（AI 雲端服務）"] },
    stockMetrics: {
      pe: "399.8x",
      eps: "$1.09",
      epg: "+8.3%",
      peg: "6.00",
      marketCap: "$1.64T",
      week52High: "$498.83",
      week52Low: "$273.21",
      divYield: "0%"
    ,
      sharesOut: "3.2B"
    },
    challenges: ["汽車業務毛利率持續下滑（價格戰）", "Optimus 量產時程屢次延遲"],
    risks: ["馬斯克過度分心（xAI、X、SpaceX）影響執行力", "比亞迪在全球市場持續壓低電動車定價", "監管風險（FSD 事故）"]
  },

  "BRK.B": {
    id: "BRK.B", name: "波克夏哈薩威", ticker: "BRK.B", flag: "🇺🇸",
    layer: 4, category: "終極資本堡壘",
    badge: "崩盤最強防禦盾",
    tagline: "電網壟斷者，股市崩盤防禦首選",
    overview: "波克夏哈薩威堅決不碰高溢價科技股，但透過全資子公司 BHE（Berkshire Hathaway Energy）壟斷美國實體電網與天然氣管線，是整個 AI 時代電力基礎建設的隱形地主。股市崩盤時，波克夏因龐大現金儲備與防禦性業務組合，是最強的避風港資產。",
    technology: { core: "保險業務（浮存金模式）、BHE 電力基礎設施", products: ["保險（GEICO/Gen Re/BH Reinsurance）", "BHE 電網（美國多州壟斷）", "BNSF 鐵路", "工業製造（Precision Castparts、Lubrizol）"], advantages: ["$1,800 億美元+ 現金儲備（2025年），市場崩盤時的最強武器", "BHE 電力壟斷提供確定性長期現金流", "巴菲特選股紀律確保長期資本增值"] },
    marketShare: { global: "美國保險市場前三；BHE 壟斷多個州的電力輸配", desc: "BHE 業務因 Iowa 太陽能虧損問題正在重組（2023-2025）", competitors: ["AIG、Chubb（保險）", "Duke Energy、NextEra（電力）"] },
    customers: { major: ["整個美國（保險+電力+鐵路服務）"], breakdown: "業務多元，無單一主要客戶風險" },
    outlook: { positive: ["龐大現金儲備在高利率環境下產生豐厚利息收入", "BHE 電網若成為 AI 資料中心電力需求受益者", "股市下跌時「強力買進」機會"], catalysts: ["大型收購機會（巴菲特風格）", "BHE 再生能源業務重組完成"] },
    stockMetrics: {
      pe: "14.1x",
      eps: "$33.59",
      epg: "+119.6%",
      peg: "10.06",
      marketCap: "$1.02T",
      week52High: "$516.85",
      week52Low: "$455.19",
      divYield: "0%"
    ,
      sharesOut: "1.44B"
    },
    challenges: ["BHE Iowa 電網野火賠償訴訟（最大已知風險）", "龐大規模限制未來回報率"],
    risks: ["接班人問題（巴菲特/芒格後波克夏文化能否維持）", "BHE 監管風險（電力公用事業監管）"]
  },

  // ── 新增 Layer 1 公司 ──────────────────────────────────────────
  "ASX": {
    id: "ASX", name: "日月光投控", ticker: "ASX / 3711.TW", flag: "🇹🇼",
    layer: 1, category: "晶圓代工與先進封裝",
    badge: "VIPack 封裝龍頭", tagline: "全球最大 IC 封測廠，先進封裝主導者",
    overview: "日月光投控（ASE Technology）是全球最大的 IC 封裝測試服務廠（OSAT），市佔率逾 30%。自有 VIPack（Vertical Integration for Power） 先進封裝平台，整合 Fan-Out、2.5D/3D Stacking、System-in-Package，是台積電 CoWoS 之外最重要的 AI 晶片封裝選擇。隨著 AI GPU/ASIC 晶片需求暴增，日月光先進封裝產能成為整個 AI 供應鏈的重要瓶頸與受益點。",
    technology: { core: "VIPack 先進封裝平台、Fan-Out、2.5D/3D 堆疊、SiP 系統封裝", products: ["VIPack（Fan-Out 與 2.5D 整合平台）", "CoS（Chip on Substrate）", "SiP（System in Package）", "傳統 BGA/QFN 封裝測試"], advantages: ["全球最大 OSAT 規模優勢，良率與交期最有競爭力", "VIPack 是 CoWoS 之外的重要替代封裝路線", "與台積電互補而非競爭，可接台積電下游封測訂單"] },
    marketShare: { global: "OSAT 市佔 ~32%（全球第一）", desc: "與安靠（Amkor）、長電科技並列三大，但日月光規模最大", competitors: ["Amkor（韓系）", "長電科技（中資）", "矽品（日月光旗下）"] },
    customers: { major: ["博通（AI ASIC 封裝）", "高通（SiP）", "AMD", "聯發科"], breakdown: "AI ASIC 與 HPC 晶片是近年成長最快的封裝客戶群" },
    outlook: { positive: ["AI ASIC/HPC 晶片需求拉動先進封裝產能滿載", "VIPack 技術競爭力持續提升"], catalysts: ["VIPack 大客戶量產訂單確認", "AI ASIC 先進封裝滲透率提升"] },
    stockMetrics: {
      pe: "59.0x",
      eps: "$0.6500",
      epg: "+87.6%",
      peg: "4.96",
      marketCap: "$84.1B",
      week52High: "$41.10",
      week52Low: "$9.26",
      divYield: "0.93%"
    ,
      sharesOut: "NT$70.4億"
    },
    challenges: ["台積電 CoWoS 吸走部分高端訂單", "先進封裝研發資本支出龐大"],
    risks: ["台積電前道與後道整合進一步壓縮日月光市場", "中國 OSAT 廠（長電、通富微）快速追趕"]
  },

  "6789.TW": {
    id: "6789.TW", name: "採鈺科技", ticker: "6789.TW", flag: "🇹🇼",
    layer: 1, category: "微型光學加工",
    badge: "Metalens 晶圓級製造", tagline: "超透鏡與微透鏡晶圓級製造專家",
    overview: "採鈺科技（VisEra Technologies，台積電子公司）是全球領先的晶圓級微光學加工廠，核心技術為超透鏡（Metalens）與微透鏡陣列（Microlens Array）的晶圓級製造。CPO 架構中的光引擎需要極精密的微光學元件整合，採鈺的晶圓級製程讓這些光學元件的製造能與半導體製程融合，大幅降低 CPO 組裝成本。",
    technology: { core: "Metalens（超透鏡）奈米結構製造、晶圓級光學製程、微透鏡陣列", products: ["晶圓級超透鏡（Metalens）", "色彩濾片陣列（Color Filter）", "影像感測器前端光學製程", "AR/VR 波導光學元件"], advantages: ["台積電子公司背書，製程能力與台積電緊密整合", "超透鏡技術可取代傳統玻璃鏡頭，成本與體積大幅優化", "晶圓級製造讓光學元件與晶片封裝一體整合"] },
    marketShare: { global: "晶圓級超透鏡製造全球領先", desc: "Metalens 市場尚早期，採鈺具備先發優勢", competitors: ["Metalenz（美國，純 Metalens 設計）", "傳統光學元件廠（Largan 等）"] },
    customers: { major: ["台積電生態系客戶", "AR/VR 裝置製造商", "CPO 光引擎廠商"], breakdown: "影像感測器應用是現有主要收入，CPO 光學應用是新興市場" },
    outlook: { positive: ["CPO 光引擎需求帶動微光學元件採購", "AR/VR 裝置普及推動 Metalens 商業化"], catalysts: ["Apple Vision Pro 或主要 AR 裝置大規模採用 Metalens"] },
    stockMetrics: {
      pe: "133.5x",
      eps: "NT$4.00",
      epg: "+75.5%",
      marketCap: "NT$1700億",
      week52High: "NT$642",
      week52Low: "NT$198",
      divYield: "0.57%"
    ,
      sharesOut: "NT$9.5億"
    },
    challenges: ["Metalens 量產良率仍在爬升", "市場教育期較長"],
    risks: ["Metalens 商業化若慢於預期", "傳統光學廠轉型切入競爭"]
  },

  "5274.TW": {
    id: "5274.TW", name: "信驊科技", ticker: "5274.TW", flag: "🇹🇼",
    layer: 1, category: "控制與電源安全晶片",
    platform: "NVDA",
    badge: "BMC 全球七成壟斷",
    tagline: "全球每台 AI 伺服器的遠端眼睛與守門人",
    overview: "信驊科技（Aspeed Technology）是全球 BMC（底板管理控制器）晶片的絕對霸主，市佔約 70%。BMC 是伺服器的「遠端眼睛與守門人」——負責在 CPU/GPU 主系統外獨立監控溫度、電壓、風扇、遠端開關機，即使主系統當機仍能持續運作。NVIDIA GB200 NVL72 整機機櫃規格直接指定搭載大量 Aspeed BMC：每台 NVL72 機架需要高達 72 顆信驊 BMC 晶片（比傳統伺服器的 10-20 顆多出 3-7 倍）。這種幾乎壟斷的市場地位，加上 AI 伺服器 BMC 用量的倍增效應，讓信驊成為整條 NVIDIA 生態系中「確定性最高、最難被替代」的隱形大受益者。",
    technology: {
      core: "BMC（Baseboard Management Controller）晶片設計，KVM-over-IP 遠端管理，OpenBMC 開源生態系主導",
      products: [
        "ASPEED AST2600 系列 BMC — 現役主力，支援 DDR5、PCIe Gen5，AI 伺服器標配",
        "ASPEED AST2700 系列 BMC — 下一代，支援 GB200 NVL 架構複雜管理節點",
        "KVM-over-IP 模組 — 允許遠端操作伺服器畫面，資料中心維運必需",
        "OCP（Open Compute Project）BMC — 超大規模資料中心定制版，Meta/Microsoft 大量採用"
      ],
      advantages: [
        "OpenBMC 生態系主導者：NVIDIA/Meta/Amazon 的 BMC 韌體都基於 Aspeed 平台開發，切換成本極高",
        "NVL72 機架需 72 顆：AI 伺服器 BMC 用量倍增效應，傳統 10-20 顆 → AI 機架 72-120 顆",
        "設計門檻高：BMC 需同時管理複雜的電源序列、感測器矩陣與安全啟動，競爭者難以在短期追上",
        "客戶黏著度極強：BMC 韌體與平台深度整合，換晶片等於整個管理系統重寫"
      ]
    },
    marketShare: {
      global: "~70%（全球 BMC 市場）",
      desc: "BMC 市場幾乎是壟斷局面。新唐（4919）以 20-25% 居二，其他幾乎可忽略。AI 伺服器浪潮讓信驊的定價權進一步強化",
      competitors: [
        { name: "新唐科技（4919.TW）", share: "~22%", threat: "low", note: "BMC 二哥，靠客製化與性價比差異化，Microsoft 二供" },
        { name: "其他", share: "~8%", threat: "low", note: "市場分散，無法在技術與生態上挑戰 Aspeed" }
      ]
    },
    customers: {
      major: [
        { name: "廣達（NVIDIA GB200 首席代工）", pct: "~25%", note: "最大直接客戶，每台 NVL72 機架 72 顆 BMC 主供" },
        { name: "緯穎", pct: "~18%", note: "超大規模 AI 伺服器代工，Aspeed BMC 主採" },
        { name: "SuperMicro（美超微）", pct: "~15%", note: "美系 AI 伺服器品牌，Aspeed 核心供應商" },
        { name: "鴻海精密", pct: "~12%", note: "NVIDIA GB200 / 一般伺服器代工" },
        { name: "Meta（OCP 直採）", pct: "~12%", note: "Open Compute Project 客制 BMC，直接採購" },
        { name: "其他 ODM/品牌商", pct: "~18%", note: "Dell、HP、Lenovo 等全球伺服器品牌" }
      ],
      breakdown: "超過 80% 收入來自 AI 伺服器生態系（NVIDIA GB200 / 一般 AI 伺服器）。GB200 NVL72 機架每台需 72 顆，相比傳統伺服器 10-20 顆，單機需求量倍增 3-7 倍。Meta 等超大規模 CSP 透過 OCP 開放計算計畫直接採購定制版 BMC，跳過 ODM 中間層。"
    },
    outlook: {
      positive: [
        "GB200 NVL72 全速量產：每台機架 72 顆 BMC，需求量倍增 3-7 倍，每個 Blackwell 出貨季都是信驊的超級加速器",
        "AST2700 新世代 BMC 2026 量產：支援更複雜的 NVL 架構管理節點，單顆 ASP（售價）大幅提升",
        "Rubin 架構（2026 H2）：更大機架、更多管理節點，BMC 用量再次跳升",
        "OpenBMC 生態壟斷加深：越多廠商基於 Aspeed 平台開發韌體，切換成本越高、護城河越深"
      ],
      catalysts: [
        "GB200 NVL72 / NVL576 季度出貨量（直接換算 BMC 需求）",
        "AST2700 量產進度與 ASP 提升幅度",
        "Rubin 架構機架 BMC 規格書正式公布（觸發新一輪設計導入）"
      ]
    },
    stockMetrics: {
      pe: "~65x (TTM)",
      eps: "~NT$75-85（2026 預估）",
      epg: "+50%+ YoY",
      peg: "~1.1",
      marketCap: "~NT$700-800億",
      week52High: "NT$7,000+",
      week52Low: "NT$3,500",
      divYield: "~0.5%"
    ,
      sharesOut: "NT$4.66億"
    },
    notes: `【信驊（5274）分析備忘】
─────────────────────────────
■ 核心定位
全球 BMC 晶片 ~70% 壟斷
每台 GB200 NVL72 機架需 72 顆（vs 傳統伺服器 10-20 顆）
= 同一客戶採購量倍增 3-7 倍，不需要搶新客戶就有爆發性成長

■ 護城河本質
OpenBMC 生態：全球 BMC 韌體都基於 Aspeed 平台開發
→ 客戶換晶片 = 整個管理系統韌體重寫（切換成本極高）
→ NVIDIA、Meta、Amazon 的工程師都在 Aspeed 平台上工作

■ 與新唐（4919）的差異
  信驊：BMC 霸主（主供，70%），護城河深，估值高
  新唐：BMC 二哥（二供，22%）+ BMS 電池管理，轉機股邏輯

■ 關鍵觀察指標
• 每季 Blackwell 機架出貨量（1台 NVL72 = 72顆 BMC）
• AST2700 新一代 BMC 量產進度（ASP 提升）
• Rubin 架構機架 BMC 規格（下一輪需求倍增節點）

■ 風險
• 估值已高（P/E ~65x）：已充分 Price in GB200 需求
• 唯一真實威脅：NVIDIA 若自研 BMC（機率極低，但存在）
• 新唐持續搶 Second Source 份額（侵蝕 70% 壟斷）`,
    challenges: [
      "估值極高（P/E ~65x），GB200 出貨節奏若有任何延遲，市場立即修正",
      "新唐（4919）持續以 Second Source 策略侵蝕份額，Microsoft Azure 等大廠強制雙供應商",
      "NVIDIA 若未來自研 BMC 晶片（極低機率，但等同護城河崩解的黑天鵝）",
      "AI 伺服器架構若大幅簡化管理節點，減少 BMC 用量（長期技術演進風險）"
    ],
    risks: [
      "GB200 / Rubin 出貨若再度延遲，72顆/台的乘數效應反向放大業績落空衝擊",
      "估值泡沫：P/E 65x 已超前部署多年成長預期，任何一季不如預期即面臨 30%+ 修正風險",
      "OpenBMC 開源生態若出現強力替代平台，切換成本壁壘下降",
      "台積電產能限制（BMC 使用成熟製程，相對可控，但整體 AI 熱度降溫會傳導）"
    ]
  },

  "4919.TW": {
    id: "4919.TW", name: "新唐科技", ticker: "4919.TW", flag: "🇹🇼",
    layer: 1, category: "控制與電源安全晶片",
    platform: "NVDA",
    badge: "AI 伺服器千手觀音",
    tagline: "BMC 全球第二 + 日本松下 BMS 技術傳人",
    overview: "新唐科技（Nuvoton Technology，瑞昱子公司）從傳統鍵盤控制器、家電 MCU 廠徹底質變為 AI 資料中心的隱形中樞。核心武器一：AI 伺服器 BMC（底板管理晶片）——傳統伺服器每機架需 10-20 顆，AI 伺服器因架構複雜暴增至 80-120 顆，新唐市佔全球第二（20-25%）。核心武器二：BMS 電池管理晶片——源自收購日本松下半導體的高壓 BMS 技術，直打 AI 資料中心強制導入的 BBU 不斷電電池模組。2026 年 4 月起漲價 20%，宣告 MCU 殺價戰終結、毛利率止跌反彈，Q1 正式扭虧為盈（EPS 0.02 元），毛利率單季從 34.3% 暴衝至 39.3%。",
    technology: {
      core: "BMC（Baseboard Management Controller）晶片、高壓 BMS 電池管理 IC、具 NPU 的邊緣運算 MCU，自有日本 6/8 吋晶圓廠（NTCJ）",
      products: [
        "NPCM 系列 BMC 晶片（AI 伺服器遠端管理標準平台，OpenBMC 生態系）",
        "高壓 BMS MCU（源自松下半導體技術，BBU 電池備援模組核心）",
        "M55M 系列 MCU with NPU（邊緣 AI 推論，IoT 應用）",
        "6吋/8吋 成熟製程 IC 代工（NTCJ，車用/工控）"
      ],
      advantages: [
        "每台 GB200 NVL72 Rack 機架含 80-120 顆 BMC，AI 伺服器需求倍增效應最直接",
        "日本松下高壓 BMS 技術壁壘深厚，競爭者難以短期複製，直打 AI 資料中心 BBU 需求",
        "2026/04 調漲 6 吋晶圓代工報價 20%，終結中資殺價競爭，重奪定價權",
        "中美關稅戰豁免優勢：台灣廠享轉單紅利，受益中國 MCU 競爭者成本上升"
      ]
    },
    marketShare: {
      global: "BMC 晶片全球第二（市佔 20-25%）",
      desc: "BMC 市場被信驊（Aspeed，5274）以約 70% 壟斷，新唐以 20-25% 居二。差異化策略：深度定制化服務 + 性價比，與廣達、緯穎等台廠合作緊密。BMS 市場則因松下技術背書享有高壁壘。",
      competitors: [
        { name: "信驊（Aspeed，5274）", share: "~70%", note: "BMC 絕對霸主，新唐必須在客製化與性價比上差異化", threat: "high" },
        { name: "瑞薩（日）", share: "MCU 市場強", note: "車用 MCU 競爭者，BMS 有重疊", threat: "medium" },
        { name: "兆易創新（中資）", share: "消費 MCU", note: "低階 MCU 殺價，但 BMC/BMS 高端尚無法複製", threat: "low" },
      ]
    },
    customers: {
      major: [
        { name: "廣達（NVIDIA GB200 首席代工）", note: "GB200 機架 BMC/BMS 最大直接客戶，NVIDIA Spec 制定後廣達向新唐拉貨", pct: "~30%" },
        { name: "緯穎（NVIDIA GB200 代工）", note: "超大規模 AI 伺服器，BMC/BMS 採購量快速成長", pct: "~18%" },
        { name: "Microsoft Azure（BMC 二供直採）", note: "微軟強制要求供應鏈安全：信驊為主、新唐為第二供應商（Second Source）", pct: "~15%" },
        { name: "SuperMicro（美超微）", note: "美系 AI 伺服器品牌商，BMC 直採", pct: "~15%" },
        { name: "儲能 / BBU 廠商", note: "AI 機櫃強制標配 BBU 不斷電系統，BMS 電池管理晶片需求爆發", pct: "~12%" },
        { name: "工控/車用", note: "NTCJ 日本晶圓廠傳統客群，穩定基本盤", pct: "~10%" },
      ],
      breakdown: "名義上的直接客戶是 ODM 代工廠（廣達/緯穎等），但 NVIDIA Blackwell GB200 的 BMC/BMS Spec 是真正的需求驅動力——NVIDIA 每批 GB200 的出貨節奏，直接決定新唐的季度收入斜率。Microsoft Azure 因供應鏈安全策略強制導入「信驊主供、新唐二供」雙供應商機制，為新唐帶來直接的大廠訂單。BBU 不斷電系統已於 2026 年全面強制標配 GB200 機櫃，BMS 晶片為第二成長引擎。"
    },
    outlook: {
      positive: [
        "GB200 NVL72 Rack 全速出貨：每機架 80-120 顆 BMC，相比傳統伺服器 10-20 顆，需求量倍增 6-8 倍",
        "2026/04 漲價 20% 已生效，Q1 毛利率 39.3%（前季 34.3%），下半年持續拉升",
        "法人預估 2026 全年 EPS 4.5-5.2 元，從 2025 虧損 -3.97 元完成 V 型反轉",
        "中美關稅戰加劇：台廠轉單效應持續，中資 MCU 廠成本上升",
        "BBU 電池備援模組強制導入 AI 資料中心，BMS 晶片長線需求確定"
      ],
      catalysts: [
        "2026 Q3 NPCM 新世代 BMC 晶片進入量產（支援更多感測器節點）",
        "NTCJ 日本晶圓廠稼動率回升（車用市場回暖，折舊壓力解除）",
        "GB200 出貨超預期加速（BMC 需求對應倍增）"
      ]
    },
    stockMetrics: {
      pe: "N/A（轉機年）",
      eps: "NT$4.5~5.2（2026 預估）",
      epg: "V型反轉",
      marketCap: "NT$約 1,000 億",
      week52High: "NT$230",
      week52Low: "NT$50",
      divYield: "0.21%"
    ,
      sharesOut: "NT$35.9億"
    },
    notes: `【新唐（4919）轉機股分析筆記】2026/06

▌ NVIDIA 與新唐的間接連動結構
NVIDIA 不是新唐的直接付款客戶，但 NVIDIA 的算力規格擴張是
決定新唐 2026 年財務轉折點的最高指揮官。

供應鏈結構：
  NVIDIA（制定 GB200 BMC/BBU Spec 規格）
       ↓ Spec 指定需要多少顆 BMC + BBU 標配要求
  廣達/緯穎/鴻海（按 Spec 向新唐大量拉貨）
       ↓ 出貨 BMC 晶片 + BMS 晶片
  新唐科技（產品出貨、收款）

→ NVIDIA Blackwell 出貨節奏 = 新唐季度收入的直接斜率

▌ Microsoft Azure 二供（Second Source）直採
微軟為供應鏈安全強制要求雙供應商機制：
  主供：信驊（Aspeed，70% BMC 壟斷）
  二供：新唐科技（直接進入微軟 Azure 採購名單）
這讓新唐拿到大廠直採資格，是突破「只靠 ODM 間接」的關鍵升級

▌ BBU 不斷電系統：第二成長引擎
GB200 機櫃功耗超過 15,000W（一旦電網瞬斷即報廢），
2026 年已全面強制標配 BBU 電池備援系統。
新唐 BMS 晶片（源自日本松下技術）負責監控每顆鋰電池芯：
→ AI 資料中心 BBU 強制導入 = 新唐 BMS 的剛性新需求爆發

▌ 定價權回歸（2026/07/01 漲價生效）
2026/05/29 發出官方漲價通知，7/1 正式生效
原因：AI BMC/BMS 供不應求 + OSAT 封測成本上漲
信號：脫離中資殺價戰，正式進入高毛利 AI 領域定價
結果：毛利率 34.3% → 39.3%（Q1 單季暴衝 +5pp）

▌ 財務轉折關鍵數字
• 2025 全年 EPS：-3.97 元（虧損底部）
• 2026 Q1 EPS：+0.02 元（扭虧轉折點）
• 2026 Q1 毛利率：39.3%（前季 34.3%）
• 2026 全年 EPS 法人預估：4.5-5.2 元

▌ 冷酷觀察
Q1 扭虧含業外收入成分（員工留任條件達成）
本業營業利益仍在邊際→下半年 BMC/BMS 出貨必須實質兌現

▌ 核心風險
• 信驊 70% 壟斷，新唐靠客製化差異化守二哥地位
• GB200 出貨若再延遲，BMC 爆量預期落空
• NTCJ 日本晶圓廠折舊若未解除，重創毛利

▌ 三大里程碑看盤策略（2026/05/05 法說會後更新）
→ 詳細拆解請見市場情報「2026/06/02 三大里程碑時間表」

🔔 2026/08 初【里程碑一】
  看：7 月月份合併營收（8/10 前公告）
  驗：7/1 漲價 5-10% 是否成功轉嫁，月增是否明顯跳升

🔔 2026/11 初【里程碑二】
  看：Q3 法說會毛利率 + AI算力營收佔比
  驗：毛利率是否跨過 41-42%（BBU BMIC 大量出貨信號）
  背景：Q1 毛利率 39.3%，AI算力相關佔比已達 35%

🔔 2027 H1【里程碑三】
  看：23.5kW 高功率 BBU 量產出貨（法說會明確時程）
  驗：從「頂級 AI 機櫃」擴散到「所有 CSP 通用伺服器標配」
  想像空間：從百萬台規模 → 數千萬台規模，出貨量分子大爆炸`,
    relatedIntel: ["2026-06-02-4919-milestones"],
    challenges: [
      "信驊（Aspeed）掌控 BMC 市場 70% 壟斷份額，新唐以二哥身份必須靠客製化與性價比流血擴張",
      "日本 NTCJ 晶圓廠固定折舊成本高，稼動率一旦下滑就重創毛利（2025 年虧損主因）",
      "2026 Q1 扭虧為盈含業外收入成分（員工留任條件達成），本業營業利益仍在邊際，下半年需實質兌現",
      "MCU 市場中資廠商（兆易創新等）持續殺價，雖已提價 20% 但低端產品競爭壓力未消"
    ],
    risks: [
      "GB200 / Blackwell 機架出貨若再度延遲，BMC 爆量預期落空，股價修正風險大",
      "NTCJ 日本晶圓廠車用市場若持續低迷，折舊黑洞再度拖累整體獲利",
      "信驊若推出更低價 BMC 方案搶占新唐客戶，市佔率從 20-25% 繼續被侵蝕",
      "AI 伺服器廠商（廣達/緯穎）若評估自研 BMC，長線客戶黏著度下降"
    ]
  },

  "FSLR": {
    id: "FSLR", name: "First Solar", ticker: "FSLR", flag: "🇺🇸",
    layer: 1, category: "重電與散熱基礎元件",
    badge: "薄膜太陽能龍頭", tagline: "美國薄膜太陽能模組製造霸主",
    overview: "First Solar 是美國最大的薄膜太陽能（CdTe）模組製造商，也是全球效率最高的薄膜太陽能技術持有者。AI 資料中心的大規模再生能源採購（PPA）中，First Solar 是美國本土製造內容最高（IRA AMPC 補貼受益最大）的太陽能供應商，是 NextEra、AES 等綠電廠商的核心供應商。",
    technology: { core: "碲化鎘（CdTe）薄膜太陽能技術、Series 7 高效模組", products: ["Series 7 CdTe 太陽能模組（700W+）", "Ganymede 系列大面積薄膜", "系統整合服務"], advantages: ["CdTe 薄膜技術不依賴中國多晶矽，地緣政治風險最低", "IRA AMPC 稅收抵免每瓦補貼 $0.17+，製造成本大幅降低", "美國本土製造，避開 Uyghur Forced Labor Prevention Act 問題"] },
    marketShare: { global: "薄膜太陽能模組全球最大；美國本土製造太陽能第一", desc: "與中國多晶矽晶圓太陽能廠（隆基、晶科）不同技術路線，差異化明顯", competitors: ["LONGi Solar（中）", "JinkoSolar（中）", "Enphase（逆變器）"] },
    customers: { major: ["NextEra Energy（最大客戶）", "AES", "Lightsource BP", "資料中心太陽能 PPA 開發商"], breakdown: "美國公用事業太陽能電站為主要市場" },
    outlook: { positive: ["IRA 補貼確保 2025-2030 年高獲利能力", "AI 資料中心需要大量本土綠電，First Solar 是首選供應商"], catalysts: ["Series 7 全面量產與出貨節奏", "新廠（印度、美國）產能開出"] },
    stockMetrics: {
      pe: "19.8x",
      eps: "$15.49",
      epg: "+65.1%",
      peg: "0.80",
      marketCap: "$33.0B",
      week52High: "$313.75",
      week52Low: "$135.50",
      divYield: "0%"
    ,
      sharesOut: "107M"
    },
    challenges: ["中國競爭者低價傾銷壓力（雖有關稅保護）", "原材料（碲 Te）供應有限"],
    risks: ["美國政策風險（IRA 補貼若修改）", "碲原料供應瓶頸限制擴產速度"]
  },

  "8027.TW": {
    id: "8027.TW", name: "鈦昇科技", ticker: "8027.TW", flag: "🇹🇼",
    layer: 1, category: "後段先進製程設備",
    badge: "TGV 玻璃打孔", tagline: "Through Glass Via 雷射鑽孔設備",
    overview: "鈦昇科技專注於 TGV（Through Glass Via）玻璃基板雷射微孔製程設備，是先進封裝從矽轉換為玻璃基板（Glass Core Substrate）趨勢的核心設備供應商。台積電、英特爾（Glass 2.5D 計畫）推動玻璃基板封裝，鈦昇的 TGV 設備技術因此成為關鍵。",
    technology: { core: "雷射微孔加工設備（TGV）、玻璃精密加工技術", products: ["TGV 雷射鑽孔設備", "超薄玻璃切割設備", "半導體玻璃制程設備"], advantages: ["TGV 技術壁壘高，全球掌握商用化技術的廠商極少", "先進封裝玻璃基板轉型的早期卡位者", "台灣本土設備廠，服務台廠反應速度快"] },
    marketShare: { global: "TGV 設備市場利基廠，全球極少競爭者", desc: "市場尚早期，先佔優勢可觀", competitors: ["LPKF Laser（德國）", "DISCO（日本，切割設備）"] },
    customers: { major: ["台積電（先進封裝研發）", "日月光（VIPack 玻璃基板）", "台灣封裝廠"], breakdown: "先進封裝廠研發與量產驗證為主" },
    outlook: { positive: ["Intel/TSMC 玻璃基板封裝路線圖確認，TGV 設備需求確定", "AI 晶片封裝複雜度提升推動玻璃基板採用"], catalysts: ["台積電玻璃基板封裝正式量產時程"] },
    stockMetrics: {
      divYield: "0%"
    ,
      sharesOut: "NT$3.3億"
    },
    challenges: ["玻璃基板封裝商業化時程慢於預期風險", "公司規模小，接大單能力有限"],
    risks: ["玻璃基板若被其他材料取代", "大型設備廠進入競爭（Tokyo Electron 等）"]
  },

  "6133.TW": {
    id: "6133.TW", name: "東捷科技", ticker: "6133.TW", flag: "🇹🇼",
    layer: 1, category: "後段先進製程設備",
    badge: "雷射載板剝離", tagline: "雷射解鍵合設備 / 載板剝離製程",
    overview: "東捷科技提供雷射解鍵合（Laser Debonding）設備，是先進封裝製程中「載板剝離」步驟的關鍵設備供應商。Fan-Out 封裝、RDL（重佈線層）製程中，晶片被暫時鍵合在載板上，製程完成後需精確雷射剝離，東捷設備是這個製程的台灣本土唯一解決方案。",
    technology: { core: "雷射解鍵合設備、Fan-Out 載板剝離技術", products: ["雷射解鍵合系統", "晶圓薄化/切割設備", "先進封裝製程設備"], advantages: ["Fan-Out 封裝的雷射剝離設備台灣唯一本土廠商", "台積電 InFO 封裝供應鏈成員", "設備維護本土化，反應速度快"] },
    marketShare: { global: "台灣雷射封裝設備利基廠", desc: "日本 Nikon、SUSS MicroTec 是主要競爭者", competitors: ["Nikon（日本）", "SUSS MicroTec（德國）"] },
    customers: { major: ["台積電（InFO 封裝設備）", "日月光（Fan-Out 封裝）"], breakdown: "台積電是最重要客戶，直接受益於 InFO 產能擴充" },
    outlook: { positive: ["InFO 封裝需求跟隨 Apple A 系列晶片持續成長", "AI ASIC 的 Fan-Out 封裝需求增加"], catalysts: ["台積電 InFO 產能擴充計畫"] },
    stockMetrics: {
      pe: "32.7x",
      eps: "NT$0.7200",
      epg: "+7.1%",
      marketCap: "NT$28億",
      week52High: "NT$30",
      week52Low: "NT$13",
      divYield: "1.29%"
    ,
      sharesOut: "NT$10.4億"
    },
    challenges: ["技術進入門檻需持續研發投入", "日本設備廠競爭壓力"],
    risks: ["台積電若改用日商設備", "封裝技術路線轉換（如全面改用 CoWoS）"]
  },

  "6515.TW": {
    id: "6515.TW", name: "穎崴科技", ticker: "6515.TW", flag: "🇹🇼",
    layer: 1, category: "高階測試介面/機台",
    badge: "全球邏輯測試座第一",
    tagline: "AI 晶片必過的最後一道關卡",
    overview: "穎崴科技（Proconn Technology）是全球第一大邏輯測試座廠商，專攻半導體後段測試介面，包含高階邏輯測試座（Test Socket）、MEMS 探針卡（Probe Card）、測試載板（Load Board）與溫控系統。營收結構極度仰賴先進製程：7nm 及以下的 AI 晶片貢獻了 87% 的營收。北美客戶佔比超過 80%，前十大客戶（含 NVIDIA、AMD、聯發科、日月光）貢獻 87% 的總營收。公司正推進「Socket All in House」戰略，透過探針自製化壓縮成本、提升毛利，並全面卡位 CPO 光電共測市場。",
    technology: {
      core: "HyperSocket 複合架構專利、MEMS 微機電探針卡、液冷測試座（Liquid Cooling Socket）、雙面導通光電共測介面",
      products: [
        "HyperSocket（複合彈簧針＋導電膠架構，承受 15,000W 超大功耗與晶片翹曲 >0.4mm）",
        "MEMS 探針卡（Wafer Sort 晶圓級測試，已佔營收 20%+）",
        "1.6T 高速同軸測試座（光模組電性測試，支援 448Gbps / 70GHz+）",
        "液冷測試座（E-Flux 6.0，非導電工程液體強制帶走測試熱量）",
        "CPO 光電共測介面（Golden FAU 黃金光纖陣列模組，雙面導通光＋電同測）"
      ],
      advantages: [
        "全球邏輯測試座第一大廠，7nm 以下 AI 先進製程佔營收 87%",
        "HyperSocket 專利獨家解決大面積晶片翹曲（Warpage）＋超高功耗測試痛點",
        "探針自製月產能從 350 萬支倍增至 600-700 萬支，降低日本供應商依賴、提升毛利",
        "CPO 市場唯一具備光電雙面共測能力的測試座廠，卡位 NVIDIA Spectrum-X CPO 規格標準化商機"
      ]
    },
    marketShare: {
      global: "全球邏輯測試座第一大廠",
      desc: "2026 年致股東報告書正式確認全球第一地位。HyperSocket 系列 ASP 比傳統測試座高 30%+，MEMS 探針卡高速成長中，P/E 約 28-32x，PEG 估約 0.9-1.1（法人預估未來兩年 EPS CAGR 30%+）。",
      competitors: [
        { name: "Yamaichi（日本）", share: "傳統測試座市場", note: "日系競爭者，先進製程差距明顯", threat: "medium" },
        { name: "Sensata Technologies", share: "利基市場", note: "測試介面領域，重疊度低", threat: "low" },
        { name: "FormFactor", share: "探針卡市場", note: "MEMS 探針卡競爭者，技術路線接近", threat: "high" },
      ]
    },
    customers: {
      major: [
        { name: "NVIDIA", note: "AI GPU 高階測試座最大客戶", pct: "~35%" },
        { name: "AMD", note: "AI 加速器與 EPYC 測試座", pct: "~25%" },
        { name: "聯發科", note: "台系 ASIC 設計客戶", pct: "~15%" },
        { name: "日月光投控（ASE）", note: "OSAT 封測大廠，後段測試介面", pct: "~12%" },
        { name: "其他北美/台系", note: "前十大合計佔 87% 營收", pct: "~13%" },
      ],
      breakdown: "北美客戶佔比超過 80%，高度綁定美系 AI 晶片大廠。客戶集中度高是雙面刃：景氣好時吃滿訂單，景氣轉差時波動劇烈。公司正評估赴美（亞利桑那或達拉斯）設廠以鞏固供應鏈在地化。"
    },
    outlook: {
      positive: [
        "AI 晶片從訓練（Training）擴散到推論（Inference）→ 測試量非線性跳躍，高階測試座需求井噴",
        "NVIDIA Spectrum-X CPO 規格標準化 → 穎崴 CPO 光電共測介面成稀缺標準品",
        "HyperSocket 系列與 MEMS 探針卡 2026 下半年產能全開 → 高毛利貢獻大幅提升",
        "探針自製率倍增（月產 350 萬→700 萬支）→ 毛利率結構性改善",
        "液冷測試座量產 → 因應萬安培超高功耗測試環境，無競爭者進入壁壘高"
      ],
      catalysts: [
        "2026 Q3/Q4 HyperSocket 高毛利產品線滿載出貨（make-or-break 事件）",
        "NVIDIA Spectrum-X CPO Switch 量產確認，帶動光電共測介面訂單",
        "赴美建廠計畫正式宣布（強化美系客戶信任度與政治安全性）"
      ]
    },
    stockMetrics: {
      pe: "187.9x",
      eps: "NT$46.79",
      epg: "+13.3%",
      marketCap: "NT$3168億",
      week52High: "NT$11490",
      week52Low: "NT$1000",
      divYield: "0.29%"
    ,
      sharesOut: "NT$9.6億"
    },
    notes: `【穎崴（6515）深度分析筆記】2026/06

▌ 產業鏈位置
後段測試（Testing）介面龍頭，晶片出廠前最後把關。
上游：特殊金屬、探針加工、高頻 PCB、光纖組件
中游：穎崴（測試座 / MEMS 探針卡 / 載板 / 溫控）
下游：NVIDIA、AMD、聯發科、日月光等

▌ 核心數字
• 全球邏輯測試座第一大廠（2026 年致股東報告書確認）
• 7nm 以下先進製程晶片測試佔營收 87%
• 北美客戶佔比 80%+
• 前十大客戶貢獻 87% 營收（高度集中）
• P/E 約 28-32x，PEG 估 0.9-1.1（法人估未來兩年 EPS CAGR 30%+）

▌ 產品結構
• 高階測試座（Cobra Socket / SLT & FT）：60-65% → 主幹
• MEMS 探針卡：20%+ → 高速成長期
• HyperSocket / 液冷利基品：~15% → ASP 比傳統高 30%+，推升毛利

▌ 關鍵技術護城河
1. HyperSocket 複合架構（彈簧針 + 導電膠）
   → 吸收晶片翹曲 >0.4mm，承受 15,000W 超高功耗
   → 大面積 AI 晶片唯一落地方案

2. MEMS 探針卡
   → 晶圓級測試（Wafer Sort），初期學習曲線毛利承壓，2026 進入高速成長

3. CPO 光電共測介面
   → Golden FAU 黃金光纖陣列模組，雙面導通光＋電同測
   → NVIDIA Spectrum-X CPO 規格標準化商機

4. 探針自製倍增
   → 月產能 350 萬支 → 600-700 萬支
   → 降低日本外購依賴，毛利結構改善

▌ 潛在風險
🔴 客戶集中（NVIDIA/AMD 佔大頭），景氣逆風時波動劇烈
🔴 448Gbps / 70GHz 集膚效應（Skin Effect）→ 探針材料物理極限挑戰
🟡 CPO 光纖對準公差極苛，自動化 UPH 仍在物理瓶頸期
🟡 FormFactor 等 MEMS 探針卡競爭者追趕

▌ 靈魂觀察
不論 NVIDIA 或 AMD 的 CPO 路線誰勝，都必須向穎崴採購測試介面。
「高階耗材軍火商」在科技換代期享有非對稱優勢：
客戶不能不買，且每一代新晶片規格都會讓舊測試座報廢 → 持續換購需求。`,
    challenges: [
      "前十大客戶貢獻 87% 營收，NVIDIA/AMD 拉貨速度決定公司業績，景氣轉差波動劇烈",
      "CPO 光纖對準（Alignment）公差極苛，自動化測試效率（UPH）仍處物理瓶頸，與 Handler 機械手臂廠協作難度高",
      "448Gbps / 70GHz 以上集膚效應（Skin Effect）對探針材料電介質（DK/DF）提出極端要求",
      "MEMS 探針卡初期學習曲線壓縮毛利，量產良率需時間爬升"
    ],
    risks: [
      "NVIDIA Spectrum-X CPO 部署時程若推遲，光電共測訂單跟著延後（最大短期風險）",
      "FormFactor 等 MEMS 探針卡競爭者技術追趕，侵蝕穎崴 20%+ 的探針卡佔比",
      "美系客戶 AI 資本支出若收縮（景氣逆風），北美 80% 客戶集中度成雙刃劍",
      "赴美建廠若時程延誤，在地化供應鏈優勢喪失，影響大客戶信任度"
    ]
  },

  "ATEYY": {
    id: "ATEYY", name: "愛德萬測試", ticker: "ATEYY / 6857.JP", flag: "🇯🇵",
    layer: 1, category: "高階測試介面/機台",
    badge: "IC 測試機台全球龍頭", tagline: "SoC/記憶體自動測試設備（ATE）第一大廠",
    overview: "愛德萬測試（Advantest）是全球最大的 IC 自動測試設備（ATE）廠商，市佔超過 50%。每一顆出廠的 AI 晶片（GPU、TPU、HBM 記憶體）都需要通過愛德萬的測試機台驗證。AI 算力需求爆發直接推動 ATE 採購量倍增，是 AI 供應鏈中確定性最高的受益者之一。",
    technology: { core: "SoC 測試機（T2000 系列）、記憶體測試機（T5503）、系統級測試（SLT）", products: ["T2000 SoC 自動測試設備", "T5503 記憶體/HBM 測試機", "EVA100（系統級測試）", "V93000（CMOS 影像感測器測試）"], advantages: ["全球 ATE 市佔超過 50%，最大規模優勢", "HBM 記憶體測試幾乎壟斷（HBM 是 AI GPU 必備）", "與台積電/NVIDIA/三星的深度技術合作"] },
    marketShare: { global: "ATE 市場 ~55%（全球第一）", desc: "與 Teradyne（泰瑞達）瓜分 90%+ 的全球 ATE 市場", competitors: ["Teradyne（NASDAQ: TER）", "Cohu（小型測試廠）"] },
    customers: { major: ["台積電（晶圓測試）", "三星（記憶體測試）", "SK Hynix（HBM 測試）", "NVIDIA（最終晶片測試）"], breakdown: "HBM 測試是近年最重要成長業務，直接受益 AI GPU 需求" },
    outlook: { positive: ["每一顆 HBM 堆疊記憶體必須通過 ATE 測試，需求確定", "AI 晶片複雜度提升，ATE 單機售價與使用時數上升"], catalysts: ["HBM4 規格確認與量產（2025-2026）", "CoWoS 封裝後測試（KGD）需求"] },
    stockMetrics: {
      pe: "51.6x",
      eps: "$3.21",
      epg: "+220.4%",
      peg: "2.09",
      marketCap: "$120.2B",
      week52High: "$198.32",
      week52Low: "$49.56",
      divYield: "0.23%"
    ,
      sharesOut: "730M"
    },
    challenges: ["ATE 是資本財，景氣周期波動明顯", "韓系（三星/SK）若自製 ATE 設備"],
    risks: ["半導體景氣下行時客戶削減 ATE 採購", "中國自製 ATE（中科飛測）崛起，中國市場份額流失"]
  },

  "KEYS": {
    id: "KEYS", name: "是德科技", ticker: "KEYS", flag: "🇺🇸",
    layer: 1, category: "高階測試介面/機台",
    badge: "電子測量儀器龍頭", tagline: "電子量測儀器、網路/光通訊測試設備",
    overview: "是德科技（Keysight Technologies）是從惠普分拆出來的電子測量儀器龍頭，提供從訊號產生、示波器到網路分析儀的完整測試解決方案。在 AI 基礎設施領域，Keysight 提供 800G/1.6T 光模組、CPO 元件、PCIe Gen6 的電/光信號完整測試方案，是每個光通訊廠商研發驗證的必備工具。",
    technology: { core: "電子測量儀器、網路分析儀、光/電信號測試平台", products: ["PathWave 測試自動化平台", "800G/1.6T 光模組測試方案", "網路模擬器（IxNetwork）", "毫米波/5G 測試儀器"], advantages: ["最完整的電磁與光信號測試能力，研發驗證不可或缺", "Ixia 收購帶來網路測試能力", "軟體訂閱（EDA+測試）提高收入可見度"] },
    marketShare: { global: "電子測量儀器全球前二（與 National Instruments 並列）", desc: "在光通訊測試設備細分市場具備領先地位", competitors: ["Rohde & Schwarz（德）", "Tektronix（Fortive 旗下）", "Spirent（網路測試）"] },
    customers: { major: ["光模組廠商（旭創、Lumentum 等）", "晶片設計廠（聯發科、博通）", "電信設備商（思科、Arista）", "研究機構與大學"], breakdown: "AI 光通訊與 5G 測試是成長最快的業務線" },
    outlook: { positive: ["每個 800G/1.6T 光模組研發驗證都需要 Keysight 測試儀器", "PCIe Gen6/CXL 高速互連標準驗證需求"], catalysts: ["AI 基礎設施研發支出持續增加", "6G 研發投資啟動"] },
    stockMetrics: {
      pe: "54.3x",
      eps: "$6.23",
      epg: "+35.6%",
      peg: "1.46",
      marketCap: "$57.8B",
      week52High: "$370.18",
      week52Low: "$152.85",
      divYield: "0%"
    ,
      sharesOut: "171M"
    },
    challenges: ["測試儀器是資本財，景氣周期敏感", "中國客戶市場受出口限制影響"],
    risks: ["半導體/通訊設備投資景氣下行", "中國競爭者（鼎陽科技等）切入中低端市場"]
  },

  // ── 後段先進製程設備（TGV / FOPLP 生態擴充）─────────────────
  "3580.TW": {
    id: "3580.TW", name: "友威科技", ticker: "3580.TW", flag: "🇹🇼",
    layer: 1, category: "後段先進製程設備",
    badge: "TGV 金屬化濺鍍專家",
    tagline: "真空濺鍍與電漿蝕刻，TGV 通孔活化與 RDL 晶種層的核心製程設備商",
    overview: "友威科技專注於真空薄膜製程設備，核心產品為真空濺鍍系統（Sputter）與電漿蝕刻機（Plasma Etcher）。在玻璃基板 TGV 製程鏈中，友威的設備負責 TGV 雷射鑽孔後最關鍵的「通孔去渣活化（Desmear）」與「鋪設 RDL 重佈線層晶種層（Seed Layer Sputtering）」兩道高壁壘製程，是銅填充前不可或缺的表面處理環節，直接決定最終良率與電氣可靠度。",
    products: {
      core: "真空濺鍍系統、電漿蝕刻設備、TGV 通孔活化設備",
      list: [
        "TGV 電漿去渣活化設備（Desmear）：TGV 雷射鑽孔後清除通孔壁殘留碎屑，確保銅填充前壁面潔淨均勻",
        "RDL 晶種層濺鍍系統：在玻璃通孔壁面及表面鋪設極薄銅晶種層，作為後續電鍍銅的起點",
        "電漿清洗設備：先進封裝各製程節點表面活化清潔"
      ]
    },
    technology: {
      moat: [
        "大面積均勻濺鍍能力：FOPLP 方形大面板的均勻性要求遠高於圓形晶圓，友威在大面積製程積累深厚",
        "電漿製程配方：針對玻璃基板脆性特性客製化低損傷電漿參數，進入門檻高",
        "一站式整合：從去渣到晶種層，友威提供連貫設備降低客戶整合成本"
      ],
      trend: "玻璃基板 FOPLP 量產（2027-2028）將帶動 TGV 後段金屬化製程設備需求非線性成長"
    },
    customers: [
      { name: "台灣封測廠", note: "先進封裝製程導入 RDL 濺鍍設備" },
      { name: "IC 載板廠", note: "玻璃基板製程設備驗證" }
    ],
    outlook: [
      "TGV 量產時程（Intel 2026-2028 路線圖）確認後，濺鍍與電漿設備需求確定性高",
      "FOPLP 由圓轉方：大面積均勻濺鍍能力是核心差異化競爭力",
      "國產替代：日商東京電子（TEL）等大廠在利基型大面積設備的回應速度慢，台廠快速切入"
    ],
    stockMetrics: { exchange: "TWSE", currency: "TWD", sector: "後段製程設備" }
  },

  "6664.TW": {
    id: "6664.TW", name: "群翊工業", ticker: "6664.TW", flag: "🇹🇼",
    layer: 1, category: "後段先進製程設備",
    badge: "載板壓合烘烤設備龍頭",
    tagline: "ABF 壓合、狹縫塗佈、真空壓膜熱烘爐，大面積玻璃基板翹曲控制核心設備商",
    overview: "群翊工業是高階 IC 載板與先進封裝製程中「壓合與塗佈」設備的台灣龍頭。核心產品包含 ABF 增層壓合設備、乾膜貼合機、狹縫塗佈（Slit Coat）系統與真空壓膜熱風烤箱。在玻璃基板 FOPLP 製程中，大面積玻璃面板的熱漲冷縮比傳統圓晶圓嚴苛數倍，翹曲（Warpage）是最大良率殺手——群翊的精密溫控壓膜設備是控制翹曲、確保高層數載板良率的關鍵製程設備，直接服務欣興（3037）、南電（8046）等台灣載板龍頭。",
    products: {
      core: "ABF 壓合設備、真空壓膜熱風烤箱、狹縫塗佈系統、乾膜貼合機",
      list: [
        "ABF（Ajinomoto Build-up Film）增層壓合設備：高階 IC 載板與玻璃基板增層的核心製程設備",
        "真空壓膜熱風烤箱：大面積均勻熱壓，精密控制玻璃基板溫度均勻性，直接影響翹曲量",
        "狹縫塗佈（Slit Coat）系統：大面積均勻塗佈絕緣層或感光層，FOPLP 大面積製程必備",
        "乾膜貼合機（Dry Film Laminator）：前段製程乾膜貼合，搭配後段顯影蝕刻"
      ]
    },
    technology: {
      moat: [
        "大面積精密溫控壓合：玻璃基板 FOPLP 尺寸比圓晶圓大 5-10 倍，均勻溫控難度高，群翊在此積累深厚",
        "翹曲控制能力：高階 AI 晶片封裝對翹曲容忍度極低（< 數十微米），設備參數調校是護城河",
        "客戶深度綁定：與欣興、南電等一線載板廠長期合作，製程參數共同開發，轉換成本高"
      ],
      trend: "玻璃基板 FOPLP 取代有機基板的長期趨勢，大面積壓合設備為直接受益；AI 晶片封裝尺寸極大化加劇翹曲問題，設備 ASP 持續上移"
    },
    customers: [
      { name: "欣興電子（3037）", note: "ABF 載板與玻璃基板壓合設備首要客戶" },
      { name: "南亞電路板（8046）", note: "載板製程設備" },
      { name: "景碩科技（3189）", note: "ABF 載板設備" }
    ],
    outlook: [
      "AI 晶片封裝尺寸極大化 → 翹曲問題愈發嚴峻 → 精密壓合設備 ASP 持續提升",
      "玻璃基板 FOPLP 量產（2027-2028）：大面積玻璃面板製程設備的全新成長引擎",
      "欣興等載板廠玻璃基板產能擴建，直接帶動群翊設備訂單能見度"
    ],
    stockMetrics: { exchange: "TWSE", currency: "TWD", sector: "後段製程設備" }
  },

  "3583.TW": {
    id: "3583.TW", name: "辛耘企業", ticker: "3583.TW", flag: "🇹🇼",
    layer: 1, category: "後段先進製程設備",
    badge: "先進封裝濕製程設備",
    tagline: "TGV 鑽孔後化學濕蝕刻與垂直填孔，先進封裝濕製程設備台廠龍頭",
    overview: "辛耘企業是先進封裝濕製程（Wet Process）設備的台灣代表廠商，提供蝕刻機、顯影機、電鍍前處理設備等整套溶液製程解決方案。在玻璃基板 TGV 製程中，雷射鑽孔後的「高難度化學濕蝕刻（Wet Etching）」與「垂直通孔電鍍填孔（Via Filling）前處理」是最關鍵也最難掌握的製程節點——玻璃是脆性材料，濕蝕刻必須在精確控制藥液濃度、溫度與蝕刻均勻性的同時避免裂縫，辛耘的設備與製程參數在此環節具備高壁壘。",
    products: {
      core: "化學濕蝕刻機、顯影設備、電鍍前處理系統、先進封裝濕製程整線",
      list: [
        "TGV 濕蝕刻設備：玻璃通孔雷射鑽孔後的化學擴孔與表面處理，控制孔徑均勻性",
        "垂直填孔前處理系統：電鍍銅填充 TGV 前的活化、清洗與晶種層前處理",
        "ABF/感光層顯影設備：IC 載板與先進封裝重佈線層（RDL）的顯影蝕刻製程",
        "電鍍前處理整線：涵蓋去油、粗化、活化全流程"
      ]
    },
    technology: {
      moat: [
        "玻璃濕蝕刻配方：玻璃基板的脆性使傳統矽製程參數無法直接移植，辛耘針對玻璃材料開發專屬製程配方",
        "通孔填充前處理：TGV 垂直通孔的高深寬比（HAR）對前處理均勻性要求極高，藥液對流與控制是護城河",
        "本土快速服務：台灣封測與載板廠主要客群，設備維護與製程調試回應速度快於日商"
      ],
      trend: "TGV 玻璃基板濕製程節點是「雷射鑽孔→金屬化」鏈條中的必經環節，商轉後訂單確定性高"
    },
    customers: [
      { name: "台灣封測廠", note: "先進封裝 RDL 顯影濕製程設備" },
      { name: "IC 載板廠", note: "玻璃基板 TGV 後段濕蝕刻設備驗證" }
    ],
    outlook: [
      "TGV 玻璃基板量產（2027-2028）：濕製程設備需求確定，辛耘卡位最關鍵製程節點",
      "先進封裝 RDL 層數持續增加 → 顯影濕製程設備單機 ASP 上行",
      "日商 Dainippon Screen 等競爭者在大面積玻璃濕蝕刻的快速客製化能力弱，台廠機會"
    ],
    stockMetrics: { exchange: "TWSE", currency: "TWD", sector: "後段製程設備" }
  },

  // ── Burn-in 老化測試生態 ─────────────────────────────────────
  "6268.TW": {
    id: "6268.TW", name: "鴻勁科技", ticker: "6268.TW", flag: "🇹🇼",
    layer: 1, category: "老化測試與分類系統",
    badge: "Handler 全球七成霸主",
    tagline: "Burn-in Handler 分類機龍頭，AI 時代升格精密溫控平台",
    overview: "鴻勁科技是全球 Burn-in Handler（老化測試分類機）的絕對霸主，市佔率高達 70% 以上。Handler 原本只是搬運晶片的機械手臂，但在 AI 時代，它已升格為「精密溫控測試平台」：必須同時精確控制 77 顆以上、單顆 200W+ 的 AI 晶片進行長達 1,000 小時的高溫老化測試，同時確保各晶片的溫度均勻性在 ±1℃ 以內。Burn-in 後的 Handler 功能正加速與 FT（最終測試）、SLT（系統級測試）融合為多功能一體化測試平台，單機 ASP（平均售價）大幅提升。",
    technology: {
      core: "Burn-in Handler 老化測試分類機、FT Handler 最終測試分類機、SLT 系統級測試整合平台",
      products: [
        "Burn-in Handler（AI 晶片老化測試主力，市佔 70%+）",
        "FT Handler（最終測試分類，自動分级）",
        "Burn-in Board（老化測試板配套生態）",
        "SLT 系統級測試整合平台（新業務，Burn-in+FT+SLT 融合趨勢）"
      ],
      advantages: [
        "Handler 市佔 70%+ 形成事實壟斷，客戶更換供應商成本極高",
        "AI 晶片功耗倍增驅動 Handler ASP 大幅提升（熱管理升級→整機售價跳升）",
        "Burn-in + FT + SLT 融合趨勢：單台設備整合多種測試功能，市場規模擴大",
        "台廠生態系優勢：與台積電 / 聯發科 / 日月光測試流程深度整合"
      ]
    },
    marketShare: {
      global: "Burn-in Handler 全球 70%+",
      desc: "Burn-in Handler 市場幾乎由鴻勁寡占，競爭者難以在短期追上其高度整合的熱管理技術與客戶關係壁壘。",
      competitors: [
        { name: "Cohu（美）", share: "~10%", note: "小型 Handler 廠，AI 時代技術能力有限", threat: "low" },
        { name: "Aehr Test Systems（美）", share: "~5%（Wafer-level）", note: "主打晶圓級 Burn-in，利基市場", threat: "low" },
      ]
    },
    customers: {
      major: [
        { name: "台積電生態系 ODM", note: "NVIDIA GB200 機架最終老化測試通過鴻勁設備執行", pct: "~35%" },
        { name: "日月光（ASX）", note: "後段封測大廠，Burn-in 環節使用鴻勁 Handler", pct: "~25%" },
        { name: "聯發科測試廠商", note: "ASIC/SoC 晶片老化測試", pct: "~20%" },
        { name: "其他 OSAT / IDM", note: "全球晶片測試生態系", pct: "~20%" },
      ],
      breakdown: "AI 算力晶片（GPU、HBM、AI ASIC）每顆必須通過 Burn-in 篩選早期失效，鴻勁 Handler 是這道「出廠前最後保險關卡」的主要設備提供者"
    },
    outlook: {
      positive: [
        "AI 晶片功耗從 200W 往 400W+ 增加，每台 Handler 的技術壁壘與售價同步拉高",
        "DPPM 要求嚴苛（系統一顆壞全機停），測試不可省略，具剛性需求",
        "Burn-in + FT + SLT 三功能融合趨勢，單機 ASP 翻倍空間大",
        "Rubin GPU（2026 H2）功耗更高，進一步逼升熱管理技術要求與設備單價"
      ],
      catalysts: [
        "NVIDIA Rubin 架構出貨：單顆 GPU 功耗突破 1,200W，Handler 熱管理升級迫切",
        "SLT 與 Burn-in 融合型新機台推出時程",
        "CoWoS 先進封裝後老化測試需求增長"
      ]
    },
    stockMetrics: {
      pe: "N/A",
      eps: "NT$12~15（2026 預估）",
      epg: "+35~50%",
      marketCap: "NT$約 400億",
      week52High: "NT$—",
      week52Low: "NT$—",
      divYield: "—",
      sharesOut: "NT$約 6億"
    },
    notes: `【鴻勁（6268）Burn-in Handler 分析備忘】

▌ 核心定位
Handler 從「搬運機械手臂」升格為「精密溫控測試平台」
→ AI 晶片功耗爆增（77顆×200W = 15,400W），鴻勁必須整合主動液冷
→ 市佔 70%+ 壟斷：客戶換供應商等於重新訓練工程師 + 重建製程，成本極高

▌ AI 時代的結構性需求
• DPPM 要求：AI 系統一顆壞掉整機停，品質要求比消費電子嚴格 10 倍+
• Infant Mortality 篩除：出貨前高溫老化剔除早期失效，不可省略的流程
• 功耗增加路線圖：Blackwell 200W → Rubin 400W+ → 每次升代逼升 Handler 設備單價

▌ 三功能融合趨勢（最大想像空間）
Burn-in → FT（最終測試）→ SLT（系統級測試）三合一
→ 單台設備 ASP 從 X 翻到 3X，市場規模直接擴大 3 倍

▌ 關鍵觀察時間點
• Rubin GPU 出貨（2026 H2）→ 新一代 Handler 訂單爆發期
• SLT 融合型機台正式上市時程（詢問法說會）
• 毛利率走勢：ASP 上升 + 固定成本分攤 → 毛利率目標 40%+`,
    challenges: [
      "Handler 市場技術成熟，低端機型面臨中國廠商（精測電子等）殺價",
      "SLT 融合型設備開發需要龐大 R&D 資本，現金流壓力",
      "AI 晶片出貨若再次延遲（如 Rubin），新型 Handler 拉貨時程推遲"
    ],
    risks: [
      "AI 算力景氣若反轉，晶片廠削減測試設備資本支出",
      "Aehr Test Systems 等晶圓級 Burn-in 替代方案蠶食市場",
      "中國自製 Handler 設備崛起，中國市場份額流失"
    ]
  },

  "6223.TW": {
    id: "6223.TW", name: "旺矽科技", ticker: "6223.TW", flag: "🇹🇼",
    layer: 1, category: "老化測試與分類系統",
    badge: "前段晶圓探針台一哥",
    tagline: "晶圓探針台（Prober）龍頭，CPO 晶圓級光電共測解決方案",
    overview: "旺矽科技（MPI Corporation）是台灣前段晶圓探針台（Wafer Prober）龍頭，深度聚焦於晶圓良率測試（Wafer Sort）與系統級測試。在 AI/CPO 時代面對的最嚴苛挑戰：矽光子（PIC）晶圓要求在高溫高壓老化環境下，維持光學探針與晶圓之間的微米級光學對準精度（<1μm），同時避免因熱膨脹造成位移失準——這是現有探針台物理能力的最大邊界，旺矽正在這個技術難題上投入大量研發。",
    technology: {
      core: "自動晶圓探針台（Automatic Wafer Prober）、晶圓級 Burn-in 探測系統、光電共測（Opto-electric Prober）",
      products: [
        "200mm/300mm 自動晶圓探針台",
        "晶圓級老化測試（Wafer-level Burn-in）探測平台",
        "矽光子 CPO 光電共測解決方案",
        "MEMS 微感測器晶圓測試"
      ],
      advantages: [
        "台灣前段晶圓探針台龍頭，深度嵌入台積電 / 聯電供應鏈",
        "CPO 光電共測是目前全球最稀缺的技術能力：維持微米級光學對準是物理極限攻堅",
        "晶圓級 Burn-in 趨勢：封裝成本越高越需要在晶圓階段就篩選，旺矽直接受益"
      ]
    },
    marketShare: {
      global: "台灣晶圓探針台前一二名",
      desc: "旺矽與 Tokyo Electron（TEL）及 FormFactor 並列為主要晶圓探針台廠，在台灣本土市場具有顯著優勢",
      competitors: [
        { name: "Tokyo Electron（TEL）", share: "全球最大（日）", note: "主打日韓市場", threat: "medium" },
        { name: "FormFactor（美）", share: "MEMS 探針卡強", note: "後段探針卡為主，Prober 較弱", threat: "low" },
      ]
    },
    customers: {
      major: [
        { name: "台積電 / 晶圓代工廠", note: "晶圓良率測試（Wafer Sort）主要客戶", pct: "~40%" },
        { name: "矽光子 / CPO 廠商", note: "光電晶圓測試，需求成長最快", pct: "~20%" },
        { name: "聯電 / 力積電", note: "成熟製程晶圓測試", pct: "~20%" },
        { name: "其他 IDM / 委外測試廠", note: "多元客群", pct: "~20%" },
      ],
      breakdown: "台積電是最大客戶，CPO/矽光子晶圓光電共測是最具差異化的成長引擎"
    },
    outlook: {
      positive: [
        "晶圓級 Burn-in（Wafer-level Burn-in）趨勢加速：封裝成本愈高，愈需要在晶圓階段就剔除缺陷",
        "CPO 商轉啟動：矽光子晶圓測試需求從 0 開始高速成長",
        "AI 晶片複雜度提升：需要更多晶圓測試關卡（EWS → Wafer Sort → KGD）",
        "台積電 2nm 量產：每片晶圓造價更高，良率測試不可省"
      ],
      catalysts: [
        "CPO Prober 第一個大客戶量產訂單",
        "台積電 N2 量產拉動晶圓探針台採購（Q4 2025-2026）",
        "旺矽光電共測 Prober 技術突破（微米級熱膨脹補償方案）"
      ]
    },
    stockMetrics: {
      pe: "N/A",
      eps: "NT$—",
      epg: "—",
      marketCap: "NT$約 150億",
      week52High: "NT$—",
      week52Low: "NT$—",
      divYield: "—",
      sharesOut: "NT$約 5億"
    },
    notes: `【旺矽（6223）晶圓探針台分析備忘】

▌ 核心定位：前段晶圓「最後關卡」
晶圓出廠前最後一道電性測試（EWS/Wafer Sort）
→ 晶圓越貴（台積電 N2 一片數萬美元），這道關卡越不可省
→ CPO/矽光子晶圓需要光電共測：電性 + 光性同時驗證

▌ 最難的技術挑戰：CPO 微米級對準
矽光子晶片（PIC）在高溫 Burn-in 時：
• 熱膨脹造成晶圓位移 → 光探針需即時補償 <1μm 精度
• 溫度均勻性要求：±0.5℃ 以內（不均勻則光耦合效率崩潰）
• 目前是業界最高難度前沿問題，解決者即獲壟斷地位

▌ 晶圓級 Burn-in（Wafer-level Burn-in）趨勢
傳統：封裝完成後才 Burn-in（發現缺陷 = 整顆昂貴模組報廢）
新趨勢：在晶圓階段就 Burn-in（發現缺陷只損失一個 die，省成本）
→ CoWoS/Chiplet/HBM 封裝成本倍增，前段測試需求爆炸

▌ 關鍵觀察時間點
• CPO 光電共測 Prober 正式量產（業界第一個商用訂單）
• 台積電 N2 量產後晶圓探針台訂單動態
• 旺矽在晶圓級 Burn-in 市場的份額佈局進度`,
    challenges: [
      "CPO 光電共測 Prober 開發週期長，技術未商轉前無法變現",
      "Tokyo Electron 日本探針台廠財力雄厚，可大幅投資 CPO 研發競爭",
      "晶圓製造景氣若下滑，晶圓廠削減資本支出影響 Prober 採購"
    ],
    risks: [
      "CPO 商轉延遲（晶圓級光電測試市場比預期晚啟動）",
      "台積電若自研或指定特定探針台供應商，形成排他性生態",
      "中國自製探針台崛起，大陸市場份額流失"
    ]
  },

  // ── 先進封裝製程材料 ──────────────────────────────────────────
  "3595.TW": {
    id: "3595.TW", name: "山太士", ticker: "3595.TW", flag: "🇹🇼",
    layer: 1, category: "先進封裝製程材料",
    badge: "先進封裝膜材國產化急先鋒",
    tagline: "LCD 裁切廠蛻變為半導體先進封裝材料軍火庫，吃下日系大廠國產替代紅利",
    overview: "山太士成立初期聚焦 LCD 面板背光模組光學材料裁切加工，在面板景氣循環的折磨中完成了最關鍵的策略性質變：自 2020 年起逐步縮減傳統光電業務，全面切入半導體先進封裝與測試耗材市場。核心競爭力在於大面積薄膜塗佈、精密黏著配方與快速客製化開發能力。過去被日系大廠（3M、日東電工、住友電工）壟斷的高階製程化學膜材，山太士憑藉本土供應鏈超高的配合速度與客製化彈性，成功打入日月光、京元電等一線封測巨頭，連續多季交出半導體業務高速成長的財報。2026 年半導體相關業務已佔整體營收逾六成，轉型成果持續顯現。",
    products: {
      core: "探針卡清潔片（清針片）、抗翹曲膠膜、雷射解膠層、FOPLP 材料、晶背研磨膠帶（BGBM Tape）",
      list: [
        "探針卡清潔片（清針片）：AI 晶片測試的剛性高複購耗材。測試探針接觸被測晶片數萬次後會沾附殘餘錫球、氧化物等汙染物，清潔片用來維持接觸電阻穩定性與測試精準度，是測試廠的必備日常耗材。AI 晶片功耗暴增 → 每批測試損耗加快 → 清針片用量非線性成長。山太士客製化配方可針對不同探針材質（鎢、鈷基合金等）調整黏著係數，形成客戶黏著護城河。",
        "抗翹曲膠膜（Anti-warpage Film）：大面積先進封裝中晶片因不同材料熱膨脹係數不匹配，高溫製程後冷卻易產生翹曲（Warpage），翹曲超標直接導致晶片報廢。山太士的抗翹曲膠膜在封裝製程中提供應力均勻分散的支撐，配方需針對不同晶片尺寸與製程溫度精準調校，配方壁壘高。AI 晶片封裝面積極大化趨勢讓此產品的 ASP 與需求量齊升。",
        "雷射解膠層（Laser Release Layer）：先進封裝暫時鍵合（Temporary Bonding）製程的核心化學膜材。晶圓薄化或 Fan-Out 封裝時，晶片被暫時黏合在玻璃或矽載板上進行製程，完成後需透過特定波長雷射照射，讓膠層瞬間分解脫離，完美分離載板與晶片。此膜材對雷射波長、能量密度高度敏感，配方精準度要求極高，日系大廠（JSR、日東電工）長期壟斷，山太士正以本土快速回應優勢切入替代市場。",
        "FOPLP 材料（扇出型面板級封裝材料）：利用山太士過去大面積面板塗佈的歷史積累，順理成章切入「由圓轉方」的 FOPLP 製程材料開發。產品涵蓋大面積均勻塗佈用絕緣膜、暫時鍵合膜材等，2025 年已完成一線大廠驗證並少量出貨，是中長期最高成長潛力的產品線。",
        "晶背研磨膠帶（BGBM Tape / Backside Grinding & Metallization Tape）：晶圓背面研磨（Backside Grinding）時用來保護正面精密電路不受機械損傷的保護膜，並支援後續背面金屬化製程。與先進封裝整體製程深度綁定，隨晶圓薄化需求增加穩定成長。"
      ]
    },
    technology: {
      moat: [
        "大面積均勻塗佈配方：LCD 面板時代練就的大面積塗佈精準度，直接轉化為 FOPLP 超大方形基板製程優勢，是日系競爭者難以快速複製的歷史積累",
        "快速客製化配方開發：同一類產品需針對不同客戶的製程溫度、基板材質、雷射波長進行配方調整，山太士從接單到打樣交付時間遠短於日系大廠的「標準化商品」模式",
        "探針卡清潔片黏著係數控制：針對鎢探針、鈷基合金探針等不同材質的客製化清潔配方，形成高度客戶黏著的耗材護城河",
        "雷射解膠層精準配方：對特定波長（355nm、532nm UV 雷射）的吸收率與分解溫度控制是核心技術，進入門檻極高"
      ],
      trend: "先進封裝材料國產替代加速（地緣政治推升台廠對日系供應商的降依賴意識）；AI 晶片 Warpage 問題隨封裝面積極大化持續惡化，抗翹曲材料需求結構性增加；FOPLP 由圓轉方將於 2027-2028 成為次世代封裝主流，山太士提前卡位",
      products: ["探針卡清潔片（清針片）", "抗翹曲膠膜", "雷射解膠層", "FOPLP 製程材料", "BGBM 晶背研磨膠帶"],
      advantages: [
        "耗材業務（清針片 + 研磨膠帶）提供穩定基本盤現金流，降低景氣波動衝擊",
        "膜材業務（抗翹曲 + 雷射解膠層 + FOPLP 材料）是高毛利成長引擎",
        "雙引擎結構：耗材「防守」＋膜材「進攻」"
      ]
    },
    marketShare: {
      global: "先進封裝膜材市場切入者，國產替代先鋒，目標搶佔日系大廠份額",
      desc: "全球先進封裝膜材市場長期被日東電工（Nitto Denko）、住友電工、3M、JSR 等日系大廠壟斷。山太士是台灣極少數具備完整配方開發能力的本土廠商，以快速客製化和在地服務優勢在台灣市場逐步取得份額。探針卡清潔片國內市場已有穩固份額，封裝膜材仍在替代滲透初期。",
      competitors: [
        "日東電工 Nitto Denko（日本，最大競爭者，封裝膜材全球龍頭）",
        "住友電工 SEI（日本，暫時鍵合膜材領先）",
        "JSR Corporation（日本，雷射解膠層材料）",
        "3M 半導體材料部門（美國，研磨膠帶）"
      ]
    },
    customers: [
      { name: "日月光投控（3711）", note: "先進封裝膜材（抗翹曲、解膠層）與探針卡清潔片，最重要客戶之一", pct: "~30%" },
      { name: "京元電子（2449）", note: "高頻 AI 晶片測試環境探針卡清潔片，穩定高複購訂單", pct: "~20%" },
      { name: "穎崴科技（6515）", note: "高階測試座廠環境專用清潔配方，特殊規格客製化", pct: "~10%" },
      { name: "其他封測與晶圓代工廠", note: "FOPLP 材料驗證進行中，2025 起少量出貨", pct: "~40%" }
    ],
    outlook: [
      "AI 晶片封裝面積極大化 → Warpage 問題更嚴峻 → 抗翹曲膠膜 ASP 與量同步提升（最直接受益）",
      "CoWoS / FOPLP 先進封裝滲透率持續上升 → 雷射解膠層需求線性正成長",
      "FOPLP 由圓轉方：2027-2028 商轉量產後，大面積膜材需求爆發，山太士大面積塗佈技術優勢直接兌現",
      "探針卡清潔片：AI 晶片測試量非線性成長，高複購耗材壁壘持續強化，現金牛特性顯著",
      "日系大廠國產替代：地緣政治風險意識推動台廠加速導入本土供應商，山太士是直接受益者",
      "毛利率上行邏輯：LCD 低毛利業務佔比持續下降 → 半導體高毛利業務佔比上升 → 整體毛利率每年提升 2-4 個百分點"
    ],
    challenges: [
      "LCD 光電業務退出速度：舊業務仍佔約 40% 營收，毛利率拖累效應需時間消化",
      "日系大廠反制：日東電工等大廠若針對台灣市場推出客製化競爭產品，將壓縮替代空間",
      "雷射解膠層配方驗證週期長：客戶導入需 6-18 個月製程驗證，商業化時間軸不確定",
      "FOPLP 量產時程依賴外部客戶：FOPLP 正式量產（2027-2028）才能帶來顯著業績貢獻"
    ],
    risks: [
      "半導體先進封裝資本支出下滑（AI 算力資本支出若趨緩，封裝材料需求連帶受壓）",
      "新競爭者切入：中資材料廠（如 3M 中國、中國本土化學材料廠）以低價切入清針片市場",
      "核心配方人才流失（小型化工材料公司的關鍵技術依賴少數配方研發人員）",
      "客戶集中度過高：日月光與京元電佔比偏重，單一客戶決策變動影響大"
    ],
    stockMetrics: {
      pe: "~35x（TTM）",
      eps: "~NT$3.5（TTM，半導體業務佔比提升推動獲利改善）",
      epg: "~+40% YoY（半導體業務高速成長帶動）",
      peg: "~0.9（成長溢價尚合理）",
      marketCap: "~NT$25-35億（小型成長股）",
      week52High: "參考近期半導體材料股區間",
      week52Low: "參考近期半導體材料股區間",
      divYield: "~1-2%（輕微配息，以成長為主）",
      sharesOut: "~NT$4-6億（小型股）",
      exchange: "TWSE",
      currency: "TWD",
      sector: "先進封裝材料",
      peers: ["日東電工 Nitto Denko", "住友電工", "3M 半導體材料", "JSR Corporation"]
    },
    notes: `【山太士（3595）完整轉型分析備忘】2026/06
從「LCD 裁切廠」→「半導體先進封裝材料軍火庫」的策略質變

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 轉型時間軸
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2010-2018：LCD 面板背光模組光學材料裁切加工，典型低毛利消費電子零件廠
2019-2021：LCD 景氣惡化、面板廠整合，山太士啟動轉型，開始研發半導體用膜材
2022-2023：探針卡清潔片、晶背研磨膠帶切入封測廠市場，取得初步客戶認證
2024-2025：抗翹曲膠膜、雷射解膠層導入日月光等一線客戶，半導體業務佔比超越光電
2025-   ：FOPLP 材料開始少量出貨，玻璃基板材料進入驗證，第三成長曲線蓄力中

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 五大產品財務特性對比
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
產品               毛利率潛力   複購性   成長驅動力         時間軸
──────────────────────────────────────────────────────────────
探針卡清潔片       ★★★☆☆     極高      AI 測試量↑         現在
晶背研磨膠帶       ★★★☆☆     高        晶圓薄化需求       現在
抗翹曲膠膜         ★★★★☆     中        AI 晶片面積↑       現在〜2027
雷射解膠層         ★★★★★     中        Fan-Out/FOPLP↑     2025〜2028
FOPLP 材料         ★★★★★     中        FOPLP 量產         2027〜2030

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 毛利率升級路徑（轉型進度指標）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LCD 光電業務毛利率：~15-20%（低毛利耗材加工）
探針卡清潔片：~30-35%（剛需耗材，有配方壁壘）
晶背研磨膠帶：~25-30%
抗翹曲膠膜：~35-45%（配方高壁壘，AI 需求強）
雷射解膠層：~45-55%（進入門檻最高，ASP 最貴）
FOPLP 材料：~40-50%（大面積技術護城河）

→ 轉型進度追蹤：每季財報觀察「半導體業務佔比」與「整體毛利率」兩個數字
   目標 2027 年：半導體佔比 >75%，整體毛利率 >35%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 估值框架（適用本益比上修邏輯）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
舊山太士（LCD 材料）：消費電子景氣股，正常給 10-15x 本益比
新山太士（先進封裝材料）：半導體材料成長股，市場給 30-45x

本益比上修觸發條件：
  ✦ 半導體業務佔比首次超越 70%（市場重新定性為「半導體材料純股」）
  ✦ 雷射解膠層正式量產出貨（高毛利新品佔比顯著提升）
  ✦ FOPLP 材料客戶名單擴大至台積電或第二線 OSAT

估值關鍵數字追蹤：
  ✦ 毛利率 QoQ 趨勢（轉型成熟度最直接指標）
  ✦ FOPLP 驗證廠商數量（下一波成長引擎蓄力速度）
  ✦ 日系大廠份額轉移速度（競爭態勢是否惡化）`
  },

  // ── 新增 Layer 2 公司（中資光模組）──────────────────────────
  "XINYI": {
    id: "XINYI", name: "新易盛", ticker: "新易盛（中資 A股）", flag: "🇨🇳",
    layer: 2, category: "光通訊模組/光引擎",
    badge: "Amazon NPO 大單", tagline: "奪下亞馬遜 20-30% NPO 光模組採購份額",
    overview: "新易盛通信技術是中國領先的光模組廠商，成功拿下亞馬遜 AWS 20-30% 的 NPO（近封裝光學）光模組份額，是當前全球 AI 光模組採購競爭中攻勢最猛的中資廠商之一。2026/05 招商證券法說會預估：明年 800G 出貨 1,500-1,600 萬隻、1.6T 出貨 1,400 萬隻，同時積極籌備赴港上市。Amazon NPO 折算 1.6T 規模高達 4,000 萬個，新易盛有望持續鞏固 20-30% 份額。",
    technology: { core: "NPO/高速光收發模組（800G/1.6T）", products: ["800G DR8 光模組（明年 1,500-1,600 萬隻）", "1.6T NPO 光模組（明年 1,400 萬隻）", "400G FR4（基本盤）"], advantages: ["成本競爭力強，中國製造成本顯著低於台/美廠", "亞馬遜驗證通過並佔 20-30% 份額，形成大廠背書", "港股上市規劃引入國際資金，加速產能擴充"] },
    marketShare: { global: "中國光模組廠前三大，Amazon NPO 最大受益者之一", desc: "與旭創並列中資光模組雙雄，在 Amazon NPO 市場快速爬升。Amazon 1.6T 折算需求 4,000 萬個，新易盛持續搶佔份額。", competitors: ["旭創科技（中）", "天孚通信（光引擎部分重疊）", "II-VI/Coherent（西方競爭）"] },
    customers: { major: [
      { name: "亞馬遜 AWS", note: "NPO 光模組 20-30% 份額，最重要客戶", pct: "~50%" },
      { name: "其他北美 CSP", note: "Meta、Google 等資料中心", pct: "~30%" },
      { name: "中國雲端廠商", note: "國產算力建設", pct: "~20%" },
    ], breakdown: "Amazon 是錨定大客戶，NPO 生命週期延伸至 2028-2029 年提供長線確定性。赴港上市後資金充裕，有望加速產能追趕旭創。" },
    outlook: { positive: ["Amazon NPO 折算 4,000 萬個 1.6T 規模，生命週期延伸至 2028-2029 年", "800G + 1.6T 雙線出貨，明年合計逾 3,000 萬隻", "赴港上市引入資金，加速產能擴充與技術升級"], catalysts: ["港股 IPO 正式宣布（資金到位）", "Broadcom TH6 延遲解決後 1.6T 訂單釋放", "Nvidia NPO 訂單確認（第二大 CSP 客戶潛力）"] },
    challenges: ["DSP 物料供應略顯緊張，影響短期出貨節奏", "美國對中資光模組廠商的潛在制裁風險", "1.6T 技術升級同時管控交期，執行壓力大"],
    risks: ["美國制裁擴大（加入實體清單）", "DSP 等關鍵物料短缺持續，影響出貨量", "旭創技術差距若縮小，Amazon 份額遭到蠶食"]
  },

  "XUCHUANG": {
    id: "XUCHUANG", name: "旭創科技", ticker: "旭創（中資 A股）", flag: "🇨🇳",
    layer: 2, category: "光通訊模組/光引擎",
    badge: "Google TPU v9 獨家", tagline: "Google 2.4T 輕相干與 12.8T LPO 模組獨家供應",
    overview: "旭創科技是全球光模組出貨量最大的廠商之一，獨家拿下 Google TPU v9 網路集群的 2.4T 輕相干（Lite Coherent）模組——單價高達 3,000 美元以上，明年出貨 200 萬隻。同時壟斷 Google 12.8T LPO 模組（明年 100-300 萬隻），代表中資廠商在光模組領域的最高技術水準。2026/05 招商證券法說會預估：明年利潤目標 900-1,000 億人民幣。另積極探索薄膜鈮酸鋰（TFLN）在 1.6T 產品的導入，產業化進度預計超預期。",
    technology: { core: "LPO（低功耗光學）模組、輕相干光模組（Lite Coherent）", products: ["2.4T 輕相干光模組（Google 獨家）", "12.8T LPO 光模組（Google 獨家）", "800G DR8/FR8 光模組"], advantages: ["LPO 技術代表光模組最前沿，壁壘高", "Google 頂級客戶背書", "規模最大，研發資源最充沛的中資光模組廠"] },
    marketShare: { global: "光模組出貨量全球前三，LPO 技術領先", desc: "在高端 LPO 與輕相干市場暫時處於壟斷地位",
      competitors: [
        { name: "新易盛（中資）", share: "中資第二", note: "Amazon NPO 主要供應商，成本競爭力強", threat: "medium" },
        { name: "II-VI / Coherent（美）", share: "~30%（傳統光模組）", note: "西方最大光模組廠，高端技術持續追趕 LPO", threat: "medium" },
        { name: "Lumentum（美）", share: "~50%（雷射光源）", note: "上游雷射光源廠，與旭創客戶重疊但層級不同", threat: "low" },
      ]
    },
    customers: { major: [
      { name: "Google", note: "TPU v9 LPO 模組獨家供應", pct: "~45%" },
      { name: "Meta", note: "AI 資料中心光互連", pct: "~20%" },
      { name: "微軟 Azure", note: "部分光模組供應", pct: "~15%" },
      { name: "其他 CSP", note: "AWS 等", pct: "~20%" },
    ], breakdown: "Google 佔旭創 AI 業務比重最高（約 45%），技術錨定大客戶策略成功；高度依賴單一客戶是最大風險" },
    outlook: { positive: ["LPO 技術若成為 AI 資料中心標準，旭創技術領先確立", "Google 下一代 TPU 繼續合作可能性高"], catalysts: ["12.8T LPO 模組大規模出貨節奏", "Google TPU v10 設計合作宣布"] },
    challenges: ["美國制裁風險是懸在頭上最大黑天鵝", "LPO 技術保密壓力（競爭者努力複製）"],
    risks: ["美國對旭創/中資光模組廠實施制裁", "Google 若分散供應鏈、引入台/美廠競爭"]
  },

  // ── 天孚通信 ──────────────────────────────────────────────────
  "TFC": {
    id: "TFC", name: "天孚通信", ticker: "中資 A股（688160）", flag: "🇨🇳",
    layer: 2, category: "光通訊模組/光引擎",
    badge: "Nvidia Mellanox 光引擎供應商",
    tagline: "無源組件起家，卡位 Nvidia NPO 光引擎核心",
    overview: "天孚通信技術（TFC）是中國光通訊無源組件龍頭，從傳統光纖連接器、波分複用器起家，近年成功切入高毛利的 AI 光引擎（Optical Engine）市場，主要配合 Nvidia Mellanox 系列網路交換晶片的光互聯需求。業務分三塊：無源光組件、光引擎及 CPO 相關收入。2026 年法說會預計光引擎業務可貢獻 55-60 億人民幣利潤，若 Nvidia NPO 訂單確認，有望再獲 500 萬個 3.2T 組件份額，利潤彈性可觀。",
    technology: {
      core: "無源光組件（FA/MPO）、光引擎（Optical Engine）、CPO 光電共封裝組件",
      products: [
        "光纖陣列（FA）與 MPO 連接器（無源組件基本盤）",
        "Nvidia Mellanox 系列光引擎（配套 400G/800G 交換機）",
        "3.2T 光引擎組件（Nvidia NPO 新興訂單）",
        "CPO 光電共封裝模組（早期開發）"
      ],
      advantages: [
        "從無源組件垂直整合至光引擎，毛利率持續提升",
        "Nvidia Mellanox 生態系深度綁定，隨 Nvidia 市佔擴張直接受益",
        "中國製造成本優勢明顯，同規格 ASP 比西方廠低 20-30%"
      ]
    },
    marketShare: {
      global: "中國無源光組件市佔第一，光引擎市場快速爬升",
      desc: "無源組件是高市佔的現金牛，光引擎是高成長的未來核心。Nvidia NPO 訂單若落地，將是業績最大催化劑。",
      competitors: [
        { name: "旭創（中資）", share: "光模組市場重疊", note: "完整光模組競爭者，但產品層級略有差異", threat: "medium" },
        { name: "II-VI / Coherent（美）", share: "西方光引擎市場", note: "高端光引擎主要競爭者", threat: "medium" },
        { name: "Lumentum（美）", share: "上游雷射光源", note: "供應鏈上游，非直接競爭", threat: "low" },
      ]
    },
    customers: {
      major: [
        { name: "Nvidia（Mellanox）", note: "光引擎最重要客戶，配套 Spectrum 系列交換機", pct: "~50%" },
        { name: "其他北美 CSP", note: "AWS、Meta 等資料中心光組件採購", pct: "~30%" },
        { name: "中國電信/雲端", note: "國產算力建設需求", pct: "~20%" },
      ],
      breakdown: "Nvidia 佔比最高，業績高度依賴 Nvidia 資料中心建設節奏。Nvidia NPO 訂單若確認，天孚將從配件供應商躍升為 AI 光互聯核心廠。"
    },
    outlook: {
      positive: [
        "Nvidia 釋出 NPO 需求：若確認獲得 500 萬個 3.2T 組件份額，利潤彈性極大",
        "光引擎業務預計貢獻 55-60 億人民幣利潤（2026 法說會預估）",
        "CPO 趨勢長期利多：無源組件與光引擎雙線受益",
        "國產算力建設加速，國內客戶訂單增加"
      ],
      catalysts: [
        "Nvidia NPO 訂單正式確認（最大催化劑）",
        "Nvidia Spectrum-X 下一代交換機拉貨",
        "CPO 商轉元年（2026）帶動 CPO 組件採購"
      ]
    },
    challenges: [
      "光引擎技術含量持續提升，需要跟上 800G → 1.6T → 3.2T 規格迭代速度",
      "美國對中資光通訊廠的制裁風險懸而未決",
      "單一客戶（Nvidia）依賴度偏高，若 Nvidia 減少採購則直接受衝擊"
    ],
    risks: [
      "美國對中資供應商施加制裁，切斷 Nvidia 訂單（最大尾部風險）",
      "Nvidia NPO 訂單若落給其他廠商（Lumentum 或台廠），預期落空",
      "光引擎技術自製率不足，若核心光源元件供應鏈受阻則製造受限"
    ]
  },

  // ── 索爾斯（Source Photonics）────────────────────────────────
  "SRCP": {
    id: "SRCP", name: "索爾斯", ticker: "Source Photonics（私有）", flag: "🇺🇸",
    layer: 1, category: "光學元件與雷射光源",
    badge: "EML 雷射量產龍頭",
    tagline: "800G/1.6T EML 雷射光源年產 6,000 萬顆",
    overview: "索爾斯（Source Photonics）是全球主要的電吸收調製雷射（EML, Electroabsorption Modulated Laser）製造商，專注於 100G 至 800G 光模組所需的高速雷射光源。2026 年 EML 量產規模達 6,000 萬顆（含自用），明年目標突破 1 億顆。EML 是 800G DR8 與 1.6T 光模組的核心光源元件，索爾斯的量產能力直接影響全球光模組廠的交期與成本。公司為私有企業，由海信集團旗下子公司持有。",
    technology: {
      core: "EML（電吸收調製雷射）晶片製造，波長 1310nm / 1550nm 高速雷射",
      products: [
        "EML 雷射晶片（100G/200G/400G/800G 模組用）",
        "DFB 雷射晶片（低速/成本導向光模組用）",
        "高速雷射組件（TOSA，Transmitter Optical Sub-Assembly）"
      ],
      advantages: [
        "全球 EML 產能前三大，量產規模稀缺",
        "成本競爭力強，海信集團資源支持",
        "EML 是 800G DR8 模組標準技術路線，需求確定性高"
      ]
    },
    marketShare: {
      global: "全球 EML 廠商前三大",
      desc: "EML 市場主要競爭者為 II-VI/Coherent、住友電工、MACOM 等。索爾斯在中低端 EML 市場具有明顯成本優勢，高端 100G ZR 等長距離應用較弱。",
      competitors: [
        { name: "II-VI / Coherent（美）", share: "~35%", note: "EML 全球最大，高低端通吃", threat: "high" },
        { name: "住友電工（日）", share: "~20%", note: "高可靠性 EML，車用/電信市場強", threat: "medium" },
        { name: "MACOM（美）", share: "~10%", note: "高速 EML IC 設計廠", threat: "low" },
      ]
    },
    customers: {
      major: [
        { name: "旭創科技", note: "最大外部客戶，800G 模組 EML 供應", pct: "~30%" },
        { name: "新易盛", note: "1.6T NPO 模組 EML 供應", pct: "~20%" },
        { name: "自用（海信光網）", note: "集團內部光模組業務", pct: "~25%" },
        { name: "其他光模組廠", note: "劍橋科技（Cambridge Industries）等", pct: "~25%" },
      ],
      breakdown: "中資光模組廠是最大客群，EML 供需偏緊時掌握議價優勢。量產目標從 6,000 萬顆（今年）到 1 億顆（明年），規模擴張是核心策略。"
    },
    outlook: {
      positive: [
        "800G 滲透率爬升帶動 EML 需求非線性增長（每個 800G DR8 模組需要 8 顆 EML）",
        "1.6T 模組放量，EML 規格升級至更高頻寬，單顆 ASP 提升",
        "明年量產目標 1 億顆，規模效應帶動毛利改善"
      ],
      catalysts: [
        "旭創/新易盛 1.6T 光模組出貨加速（帶動 EML 拉貨）",
        "Broadcom TH6 交付延遲問題解決後 1.6T 需求爆發"
      ]
    },
    challenges: [
      "私有企業資訊透明度低，難以精確追蹤財務狀況",
      "EML 良率管理挑戰大，高頻寬 EML 製造難度高於傳統 DFB"
    ],
    risks: [
      "II-VI/Coherent 等西方大廠若擴產搶佔中低端 EML 市場",
      "磷化銦（InP）襯底供應偏緊（預計 Q4 後緩解）影響 EML 擴產節奏"
    ]
  },

  // ── 天通股份 ────────────────────────────────────────────────
  "TIANTONG": {
    id: "TIANTONG", name: "天通股份", ticker: "中資 A股（600330）", flag: "🇨🇳",
    layer: 0, category: "底層特殊材料晶圓",
    badge: "TFLN 材料先行者",
    tagline: "薄膜鈮酸鋰（TFLN）晶圓國內最早量產廠",
    overview: "天通股份是中國電子功能材料龍頭，核心業務包含磁性材料（軟磁）、藍寶石晶圓與氮化鎵（GaN）基板，近年大力切入薄膜鈮酸鋰（TFLN, Thin Film Lithium Niobate）晶圓市場。TFLN 是下一代高速電光調製器（Modulator）的革命性材料，在 800G/1.6T 光模組與矽光子元件中，可取代傳統 InP 或矽基方案，實現更低驅動電壓、更高頻寬與更低功耗。2026 年法說會確認已開始收到 TFLN 相關材料訂單，是中資 TFLN 材料產業化進程的最前沿廠商。",
    technology: {
      core: "薄膜鈮酸鋰（TFLN）晶圓、GaN 基板、藍寶石晶圓、軟磁材料",
      products: [
        "TFLN 晶圓（電光調製器核心材料，4吋/6吋）",
        "GaN on Sapphire 磊晶基板",
        "藍寶石晶圓（LED/光學應用）",
        "軟磁材料（傳統基本盤）"
      ],
      advantages: [
        "中國 TFLN 產業化進程最早、技術積累最深的企業之一",
        "TFLN 電光調製係數遠優於矽（鈮酸鋰 r33≈30pm/V vs 矽 r41≈2pm/V）",
        "多元材料基礎提供交叉協同：藍寶石 → 鈮酸鋰離子切割技術遷移"
      ]
    },
    marketShare: {
      global: "TFLN 晶圓全球尚早期，天通是中資龍頭",
      desc: "全球 TFLN 市場目前由 NANOLN（美）、Partow Technologies（美）、NTT（日）主導。天通是中資追趕者，產業化加速中。旭創 1.6T 產品已開始探索 TFLN 應用，需求確定性漸增。",
      competitors: [
        { name: "NANOLN（美）", share: "全球龍頭", note: "TFLN 商業化最成熟，Partow 旗下", threat: "high" },
        { name: "NTT（日）", share: "日本市場主導", note: "電信級 TFLN 應用深厚", threat: "medium" },
        { name: "中國其他材料廠", share: "追趕中", note: "雲南鍺業等 InP 廠商也在評估 TFLN", threat: "low" },
      ]
    },
    customers: {
      major: [
        { name: "旭創科技（Innolight）", note: "1.6T TFLN 調製器材料探索客戶", pct: "~40%" },
        { name: "中國光器件廠", note: "中速率光調製器應用", pct: "~35%" },
        { name: "科研院所", note: "材料研發合作", pct: "~25%" },
      ],
      breakdown: "TFLN 業務尚在導入期，訂單以旭創等 AI 光模組廠的材料探索為主。一旦旭創等廠商確認 TFLN 路線，天通將成為最直接受益的中資材料供應商。"
    },
    outlook: {
      positive: [
        "旭創 1.6T 產品導入 TFLN，產業化進度超預期（招商證券 2026/05 會議確認）",
        "TFLN 調製器頻寬達 100GHz+，是 1.6T/3.2T 光模組的理想技術路線",
        "中國政策支持國產替代，TFLN 材料本土化是戰略需求"
      ],
      catalysts: [
        "旭創正式宣布 1.6T 產品採用 TFLN 調製器（訂單爆發觸發點）",
        "中國光器件廠商規模採用 TFLN 取代傳統 InP 方案"
      ]
    },
    challenges: [
      "TFLN 薄膜製造良率挑戰（離子切割技術要求極高）",
      "傳統軟磁業務週期性拖累整體獲利，TFLN 業務佔比尚小"
    ],
    risks: [
      "NANOLN 等西方廠大幅擴產導致 TFLN 材料供過於求、ASP 崩跌",
      "旭創若選擇西方 TFLN 廠商而非天通，中資生態圈受制裁影響有限但仍有不確定性"
    ]
  },

  // ── IC 載板・玻璃基板（Layer 0 物理基底）──────────────────────
  "3037.TW": {
    id: "3037.TW", name: "欣興電子", ticker: "3037.TW", flag: "🇹🇼",
    layer: 0, category: "IC 載板・玻璃基板",
    badge: "Intel 玻璃基板戰略夥伴",
    tagline: "全球 IC 載板龍頭，Intel 玻璃基板 R&D 合作夥伴，2027-2028 商轉量產最前線",
    overview: "欣興電子是全球最大的 IC 載板（Substrate）製造商之一，產品涵蓋覆晶封裝（FC-BGA）、BGA 基板與高密度互連（HDI）電路板。在玻璃基板革命中，欣興是 **Intel 玻璃基板戰略的台廠核心研發夥伴**，已啟動裝機驗證流程，預計 2027-2028 年進入玻璃基板量產，是台廠中技術進度最領先、受惠純度最高的代表。欣興現有 ABF 載板業務因 AI 算力晶片封裝需求爆增已高速成長，玻璃基板量產後將再開啟第二成長曲線。",
    products: {
      core: "FC-BGA 覆晶封裝載板、ABF 增層載板、玻璃基板（開發驗證中）、HDI 電路板",
      list: [
        "FC-BGA 載板：GPU/CPU/ASIC 高階封裝主力基板，NVIDIA Blackwell/Rubin 生態受益者",
        "ABF（Ajinomoto Build-up Film）增層載板：AI 晶片封裝高速成長的核心基本盤",
        "玻璃核心基板（Glass Core Substrate）：Intel 合作開發中，目標 2027-2028 量產",
        "HDI 高密度互連板：伺服器主機板、高端通訊設備"
      ]
    },
    technology: {
      moat: [
        "Intel 玻璃基板官方指定研發夥伴：唯一台廠進入 Intel 玻璃基板供應鏈核心",
        "FC-BGA 製程深度積累：AI 晶片封裝需要層數最高、線寬最細的載板，欣興是全球極少數具備量產能力的廠商",
        "設備與製程協同：與群翊（ABF 壓合）、辛耘（濕製程）深度配合，台灣本土整合優勢",
        "技術跨越：現有有機 ABF 載板的製程能力直接轉化玻璃基板，學習曲線較純新進者短"
      ],
      trend: "AI 晶片封裝對更低介電損耗、更精細線路（L/S <5μm）的需求，驅動從有機基板轉向玻璃基板；Intel 路線圖確認玻璃基板 2026-2028 商轉"
    },
    marketShare: {
      global: "全球 IC 載板前三大，ABF 載板全球前二",
      desc: "FC-BGA 市場與日系 Ibiden、Shinko Electric 並列頂尖，玻璃基板是下一輪市場重新洗牌的機會",
      competitors: ["Ibiden（日本）", "Shinko Electric（日本）", "Samsung Electro-Mechanics（韓國）"]
    },
    customers: [
      { name: "Intel", note: "玻璃基板 R&D 戰略合作夥伴，未來量產主要客戶", pct: "~35%" },
      { name: "NVIDIA 生態系", note: "Blackwell/Rubin GPU FC-BGA 載板", pct: "~30%" },
      { name: "AMD / ASIC 廠商", note: "高階處理器封裝載板", pct: "~20%" },
      { name: "其他伺服器/通訊", note: "伺服器主機板、5G 通訊基板", pct: "~15%" }
    ],
    outlook: [
      "AI 算力晶片需求爆增 → FC-BGA 载板第一成長曲線高速運行中",
      "Intel 玻璃基板路線圖確認：欣興 2027-2028 量產，將是台廠中第一個吃到玻璃基板財報貢獻的受益者",
      "玻璃基板 ASP 大幅高於傳統 ABF 載板（信號損耗更低、加工難度更高），毛利率上行潛力明確",
      "E-Core 玻璃基板大聯盟（鈦昇主導）：欣興作為下游客戶受益整個台廠設備生態系整合"
    ],
    stockMetrics: { exchange: "TWSE", currency: "TWD", sector: "IC 載板・先進封裝基板" },
    notes: `【欣興（3037）玻璃基板深度分析備忘】2026/06

● 雙引擎成長結構：
  第一引擎（現在進行中）：AI GPU/ASIC FC-BGA 載板需求爆增
    → NVIDIA Blackwell/Rubin 每顆 GPU 需要高層數 FC-BGA 基板
    → 全球 FC-BGA 供應緊缺，欣興產能滿載，毛利率上行

  第二引擎（2027-2028 啟動）：玻璃基板量產商轉
    → Intel 合作驗證完成後，正式量產
    → ASP 高於傳統 ABF 載板，推動毛利率再次躍升
    → 新市場（玻璃基板）初期玩家極少，欣興先發優勢明確

● 關鍵風險監控：
  ✦ Intel 玻璃基板商轉時間延遲（最大風險）
  ✦ ABF 載板需求週期性下滑（AI 資本支出趨緩）
  ✦ 日韓競爭者（Ibiden、三星）玻璃基板進度追趕`
  },

  "8046.TW": {
    id: "8046.TW", name: "南亞電路板", ticker: "8046.TW", flag: "🇹🇼",
    layer: 0, category: "IC 載板・玻璃基板",
    badge: "台灣 IC 載板三雄",
    tagline: "南亞集團旗下載板廠，積極卡位 CoPoS 玻璃核心與增層壓合製程",
    overview: "南亞電路板（NCA）是南亞塑膠集團旗下的 IC 載板廠商，產品涵蓋 FC-BGA、FC-CSP 封裝基板與 BGA 載板。憑藉南亞集團的材料自給優勢（ABF 薄膜、環氧樹脂等關鍵材料在地供應），南亞電路板在先進封裝基板的成本結構上具備獨特優勢。在玻璃基板趨勢中，南亞積極佈局 CoPoS（矽中介層部分置換玻璃）以及下一代玻璃核心增層壓合製程，是欣興之外台廠載板產能的重要補充。",
    products: {
      core: "FC-BGA 封裝基板、FC-CSP 基板、BGA 載板",
      list: [
        "FC-BGA 高腳數封裝基板：AI 晶片高階封裝基板，受益 AI 算力資本支出",
        "FC-CSP 基板：移動/通訊晶片封裝基板",
        "玻璃核心增層基板（開發中）：CoPoS 玻璃中介層替換製程的台廠卡位"
      ]
    },
    technology: {
      moat: [
        "材料自給優勢：母集團南亞塑膠供應 ABF 薄膜、特殊環氧樹脂，原材料成本優勢明顯",
        "集團資源加持：台塑集團財務支撐，玻璃基板等高資本支出的新製程投資能力強"
      ],
      trend: "AI 晶片封裝基板需求結構性成長；玻璃基板是中長期轉型方向"
    },
    customers: [
      { name: "台積電生態系 ASIC 廠", note: "AI 推論 ASIC 封裝基板" },
      { name: "伺服器 CPU 廠", note: "Intel / AMD 伺服器處理器封裝" }
    ],
    outlook: [
      "AI 算力資本支出擴大 → FC-BGA 載板需求正成長",
      "南亞集團材料整合優勢在玻璃基板轉型中持續發揮",
      "CoPoS 技術驗證進展是中期觀察重點"
    ],
    stockMetrics: { exchange: "TWSE", currency: "TWD", sector: "IC 載板" }
  },

  // ── OSAT 封測代工 ─────────────────────────────────────────────
  "3711.TW": {
    id: "3711.TW", name: "日月光投控", ticker: "3711.TW", flag: "🇹🇼",
    layer: 1, category: "封測代工（OSAT）",
    badge: "全球 OSAT 霸主",
    tagline: "全球最大封測代工集團，整合玻璃 TGV + FOPLP 平台吃下次世代先進封裝",
    overview: "日月光投控（ASE Group）是全球最大的半導體封裝測試代工（OSAT）集團，旗下涵蓋 ASE、USI 及 Asteelflash 等品牌。在先進封裝領域，日月光推出 **VIPack** 整合式先進封裝平台，主攻 Chiplet 異質整合。在玻璃基板趨勢中，日月光積極整合玻璃材料、TGV 技術與面板級封裝（FOPLP）平台，已對鈦昇（TGV 設備）等台廠設備進行驗證，是台灣 OSAT 體系中玻璃基板製程落地最積極的代表。",
    products: {
      core: "晶片封裝代工（Wire Bond、FC、SiP、Fan-Out）、最終測試（FT）、VIPack Chiplet 異質整合平台",
      list: [
        "VIPack 先進封裝平台：2.5D/3D Chiplet 異質整合，直接競爭台積電 CoWoS/InFO",
        "Fan-Out 面板級封裝（FOPLP）：由圓轉方，FOPLP 量產平台卡位 2027-2028 玻璃基板",
        "TGV 玻璃基板封裝（驗證中）：整合 TGV 技術提供下一代低介電損耗封裝方案",
        "SiP（System in Package）：AI 邊緣推論、穿戴式裝置多晶片整合"
      ]
    },
    technology: {
      moat: [
        "全球 OSAT 規模第一：產能與技術廣度遠超其他封測廠，大客戶黏著度極高",
        "VIPack 生態系：台積電 CoWoS 之外最完整的 Chiplet 異質整合替代方案",
        "FOPLP + 玻璃基板整合能力：LCD 設備廠轉進的獨特能力，整合設備（鈦昇 TGV、群翊壓合）與製程",
        "測試能力完整閉環：封裝後最終測試一站完成，降低客戶廠間物流成本"
      ],
      trend: "AI 晶片 Chiplet 化趨勢驅動異質封裝需求激增；FOPLP 由圓轉方是中長期降成本策略；玻璃基板 2027-2028 商轉後 OSAT 是最終量產執行者"
    },
    marketShare: {
      global: "全球 OSAT 市佔約 20%，穩居第一",
      desc: "第二名 Amkor 市佔約 13%，第三名 JCET（中資）約 9%；日月光在先進封裝技術深度上領先",
      competitors: ["Amkor（美國）", "JCET 長電科技（中資）", "台積電（封裝直接競爭 CoWoS）"]
    },
    customers: [
      { name: "NVIDIA", note: "AI GPU 後段封裝測試重要夥伴", pct: "~20%" },
      { name: "AMD", note: "高階處理器封裝", pct: "~15%" },
      { name: "高通 / MediaTek", note: "行動/ASIC 晶片封裝", pct: "~30%" },
      { name: "其他 IC 設計廠", note: "涵蓋各類封裝需求", pct: "~35%" }
    ],
    outlook: [
      "AI 算力資本支出持續擴張，先進封裝需求非線性成長，VIPack 是台積電 CoWoS 外最大受益者",
      "FOPLP + 玻璃基板：日月光是最有實力把玻璃基板規格推向量產的 OSAT，2027-2028 是商轉觀察窗口",
      "Chiplet 異質整合：AI 晶片規格複雜化 → OSAT 客製化技術壁壘拉高 → 日月光毛利率上行",
      "測試業務：AI 晶片高複雜度 + Burn-in 需求增加，封裝後測試 ASP 同步提升"
    ],
    stockMetrics: { exchange: "TWSE", currency: "TWD", sector: "OSAT 封測代工" },
    notes: `【日月光（3711）先進封裝觀察備忘】2026/06

● 與台積電的競爭/合作關係：
  台積電 CoWoS（2.5D 封裝）直接服務大客戶（NVIDIA）→ 擠壓日月光的高端市場
  日月光 VIPack 主攻中高端異質整合，定位填補台積電 CoWoS 產能不足的空缺
  FOPLP 平台：台積電尚無量產 FOPLP，日月光是最快落地 FOPLP 的大廠

● 玻璃基板關鍵進度追蹤：
  ✦ TGV 驗證裝機數量（鈦昇 8027 設備驗收）
  ✦ FOPLP 良率爬坡速度（目前 FOPLP 最大痛點）
  ✦ 客戶採用玻璃基板封裝的首家大廠（Intel？Apple？）`
  },
};

// ── 產業鏈顯示定義 ─────────────────────────────────────────────
// 定義主頁產業鏈的精確顯示順序與每家公司的顯示備註
// entries: { id: 公司ID, note?: 顯示在鏈上的簡短備註（覆蓋 badge）}
const CHAIN_DEFINITION = [
  { layer: 0, categories: [
    { name: "戰略稀有金屬回收", entries: [
      { id: "7610.TW", note: "亞洲唯一非紅鎢供應鏈・鎢酸鹽出口全球第二" },
    ]},
    { name: "矽晶圓/SOI 材料", entries: [
      { id: "SOI",     note: "70-80% 壟斷" },
      { id: "4063.JP" },
      { id: "6488.TW" },
    ]},
    { name: "IC 載板・玻璃基板", entries: [
      { id: "3037.TW", note: "Intel 玻璃基板戰略夥伴・2027-2028 量產" },
      { id: "8046.TW", note: "南亞集團材料整合優勢・CoPoS 卡位" },
    ]},
    { name: "薄膜鈮酸鋰（TFLN）", entries: [
      { id: "TIANTONG", note: "中資 TFLN 先行者" },
    ]},
    { name: "EDA 軟體/IP", entries: [
      { id: "SNPS" },
      { id: "CDNS", note: "合佔 65-70% 壟斷" },
    ]},
  ]},

  { layer: 1, categories: [
    { name: "AI 算力平台制定者", entries: [
      { id: "NVDA", note: "制高點・向下發射 Spec・吞噬供應鏈利潤", spanLayers: [1,2,3] },
    ]},
    { name: "晶片設計/高速 IP", entries: [
      { id: "2454.TW", note: "主攻推論 ASIC" },
      { id: "3661.TW" },
      { id: "3443.TW" },
    ]},
    { name: "晶圓代工與先進封裝", entries: [
      { id: "2330.TW", note: "COUPE 平台" },
      { id: "GFS" },
      { id: "ASX",     note: "VIPack" },
    ]},
    { name: "微型光學加工", entries: [
      { id: "6789.TW", note: "超透鏡 Metalens / 微透鏡晶圓級製造" },
    ]},
    { name: "雷射光源供應", entries: [
      { id: "LITE",  note: "50-60% 龍頭" },
      { id: "SIVE",  note: "InP 雷射陣列客製化專家" },
      { id: "SRCP",  note: "EML 年產 6,000 萬顆" },
    ]},
    { name: "控制與電源安全晶片", entries: [
      { id: "5274.TW", note: "BMC 全球 70% 壟斷・NVL72 每台需 72 顆" },
      { id: "4919.TW", note: "BMC 全球二哥 + BBU 電池管理 BMS" },
    ]},
    { name: "底層散熱與重電元件", entries: [
      { id: "3324.TW", note: "Cold Plate" },
      { id: "3017.TW" },
      { id: "6805.TW", note: "快接頭" },
      { id: "FSLR" },
    ]},
    { name: "後段先進製程設備", entries: [
      { id: "8027.TW",  note: "TGV 玻璃打孔" },
      { id: "6133.TW",  note: "雷射載板剝離" },
      { id: "3580.TW",  note: "TGV 通孔活化・RDL 晶種層濺鍍" },
      { id: "6664.TW",  note: "ABF 壓合・翹曲控制烤箱" },
      { id: "3583.TW",  note: "TGV 濕蝕刻・垂直填孔前處理" },
    ]},
    { name: "封測代工（OSAT）", entries: [
      { id: "3711.TW",  note: "VIPack Chiplet + FOPLP 玻璃基板整合" },
    ]},
    { name: "高階測試介面/機台", entries: [
      { id: "6515.TW", note: "1.6T 高速同軸測試座/探針卡" },
      { id: "ATEYY" },
      { id: "KEYS" },
    ]},
    { name: "老化測試與分類系統", entries: [
      { id: "6268.TW", note: "Burn-in Handler 全球七成霸主" },
      { id: "6223.TW", note: "晶圓探針台 + CPO 晶圓級光電共測" },
    ]},
    { name: "先進封裝製程材料", entries: [
      { id: "3595.TW", note: "抗翹曲膠膜・雷射解膠層・FOPLP 材料" },
    ]},
  ]},

  { layer: 2, categories: [
    { name: "光通訊模組/光引擎", entries: [
      { id: "XUCHUANG", note: "Google 2.4T 輕相干獨家・明年利潤 900-1,000 億人民幣" },
      { id: "XINYI",    note: "Amazon NPO 20-30% 份額" },
      { id: "TFC",      note: "Nvidia Mellanox 光引擎・55-60 億人民幣利潤" },
      { id: "POET" },
    ]},
    { name: "熱能管理系統整合", entries: [
      { id: "3324.TW", note: "CDU 液冷/浸沒式整機機櫃" },
      { id: "8996.TW" },
    ]},
    { name: "能源與儲能系統整合", entries: [
      { id: "FLNC" },
      { id: "STEM" },
    ]},
  ]},

  { layer: 3, categories: [
    { name: "網絡交換機與 AI 伺服器", entries: [
      { id: "CSCO" },
      { id: "ANET" },
      { id: "2382.TW" },
      { id: "6669.TW" },
      { id: "2317.TW" },
    ]},
    { name: "高階連接線束組裝", entries: [
      { id: "2328.TW", note: "轉型機器人 AFM 電機與 AI 線束，現階段 AI 營收僅佔 1%" },
    ]},
    { name: "重電與電網終端設備", entries: [
      { id: "ETN" },
      { id: "GEV" },
      { id: "1519.TW" },
      { id: "1503.TW", note: "配電營收高達 72%" },
    ]},
  ]},

  { layer: 4, categories: [
    { name: "全球雲端服務商 (CSP)", entries: [
      { id: "AMZN" },
      { id: "GOOG", note: "自研 TPU v9" },
      { id: "MSFT" },
      { id: "META" },
    ]},
    { name: "乾淨電力供給營運商", entries: [
      { id: "NEE", note: "全球綠能營運龍頭" },
      { id: "BE",  note: "資料中心燃料電池" },
    ]},
    { name: "物理 AI 與移動算力端", entries: [
      { id: "TSLA", note: "FSD 軟體、Optimus 機器人、Megapack 儲能/Autobidder 軟體" },
    ]},
    { name: "終極資本安全堡壘", entries: [
      { id: "BRK.B", note: "手握巨額現金，全資擁有地下能源君王 BHE，轉投資比亞迪 (BYDDF)" },
    ]},
  ]},
];

// ── 輔助函數 ────────────────────────────────────────────────────
function getLayer(layerId) {
  return LAYERS.find(l => l.id === layerId);
}

function getCompaniesByLayer(layerId) {
  return Object.values(COMPANIES).filter(c => c.layer === layerId);
}

function getCompaniesByCategory(layerId, category) {
  return getCompaniesByLayer(layerId).filter(c => c.category === category);
}

function getCategoriesByLayer(layerId) {
  const companies = getCompaniesByLayer(layerId);
  return [...new Set(companies.map(c => c.category))];
}

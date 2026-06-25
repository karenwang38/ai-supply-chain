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
      pe: "26.32x（2026/05/29 股價 1,475元）/ 目標 35x * 2026F EPS 56.05元",
      eps: "26Q1 EPS 10.87元 / 2026F EPS 56.05元（第一金預估，保守情境）",
      epg: "虧轉盈，YoY +1,168%（2025→2026F 稅後淨利）",
      peg: "~0.75（1,475元 / 2026F 56.05元 / G=50%）",
      marketCap: "~NT$716.9億（2026/05/29）",
      price: "NT$1,475（2026/05/29）",
      targetPrice: "NT$2,000（第一金，35x PER * 2026F EPS 56.05元，潛在報酬 +35.6%）",
      week52High: "NT$1,600+",
      week52Low: "創新板，流動性有限",
      divYield: "0.03%（2025年度：股票股利2元 + 現金股利0.5元）",
      sharesOut: "NT$4.860億（股本）",
      exchange: "創新板",
      currency: "TWD",
    },
    relatedIntel: ["2026-06-23-7610-memo", "2026-06-01-7610-kanghe", "2026-06-02-7610-demand", "2026-06-01-7610-first-capital", "2026-05-15-7610-investor-day"],
    notes: `【聯友金屬 (7610) 完整分析備忘】
→ 最新情報：市場情報「2026-06-23 深度說明會 MEMO」
→ 詳細法人報告：市場情報「康和投顧 2026/06/01 深度速報」

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【2026/06/23 深度說明會 MEMO 新增認知】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

■ 子公司更名
  • 「聯友能源」→「聯友先進材料」（因應鈷粉高值化發展方向更名）
  • 7/15 終止興櫃一般板買賣，專注產品認證與營運紮根

■ 廠區藍圖更新（三階段）
  屏南二廠（2026/07-08）：優化副產品氧化率，產能效率 +20~30%
  屏南三廠（2026/06~2027/09 建廠）：
    鎢酸鈉 → APT（仲鎢酸銨）→ WO₃（氧化鎢）
    氧化鎢計價含氧元素，純公式多拿 26.1% 毛利
  屏科廠（2026/09~2027/09 建廠，屏東加工出口區）：
    鎢粉（W）＋碳化鎢（WC），直供半導體/國防，投資 6.5 億，產能 +100%

■ 2030 長期規劃：靶材（需 5N 純度，現有 3N，需多兩次提純製程）
  → 現階段優先把 2027 建廠計畫如期完成再推進

■ 五大 Q&A 關鍵認知
  Q1【鉬替代鎢？】完全不同物理化學特性，不可替代；CVD 鉬替代尚未成熟且佔鎢市場極小部分
  Q2【韓國重開礦山？】年產上限 < 3,000 噸，不到聯友現有產能 80%，無法撼動全球供需
  Q3【日本 WF6 廠停產？】真實原因是中國中船特氣等超低成本競爭，日本廠無利可圖撤退；長期利好聯友
  Q4【靶材計畫？】5N 純度目標，先完成 2027 建廠再說
  Q5【子公司鈷粉認證？】瓶頸在鎢太缺，客戶先搶鎢，鈷粉認證稍延後；同步開發高速鋼市場（不需鎢，3~5% 鈷）

■ 供應危機雙重結構
  鎢：中國「一單一證」+ 境內礦品位下滑（0.42%→0.28%），DFARS 2027/01 生效
  鈷：剛果配額制 2025/10 起，年配額 9.66 萬噸 vs 需求 23.7 萬噸
  → 雙軌價格體系確立，聯友非中安全供應鏈定價權穩固


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
  • 中國出口增值稅差 13%（天然成本利差）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【2026/06/01 第一金報告 + 2026/05/15 法說會 MEMO 更新】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

■ 最新財務數字
  • 2026F EPS 56.05元 / 營收 67.53億 / 毛利率 65.9% / 稅後 30.59億
  • 26Q1：營收10.01億(YoY+484%) / 毛利率73.88% / EPS10.87元
  • 4月營收 5.6億（MoM+20.9%、YoY+345.3%）
  • 單季毛利率軌跡：25Q1 -2% → Q2 22% → Q3 29% → Q4 50% → 26Q1 74%

■ 鎢雙價格體系確立（關鍵新認知）
  • 中國：5月中下旬已跌回年初價格（需求以傳統工業為主，內捲嚴重）
  • 國際：26Q2至今持續上漲15-20%（航太軍工/精密醫療，轉嫁能力強）
  • 非中礦山產能釋放速度遠趕不上去中化速度 → 國際鎢價長線結構性多頭
  • 日本 富士精工、六氟化鎢供應商（關東電化、中央硝子）26H2宣布斷供風險

■ 26H2 主要催化劑（以產能為主）
  • 屏東二廠 26Q3 加入營運：鎢酸鈉月產能+100噸（年產能+30%）
  • 鈷粉全年下修至200噸（日本硬質合金客戶缺鎢，暫緩鈷粉拉貨）
  • 2027年鈷粉目標1000噸不變；屏東三廠+屏科廠 26H2建廠，2027底試產
  • 7月新設備放量是最大短期催化劑（總經理5月起親自進駐督導）

■ M系列防禦機制（法說會關鍵揭露）
  • 第一次製程回收率85-90%，剩餘10-15%形成「二次製程料（M系列）」沉澱庫存
  • M系列含約5%副產品（鈷等），為極高毛利來源
  • 鎢價回檔時可拿出低帳面成本料攤平，可抵抗國際報價瞬間回落30-40%
  • 26Q1存貨已自9.23億增至13.30億（策略性逆向擴張庫存）

■ 氧化鎢計價優勢（2026年新產品線）
  • 買入單位：金屬鎢W；賣出單位：三氧化鎢WO₃
  • 純計價公式即可拿到約26.1%毛利（1單位W → 1.261單位WO₃）
  • 純加工毛利約7%（不含市價差）

■ 客戶結構
  • AMJ（Advanced Material Japan Corp.）：日本Alconix集團旗下，法人董事
    Q1銷貨2.40億（~24%營收），應收帳款餘額1.94億（佔總應收40%）
  • 主要下游客戶：日本中央電氣工業、關東電化工業、Fuji Die硬質合金廠
  • 目標：直接服務Toyota、BMW、軍工承包商等終端品牌（閉環回收體系）

■ 資金規劃（4/30金管會核准）
  • 2,000仟股現金增資（佔現有股本~4.1%）
  • 8億元零息可轉債（3年期、票面利率0%、無擔保）
  • 用途：屏科廠（6.5億）+ APT/氧化鎢產線建置
  • 26Q1資本承諾：4.35億元（QoQ+68%）

■ 法律訴訟風險（尚待釐清）
  • 2025/8/1 被屏東地檢署以違反廢棄物清理法第46條第4款及第47條提起公訴
  • 管理層：已委任律師，目前對營運財務無重大影響，但仍為風險事項

■ 估值（第一金 2026/06/01）
  • 股價 1,475元（05/29）/ 目標價 2,000元 / 潛在報酬 +35.6%
  • 評等：買進 / 35x PER * 2026F EPS 56.05元
  • P/E 26.32x / 市值 716.9億 / 外資持股13.5%`,
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

  "2802.T": {
    id: "2802.T", name: "味之素（Ajinomoto）", ticker: "2802.T", flag: "🇯🇵",
    layer: 0, category: "先進封裝基板材料",
    badge: "ABF 膜全球近壟斷",
    tagline: "食品公司出身，卻壟斷了全球 AI 晶片載板最核心的絕緣材料",
    overview: "味之素（Ajinomoto，2802.T）以食品調味料起家，卻意外壟斷了全球先進 IC 載板不可或缺的絕緣介電材料——ABF（Ajinomoto Build-up Film）增層薄膜。幾乎每顆高端 AI 晶片（NVDA GPU、AMD EPYC、Apple M 系列）的 BGA 封裝基板，都必須使用 ABF 膜作為增層介電層。台股載板三雄（欣興、南亞電路板、景碩）全是它的超級大客戶。因為藏在「食品公司」旗下，傳統半導體分析師長期忽視，是典型的 Serenity 式市場盲區：真實卡點 + 分析師覆蓋空白。",
    technology: {
      core: "ABF（Ajinomoto Build-up Film）熱固性環氧樹脂複合介電薄膜，用於 FC-BGA 載板增層製程",
      products: [
        "ABF 膜（GX 系列）— 高端 AI/HPC 晶片 FC-BGA 載板標準材料",
        "ABF 膜（GZ/GY 系列）— 伺服器 CPU、網路晶片用途",
        "新世代低介電損耗 ABF — 因應 112G/224G 高速傳輸需求"
      ],
      advantages: [
        "材料配方為核心機密，技術壁壘極深，競爭者難以複製",
        "ABF 膜生產需要特殊設備與工藝，新廠認證週期長達 2–3 年",
        "全球唯一大量商業供應商地位，使得客戶黏著度極高",
        "AI 晶片 die 面積持續增大，每顆晶片所需 ABF 層數與面積同步擴增"
      ]
    },
    marketShare: {
      global: "近 100%（唯一大量商業供應商）",
      desc: "高端玻璃纖維布（CCL 用）2024–2027 年預測缺口 20–30%，高端品種缺口 >40%。雖有少數廠商嘗試開發替代品，但認證週期長，短期內難以撼動壟斷地位",
      competitors: [
        { name: "Panasonic（松下）", share: "小量", threat: "low", note: "特定規格有供應，但品項窄" },
        { name: "Nitto Denko（日東電工）", share: "極少", threat: "low", note: "研發中，尚未量產" }
      ]
    },
    customers: {
      major: [
        { name: "欣興電子（3037.TW）", pct: "主要客戶", note: "AI GPU/HPC 最先進 FC-BGA 載板最大採購方" },
        { name: "南亞電路板（8046.TW）", pct: "主要客戶", note: "台灣 ABF 載板三雄之一" },
        { name: "景碩科技（3189.TW）", pct: "主要客戶", note: "台灣 ABF 載板三雄之一" },
        { name: "Ibiden（4062.T）", pct: "主要客戶", note: "日本載板龍頭，NVDA GPU 載板主供應商" },
        { name: "Shinko Electric（6967.T）", pct: "主要客戶", note: "日本另一載板大廠" }
      ],
      breakdown: "下游客戶幾乎涵蓋全球所有高端 IC 載板製造商，並間接服務 NVIDIA、AMD、Intel、Apple 等所有頂級晶片設計商"
    },
    outlook: {
      positive: [
        "AI 晶片 die 面積持續增大，每顆 GPU 所需 ABF 面積與層數大幅增加",
        "CoWoS 封裝基板對 ABF 需求量與規格要求同步提升",
        "AI 伺服器部署加速，FC-BGA 載板出貨量結構性成長",
        "玻璃基板 TGV 若普及，Ajinomoto 有機會切入新世代基板材料供應"
      ],
      catalysts: [
        "NVIDIA Blackwell 系列 ramp 帶動 FC-BGA 載板訂單爆增",
        "欣興/Ibiden 等客戶擴產認證進度確認",
        "玻璃基板材料供應合約披露"
      ]
    },
    stockMetrics: {
      price: "~¥5,200",
      pe: "41x (TTM)",
      eps: "¥138 (TTM)",
      forwardPe: "~30-32x（FY2027E EPS ¥165-175）",
      epg: "+21%（FY2027E 業務利潤指引）",
      tamAdjPeg: "1.05（合理偏便宜）",
      marketCap: "~¥5兆（約 $340億 USD）",
      week52High: "¥5,739",
      week52Low: "¥3,242",
      divYield: "~2.1%",
      sharesOut: "~7.6億股",
      gfDmaHealth: "75/100（Strong but Watch）"
    },
    challenges: [
      "玻璃基板（TGV）若提早商業化，可能部分取代 ABF 膜的需求",
      "日股流動性相對低，國際投資者覆蓋少"
    ],
    risks: [
      "玻璃基板商業化時間點提前至 2026–2027 年",
      "競爭者突破 ABF 配方並獲得主要客戶認證",
      "日圓匯率波動影響美元計價估值"
    ],
    relatedIntel: ["2026-06-10-ajinomoto-2802-full-analysis", "2026-06-09-ai-semiconductor-supply-chain"],
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
    layer: 2, category: "液冷散熱系統整合",
    platform: "NVDA",
    badge: "液冷純度最高",
    tagline: "Q4 2025 水冷佔 51%，業界首家水冷超過風冷——AI 液冷轉型最純、最快",
    overview: "雙鴻是台灣液冷轉型純度最高的散熱廠商。Q4 2025 水冷佔營收 51%（超過風冷），成為業界第一家水冷超過風冷的大廠。泰國新廠 2026 年開始放量，提升產能同時降低地緣政治風險。2025 全年 EPS 28.26 元（+36% YoY），2026E EPS 共識 56.2 元（近倍增），2027E 71.65 元。與奇鋐差異：雙鴻液冷純度更高、β 更大（若液冷快速滲透，雙鴻財務彈性更強），但客戶集中度也更高，研究難度較大。1 月 2026 月營收 YoY +121%，趨勢確認中。",
    technology: {
      core: "冷板式（Cold Plate）水冷板、CDU 冷卻液分配裝置、浸沒式液冷槽（Manifold）",
      products: [
        "AI GPU 冷板式水冷板（Cold Plate，直接接觸 GPU）",
        "CDU 冷卻液分配裝置（機架級整合）",
        "浸沒式液冷整機機櫃（次世代高 TDP 應用）",
        "Manifold 分流管（液冷管路分配）"
      ],
      advantages: [
        "Q4 2025 水冷佔收入 51%（業界首家水冷超過風冷），液冷轉型最純",
        "泰國新廠 2026 提升產能，降低台灣地緣政治風險",
        "冷板+浸沒雙架構，客戶選擇彈性大",
        "高 β 特性：液冷滲透加速時，財務彈性最大"
      ]
    },
    marketShare: {
      global: "台灣液冷散熱市場前二大",
      desc: "與奇鋐並列台灣液冷雙雄。差異：雙鴻液冷純度更高（51% vs 奇鋐多角化），奇鋐客戶多元度更高",
      competitors: [
        { name: "奇鋐（3017.TW）", share: "台灣第一", threat: "medium", note: "品項更廣、客戶更多元，一站式覆蓋 L1+L2" },
        { name: "高力（8996.TW）", share: "台灣第三", threat: "low", note: "熱交換器專注，品項較窄" },
        { name: "Vertiv（VRT）", share: "美系", threat: "medium", note: "端對端整合，但主攻大型機房設施" }
      ]
    },
    customers: {
      major: [
        { name: "廣達（2382.TW）", pct: "主要客戶", note: "AI 伺服器 CDU 方案" },
        { name: "緯穎（6669.TW）", pct: "主要客戶", note: "AI 伺服器液冷模組" },
        { name: "鴻海（鴻準）", pct: "主要客戶", note: "AI 伺服器散熱整合" }
      ],
      breakdown: "客戶集中度較奇鋐高，特定伺服器客戶拉貨節奏直接影響季度財報；這也是雙鴻高 β 的來源"
    },
    outlook: {
      positive: [
        "液冷滲透率持續提升，作為「最純」液冷廠，需求彈性最大",
        "泰國新廠提升產能，進入 2026 全力放量",
        "2026E EPS 56.2元、2027E 71.65元，P/E 相對奇鋐更低，估值重估空間大",
        "1月 2026 月營收 YoY +121%，趨勢最強的財務信號"
      ],
      catalysts: [
        "Q2 2026 財報（8月）驗證水冷佔比能否突破 55%（液冷轉型加速信號）",
        "泰國新廠出貨量確認（降低地緣政治溢價）",
        "新客戶（超大廠或 AMD 平台）合約披露"
      ]
    },
    stockMetrics: {
      eps2025: "NT$28.26（2025全年，+36% YoY）",
      eps2026e: "NT$56.2（2026E）",
      eps2027e: "NT$71.65（2027E）",
      epg: "+99%（2026E YoY）",
      waterCoolingMix: "51%（Q4 2025，業界首家水冷超過風冷）",
      jan2026Growth: "+121% YoY（2026年1月月營收）",
      divYield: "0%",
      sharesOut: "NT$18.5億"
    },
    challenges: [
      "客戶集中度較高，特定 AI 伺服器客戶拉貨波動直接衝擊財報",
      "浸沒式液冷技術商業化驗證周期長"
    ],
    risks: [
      "液冷滲透速度若不如預期，高 β 也帶來高波動",
      "NVIDIA GB300 交期延後影響拉貨節奏",
      "台幣大幅升值侵蝕毛利"
    ],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"],
  },

  "3017.TW": {
    id: "3017.TW", name: "奇鋐科技", ticker: "3017.TW", flag: "🇹🇼",
    layer: 2, category: "液冷散熱系統整合",
    platform: "NVDA",
    badge: "液冷一站式龍頭",
    tagline: "Cold Plate + CDU 一站式、客戶最多元——液冷鏈中財務彈性最清楚的一節",
    overview: "奇鋐是台灣散熱模組最大廠，也是整條 AI 液冷鏈中產品廣度最大的公司——同時覆蓋晶片級冷卻板（L1）與機架級 CDU（L2），客戶橫跨 NVIDIA、AMD、各超大廠，切換成本極高。Q1 2026 EPS 20.17 元創歷史新高（YoY +110%），已有 19 位分析師覆蓋，大摩目標 3,333 元，2026E EPS 共識 93.75 元（P/E ~27x）。關鍵邏輯：GB200 NVL72 機架每套必備液冷方案，奇鋐的「heat sink + cold plate + CDU 一站式」讓下游客戶不需要跨供應商整合，黏著度最高。是整條液冷鏈中財務彈性最清楚、護城河最可量化的一節。",
    technology: {
      core: "熱管（Heat Pipe）、均溫板（Vapor Chamber）、液冷冷板（Cold Plate）、CDU 冷卻液分配裝置",
      products: [
        "AI GPU 液冷冷板（Cold Plate，直接接觸 die）",
        "CDU 冷卻液分配裝置（機架級整合）",
        "均溫板（Vapor Chamber，傳統風冷 / 混合冷卻）",
        "散熱鰭片組（Heat Sink）",
        "伺服器散熱整套系統方案（一站式）"
      ],
      advantages: [
        "L1+L2 一站式覆蓋，客戶無須跨廠商整合散熱系統（唯一能力）",
        "NVIDIA/AMD 雙平台認證，客戶多元化降低拉貨波動",
        "19 位分析師覆蓋，機構投資者能見度最高（財報後透明度最強）",
        "Q1 2026 EPS 20.17 元（+110% YoY），護城河進入財報驗證階段"
      ]
    },
    marketShare: {
      global: "台灣散熱模組最大廠，全球伺服器散熱前三",
      desc: "與雙鴻並列台灣液冷雙雄，差異：奇鋐產品廣度更高（一站式 L1+L2），雙鴻液冷純度更高（水冷佔 51%）",
      competitors: [
        { name: "雙鴻（3324.TW）", share: "台灣第二", threat: "medium", note: "液冷模組純度更高，但品項較窄" },
        { name: "Vertiv（VRT）", share: "美系", threat: "medium", note: "端對端整合能力更強，但主攻機房級大型設施" },
        { name: "Modine（MOD）", share: "美系", threat: "low", note: "CDU + 精密空調，主攻機房設施側，不直接競爭 cold plate" }
      ]
    },
    customers: {
      major: [
        { name: "廣達（2382.TW）", pct: "最大客戶", note: "GB200/NVL72 主要散熱方案供應商" },
        { name: "緯穎（6669.TW）", pct: "主要客戶", note: "AI 伺服器 ODM 散熱方案" },
        { name: "鴻海/鴻準", pct: "主要客戶", note: "AI 伺服器散熱整合" },
        { name: "AMD 平台客戶", pct: "次要客戶", note: "多平台認證降低 NVIDIA 單一依賴" }
      ],
      breakdown: "NVIDIA GB200/B300 相關機台散熱是近期最大訂單驅動力，多客戶結構讓財報波動較雙鴻平滑"
    },
    outlook: {
      positive: [
        "GB200 NVL72 每機架液冷方案必配，2026 下半年進入大規模出貨",
        "Rubin 平台（GB300 繼任）預期 TDP 5,000W+，液冷要求更高",
        "2026E EPS 共識 93.75 元（19 位分析師），當前 P/E ~27x（~2,555元），有重估空間",
        "多客戶結構讓季度財報波動更平滑，適合作為液冷鏈核心持倉"
      ],
      catalysts: [
        "Q2 2026 財報（8月）：季營收維持 NT$450億以上、毛利率站穩 30%",
        "NVIDIA GB300（Rubin Ultra）出貨節奏確認",
        "新超大廠客戶（直供合約）披露"
      ]
    },
    stockMetrics: {
      price: "~NT$2,555",
      pe2026e: "~27x（2026E EPS 93.75元，19位分析師共識）",
      q1Eps: "NT$20.17（Q1 2026 歷史新高，+110% YoY）",
      eps2026e: "NT$93.75（共識）",
      epg: "+110%（Q1 2026 YoY）",
      marketCap: "~NT$1.1兆",
      week52High: "NT$3,010",
      week52Low: "NT$608",
      analystTarget: "NT$3,333（大摩目標）",
      divYield: "~0.37%",
      sharesOut: "NT$33.2億"
    },
    challenges: [
      "台幣升值侵蝕美元計價毛利（每升值 1%，稅前獲利影響約 3-5%）",
      "客戶若自建散熱能力或要求供應商整合"
    ],
    risks: [
      "NVIDIA GB300 交期若延後，Q3/Q4 出貨節奏受壓",
      "台幣大幅升值（>5%）壓縮毛利率低於 28%",
      "競爭者擴產導致毛利率滑落"
    ],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"],
  },

  "3653.TW": {
    id: "3653.TW", name: "健策精密", ticker: "3653.TW", flag: "🇹🇼",
    layer: 1, category: "晶片級均熱散熱元件",
    badge: "NVIDIA GPU 均熱板首選",
    tagline: "毛利率 41.6% 的護城河——最接近晶片的散熱那一層",
    overview: "健策精密是台灣均熱板（Vapor Chamber）最大廠，也是整條 AI 液冷鏈中「最接近晶片」的那一節。均熱板直接貼附 NVIDIA GPU die 表面，是晶片熱量進入冷卻液路徑的第一道關卡，也是最難替換的元件之一——NVIDIA 有嚴格認證門檻，導入後切換需要 6-12 個月重新認證。2025 全年 EPS 36.75 元（+54% YoY），毛利率 41.6%（業界最高，直接體現定價權），散熱模組佔 Q4 2025 營收 75%。與奇鋐/雙鴻的差異：健策最接近晶片（定價權最強），但均熱板可替代性高於 CDU，是比較之下的主要弱點。",
    technology: {
      core: "均熱板（Vapor Chamber）、熱管（Heat Pipe）、散熱鰭片組（Fin Array）",
      products: [
        "NVIDIA GPU 用均熱板（Vapor Chamber，主力產品）",
        "高端伺服器 CPU 散熱模組（Intel/AMD Xeon/EPYC）",
        "液冷混合散熱元件（Cold Plate 前端過渡材料）",
        "散熱鰭片（Fin）成形加工"
      ],
      advantages: [
        "NVIDIA GPU 認證供應商，導入後切換需 6-12 個月重新認證，黏著度極高",
        "毛利率 41.6%（業界最高），直接體現對 NVIDIA 供應商的定價權",
        "均熱板技術壁壘比散熱片高，生產設備投資與製程 know-how 門檻深",
        "散熱模組佔比 Q4 2025 已達 75%，轉型 AI 幾近完成"
      ]
    },
    marketShare: {
      global: "台灣均熱板最大廠，全球伺服器均熱板前二大",
      desc: "均熱板市場比冷卻板更集中，全球主要供應商不超過 5 家，健策在 AI GPU 應用具備近獨占地位",
      competitors: [
        { name: "奇鋐（3017.TW）", share: "台灣競爭", threat: "medium", note: "均溫板亦有生產，但奇鋐重心在 CDU 系統整合" },
        { name: "Fujikura（日本）", share: "日本", threat: "low", note: "主攻消費電子，AI 伺服器非主力" },
        { name: "CelServ（泰國）", share: "亞洲競爭", threat: "low", note: "規模較小" }
      ]
    },
    customers: {
      major: [
        { name: "NVIDIA GPU 下游 ODM", pct: "最大客戶群", note: "廣達/緯穎等組裝 H100/H200/B200 時必用健策均熱板" },
        { name: "AMD GPU 散熱應用", pct: "次要客戶", note: "AMD MI300 / MI400 系列散熱" }
      ],
      breakdown: "AI 伺服器 GPU 散熱模組是主要收入來源（75%），隨 AI GPU 出貨量線性擴張"
    },
    outlook: {
      positive: [
        "AI GPU TDP 持續升級（H100 700W → B200 1,000W+），每顆 GPU 需要的均熱板面積與熱傳能力需求同步提升",
        "毛利率 41.6% 顯示定價權穩固，NVIDIA 認證壁壘阻擋競爭者進入",
        "散熱模組佔比已達 75%，轉型 AI 完成度最高的散熱元件廠"
      ],
      catalysts: [
        "NVIDIA GB300（Rubin Ultra）均熱板認證完成並開始放量",
        "AI GPU 出貨量 2026 下半年大幅提升",
        "新客戶（AMD MI400 系列）認證完成披露"
      ]
    },
    stockMetrics: {
      eps2025: "NT$36.75（2025全年，+54% YoY）",
      grossMargin: "41.6%（2025，業界最高）",
      aiMix: "75%（散熱模組，Q4 2025）",
      epg: "+54%（2025 YoY）",
      divYield: "~1.5%",
      sharesOut: "~NT$6.3億"
    },
    challenges: [
      "均熱板可替代性高於 CDU（若 NVIDIA 改用直接液冷方案，不需均熱板則需求結構改變）",
      "長期而言，直接液冷（cold plate 直接接觸 die）可能部分減少均熱板需求"
    ],
    risks: [
      "NVIDIA GPU 散熱設計若改為全液冷（不需均熱板），需求結構性改變",
      "NVIDIA 若調整認證供應商策略（增加第二供應商）壓縮定價權",
      "均熱板技術壁壘若被競爭者突破"
    ],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"],
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
    risks: ["液冷標準若走向整合（廠商自製接頭）", "原材料（金屬）成本波動"],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"],
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
    risks: ["Intel/AMD 伺服器 CPU 若改變封裝形式（BGA 化）", "液冷快接頭業務尚未規模化"],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"]
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
    risks: ["浸沒式液冷若被其他散熱技術取代", "市場啟動時間延遲"],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"]
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
    risks: ["規模難以擴大", "被整合商自製取代"],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"]
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
    risks: ["液冷標準若改變設計規格", "毛利率受壓"],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"],
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

  "MOD": {
    id: "MOD", name: "Modine Manufacturing", ticker: "MOD", flag: "🇺🇸",
    layer: 2, category: "液冷機房冷卻設備整合",
    badge: "$4B 合約・CDU + 精密空調",
    tagline: "超大廠願意預付 $165M 鎖定產能——整條液冷鏈最罕見的客戶承諾信號",
    overview: "Modine Manufacturing 透過收購 Airedale（英國精密空調）和快速發展的 CDU 業務，成為 AI 資料中心「L2-L3 熱鏈解決方案」的關鍵廠商。最重要的護城河信號：一個匿名超大廠客戶（市場猜測為 Microsoft 或 Google）與 Modine 簽訂 $4B 長期供貨合約，並預付 $165M——客戶願意付現金鎖定產能，代表 Modine CDU 技術已無退路，是整個液冷鏈中最罕見的客戶承諾信號。FY2025 數據中心營收 $644M（+119% YoY），FY2026E 公司指引成長 >30%。",
    technology: {
      core: "CDU（冷卻液分配裝置）、精密空調（CRAC/CRAH，Airedale 品牌）、冷卻塔與 Chiller 系統",
      products: [
        "Airedale 精密空調（CRAC/CRAH，機房級冷卻）",
        "資料中心 CDU（AI 機架級液冷分配）",
        "冷卻塔（Cooling Tower）與 Chiller 系統",
        "液冷整合工程服務"
      ],
      advantages: [
        "$4B 匿名客戶合約 + $165M 預付款——客戶承諾在液冷供應鏈中極罕見，鎖定多年能見度",
        "CDU 工程設計門檻高（整合泵、熱交換、管路、控制系統）",
        "Airedale 精密空調補足機房級冷卻，L2+L3 一站式",
        "訂單能見度超過 18 個月，FY2026E >30% 有公司指引背書"
      ]
    },
    marketShare: {
      global: "CDU + 精密空調市場北美前三",
      desc: "精密空調市場：Vertiv、施耐德（Schneider）、Modine 三強，Modine Airedale 在歐英市場更強",
      competitors: [
        { name: "Vertiv（VRT）", share: "北美第一", threat: "high", note: "更完整的端對端熱鏈整合能力" },
        { name: "施耐德電氣（Schneider）", share: "全球第一", threat: "medium", note: "電力+冷卻組合更全面" },
        { name: "高力（8996.TW）", share: "亞洲競爭", threat: "low", note: "台灣在地，規模小" }
      ]
    },
    customers: {
      major: [
        { name: "匿名超大廠（$4B合約）", pct: "單一最大客戶", note: "市場猜測 Microsoft 或 Google，已支付 $165M 預付款" },
        { name: "北美大型資料中心建設商", pct: "主要客戶群", note: "CDU + 精密空調組合採購" }
      ],
      breakdown: "客戶高度集中（1個匿名超大客戶佔大部分 DC 收入），是護城河也是風險；第二客戶合約若披露，估值重估機會"
    },
    outlook: {
      positive: [
        "FY2026E 數據中心收入成長 >30%（公司指引）",
        "$4B 合約提供多年能見度，抗單季波動",
        "CDU 需求隨 AI 液冷滲透率提升，Airedale 精密空調提供額外成長",
        "若第二個超大廠合約披露，客戶集中度風險大幅降低"
      ],
      catalysts: [
        "FY2026 Q2（8月）財報：DC 業務能否維持 >30% 成長",
        "第二個超大廠合約披露（降低客戶集中度風險，估值重估觸媒）",
        "CDU 單季收入突破 $200M"
      ]
    },
    stockMetrics: {
      dcRevenueFY25: "$644M（FY2025 DC 業務，+119% YoY）",
      dcGrowthFY26e: ">30%（FY2026 公司指引）",
      contractBacklog: "$4B（匿名超大廠，已付 $165M 預付款）",
      divYield: "~0.4%",
      sharesOut: "~51M"
    },
    challenges: [
      "單一超大廠客戶集中度過高（若合約延後或縮水，財報直接受衝擊）",
      "氣冷 HVAC 傳統部門估值拖累，市場難以給予純 DC 冷卻估值"
    ],
    risks: [
      "匿名超大廠若降低資本支出或延後建設，$4B 合約節奏受壓",
      "Vertiv、施耐德等大廠挖取中小型客戶",
      "利率上升增加資料中心建設成本，影響新項目起動節奏"
    ],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"],
  },

  "VRT": {
    id: "VRT", name: "Vertiv Holdings", ticker: "VRT", flag: "🇺🇸",
    layer: 2, category: "液冷機房冷卻設備整合",
    badge: "端對端熱鏈唯一解",
    tagline: "$15B backlog + 2.9x book-to-bill——AI 散熱基礎設施的最終守門者",
    overview: "Vertiv 是全球唯一提供「從機架液冷到機房設施」完整熱鏈的公司——同時做 CDU（液冷分配）、CRAC（精密空調）、Chiller（冷水機），以及 UPS 電力保護系統。護城河深度最高：$15B backlog + 2.9x book-to-bill（Q4 2025）+ 長期服務合約鎖入客戶（服務合約占收入 ~35%）。是整條 AI 散熱鏈中訂單能見度最強的公司。代價是市值 $35-40B 已高度反映 AI 需求，估值彈性（股價上行空間）最低，適合作為「基準線」而非高報酬標的。",
    technology: {
      core: "CDU 液冷分配、精密空調（CRAC/CRAH，Liebert 品牌）、Chiller 冷水機、UPS 電源保護",
      products: [
        "Liebert CDU（液冷分配裝置，AI 機架級）",
        "Liebert CRAC/CRAH（機房精密空調）",
        "Liebert EXM/EXS UPS（電力保護）",
        "Geist 電源分配（PDU）",
        "服務合約與現場維護（軟硬體一體化服務，佔收入 ~35%）"
      ],
      advantages: [
        "唯一端對端熱鏈（CDU → CRAC → Chiller），客戶不需要跨廠商整合",
        "$15B backlog（Q4 2025），訂單能見度最長",
        "2.9x book-to-bill（Q4 2025），訂單流入速度是消化速度 2.9 倍",
        "服務合約鎖入：設備安裝後維護合約通常 3-5 年，現金流可見度極高",
        "全球 70 個服務中心，本地化服務能力是外資進入的高壁壘"
      ]
    },
    marketShare: {
      global: "AI 資料中心熱鏈整合設備全球第一（CDU + 精密空調市場）",
      desc: "精密空調市場：Vertiv #1、Schneider #2；CDU 市場 Vertiv 也是全球前三。服務合約占收入約 35%，遠高於競爭者",
      competitors: [
        { name: "施耐德電氣（Schneider Electric）", share: "全球第二", threat: "high", note: "電力+冷卻組合更全面，但精密冷卻不如 Vertiv 深入" },
        { name: "Modine（MOD）", share: "北美競爭", threat: "medium", note: "$4B 合約客戶是潛在競爭來源" },
        { name: "雙鴻（3324.TW）", share: "亞太競爭", threat: "low", note: "台系液冷，主要在台灣 ODM 客戶側" }
      ]
    },
    customers: {
      major: [
        { name: "微軟（MSFT）", pct: "重要客戶", note: "Azure 資料中心大規模採購" },
        { name: "Google（GOOG）", pct: "重要客戶", note: "GCP 及 AI 基礎設施" },
        { name: "Amazon（AMZN）", pct: "重要客戶", note: "AWS 資料中心" },
        { name: "Meta（META）", pct: "重要客戶", note: "AI 超算中心" }
      ],
      breakdown: "全球主要 CSP 幾乎全是 Vertiv 客戶，服務合約鎖定後切換成本極高"
    },
    outlook: {
      positive: [
        "2026E 全年營收指引 $13.5B，YoY ~+16%",
        "Q4 2025 +22.7% YoY，book-to-bill 2.9x，動能持續",
        "服務合約比例提升（軟體化），毛利率結構改善",
        "AI 投資週期長（資料中心建設 3-5 年），backlog 提供極長能見度"
      ],
      catalysts: [
        "Q2 2026 財報（8月）驗證 book-to-bill 是否維持 >2x",
        "新一代液冷產品針對 GB300（5,000W+）認證",
        "服務合約收入超過總收入 40%（毛利率提升信號）"
      ]
    },
    stockMetrics: {
      q4_2025Growth: "+22.7% YoY（Q4 2025）",
      backlog: "$15B（Q4 2025）",
      bookToBill: "2.9x（Q4 2025）",
      revenue2026e: "$13.5B（2026E 公司指引）",
      marketCap: "~$35-40B",
      divYield: "~0.1%",
      sharesOut: "~423M"
    },
    challenges: [
      "市值 $35-40B 已大幅反映 AI 需求預期，成長驚喜空間有限（適合作基準線，非高報酬標的）",
      "大客戶集中（少數超大廠資本支出決策影響大）"
    ],
    risks: [
      "超大廠若延後資本支出（2026 下半年可能），backlog 消化速度放緩",
      "施耐德、Johnson Controls 等大廠切入液冷市場侵蝕份額",
      "服務合約若發生大型設備失效，維修成本侵蝕毛利"
    ],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"],
  },

  "2421.TW": {
    id: "2421.TW", name: "建準電機", ticker: "2421.TW", flag: "🇹🇼",
    layer: 2, category: "散熱輔助元件（泵/風扇）",
    badge: "液冷泵模組供應商",
    tagline: "AI 液冷泵是新增需求，但傳統風扇面臨替代壓力——AI 受益間接",
    overview: "建準電機以精密風扇起家，在 AI 液冷時代提供冷卻系統所需的水泵（Pump）、風扇模組，是液冷管路中的動力來源元件。AI 液冷對傳統風扇而言是部分替代（機架風扇需求下降），但液冷泵是新增需求。Q1 2026 YoY +20.6%，遠低於奇鋐/雙鴻的 100%+，顯示 AI 直接受益程度較弱。適合作為「液冷普及深化」的間接觀察標的，但不是優先研究對象。",
    technology: {
      core: "無刷直流（BLDC）風扇技術、液冷水泵設計製造",
      products: [
        "伺服器散熱風扇（傳統風冷，AI 時代需求下降）",
        "液冷系統水泵模組（新增 AI 受益點）",
        "工業用風扇及散熱元件"
      ],
      advantages: [
        "風扇技術深厚，轉型液冷泵有工藝基礎",
        "全球伺服器主機板廠的長期合作關係（黏著度）"
      ]
    },
    marketShare: {
      global: "台灣伺服器風扇前二大",
      desc: "液冷泵市場仍在建立，建準是新進者，尚未建立明確市佔。傳統風扇市場與台達電、奇鋐競爭",
      competitors: [
        { name: "台達電（2308.TW）", share: "工業泵/風扇", threat: "medium", note: "更大規模的競爭者" },
        { name: "奇鋐（3017.TW）", share: "散熱方案", threat: "medium", note: "奇鋐的 CDU 整合包含泵模組" }
      ]
    },
    customers: {
      major: [
        { name: "AI 伺服器 ODM 廠", pct: "主要客戶", note: "風扇為主，液冷泵逐步增加" }
      ],
      breakdown: "傳統風扇業務面臨液冷替代壓力，泵業務是新增長點但規模仍小"
    },
    outlook: {
      positive: [
        "液冷系統水泵需求隨液冷滲透率提升而成長（每套 CDU 需 2-4 個水泵）",
        "風扇業務雖受壓，但工業用風扇維持基本盤"
      ],
      catalysts: [
        "液冷泵業務佔比突破 20%（轉型加速信號）",
        "與奇鋐/雙鴻 CDU 系統確認大規模配套供應"
      ]
    },
    stockMetrics: {
      q1_2026Growth: "+20.6% YoY（遠低於奇鋐/雙鴻 100%+）",
      divYield: "~2.5%",
      sharesOut: "~NT$7.8億"
    },
    challenges: [
      "AI 液冷對傳統風扇是部分替代（風扇需求下降），AI 受益不純粹",
      "液冷泵新業務規模仍小，無法大幅改變整體財務結構"
    ],
    risks: [
      "風扇業務因液冷替代持續萎縮，若泵業務無法及時填補，整體營收承壓",
      "AI 受益程度遠低於奇鋐/雙鴻，不適合作為純 AI 液冷標的"
    ],
    relatedIntel: ["2026-06-10-liquid-cooling-supply-chain"],
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

  "KLAC": {
    id: "KLAC", name: "科磊（KLA Corporation）", ticker: "KLAC", flag: "🇺🇸",
    layer: 1, category: "先進封裝設備與檢測",
    badge: "先進封裝檢測唯一解",
    tagline: "拯救台積電 CoWoS 良率的頂級機台——沒有 KLA，先進封裝無法量產",
    overview: "KLA Corporation（科磊，KLAC）是全球半導體製程控制與良率管理設備的絕對龍頭，市佔率超過 50%。在 AI 時代，KLA 最被低估的業務是 Advanced Packaging（先進封裝）部門：專門用來偵測 CoWoS 封裝中的晶圓翹曲（warpage）、凸塊對位偏差（bump misalignment）、缺陷（defect），確保將多顆 die 拼在一起的 2.5D/3D 封裝良率達標。沒有 KLA 的量測機台，台積電無法穩定量產 CoWoS；沒有穩定量產 CoWoS，NVIDIA H100/H200/B200 出不了貨。市場追著「誰做封裝」，卻忽略「讓封裝能量產的設備商」定價權更強——KLA Advanced Packaging 收入從 $635M（2025）快速爬向 $1B（2026），且訂單能見度超過 18 個月。",
    technology: {
      core: "製程控制（Process Control）、缺陷檢測（Defect Inspection）、量測（Metrology）設備，專攻先進封裝翹曲控制與凸塊對位",
      products: [
        "Wafer Inspection System — 晶圓缺陷全面掃描，捕捉封裝過程中的微米級缺陷",
        "Overlay Metrology（ARCHER 系列）— 量測各層對位精度，確保 HBM/GPU die 疊合準確",
        "Warpage Measurement — 偵測晶圓翹曲，這是 CoWoS 封裝最難控制的物理變形問題",
        "Advanced Packaging Inspection — 專為 2.5D/3D 封裝設計的整合缺陷管控方案",
        "Film/Surface Metrology — 薄膜厚度量測，用於 ABF 基板增層製程監控"
      ],
      advantages: [
        "先進封裝製程控制市占率 >50%，客戶一旦導入難以切換",
        "CoWoS/SoIC/Foveros 等異質整合架構對 KLA 設備依賴度日增",
        "訂單能見度超過 18 個月，因設備交期長且客戶需要提前鎖定",
        "Advanced Packaging 部門快速成長，補足傳統前道設備週期性風險"
      ]
    },
    marketShare: {
      global: "製程控制設備市占 ~52%（全球第一）",
      desc: "KLA 在製程控制（Process Control）設備市場的壟斷程度遠高於應用材料（AMAT）或泛林（LRCX）在各自領域的地位。競爭對手在先進封裝檢測領域更是難以追趕",
      competitors: [
        { name: "日立High-Tech", share: "~12%", threat: "low", note: "部分利基型缺陷檢測，高端不如KLA" },
        { name: "ONTO Innovation", share: "~8%", threat: "medium", note: "先進封裝量測有切入，但規模差距大" },
        { name: "Onto/Rudolph（合併後）", share: "~6%", threat: "low", note: "小型利基市場" }
      ]
    },
    customers: {
      major: [
        { name: "台積電（TSMC）", pct: "最大客戶", note: "CoWoS、SoIC 每一道製程都需要 KLA 設備監控良率" },
        { name: "三星（Samsung）", pct: "主要客戶", note: "HBM 堆疊與先進邏輯製程" },
        { name: "SK Hynix", pct: "主要客戶", note: "HBM3E/4 製程控制" },
        { name: "英特爾（Intel）", pct: "主要客戶", note: "Foveros 3D 封裝製程監控" },
        { name: "日月光（ASE）", pct: "主要客戶", note: "VIPack 先進封裝良率管控" }
      ],
      breakdown: "全球前十大晶圓廠與封測廠幾乎全是 KLA 客戶，Advanced Packaging 業務近兩年快速放量"
    },
    outlook: {
      positive: [
        "Advanced Packaging 收入：$635M（2025）→ 接近 $1B（2026），遠超早期預測",
        "CoWoS、SoIC、Foveros 等先進封裝技術普及，每個新節點都需要更多 KLA 設備",
        "HBM 堆疊層數從 8-Hi 到 12-Hi 持續增加，每增一層都需要更多量測步驟",
        "訂單能見度超過 18 個月，在設備商中能見度最高之一"
      ],
      catalysts: [
        "台積電 CoWoS 擴產至 120k 片/月帶動設備採購加速",
        "HBM4 認證進入量產，堆疊量測需求大增",
        "Advanced Packaging 季報收入突破 $250M 單季",
        "中國先進封裝投資加速，若不受出口管制限制則為額外上行"
      ]
    },
    stockMetrics: {
      pe: "~38x",
      eps: "$25.50（預估 FY2026）",
      epg: "+22%",
      peg: "~1.7",
      marketCap: "~$870億 USD",
      week52High: "$965",
      week52Low: "$610",
      divYield: "~0.9%",
      sharesOut: "1.36億股"
    },
    challenges: [
      "傳統前道設備週期性下行時，整體收入會受影響（但 AP 部門提供緩衝）",
      "中國出口管制限制部分高端設備出口，影響中國客戶收入"
    ],
    risks: [
      "半導體資本支出週期下行壓縮設備採購預算",
      "新競爭者切入先進封裝檢測（ONTO、日立等）",
      "地緣政治導致中國客戶採購受限"
    ],
    relatedIntel: ["2026-06-09-ai-semiconductor-supply-chain"],
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

  "5274.TWO": {
    id: "5274.TWO", name: "信驊科技", ticker: "5274.TWO", flag: "🇹🇼",
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
    ],
    relatedIntel: ["2026-06-11-bmc-mcu-supply-chain"]
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
    relatedIntel: ["2026-06-11-bmc-mcu-supply-chain", "2026-06-02-4919-milestones"],
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

  "6202.TWO": {
    id: "6202.TWO", name: "盛群半導體", ticker: "6202.TWO", flag: "🇹🇼",
    layer: 1, category: "控制與電源安全晶片",
    badge: "AI 風扇控制 MCU", tagline: "AI 散熱系統風扇控制 MCU 與消費 IC",
    overview: "盛群半導體（Holtek Semiconductor）是台灣主要 MCU 廠商之一，產品線涵蓋消費 MCU、工控 MCU 與 AI 散熱系統風扇控制 MCU。AI 資料中心散熱需求提升帶動風扇控制晶片訂單成長，但 AI 主題在盛群總業務中佔比有限，屬 Tier 2 間接受惠。MCU 景氣周期回復是近期主要驅動力。",
    technology: { core: "8/32 位元 MCU 設計、風扇控制 IC、觸控 IC", products: ["工業/消費 MCU", "散熱風扇控制 IC", "觸控感應 MCU", "無線 MCU（BLE）"], advantages: ["成熟的台灣本土 MCU 廠商", "風扇控制 IC 在伺服器散熱市場有一定存在感"] },
    marketShare: { global: "台灣中型 MCU 廠", desc: "消費與工控 MCU 市場，AI 伺服器風扇控制是新興利基", competitors: ["新唐科技（4919.TW）", "松翰科技（2454.TWO）", "中微半導（中國）"] },
    customers: { major: ["消費電子廠商", "AI 伺服器散熱模組廠"], breakdown: "消費/工控客戶為主，AI 散熱是新增利基" },
    outlook: { positive: ["MCU 景氣周期回復", "AI 資料中心散熱 MCU 需求成長"], catalysts: ["MCU 產業庫存去化完成", "AI 伺服器散熱訂單放量"] },
    stockMetrics: {
      divYield: "0%"
    },
    challenges: ["AI 主題佔總業務比重小，純度不足", "競爭激烈的 MCU 市場，毛利率壓力持續"],
    risks: ["MCU 景氣若再度下行", "中國廠商持續搶佔低階市場"],
    relatedIntel: ["2026-06-11-bmc-mcu-supply-chain"]
  },

  "2454.TWO": {
    id: "2454.TWO", name: "松翰科技", ticker: "2454.TWO", flag: "🇹🇼",
    layer: 1, category: "控制與電源安全晶片",
    badge: "消費/工控 MCU", tagline: "消費電子與工控 MCU 設計廠",
    overview: "松翰科技（Sonix Technology）是台灣消費電子與工控 MCU 設計廠，產品涵蓋 8/32 位元 MCU、音頻處理 IC 與 USB 控制器。MCU 景氣周期回復是近期主要驅動力，但缺乏明確的 AI 直接催化劑，是供應鏈中 Tier 2 末端位置。差異化有限，主要受益於行業整體景氣回升。",
    technology: { core: "8/32 位元 MCU、音頻 IC、USB 控制器", products: ["工控/消費 MCU", "音頻處理 IC", "USB Type-C 控制器", "藍芽 MCU"], advantages: ["成熟的 MCU 設計能力", "多元產品線覆蓋消費與工控"] },
    marketShare: { global: "台灣中小型 MCU 廠", desc: "消費 MCU 市場競爭激烈，差異化有限", competitors: ["盛群半導體（6202.TWO）", "新唐科技（4919.TW）", "中微半導（中國）"] },
    customers: { major: ["消費電子廠商", "工控設備廠"], breakdown: "消費電子為主要市場" },
    outlook: { positive: ["MCU 景氣回復帶動出貨量成長"], catalysts: ["消費電子需求回溫", "工控 MCU 庫存去化完成"] },
    stockMetrics: {
      divYield: "0%"
    },
    challenges: ["缺乏 AI 直接催化劑，主題純度低", "消費 MCU 市場競爭激烈，毛利率承壓"],
    risks: ["MCU 市場若再度下行", "中國廠商低價競爭"],
    relatedIntel: ["2026-06-11-bmc-mcu-supply-chain"]
  },

  "FSLR": {
    id: "FSLR", name: "First Solar", ticker: "FSLR", flag: "🇺🇸",
    layer: 4, category: "乾淨電力供給營運商",
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

  "8027.TWO": {
    id: "8027.TWO", name: "鈦昇科技", ticker: "8027.TWO", flag: "🇹🇼",
    layer: 1, category: "先進封裝製程設備",
    badge: "TGV 高速鑽孔・CoPoS", tagline: "玻璃基板 TGV 設備與 Intel CoPoS 卡位者",
    overview: "鈦昇科技掌握 TGV（Through Glass Via）高速雷射鑽孔設備技術，並佈局 Intel CoPoS（Co-Packaged Silicon）玻璃基板封裝架構的關鍵設備。英特爾大投資訂單量年增 50%，代表 Intel 驗證進度正向。然而 2026Q1 EPS -0.22 元仍虧損，股價 255.5 元前瞻 PE 超 100x，核心假設（Intel CoPoS 驗證通過）尚未兌現——是「潛在卡點」非「已確認卡點」，現價風險極高。",
    technology: { core: "TGV 高速雷射鑽孔設備、CoPoS 玻璃基板封裝設備", products: ["TGV 高速鑽孔設備", "玻璃基板精密加工設備", "CoPoS 架構製程設備"], advantages: ["TGV 技術壁壘高，全球商業化廠商極少", "Intel CoPoS 驗證進行中，英特爾訂單量年增 50%", "與東捷 TGV 技術路線互補（鑽孔 vs 雷射改質）"] },
    marketShare: { global: "TGV 設備市場利基廠，CoPoS 關鍵設備候選", desc: "市場尚早期，先佔優勢可觀，但商業化時程不確定", competitors: ["LPKF Laser（德國）", "東捷科技（TGV 雷射改質，互補關係）"] },
    customers: { major: ["Intel（CoPoS 驗證客戶，訂單量 YoY +50%）", "台積電（先進封裝研發）"], breakdown: "Intel CoPoS 驗證是最大潛在訂單，量產時程未確認" },
    outlook: { positive: ["Intel CoPoS 驗證通過後，訂單規模龐大", "玻璃基板封裝趨勢確認，TGV 設備需求長線確定"], catalysts: ["Intel CoPoS 驗證通過公告（Kill or Confirm 事件）", "2026Q3/Q4 轉為盈利"] },
    stockMetrics: {
      price: "~NT$255.5",
      pe: ">100x（前瞻，虧損中）",
      eps: "-NT$0.22（2026Q1），持續虧損中",
      marketCap: "~NT$84億（市值已大幅領先基本面）",
      divYield: "0%"
    },
    challenges: ["2026Q1 仍虧損，核心假設尚未兌現", "股價 255.5 元在未確定盈利前估值風險極高（前瞻 PE>100x）", "商業化時程延遲的可能性高於市場預期"],
    risks: ["Intel 取消或延遲 CoPoS 計畫 → 股價大幅修正風險", "持續虧損至 2026Q4 → 估值崩塌", "玻璃基板封裝若晚於 2028 年才大規模量產"],
    relatedIntel: ["2026-06-11-foplp-packaging-equipment-chain"]
  },

  "8064.TWO": {
    id: "8064.TWO", name: "東捷科技", ticker: "8064.TWO", flag: "🇹🇼",
    layer: 1, category: "先進封裝製程設備",
    badge: "FOPLP/TGV 設備龍頭", tagline: "TGV 雷射改質・FOPLP・Micro LED 巨量轉移設備整合",
    overview: "東捷科技是 G2C+ 聯盟核心成員，掌握 TGV（Through Glass Via）雷射改質技術（每秒 10,000 孔・定位精度 ±5μm），同時覆蓋 FOPLP 製程設備與 Micro LED 巨量轉移系統。2025年志聖以 50.88 元私募取得 ~12% 持股，東捷正式納入 G2C+ 聯盟。群創 FOPLP 產線轉型中，東捷為核心設備供應商。2025Q4 EPS 1.52 元，毛利率飆至 38.45%（舊面板業務毛利率僅 22%），代表產品組合已結構性轉向高附加值設備。2026 1~4 月累計營收年增 30.3%。法人預估 2026E EPS 4~5 元。",
    technology: { core: "TGV 雷射改質、FOPLP 面板級封裝設備、Micro LED 巨量轉移系統", products: ["TGV 雷射改質設備（每秒 10,000 孔・±5μm 精度）", "FOPLP 製程設備（面板級 Fan-Out 封裝）", "Micro LED 巨量轉移設備", "G2C+ 整線設備整合方案"], advantages: ["TGV 技術精度門檻極高（±5μm），全球能商業化的廠商極少", "G2C+ 整線捆綁（志聖壓膜+均豪自動化+東捷雷射）讓替換成本極高", "群創 FOPLP 唯一認證供應商，產線驗收訂單確認", "業務純度近 100% FOPLP/TGV/Micro LED，是整條鏈中財報彈性最大的設備股"] },
    marketShare: { global: "TGV 雷射改質設備全球少數商業化廠商之一", desc: "群創 FOPLP 轉型唯一認證，G2C+ 整線整合讓下游不需跨廠整合", competitors: ["LPKF Laser（德國，TGV 競爭者）", "DISCO（日本，玻璃切割）", "Nikon（日本，雷射解鍵合）"] },
    customers: { major: ["群創光電（FOPLP 產線轉型，驗收訂單確認）", "日月光（先進封裝設備）", "力成（先進封裝擴充）"], breakdown: "群創 FOPLP 為當前最大訂單來源，日月光/力成為次要客戶" },
    outlook: { positive: ["FOPLP 商業化加速（群創已啟動），東捷為核心設備供應商", "G2C+ 整線方案讓客戶不需跨廠整合，黏著度高", "毛利率 38%+ 結構性提升（vs 舊業務 22%）", "Micro LED 巨量轉移設備為第三成長引擎"], catalysts: ["2026Q2/Q3 EPS 確認（關鍵驗證：≥0.8元且毛利率 ≥35%）", "群創 FOPLP 量產正式公告", "新客戶（三星/中國大廠）取得"] },
    stockMetrics: {
      price: "~NT$152.5",
      pe: "~30~38x（前瞻）",
      eps: "NT$1.36（2025全年），Q4 NT$1.52",
      forwardEps: "NT$4~5（2026E，法人預估）",
      marketCap: "~NT$40億",
      grossMargin: "38.45%（2025Q4）",
      revenueGrowth: "+30.3%（2026 1~4月 YoY）",
      divYield: "0%"
    },
    challenges: ["群創 FOPLP 轉型若延遲，東捷是最直接受衝擊的設備商", "客戶集中度高（群創單一大客戶）"],
    risks: ["群創 FOPLP 量產時程延後兩季以上 → EPS 無法達 4 元門檻", "FOPLP 若被 CoWoS-R 等替代路線取代", "G2C+ 整線方案若客戶自建設備能力"],
    relatedIntel: ["2026-06-11-foplp-packaging-equipment-chain"]
  },

  "2467.TW": {
    id: "2467.TW", name: "志聖工業", ticker: "2467.TW", flag: "🇹🇼",
    layer: 1, category: "先進封裝整線設備整合",
    badge: "G2C+ 聯盟盟主", tagline: "台積電 CoWoS 壓膜設備龍頭・FOPLP 整線整合主導者",
    overview: "志聖工業是台積電 CoWoS 先進封裝製程中壓膜機設備的長期核心供應商（合作 12 年），也是 G2C+ 聯盟（志聖+均豪+均華+東捷）的主導者。2025年以 50.88 元私募取得東捷科技約 12% 持股，G2C+ 聯盟首度在 COMPUTEX 2026 聯合參展，展出 TGV、FOPLP、Micro LED、翹曲控制全製程設備整合方案。Q1 2026 營收創歷史新高，CoWoS 擴產確認直接受益。業務涵蓋傳統 LCD 熱製程 + CoWoS 壓膜 + FOPLP 設備，純度次於東捷但業務穩定性更高。",
    technology: { core: "壓膜機（Laminator）、烘烤設備（Oven）、熱製程設備、FOPLP 整線整合", products: ["CoWoS 壓膜機（台積電認證）", "先進封裝熱製程烘烤設備", "FOPLP 製程設備（透過 G2C+）", "翹曲控制系統"], advantages: ["台積電 12 年合作關係，壓膜技術難複製", "G2C+ 整線整合能力（壓膜+雷射+自動化）讓替換成本極高", "CoWoS 需求確定性最高（台積電主力先進封裝製程）"] },
    marketShare: { global: "台積電 CoWoS 壓膜設備核心供應商", desc: "台積電 CoWoS 擴產直接拉動訂單，業務可見度高", competitors: ["日本熱製程設備廠（Dainippon Screen 等）"] },
    customers: { major: ["台積電（CoWoS 壓膜設備，12年合作）", "日月光", "力成"], breakdown: "台積電為最大客戶，CoWoS 擴產驅動訂單成長" },
    outlook: { positive: ["台積電 CoWoS 持續擴產（NVIDIA AI 晶片需求推動）", "G2C+ 整線方案打開 FOPLP 整機設備商機", "COMPUTEX 2026 聯合參展提升品牌能見度"], catalysts: ["台積電 CoWoS N+1/N+2 世代產能擴充計畫", "群創 FOPLP 量產正式啟動（帶動 G2C+ 整線訂單）"] },
    stockMetrics: {
      revenueGrowth: "Q1 2026 營收創歷史新高",
      divYield: "0%"
    },
    challenges: ["業務分散（傳統 LCD 熱製程仍佔部分收入），FOPLP 純度次於東捷", "G2C+ 整線訂單節奏取決於群創 FOPLP 量產進度"],
    risks: ["台積電 CoWoS 若放緩擴產（2026 下半年風險）", "FOPLP 採用速度若慢於預期"],
    relatedIntel: ["2026-06-11-foplp-packaging-equipment-chain"]
  },

  "5443.TW": {
    id: "5443.TW", name: "均豪精密", ticker: "5443.TW", flag: "🇹🇼",
    layer: 1, category: "先進封裝製程設備",
    badge: "面板級封裝自動化", tagline: "FOPLP 面板級封裝自動化搬運與清洗設備",
    overview: "均豪精密（UNIZO）提供面板級（panel-level）封裝製程的自動化搬運、清洗設備，是 G2C+ 聯盟成員之一（均豪負責搬運自動化與面板清洗環節）。2025 EPS 成長 120.1% YoY，與台積電有供應關係。然而 2026Q1 EPS 季減 69%（至 NT$0.19），動能轉弱，全年 EPS 預估 5.7 元面臨下修風險；本益比 40x 估值並不便宜。G2C+ 聯盟的 FOPLP 整線整合商機是中期催化劑，但短期財報可見度轉弱。",
    technology: { core: "面板級搬運自動化設備、精密清洗設備、FOPLP 製程輔助設備", products: ["面板級 FOPLP 搬運自動化系統", "精密清洗設備（Cleaning System）", "先進封裝製程輔助設備"], advantages: ["台積電供應關係建立品質認證門檻", "G2C+ 聯盟成員，受惠整線整合商機", "面板級大尺寸自動化搬運技術壁壘"] },
    marketShare: { global: "台灣面板級封裝自動化設備利基廠", desc: "FOPLP 市場尚早期，先佈局有優勢但商業化時程不確定", competitors: ["日本自動化設備廠", "韓國設備廠"] },
    customers: { major: ["台積電（自動化設備）", "面板廠 FOPLP 轉型客戶"], breakdown: "台積電與 G2C+ 客戶為主要收入來源" },
    outlook: { positive: ["G2C+ 整線 FOPLP 商機", "台積電先進封裝擴產"], catalysts: ["Q2 2026 EPS 回升確認（否則全年預估有下修風險）", "G2C+ FOPLP 整線訂單正式啟動"] },
    stockMetrics: {
      eps: "NT$0.19（2026Q1，季減 69%）",
      forwardEps: "NT$5.7（2026E 預估，面臨下修風險）",
      pe: "~40x",
      epsGrowth2025: "+120.1% YoY",
      divYield: "0%"
    },
    challenges: ["2026Q1 季減 69%，動能轉弱", "本益比 40x 非便宜，下修風險高", "FOPLP 商業化速度決定中期業績"],
    risks: ["全年 EPS 預估 5.7 元若下修至 4 元以下 → 估值壓力", "G2C+ FOPLP 整線訂單若延遲"],
    relatedIntel: ["2026-06-11-foplp-packaging-equipment-chain"]
  },

  "6133.TW": {
    id: "6133.TW", name: "金橋", ticker: "6133.TW", flag: "🇹🇼",
    layer: 3, category: "高階連接線束組裝",
    badge: "AI 高速連接線材", tagline: "AI 伺服器高速連接線材與連接器組件",
    overview: "金橋（Golden Bridge Electech）生產 AI 伺服器用高速連接線材與連接器組件（Layer 3 外圍零組件）。隨 AI 伺服器建設升溫而有主題性受惠，但 2026年 1~4 月累計營收年增僅 5.74%，財報驗證弱，屬主題概念多於實質卡點。連接器/線材屬競爭激烈的外圍市場，任何線材廠均可搶單，缺乏製程壁壘與客戶黏著度。注意：金橋 (6133.TW) 與東捷科技 (8064.TWO) 是完全不同的兩家公司。",
    technology: { core: "高速連接線材設計製造、連接器組件", products: ["AI 伺服器高速連接線組", "高速傳輸線材", "連接器組件"], advantages: ["既有連接器客戶關係", "AI 伺服器線材市場成長中"] },
    marketShare: { global: "台灣中型連接器/線材廠", desc: "市場分散，競爭激烈，差異化有限", competitors: ["其他台灣連接線廠", "和碩電子", "正崴精密"] },
    customers: { major: ["AI 伺服器 ODM 廠"], breakdown: "AI 伺服器建設帶動高速線材需求" },
    outlook: { positive: ["AI 伺服器建設持續帶動線材需求"], catalysts: ["大型 AI 伺服器廠商線材採購放量"] },
    stockMetrics: {
      revenueGrowth: "+5.74%（2026 1~4月 YoY，驗證偏弱）",
      divYield: "0%"
    },
    challenges: ["財報驗證弱（4M 年增僅 5.74%）", "無製程壁壘，任何線材廠可競爭"],
    risks: ["主題概念退潮後估值壓縮", "競爭對手搶單導致毛利壓縮"],
    relatedIntel: ["2026-06-11-foplp-packaging-equipment-chain"]
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
  ✦ 日系大廠份額轉移速度（競爭態勢是否惡化）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ Balance Film（應力平衡薄膜）— TSMC CoWoS 最具護城河的產品線
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
「抗翹曲膠膜」的進化版定義：Balance Film 精準貼合基板表面，透過 CTE 差異的應力補償層，從源頭降低封裝冷卻後的殘留應力——這是設備（印能 WSAS）無法解決的物理問題。

辛耘（3583）2.52 億入股新群科技（Balance Film 設備商）= 最強第三方背書：
  • 辛耘不會為「可能被替換的材料」開發專用設備
  • 辛耘策略投資代表 Balance Film 製程在 TSMC CoWoS 供應鏈的必要性已確認

TSMC 材料認證護城河：
  • 認證周期 12-18 個月（幾乎不可替換）
  • 每片 CoWoS 基板均消耗一份 Balance Film（量產即複訪收入）
  • 競爭者須重走完整 TSMC 材料驗證流程，進入壁壘極高

與設備層（印能 WSAS）的互補關係：
  • WSAS 解決：製程中即時整平翹曲（設備鬆開後若殘留應力存在，依然 Re-Warpage）
  • Balance Film 解決：從源頭降低材料殘留應力（根本治療 vs. 對症治療）
  • 兩者互補，非競爭關係

驗證條件（2026-2027）：
  [ ] 2Q26 月營收出現明顯躍升（YoY 加速）
  [ ] 法說確認台積電開始採購 Balance Film
  [ ] 辛耘新群科技設備按時推進
  [ ] 競爭材料未通過 TSMC 認證

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 產品系列深度（2026/06/16 專家會議補充）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7 系列（750等）：搭配設備進行擴張貼合，廣泛適用翹曲問題場景
8 系列（87等）：材料自主發揮，微加熱退膠，無需 UV 照射（製程更簡化）
9 系列（97/900等）：貼在特定結構上的貼紙材料，注意最後 Bumping 後製程
EPM 材料（3-in-1）：整合傳統 VGB 製程所需 3 種材料；6P6M 舊需 6 張材料，EPM 單材料走 5 循環可達 3P3M+，大幅降低客戶 COO
暫時鍵合（Temporary Bonding）：HBM/DDR5 薄化（35→25μm），膠厚 ~1μm，雷射燒除解離
探針卡清潔膜：AI 高階晶片 CP/FT 維持探針清潔，兩萬次插拔磨耗測試表現優異

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ IPO 進度 & 產能擴線（2026/05-06 更新）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IPO 異動：今年 3 月舊財務長離職（身體因素/壓力過大）、5 月新財務長上任；
  送件時將特別向主管機關做出說明，不影響 IPO 時程。
產能：目前白班無休滿載，夜班尚未開啟；現有 5 條產線最高可擴至 3 倍。
2026/05/21 董事會決議：為滿足客戶大量使用需求進行擴線。
客戶分布：台灣、韓國、日本、美國四大區域（大陸市場較少）。
驗證進度：部分新材料已進展至設備商 Free-to 認證階段，可陸續為客戶保留產能。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ Balance Film 商業化正式確認（2026/06/17 技術說明會）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
最重要認知更新：Balance Film 不是「提升良率」材料，而是「讓製程得以完成」的必要材料。
公司原話：「沒有整平就無法植球。」
7 層 RDL 產品於玻璃基板移除後，翹曲可高達 80mm → 植球/回焊/清洗全部無法進行。
目前最高客戶規格：13P13M（13 層 PI + 13 層金屬）。

驗證進度（截至 2026/06）：
  17 家客戶驗證中：台灣 11、日本 4、美國 1、韓國 1
  最快 T 客戶 2026H2 進入量產（已在 Sample Run 階段）
  2027-2028 年多家客戶陸續量產

兩條成長曲線（關鍵認知修正）：
  第一階段（近期）：CoWoS 既有封裝材料放量
    → T 客戶主要導入 SEK-800（熱收縮抗翹曲）& SEK-900（Molding 後反翹曲）
    → 兩者皆可使用客戶既有貼膜設備，量產時程不受特殊設備開發進度影響
  第二階段（2027+）：CoPoS、Panel Level（500-600mm）帶動材料+特殊設備市場
    → 面積放大後翹曲更嚴重，對 Balance Film 依賴度反而提升

技術門檻數據：
  75 篇專利（發明 50 + 新型 25）、近十年投入
  材料要求：230°C 耐熱、高真空（10⁻⁶-10⁻⁸ torr）相容、電鍍液耐受、酸鹼耐受、低污染`,
    relatedIntel: ["2026-06-12-advanced-pkg-yinneng-santaish-comparison", "2026-06-16-santaish-expert-meeting", "2026-06-17-santaish-balance-film-tech-briefing"],
  },

  // ── 印能科技 ──────────────────────────────────────────────────
  "7734.TWO": {
    id: "7734.TWO", name: "印能科技", ticker: "7734.TWO", flag: "🇹🇼",
    layer: 1, category: "先進封裝製程設備",
    badge: "CoWoS 壓力真空烤箱・WSAS 翹曲控制", tagline: "先進封裝熱製程設備卡點：RTS + WSAS 雙引擎",
    overview: "印能科技（成立 2007 年）是台灣先進封裝設備廠，APT（Advanced Packaging Technology）定位，核心產品為 RTS（壓力真空烤箱，用於 CoW/CPO 製程）與 WSAS（Warpage Substrate Alignment System，翹曲控制設備）。RTS 針對 CoWoS 覆晶焊接製程中助焊劑固化、壓力補償等熱製程需求；WSAS 在翹曲超標的大面積封裝基板上提供真空吸附加壓整平。訂單能見度延伸至 2027 Q1，交期已拉長至 4 個月（供不應求訊號），管理層指引 2026 全年 YoY +50-100%。主要風險：壓力容器零件供應商（第三方加工廠）形成交期瓶頸，已出現客戶延遲 2 個月案例。",
    technology: {
      core: "RTS（壓力真空烤箱）、WSAS（翹曲基板校正系統）",
      products: [
        "RTS（Reflow Thermal System）：CoW/CPO 製程專用壓力真空烤箱。覆晶焊接時施加壓力並配合精準熱曲線，確保助焊劑完全揮發、焊球 zero void 形成。台積電 CoWoS 及 CPO 矽光子封裝的關鍵製程設備。",
        "WSAS（Warpage Substrate Alignment System）：大面積封裝基板翹曲控制設備。真空吸附加壓 + 熱處理整平，解決製程中即時翹曲問題。Panel-Level（面板級）封裝的必要設備，預計 2H26 開始貢獻，2027-2028 較大規模。",
        "VTS（Vacuum Thermal System）：早期核心產品，真空熱處理系統，現已被 RTS 超越為次要產品線。"
      ],
      advantages: [
        "RTS 製程 Know-how + Recipe IP：針對不同晶片/基板組合的壓力-溫度曲線（Profile）是核心 IP，開發週期長，客戶驗證後極難替換",
        "CoWoS 壓力容器設計：腔體密封、壓力均勻分佈的工程設計是製造門檻，非標準製程設備",
        "WSAS 翹曲控制：Panel-Level 封裝唯一可商業化的翹曲控制設備廠之一",
        "訂單能見度至 1Q27：短期財報確定性最強的封裝設備股"
      ]
    },
    marketShare: {
      global: "台灣先進封裝設備小型專業廠，RTS 在 CoWoS 製程具有先發認證優勢",
      desc: "壓力真空烤箱市場競爭者稀少，但設備護城河面臨大廠侵蝕風險（TEL/AMAT/Edwards 等全球設備巨頭若開發類似設備）",
      competitors: [
        { name: "TEL（Tokyo Electron）", share: "全球設備第三大", note: "若開發類似壓力真空烤箱可快速搶佔市場，最大潛在競爭者", threat: "high" },
        { name: "Applied Materials（AMAT）", share: "全球設備第一大", note: "目前專注前段，若進入後段封裝設備市場威脅最大", threat: "medium" },
        { name: "Edwards Vacuum", share: "真空系統專業廠", note: "真空子系統供應商，與印能存在零件依賴", threat: "low" },
      ]
    },
    customers: {
      major: ["台積電（CoWoS 製程 RTS 採購）", "日月光（先進封裝設備）", "Amkor（海外 OSAT）"],
      breakdown: "台積電 CoWoS 擴產為最大訂單來源；WSAS 目標客戶為 FOPLP 面板級封裝廠（群創、三星等），2H26 開始出貨"
    },
    outlook: {
      positive: [
        "訂單能見度至 1Q27，YoY +50-100% 管理層指引，近期財報確定性最強的封裝設備股",
        "WSAS 2H26 開始貢獻，2027-2028 面板級封裝量產後規模擴大",
        "CoWoS 持續擴產（NVIDIA Rubin/GB 系列需求拉動）",
        "CPO 矽光子封裝：RTS 是必要熱製程設備，矽光子進入量產後第二大成長引擎"
      ],
      catalysts: [
        "2Q/3Q26 法說確認 YoY +50-100% 達標",
        "壓力容器供應商瓶頸解決（尋找替代加工廠）",
        "WSAS 首批 Panel-Level 客戶正式出貨確認",
        "RTS 占總收入比例明顯提升（確認 CoWoS 設備主力化）"
      ]
    },
    challenges: [
      "壓力容器供應商瓶頸：第三方加工廠形成交期瓶頸，已出現客戶延遲 2 個月案例",
      "設備護城河深度有限：RTS/WSAS 製程 Know-how 壁壘存在，但大型設備廠（TEL/AMAT）若投入可快速追趕",
      "WSAS 大貢獻需等到 2027-2028：短期主要靠 RTS，成長天花板受 CoWoS 擴產節奏限制"
    ],
    risks: [
      "TCB（熱壓縮接合）若取代 flux-based 製程，RTS 需求結構性減少",
      "大型設備廠（TEL/AMAT）開發同類壓力真空烤箱切入市場",
      "Panel-Level 封裝（WSAS 客戶）量產時程若持續延後，2026-2027 業績影響大",
      "客戶擴產暫停（CoWoS CapEx 收縮）導致訂單消化後真空期"
    ],
    stockMetrics: {
      pe: "高成長高本益比，需用訂單能見度支撐",
      exchange: "TPEX",
      currency: "TWD",
      sector: "先進封裝設備",
      peers: ["志聖工業（2467.TW）", "東捷科技（8064.TWO）", "鈦昇科技（8027.TWO）"]
    },
    relatedIntel: ["2026-06-12-advanced-pkg-yinneng-santaish-comparison"],
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

  "6949.TWO": {
    id: "6949.TWO", name: "沛爾生醫-創", ticker: "6949.TWO", flag: "🇹🇼",
    layer: null, category: "細胞治療 CAR-T",
    badge: "台灣首個 CAR-T NDA 候選", tagline: "台灣本土 CD19 CAR-T 細胞治療先行者",
    overview: "沛爾生醫（PearceImmune）是台灣首個有望在本土取得 CAR-T 細胞治療藥證的公司。核心產品 PL001（CD19 CAR-T）Phase 2 期中分析於 2026年4月23日由獨立數據監測委員會（IDMC）確認達統計顯著意義，T-RMAT 輔導資格已取得，NDA 文件準備中（預計 2026年底提交）。竹北 GMP 廠於 6月15日開幕，製造能力就位。完全符合「里程碑選擇權型」分析架構——無商業收入、股價由臨床進度驅動。PL001 批准概率貝葉斯估算約 52-62%，加權期望市值 421億 vs 現價 459億。",
    technology: {
      core: "自體 CD19 CAR-T 細胞治療（PL001）、口服小分子藥（PP011 RA）、BCMA CAR-T（PL003）",
      products: [
        "PL001（CD19 CAR-T）：B細胞非霍奇金淋巴瘤（B-NHL）Phase 2，期中達統計顯著，T-RMAT NDA申請中",
        "PP011（口服 BTK/JAK 抑制劑）：類風濕性關節炎，台灣 Phase 1 進行中，2026年6月中國 NMPA IND 批准",
        "PL003（BCMA CAR-T）：多發性骨髓瘤，Phase 1 進行中，恩慈療法多例",
        "PL002（實體腫瘤 CAR-T）：臨床前階段",
        "特管辦法產品（CIK/DC-CIK/ADSC）：現有收入來源，年收入 ~3,140萬"
      ],
      advantages: [
        "台灣首個 CD19 CAR-T，進口替代邏輯清晰（Kymriah/Yescarta 超過 TWD 1,000萬/療程）",
        "T-RMAT 資格取得：可用 Phase 2 數據申請有條件藥證，不需等 Phase 3",
        "CD19 CAR-T 機制已有全球兩個上市產品（Kymriah、Yescarta），機制風險低",
        "竹北 GMP 廠：商業化製造能力就位，NDA 必要條件達成",
        "現金跑道約 4年（2026/01 現增 18.6億，年燒 4-5億）",
      ]
    },
    marketShare: {
      global: "台灣首個本土 CAR-T 廠，進口替代格局清晰",
      desc: "台灣 B細胞 NHL 年新病例 1,500-2,000 人，符合 CAR-T 資格約 300-500 人/年；現全依賴進口（超過 TWD 1,000萬/療程）",
      competitors: [
        { name: "Kymriah（Novartis）", share: "進口", note: "全球首個 CAR-T，台灣定價超過 TWD 1,000萬，PL001 本土定價可能 60-70% 折扣", threat: "medium" },
        { name: "Yescarta（Gilead/Kite）", share: "進口", note: "全球第二個 CD19 CAR-T，同為 B-NHL 適應症", threat: "medium" },
      ]
    },
    customers: {
      major: ["台灣醫學中心（B細胞 NHL 三線以上治療失敗患者）", "特管辦法細胞治療患者（現有收入）"],
      breakdown: "上市後：B-NHL 患者 150-350 人/年（台灣）；定價策略 NT$600-750萬/療程（低於進口 30-40%）"
    },
    outlook: {
      positive: [
        "Phase 2 IDMC 期中達統計顯著（2026/04）：批准概率從 20% 升至 52-62%",
        "T-RMAT 有條件藥證路徑：不需等 Phase 3，2027年有機會取得藥證",
        "竹北 GMP 廠就位：製造瓶頸解除，規模化生產路徑清楚",
        "PP011 中國 NMPA IND 獲批（2026/06）：第二管線期權打開",
      ],
      catalysts: [
        "2026 Q3：Phase 2 完整收案（26名可評估受試者）達成",
        "2026年底：PL001 NDA 提交食藥署（T-RMAT）",
        "2027 H1-H2：食藥署審查結果（最大二元事件：批准 vs 退件 = ±40%+）",
        "藥證後：NHI 給付協商進度（決定商業化規模的倍數效應）",
      ]
    },
    stockMetrics: {
      price: "~NT$700",
      marketCap: "~NT$459億",
      week52High: "NT$929",
      week52Low: "NT$127",
      eps: "-NT$1.18（Q1 2026），-NT$7.23（FY2025）",
      revenue: "NT$3,140萬（FY2025 年收入）",
      cashRunway: "~4年（18.6億現金，年燒 4-5億）",
      approvalProb: "~52-62%（貝葉斯加權）",
      weightedMarketCap: "NT$421億（加權期望）",
      divYield: "0%"
    },
    challenges: [
      "Phase 2 樣本數極小（19-23人），完整收案數據可能令人失望",
      "自體 CAR-T 製造複雜（每批次客製化），規模化困難",
      "創新板流動性極低（日均數百張，股東 2,236 人），主力進出造成大幅波動",
      "累積虧損已達股本一半以上，需持續融資",
    ],
    risks: [
      "Phase 2完整數據不支持期中結論 → 牛市概率降至 15%，目標市值 ~280元（-60%）",
      "T-RMAT NDA 退件 + 需補件重申請 → 時程延後 3-4 年",
      "食藥署退件 + 需補 Phase 3 → 商業化時程推至 2030年+",
      "NHI 不給付 → 商業化規模受限於自費市場（150-200 人/年）",
    ],
    notes: `【沛爾生醫（6949）tcmc 新廠落成 & CAR-T 製造深度備忘】2026/06

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ tcmc 新竹廠戰略意義
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
tcmc（台灣細胞製造）斥資 7 億元打造新竹生醫園區 GMP 廠，2026/06/15 落成啟用。
核心目的：病毒載體佔 CAR-T 製造成本 30-50%、良率常低於 30%（全球最大瓶頸）。
過去病毒載體依賴 Lonza、Catalent 等跨國 CDMO，交期動輒半年以上。
自建病毒載體產能 = 擺脫斷貨與壟斷 = 確保 CAR-T 不停產 = 掌控供應鏈命脈。
策略模式：「以藥帶產，垂直整合」——基本盤供應沛爾自家 CAR-T，餘裕產能對外開放 CDMO。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ CGT 製造本質：Scale-out vs Scale-up
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
傳統藥廠：Scale-up（千升/萬升批次），靠量大壓成本，架上壽命長
CGT 工廠：Scale-out（多組無菌單元並聯），一人一批（One patient, one batch），無法靠體積放大
製程差異：CGT 重活體細胞存活率/轉染效率，全程液氮 -196°C 極限冷鏈，時效以小時計
本質是高度客製化精密無菌實驗室，而非大導管大鐵槽

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 台灣病毒載體 CDMO 三家格局
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
啟弘生技（6939）：台灣最早取得國際認證（日本 PMDA），專注獨立病毒載體 CDMO
TBMC：具國家隊色彩，引進美國 Resilience 技術，目標大規模國際委託
tcmc（沛爾子公司）：垂直整合為主，以藥帶產，自用為基礎、餘裕對外 CDMO
→ 三家策略差異化，不同市場定位，不構成正面競爭

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ PL001 最新里程碑（2026/06 更新）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
期中分析：IDMC 確認療效符合預期，提前完成收案
同步進行：藥證申請準備 + 生產驗證程序 + 主管機關輔導
目標：《再生醫療製劑條例》「附款期許可」條款 → 2026 年底取得台灣首張本土 CAR-T 暫時性藥證
切入市場：取代諾華 Kymriah（>TWD 1,000 萬/療程），本土定價預計折扣 30-40%`,
    relatedIntel: ["2026-06-12-pearce-6949-cart-full-analysis", "2026-06-16-6949-tcmc-factory-kgi"]
  },

  // ── Layer 1+2 交叉 ──────────────────────────────────────────────
  "6141.TW": {
    id: "6141.TW", name: "柏承科技", ticker: "6141", flag: "🇹🇼",
    layer: 1, spanLayers: [1, 2], category: "探針卡基板 / MSAP PCB 基材",
    badge: "非共識重估標的",
    tagline: "探針卡板已量產獲利・AI MSAP光模組板認證中・等待重估引爆點",
    overview: "柏承科技（6141）是台灣中小型 PCB 廠，橫跨三條差異極大的業務線：(1) 台灣桃園廠生產 8-70 層高階探針卡基板（Load Board / Burn-in Board / Probe PCB），目前已量產獲利，供應旺矽、穎崴等探針卡廠；(2) 中國廠（昆山＋南通）生產傳統 HDI 消費板，佔營收大宗但毛利極低；(3) 南通廠正推進 MSAP（改良型半加成法）AI 光模塊 PCB，已進入三大美系光通訊供應鏈認證程序。市場當前以「傳統 PCB 邏輯」定價（股價 ~28 元），若 MSAP 認證 Q4 2026 通過並量產，高毛利比重快速拉升，有機會重估至 AI MSAP 估值體系（目標 60-90 元）。2026 Q1 仍虧損（EPS -0.58 元），H2 是一切關鍵的轉折點。",
    technology: {
      core: "高多層 PCB 製程（8-70 層）、老化測試板（Burn-in Board）、MSAP 改良型半加成法細線路製程",
      products: [
        "探針卡基板（Probe Card PCB）— 8-70 層高層數，台灣桃園廠，供旺矽/穎崴/國際探針卡廠",
        "老化測試板（Burn-in Board）— 高溫高壓環境長時間測試基板",
        "載板（Load Board）— 最終測試介面 PCB",
        "傳統 HDI PCB — 消費電子/工業/車用（IATF16949 認證），南通廠主力",
        "MSAP AI 光模塊 PCB — 細線路高速基材，南通廠規劃 100 萬平方呎 MSAP 基地（認證中）"
      ],
      advantages: [
        "台灣廠高層數測試板已量產，40-52 層訂單滿載能見度 1-2 個月",
        "南通廠 30 萬平方呎已建成，預留 100 萬平方呎擴產基地，為 MSAP 量產提供場地基礎",
        "已進入三大美系光通訊供應鏈認證（認證中，未通過量產）",
        "MSAP 認證若通過，ASP 與毛利率將大幅超越傳統 HDI 板（MSAP 板單價比 800G 時代提升 2.5 倍以上）"
      ]
    },
    marketShare: {
      global: "探針卡基板利基供應商（非主流，市場未充分追蹤）",
      desc: "探針卡 PCB 基板市場集中度低，柏承以台灣廠技術搭上測試板成長；MSAP 市場三雄（欣興 40-50%、臻鼎 30-35%、華通 10%）已佔主導，柏承為小廠後進者，勝在切入認證時間點（若成功）比華通更早進入特定美系客戶。",
      competitors: [
        { name: "欣興電子（3037）", share: "40-50%（MSAP）", note: "MSAP 龍頭，800G 已量產，外資充分定價", threat: "high" },
        { name: "臻鼎科技（ZDT）", share: "30-35%（MSAP）", note: "第二大，與欣興並列主導地位", threat: "high" },
        { name: "華通電腦（2313）", share: "~10%（MSAP）", note: "1.6T 剛量產，時序落後 6 個季度", threat: "medium" },
        { name: "旺矽自建 PCB 線", share: "0%（現在）→ 部分自製（2026末）", note: "核心威脅：旺矽計劃 2026 年底建自有 PCB 產線，可能減少外購", threat: "high" }
      ]
    },
    customers: {
      major: [
        { name: "旺矽科技（6223）", pct: "推估 ~30-40%（探針卡板）", note: "全球懸臂式探針卡市佔第一，外購 PCB 基板比例最高；⚠️ 旺矽 2026 末自建 PCB 產線為核心威脅" },
        { name: "穎崴科技（6515）", pct: "推估 ~15-20%（探針卡板）", note: "部分外購探針卡 PCB，但自製化趨勢持續" },
        { name: "中國手機品牌（OPPO/vivo 生態鏈等）", pct: "推估 ~30-35%（傳統 HDI）", note: "南通廠主力，低毛利商品化業務" },
        { name: "三大美系光通訊廠（未公開）", pct: "0%（認證中）", note: "Coherent/II-VI、Marvell/Inphi、Lumentum 等方向；認證通過是本邏輯最大催化劑" }
      ],
      breakdown: "探針卡板（台灣廠）目前是獲利主力，旺矽依賴度極高但存在自製化風險。傳統 HDI（中國廠）規模大但毛利接近零。MSAP 客戶若認證通過，將徹底改變整體獲利結構。精測電子（6510）完全垂直自製 PCB，不是柏承客戶。"
    },
    outlook: {
      positive: [
        "MSAP 認證若 Q4 2026 通過：三大美系光通訊客戶量產訂單直接受惠 AI 高速傳輸升級浪潮",
        "南通廠 100 萬平方呎擴產基地預留：一旦認證通過，產能快速放大的物理條件具備",
        "台灣廠探針卡板業務持續受益 AI 晶片測試量成長：40-52 層高層數訂單滿載",
        "MSAP 板 ASP 是 800G 時代的 2.5 倍以上：量比小但獲利貢獻大",
        "地理分散優勢：若旺矽轉向國際探針卡廠（Technoprobe、JEM、Micronics Japan），柏承有機會承接"
      ],
      catalysts: [
        "MSAP 認證進度（最高優先核驗指標）：Q3 法說會/重大公告是否出現「MSAP 板量產出貨」訊號",
        "旺矽自建 PCB 產線時程：2026 年底開線 → 柏承探針卡板業務受損程度確認",
        "月營收能見度：H2 需達 2.5 億+/月才能支撐 EPS 4-5 元目標（4 月實績 1.96 億）",
        "南通廠 30 萬平方呎產能利用率：損益兩平點約 60%，需持續追蹤爬坡速度"
      ]
    },
    stockMetrics: {
      pe: "虧損（Q1 2026 EPS -0.58 元）",
      eps: "Q1 2026 EPS -0.58 元 / 2026F EPS 目標 4-5 元（需 H2 MSAP 放量，執行風險極高）",
      epg: "虧轉盈預期（高度不確定）",
      marketCap: "約 NT$64億（股價 28.25 元）",
      price: "NT$28.25（2026/06）",
      targetPrice: "MSAP 兌現情境 60-90 元 / 純探針卡板邏輯 35-45 元 / 傳統 PCB 邏輯 20-25 元",
      week52High: "—",
      week52Low: "—",
      divYield: "—",
      sharesOut: "約 NT$22.6億（股本）"
    },
    relatedIntel: ["2026-06-25-6141-scan"],
    notes: `【柏承科技（6141）深度研究備忘】2026-06-25

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 產業鏈真實位置（三條線邏輯）
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
傳統PCB（大，低毛利，壓力大）
→ 高階探針卡板（中，有技術門檻，但客戶在垂直整合）
→ MSAP AI光模塊板（小/規劃，長路漫漫，但若兌現估值跳升）

■ 卡點排序
[稀缺] MEMS探針製造（US/JP壟斷）
↓
[關鍵] 高階探針卡PCB基板 ← 柏承台灣廠
↓
[整合] 完整探針卡組裝（旺矽/精測/穎崴/FormFactor）
↓
[下游] 晶圓測試

[稀缺] MSAP薄銅箔（三井/JX日礦）
↓
[技術] MSAP製程設備（Atotech/雷射鑽孔）
↓
[製造] MSAP PCB ← 柏承南通廠擬進入，欣興/華通/臻鼎已掌控
↓
[封裝] CoWoS/ABF載板整合

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 2024 年官方揭露數字
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
印刷電路板 82% / 樣品板（測試板）15% / 其他 3%
地理：大陸 51% / 台灣 34% / 東南亞 8% / 美洲 2% / 其他 5%

三大線推估：
• 傳統PCB（消費/工業/車用）：~60-65%，南通+昆山，毛利 5-10%
• 高階探針卡基板：~20-25%，台灣桃園廠，毛利 15-25%
• MSAP類PCB：<5%，台灣廠試產，高毛利（若量產）

⚠️ 公司沒有分線揭露，以上為推估，需法說會核驗

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 最大賭注：MSAP認證 vs 旺矽自製
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
上行：三大美系光通訊客戶MSAP認證 Q4 2026 通過 → 重估 60-90元
威脅：旺矽 2026年底建自有PCB產線 → 核心客戶關係受衝擊
中性：MSAP延至2027 → 純探針卡邏輯，目標35-45元
下行：MSAP失敗 → 傳統PCB邏輯，目標20-25元（現價有下行風險）

■ 估值情境主觀概率
30-40%：MSAP認證Q4通過 → 目標60-90元（非共識高槓桿）
40-50%：MSAP延至2027 → 目標35-45元
20%：MSAP失敗/南通廠受地緣衝擊 → 目標20-25元

→ 結論：不是「現在買」的標的，是「核驗認證進度後決定是否建倉」的標的。
  建議Q3 2026財報/法說會後，根據MSAP放量具體訊號決定是否參與。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 核驗清單
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 柏承Q2 2026月營收（每月10日）：H2需≥2.5億/月
• 柏承Q2財報（8月）：是否轉虧為盈
• MOPS重大公告：是否出現「MSAP板量產出貨」訊號
• 旺矽Q2/Q3法說會：PCB自製產線時程是否加速或延後
• 交叉核驗三大美系光通訊廠採購商聲明`,
    challenges: [
      "Q1 2026 仍虧損（EPS -0.58 元），EPS 4-5 元目標幾乎全押 H2 MSAP 放量，容錯率接近零",
      "MSAP 三雄（欣興 40-50%、臻鼎 30-35%、華通 10%）規模遠大於柏承，客戶黏著度已形成",
      "旺矽 2026 年底自建 PCB 產線：探針卡板核心客戶可能減少外購，直接衝擊台灣廠收入",
      "南通廠地緣政治風險：中國製造業在貿易政策不確定性下的潛在衝擊",
      "資訊透明度不足，公司未分業務線揭露獲利，難以精確驗證轉型進度"
    ],
    risks: [
      "MSAP 認證延遲或失敗（認證約需 2,000 小時）：EPS 4-5 元目標立即崩潰，股價回測 20-25 元",
      "旺矽自建 PCB 產線如期 2026 年底完成：探針卡板業務喪失最大單一客戶依靠",
      "AI capex 景氣回落：光模塊 MSAP 需求縮水，認證通過後也沒有量",
      "南通廠 30 萬平方呎產能利用率若無法達損益兩平（60%），持續燒錢",
      "流動性風險：股本規模小，大戶進出造成大幅波動，散戶難以精準進出場"
    ]
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
    { name: "先進封裝基板材料", entries: [
      { id: "2802.T",  note: "ABF 膜全球近壟斷・載板三雄最上游" },
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
      { id: "5274.TWO", note: "BMC 全球 70% 壟斷・NVL72 每台需 72 顆・Q1 FY2026 EPS +59%" },
      { id: "4919.TW", note: "BMC 全球二哥 + BBU 電池管理 BMS・Q1 2026 扭虧為盈" },
      { id: "6202.TWO", note: "AI 散熱風扇控制 MCU（Tier 2 間接受惠）" },
      { id: "2454.TWO", note: "消費/工控 MCU，MCU 景氣回復受益" },
    ]},
    { name: "晶片級散熱元件", entries: [
      { id: "3653.TW", note: "NVIDIA GPU 均熱板首選・毛利 41.6%" },
      { id: "3324.TW", note: "Cold Plate・液冷純度最高（Q4 2025 水冷 51%）" },
      { id: "3017.TW", note: "Cold Plate + CDU 一站式・Q1 2026 EPS +110% YoY" },
      { id: "6805.TW", note: "液冷快接頭" },
    ]},
    { name: "先進封裝製程設備", entries: [
      { id: "7734.TWO", note: "CoWoS RTS 壓力真空烤箱・WSAS 翹曲控制・訂單能見度至1Q27" },
      { id: "8027.TWO",  note: "TGV 高速鑽孔・CoPoS・Intel 驗證中" },
      { id: "8064.TWO",  note: "TGV 雷射改質・FOPLP・毛利率 38%・群創唯一認證" },
      { id: "3580.TW",  note: "TGV 通孔活化・RDL 晶種層濺鍍" },
      { id: "6664.TW",  note: "ABF 壓合・翹曲控制烤箱" },
      { id: "3583.TW",  note: "TGV 濕蝕刻・垂直填孔前處理" },
    ]},
    { name: "FOPLP 整線封裝設備整合", entries: [
      { id: "2467.TW", note: "G2C+ 聯盟盟主・台積電 CoWoS 壓膜・Q1 2026 營收創歷史新高" },
      { id: "5443.TW", note: "面板級 FOPLP 自動化搬運清洗設備" },
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
    { name: "探針卡基板 / MSAP PCB 基材", entries: [
      { id: "6141.TW", note: "探針卡板已量產（L1）・AI MSAP光模組板認證中（L2）・非共識重估標的" },
    ]},
    { name: "先進封裝製程材料", entries: [
      { id: "3595.TW", note: "Balance Film・TSMC CoWoS 認證・辛耘策略投資背書・消耗品複訪收入" },
    ]},
    { name: "先進封裝設備與檢測", entries: [
      { id: "KLAC", note: "CoWoS 良率守門人・AP 收入衝向 $1B" },
    ]},
  ]},

  { layer: 2, categories: [
    { name: "光通訊模組/光引擎", entries: [
      { id: "XUCHUANG", note: "Google 2.4T 輕相干獨家・明年利潤 900-1,000 億人民幣" },
      { id: "XINYI",    note: "Amazon NPO 20-30% 份額" },
      { id: "TFC",      note: "Nvidia Mellanox 光引擎・55-60 億人民幣利潤" },
      { id: "POET" },
    ]},
    { name: "液冷散熱系統整合", entries: [
      { id: "3017.TW", note: "CDU + Cold Plate 一站式・2026E EPS 93.75元" },
      { id: "3324.TW", note: "CDU 液冷/浸沒式整機機櫃・液冷純度業界第一" },
      { id: "8996.TW", note: "CDU + 熱交換器" },
      { id: "2421.TW", note: "液冷水泵/風扇輔助元件" },
    ]},
    { name: "液冷機房冷卻設備整合", entries: [
      { id: "MOD",  note: "$4B 合約・CDU + Airedale 精密空調" },
      { id: "VRT",  note: "端對端熱鏈・$15B backlog・2.9x BTB" },
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
      { id: "6133.TW", note: "AI 伺服器高速連接線材（Layer 3 外圍，主題概念）" },
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
      { id: "NEE",  note: "全球綠能營運龍頭" },
      { id: "BE",   note: "資料中心燃料電池" },
      { id: "FSLR", note: "薄膜太陽能龍頭・AI 資料中心 PPA 首選・IRA AMPC 補貼最大受益" },
    ]},
    { name: "物理 AI 與移動算力端", entries: [
      { id: "TSLA", note: "FSD 軟體、Optimus 機器人、Megapack 儲能/Autobidder 軟體" },
    ]},
    { name: "終極資本安全堡壘", entries: [
      { id: "BRK.B", note: "手握巨額現金，全資擁有地下能源君王 BHE，轉投資比亞迪 (BYDDF)" },
    ]},
  ]},
];

// ── 生技產業鏈定義 ──────────────────────────────────────────────
const BIOTECH_CHAIN_DEFINITION = [
  { label: "細胞治療 CAR-T／精準醫療", categories: [
    { name: "細胞治療 CAR-T", entries: [
      { id: "6949.TWO", note: "台灣首個 CAR-T NDA 候選・Phase 2 期中達標・T-RMAT 申請中" },
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

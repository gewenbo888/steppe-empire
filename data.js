// ===== Steppe Empires dataset =====
// Bilingual. Dates in years (negative = BCE).

window.EMPIRES = [
  {
    id: "scythian",
    en: "Scythians",
    zh: "斯基泰",
    start: -700, end: 300,
    color: "#9c6b2f",
    region: "Pontic–Caspian Steppe",
    region_zh: "黑海–里海草原",
    capital: "—",
    peak: -400,
    summary_en: "First great mounted nomadic confederation. Mastered composite bow, kurgan burial, gold metalwork. Pressured Achaemenid Persia and the Greek colonies of the Black Sea.",
    summary_zh: "最早的大规模骑射游牧联盟。精通复合弓、库尔干墓葬与黄金工艺。曾对阿契美尼德波斯及黑海希腊城邦构成军事压力。",
    keys_en: ["Composite bow", "Kurgan burials", "Pontic horse trade", "Herodotus' nomads"],
    keys_zh: ["复合弓", "库尔干墓葬", "黑海马匹贸易", "希罗多德笔下的游牧人"]
  },
  {
    id: "xiongnu",
    en: "Xiongnu",
    zh: "匈奴",
    start: -209, end: 89,
    color: "#8b1c2b",
    region: "Mongolian Plateau",
    region_zh: "蒙古高原",
    capital: "Luut (Dragon City)",
    peak: -176,
    summary_en: "First steppe super-confederation. Forced Han China into the heqin tribute marriage system, set the template for every successor empire on the Mongolian Plateau.",
    summary_zh: "首个草原超级联盟。迫使汉朝采用'和亲'制度，为后世蒙古高原所有游牧帝国奠定政治范式。",
    keys_en: ["Modu Chanyu", "Heqin treaty", "Decimal military", "Tribute extraction"],
    keys_zh: ["冒顿单于", "和亲条约", "十进制军制", "贡赋勒索"]
  },
  {
    id: "huns",
    en: "Huns",
    zh: "匈人",
    start: 370, end: 469,
    color: "#7a2b1c",
    region: "Pannonian Basin",
    region_zh: "潘诺尼亚盆地",
    capital: "Attila's camp",
    peak: 450,
    summary_en: "Western migration wave that catalyzed the fall of the Western Roman Empire. Possibly Xiongnu descendants. Triggered the Migration Period across Europe.",
    summary_zh: "向西迁徙的浪潮，加速了西罗马帝国的崩溃。或为匈奴后裔，引发了欧洲的民族大迁徙。",
    keys_en: ["Attila", "Migration Period", "Roman tribute", "Catalaunian Plains"],
    keys_zh: ["阿提拉", "民族大迁徙", "罗马岁币", "沙隆战役"]
  },
  {
    id: "gokturk",
    en: "Göktürk Khaganate",
    zh: "突厥汗国",
    start: 552, end: 744,
    color: "#3a5a8a",
    region: "Central Eurasia",
    region_zh: "中央欧亚",
    capital: "Ötüken",
    peak: 580,
    summary_en: "First polity to call itself 'Türk'. Created the Old Turkic script (Orkhon inscriptions). Operated as a dual east–west khaganate spanning Manchuria to the Black Sea.",
    summary_zh: "首个自称'突厥'的政权。创制古突厥文字（鄂尔浑碑铭）。东西两大可汗并立，疆域横跨满洲到黑海。",
    keys_en: ["Bumin Qaghan", "Orkhon inscriptions", "Sogdian alliance", "Silk monopoly"],
    keys_zh: ["土门可汗", "鄂尔浑碑铭", "粟特联盟", "丝绸垄断"]
  },
  {
    id: "uyghur",
    en: "Uyghur Khaganate",
    zh: "回鹘汗国",
    start: 744, end: 840,
    color: "#a86c2a",
    region: "Mongolian Plateau",
    region_zh: "蒙古高原",
    capital: "Karabalgasun",
    peak: 800,
    summary_en: "Adopted Manichaeism as state religion — a unique steppe religious experiment. Saved Tang China from the An Lushan rebellion. Collapsed under Yenisei Kyrgyz attack and steppe drought.",
    summary_zh: "将摩尼教定为国教，是草原宗教史上的独特实验。曾助唐朝平定安史之乱。后因黠戛斯进攻与草原干旱崩溃。",
    keys_en: ["Manichaeism", "Tang alliance", "Karabalgasun", "Sogdian scribes"],
    keys_zh: ["摩尼教", "唐朝同盟", "回鹘牙帐城", "粟特书吏"]
  },
  {
    id: "khitan",
    en: "Khitan / Liao",
    zh: "契丹 / 辽",
    start: 916, end: 1125,
    color: "#4a6b3a",
    region: "Manchuria–North China",
    region_zh: "满洲–华北",
    capital: "Shangjing",
    peak: 1005,
    summary_en: "Pioneered the dual-administration model: nomadic for steppe subjects, Chinese-style for sedentary subjects. The template later borrowed by Jin, Yuan and Qing.",
    summary_zh: "首创'南北面官'双重行政制度：北面治游牧、南面治农耕。此模式被金、元、清三朝沿用。",
    keys_en: ["Dual administration", "Khitan script", "Yelü Abaoji", "Sixteen Prefectures"],
    keys_zh: ["南北面官", "契丹文", "耶律阿保机", "燕云十六州"]
  },
  {
    id: "jurchen",
    en: "Jurchen / Jin",
    zh: "女真 / 金",
    start: 1115, end: 1234,
    color: "#3d5d4a",
    region: "Manchuria–North China",
    region_zh: "满洲–华北",
    capital: "Zhongdu (Beijing)",
    peak: 1150,
    summary_en: "Forest–steppe hybrid. Crushed Liao and Northern Song within two decades. Established a meng'an–mouke military-household system. Eventually destroyed by the Mongols.",
    summary_zh: "森林—草原混合社会。二十年内灭辽与北宋。建立猛安谋克军户制。最终为蒙古所灭。",
    keys_en: ["Wanyan Aguda", "Meng'an-mouke", "Jingkang Incident", "Forest hybrid"],
    keys_zh: ["完颜阿骨打", "猛安谋克", "靖康之变", "森林混合"]
  },
  {
    id: "mongol",
    en: "Mongol Empire",
    zh: "蒙古帝国",
    start: 1206, end: 1368,
    color: "#1a1a1a",
    region: "Eurasia",
    region_zh: "欧亚大陆",
    capital: "Karakorum / Khanbaliq",
    peak: 1260,
    summary_en: "Largest contiguous land empire in history. United the steppe under Chinggis Khan, then absorbed China, Persia, the Russian principalities and Central Asia. Pax Mongolica reopened the Silk Road as a continental free-trade zone.",
    summary_zh: "史上版图最大的陆地帝国。成吉思汗统一草原后，吞并中国、波斯、罗斯诸公国与中亚。蒙古和平重启丝绸之路，使其成为洲际自由贸易区。",
    keys_en: ["Chinggis Khan", "Yam postal", "Pax Mongolica", "Tumen units"],
    keys_zh: ["成吉思汗", "驿站系统", "蒙古和平", "万户军制"]
  },
  {
    id: "timurid",
    en: "Timurid Empire",
    zh: "帖木儿帝国",
    start: 1370, end: 1507,
    color: "#6a3a72",
    region: "Transoxiana–Persia",
    region_zh: "河中–波斯",
    capital: "Samarkand",
    peak: 1400,
    summary_en: "Last great steppe-derived conqueror dynasty in West Asia. Timur fused Mongol cavalry with Persian-Islamic statecraft. Samarkand became a center of art, astronomy, and tile architecture.",
    summary_zh: "西亚最后一个出身草原的伟大征服王朝。帖木儿融合蒙古骑兵与波斯—伊斯兰治国术。撒马尔罕成为艺术、天文与釉砖建筑的中心。",
    keys_en: ["Timur (Tamerlane)", "Samarkand", "Ulugh Beg", "Persian fusion"],
    keys_zh: ["帖木儿", "撒马尔罕", "兀鲁伯", "波斯融合"]
  },
  {
    id: "crimean",
    en: "Crimean Khanate",
    zh: "克里米亚汗国",
    start: 1441, end: 1783,
    color: "#5d4a8a",
    region: "Pontic Steppe",
    region_zh: "黑海北岸草原",
    capital: "Bakhchysarai",
    peak: 1570,
    summary_en: "Last Genghisid state in Europe. Operated as a slave-raid economy on Russia, Poland and Ukraine for three centuries. Annexed by Catherine the Great in 1783.",
    summary_zh: "欧洲最后的成吉思汗系国家。以对俄、波、乌的奴隶劫掠为经济基础，延续三百年。1783年被叶卡捷琳娜大帝兼并。",
    keys_en: ["Hacı I Giray", "Slave raids", "Ottoman vassal", "Russian annexation"],
    keys_zh: ["哈吉一世·格莱", "奴隶劫掠", "奥斯曼附庸", "俄国吞并"]
  },
  {
    id: "junghar",
    en: "Zunghar Khanate",
    zh: "准噶尔汗国",
    start: 1635, end: 1758,
    color: "#8a4a3a",
    region: "Inner Asia",
    region_zh: "内亚",
    capital: "Ghulja",
    peak: 1700,
    summary_en: "Last great Mongol khanate. A Tibetan-Buddhist Oirat confederation that contested Qing China and Russia for Inner Asia. Destroyed by Qianlong in a campaign of near-total annihilation.",
    summary_zh: "最后一个伟大的蒙古汗国。信奉藏传佛教的卫拉特联盟，与清朝、俄国争夺内亚。乾隆以近乎灭族之役将其消灭。",
    keys_en: ["Galdan", "Tibetan Buddhism", "Qing rivalry", "Genocide of 1755-58"],
    keys_zh: ["噶尔丹", "藏传佛教", "与清竞争", "1755—58年屠灭"]
  },
  {
    id: "qing",
    en: "Manchu / Qing",
    zh: "满洲 / 清",
    start: 1636, end: 1912,
    color: "#2a4a6a",
    region: "Manchuria–China–Inner Asia",
    region_zh: "满洲–中国–内亚",
    capital: "Beijing",
    peak: 1760,
    summary_en: "The synthesis of all prior steppe-state experiments. Banner system, dual administration, Tibetan-Buddhist legitimation, conquest of the Mongolian Plateau, Tibet, Xinjiang. Created the modern footprint of China.",
    summary_zh: "此前所有草原国家实验的集大成者。八旗制度、双重行政、藏传佛教合法化、征服蒙古、西藏、新疆。塑造了现代中国的版图。",
    keys_en: ["Banner system", "Hong Taiji", "Inner Asian conquest", "Multi-ethnic empire"],
    keys_zh: ["八旗制度", "皇太极", "内亚征服", "多族帝国"]
  }
];

// ===== Migration corridors (rough lat/lng → SVG mapped 0–1000 × 0–500) =====
window.CORRIDORS = [
  { id: "mongol-west", en: "Mongol westward (1219-1241)", zh: "蒙古西征 1219—1241", color: "#1a1a1a", points: [[760,205],[680,210],[600,215],[520,220],[440,210],[360,205],[290,200]] },
  { id: "hun-west", en: "Hunnic migration (350-450)", zh: "匈人西迁 350—450", color: "#7a2b1c", points: [[700,220],[600,225],[500,225],[420,225],[340,225]] },
  { id: "turk-west", en: "Turkic westward (550-750)", zh: "突厥西迁 550—750", color: "#3a5a8a", points: [[720,200],[640,205],[560,210],[480,220],[400,235]] },
  { id: "silk-north", en: "Silk Road northern", zh: "丝路北道", color: "#a06b1f", points: [[820,235],[740,235],[660,235],[580,235],[500,240],[420,250],[340,255]] },
  { id: "silk-south", en: "Silk Road southern", zh: "丝路南道", color: "#a86c2a", points: [[820,265],[740,275],[660,280],[580,275],[500,275],[420,280],[340,285]] }
];

// ===== Religion transmissions =====
window.RELIGIONS = [
  {
    id: "buddhism",
    en: "Buddhism (Mahayana)",
    zh: "大乘佛教",
    period: "100 BCE — 1000 CE",
    flow_en: "India → Gandhara → Sogdiana → Tarim Basin → Tang China",
    flow_zh: "印度 → 犍陀罗 → 粟特 → 塔里木盆地 → 唐朝中国",
    note_en: "Carried by Sogdian and Tocharian merchant-monks along the Silk Road. Adopted by the Uyghurs after 840 and remains state-aligned in modern Mongolia.",
    note_zh: "由粟特与吐火罗商僧沿丝路传播。回鹘于840年后皈依，至今仍是蒙古的国教。"
  },
  {
    id: "manichaeism",
    en: "Manichaeism",
    zh: "摩尼教",
    period: "240 — 1370",
    flow_en: "Sasanian Iran → Sogdiana → Uyghur Khaganate → Fujian (1000+)",
    flow_zh: "萨珊波斯 → 粟特 → 回鹘汗国 → 福建（11世纪后）",
    note_en: "The only world religion ever adopted as a steppe state religion. After the Uyghur collapse, surviving communities went underground in Fujian, China, where remnants persisted into the Ming.",
    note_zh: "历史上唯一被草原帝国奉为国教的世界宗教。回鹘崩溃后，余众潜入福建，延续至明代。"
  },
  {
    id: "nestorian",
    en: "Church of the East (Nestorian)",
    zh: "景教（东方教会）",
    period: "500 — 1370",
    flow_en: "Sasanian Persia → Sogdiana → Mongol court → Tang China (Daqin)",
    flow_zh: "萨珊波斯 → 粟特 → 蒙古宫廷 → 唐朝（大秦景教）",
    note_en: "Carried by Syriac-speaking missionaries. Several Mongol queens (Sorghaghtani Beki, Doquz Khatun) were Nestorian Christians; Hülegü's western campaign was partly framed as a Christian liberation.",
    note_zh: "由叙利亚语传教士传播。多位蒙古皇后（唆鲁禾帖尼、脱古思可敦）为景教徒；旭烈兀西征带有部分基督教解放色彩。"
  },
  {
    id: "islam-steppe",
    en: "Islam in the Steppe",
    zh: "草原伊斯兰化",
    period: "750 — 1500",
    flow_en: "Abbasid Caliphate → Volga Bulgars (922) → Golden Horde → Crimea, Kazan, Central Asia",
    flow_zh: "阿拔斯王朝 → 伏尔加保加尔（922） → 金帐汗国 → 克里米亚、喀山、中亚",
    note_en: "The slow Islamization of the western and central steppe over 700 years. The conversion of the Golden Horde under Öz Beg (r. 1313) reshaped Russian and Central Asian religious geography.",
    note_zh: "西部与中部草原长达七百年的伊斯兰化进程。1313年月即别汗皈依伊斯兰，重塑了俄罗斯与中亚的宗教格局。"
  },
  {
    id: "tibetan-buddhism",
    en: "Tibetan Buddhism",
    zh: "藏传佛教",
    period: "1240 — present",
    flow_en: "Tibet → Yuan court → Oirat / Khalkha Mongols → Manchu Qing",
    flow_zh: "西藏 → 元朝宫廷 → 卫拉特/喀尔喀蒙古 → 满清",
    note_en: "The Sakya–Yuan patron-priest model became the Inner Asian template. Altan Khan's revival (1578), then Qing patronage of the Gelug school, made Tibetan Buddhism the religious infrastructure of Inner Asia.",
    note_zh: "萨迦—元朝的'施主—福田'关系成为内亚范式。1578年俺答汗振兴，清廷赞助格鲁派，使藏传佛教成为内亚的宗教基础设施。"
  }
];

// ===== Frontier dynamics (matrix rows) =====
window.FRONTIERS = [
  {
    sedentary_en: "Han / Tang / Song China",
    sedentary_zh: "汉 / 唐 / 宋",
    pressure_en: "Northern Wei, Xiongnu, Türk, Khitan, Jurchen, Mongol",
    pressure_zh: "北魏、匈奴、突厥、契丹、女真、蒙古",
    mode_en: "Tribute (heqin), wall-building, marriage diplomacy, dual administration",
    mode_zh: "和亲、修长城、婚姻外交、双重行政"
  },
  {
    sedentary_en: "Sasanian & Caliphate Persia",
    sedentary_zh: "萨珊波斯与阿拔斯",
    pressure_en: "Hephthalite Huns, Türk, Ghaznavid, Seljuq, Mongol",
    pressure_zh: "嚈哒匈人、突厥、伽色尼、塞尔柱、蒙古",
    mode_en: "Frontier marches, Turkic ghulam slave-soldiers, eventual nomad takeover",
    mode_zh: "边境军区、突厥古拉姆奴隶军、最终被游牧政权取代"
  },
  {
    sedentary_en: "Byzantium",
    sedentary_zh: "拜占庭",
    pressure_en: "Huns, Avars, Bulgars, Pechenegs, Cumans, Seljuq, Ottoman",
    pressure_zh: "匈人、阿瓦尔、保加尔、佩切涅格、库曼、塞尔柱、奥斯曼",
    mode_en: "Tribute gold, mercenary contracts, federate alliances, eventual collapse to Turkmen",
    mode_zh: "缴纳金贡、雇佣兵契约、同盟邦联，最终亡于突厥蛮"
  },
  {
    sedentary_en: "Kievan / Muscovite Russia",
    sedentary_zh: "基辅 / 莫斯科罗斯",
    pressure_en: "Pechenegs, Cumans, Mongols, Crimean Khanate",
    pressure_zh: "佩切涅格、库曼、蒙古、克里米亚汗国",
    mode_en: "Yarlyk submission, tax-collection franchise, slow reversal under Ivan III–IV",
    mode_zh: "金帐'札里黑'册封、代征赋税，自伊凡三世起逐步逆转"
  },
  {
    sedentary_en: "Mughal & Safavid",
    sedentary_zh: "莫卧儿与萨非",
    pressure_en: "Timurids, Uzbeks, Afghan tribes",
    pressure_zh: "帖木儿系、乌兹别克、阿富汗部落",
    mode_en: "Themselves descended from steppe conquerors, then defending against new ones",
    mode_zh: "本身源自草原征服者，后又须防御新一波草原势力"
  }
];

// ===== Steppe Empire — interactions =====
(() => {
  const html = document.documentElement;

  // ---- Bilingual toggle ----
  const setLang = (lang) => {
    html.setAttribute("data-lang", lang);
    document.querySelectorAll(".lang-toggle button").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    try { localStorage.setItem("se-lang", lang); } catch(_) {}
  };
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });
  try {
    const saved = localStorage.getItem("se-lang");
    if (saved) setLang(saved);
  } catch(_) {}

  // ---- Theme toggle ----
  const setTheme = (t) => {
    html.setAttribute("data-theme", t);
    document.querySelectorAll(".theme-toggle button").forEach(b => {
      b.classList.toggle("active", b.dataset.themeSet === t);
    });
    try { localStorage.setItem("se-theme", t); } catch(_) {}
  };
  document.querySelectorAll(".theme-toggle button").forEach(b => {
    b.addEventListener("click", () => setTheme(b.dataset.themeSet));
  });
  try {
    const saved = localStorage.getItem("se-theme");
    if (saved) setTheme(saved);
  } catch(_) {}

  // ===== Map engine =====
  const W = 1000, H = 500;
  const map = document.getElementById("steppe-map");
  if (map) {
    // Static base: continent silhouette (rough Eurasian outline)
    const eurasia = `
      M 60,200 Q 90,160 140,150 Q 180,100 240,90 Q 320,80 400,100 Q 480,80 560,90
      Q 640,100 720,80 Q 800,90 870,120 Q 920,150 940,200 Q 960,260 940,320
      Q 900,360 850,360 Q 800,380 740,370 Q 660,400 580,390 Q 500,420 420,400
      Q 340,420 260,400 Q 180,420 120,380 Q 70,340 60,280 Z
    `;

    // Steppe band (highlighted)
    const steppe = `
      M 220,205 Q 320,190 420,200 Q 520,195 620,205 Q 720,200 820,215 Q 870,220 880,245
      Q 870,275 820,280 Q 720,290 620,285 Q 520,290 420,285 Q 320,290 220,275
      Q 170,265 180,240 Q 175,220 220,205 Z
    `;

    // Climate zones (deserts + forests)
    const desert = `
      M 480,275 Q 560,270 640,280 Q 700,290 700,310 Q 660,320 580,318 Q 510,315 470,305 Q 460,290 480,275 Z
    `;
    const forestNorth = `
      M 180,150 Q 280,140 400,150 Q 520,140 640,150 Q 760,145 870,160 L 870,200 Q 760,195 640,200 Q 520,205 400,200 Q 280,205 180,200 Z
    `;

    // Major sedentary cores (markers)
    const cores = [
      { x: 870, y: 320, en: "China", zh: "中国", color: "#8b1c2b" },
      { x: 540, y: 305, en: "Persia", zh: "波斯", color: "#a06b1f" },
      { x: 380, y: 285, en: "Byzantium", zh: "拜占庭", color: "#3a5a8a" },
      { x: 290, y: 195, en: "Russia", zh: "罗斯", color: "#4a6b3a" },
      { x: 600, y: 320, en: "India", zh: "印度", color: "#6a3a72" }
    ];
    const tlabel = (en, zh, attrs) =>
      `<text ${attrs} lang="en">${en}</text><text ${attrs} lang="zh">${zh}</text>`;

    const sedentaryNS = "http://www.w3.org/2000/svg";

    // Build base layers
    let svg = `<svg xmlns="${sedentaryNS}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">`;

    // Land
    svg += `<path d="${eurasia}" fill="var(--parchment-deep)" stroke="var(--rule)" stroke-width="1.5" opacity="0.85"/>`;

    // Climate / ecology
    svg += `<g class="layer-climate" style="display:none">`;
    svg += `  <path d="${forestNorth}" fill="#6b7c3a" opacity="0.22" />`;
    svg += `  <path d="${desert}" fill="#c98c2c" opacity="0.28" />`;
    svg += tlabel("Taiga / Forest", "泰加林 / 森林", `x="280" y="175" font-family="Cormorant Garamond" font-size="13" fill="#4a6b3a" font-style="italic"`);
    svg += tlabel("Gobi / Taklamakan", "戈壁 / 塔克拉玛干", `x="560" y="298" font-family="Cormorant Garamond" font-size="13" fill="#a06b1f" font-style="italic"`);
    svg += `</g>`;

    // Steppe band (default-on)
    svg += `<g class="layer-steppe">`;
    svg += `  <path d="${steppe}" fill="#a3b56a" opacity="0.32" />`;
    svg += tlabel("EURASIAN STEPPE", "欧亚草原", `x="350" y="245" font-family="Cormorant Garamond" font-size="16" fill="#4a3d28" font-style="italic" font-weight="600" letter-spacing="3"`);
    svg += `</g>`;

    // Horse zone (high-mobility heart)
    svg += `<g class="layer-horse" style="display:none">`;
    svg += `  <ellipse cx="700" cy="240" rx="180" ry="40" fill="#8b1c2b" opacity="0.18"/>`;
    svg += tlabel("HEART OF THE HORSE", "马匹核心", `x="640" y="215" font-family="JetBrains Mono" font-size="10" fill="#8b1c2b" letter-spacing="2"`);
    svg += tlabel("Mongolian Plateau", "蒙古高原", `x="640" y="227" font-family="Cormorant Garamond" font-size="11" fill="#5c3a1e" font-style="italic"`);
    svg += `</g>`;

    // Migration corridors
    svg += `<g class="layer-migration" style="display:none">`;
    (window.CORRIDORS || []).filter(c => c.id !== "silk-north" && c.id !== "silk-south").forEach((c, i) => {
      const path = "M " + c.points.map(p => p.join(",")).join(" L ");
      svg += `<path class="corridor" d="${path}" fill="none" stroke="${c.color}" stroke-width="2.5" opacity="0.85" stroke-dasharray="6 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="3s" repeatCount="indefinite"/>
      </path>`;
      // arrowhead at end
      const last = c.points[c.points.length - 1];
      const prev = c.points[c.points.length - 2];
      const dx = last[0]-prev[0], dy = last[1]-prev[1];
      const angle = Math.atan2(dy, dx) * 180/Math.PI;
      svg += `<polygon points="0,-5 10,0 0,5" fill="${c.color}" transform="translate(${last[0]},${last[1]}) rotate(${angle})"/>`;
    });
    svg += `</g>`;

    // Silk Road
    svg += `<g class="layer-silk" style="display:none">`;
    (window.CORRIDORS || []).filter(c => c.id === "silk-north" || c.id === "silk-south").forEach(c => {
      const path = "M " + c.points.map(p => p.join(",")).join(" L ");
      svg += `<path d="${path}" fill="none" stroke="${c.color}" stroke-width="2" opacity="0.9" stroke-dasharray="2 3"/>`;
      // markers
      c.points.forEach(p => {
        svg += `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="${c.color}" opacity="0.8"/>`;
      });
    });
    svg += tlabel("Silk Road", "丝绸之路", `x="500" y="232" font-family="Cormorant Garamond" font-size="12" fill="#a06b1f" font-style="italic"`);
    svg += `</g>`;

    // Sedentary cores (always on)
    cores.forEach(c => {
      svg += `<g>`;
      svg += `<circle cx="${c.x}" cy="${c.y}" r="6" fill="${c.color}" stroke="var(--parchment)" stroke-width="2"/>`;
      svg += tlabel(c.en, c.zh, `x="${c.x + 10}" y="${c.y + 4}" font-family="Cormorant Garamond" font-size="13" fill="var(--ink)" font-weight="600"`);
      svg += `</g>`;
    });

    // Compass rose
    svg += `<g transform="translate(80,420)">
      <circle r="22" fill="none" stroke="var(--rule)" stroke-width="1"/>
      <path d="M 0,-22 L 4,0 L 0,22 L -4,0 Z" fill="var(--ink)"/>
      <path d="M -22,0 L 0,4 L 22,0 L 0,-4 Z" fill="none" stroke="var(--ink)" stroke-width="0.8"/>
      ${tlabel("N", "北", `x="0" y="-28" text-anchor="middle" font-family="Cormorant Garamond" font-size="12" fill="var(--ink-soft)" font-style="italic"`)}
    </g>`;

    svg += `</svg>`;
    map.innerHTML = svg;

    // Layer toggling
    const layers = ["steppe", "climate", "horse", "migration", "silk"];
    document.querySelectorAll("[data-layer]").forEach(btn => {
      btn.addEventListener("click", () => {
        const l = btn.dataset.layer;
        const g = map.querySelector(`.layer-${l}`);
        if (!g) return;
        const on = g.style.display !== "none";
        g.style.display = on ? "none" : "block";
        btn.classList.toggle("active", !on);
      });
    });
    // Default: steppe on, others off (already styled)
    document.querySelector('[data-layer="steppe"]').classList.add("active");
  }

  // ===== Timeline =====
  const tl = document.getElementById("timeline-rows");
  if (tl && window.EMPIRES) {
    const minYear = -800, maxYear = 1950;
    const span = maxYear - minYear;
    const empires = window.EMPIRES;
    let html = "";
    empires.forEach((e, i) => {
      const left = ((e.start - minYear) / span) * 100;
      const width = ((e.end - e.start) / span) * 100;
      html += `
        <div class="timeline-row">
          <div class="timeline-label">
            <span lang="en">${e.en}</span>
            <span lang="zh">${e.zh}</span>
            <small>${formatYear(e.start)} – ${formatYear(e.end)}</small>
          </div>
          <div class="timeline-bar-track">
            <div class="timeline-bar" data-empire-id="${e.id}"
                 style="left:${left}%; width:${width}%; background:${e.color}"
                 title="${e.en}">
              <span lang="en">${e.en}</span><span lang="zh">${e.zh}</span>
            </div>
          </div>
        </div>`;
    });
    tl.innerHTML = html;

    const detail = document.getElementById("empire-detail");
    const renderDetail = (empire) => {
      detail.innerHTML = `
        <h3><span lang="en">${empire.en}</span><span lang="zh">${empire.zh}</span></h3>
        <div class="meta">${formatYear(empire.start)} – ${formatYear(empire.end)} · <span lang="en">${empire.region}</span><span lang="zh">${empire.region_zh}</span></div>
        <p lang="en">${empire.summary_en}</p>
        <p lang="zh">${empire.summary_zh}</p>
        <div class="keys">
          ${empire.keys_en.map((k,i) => `<span><span lang="en">${k}</span><span lang="zh">${empire.keys_zh[i] || k}</span></span>`).join("")}
        </div>`;
    };
    renderDetail(empires.find(e => e.id === "mongol"));
    document.querySelectorAll(".timeline-bar").forEach(bar => {
      bar.addEventListener("click", () => {
        const e = empires.find(x => x.id === bar.dataset.empireId);
        if (e) renderDetail(e);
        document.querySelectorAll(".timeline-bar").forEach(b => b.style.outline = "none");
        bar.style.outline = "2px solid var(--gold)";
        bar.style.outlineOffset = "1px";
      });
    });
  }

  // ===== Religion flow =====
  const flow = document.getElementById("religion-flow");
  if (flow && window.RELIGIONS) {
    flow.innerHTML = window.RELIGIONS.map(r => `
      <div class="flow-card">
        <h3><span lang="en">${r.en}</span><span lang="zh">${r.zh}</span></h3>
        <div class="period">${r.period}</div>
        <div class="route"><span lang="en">${r.flow_en}</span><span lang="zh">${r.flow_zh}</span></div>
        <p lang="en">${r.note_en}</p>
        <p lang="zh">${r.note_zh}</p>
      </div>
    `).join("");
  }

  // ===== Frontier matrix =====
  const matrixBody = document.getElementById("frontier-matrix-body");
  if (matrixBody && window.FRONTIERS) {
    matrixBody.innerHTML = window.FRONTIERS.map(f => `
      <tr>
        <td><span lang="en">${f.sedentary_en}</span><span lang="zh">${f.sedentary_zh}</span></td>
        <td><span lang="en">${f.pressure_en}</span><span lang="zh">${f.pressure_zh}</span></td>
        <td><span lang="en">${f.mode_en}</span><span lang="zh">${f.mode_zh}</span></td>
      </tr>
    `).join("");
  }

  // ===== Simulator =====
  // Inputs: mobility, ecology(grass health), climate(stable→cold/dry), frontier_pressure(weak→strong sedentary), tribute_flow
  // Outputs:
  //   coalescence  = mobility * ecology * (1 - climate_stress*.5)
  //   reach        = mobility * military * (1 + tribute_flow*.4)
  //   stability    = (1 - frontier_pressure*.3) * ecology * (1 - climate_stress*.7)
  //   longevity    = stability^.5 * (0.5 + tribute_flow*.5)
  const sim = document.getElementById("simulator");
  if (sim) {
    const ctrls = {
      mobility: document.getElementById("ctrl-mobility"),
      ecology: document.getElementById("ctrl-ecology"),
      climate: document.getElementById("ctrl-climate"),
      pressure: document.getElementById("ctrl-pressure"),
      tribute: document.getElementById("ctrl-tribute"),
      military: document.getElementById("ctrl-military")
    };
    const updateSim = () => {
      const m = parseFloat(ctrls.mobility.value)/100;
      const e = parseFloat(ctrls.ecology.value)/100;
      const c = parseFloat(ctrls.climate.value)/100;       // climate stress
      const p = parseFloat(ctrls.pressure.value)/100;
      const t = parseFloat(ctrls.tribute.value)/100;
      const mil = parseFloat(ctrls.military.value)/100;

      Object.keys(ctrls).forEach(k => {
        const lbl = document.querySelector(`[data-val="${k}"]`);
        if (lbl) lbl.textContent = ctrls[k].value;
      });

      const coalescence = clamp01(m * 0.55 + e * 0.35 + (1-c) * 0.25 - 0.15);
      const reach       = clamp01(m * 0.5 + mil * 0.45 + t * 0.2 - 0.15);
      const stability   = clamp01((1-p) * 0.4 + e * 0.3 + (1-c) * 0.45 + t*0.1 - 0.25);
      const longevity   = clamp01(stability * 0.7 + (1-c) * 0.3 - 0.1);

      const set = (id, val) => {
        const fill = document.querySelector(`[data-meter="${id}"] .bar-fill`);
        const num  = document.querySelector(`[data-meter="${id}"] .num`);
        if (fill) fill.style.width = (val*100).toFixed(0) + "%";
        if (num)  num.textContent  = (val*100).toFixed(0);
      };
      set("coalescence", coalescence);
      set("reach", reach);
      set("stability", stability);
      set("longevity", longevity);

      // Profile classification
      const summaryEn = document.getElementById("sim-summary-en");
      const summaryZh = document.getElementById("sim-summary-zh");
      let label_en = "", label_zh = "";
      if (coalescence > .7 && reach > .7 && longevity > .55) {
        label_en = `World-empire archetype — comparable to the Mongol expansion of 1206–1260. High mobility (${pct(m)}) and military capacity (${pct(mil)}) compound to produce a continental-scale conquest, while tribute flows (${pct(t)}) underwrite stability.`;
        label_zh = `世界帝国型——可与1206—1260年蒙古扩张相比。高机动性（${pct(m)}）与军事能力（${pct(mil)}）相互放大，形成洲际征服；贡赋流入（${pct(t)}）维持稳定。`;
      } else if (coalescence > .55 && reach > .5 && stability > .5) {
        label_en = `Regional khaganate — like the Göktürk or Uyghur formations. Strong enough to extract tribute from one major sedentary neighbor and dominate the local steppe, but lacking the conditions for transcontinental projection.`;
        label_zh = `区域汗国——类似突厥或回鹘。可向某一定居邻邦勒索贡赋并主导本地草原，但尚不足以发动洲际远征。`;
      } else if (c > .65 && p > .6) {
        label_en = `Collapse vector — drought plus a strong sedentary frontier mirror the conditions that ended the Uyghur Khaganate (840) and the Zunghar state (1758). Coalescence stalls, mobility loses its grass base, and the empire fragments.`;
        label_zh = `崩溃路径——干旱叠加强大的定居边境，对应回鹘（840年）与准噶尔（1758年）灭亡的条件。凝聚停滞，机动失去草原基础，帝国分裂。`;
      } else if (m < .4 && e > .5) {
        label_en = `Pre-imperial pastoral — clan-confederation phase. The grass is good, but no figure has yet welded the lineages into a state. This is the steppe's resting state.`;
        label_zh = `前帝国游牧——氏族联盟阶段。草原资源充裕，但尚无人将各部熔铸为国家。这是草原的常态。`;
      } else if (t > .7 && m > .5) {
        label_en = `Tribute-extraction polity — a Crimean-Khanate-like profile. Mobility lets the state raid; tribute flow keeps it solvent without territorial expansion.`;
        label_zh = `贡赋勒索型政体——克里米亚汗国式画像。机动性使其能够劫掠，贡赋流入使其无需领土扩张即可维持。`;
      } else {
        label_en = `Mixed profile — adjust the dials to find a configuration that maps onto a known historical empire.`;
        label_zh = `混合画像——调整参数以匹配历史上的某个帝国。`;
      }
      if (summaryEn) summaryEn.textContent = label_en;
      if (summaryZh) summaryZh.textContent = label_zh;
    };
    Object.values(ctrls).forEach(c => c && c.addEventListener("input", updateSim));
    updateSim();
  }

  // ===== Helpers =====
  function clamp01(x){ return Math.max(0, Math.min(1, x)); }
  function pct(x){ return Math.round(x*100) + "%"; }
  function formatYear(y){
    if (y < 0) return Math.abs(y) + " BCE";
    return y + " CE";
  }
})();

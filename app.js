"use strict";

const content = {
  control: { title: "Control Tower", intro: "A high-level static view of operational posture. It contains no market feed, account state, or backend connection.", cards: [["Data posture","0 validated market records","DEMO · providers disconnected"],["Connector center","2 candidates","Gigantum and ARJUM · NOT_CONNECTED"],["Release gate","BLOCK","No deployment approval"],["Security posture","Illustrative","No session is created"]], detail: "All operational indicators below are illustrative only and must not be used as deployment evidence." },
  stock: { title: "Stock Intelligence", intro: "Illustrative stock surface. Prices, signals, and company facts are deliberately absent.", cards: [["Ticker lookup","DEMO","No source query"],["Validated OHLCV","Unavailable","No authentic export"],["Source timestamp","—","No source connected"],["Validation","BLOCKED","No records admitted"]], detail: "Static preview never fetches, calculates, or displays live market data." },
  scanner: { title: "Scanner Center", intro: "Scanner presentation with an intentionally empty universe.", cards: [["Universe","0","No validated stocks"],["Candidates","0","DEMO display"],["Engine state","Independent","Locked baselines untouched"],["Run status","Unavailable","Data gate closed"]], detail: "No scanner executes in this preview, and DEMO content cannot become an investment signal." },
  bandar: { title: "Bandar Intelligence", intro: "Broker-flow module presentation with provider access explicitly disabled.", cards: [["ARJUM","NOT_CONNECTED","Authorization absent"],["Reconciliation","Required","No provider payload"],["Broker records","0","No data admitted"],["Provenance","Unverified","Preview only"]], detail: "Cloudflare/provider policies are not contacted, simulated, or bypassed." },
  portfolio: { title: "Portfolio & Watchlist", intro: "Private workspace presentation without any stored portfolio, watchlist, identity, or browser persistence.", cards: [["Portfolio positions","0","No local storage"],["Watchlist items","0","No local storage"],["Account","Simulated","No credential collected"],["Session","None","No cookie created"]], detail: "This is a visual-only simulation; it cannot save data." },
  reports: { title: "Reports", intro: "Report module presentation showing the difference between UI demonstration and operational evidence.", cards: [["Report export","Disabled","No generated artifact"],["Market source","Unavailable","No validated data"],["Provenance ledger","Unavailable","No persistence"],["Publication","Manual review","Not deployed"]], detail: "Any external publication requires separate security, source, and deployment approval." }
};

function render(moduleId) {
  const module = content[moduleId];
  document.getElementById("module-title").textContent = module.title;
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.module === moduleId));
  const cards = module.cards.map(([label, value, note], index) => `<article class="card ${index === 0 ? "wide" : ""}"><p>${label}</p><div class="metric">${value}</div><span class="demo-tag">${note}</span>${index === 0 ? '<div class="bar"><span style="width:0%"></span></div>' : ""}</article>`).join("");
  document.getElementById("module-content").innerHTML = `<div class="hero"><div><p class="eyebrow">STATIC MODULE PRESENTATION</p><h3>${module.title}</h3><p>${module.intro}</p></div><span class="status-pill">DEMO ONLY</span></div><div class="grid">${cards}</div><section class="empty"><strong>NO LIVE OR PERSONAL DATA</strong><br>${module.detail}</section>`;
}

document.getElementById("demo-login").addEventListener("click", () => { document.getElementById("login-view").hidden = true; document.getElementById("app-view").hidden = false; render("control"); });
document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => { render(button.dataset.module); document.querySelector(".sidebar").classList.remove("open"); }));
document.getElementById("menu-toggle").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));

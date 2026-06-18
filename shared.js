/* ═══════════════════════════════════════════════════════
   PkmnJourney — shared.js
   Palette system, nav profile, common utilities
═══════════════════════════════════════════════════════ */

// ── Themes ────────────────────────────────────────────
const PKMN_PALETTES = {
  "Articuno": {
    light: {
      dark:"#151e28", mid:"#005273", light:"#627a84", bg:"#fcfcfd",
      card:"#ffffff", border:"#e0e5eb", text:"#151e28", textOnDark:"#ffffff",
      accent:"#6aacf6", muted:"#f2f6f7",
    },
    dark: {
      dark:"#14171a", mid:"#1abeff", light:"#98acb3", bg:"#14171a",
      card:"#1b2127", border:"#2d3743", text:"#f4f5f6", textOnDark:"#f4f5f6",
      accent:"#6aabf6", muted:"#253237",
    },
  },
  "Zapdos": {
    light: {
      dark:"#282415", mid:"#d5ac08", light:"#847d62", bg:"#fdfdfc",
      card:"#ffffff", border:"#ebe9e0", text:"#282415", textOnDark:"#ffffff",
      accent:"#ffd541", muted:"#f7f6f2",
    },
    dark: {
      dark:"#1a1914", mid:"#ffd642", light:"#b3ad98", bg:"#1a1914",
      card:"#27251b", border:"#433f2d", text:"#f6f5f4", textOnDark:"#f6f5f4",
      accent:"#f7cc22", muted:"#373325",
    },
  },
  "Moltres": {
    light: {
      dark:"#281a15", mid:"#d50808", light:"#846262", bg:"#fdfcfc",
      card:"#ffffff", border:"#ebe3e0", text:"#281a15", textOnDark:"#ffffff",
      accent:"#ee6239", muted:"#f7f2f2",
    },
    dark: {
      dark:"#1a1514", mid:"#f72222", light:"#b39898", bg:"#1a1514",
      card:"#271e1b", border:"#43322d", text:"#f6f4f4", textOnDark:"#f6f4f4",
      accent:"#ee643a", muted:"#372525",
    },
  },
};

function pkmnGetPalette() {
  return localStorage.getItem("pkmnjourney_palette") || "Articuno";
}

function pkmnGetDarkMode() {
  return localStorage.getItem("pkmnjourney_dark") === "true";
}

function pkmnApplyPalette(name, dark) {
  const palGroup = PKMN_PALETTES[name] || PKMN_PALETTES["Articuno"];
  const p = dark ? palGroup.dark : palGroup.light;
  const r = document.documentElement.style;
  r.setProperty("--dark",         p.dark);
  r.setProperty("--mid",          p.mid);
  r.setProperty("--light",        p.light);
  r.setProperty("--bg",           p.bg);
  r.setProperty("--card",         p.card);
  r.setProperty("--border",       p.border);
  r.setProperty("--accent",       p.accent);
  r.setProperty("--muted",        p.muted);
  r.setProperty("--text",         p.text);
  r.setProperty("--text-on-dark", p.textOnDark);
  r.setProperty("--font",         "'Courier New', Courier, monospace");
  localStorage.setItem("pkmnjourney_palette", name);
  localStorage.setItem("pkmnjourney_dark", dark);
}

function pkmnToggleDark() {
  pkmnApplyPalette(pkmnGetPalette(), !pkmnGetDarkMode());
  // re-render palette picker if on profile page
  if (typeof renderThemeSection === "function") renderThemeSection();
}

// Apply on load
pkmnApplyPalette(pkmnGetPalette(), pkmnGetDarkMode());

// ── Settings Modal (shared — palette only, no battle mode) ────
function pkmnOpenSettings() {
  const overlay = document.getElementById("pkmnSettingsOverlay");
  if (overlay) { overlay.classList.add("active"); pkmnRenderPaletteOpts(); }
}
function pkmnCloseSettings() {
  const overlay = document.getElementById("pkmnSettingsOverlay");
  if (overlay) overlay.classList.remove("active");
}

function pkmnRenderPaletteOpts() {
  const el = document.getElementById("pkmnPaletteOpts");
  if (!el) return;
  el.innerHTML = "";
  const cur = pkmnGetPalette();
  const isDark = pkmnGetDarkMode();
  Object.keys(PKMN_PALETTES).forEach(k => {
    const p = PKMN_PALETTES[k].light;
    const d = document.createElement("div");
    d.className = "opt" + (k === cur ? " selected" : "");
    const swatches = [p.bg, p.accent, p.dark].map(c =>
      `<span style="display:inline-block;width:14px;height:14px;background:${c};border:1px solid #0004;border-radius:2px;"></span>`
    ).join("");
    d.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;">
        <span class="opt-prefix">${k === cur ? "▶" : " "}</span>
        <span class="opt-label">${k}</span>
        <span style="display:flex;gap:3px;margin-left:auto;">${swatches}</span>
      </div>`;
    d.onclick = () => { pkmnApplyPalette(k, isDark); pkmnRenderPaletteOpts(); };
    el.appendChild(d);
  });
  const btn = document.getElementById("darkToggleBtn");
  if (btn) btn.textContent = isDark ? "☀ Light" : "☾ Dark";
}

function pkmnInjectSettingsModal() {
  if (window.pkmnNoSettingsModal) return;
  if (document.getElementById("pkmnSettingsOverlay")) return;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "pkmnSettingsOverlay";
  overlay.onclick = e => { if (e.target === overlay) pkmnCloseSettings(); };
  overlay.innerHTML = `
    <div class="modal">
      <button class="modal-close" onclick="pkmnCloseSettings()">✕</button>
      <div class="card-title" style="margin-bottom:12px;">Theme</div>
      <div id="pkmnPaletteOpts"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;padding:10px;border:2px solid var(--border);">
        <span style="font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:var(--text);">Dark Mode</span>
        <button onclick="pkmnToggleDark()" id="darkToggleBtn" style="font-family:var(--font);font-size:11px;font-weight:bold;padding:4px 12px;border:2px solid var(--border);background:var(--dark);color:var(--text-on-dark);cursor:pointer;text-transform:uppercase;letter-spacing:1px;"></button>
      </div>
      <button class="btn btn-dark btn-full" onclick="pkmnCloseSettings()" style="margin-top:12px;">✔ Done</button>
    </div>`;
  document.body.appendChild(overlay);
}

// ── Nav Profile ───────────────────────────────────────
const PKMN_SPRITE = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
const STARTER_NAMES = { 1:"Bulbasaur", 4:"Charmander", 7:"Squirtle" };

function pkmnGetProfile() {
  try { return JSON.parse(localStorage.getItem("pkmnjourney_profile")) || null; }
  catch { return null; }
}

function pkmnUpdateNav() {
  const p = pkmnGetProfile();
  const createBtn = document.getElementById("navCreateBtn");
  const profileBar = document.getElementById("navProfileBar");
  if (!createBtn || !profileBar) return;
  if (p) {
    createBtn.style.display = "none";
    profileBar.classList.add("active");
    const avatar = document.getElementById("navAvatar");
    const username = document.getElementById("navUsername");
    if (avatar) avatar.src = PKMN_SPRITE(p.starter);
    if (username) username.textContent = p.name;
  } else {
    createBtn.style.display = "inline-block";
    profileBar.classList.remove("active");
  }
}

function pkmnInjectNav(activePage) {
  const existing = document.querySelector("nav");
  if (!existing) return;
  const links = [
    { href:"index.html",   id:"home",    label:"Home" },
    { href:"pokedex.html", id:"pokedex", label:"Pokédex" },
    { href:"game.html",    id:"game",    label:"▶ Play" },
  ];
  const linksHTML = links.map(l => {
    const isActive = l.id === activePage;
    return `<a href="${l.href}"
      class="${l.id==='game'?'nav-play-btn':''} ${isActive?'nav-active':''}"
      ${isActive?'aria-current="page"':""}
    >${l.label}</a>`;
  }).join("");
  existing.innerHTML = `
    <a href="index.html" class="nav-logo">Pkmn<span>Journey</span></a>
    <div class="nav-links">
      ${linksHTML}
      <button class="btn btn-accent btn-sm" id="navCreateBtn" onclick="window.location.href='profile.html'" style="display:none;">+ Trainer</button>
      <a href="profile.html" class="nav-profile-bar" id="navProfileBar">
        <img id="navAvatar" src="" alt="" onerror="this.style.opacity=0"/>
        <span id="navUsername"></span>
      </a>
    </div>`;
  pkmnUpdateNav();
}

function pkmnOpenProfileModal() {
  const existing = document.getElementById("modalOverlay");
  if (existing) { existing.classList.add("active"); return; }
  window.location.href = "profile.html";
}

document.addEventListener("DOMContentLoaded", () => {
  pkmnUpdateNav();
});
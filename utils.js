/* ════════════════════════════════════════════
   FrenchQuest - Utility Functions
   Answer checking, storage, fishing logic
   ════════════════════════════════════════════ */

// ── Helpers ──
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function getTodayKey() { return new Date().toISOString().slice(0, 10); }

// ── Answer Checking ──
function norm(s) {
  return s.toLowerCase().trim()
    .replace(/['\u2019]/g, "'").replace(/[?!.,;:]/g, "").replace(/\s+/g, " ")
    .replace(/[\u00e0\u00e2\u00e4]/g, "a").replace(/[\u00e9\u00e8\u00ea\u00eb]/g, "e")
    .replace(/[\u00ee\u00ef]/g, "i").replace(/[\u00f4\u00f6]/g, "o")
    .replace(/[\u00f9\u00fb\u00fc]/g, "u").replace(/\u00e7/g, "c").replace(/\u0153/g, "oe");
}

function lev(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) d[i][0] = i;
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      d[i][j] = a[i - 1] === b[j - 1] ? d[i - 1][j - 1] : 1 + Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]);
  return d[m][n];
}

function checkAns(ua, correct, acc) {
  const n1 = norm(ua), nc = norm(correct);
  if (n1 === nc) return { status: "correct", corrected: null };
  for (const alt of (acc || []))
    if (n1 === norm(alt)) return ua.toLowerCase().trim() !== alt.toLowerCase().trim() ? { status: "accepted", corrected: correct } : { status: "correct", corrected: null };
  if (n1.length > 2 && nc.length > 2 && lev(n1, nc) <= 2) return { status: "close", corrected: correct };
  return { status: "wrong", corrected: correct };
}

// ── Fishing Word Pool ──
function getFishingWords(userLevel) {
  const pool = [];
  LEVELS.forEach(lv => {
    if (lv.id <= userLevel) {
      lv.flashcards.forEach(f => pool.push({ en: f.en.split("/")[0].trim(), fr: f.fr, level: lv.id }));
    }
  });
  DICT_ENTRIES.forEach(d => {
    if (d.cat === "Animals" || d.cat === "Gaming") pool.push({ en: d.en, fr: d.fr, level: 2 });
  });
  return pool;
}

function pickFish(rodLevel, userLevel) {
  const tier = Math.min(3, Math.max(1, rodLevel));
  const w = { ...RARITY_WEIGHTS[tier] };
  const eligible = FISH_SPECIES.filter(f => f.minLevel <= userLevel);
  const total = Object.values(w).reduce((a, b) => a + b, 0);
  let r = Math.random() * total, cum = 0;
  let rarity = "common";
  for (const [k, v] of Object.entries(w)) { cum += v; if (r <= cum) { rarity = k; break; } }
  const pool = eligible.filter(f => f.rarity === rarity);
  if (pool.length === 0) return eligible.filter(f => f.rarity === "common")[0] || eligible[0];
  return pick(pool);
}

// ── Storage Helpers (multi-user) ──
function ensureDefaultAccounts() {
  try {
    let accs = JSON.parse(localStorage.getItem("fq_accounts") || "[]");
    if (!accs.find(a => a.username === "Batiste")) {
      accs.push({ username: "Batiste", code: "1234" });
      localStorage.setItem("fq_accounts", JSON.stringify(accs));
      if (!localStorage.getItem("fq_Batiste")) localStorage.setItem("fq_Batiste", JSON.stringify({ ...DEFAULT_PROFILE }));
    }
  } catch (e) {}
}

function getAccounts() { try { ensureDefaultAccounts(); return JSON.parse(localStorage.getItem("fq_accounts") || "[]"); } catch (e) { return []; } }
function saveAccounts(a) { try { localStorage.setItem("fq_accounts", JSON.stringify(a)); } catch (e) {} }
function loadProfile(username) { try { return JSON.parse(localStorage.getItem("fq_" + username) || "null"); } catch (e) { return null; } }
function saveProfile(username, data) { try { localStorage.setItem("fq_" + username, JSON.stringify(data)); } catch (e) {} }

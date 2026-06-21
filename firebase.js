/* ═══════════════════════════════════════════════════════
   PkmnJourney — firebase.js
   Auth + Firestore sync. Loaded after shared.js on all pages.
   Uses Firebase CDN (no bundler needed).
═══════════════════════════════════════════════════════ */

// ── Firebase config ────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBbM0dwao7rkdvflH6YpUqx_yxsDEtBk-c",
  authDomain: "pkmnjourney-0.firebaseapp.com",
  projectId: "pkmnjourney-0",
  storageBucket: "pkmnjourney-0.firebasestorage.app",
  messagingSenderId: "523672741540",
  appId: "1:523672741540:web:861387c71a02ad07e1a831",
};

// ── Firebase SDK (loaded via CDN in HTML) ──────────────
// Requires these script tags before firebase.js:
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>

const _app = firebase.initializeApp(FIREBASE_CONFIG);
const _auth = firebase.auth();
const _db = firebase.firestore();

// ── Auth state ─────────────────────────────────────────
// pkmnCurrentUser is null when logged out, Firebase user object when logged in
window.pkmnCurrentUser = null;

// Called on every page — listens for auth state changes
// and updates the nav accordingly
_auth.onAuthStateChanged(async user => {
  window.pkmnCurrentUser = user;

  if (user) {
    // Logged in — load profile from Firestore into localStorage
    // so all existing code that reads localStorage still works
    await pkmnSyncFromFirestore();
  }

  // Re-render nav if the function exists on this page
  if (typeof pkmnUpdateNav === "function") pkmnUpdateNav();

  // Re-render profile page if we're on it
  if (typeof render === "function") render();
});

// ── Auth functions ─────────────────────────────────────

// Sign up with email + password, then create profile doc
async function pkmnSignUp(email, password, name) {
  const cred = await _auth.createUserWithEmailAndPassword(email, password);
  const uid = cred.user.uid;
  const trainerId = String(Math.floor(Math.random() * 999999)).padStart(6, "0");

  // Initial profile structure
  const profile = {
    name,
    trainerId,
    runs: 0,
    bestWinPct: null,
    achievements: [],
    created: Date.now(),
  };

  // Save to Firestore
  await _db.doc(`users/${uid}/data/profile`).set(profile);

  // Also save to localStorage so existing code works immediately
  localStorage.setItem("pkmnjourney_profile", JSON.stringify(profile));

  return profile;
}

// Log in with email + password
async function pkmnSignIn(email, password) {
  await _auth.signInWithEmailAndPassword(email, password);
  // onAuthStateChanged will fire and call pkmnSyncFromFirestore
}

// Log out
async function pkmnSignOut() {
  await _auth.signOut();
  // Clear local profile so nav resets
  localStorage.removeItem("pkmnjourney_profile");
  if (typeof pkmnUpdateNav === "function") pkmnUpdateNav();
  if (typeof render === "function") render();
}

// ── Firestore sync ─────────────────────────────────────

// Pull all user data from Firestore into localStorage
// Called on login and page load when user is already logged in
async function pkmnSyncFromFirestore() {
  const uid = window.pkmnCurrentUser?.uid;
  if (!uid) return;

  try {
    // Profile
    const profileDoc = await _db.doc(`users/${uid}/data/profile`).get();
    if (profileDoc.exists) {
      localStorage.setItem("pkmnjourney_profile", JSON.stringify(profileDoc.data()));
    }

    // Pokédex
    const dexDoc = await _db.doc(`users/${uid}/data/pokedex`).get();
    if (dexDoc.exists) {
      localStorage.setItem("pkmnjourney_pokedex", JSON.stringify(dexDoc.data()));
    }

    // Settings
    const settingsDoc = await _db.doc(`users/${uid}/data/settings`).get();
    if (settingsDoc.exists) {
      const s = settingsDoc.data();
      if (s.palette) localStorage.setItem("pkmnjourney_palette", s.palette);
      if (s.dark !== undefined) localStorage.setItem("pkmnjourney_dark", s.dark);
      if (s.hardcore !== undefined) localStorage.setItem("pkmnjourney_hardcore", s.hardcore);
      if (s.testmode !== undefined) localStorage.setItem("pkmnjourney_testmode", s.testmode);
      // Re-apply palette after sync
      pkmnApplyPalette(pkmnGetPalette(), pkmnGetDarkMode());
    }
  } catch (e) {
    console.warn("Firestore sync failed:", e);
  }
}

// Push profile to Firestore — call after any profile update
async function pkmnSaveProfile(profile) {
  const uid = window.pkmnCurrentUser?.uid;
  // Always save to localStorage
  localStorage.setItem("pkmnjourney_profile", JSON.stringify(profile));
  // Save to Firestore if logged in
  if (uid) {
    try {
      await _db.doc(`users/${uid}/data/profile`).set(profile);
    } catch (e) {
      console.warn("Failed to save profile to Firestore:", e);
    }
  }
}

// Push Pokédex to Firestore — call after catching a Pokémon
async function pkmnSavePokedex(dex) {
  const uid = window.pkmnCurrentUser?.uid;
  localStorage.setItem("pkmnjourney_pokedex", JSON.stringify(dex));
  if (uid) {
    try {
      await _db.doc(`users/${uid}/data/pokedex`).set(dex);
    } catch (e) {
      console.warn("Failed to save pokédex to Firestore:", e);
    }
  }
}

// Push settings to Firestore — call after any settings change
async function pkmnSaveSettings() {
  const uid = window.pkmnCurrentUser?.uid;
  if (!uid) return;
  try {
    await _db.doc(`users/${uid}/data/settings`).set({
      palette: pkmnGetPalette(),
      dark: String(pkmnGetDarkMode()),
      hardcore: localStorage.getItem("pkmnjourney_hardcore") || "false",
      testmode: localStorage.getItem("pkmnjourney_testmode") || "false",
    });
  } catch (e) {
    console.warn("Failed to save settings to Firestore:", e);
  }
}

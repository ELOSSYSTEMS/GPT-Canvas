// Title: ELos Academy Integration (UI/UX Layer)
// Purpose: Adds ELos Academy entry points into sidebar and popup for all tiers

/* ========================= */
/* manifest.json additions (already present) */
/* ========================= */
// No changes needed if content.js and popup are already included

/* ========================= */
/* content.js additions */
/* ========================= */
const academy = document.createElement("div");
academy.id = "elos-academy";
academy.innerText = "ELos Academy";
academy.className = "elos-academy-entry";
academy.onclick = () => alert("Academy UI Launch");
sidebar.appendChild(academy);

/* ========================= */
/* styles.css additions */
/* ========================= */
.elos-academy-entry {
  margin-top: 12px;
  padding: 5px;
  font-size: 14px;
  background: #f4f4f4;
  color: #333;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
}

/* ========================= */
/* popup.html additions */
/* ========================= */
<!-- Below the tier buttons -->
<hr>
<button onclick="launchAcademy()">Launch ELos Academy</button>

/* ========================= */
/* popup.js additions */
/* ========================= */
function launchAcademy() {
  alert("ELos Academy UI coming soon...");
}

// Notes:
// - Alerts serve as placeholders for later modal/onboarding launch logic
// - These elements are visible across all tiers but will adapt in future builds
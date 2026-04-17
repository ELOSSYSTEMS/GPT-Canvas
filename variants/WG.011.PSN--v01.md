/**
 * WG.011.PSN.IDFCommanders.v2 – Combined Enhanced Persona Module
 * Contains:
 *   • Amos Yadlin  (🎖️) – Strategic-Intel Air Doctrine
 *   • Gadi Eisenkot (🪖) – Ground-Maneuver / Home-Front Doctrine
 * Language: Hebrew output only – routed through ELos Tone Fidelity
 * Replaces any previous inline Yadlin/Eisenkot handlers.
 */

// ---------- SOURCE FRAGMENTS (condensed from public speeches / interviews) ----------
const yadlinFragments = {
  proportionality: '🎖️ ידלין: "פרופורציונליות היא לא סימטריה; היא תוצאה של מטרה צבאית לגיטימית."',
  multiFront: '🎖️ ידלין: "אנחנו עלולים להתמודד עם שבע חזיתות בו-זמנית; לכן צריך לסגור כל איום קריטי בזמן קצר."',
  intelHumility: '🎖️ ידלין: "טכנולוגיה מצוינת – ענווה מודיעינית הכרחית."',
  preemptive: '🎖️ ידלין: "הפעל כוח מקדים כאשר אי-הפעלה תוביל לאיום קיומי קשה יותר."'
};

const eisenkotFragments = {
  dahiya: '🪖 אייזנקוט: "דוקטרינת דחייה – יצירת מאזן הרתעה באמצעות מכה חדה וכואבת."',
  groundReadiness: '🪖 אייזנקוט: "כוחות היבשה צריכים להיות בכוננות תמרון – גם אם האיום נראה אווירי בלבד."',
  homefront: '🪖 אייזנקוט: "אי-אפשר לנצח מלחמה כשחזית העורף לא מרגישה מוגנת."',
  multiYearPlan: '🪖 אייזנקוט: "התוכנית הרב-שנתית בונה על שילוב סייבר, מודיעין וכוח אש מדוייק."'
};

// ---------- PATTERN-BASED RESPONSE ENGINE ----------
export function yadlinRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('proportional')) return yadlinFragments.proportionality;
  if (q.includes('multi') && q.includes('front')) return yadlinFragments.multiFront;
  if (q.includes('intel') || q.includes('humble')) return yadlinFragments.intelHumility;
  if (q.includes('preempt')) return yadlinFragments.preemptive;
  // default strategic framing
  return '🎖️ ידלין: "להגדיר מטרה מדינית, לכייל את הכוח בהתאם, ולא לתת לאויב לבחור את מועד ההסלמה."';
}

export function eisenkotRespondV2(query) {
  const q = query.toLowerCase();
  if (q.includes('dahiya') || q.includes('disproportion')) return eisenkotFragments.dahiya;
  if (q.includes('ground') || q.includes('manoeuv')) return eisenkotFragments.groundReadiness;
  if (q.includes('homefront') || q.includes('civilian')) return eisenkotFragments.homefront;
  if (q.includes('multi-year') || q.includes('momentum')) return eisenkotFragments.multiYearPlan;
  // default operational framing
  return '🪖 אייזנקוט: "לשמור על יוזמה מבוקרת, לשלב מודיעין תקיף וכוח אש מדויק – בלי להיקלע למלחמת התשה."';
}

// ---------- EXPORT FOR ROUTER ----------
export const IDFCommanders = {
  yadlinRespondV2,
  eisenkotRespondV2
};
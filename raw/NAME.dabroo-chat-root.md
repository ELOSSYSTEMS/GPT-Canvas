<div class="chat-wrapper">
  <div class="chat-top-bar">
    <span>Dabroo AI</span>
  </div>
  <div class="chat-container" id="chat">
    <div class="chat-title">ברוכים הבאים לדרבו AI</div>
    <!-- Starters will be injected here -->
  </div>
  <div class="input-bar">
    <textarea id="chatInput" placeholder="הקלד משהו..." rows="1"></textarea>
    <button id="sendBtn">⬆️</button>
  </div>
</div>

<script>
  window.conversationStarters = [
    "מה ההבדל בין לשאול את צ׳אטג׳יפיטי בעברית — לבין להשתמש בדברו?",
    "איך דברו יכול לעזור לי אם אני לא איש שיווק?",
    "מה בדיוק אני מקבל אם אני קונה את דברו?",
    "למה כשאני כותב פרומפטים בצ׳אטג׳יפיטי — זה יוצא משעמם או רובוטי?",
    "תלמד אותי איך לכתוב פרומפט טוב בעברית.",
    "מה בדיוק מקבלים בדברו? ואיך זה שונה מכלים אחרים?"
  ];
</script>

{{ 'dabroo-chat.css' | asset_url | stylesheet_tag }}
{{ 'dabroo-chat.js' | asset_url | script_tag }}
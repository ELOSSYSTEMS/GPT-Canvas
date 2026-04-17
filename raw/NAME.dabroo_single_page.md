<!-- ✅ All-in-One Dabroo AI Chat Page -->
<!DOCTYPE html>
<html dir="rtl" lang="he">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dabroo AI</title>
    <style>
      /* Inline CSS from dabroo-chat.css */
      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #1a1a1a;
        font-family: "Segoe UI", "Noto Sans Hebrew", "Inter", sans-serif;
        color: #f2f4f8;
        direction: rtl;
        overflow: hidden;
      }
      .chat-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
      }
      .chat-container {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scroll-padding-bottom: 100px;
        box-sizing: border-box;
        max-width: 800px;
        margin: 0 auto;
      }
      .chat-title {
        text-align: center;
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 12px;
      }
      .message {
        max-width: 90%;
        background-color: #2e2e2e;
        padding: 14px 20px;
        border-radius: 14px;
        line-height: 1.7;
        font-size: 1rem;
        align-self: flex-start;
        white-space: pre-wrap;
      }
      .message.system {
        align-self: flex-end;
        background-color: #0a7aff33;
      }
      .input-bar {
        display: flex;
        align-items: center;
        padding: 12px;
        background: #1a1a1a;
        border-top: 1px solid #2c2c2c;
        position: sticky;
        bottom: 0;
        width: 100%;
      }
      .input-bar textarea {
        flex: 1;
        padding: 10px;
        border-radius: 10px;
        font-size: 1rem;
        resize: none;
        border: none;
        outline: none;
        background: #2a2a2a;
        color: #fff;
        margin-left: 10px;
      }
      .input-bar button {
        background-color: #0a7aff;
        border: none;
        border-radius: 50%;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #fff;
        font-size: 1.2rem;
      }
      .option-button-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 12px;
        margin: 20px auto;
        padding: 0 12px;
        max-width: 800px;
        direction: rtl;
      }
      .option-button {
        background-color: #2a2a2a;
        color: #f2f4f8;
        border: 1px solid #3a3a3a;
        border-radius: 12px;
        padding: 12px 20px;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        word-break: break-word;
        line-height: 1.5;
      }
      .option-button:hover {
        background-color: #0a7aff;
        border-color: #0a7aff;
        color: #fff;
        transform: translateY(-2px);
      }
    </style>
  </head>
  <body>
    <div class="chat-wrapper">
      <div class="chat-container" id="chat"></div>
      <div class="input-bar">
        <textarea id="chatInput" placeholder="הקלד משהו..." rows="1"></textarea>
        <button id="sendBtn">⬆️</button>
      </div>
    </div>

    <script>
      window.__dabrooChatConfig = {
        title: 'Dabroo AI',
        starters: [
          "מה ההבדל בין לשאול את צ׳אטג׳יפיטי בעברית — לבין להשתמש בדברו?",
          "איך דברו יכול לעזור לי אם אני לא איש שיווק?",
          "מה בדיוק אני מקבל אם אני קונה את דברו?",
          "למה כשאני כותב פרומפטים בצ׳אטג׳יפיטי — זה יוצא משעמם או רובוטי?",
          "תלמד אותי איך לכתוב פרומפט טוב בעברית.",
          "מה בדיוק מקבלים בדברו? ואיך זה שונה מכלים אחרים?"
        ],
        startBranch: 'WHAT_IS_DABROO'
      };
    </script>

    <script>
      // Load external logic (chat logic and branches are assumed to be inline or injected here)
    </script>
  </body>
</html>
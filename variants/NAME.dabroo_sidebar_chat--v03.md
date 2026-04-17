{% layout none %}
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dabroo AI</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
      background-color: #212121 !important;
      font-family: "Segoe UI", "Noto Sans Hebrew", "Inter", sans-serif;
      color: #ececec;
      direction: rtl;
    }
    .dabroo-app {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      background-color: #212121;
    }
    header, .site-header, .announcement-bar,
    .shopify-section-header, .main-content, .page-width {
      display: none !important;
    }
    .sidebar {
      width: 280px;
      height: 100vh;
      background-color: #1e1e1e;
      position: fixed;
      right: -280px;
      top: 0;
      transition: right 0.3s ease;
      z-index: 1000;
      padding: 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    .sidebar.open {
      right: 0;
    }
    .sidebar-toggle {
      position: absolute;
      top: 12px;
      right: 12px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1100;
    }
    .sidebar-toggle img {
      width: 24px;
      height: 24px;
    }
    .sidebar-overlay {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 900;
      background: rgba(0, 0, 0, 0.4);
    }
    .sidebar.open + .sidebar-overlay {
      display: block;
    }
  </style>
</head>
<body>
<div class="dabroo-app">
  <button class="sidebar-toggle" onclick="toggleSidebar()">
    <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/sidebar.png?v=1747034371" alt="Sidebar" />
  </button>
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <img src="https://via.placeholder.com/24" alt="logo" class="sidebar-logo" />
    </div>
    <!-- Add your sidebar links here -->
  </aside>
  <div class="sidebar-overlay" onclick="toggleSidebar()"></div>
  <div class="chat-wrapper">
    <div class="chat-top-bar">
      <div class="chat-title-wrapper">
        <span class="chat-title">Dabroo AI</span>
      </div>
    </div>
    <div class="chat-container" id="chat"></div>
    <div class="chat-input-bar">
      <div class="input-shell">
        <div class="input-row">
          <textarea id="chatInput" placeholder="..." disabled rows="1"></textarea>
          <button id="sendBtn" class="send-btn">
            <svg viewBox="0 0 24 24">
              <path d="M7 11h9.17l-3.59-3.59L14 6l6 6-6 6-1.41-1.41L16.17 13H7v-2z"/>
            </svg>
          </button>
        </div>
        <div class="chat-action-bar">
          <button><span class="icon">🎨</span><span class="btn-text">Create image</span></button>
          <button><span class="icon">🚀</span><span class="btn-text">Deep research</span></button>
          <button><span class="icon">🌐</span><span class="btn-text">Search</span></button>
        </div>
      </div>
    </div>
    <div class="input-meta">
      <div class="input-counter" id="charWordCounter">0 characters / 0 words</div>
      <div class="input-disclaimer">Dabroo can make mistakes. Check important info.</div>
    </div>
  </div>
</div>
<script>
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      toggleSidebar();
    }
  });
</script>
</body>
</html>
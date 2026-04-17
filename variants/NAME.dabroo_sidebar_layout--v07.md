{% layout none %}

<!-- Force mobile viewport inside body -->
<script>
  const vp = document.createElement('meta');
  vp.name = "viewport";
  vp.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(vp);
</script>

{% schema %}
{
  "name": "Chat Homepage",
  "settings": []
}
{% endschema %}

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #212121;
    font-family: "Segoe UI", "Noto Sans Hebrew", "Inter", sans-serif;
    color: #ececec;
    direction: rtl;
    overflow: hidden;
  }

  .chat-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  .chat-container {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 680px;
    width: 100%;
    padding: 20px 20px 100px;
    box-sizing: border-box;
    margin: 0 auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  }

  .chat-top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #212121;
    padding: 6px 12px;
    height: 48px;
    position: sticky;
    top: 0;
    z-index: 20;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  .chat-title-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    font-size: 0.95rem;
    color: #ececec;
    user-select: none;
  }

  .sidebar-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 98;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 280px;
    background: #181818;
    color: #fff;
    padding: 20px;
    box-shadow: -2px 0 6px rgba(0,0,0,0.4);
    z-index: 99;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .sidebar-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .sidebar-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .sidebar-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar-menu li {
    margin-bottom: 16px;
  }

  .sidebar-menu a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s ease;
  }

  .sidebar-menu a:hover {
    color: #0a7aff;
  }

  .hidden {
    display: none;
  }
</style>

<div class="chat-wrapper">
  <div class="chat-top-bar">
    <button class="sidebar-toggle" onclick="toggleSidebar()">
      <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/sidebar.png?v=1747034371" alt="Sidebar" width="20" height="20">
    </button>

    <div class="chat-title-wrapper">
      <span class="chat-title">Dabroo AI</span>
      <svg class="dropdown-icon" width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M7 10l5 5 5-5" stroke="#ececec" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  </div>

  <div id="sidebarOverlay" class="sidebar-overlay" onclick="toggleSidebar()"></div>

  <aside id="sidebar" class="sidebar">
    <div class="sidebar-header">
      <span class="sidebar-title">תפריט</span>
    </div>
    <div class="sidebar-search">
      <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/ai-search.png?v=1747034371" alt="Search" width="20" height="20" />
      <input type="text" placeholder="חיפוש..." style="flex: 1; padding: 6px 10px; border-radius: 6px; border: none; background: #2a2a2a; color: white;" />
    </div>
    <ul class="sidebar-menu">
      <li><a href="/">דף הבית</a></li>
      <li><a href="/pages/starter-pack">סטארטר פאק</a></li>
      <li><a href="/pages/contact">צור קשר</a></li>
      <li><a href="/account">התחברות</a></li>
    </ul>
  </aside>

  <div class="chat-container" id="chat">
    <h1>ברוך הבא ל-Dabroo AI</h1>
    <p>זה אזור תוכן לבדיקה — אתה רואה את הדף שלך במצב עריכה.</p>
    <p>כאן תוכל להוסיף צ'אט, תוכן נוסף, שדות או כל דבר אחר.</p>
  </div>
</div>

<script>
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

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
{% layout none %}
{% schema %}
{
  "name": "Chat Homepage",
  "settings": []
}
{% endschema %}

<style>
/* === GLOBAL RESET + BASE === */
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

/* === SIDEBAR STYLES (MERGED) === */
.sidebar-toggle {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1100;
  background: none;
  border: none;
  cursor: pointer;
}
.sidebar-toggle img {
  width: 24px;
  height: 24px;
}
.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.4);
}
.sidebar.open + .sidebar-overlay {
  display: block;
}
.sidebar {
  width: 280px;
  height: 100vh;
  background-color: #1e1e1e;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  position: fixed;
  right: -280px;
  top: 0;
  z-index: 1000;
  transition: right 0.3s ease;
  overflow-y: auto;
}
.sidebar.open {
  right: 0;
}
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.sidebar-logo {
  width: 24px;
  height: 24px;
}
.sidebar-section {
  margin-bottom: 20px;
}
.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar-links li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
}
.sidebar-links li:hover {
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
}
.sidebar-links img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
.sidebar-group-title {
  font-size: 0.75rem;
  color: #bbb;
  margin: 12px 0 8px;
  padding-right: 8px;
  font-weight: bold;
  text-transform: uppercase;
}
.sidebar-search {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}
.sidebar-search input {
  background: #2a2a2a;
  border: 1px solid #444;
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 80%;
}
.sidebar-search img {
  width: 20px;
  height: 20px;
}
.view-plans {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #fff;
  text-decoration: none;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.1);
}
.badge {
  background: #555;
  color: #fff;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 12px;
  margin-right: auto;
}
.spacer {
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin: 10px 0;
}
@media (max-width: 768px) {
  .sidebar {
    width: 220px;
  }
}
</style>

<!-- ✅ Sidebar toggle button -->
<button class="sidebar-toggle" onclick="toggleSidebar()">
  <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/sidebar.png?v=1747034371" alt="Toggle Sidebar" />
</button>

<!-- ✅ Sidebar -->
<aside class="sidebar" id="sidebar">
  <div class="sidebar-header">
    <img src="https://via.placeholder.com/24" alt="logo" class="sidebar-logo" />
  </div>
  <div class="sidebar-search">
    <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/ai-search.png?v=1747034371" alt="Search" />
    <input type="text" placeholder="חיפוש..." />
  </div>
  <nav class="sidebar-section">
    <ul class="sidebar-links">
      <li><img src="https://via.placeholder.com/20" alt="ChatGPT" /> <span>ChatGPT</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Sora" /> <span>Sora</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Library" /> <span>Library</span> <span class="badge">52</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Hebrew Trans" /> <span>HEBREW TRANS...</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Ecom 360" /> <span>E-Commerce 360</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Shopify" /> <span>Ultimate Shopify</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Flowers" /> <span>Forever Flowers</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Forever Mar" /> <span>The Forever Mar...</span></li>
      <li class="spacer"></li>
      <li><img src="https://via.placeholder.com/20" alt="CapCut" /> <span>CapCut VideoGPT</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Explore GPTs" /> <span>Explore GPTs</span></li>
    </ul>
  </nav>
  <div class="sidebar-group-title">Projects</div>
  <nav class="sidebar-section">
    <ul class="sidebar-links">
      <li><img src="https://via.placeholder.com/20" alt="Dabroo AI" /> <span>DABROO AI</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Forever Mktg" /> <span>FOREVER MARKETING</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Deliveries" /> <span>DELIVERIES</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Side Hustle" /> <span>SIDE HUSTLE</span></li>
      <li><img src="https://via.placeholder.com/20" alt="Self Journal" /> <span>SELF JOURNAL</span></li>
    </ul>
  </nav>
  <a href="#" class="view-plans">
    <img src="https://via.placeholder.com/20" alt="Plans" />
    <span>View plans</span>
  </a>
</aside>
<div class="sidebar-overlay" onclick="toggleSidebar()"></div>

<!-- 🔁 Sidebar Script -->
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

<!-- ✅ Continue with rest of chat wrapper, input, and message logic here... -->
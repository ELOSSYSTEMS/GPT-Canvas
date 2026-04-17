<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dabroo Sidebar Test</title>
  <style>
    body {
      margin: 0;
      background-color: #121212;
      color: white;
      font-family: "Segoe UI", "Noto Sans Hebrew", sans-serif;
    }

    .dabroo-layout {
      display: flex;
      flex-direction: row-reverse;
      direction: rtl;
    }

    .main-content {
      flex: 1;
      padding: 32px;
    }

    .sidebar-toggle {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 1100;
      background: none;
      border: none;
      cursor: pointer;
    }

    .sidebar-toggle img {
      width: 24px;
      height: 24px;
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
      justify-content: space-between;
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
      margin-bottom: 20px;
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
</head>
<body>
  <button class="sidebar-toggle" onclick="toggleSidebar()">
    <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/sidebar.png?v=1747034371" alt="Toggle Sidebar" />
  </button>

  <div class="dabroo-layout">
    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <img src="https://via.placeholder.com/24" alt="logo" class="sidebar-logo" />
        <button class="sidebar-toggle" onclick="toggleSidebar()">✕</button>
      </div>

      <div class="sidebar-search">
        <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/ai-search.png?v=1747034371" alt="Search" />
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

    <!-- Main Content -->
    <main class="main-content">
      <h1>ברוך הבא ל-Dabroo AI</h1>
      <p>זהו עמוד בדיקה לוודא שה-sidebar פועל ומוצג כהלכה.</p>
      <p>תוכל להוסיף כאן כל תוכן שתרצה.</p>
    </main>
  </div>

  <script>
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('open');
    }
  </script>
</body>
</html>
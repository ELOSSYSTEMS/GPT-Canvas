<!-- Canvas: 005.43 ELO.2025 -->
<!-- Purpose: Base scaffold for ELos extension (API-less, shippable prototype) -->

<!-- Sidebar Layout -->
<div id="elos-sidebar" class="elos-sidebar hidden">
  <nav class="elos-nav">
    <ul>
      <li class="elos-nav-item active" data-module="canvas">Canvas</li>
      <li class="elos-nav-item" data-module="personas">Personas</li>
      <li class="elos-nav-item" data-module="flows">Flows</li>
      <li class="elos-nav-item" data-module="journal">Journal</li>
    </ul>
  </nav>
  <section id="elos-content">
    <!-- Dynamic Module Mount -->
  </section>
</div>

<!-- Toggle Button -->
<button id="elos-toggle">☰</button>

<!-- Styles -->
<style>
  #elos-sidebar {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 320px;
    background: #1e1e1e;
    color: white;
    box-shadow: -2px 0 6px rgba(0,0,0,0.2);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 9999;
  }

  #elos-sidebar.visible {
    transform: translateX(0);
  }

  #elos-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    background: #333;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .elos-nav {
    padding: 1rem;
  }

  .elos-nav-item {
    margin: 0.5rem 0;
    cursor: pointer;
  }

  .elos-nav-item.active {
    font-weight: bold;
    color: #00d8ff;
  }

  #elos-content {
    padding: 1rem;
  }
</style>

<!-- Script -->
<script>
  const sidebar = document.getElementById('elos-sidebar');
  const toggle = document.getElementById('elos-toggle');

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
  });

  document.querySelectorAll('.elos-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.elos-nav-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      const module = item.getAttribute('data-module');
      document.getElementById('elos-content').innerHTML = `<div>${module} module loaded...</div>`;
    });
  });
</script>
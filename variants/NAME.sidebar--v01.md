{% schema %}
{
  "name": "Sidebar Navigation",
  "settings": [],
  "blocks": [
    {
      "type": "link",
      "name": "Sidebar Link",
      "settings": [
        { "type": "text", "id": "title", "label": "Title" },
        { "type": "url", "id": "url", "label": "Link" },
        { "type": "image_picker", "id": "icon", "label": "Icon (optional)" }
      ]
    }
  ]
}
{% endschema %}

<aside class="sidebar" id="sidebar">
  <div class="sidebar-header-icons" style="display: flex; justify-content: flex-start; margin-bottom: 16px;">
    <button id="sidebarCloseBtn" aria-label="Close sidebar" style="background: none; border: none; cursor: pointer;">
      <img src="https://cdn.shopify.com/s/files/1/0658/9595/6615/files/sidebar.png?v=1747034371" alt="Close" style="width: 32px;" />
    </button>
  </div>

  <ul class="sidebar-links">
    {% for block in section.blocks %}
      <li>
        <a href="{{ block.settings.url }}" style="display: flex; align-items: center; gap: 10px; color: inherit; text-decoration: none; width: 100%;">
          {% if block.settings.icon != blank %}
            <img src="{{ block.settings.icon | img_url: '32x' }}" style="width: 18px; filter: brightness(0) invert(1);" />
          {% endif %}
          <span>{{ block.settings.title }}</span>
        </a>
      </li>
    {% endfor %}
  </ul>

  <div style="margin-top: auto; font-size: 0.8rem; text-align: center; padding: 16px 0;">
    <a href="#" style="color: #0a7aff;">View plans</a><br />
    <span style="font-size: 0.7rem; color: #777;">Unlimited access, team workspace</span>
  </div>
</aside>

<div class="sidebar-overlay" onclick="toggleSidebar()"></div>
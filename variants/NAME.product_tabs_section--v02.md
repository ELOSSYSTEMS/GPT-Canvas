{% comment %}
  Forever Flowers Product Tabs Section
  - Dynamic tabs via blocks
  - Each block defines: Heading (rich text) + Content (metafield or rich text)
  - Supports both RTL (he) and LTR (en) via locale check
{% endcomment %}

{% assign text_direction = 'ltr' %}
{% if request.locale.iso_code == 'he' %}
  {% assign text_direction = 'rtl' %}
{% endif %}

<section class="product-tabs" dir="{{ text_direction }}">
  <div class="tabs-wrapper">
    <ul class="tabs-nav">
      {% for block in section.blocks %}
        <li class="tab-link {% if forloop.first %}active{% endif %}" data-tab="tab-{{ forloop.index }}">
          {{ block.settings.tab_heading }}
        </li>
      {% endfor %}
    </ul>

    <div class="tabs-content">
      {% for block in section.blocks %}
        <div id="tab-{{ forloop.index }}" class="tab-content {% if forloop.first %}active{% endif %}">
          {{ block.settings.tab_content }}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const target = this.dataset.tab;
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(target).classList.add('active');
      });
    });
  });
</script>

<style>
  .tabs-wrapper {
    margin-top: 2rem;
  }
  .tabs-nav {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #eee;
    gap: 2rem;
    justify-content: flex-start;
  }
  [dir="rtl"] .tabs-nav {
    justify-content: flex-end;
  }
  .tab-link {
    padding: 0.5rem 0;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    font-weight: 500;
    color: #333;
    white-space: nowrap;
  }
  .tab-link.active {
    border-color: #000;
    font-weight: 700;
  }
  .tab-content {
    display: none;
    padding: 1rem 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #444;
  }
  .tab-content.active {
    display: block;
  }
</style>

{% schema %}
{
  "name": "Product Info Tabs",
  "tag": "section",
  "class": "product-tabs-section",
  "settings": [],
  "blocks": [
    {
      "type": "tab",
      "name": "Tab",
      "settings": [
        {
          "type": "richtext",
          "id": "tab_heading",
          "label": "Tab Heading"
        },
        {
          "type": "richtext",
          "id": "tab_content",
          "label": "Tab Content (can include metafields)"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Product Tabs",
      "category": "Product",
      "blocks": [
        {
          "type": "tab",
          "settings": {
            "tab_heading": "<p>פרטים</p>",
            "tab_content": "<p>{{ product.metafields.custom.description_long }}</p>"
          }
        }
      ]
    }
  ]
}
{% endschema %}
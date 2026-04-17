{% comment %}
  Custom Gallery Page Template – “Bouquets We Have Made”
  Theme: Prestige (Shopify 2.0)
{% endcomment %}

{% layout 'page' %}

<section class="bouquet-gallery-page page-width">
  <div class="section-header">
    <h1 class="h2 text-center">Bouquets We Have Made</h1>
  </div>

  <div class="bouquet-gallery-grid">
    {% for block in section.blocks %}
      <div class="bouquet-gallery-item">
        <a href="{{ block.settings.image | img_url: 'master' }}" class="lightbox-link" data-caption="{{ block.settings.caption }}">
          <img
            src="{{ block.settings.image | img_url: '600x' }}"
            alt="{{ block.settings.caption | escape }}"
            loading="lazy"
          />
        </a>
        {% if block.settings.caption != blank %}
          <p class="gallery-caption">{{ block.settings.caption }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</section>

<style>
.bouquet-gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 2rem;
}

.bouquet-gallery-item img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
  border-radius: 6px;
}

.bouquet-gallery-item:hover img {
  transform: scale(1.03);
}

.gallery-caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  color: #444;
}

.section-header h1 {
  margin-bottom: 1rem;
}
</style>

{% schema %}
{
  "name": "Bouquet Gallery",
  "settings": [],
  "blocks": [
    {
      "type": "image",
      "name": "Bouquet Image",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "text",
          "id": "caption",
          "label": "Caption (Optional)",
          "default": ""
        }
      ]
    }
  ],
  "max_blocks": 50,
  "presets": [
    {
      "name": "Bouquet Gallery"
    }
  ]
}
{% endschema %}
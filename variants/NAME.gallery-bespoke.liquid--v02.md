{% schema %}
{
  "name": "Bespoke Gallery",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Section Title",
      "default": "תיק העבודות שלנו"
    }
  ],
  "blocks": [
    {
      "type": "image",
      "name": "Gallery Image",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "select",
          "id": "ratio",
          "label": "Image Ratio",
          "default": "1:1",
          "options": [
            {"value": "1:1", "label": "1:1 (Square)"},
            {"value": "3:4", "label": "3:4 (Portrait)"},
            {"value": "2:3", "label": "2:3 (Classic Portrait)"},
            {"value": "4:3", "label": "4:3 (Landscape)"},
            {"value": "3:2", "label": "3:2 (Classic Landscape)"},
            {"value": "16:9", "label": "16:9 (Widescreen)"},
            {"value": "9:16", "label": "9:16 (1080x1920 Story)"}
          ]
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Bespoke Gallery",
      "category": "Custom Sections",
      "blocks": [
        {"type": "image"},
        {"type": "image"},
        {"type": "image"}
      ]
    }
  ]
}
{% endschema %}

{% stylesheet %}
.bespoke-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 2rem 1rem;
}

.bespoke-gallery img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.bespoke-gallery img[data-ratio="1:1"] {
  aspect-ratio: 1 / 1;
}
.bespoke-gallery img[data-ratio="3:4"] {
  aspect-ratio: 3 / 4;
}
.bespoke-gallery img[data-ratio="2:3"] {
  aspect-ratio: 2 / 3;
}
.bespoke-gallery img[data-ratio="4:3"] {
  aspect-ratio: 4 / 3;
}
.bespoke-gallery img[data-ratio="3:2"] {
  aspect-ratio: 3 / 2;
}
.bespoke-gallery img[data-ratio="16:9"] {
  aspect-ratio: 16 / 9;
}
.bespoke-gallery img[data-ratio="9:16"] {
  aspect-ratio: 9 / 16;
}
{% endstylesheet %}

<section class="bespoke-gallery">
  {% if section.settings.title != blank %}
    <h2 style="text-align:center; margin-bottom: 1.5rem;">{{ section.settings.title }}</h2>
  {% endif %}

  {% for block in section.blocks %}
    {% if block.settings.image != blank %}
      <img
        src="{{ block.settings.image | image_url }}"
        alt="Bespoke Image {{ forloop.index }}"
        data-ratio="{{ block.settings.ratio }}"
        loading="lazy"
      >
    {% endif %}
  {% endfor %}
</section>
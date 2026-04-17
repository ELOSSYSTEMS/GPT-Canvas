{% schema %}
{
  "name": "Ultimate Hero Section",
  "tag": "section",
  "class": "ultimate-hero",
  "settings": [
    { "type": "select", "id": "layout", "label": "Layout Type", "options": [ { "value": "split", "label": "Image + Text (Side by Side)" }, { "value": "banner", "label": "Text Over Background Image" } ], "default": "split" },
    { "type": "select", "id": "image_position", "label": "Image Side (Split Layout)", "options": [ { "value": "left", "label": "Left" }, { "value": "right", "label": "Right" } ], "default": "right" },
    { "type": "checkbox", "id": "reverse_on_mobile", "label": "Reverse Stacking on Mobile", "default": true },
    { "type": "image_picker", "id": "main_image", "label": "Main Image" },
    { "type": "color", "id": "bg_color", "label": "Background Color", "default": "#F5F5F5" },
    { "type": "image_picker", "id": "bg_image", "label": "Background Image (Banner Layout Only)" },
    { "type": "range", "id": "overlay_opacity", "label": "Overlay Opacity (Banner)", "min": 0, "max": 100, "step": 5, "default": 30 },
    { "type": "color", "id": "overlay_color", "label": "Overlay Color", "default": "#000000" },
    { "type": "text", "id": "headline", "label": "Headline", "default": "Make the most powerful first impression" },
    { "type": "textarea", "id": "subtext", "label": "Subheading", "default": "Convert more visitors with a stunning, customizable hero block." },
    { "type": "select", "id": "text_align", "label": "Text Alignment", "options": [ { "value": "left", "label": "Left" }, { "value": "center", "label": "Center" }, { "value": "right", "label": "Right" } ], "default": "center" },
    { "type": "select", "id": "text_size", "label": "Font Size", "options": [ { "value": "sm", "label": "Small" }, { "value": "md", "label": "Medium" }, { "value": "lg", "label": "Large" } ], "default": "md" },
    { "type": "color", "id": "text_color", "label": "Text Color", "default": "#000000" },
    { "type": "text", "id": "button_text", "label": "Primary Button Text", "default": "Shop Now" },
    { "type": "url", "id": "button_link", "label": "Primary Button Link" },
    { "type": "checkbox", "id": "show_secondary_button", "label": "Show Secondary CTA", "default": false },
    { "type": "text", "id": "secondary_button_text", "label": "Secondary Button Text" },
    { "type": "url", "id": "secondary_button_link", "label": "Secondary Button Link" },
    { "type": "checkbox", "id": "rounded_corners", "label": "Rounded Container", "default": true },
    { "type": "range", "id": "padding_vertical", "label": "Vertical Padding (px)", "min": 20, "max": 160, "step": 10, "default": 80 }
  ],
  "presets": [
    { "name": "Ultimate Hero", "category": "Custom" }
  ]
}
{% endschema %}

{% style %}
.ultimate-hero {
  position: relative;
  overflow: hidden;
}
.ultimate-hero .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: {{ section.settings.text_align }};
  padding: {{ section.settings.padding_vertical }}px 20px;
  background-color: {{ section.settings.bg_color }};
  {% if section.settings.bg_image %}
    background-image: url({{ section.settings.bg_image | img_url: 'master' }});
    background-size: cover;
    background-position: center;
  {% endif %}
  border-radius: {% if section.settings.rounded_corners %}32px{% else %}0{% endif %};
}
.ultimate-hero .overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: {{ section.settings.overlay_color }};
  opacity: {{ section.settings.overlay_opacity | divided_by: 100.0 }};
  z-index: 0;
}
.ultimate-hero .content {
  position: relative;
  z-index: 1;
  color: {{ section.settings.text_color }};
  max-width: 800px;
}
.ultimate-hero h1 {
  font-size: {% if section.settings.text_size == 'lg' %}3rem{% elsif section.settings.text_size == 'md' %}2.25rem{% else %}1.5rem{% endif %};
  margin-bottom: 20px;
}
.ultimate-hero p {
  font-size: 1.125rem;
  margin-bottom: 30px;
  line-height: 1.6;
}
.ultimate-hero .buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.ultimate-hero a.btn {
  padding: 12px 24px;
  background-color: black;
  color: white;
  border-radius: 32px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease;
}
.ultimate-hero a.btn:hover {
  transform: scale(1.05);
}
.ultimate-hero .image {
  margin-top: 40px;
  max-width: 500px;
}
{% endstyle %}

<section class="ultimate-hero">
  <div class="container">
    {% if section.settings.bg_image %}<div class="overlay"></div>{% endif %}
    <div class="content">
      <h1>{{ section.settings.headline }}</h1>
      <p>{{ section.settings.subtext }}</p>
      <div class="buttons">
        <a href="{{ section.settings.button_link }}" class="btn">{{ section.settings.button_text }}</a>
        {% if section.settings.show_secondary_button %}
        <a href="{{ section.settings.secondary_button_link }}" class="btn" style="background: white; color: black; border: 2px solid black;">{{ section.settings.secondary_button_text }}</a>
        {% endif %}
      </div>
    </div>
    {% if section.settings.main_image %}
    <div class="image">
      <img src="{{ section.settings.main_image | img_url: 'master' }}" alt="Hero image" style="width: 100%; border-radius: 16px; box-shadow: 0 12px 30px rgba(0,0,0,0.2);">
    </div>
    {% endif %}
  </div>
</section>
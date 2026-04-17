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
    { "type": "color", "id": "headline_color", "label": "Headline Text Color", "default": "#000000" },
    { "type": "range", "id": "headline_size", "label": "Headline Font Size (px)", "min": 18, "max": 96, "step": 2, "default": 42 },

    { "type": "textarea", "id": "subtext", "label": "Subheading", "default": "Convert more visitors with a stunning, customizable hero block." },
    { "type": "color", "id": "subtext_color", "label": "Subheading Color", "default": "#000000" },
    { "type": "range", "id": "subtext_size", "label": "Subheading Font Size (px)", "min": 12, "max": 48, "step": 1, "default": 18 },

    { "type": "select", "id": "text_align", "label": "Text Alignment", "options": [ { "value": "left", "label": "Left" }, { "value": "center", "label": "Center" }, { "value": "right", "label": "Right" } ], "default": "center" },

    { "type": "select", "id": "text_vertical_position", "label": "Text Vertical Position (Banner)", "options": [ { "value": "top", "label": "Top" }, { "value": "middle", "label": "Middle" }, { "value": "bottom", "label": "Bottom" } ], "default": "middle" },

    { "type": "text", "id": "button_text", "label": "Primary Button Text", "default": "Shop Now" },
    { "type": "url", "id": "button_link", "label": "Primary Button Link" },
    { "type": "select", "id": "button_style", "label": "Primary Button Style", "options": [ { "value": "solid", "label": "Solid" }, { "value": "outline", "label": "Outline" }, { "value": "ghost", "label": "Ghost" } ], "default": "solid" },
    { "type": "color", "id": "button_bg", "label": "Button Background Color", "default": "#000000" },
    { "type": "color", "id": "button_text_color", "label": "Button Text Color", "default": "#ffffff" },
    { "type": "select", "id": "button_position", "label": "Button Alignment", "options": [ { "value": "left", "label": "Left" }, { "value": "center", "label": "Center" }, { "value": "right", "label": "Right" } ], "default": "center" },

    { "type": "checkbox", "id": "show_secondary_button", "label": "Show Secondary CTA", "default": false },
    { "type": "text", "id": "secondary_button_text", "label": "Secondary Button Text" },
    { "type": "url", "id": "secondary_button_link", "label": "Secondary Button Link" },

    { "type": "checkbox", "id": "rounded_corners", "label": "Rounded Container", "default": true },
    { "type": "range", "id": "padding_vertical", "label": "Vertical Padding (px)", "min": 20, "max": 160, "step": 10, "default": 80 },

    { "type": "select", "id": "text_animation", "label": "Text Animation", "options": [ { "value": "none", "label": "None" }, { "value": "fade-in", "label": "Fade In" }, { "value": "slide-up", "label": "Slide Up" }, { "value": "zoom-in", "label": "Zoom In" } ], "default": "fade-in" },

    { "type": "checkbox", "id": "enable_parallax", "label": "Enable Parallax on Background Image", "default": false },
    { "type": "checkbox", "id": "enable_image_parallax", "label": "Enable Parallax on Foreground Image", "default": false }
  ],
  "presets": [
    { "name": "Ultimate Hero", "category": "Custom" }
  ]
}
{% endschema %}

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.ultimate-hero-parallax-image');
    const bg = document.querySelector('.ultimate-hero');

    if ({{ section.settings.enable_image_parallax }}) {
      window.addEventListener('scroll', () => {
        if (image) {
          const offset = window.scrollY * 0.15;
          image.style.transform = `translateY(${offset}px)`;
        }
      });
    }

    if ({{ section.settings.enable_parallax }}) {
      bg.style.backgroundAttachment = 'fixed';
    }
  });
</script>

<style>
  .ultimate-hero {
    position: relative;
    overflow: hidden;
    background-color: {{ section.settings.bg_color }};
    {% if section.settings.bg_image %}
      background-image: url({{ section.settings.bg_image | img_url: 'master' }});
      background-size: cover;
      background-position: center;
    {% endif %}
    border-radius: {% if section.settings.rounded_corners %}32px{% else %}0{% endif %};
    padding: {{ section.settings.padding_vertical }}px 20px;
    text-align: {{ section.settings.text_align }};
  }
  .ultimate-hero .overlay {
    position: absolute;
    inset: 0;
    background-color: {{ section.settings.overlay_color }};
    opacity: {{ section.settings.overlay_opacity | divided_by: 100.0 }};
    z-index: 0;
  }
  .ultimate-hero .container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: {{ section.settings.text_align }};
    justify-content: {{ section.settings.text_vertical_position }};
  }
  .ultimate-hero .text-content {
    animation: {{ section.settings.text_animation }} 1s ease forwards;
    color: {{ section.settings.headline_color }};
  }
  .ultimate-hero h1 {
    font-size: {{ section.settings.headline_size }}px;
    color: {{ section.settings.headline_color }};
    margin-bottom: 20px;
  }
  .ultimate-hero p {
    font-size: {{ section.settings.subtext_size }}px;
    color: {{ section.settings.subtext_color }};
    margin-bottom: 30px;
  }
  .ultimate-hero .buttons {
    display: flex;
    gap: 12px;
    justify-content: {{ section.settings.button_position }};
  }
  .ultimate-hero a.btn {
    padding: 12px 24px;
    border-radius: 32px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }
  .ultimate-hero a.btn.primary {
    background-color: {{ section.settings.button_bg }};
    color: {{ section.settings.button_text_color }};
    border: {% if section.settings.button_style == 'outline' %} 2px solid {{ section.settings.button_text_color }} {% else %} none {% endif %};
    background: {% if section.settings.button_style == 'ghost' %} transparent {% else %} {{ section.settings.button_bg }} {% endif %};
  }
  .ultimate-hero a.btn.secondary {
    background: white;
    color: black;
    border: 2px solid black;
  }
  .ultimate-hero img {
    width: 100%;
    max-width: 500px;
    margin-top: 30px;
    border-radius: 16px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
  @keyframes slide-up { 0% { transform: translateY(50px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
  @keyframes zoom-in { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
</style>

<section class="ultimate-hero">
  {% if section.settings.bg_image %}<div class="overlay"></div>{% endif %}
  <div class="container">
    <div class="text-content">
      <h1>{{ section.settings.headline }}</h1>
      <p>{{ section.settings.subtext }}</p>
      <div class="buttons">
        <a href="{{ section.settings.button_link }}" class="btn primary">{{ section.settings.button_text }}</a>
        {% if section.settings.show_secondary_button %}
        <a href="{{ section.settings.secondary_button_link }}" class="btn secondary">{{ section.settings.secondary_button_text }}</a>
        {% endif %}
      </div>
    </div>
    {% if section.settings.main_image %}
    <div class="ultimate-hero-parallax-image">
      <img src="{{ section.settings.main_image | img_url: 'master' }}" alt="Hero image">
    </div>
    {% endif %}
  </div>
</section>
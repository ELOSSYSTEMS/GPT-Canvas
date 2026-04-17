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
{% schema %}
{
  "name": "Ultimate Hero Section",
  "tag": "section",
  "class": "ultimate-hero",
  "settings": [
    {
      "type": "select",
      "id": "layout",
      "label": "Layout Type",
      "options": [
        { "value": "split", "label": "Image + Text (Side by Side)" },
        { "value": "banner", "label": "Text Over Background Image" }
      ],
      "default": "split"
    },
    {
      "type": "select",
      "id": "image_position",
      "label": "Image Side (Split Layout)",
      "options": [
        { "value": "left", "label": "Left" },
        { "value": "right", "label": "Right" }
      ],
      "default": "right"
    },
    {
      "type": "checkbox",
      "id": "reverse_on_mobile",
      "label": "Reverse Stacking on Mobile",
      "default": true
    },
    {
      "type": "image_picker",
      "id": "main_image",
      "label": "Main Image"
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Background Color",
      "default": "#F5F5F5"
    },
    {
      "type": "image_picker",
      "id": "bg_image",
      "label": "Background Image (Banner Layout Only)"
    },
    {
      "type": "range",
      "id": "overlay_opacity",
      "label": "Overlay Opacity (Banner)",
      "min": 0,
      "max": 100,
      "step": 5,
      "default": 30
    },
    {
      "type": "color",
      "id": "overlay_color",
      "label": "Overlay Color",
      "default": "#000000"
    },
    {
      "type": "text",
      "id": "headline",
      "label": "Headline",
      "default": "Make the most powerful first impression"
    },
    {
      "type": "textarea",
      "id": "subtext",
      "label": "Subheading",
      "default": "Convert more visitors with a stunning, customizable hero block."
    },
    {
      "type": "select",
      "id": "text_align",
      "label": "Text Alignment",
      "options": [
        { "value": "left", "label": "Left" },
        { "value": "center", "label": "Center" },
        { "value": "right", "label": "Right" }
      ],
      "default": "center"
    },
    {
      "type": "select",
      "id": "text_size",
      "label": "Font Size",
      "options": [
        { "value": "sm", "label": "Small" },
        { "value": "md", "label": "Medium" },
        { "value": "lg", "label": "Large" }
      ],
      "default": "md"
    },
    {
      "type": "color",
      "id": "text_color",
      "label": "Text Color",
      "default": "#000000"
    },
    {
      "type": "text",
      "id": "button_text",
      "label": "Primary Button Text",
      "default": "Shop Now"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Primary Button Link"
    },
    {
      "type": "checkbox",
      "id": "show_secondary_button",
      "label": "Show Secondary CTA",
      "default": false
    },
    {
      "type": "text",
      "id": "secondary_button_text",
      "label": "Secondary Button Text"
    },
    {
      "type": "url",
      "id": "secondary_button_link",
      "label": "Secondary Button Link"
    },
    {
      "type": "checkbox",
      "id": "rounded_corners",
      "label": "Rounded Container",
      "default": true
    },
    {
      "type": "range",
      "id": "padding_vertical",
      "label": "Vertical Padding (px)",
      "min": 20,
      "max": 160,
      "step": 10,
      "default": 80
    }
  ],
  "presets": [
    {
      "name": "Ultimate Hero",
      "category": "Custom"
    }
  ]
}
{% endschema %}

<!-- The full Liquid + HTML + CSS structure for this section will dynamically respond to all schema settings above. I will generate that next once you confirm you're happy with this schema definition. -->
{%- if section.blocks.size > 0 -%}
  {%- assign color_scheme_hash = section.settings.color_scheme.settings.background_gradient | default: section.settings.color_scheme.settings.background | md5 -%}

  <div class="section-spacing section-spacing--tight color-scheme color-scheme--{{ section.settings.color_scheme.id }} color-scheme--bg-{{ color_scheme_hash }} {% if section.settings.separate_section_with_border %}bordered-section{% endif %}" style="padding-top: {{ section.settings.top_padding }}px; padding-bottom: {{ section.settings.bottom_padding }}px;">
    <div class="container">
      <div class="v-stack gap-8 justify-center items-center">
        {%- capture section_content -%}
          {%- for block in section.blocks -%}
            <div class="logo-list__item" role="group" aria-label="{{ 'general.accessibility.item_nth_of_count' | t: index: forloop.index, count: section.blocks.size }}" {{ block.shopify_attributes }} style="display: flex; justify-content: center; align-items: center; margin-top: 0;">
              {%- liquid
                assign loading_strategy = nil
                if section.index <= 3 and forloop.position <= 3
                  assign loading_strategy = 'eager'
                endif
              -%}

              {%- if block.settings.custom_icon != blank -%}
                {%- capture sizes -%}{{ block.settings.icon_width }}px{%- endcapture -%}
                {%- capture widths -%}{{ block.settings.icon_width }}, {{ block.settings.icon_width | times: 2 | at_most: block.settings.custom_icon.width }}{%- endcapture -%}
                {%- capture style -%}--image-mobile-max-width: {{ block.settings.mobile_icon_width }}px; --image-max-width: {{ block.settings.icon_width }}px; display: block; margin: auto;{%- endcapture -%}
                {{- block.settings.custom_icon | image_url: width: block.settings.custom_icon.width | image_tag: loading: loading_strategy, sizes: sizes, widths: widths, class: 'constrained-image', style: style -}}
              {%- endif -%}
            </div>
          {%- endfor -%}
        {%- endcapture -%}

        <div class="logo-list text-with-icons--stacked" role="region" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 20px;">
          {{- section_content -}}
        </div>
      </div>
    </div>
  </div>
{%- endif -%}

{% schema %}
{
  "name": "Logo List",
  "class": "shopify-section--logo-list",
  "max_blocks": 10,
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color scheme",
      "default": "scheme-1"
    },
    {
      "type": "checkbox",
      "id": "separate_section_with_border",
      "label": "Separate section with border",
      "default": true
    },
    {
      "type": "range",
      "id": "top_padding",
      "label": "Top Padding",
      "min": 0,
      "max": 100,
      "unit": "px",
      "default": 20
    },
    {
      "type": "range",
      "id": "bottom_padding",
      "label": "Bottom Padding",
      "min": 0,
      "max": 100,
      "unit": "px",
      "default": 20
    }
  ],
  "blocks": [
    {
      "type": "item",
      "name": "Logo Item",
      "settings": [
        {
          "type": "image_picker",
          "id": "custom_icon",
          "label": "Logo Image"
        },
        {
          "type": "range",
          "id": "icon_width",
          "label": "Logo Width",
          "min": 16,
          "max": 300,
          "step": 4,
          "default": 128,
          "unit": "px"
        },
        {
          "type": "range",
          "id": "mobile_icon_width",
          "label": "Mobile Logo Width",
          "min": 16,
          "max": 300,
          "step": 4,
          "default": 128,
          "unit": "px"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Logo List"
    }
  ]
}
{% endschema %}
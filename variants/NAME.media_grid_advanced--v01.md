{%- if section.blocks.size > 0 -%}
  <style>
    #shopify-section-{{ section.id }} {
      --media-grid-row-height: {{ section.settings.mobile_row_height }}px;
      --media-grid-gap: {% if section.settings.spacing == 'xs' %}0.5rem{% elsif section.settings.spacing == 'sm' %}1rem{% elsif section.settings.spacing == 'md' %}1.5rem{% elsif section.settings.spacing == 'lg' %}2rem{% else %}0rem{% endif %};
      --media-grid-columns: {{ section.settings.columns }};

      {%- if section.settings.section_width == 'full' -%}
        --container-gutter: var(--media-grid-gap);
      {%- endif -%}

      {%- if section.settings.subheading == blank and section.settings.title == blank and section.settings.content == blank and section.settings.section_width == 'full' -%}
        --section-vertical-spacing-override: var(--media-grid-gap);
      {%- endif -%}
    }

    @media screen and (min-width: 700px) {
      #shopify-section-{{ section.id }} {
        --media-grid-row-height: {{ section.settings.desktop_row_height }}px;
      }
    }

    @media screen and (min-width: 1150px) {
      #shopify-section-{{ section.id }} {
        --media-grid-gap: {% if section.settings.spacing == 'xs' %}0.75rem{% elsif section.settings.spacing == 'sm' %}1.25rem{% elsif section.settings.spacing == 'md' %}1.875rem{% elsif section.settings.spacing == 'lg' %}2.5rem{% else %}0rem{% endif %};
      }
    }
  </style>

  {%- assign color_scheme_hash = section.settings.color_scheme.settings.background_gradient | default: section.settings.color_scheme.settings.background | md5 -%}

  <div class="section-spacing color-scheme color-scheme--{{ section.settings.color_scheme.id }} color-scheme--bg-{{ color_scheme_hash }} {% if section.settings.separate_section_with_border %}bordered-section{% endif %}">
    <div class="container {% unless section.settings.section_width == 'full' %}container--{{ section.settings.section_width }}{% endunless %}">
      <div class="section-stack">
        {%- render 'section-header', subheading: section.settings.subheading, heading: section.settings.title, content: section.settings.content -%}

        <media-grid class="media-grid">
          {%- for block in section.blocks -%}
            {%- capture block_content -%}
              <div class="content-over-media color-scheme color-scheme--{{ block.settings.color_scheme.id }} group" reveal-on-scroll="true" style="--content-over-media-overlay: {{ block.settings.overlay_color.rgb }} / {{ block.settings.overlay_opacity | divided_by: 100.0 }}; --tooltip-content: '{{ block.settings.tooltip_text }}';">
                {%- if block.type == 'image' -%}
                  {%- if block.settings.image -%}
                    {%- capture sizes_attribute -%}(max-width: 699px) 100vw, {{ block.settings.image_width }}px{%- endcapture -%}

                    {%- liquid
                      assign loading_strategy = 'lazy'

                      echo block.settings.image | image_url: width: block.settings.image.width | image_tag: loading: loading_strategy, sizes: sizes_attribute, widths: '200,300,400,500,600,700,800,1000,1200,1400,1600', class: 'zoom-image group-hover:zoom'
                    -%}
                  {%- endif -%}
                {%- else -%}
                  {%- if block.settings.video -%}
                    {%- render 'media', media: block.settings.video, autoplay: block.settings.autoplay, loop: true, controls: block.settings.show_controls -%}
                  {%- endif -%}
                {%- endif -%}

                {%- if block.settings.title != blank or block.settings.content != blank or block.settings.link_text != blank -%}
                  <div class="prose prose--tight {{ block.settings.text_position }}">
                    <p class="{{ block.settings.heading_tag }}">{{ block.settings.title }}</p>

                    {{- block.settings.content -}}

                    {%- if block.settings.link_text != blank -%}
                      {%- render 'button', content: block.settings.link_text, style: block.settings.link_style -%}
                    {%- endif -%}
                  </div>
                {%- endif -%}
              </div>
            {%- endcapture -%}

            {%- if block.settings.link_url -%}
              <a href="{{ block.settings.link_url }}" class="media-grid__item" style="--media-grid-item-column-span: {{ block.settings.column_count }}; --media-grid-item-row-span: {{ block.settings.row_count }}" {{ block.shopify_attributes }}>
                {{- block_content -}}
              </a>
            {%- else -%}
              <div class="media-grid__item" style="--media-grid-item-column-span: {{ block.settings.column_count }}; --media-grid-item-row-span: {{ block.settings.row_count }}" {{ block.shopify_attributes }}>
                {{- block_content -}}
              </div>
            {%- endif -%}
          {%- endfor -%}
        </media-grid>
      </div>
    </div>
  </div>
{%- endif -%}

{% schema %}
{
  "name": "Media Grid Advanced",
  "class": "shopify-section--media-grid",
  "tag": "section",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "Color Scheme",
      "default": "scheme-1"
    },
    {
      "type": "checkbox",
      "id": "separate_section_with_border",
      "label": "Separate Section with Border",
      "default": true
    },
    {
      "type": "range",
      "id": "desktop_row_height",
      "min": 100,
      "max": 400,
      "step": 10,
      "unit": "px",
      "label": "Desktop Row Height",
      "default": 290
    },
    {
      "type": "range",
      "id": "mobile_row_height",
      "min": 100,
      "max": 400,
      "step": 10,
      "unit": "px",
      "label": "Mobile Row Height",
      "default": 180
    },
    {
      "type": "select",
      "id": "columns",
      "label": "Number of Columns",
      "options": [
        { "value": "2", "label": "2 Columns" },
        { "value": "3", "label": "3 Columns" },
        { "value": "4", "label": "4 Columns" },
        { "value": "6", "label": "6 Columns" },
        { "value": "12", "label": "12 Columns" }
      ],
      "default": "3"
    },
    {
      "type": "select",
      "id": "section_width",
      "label": "Section Width",
      "options": [
        { "value": "xs", "label": "Extra Small" },
        { "value": "sm", "label": "Small" },
        { "value": "md", "label": "Medium" },
        { "value": "lg", "label": "Large" },
        { "value": "full", "label": "Full Width" }
      ],
      "default": "lg"
    },
    {
      "type": "select",
      "id": "spacing",
      "label": "Column Spacing",
      "options": [
        { "value": "none", "label": "None" },
        { "value": "xs", "label": "Extra Small" },
        { "value": "sm", "label": "Small" },
        { "value": "md", "label": "Medium" },
        { "value": "lg", "label": "Large" }
      ],
      "default": "md"
    }
  ],
  "blocks": [
    {
      "type": "image",
      "name": "Image Block",
      "settings": [
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "range",
          "id": "image_width",
          "label": "Image Width (px)",
          "min": 100,
          "max": 1600,
          "step": 50,
          "default": 400
        },
        {
          "type": "text",
          "id": "tooltip_text",
          "label": "Tooltip Text"
        },
        {
          "type": "range",
          "id": "overlay_opacity",
          "label": "Overlay Opacity",
          "min": 0,
          "max": 100,
          "step": 1,
          "default": 50
        }
      ]
    }
  ]
}
{% endschema %}
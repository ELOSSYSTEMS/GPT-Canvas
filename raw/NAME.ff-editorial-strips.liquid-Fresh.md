{% comment %}
  Section: ff-editorial-strips.liquid
  Purpose: Floralis-style editorial navigation tiles (desktop/tablet) + full-width strips (mobile)
  Notes:
  - Entire tile/strip is clickable when Link is set.
  - Mobile row height is controlled in vh via Theme Editor.
  - Desktop/tablet is a full-width, auto-wrapping flex mosaic of square-ish tiles.
{% endcomment %}

<section
  class="ff-strips"
  data-section-id="{{ section.id }}"
  aria-label="{{ section.settings.aria_label | escape }}"
  style="--ff-mobile-row-h: {{ section.settings.mobile_row_height_vh }}vh;"
>
  <div class="ff-strips__inner {% if section.settings.full_width %}ff-strips__inner--full{% endif %}">

    {% for block in section.blocks %}
      {% if block.settings.link != blank %}
        {% assign has_link = true %}
      {% else %}
        {% assign has_link = false %}
      {% endif %}

      {% assign layout = block.settings.layout %}
      {% assign img = block.settings.image %}
      {% assign bg = block.settings.bg_color %}
      {% assign text = block.settings.text_color %}
      {% assign accent = block.settings.accent_color %}
      {% assign img_fit = block.settings.image_fit %}

      {% assign en_kicker_clean = block.settings.en_kicker | strip %}
      {% assign he_title_clean = block.settings.he_title | strip %}
      {% assign subtext_clean = block.settings.subtext | strip %}

      {% assign img_class = 'ff-strip__img ff-strip__img--fit-' | append: img_fit %}
      {% assign img_alt = block.settings.image_alt | default: he_title_clean | strip | escape %}

      <article
        class="ff-strip ff-strip--{{ layout }}"
        style="--ff-strip-bg: {{ bg }}; --ff-strip-text: {{ text }}; --ff-strip-accent: {{ accent }};"
        {{ block.shopify_attributes }}
      >
        {% if has_link %}
          <a class="ff-strip__link" href="{{ block.settings.link }}" aria-label="{{ block.settings.aria_label | escape }}">
        {% else %}
          <div class="ff-strip__link" role="group" aria-label="{{ block.settings.aria_label | escape }}">
        {% endif %}

          <div class="ff-strip__grid">
            <div class="ff-strip__media">
              {% if img != blank %}
                {{ img
                  | image_url: width: 1500
                  | image_tag:
                      widths: '320, 480, 640, 800, 1000, 1200, 1500',
                      sizes: '(max-width: 749px) 50vw, 50vw',
                      alt: img_alt,
                      class: img_class,
                      loading: 'lazy'
                }}
              {% else %}
                <div class="ff-strip__img ff-strip__img--placeholder" aria-hidden="true"></div>
              {% endif %}
            </div>

            <div class="ff-strip__content">
              {% if en_kicker_clean != blank %}
                <h2 class="ff-strip__kicker" lang="en" dir="ltr">{{ en_kicker_clean }}</h2>
              {% endif %}

              {% if he_title_clean != blank %}
                <div class="ff-strip__title" lang="he" dir="rtl">{{ he_title_clean }}</div>
              {% endif %}

              {% if subtext_clean != blank %}
                <div class="ff-strip__subtext" lang="he" dir="rtl">{{ subtext_clean }}</div>
              {% endif %}
            </div>
          </div>

        {% if has_link %}
          </a>
        {% else %}
          </div>
        {% endif %}
      </article>
    {% endfor %}

  </div>
</section>

{% style %}
/* =========================
   FF Editorial Strips
   Mobile: full-width strips with uniform vh height
   Desktop/Tablet: full-width auto-wrapping flex mosaic of square-ish tiles
   ========================= */

.ff-strips { width: 100%; }
.ff-strips__inner { width: 100%; }
.ff-strips__inner--full { max-width: none; }

.ff-strip {
  background: var(--ff-strip-bg);
  color: var(--ff-strip-text);
  overflow: hidden;
}

.ff-strip__link {
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.ff-strip__link:focus-visible {
  outline: 2px solid var(--ff-strip-accent);
  outline-offset: 2px;
}

/* Internal layout: image half + content half */
.ff-strip__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

/* Alternate alignment (image right) */
.ff-strip--image_right .ff-strip__media { order: 2; }
.ff-strip--image_right .ff-strip__content { order: 1; }

.ff-strip__media { height: 100%; }

.ff-strip__img,
.ff-strip__img--placeholder {
  width: 100%;
  height: 100%;
}

.ff-strip__img--fit-cover { object-fit: cover; }
.ff-strip__img--fit-contain { object-fit: contain; background: rgba(255,255,255,0.12); }

.ff-strip__img--placeholder { background: rgba(0,0,0,0.06); }

/* Content (Floralis-like centered banner copy) */
.ff-strip__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 28px 32px;
  gap: 10px;
}

.ff-strip__kicker {
  margin: 0;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  opacity: 0.95;
}

.ff-strip__title {
  font-weight: 700;
  font-size: 34px;
  line-height: 1.05;
}

.ff-strip__subtext {
  font-size: 14px;
  line-height: 1.45;
  opacity: 0.9;
  max-width: 38ch;
}

/* ================= MOBILE: strips ================= */
@media (max-width: 749px) {
  .ff-strips__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .ff-strip {
    width: 100%;
    height: var(--ff-mobile-row-h);
  }

  .ff-strip__content {
    padding: 18px 18px;
  }

  .ff-strip__title { font-size: 30px; }
}

/* ================= TABLET/DESKTOP: mosaic flex ================= */
@media (min-width: 750px) {
  .ff-strips__inner {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 14px;
    padding: 14px;
    box-sizing: border-box;
  }

  .ff-strip {
    flex: 1 1 340px;   /* min tile width */
    max-width: 520px;  /* prevents giant tiles */
    aspect-ratio: 1 / 1;
  }

  .ff-strip__grid { height: 100%; }
}

@media (min-width: 990px) {
  .ff-strip__title { font-size: 36px; }
}

@media (hover:hover) and (pointer:fine) {
  .ff-strip__link:hover { filter: brightness(0.99); }
}
{% endstyle %}

{% schema %}
{
  "name": "FF — Editorial Strips",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "text",
      "id": "aria_label",
      "label": "ARIA label",
      "default": "Editorial navigation strips"
    },
    {
      "type": "checkbox",
      "id": "full_width",
      "label": "Full width",
      "default": true
    },
    {
      "type": "range",
      "id": "mobile_row_height_vh",
      "label": "Mobile row height (vh)",
      "min": 10,
      "max": 28,
      "step": 1,
      "default": 14
    }
  ],
  "blocks": [
    {
      "type": "strip",
      "name": "Strip",
      "settings": [
        {
          "type": "text",
          "id": "aria_label",
          "label": "Block ARIA label",
          "default": "Navigate to category"
        },
        {
          "type": "select",
          "id": "layout",
          "label": "Layout",
          "default": "image_left",
          "options": [
            { "value": "image_left", "label": "Image left" },
            { "value": "image_right", "label": "Image right" }
          ]
        },
        {
          "type": "color",
          "id": "bg_color",
          "label": "Background color",
          "default": "#E9E7E1"
        },
        {
          "type": "color",
          "id": "text_color",
          "label": "Text color",
          "default": "#111111"
        },
        {
          "type": "color",
          "id": "accent_color",
          "label": "Accent color (focus/hover)",
          "default": "#111111"
        },
        {
          "type": "image_picker",
          "id": "image",
          "label": "Image"
        },
        {
          "type": "text",
          "id": "image_alt",
          "label": "Image alt text",
          "default": " "
        },
        {
          "type": "select",
          "id": "image_fit",
          "label": "Image fit",
          "default": "cover",
          "options": [
            { "value": "cover", "label": "Cover" },
            { "value": "contain", "label": "Contain" }
          ]
        },
        {
          "type": "text",
          "id": "en_kicker",
          "label": "English kicker (small line)",
          "default": "Display Your Way"
        },
        {
          "type": "text",
          "id": "he_title",
          "label": "Hebrew title (big)",
          "default": "ריהוט"
        },
        {
          "type": "text",
          "id": "subtext",
          "label": "Optional Hebrew subtext",
          "default": " "
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link"
        }
      ]
    }
  ],
  "max_blocks": 12,
  "presets": [
    {
      "name": "FF — Editorial Strips",
      "blocks": [
        { "type": "strip" },
        { "type": "strip", "settings": { "layout": "image_right" } },
        { "type": "strip" }
      ]
    }
  ]
}
{% endschema %}

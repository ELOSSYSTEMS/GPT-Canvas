{% schema %}
{
  "name": "Ultimate Hero Section",
  "tag": "section",
  "class": "ultimate-hero",
  "settings": [...]
}
{% endschema %}

... (keep all previous CSS, schema, and script logic unchanged) ...

<section class="ultimate-hero">
  {% if section.settings.bg_image and section.settings.layout == 'banner' %}<div class="overlay"></div>{% endif %}
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
    {% if section.settings.main_image and section.settings.layout == 'split' %}
    <div class="ultimate-hero-parallax-image">
      <img src="{{ section.settings.main_image | img_url: 'master' }}" alt="Hero image">
    </div>
    {% endif %}
  </div>
</section>
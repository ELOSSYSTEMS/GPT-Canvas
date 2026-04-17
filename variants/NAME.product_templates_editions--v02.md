<!-- SNIPPET: edition-testimonials.liquid -->
{% comment %}
  Luxury testimonials block — Edition-specific.
  Mobile-first: stacked quotes, minimal spacing.
  Usage: include snippet in each product template; it renders the testimonials
  relevant to the current edition (Flagship, Seasonal, Devotion, Art).
{% endcomment %}

<style>
  .testimonials{margin:2rem 0;font-family:inherit}
  .testimonials h3{font-size:1rem;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:0.5rem;color:#111}
  .testimonial{margin-bottom:1.25rem}
  .testimonial p.quote{font-size:0.9rem;line-height:1.4;color:#444;margin:0}
  .testimonial p.author{font-size:0.8rem;color:#777;margin:0.25rem 0 0}
  @media(min-width:750px){.testimonials{max-width:540px}}
</style>

{% case template %}

  {% when 'product.flagship' %}
  <div class="testimonials testimonials--flagship">
    <h3>What customers say</h3>
    <div class="testimonial">
      <p class="quote">“הזמנתי את הזר צבעוני נצחי והגיע זר מהמם. שירות מקצועי ומסור. ממליצה בחום!”</p>
      <p class="author">— Gili G., Tel Aviv</p>
    </div>
  </div>

  {% when 'product.seasonal' %}
  <div class="testimonials testimonials--seasonal">
    <h3>What customers say</h3>
    <div class="testimonial">
      <p class="quote">“הזמנתי את לחישת השדה והזר הגיע בדיוק בגוונים ובגודל שרציתי. האורחים לא מפסיקים להחמיא.”</p>
      <p class="author">— Yaara K., Haifa</p>
    </div>
  </div>

  {% when 'product.devotion' %}
  <div class="testimonials testimonials--devotion">
    <h3>What customers say</h3>
    <div class="testimonial">
      <p class="quote">“אהבה נצחית הייתה המתנה המושלמת. הזר הגיע שלם, ריחני ויפהפה — בדיוק כמו בתמונות.”</p>
      <p class="author">— Lior R., Ra’anana</p>
    </div>
  </div>

  {% when 'product.art' %}
  <div class="testimonials testimonials--art">
    <h3>Collector feedback</h3>
    <div class="testimonial">
      <p class="quote">“הזר האמנותי הרים את האירוח שלנו לרמה אחרת — יצירת אמנות אמיתית.”</p>
      <p class="author">— Maya L., Jerusalem</p>
    </div>
  </div>

{% endcase %}
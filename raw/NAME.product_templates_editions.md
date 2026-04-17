<!-- SNIPPET: flagship-testimonials-slider.liquid -->
{% comment %}
  Testimonials slider - real customer reviews for Eternal Color (Flagship Edition).
  Mobile-first Flickity carousel with avatars pulled from CSV URLs.
{% endcomment %}

<style>
.testimonials{margin:2rem 0;font-family:inherit}
.testimonials h3{text-align:center;font-size:1rem;letter-spacing:0.05em;text-transform:uppercase;color:#111;margin-bottom:0.75rem}
.ff-slider[data-flickity]{margin:0 auto;max-width:300px}
.ff-slider .testimonial-cell{padding:1rem;text-align:center}
.ff-slider .testimonial-avatar{width:56px;height:56px;border-radius:50%;object-fit:cover;margin:0 auto 0.75rem}
.ff-slider .quote{font-size:0.9rem;line-height:1.45;color:#444;font-style:italic;margin:0}
.ff-slider .author{font-size:0.8rem;color:#777;margin:0.5rem 0 0}
</style>

<div class="testimonials">
  <h3>לקוחות מספרים</h3>
  <div class="ff-slider" data-flickity='{"cellAlign":"center","contain":true,"prevNextButtons":false,"pageDots":true,"wrapAround":true}'>

    <div class="testimonial-cell">
      <img src="https://app.testimonialhub.com/resources/public/avatars/18417/1732250276_8776915845756474.jpg" alt="Gili G." class="testimonial-avatar">
      <p class="quote">“הזמנתי את צבעוני נצחי – זר מהמם. שירות אדיב ונעים. אקנה שוב!”</p>
      <p class="author">— גילי ג׳, רמת-השרון</p>
    </div>

    <div class="testimonial-cell">
      <img src="https://app.testimonialhub.com/resources/public/avatars/18417/1735180066_8960506750698141.jpg" alt="Limor A." class="testimonial-avatar">
      <p class="quote">“הזר הגיע בדיוק בגוונים ובגודל שרציתי. האורחים לא מפסיקים להחמיא.”</p>
      <p class="author">— לימור א׳, תל-אביב</p>
    </div>

    <div class="testimonial-cell">
      <img src="https://app.testimonialhub.com/resources/public/avatars/18417/1736176667_9032022473545122.jpg" alt="Carmit M." class="testimonial-avatar">
      <p class="quote">“הזמנו זר למשרד – נראה טרי לחלוטין גם אחרי שבועות. ממליצה בחום.”</p>
      <p class="author">— כרמית מ׳, חיפה</p>
    </div>

  </div>
</div>
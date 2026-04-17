<!-- Insert this instead of your current email form block -->
<div class="message user" style="width: 100%">
  <form id="dabrooForm" style="
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #303030;
    padding: 16px;
    border-radius: 12px;
    max-width: 500px;
    margin: 10px auto 0 auto;
  ">
    <input type="text" name="firstName" placeholder="שם פרטי" required style="padding: 8px; border-radius: 8px; border: none; font-size: 1rem; direction: rtl;" />

    <input type="number" name="age" placeholder="גיל" required style="padding: 8px; border-radius: 8px; border: none; font-size: 1rem; direction: rtl;" />

    <input type="text" name="useCase" placeholder="למה אתה משתמש בצ'אטג'יפיטי?" required style="padding: 8px; border-radius: 8px; border: none; font-size: 1rem; direction: rtl;" />

    <input type="email" name="email" placeholder="אימייל" required style="padding: 8px; border-radius: 8px; border: none; font-size: 1rem; direction: rtl;" />

    <button type="submit" style="padding: 10px 16px; border-radius: 8px; border: none; background: #0a7aff; color: #fff; font-weight: bold; cursor: pointer;">
      שלח
    </button>
  </form>
</div>

<script>
  document.getElementById('dabrooForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const payload = Object.fromEntries(data.entries());

    // ✅ For now: just send to your Gmail via Formspree
    // Later you can replace with Make webhook + Mailer
    await fetch('https://formspree.io/f/your_form_id', { // Replace this with real ID later
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });

    form.outerHTML = `<div style="color: #0f0; text-align: center; margin-top: 12px; font-size: 1rem">📩 הטופס התקבל. ערכת הסטארטר נשלחת אליך עכשיו.</div>`;

    // Optionally trigger loadNextMessage(); if you want to move the convo forward
  });
</script>
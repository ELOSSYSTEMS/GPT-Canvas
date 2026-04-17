{% layout none %}
<html dir="rtl">
<!-- Force mobile viewport inside body -->
<script>
  const vp = document.createElement('meta');
  vp.name = "viewport";
  vp.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(vp);
</script>
{% schema %}
{
  "name": "Dabroo AI Modular Page",
  "settings": [
    {
      "type": "text",
      "id": "chat_title",
      "label": "Chat Title",
      "default": "ברוכים הבאים לדרבו AI"
    },
    {
      "type": "textarea",
      "id": "conversation_starters",
      "label": "Conversation Starters",
      "info": "Separate each starter with a newline",
      "default": "מה ההבדל בין לשאול את צ׳אטג׳יפיטי בעברית — לבין להשתמש בדברו?\nאיך דברו יכול לעזור לי אם אני לא איש שיווק?\nמה בדיוק אני מקבל אם אני קונה את דברו?\nלמה כשאני כותב פרומפטים בצ׳אטג׳יפיטי — זה יוצא משעמם או רובוטי?\nתלמד אותי איך לכתוב פרומפט טוב בעברית.\nמה בדיוק מקבלים בדברו? ואיך זה שונה מכלים אחרים?"
    },
    {
      "type": "textarea",
      "id": "chat_script",
      "label": "JS: Chat Conversation Flow",
      "info": "Paste the full JS messages array or logic here",
      "default": "const messages = [\n  { role: 'user', text: \"שמע, אני משתגע...\" },\n  { role: 'system', text: \"אני שומע אותך...\" },\n  { role: 'email', text: '' }\n];"
    }
  ]
}
{% endschema %}

<script>
  const chatTitle = {{ settings.chat_title | json }};
  const starters = {{ settings.conversation_starters | newline_to_br | split: '<br />' | json }};
  const dynamicScript = {{ settings.chat_script | json }};

  window.__dabrooChatConfig = {
    title: chatTitle,
    starters: starters,
    script: dynamicScript
  };
</script>

<!-- Placeholder: this script tag will connect to dabroo-chat.js to render UI dynamically -->
<script src="{{ 'dabroo-chat.js' | asset_url }}" defer></script>

<!-- Placeholder: styling loaded globally or inline if needed -->
{{ 'dabroo-chat.css' | asset_url | stylesheet_tag }}

<div id="dabroo-chat-root"></div>
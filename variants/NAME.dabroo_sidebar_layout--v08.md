{% layout none %}

<!-- Force mobile viewport inside body -->
<script>
  const vp = document.createElement('meta');
  vp.name = "viewport";
  vp.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(vp);
</script>

{% schema %}
{
  "name": "Chat Homepage",
  "settings": []
}
{% endschema %}

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #212121;
    font-family: "Segoe UI", "Noto Sans Hebrew",
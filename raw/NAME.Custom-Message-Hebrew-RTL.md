<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ email_title }}</title>
    <link rel="stylesheet" type="text/css" href="/assets/notifications/styles.css">
    <style>
      body { direction: rtl; text-align: right; }
      .button__cell { background: {{ shop.email_accent_color }}; }
      a, a:hover, a:active, a:visited { color: {{ shop.email_accent_color }}; }
    </style>
  </head>
  <body>
    <table class="body">
      <tr>
        <td>
          <table class="header row">
            <tr>
              <td class="header__cell">
                <center>
                  <table class="container">
                    <tr>
                      <td>
                        <h1 class="shop-name__text">
                          <a href="{{shop.url}}">{{ shop.name }}</a>
                        </h1>
                      </td>
                    </tr>
                  </table>
                </center>
              </td>
            </tr>
          </table>

          <table class="row content">
            <tr>
              <td class="content__cell">
                <center>
                  <table class="container">
                    <tr>
                      <td>
                        <p>{{ custom_message }}</p>
                      </td>
                    </tr>
                  </table>
                </center>
              </td>
            </tr>
          </table>

          <table class="row footer">
            <tr>
              <td class="footer__cell">
                <center>
                  <table class="container">
                    <tr>
                      <td>
                        <p class="disclaimer__subtext">
                          יש לכם שאלות? השיבו למייל זה או צרו קשר בכתובת <a href="mailto:{{ shop.email }}">{{ shop.email }}</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </center>
              </td>
            </tr>
          </table>

          <img src="{{ 'notifications/spacer.png' | shopify_asset_url }}" class="spacer" height="1" />
        </td>
      </tr>
    </table>
  </body>
</html>
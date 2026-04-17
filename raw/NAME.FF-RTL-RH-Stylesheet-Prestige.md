/* === FOREVER FLOWERS – RTL + RH STYLES FOR PRESTIGE THEME === */

/* 1. Force RTL layout */
html, body {
  direction: rtl !important;
  text-align: right !important;
}

/* 2. RH-style whitespace + padding */
.section, .page-width, .main-content {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/* 3. Typography adjustments */
body, p, span, li {
  font-family: 'Assistant', sans-serif !important;
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.03em;
}

h1, h2, h3, h4 {
  font-family: 'Magnolia', serif !important;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: none;
  margin-bottom: 1.5rem;
}

/* 4. Header & Navigation RTL flip */
.header__menu, .site-nav, .header__icon {
  float: right !important;
}

.site-nav__link {
  text-align: right !important;
  margin-right: 2rem;
  margin-left: 0;
}

/* 5. Buttons & CTAs */
.button, .shopify-payment-button {
  border-radius: 0;
  padding: 1rem 2rem;
  letter-spacing: 0.05em;
}

/* 6. Product grid RTL and alignment */
.grid, .grid__item {
  direction: rtl !important;
}

.product-card__title, .product-card__price {
  text-align: right;
}

/* 7. RH-style muted color scheme (optional) */
body {
  background-color: #f8f7f4;
  color: #1e1e1e;
}

/* 8. Footer RTL */
.site-footer, .footer__content {
  text-align: right !important;
}

/* 9. Disable default animations/transitions (optional for RH stillness) */
*, *::before, *::after {
  transition: none !important;
  animation: none !important;
}
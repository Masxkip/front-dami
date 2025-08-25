// components/CtaGetQuote.jsx
import React from "react";
import "../css/footer.css"; // reuses .cta-band styles you already have

export default function CtaGetQuote({
  ctaTitle = "Ready for windows that sparkle like diamonds?",
  ctaSubtitle = "Contact Blue Diamond Window Cleaning for your free, no-obligation quote.",
  ctaButtonText = "GET A QUOTE TODAY",
  ctaLink = "/quote",
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <h2 id="cta-title" className="cta-title">{ctaTitle}</h2>
        <p className="cta-subtitle">{ctaSubtitle}</p>
        <a href={ctaLink} className="cta-primary">{ctaButtonText}</a>
      </div>
    </section>
  );
}

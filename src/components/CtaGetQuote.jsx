// components/CtaGetQuote.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css"; // reuses .cta-band styles you already have

export default function CtaGetQuote({
  ctaTitle = "Ready for a cleaner, fresher space?",
  ctaSubtitle = "Heart & Care Cleaning Services is here to deliver spotless results you can count on. Get your free, no-obligation quote today and let us bring the sparkle back.",
  ctaButtonText = "GET A QUOTE TODAY",
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <h2 id="cta-title" className="cta-title">{ctaTitle}</h2>
        <p className="cta-subtitle">{ctaSubtitle}</p>
        <Link to="/quote" className="cta-primary">{ctaButtonText}</Link>
      </div>
    </section>
  );
}

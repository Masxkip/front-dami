import React from "react";
import "../css/cta-duo.css";

/**
 * Reusable two-button CTA row.
 * Props let you reuse it across pages without restyling.
 */
export default function CTADuo({
  // Button texts + links
  primaryHref = "/services",
  primaryLabel = "Learn more about our Cleaning Services",
  secondaryHref = "tel:+18884776243",
  secondaryLabel = "Call us at 1-888-477-MAID",

  // Theming knobs (match your About page defaults)
  accent = "#8b61ec",     // purple accent
  ink = "#0f172a",        // outline text color

  // Spacing toggles (hug previous/next sections)
  tightTop = true,
  tightBottom = false,

  className = "",
  containerClassName = "",
}) {
  return (
    <section
      className={`ctad-cta-duo section ${tightTop ? "ctad--tight-top" : ""} ${tightBottom ? "ctad--tight-bottom" : ""} ${className}`}
      style={{ "--cta-accent": accent, "--cta-ink": ink }}
    >
      <div className={`container ${containerClassName}`}>
        <div className="ctad-row">
          <a href={primaryHref} className="ctad-btn ctad-btn-solid">
            {primaryLabel}
          </a>

          <a href={secondaryHref} className="ctad-btn ctad-btn-outline">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

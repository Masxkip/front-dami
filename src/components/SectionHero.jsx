import React from "react";
import "../css/SectionHero.css";

/**
 * Reusable light-overlay hero
 * Props:
 * - title: string
 * - subtitle?: string
 * - bgImage: string (URL or imported asset)
 * - height?: string (e.g. "48vh", "420px")
 * - rounded?: boolean (bottom rounded corners)
 * - align?: "left" | "center"
 */
export default function SectionHero({
  title,
  subtitle,
  bgImage,
  height = "48vh",
  rounded = true,
  align = "left",
}) {
  const style = {
    minHeight: height,
    backgroundImage: `linear-gradient(
        to right,
        rgba(255,255,255,0.96) 0%,
        rgba(255,255,255,0.88) 22%,
        rgba(255, 255, 255, 0.9) 45%,
        rgba(255, 255, 255, 0.81) 70%,
        rgba(255, 255, 255, 0.85) 100%
      ), url(${bgImage})`,
    borderBottomLeftRadius: rounded ? "44px" : 0,
    borderBottomRightRadius: rounded ? "44px" : 0,
  };

  return (
    <header className="section-hero" style={style} role="img" aria-label={title}>
      <div className={`section-hero__inner section-hero__inner--${align}`}>
        {title && <h1 className="section-hero__title">{title}</h1>}
        {subtitle && <p className="section-hero__subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}

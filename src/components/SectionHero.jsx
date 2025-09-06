import React from "react";
import "../css/SectionHero.css";
import { cld } from "../lib/cloudinary"; // <-- add

export default function SectionHero({
  title,
  subtitle,
  bgImage,        // existing: full URL
  bgPublicId,     // NEW: Cloudinary public ID (e.g., "damimg/i1.jpg")
  height = "48vh",
  rounded = true,
  align = "left",
}) {
  const bgUrl = bgPublicId
    ? cld(bgPublicId, "f_auto,q_auto,w_1600,c_fill,g_center")
    : bgImage;

  const style = {
    minHeight: height,
    backgroundImage: `linear-gradient(
      to right,
      rgba(255,255,255,0.96) 0%,
      rgba(255,255,255,0.88) 22%,
      rgba(255, 255, 255, 0.9) 45%,
      rgba(255, 255, 255, 0.81) 70%,
      rgba(255, 255, 255, 0.85) 100%
    ), url(${bgUrl})`,
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

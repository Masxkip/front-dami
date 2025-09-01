// Cloudinary responsive delivery helper
import React from "react";

const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD;
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;

// Build a Cloudinary URL for a given width (auto format/quality, smart crop)
const cld = (id, w, { ar } = {}) => {
  const parts = ["f_auto", "q_auto", "c_fill,g_auto", `w_${w}`];
  if (ar) parts.push(`ar_${ar}`);
  return `${BASE}/${parts.join(",")}/${id}`;
};

export default function CdnImage({
  id,                  
  alt = "",
  widths = [480, 768, 1080, 1440, 1920],
  sizes = "100vw",
  ar,                  // e.g. "16:9" or "4:3" if you want enforced aspect
  loading = "lazy",    // set to "eager" for the very first hero image
  decoding = "async",
  width, height,       // pass if known to prevent layout shift
  className,
  style,
  ...rest
}) {
  const mid = widths[Math.floor(widths.length / 2)];
  const src = cld(id, mid, { ar });
  const srcSet = widths.map(w => `${cld(id, w, { ar })} ${w}w`).join(", ");
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding={decoding}
      width={width}
      height={height}
      className={className}
      style={style}
      {...rest}
    />
  );
}

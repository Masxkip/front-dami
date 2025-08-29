import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "../css/index.css"; // page-specific styles

export default function ScrollUp({ threshold = 200 }) { // lower default so you can see it
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow((window.scrollY || 0) > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Inline fallback styles so it appears even if CSS file isn't loaded
  const base = {
    position: "fixed",
    right: "clamp(14px, 3vw, 24px)",
    bottom: "clamp(14px, 3vw, 24px)",
    zIndex: 4000,                         // above header/drawers
    width: 48, height: 48,
    border: "none", borderRadius: 14,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    background: "linear-gradient(135deg, #6f3cff, #8b61ec)",
    color: "#fff",
    boxShadow: "0 10px 28px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.15)",
    backdropFilter: "blur(8px) saturate(150%)",
    WebkitBackdropFilter: "blur(8px) saturate(150%)",
    transition: "opacity .2s ease, transform .2s ease",
    cursor: "pointer",
    // visibility toggle
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0) scale(1)" : "translateY(20px) scale(.9)",
    pointerEvents: show ? "auto" : "none",
  };

  return (
    <button
      className="bd-scrollup"  // optional extra styling if you kept the CSS
      style={base}
      aria-label="Scroll to top"
      onClick={toTop}
    >
      <ArrowUp size={22} />
    </button>
  );
}

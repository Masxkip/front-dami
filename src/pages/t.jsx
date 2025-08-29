import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/m1.png";          // ✅ import the image
import "../css/navbar.css";

const DESKTOP_Q = "(min-width: 992px)";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const y = window.scrollY;
    document.body.style.top = `-${y}px`;
    document.body.classList.add("bd-lock");
    return () => {
      document.body.classList.remove("bd-lock");
      const top = document.body.style.top;
      document.body.style.top = "";
      window.scrollTo(0, parseInt(top || "0") * -1);
    };
  }, [open]);

  // Auto-close on desktop
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_Q);
    const handle = (e) => e.matches && setOpen(false);
    if (mq.matches) setOpen(false);
    mq.addEventListener?.("change", handle);
    mq.addListener?.(handle);
    return () => {
      mq.removeEventListener?.("change", handle);
      mq.removeListener?.(handle);
    };
  }, []);

  return (
    <>
      <div className="bd-header-wrap">
        <header className="bd-header" role="banner">
          {/* Brand with image */}
          <Link to="/" className="bd-brand" aria-label="Heart & Care Cleaning — Home">
            <img src={logo} alt="Heart & Care Logo" className="bd-brand-img" />
        
          </Link>

          {/* Desktop nav */}
          <nav className="bd-nav" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>

          {/* Right side actions */}
          <div className="bd-actions">
            <a href="tel:+14389265351" className="bd-call" aria-label="Call us" title="+1 (438) 926-5351">
              {/* ⬆️ Larger phone icon */}
              <Phone size={24} strokeWidth={2.6} />
            </a>

            <Link to="/quote" className="bd-cta">Get A Quote</Link>

            {/* Hamburger with hover micro-interaction */}
            <button
              className="bd-burger"
              aria-label="Toggle navigation"
              aria-expanded={open}
              data-open={open ? "true" : "false"}
              onClick={() => setOpen(v => !v)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile drawer */}
      <div className={`bd-mobile ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <nav className="bd-mobile-nav" onClick={(e) => e.stopPropagation()}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/quote">Get A Quote</NavLink>
        </nav>
      </div>
    </>
  );
}

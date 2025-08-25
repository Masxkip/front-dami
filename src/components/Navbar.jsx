// Navbar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import "../css/navbar.css";

const DESKTOP_Q = "(min-width: 992px)";

const Navbar = () => {
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

  // Auto-close mobile menu when switching back to desktop
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_Q);
    const handle = (e) => e.matches && setOpen(false);
    if (mq.matches) setOpen(false);
    mq.addEventListener?.("change", handle);
    mq.addListener?.(handle);            // older browsers
    return () => {
      mq.removeEventListener?.("change", handle);
      mq.removeListener?.(handle);
    };
  }, []);

  return (
    <>
      {/* NEW: sticky wrapper */}
      <div className="bd-header-wrap">
        <header className="bd-header" role="banner">
          {/* Brand */}
          <Link to="/" className="bd-brand" aria-label="Blue Diamond Home">
            <img src="/images/i1.jpg" alt="Heart & Care Logo" className="bd-diamond" />
          </Link>

          {/* Desktop nav */}
          <nav className="bd-nav" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>

          {/* Actions */}
          <div className="bd-actions">
            <a href="tel:+14389265351" className="bd-call" aria-label="Call us" title="Call us">
              <Phone size={18} strokeWidth={2.5} />
            </a>
            <Link to="/quote" className="bd-cta">Get A Quote</Link>
            <button
              className="bd-burger"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile slide-in */}
      <div className={`bd-mobile ${open ? "open" : ""}`}>
        <nav className="bd-mobile-nav" onClick={() => setOpen(false)}>
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
};

export default Navbar;

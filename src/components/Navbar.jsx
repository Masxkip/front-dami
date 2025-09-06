import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";        
import "../css/navbar.css";

import { cld } from "../lib/cloudinary";
import { IMG } from "../assets/cloudinaryImages";

const navbarh = cld(IMG.navbar, "f_auto,q_auto,w_1920,c_fill,g_center");

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
          {/* Brand — add your image or text here */}
                    {/* Brand */}
          <Link to="/" className="bd-brand" aria-label="Heart & Care Cleaning — Home">
            <img src={navbarh} alt="Heart & Care Logo" className="bd-brand-img" />
        
          </Link>

          {/* Desktop nav */}
          <nav className="bd-nav" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>

          {/* Actions (right) */}
          <div className="bd-actions">
            <a href="tel:+14389265251" className="bd-call" aria-label="Call us" title="Call us">
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
}

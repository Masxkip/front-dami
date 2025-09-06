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
















    {/* ABOUT US — single long card popping onto the black band */}
<section className="about section about-pop">
  <div className="container">
    <div className="card-light about-single">
      <h2 className="h2">We Are A Cleaning Service That puts People First</h2>

      <p className="muted-dark">
        We’re a <strong>licensed, family-owned</strong> cleaning company providing professional, reliable care for residential, post-construction, and office spaces. Our mission is to deliver every job to the highest standards so you come home to a <strong>clean, healthy space</strong> you can be proud of. We serve <strong>Woodstock, Ingersoll, Tillsonburg, London, Kitchener, Waterloo,</strong> and other surrounding areas. From studio apartments to busy offices and new builds, we tailor each clean to your space, schedule, and preferences. Our approach prioritizes healthier, safer environments for both homeowners and cleaners. Before you invite us in, it’s important to understand our values: integrity, professionalism, and clear communication. You can count on us to listen, show up on time, and provide the best house cleaning service for your needs, every visit.
      </p>

      <p className="muted-dark">
        We ensure your <strong>privacy and safety</strong>. We respect your home and your information. Our team follows safety-first practices and thoughtful cleaning protocols to ensure your space is cared for with precision, covering dusting and vacuuming, scrubbing floors, and sanitizing high-touch surfaces. Every home is different, so we offer <strong>custom plans</strong> and helpful add-ons like bed linen changes, dishwasher loading/unloading, and laundry folding. Prefer eco-conscious options? We can accommodate upon request. Count on dependable quality, <strong>flexible scheduling</strong>, and <strong>upfront pricing.</strong> If you’re ready for a partner that treats your home like their own, we are one quote away.
      </p>

      {/* NEW: 4-feature list */}
<ul className="about-features" role="list">
  <li className="about-feature">
    <div className="feat-icon" aria-hidden>
      <Sparkles size={22} strokeWidth={2.25} />
    </div>
    <div className="feat-title">Quality Cleaning</div>
    <div className="feat-sub">Detailed cleaning guided by a comprehensive checklist.</div>
  </li>

  <li className="about-feature">
    <div className="feat-icon" aria-hidden>
      <ShieldCheck size={22} strokeWidth={2.25} />
    </div>
    <div className="feat-title">Licensed &amp; Insured</div>
    <div className="feat-sub">Background-checked and fully insured professionals.</div>
  </li>

  <li className="about-feature">
    <div className="feat-icon" aria-hidden>
      <Calendar size={22} strokeWidth={2.25} />
    </div>
    <div className="feat-title">Flexible Scheduling</div>
    <div className="feat-sub">Tailored plans that work around your schedule.</div>
  </li>

  <li className="about-feature">
    <div className="feat-icon" aria-hidden>
      <Users size={22} strokeWidth={2.25} />
    </div>
    <div className="feat-title">People-Centric</div>
    <div className="feat-sub">Cleaner empowerment, charity-driven, client-focused.</div>
  </li>
</ul>
      {/* Centered CTA */}
      <div className="cta-row">
        <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
      </div>
    </div>
  </div>
</section>
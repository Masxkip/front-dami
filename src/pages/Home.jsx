import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
import { Sparkles, ShieldCheck, Calendar, Users } from "lucide-react";
import FAQSection from "../components/FAQSection";
import SiteFooter from "../components/SiteFooter";
import ServiceIntro from "../components/ServiceIntro";
import truckImg from "../assets/jjk1.png";
import WhyChoose from "../components/WhyChoose";
import CtaGetQuote from "../components/CtaGetQuote";

// Cloudinary bits
import { cld } from "../lib/cloudinary";
import { IMG } from "../assets/cloudinaryImages";



const SLIDE_MS = 40000; // 40 seconds

const Home = () => {
  // Build the slide URLs once
  const slides = useMemo(() => ([
    cld(IMG.homeHero1, "f_auto,q_auto,w_1920,c_fill,g_center"),
    cld(IMG.homeHero2, "f_auto,q_auto,w_1920,c_fill,g_center"),
    cld(IMG.homeHero3, "f_auto,q_auto,w_1920,c_fill,g_center"),
  ]), []);

  // Preload images (optional—but prevents initial flash)
  useEffect(() => {
    slides.forEach(src => { const img = new Image(); img.src = src; });
  }, [slides]);

  // Which slide is showing
  const [idx, setIdx] = useState(0);

  // Auto-advance every 40s
  useEffect(() => {
    const mm = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mm?.matches) return; // respect reduced motion users

    const id = setInterval(() => {
      setIdx(i => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  // You can still feed a hero image to ServiceIntro; use the current one:
  const currentHero = slides[idx];

  return (
    <main>
      {/* HERO (with curved bottom) */}
      <section className="hero">
        {/* Slider layers */}
        <div className="hero-bg" aria-hidden="true">
          {slides.map((src, i) => (
            <div
              key={i}
              className={`hero-slide ${i === idx ? "is-active" : ""}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        <div className="hero-inner container">
          <h1 className="h1">Your Trusted Partner for Spotless Cleaning Experience!</h1>
          <p className="lead">
            Your trusted cleaning service for homes and offices — fast, reliable, and spotless results every time.
          </p>
          <div className="cta-row">
            <Link to="/quote" className="btn btn-primary">Book a Cleaning</Link>
            <Link to="/services" className="btn btn-primary">View Services</Link>
          </div>
        </div>
      </section>

      {/* DARK BAND that the next section overlaps */}
      <div className="hero-band" aria-hidden="true" />

      {/* ABOUT US — single long card popping onto the black band */}
        {/* ABOUT US — single long card popping onto the black band */}
    <section className="about section about-pop">
      <div className="container">
        <div className="card-light about-single">
          <h2 className="h2">We Are A Cleaning Service That puts People First</h2>
    
          <p className="muted-dark">
            We’re a <strong>licensed, family-owned</strong> cleaning company providing professional, reliable care for residential, post-construction, and office spaces. Our mission is to deliver every job to the highest standards so you come home to a <strong>clean, healthy space</strong> you can be proud of. We serve <strong>Woodstock, Ingersoll, </strong> and <strong>Oxford County area</strong> and other surrounding areas. From studio apartments to busy offices and new builds, we tailor each clean to your space, schedule, and preferences. Our approach prioritizes healthier, safer environments for both homeowners and cleaners. Before you invite us in, it’s important to understand our values: integrity, professionalism, and clear communication. You can count on us to listen, show up on time, and provide the best house cleaning service for your needs, every visit.
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



      <section className="why-choose section bleed">
        <WhyChoose imgSrc={truckImg} imgAlt="Blue Diamond truck" />
      </section>

      {/* Keep visuals in sync if you want */}
      <ServiceIntro />

      <FAQSection
        items={[
          { q: "What areas do you service?", a: "London, Woodstock, Tillsonburg, Ingersoll, Kitchener, Brantford, and Waterloo." },
          { q: "Are you insured?", a: "Yes—fully licensed and insured for residential, office, and post-construction." },
          { q: "Do you use eco-friendly products?", a: "We can accommodate eco-conscious options upon request." },
        ]}
        ctaHref="/faqs"
        ctaLabel="VIEW ALL FAQS"
        hugNext
      />

      <div className="footer-wrap">
        <CtaGetQuote />
        <SiteFooter />
      </div>

    </main>
  );
};

export default Home;

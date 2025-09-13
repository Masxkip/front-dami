import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
import { Sparkles, ShieldCheck, Calendar, Users } from "lucide-react";
import FAQSection from "../components/FAQSection";
import SiteFooter from "../components/SiteFooter";
import ServiceIntro from "../components/ServiceIntro";
import WhyChoose from "../components/WhyChoose";
import CtaGetQuote from "../components/CtaGetQuote";

// Cloudinary bits
import { cld } from "../lib/cloudinary";
import { IMG } from "../assets/cloudinaryImages";

const whyImg = cld(IMG.why, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");



const SLIDE_MS = 10000; // 40 seconds

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
          <h1 className="h1">Your Trusted Partner for a Spotless Cleaning Experience!</h1>
          
          <p className="lead">
             Let us handle the cleaning so you can focus on what matters most.

             We Serve Across <strong>Woodstock, Tillsonburg, </strong> And <strong>The Oxford County area.</strong>
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
        We’re a <strong>licensed, family-owned</strong> cleaning company providing professional, reliable care
        for residential, post-construction, and office spaces. Our mission is to complete every job to the
        highest standards so you return to a <strong>clean, healthy space</strong> you can be proud of. We serve
        <strong> Woodstock, Tillsonburg,</strong> the <strong>Oxford County area</strong>, and surrounding communities.
        From studio apartments to busy offices and new builds, we tailor each clean to your space, schedule,
        and preferences. Our approach prioritizes healthier, safer environments for both homeowners and
        cleaners. Before you invite us in, it’s important to know our values: integrity, professionalism,
        and clear communication. You can count on us to listen, arrive on time, and deliver quality service
        that fits your needs—every visit.
      </p>

      <p className="muted-dark">
        We place the highest priority on your <strong>privacy and safety</strong>. Our team respects your home
        and your information, following safety-first practices and thoughtful cleaning protocols that cover
        dusting, vacuuming, scrubbing floors, and sanitizing high-touch surfaces. Because every home is
        unique, we offer <strong>custom plans</strong> and helpful add-ons like bed linen changes, dishwasher
        loading or unloading, and laundry folding. Prefer eco-conscious options? We can accommodate those
        upon request. With dependable quality, <strong>flexible scheduling</strong>, and <strong>upfront pricing</strong>,
        you can feel confident knowing your home is in caring hands. If you’re ready for a partner who
        treats your home like their own, we’re only one quote away.
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
        <div className="feat-title">Licensed &amp; Trusted</div>
        <div className="feat-sub">A licensed, family-owned business built on reliability and care.</div>
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
        <WhyChoose imgSrc={whyImg} imgAlt="Blue Diamond truck" />
      </section>

      {/* Keep visuals in sync if you want */}
      <ServiceIntro />

      <FAQSection
        items={[
          { q: "What areas do you service?", a: "Woodstock, Tillsonburg, and Oxford County area." },
          { q: "What happens after I book a cleaning?", a: "Once you book, we’ll send a confirmation with your scheduled date, time, and service details. Our team will arrive prepared with all supplies, follow your checklist, and keep you updated if anything changes." },
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

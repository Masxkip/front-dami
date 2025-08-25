// src/pages/Home.jsx
import React from "react";
import "../css/index.css"; // page-specific styles
import { Sparkles, ShieldCheck, Calendar, Users } from "lucide-react";
import FAQSection from "../components/FAQSection";
import SiteFooter from "../components/SiteFooter";
import ServiceIntro from "../components/ServiceIntro";
import heroBg from "../assets/i1.jpg";
import truckImg from "../assets/i1.jpg";
import WhyChoose from "../components/WhyChoose";
import CtaGetQuote from "../components/CtaGetQuote";
import CTADuo from "../components/CTADuo";



const Home = () => {
  return (
    <main>
      {/* HERO (now with curved bottom) */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-inner container">
          <h1 className="h1">Your Trusted Partner for Spotless Cleaning Experience!</h1>
          <p className="lead">
            Your trusted cleaning service for homes and offices — fast, reliable, and spotless results every time.
          </p>
          <div className="cta-row">
            <a href="/contact" className="btn btn-primary">Book a Cleaning</a>
            <a href="/services" className="btn-primary">View Services</a>
          </div>
        </div>
      </section>

      {/* DARK BAND that the next section overlaps */}
      <div className="hero-band" aria-hidden="true" />

    {/* ABOUT US — single long card popping onto the black band */}
<section className="about section about-pop">
  <div className="container">
    <div className="card-light about-single">
      <h2 className="h2">We Are A Cleaning Service That puts People First</h2>

      <p className="muted-dark">
        We’re a <strong>licensed, family-owned</strong> cleaning company providing professional, reliable care for residential, post-construction, and office spaces. Our mission is to deliver every job to the highest standards so you come home to a <strong>clean, healthy space</strong> you can be proud of. We serve <strong>Woodstock, Ingersoll, Tillsonburg, London, Kitchener, Waterloo,</strong> and other surrounding areas. From studio apartments to busy offices and new builds, we tailor each clean to your space, schedule, and preferences. Our approach prioritizes healthier, safer environments for both homeowners and cleaners. Before you invite us in, it’s important to understand our values: integrity, professionalism, and clear communication. You can count on us to listen, show up on time, and provide the best house cleaning service for your needs, every visit.
      </p>

      <p className="muted-dark">
        We ensure your <strong>privacy and safety</strong>. We respect your home and your information. Our team follows safety-first practices and thoughtful cleaning protocols to ensure your space is cared for with precision, covering dusting and vacuuming, scrubbing floors, and sanitizing high-touch surfaces. Every home is different, so we offer <strong>custom plans</strong> and helpful add-ons like bed linen changes, dishwasher loading/unloading, and laundry folding. Prefer eco-conscious options? We can accommodate upon request. Count on dependable quality, <strong>flexible scheduling</strong>, and <strong>upfront pricing.</strong> If you’re ready for a partner that treats your home like their own, we're one quote away.
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
        <a href="/quote" className="btn btn-primary">Learn More About Us</a>
      </div>
    </div>
  </div>
</section>



<section className="why-choose section bleed">
 <WhyChoose imgSrc={truckImg} imgAlt="Blue Diamond truck" />
   </section>


  <CTADuo
        primaryHref="/services"
        primaryLabel="Learn more about our Cleaning Services"
        secondaryHref="tel:+18884776243"
        secondaryLabel="Call us at 1-888-477-MAID"
      />




        {/* ...your hero, etc... */}
      <ServiceIntro imgSrc={heroBg} />
      {/* ...more sections... */}




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
                    <CtaGetQuote/>
                    <SiteFooter />
                  </div>
    </main>
  );
};

export default Home;

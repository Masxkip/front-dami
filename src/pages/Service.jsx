// Service.jsx
import React from "react";
import { Link } from "react-router-dom";
import SectionHero from "../components/SectionHero";
import "../css/service.css";
import FAQSection from "../components/FAQSection";
import CtaGetQuote from "../components/CtaGetQuote";
import SiteFooter from "../components/SiteFooter";

import { cld } from "../lib/cloudinary";
import { IMG } from "../assets/cloudinaryImages";

// Cloudinary URLs (tuned per use)
const serviceHero = cld(IMG.hero, "f_auto,q_auto,c_fill,g_auto,w_1920,h_520,dpr_auto"); // background-style hero
const svc1 = cld(IMG.service1, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const svc2 = cld(IMG.service2, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const svc3 = cld(IMG.service3, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const svc4 = cld(IMG.service4, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const svc5 = cld(IMG.service5, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");

export default function Service() {
  return (
    <main className="service-page">
      <SectionHero
        title="Our Cleaning Services"
        subtitle="Reliable home & office cleaning tailored to you."
        bgPublicId={IMG.hero}
        height="44vh"
        rounded
        align="left"
      />

      {/* black band under hero */}
      <div className="page-hero-band" aria-hidden="true" />

      {/* --- Intro (no pop) --- */}
      <section className="service-intro section">
        <div className="container">
          <h2 className="h2">Custom Cleaning Services Tailored For You</h2>
          <p className="muted">
            We proudly serve <strong>Woodstock, Tillsonburg, and the Oxford County area</strong> with
            professional cleaning for both homes and businesses. From routine upkeep to detailed deep cleans,
            move-in/move-out services, and office sanitization, our licensed team delivers
            dependable quality, clear communication, and flexible scheduling. We also provide
            eco-friendly options upon request.
          </p>
        </div>
      </section>

      {/* --- Services: alternating layout (image/content) --- */}
      <section className="service-alt section">
        <div className="container service-alt-list">

          {/* 1 — Standard House Cleaning */}
          <article className="service-item">
            <div className="service-media frame-black">
              <img src={svc1} alt="Standard house cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Standard House Cleaning</h3>
              <p className="muted">
                Keep your home consistently fresh and comfortable with our standard cleaning service. We focus on
                the core areas that matter most, including dusting, floor care, kitchens, and bathrooms. Designed
                for busy households, this service provides dependable upkeep and a healthier living environment,
                all without the hassle.
              </p>

              <ul className="service-bullets" role="list">
                <li>General dusting & surface wipe-downs</li>
                <li>Kitchen & bathroom refresh</li>
                <li>Vacuuming & mopping all floors</li>
                <li>Flexible weekly, bi-weekly, or monthly schedules</li>
              </ul>
              <br />
              <Link to="/quote" className="btn-primary">Get a quote →</Link>
            </div>
          </article>

          {/* 2 — Detailed Deep Cleaning (reverse) */}
          <article className="service-item is-reverse">
            <div className="service-media frame-purple">
              <img src={svc2} alt="Detailed deep cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Detailed Deep Cleaning</h3>
              <p className="muted">
                When your space needs a true reset, our deep cleaning service goes beyond the basics.
                We take care of the areas that are often overlooked, such as inside appliances and cabinets,
                baseboards, vents, and trim. This level of detail restores a like-new freshness that’s
                perfect for seasonal resets or preparing for special occasions.
              </p>

              <ul className="service-bullets" role="list">
                <li>Inside ovens, fridges & cabinets</li>
                <li>Baseboards, vents, trim & fixtures</li>
                <li>Behind/under furniture attention</li>
                <li>Ideal for seasonal or one-time reset</li>
              </ul>
              <br />
              <Link to="/quote" className="btn-primary">Get a quote →</Link>
            </div>
          </article>

          {/* 3 — Weekly / Monthly Home Cleaning */}
          <article className="service-item">
            <div className="service-media frame-black">
              <img src={svc3} alt="Weekly and monthly home cleaning plans" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Weekly / Monthly Home Cleaning</h3>
              <p className="muted">
                Choose a cleaning rhythm that fits your life. Our recurring plans keep every room tidy,
                protect finishes, and give you back your time. Enjoy consistent results and predictable
                pricing with a schedule that works for you.
              </p>
              <ul className="service-bullets" role="list">
                <li>Weekly, bi-weekly, or monthly visits</li>
                <li>Consistent upkeep of kitchens, baths & living areas</li>
                <li>Easy scheduling & reminders</li>
                <li>Value pricing on recurring plans</li>
              </ul>
              <br />
              <Link to="/quote" className="btn-primary">Get a quote →</Link>
            </div>
          </article>

          {/* 4 — Office / Commercial Sanitization (reverse) */}
          <article className="service-item is-reverse">
            <div className="service-media frame-purple">
              <img src={svc4} alt="Office and commercial sanitization" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Office / Commercial Sanitization</h3>
              <p className="muted">
                A clean workspace supports a healthy team and a welcoming client experience. From routine
                janitorial tasks to sanitizing high-touch areas, we tailor scopes and after-hours schedules
                to your business needs with professional, discreet service.
              </p>
              <ul className="service-bullets" role="list">
                <li>After-hours & custom schedules</li>
                <li>Desks, doors & shared-area sanitizing</li>
                <li>Restrooms, kitchens & reception care</li>
                <li>Reliable, professional staff</li> {/* removed “insured” */}
              </ul>
              <br />
              <Link to="/quote" className="btn-primary">Get a quote →</Link>
            </div>
          </article>

          {/* 5 — Move-In / Move-Out */}
          <article className="service-item">
            <div className="service-media frame-black">
              <img src={svc5} alt="Move-in and move-out cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Move In / Move Out Cleaning</h3>
              <p className="muted">
                Start fresh or hand over the keys with confidence. Our move-in and move-out service
                provides a top-to-bottom clean, covering interiors, appliances, and fixtures. We make
                moving day simpler and ensure final walkthroughs are stress-free.
              </p>

              <ul className="service-bullets" role="list">
                <li>Inside cabinets, closets & appliances</li>
                <li>Baseboards, fixtures & doors detailed</li>
                <li>Kitchen & bathroom sanitization</li>
                <li>Landlord, tenant & realtor-ready finish</li>
              </ul>
              <br />
              <Link to="/quote" className="btn-primary">Get a quote →</Link>
            </div>
          </article>

        </div>
      </section>

      {/* === Service Frequencies / Plans === */}
      <section className="service-tiers section">
        <div className="container">
          <header className="tiers-header">
            <h2 className="h2 tiers-title">
              Residential and commercial cleaning
              <br />services tailored to your needs.
            </h2>
          </header>

          <ul className="tiers-grid" role="list">
            <li className="tier-card">
              <h3 className="tier-title">One-time Deep Cleaning</h3>
              <p className="tier-text">
                Need a thorough clean just once? We’ll handle the heavy lift and reset your space.
              </p>
            </li>
            <li className="tier-card">
              <h3 className="tier-title">Weekly Cleaning</h3>
              <p className="tier-text">
                Week after week, enjoy the delight of a refreshingly clean and impeccably organized space.
              </p>
            </li>

            <li className="tier-card">
              <h3 className="tier-title">Bi-weekly Cleaning</h3>
              <p className="tier-text">
                Simplify your life with a hassle-free cleaning rhythm and a consistently tidy home.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <FAQSection
        items={[
          { q: "What areas do you service?", a: "Woodstock, Tillsonburg, and the Oxford County area." },
          { q: "What happens after I book a cleaning?", a: "Once you book, we’ll send a confirmation with your scheduled date, time, and service details. Our team will arrive prepared with all supplies, follow your checklist, and keep you updated if anything changes." },
          { q: "Do you use eco-friendly products?", a: "We also provide eco-friendly options upon request." }
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
}

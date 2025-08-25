import React from "react";
import SectionHero from "../components/SectionHero";
import "../css/service.css";
import heroBg from "../assets/i1.jpg";
import FAQSection from "../components/FAQSection";
import CtaGetQuote from "../components/CtaGetQuote";
import SiteFooter from "../components/SiteFooter";


export default function Service() {
  return (
    <main className="service-page">
      <SectionHero
        title="Our Cleaning Services"
        subtitle="Reliable home & office cleaning tailored to you."
        bgImage={heroBg}
        height="44vh"
        rounded
        align="left"
      />

      {/* black band under hero */}
      <div className="page-hero-band" aria-hidden="true" />

      {/* --- Intro (no pop) --- */}
      <section className="service-intro section">
        <div className="container">
          <h2 className="h2">Premium Cleaning, Local Care</h2>
          <p className="muted">
            We proudly serve <strong>Woodstock, Ingersoll, Tillsonburg, London,
            Kitchener, Waterloo</strong>, and <strong>Brantford</strong>. As a licensed, family-owned
            company, we focus on dependable quality, clear communication, and flexible scheduling.
            Eco-friendly options are available on request.
          </p>
        </div>
      </section>

      {/* --- Services: alternating layout (image/content) --- */}
      <section className="service-alt section">
        <div className="container service-alt-list">

          {/* 1 — Residential (image LEFT, black frame) */}
          <article className="service-item">
            <div className="service-media frame-black">
              <img src={heroBg} alt="Residential cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Residential Cleaning</h3>
              <p className="muted">
                Routine, deep, and custom house cleaning—bedrooms, kitchens, bathrooms, and
                living spaces—plus helpful add-ons like linen changes and dish care. Upfront
                pricing and dependable quality every visit.
              </p>
              <ul className="service-bullets" role="list">
                <li>Weekly, bi-weekly, monthly</li>
                <li>Deep cleans & move-ready shines</li>
                <li>Clear, upfront pricing</li>
              </ul>
              <br />
              <a className="btn-primary" href="/quote">Get a quote →</a>
            </div>
          </article>

          {/* 2 — Post-Construction (image RIGHT, purple frame) */}
          <article className="service-item is-reverse">
            <div className="service-media frame-purple">
              <img src={heroBg} alt="Post-construction cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Post-Construction Cleaning</h3>
              <p className="muted">
                Careful, detailed dust removal and polish after renovations or new builds so the
                space looks finished and feels safe.
              </p>
              <ul className="service-bullets" role="list">
                <li>Fine dust control</li>
                <li>Cabinets, baseboards, glass</li>
                <li>Final turnover ready</li>
              </ul>
               <br />
              <a className="btn-primary" href="/quote">Get a quote →</a>
            </div>
          </article>

          {/* 3 — Office (image LEFT, black frame) */}
          <article className="service-item">
            <div className="service-media frame-black">
              <img src={heroBg} alt="Office and commercial cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Office &amp; Commercial</h3>
              <p className="muted">
                Professional cleaning for offices and workspaces—consistent results that support a
                healthy team and a welcoming client experience.
              </p>
              <ul className="service-bullets" role="list">
                <li>After-hours available</li>
                <li>Custom scopes & schedules</li>
                <li>Sanitizing high-touch areas</li>
              </ul>
               <br />
              <a className="btn-primary" href="/quote">Get a quote →</a>
            </div>
          </article>

          {/* 4 — Move-In / Move-Out (image RIGHT, purple frame) */}
          <article className="service-item is-reverse">
            <div className="service-media frame-purple">
              <img src={heroBg} alt="Move-in move-out cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Move-In / Move-Out</h3>
              <p className="muted">
                Start fresh or hand over the keys with confidence—top-to-bottom cleaning for empty
                homes and apartments.
              </p>
              <ul className="service-bullets" role="list">
                <li>Inside cabinets & appliances</li>
                <li>Baseboards & fixtures</li>
                <li>Staging-ready finish</li>
              </ul>
               <br />
              <a className="btn-primary" href="/quote">Get a quote →</a>
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

      <li className="tier-card">
        <h3 className="tier-title">One-time Deep Cleaning</h3>
        <p className="tier-text">
          Need a thorough clean just once? We’ll handle the heavy lift and reset your space.
        </p>
      </li>
    </ul>
  </div>
</section>


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
}

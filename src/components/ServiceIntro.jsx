// components/ServiceIntro.jsx
import React from "react";
import "../css/service.css";
import CTADuo from "../components/CTADuo";

export default function ServiceIntro({
  imgSrc,
  quoteHref = "/quote",
  introTitle = "Premium Cleaning, Local Care",
  introBody = (
    <>
      We proudly serve <strong>Woodstock, Ingersoll, Tillsonburg, London,
      Kitchener, Waterloo</strong>, and <strong>Brantford</strong>. As a licensed,
      family-owned company, we focus on dependable quality, clear communication,
      and flexible scheduling. Eco-friendly options are available on request.
      <strong> Our Buisness Hours:</strong>
    </>
  ),
  tiersTitle = (
    <>
      Residential and commercial cleaning
      <br />services tailored to your needs.
    </>
  ),
}) {
  return (
    <div className="service-scope">{/* <-- makes styles match Service page */}
      {/* --- Intro (no pop) --- */}
      <section className="service-intro section">
        <div className="container">
          <h2 className="h2">{introTitle}</h2>
          <p className="muted">{introBody}</p>
        </div>
      </section>


      

      {/* --- Services: alternating layout (image/content) --- */}
      <section className="service-alt section">
        <div className="container service-alt-list">
          <article className="service-item">
            <div className="service-media frame-black">
              <img src={imgSrc} alt="Residential cleaning" className="service-img" />
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
                <li>Deep cleans &amp; move-ready shines</li>
                <li>Clear, upfront pricing</li>
              </ul>
              <br />
              <a className="btn-primary" href={quoteHref}>Get a quote →</a>
            </div>
          </article>

          <article className="service-item is-reverse">
            <div className="service-media frame-purple">
              <img src={imgSrc} alt="Post-construction cleaning" className="service-img" />
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
              <a className="btn-primary" href={quoteHref}>Get a quote →</a>
            </div>
          </article>

          <article className="service-item">
            <div className="service-media frame-black">
              <img src={imgSrc} alt="Office and commercial cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Office &amp; Commercial</h3>
              <p className="muted">
                Professional cleaning for offices and workspaces—consistent results that support a
                healthy team and a welcoming client experience.
              </p>
              <ul className="service-bullets" role="list">
                <li>After-hours available</li>
                <li>Custom scopes &amp; schedules</li>
                <li>Sanitizing high-touch areas</li>
              </ul>
              <br />
              <a className="btn-primary" href={quoteHref}>Get a quote →</a>
            </div>
          </article>
        </div>
      </section>

      <CTADuo
        primaryHref="/services"
        primaryLabel="Learn more about our Cleaning Services"
        secondaryHref="tel:+18884776243"
        secondaryLabel="Call us at 1-888-477-MAID"
      />

      {/* === Service Frequencies / Plans === */}
      <section className="service-tiers section">
        <div className="container">
          <header className="tiers-header">
            <h2 className="h2 tiers-title">{tiersTitle}</h2>
          </header>
          <ul className="tiers-grid" role="list">
            <li className="tier-card">
              <h3 className="tier-title">Weekly Cleaning</h3>
              <p className="tier-text">Week after week, enjoy the delight of a refreshingly clean and impeccably organized space.</p>
            </li>
            <li className="tier-card">
              <h3 className="tier-title">Bi-weekly Cleaning</h3>
              <p className="tier-text">Simplify your life with a hassle-free cleaning rhythm and a consistently tidy home.</p>
            </li>
            <li className="tier-card">
              <h3 className="tier-title">One-time Deep Cleaning</h3>
              <p className="tier-text">Need a thorough clean just once? We’ll handle the heavy lift and reset your space.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

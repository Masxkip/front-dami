// components/ServiceIntro.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/service.css";
import CTADuo from "../components/CTADuo";
import heroBg1 from "../assets/m2.png";
import heroBg2 from "../assets/m3.png";
import heroBg3 from "../assets/m4.png";
import heroBg4 from "../assets/m1.png";

export default function ServiceIntro({

  quoteHref = "/quote",
  introTitle = "Custom Cleaning Services Tailored For You",
  introBody = (
    <>
       We proudly serve <strong>Woodstock, Tillsonburg, and the Oxford County area</strong> with 
          professional cleaning for both homes and businesses. From routine upkeep to detailed deep cleans, 
          move-in/move-out services, and office sanitization, our licensed professional team delivers 
          dependable quality, clear communication, and flexible scheduling. Eco-friendly options are always 
          available on request.
          <br /> <strong>Our Service Hours:</strong> <strong>MON-FRI:</strong> 9:00AM - 5:00PM <strong>|</strong> <strong>SAT-SUN:</strong> 9:00AM - 5:00PM
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
              <img src={heroBg1} alt="Residential cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Detailed Deep Cleaning</h3>
              <p className="muted">
                When your space needs a true reset, our deep clean goes beyond the basics. We target
                hard-to-reach and often-missed areas—inside appliances and cabinets, baseboards, vents,
                trim, and more—to restore a like-new feel for seasonal refreshes or special occasions.
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

          <article className="service-item is-reverse">
            <div className="service-media frame-purple">
              <img src={heroBg2} alt="Post-construction cleaning" className="service-img" />
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
                <li>Reliable, insured, professional staff</li>
              </ul>
              <br />
              <Link to="/quote" className="btn-primary">Get a quote →</Link>
            </div>
          </article>

          <article className="service-item">
            <div className="service-media frame-black">
              <img src={heroBg3} alt="Office and commercial cleaning" className="service-img" />
            </div>
            <div className="service-copy">
              <h3 className="h3">Move In / Move Out Cleaning</h3>
              <p className="muted">
                Start fresh or hand over the keys with confidence. We clean empty homes top-to-bottom—
                interiors, appliances, and fixtures—so moving day is simpler and final walkthroughs are a breeze.
              </p>
              <ul className="service-bullets" role="list">
                <li>Inside cabinets, closets & appliances</li>
                <li>Baseboards, fixtures & doors detailed</li>
                <li>Kitchen & bathroom sanitization</li>
                <li>Landlord, tenant & realtor-ready finish</li>
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
        secondaryHref="tel:+14389265251"
        secondaryLabel="Call us at 1-438-925-5351"
      />

      {/* === Service Frequencies / Plans === */}
      <section className="service-tiers section">
        <div className="container">
          <header className="tiers-header">
            <h2 className="h2 tiers-title">{tiersTitle}</h2>
          </header>
          <ul className="tiers-grid" role="list">
            <li className="tier-card">
              <h3 className="tier-title">One-time Deep Cleaning</h3>
              <p className="tier-text">Need a thorough clean just once? We’ll handle the heavy lift and reset your space.</p>
            </li>
            <li className="tier-card">
              <h3 className="tier-title">Weekly Cleaning</h3>
              <p className="tier-text">Week after week, enjoy the delight of a refreshingly clean and impeccably organized space.</p>
            </li>
            <li className="tier-card">
              <h3 className="tier-title">Bi-weekly Cleaning</h3>
              <p className="tier-text">Simplify your life with a hassle-free cleaning rhythm and a consistently tidy home.</p>
            </li>
            
          </ul>
        </div>
     
      </section>
    </div>
  );
}

// components/ServiceIntro.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/service.css";
import CTADuo from "../components/CTADuo";
import { cld } from "../lib/cloudinary";
import { IMG } from "../assets/cloudinaryImages";


const svc2 = cld(IMG.service2, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const svc4 = cld(IMG.service4, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const svc5 = cld(IMG.service5, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");


export default function ServiceIntro({

  quoteHref = "/quote",
  introTitle = "Custom Cleaning Services Tailored For You",
  introBody = (
    <>
       We proudly serve <strong>Woodstock, Tillsonburg, and the Oxford County area</strong> with 
          professional cleaning for both homes and businesses. From routine upkeep to detailed deep cleans, 
          move-in/move-out services, and office sanitization, our licensed professional team delivers 
          dependable quality, clear communication, and flexible scheduling. We also provide eco-friendly options upon request.

          <br /> <strong>Our Service Hours:</strong> <strong>MON-FRI:</strong> 9:00AM - 5:00PM <strong>|</strong> <strong>SAT-SUN:</strong> <strong>Closed</strong>
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
              <img src={svc2} alt="Detailed deep cleaning" className="service-img" loading="lazy" decoding="async" />
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

          <article className="service-item is-reverse">
            <div className="service-media frame-purple">
              <img src={svc4} alt="Office and commercial sanitization" className="service-img" loading="lazy" decoding="async" />
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
                <li>Reliable, professional staff</li>

              </ul>
              <br />
              <Link to="/quote" className="btn-primary">Get a quote →</Link>
            </div>
          </article>

          <article className="service-item">
            <div className="service-media frame-black">
              <img src={svc5} alt="Move-in and move-out cleaning" className="service-img" loading="lazy" decoding="async" />
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
              <a className="btn-primary" href={quoteHref}>Get a quote →</a>
            </div>
          </article>
        </div>
      </section>

      <CTADuo
        primaryHref="/services"
        primaryLabel="Learn more about our Cleaning Services"
        secondaryHref="tel:+14389265351"
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

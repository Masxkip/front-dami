import React, { useState } from "react";
import SectionHero from "../components/SectionHero";
import "../css/quote.css";
// You can import an asset or pass a public path:
import heroBg from "../assets/i1.jpg";
import FAQSection from "../components/FAQSection";
import SiteFooter from "../components/SiteFooter";


const API_URL = import.meta.env.VITE_BACKEND_URL; // optional backend

export default function Quote() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    propertyType: "",
    bedrooms: "",
    date: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDone(false);
    setError("");

    try {
      // Swap this fetch for your real endpoint or email service
      await fetch(`${API_URL || ""}/api/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => new Promise((res) => setTimeout(res, 800))); // demo fallback

      setDone(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        service: "",
        propertyType: "",
        bedrooms: "",
        date: "",
        message: "",
      });
    } catch {
      setError("Could not send your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="quote-page">
      <SectionHero
        title="Get a Fast, Fair Quote"
        subtitle="Tell us a bit about your space and the service you need. We’ll reply quickly with clear pricing—no surprises."
        bgImage={heroBg}
        height="44vh"
        rounded
        align="left"
      />
      {/* NEW: black band under the curved hero */}
<div className="page-hero-band" aria-hidden="true" />

      <section className="container pop-into-band">
        <div className="quote-grid">
          {/* Form */}
          <div className="card">
            <h2 className="h2">Request a quote</h2>
            <p className="muted">
              Fill this out and we’ll get back to you promptly (usually same day).
            </p>

            <form className="quote-form" onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="(555) 555-5555"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="city">City/Area</label>
                  <input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={onChange}
                    placeholder="e.g., London, ON"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option>Standard House Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move In / Move Out</option>
                    <option>Post-Construction</option>
                    <option>Office / Commercial</option>
                    <option>Window Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="propertyType">Property type</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={form.propertyType}
                    onChange={onChange}
                  >
                    <option value="">Select type</option>
                    <option>Apartment / Condo</option>
                    <option>Townhouse</option>
                    <option>Detached Home</option>
                    <option>Office / Retail</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="bedrooms">Bedrooms (or area size)</label>
                  <input
                    id="bedrooms"
                    name="bedrooms"
                    value={form.bedrooms}
                    onChange={onChange}
                    placeholder="e.g., 3 bed / 1,400 sq ft"
                  />
                </div>
                <div className="field">
                  <label htmlFor="date">Preferred date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Notes / special requests</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Any priorities, access info, pets, parking, etc."
                />
              </div>

              {error && <p className="error">{error}</p>}
              {done && (
                <p className="success">
                  Thanks! Your request was sent. We’ll be in touch shortly.
                </p>
              )}

              <div className="actions">
                <button className="btn-primary" disabled={loading}>
                  {loading ? "Sending..." : "Get my quote"}
                </button>
                <span className="help">
                  Prefer to talk? Call us: <strong>(555) 555-5555</strong>
                </span>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="card">
            <h3 className="h3">What you’ll get</h3>
            <ul className="list">
              <li>Clear, itemized pricing</li>
              <li>No hidden fees or long contracts</li>
              <li>Flexible scheduling (evenings & weekends)</li>
              <li>Licensed, insured, and vetted cleaners</li>
            </ul>

            <div className="spacer" />

            <h4 className="h4">Popular services</h4>
            <div className="badges">
              <span className="badge">Deep Clean</span>
              <span className="badge">Move In/Out</span>
              <span className="badge">Office</span>
              <span className="badge">Windows</span>
            </div>

            <div className="spacer" />

            <h4 className="h4">Response time</h4>
            <p className="muted">We usually reply within a few business hours.</p>
          </aside>
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
          
                                <SiteFooter />
                              </div>

      
    </main>
  );
}

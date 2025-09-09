import React, { useState } from "react";
import SectionHero from "../components/SectionHero";
import "../css/quote.css";
import heroBg from "../assets/i1.jpg";
import FAQSection from "../components/FAQSection";
import SiteFooter from "../components/SiteFooter";
import FormAlert from "../components/FormAlert";

const API_URL = import.meta.env.VITE_BACKEND_URL;

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
      const res = await fetch(`${API_URL}/api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // backend formats all fields; include everything you collect
        body: JSON.stringify(form),
      });

      let data = null;
      try { data = await res.json(); } catch {}

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

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

      if (data.preview) {
        console.log("Ethereal preview:", data.preview);
      }
    } catch (err) {
      setError(err.message || "Could not send your request. Please try again.");
      setDone(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="quote-page">
      <SectionHero
        title="Get a Fast, Fair Quote"
        subtitle="Tell us a bit about your space and the service you need. We’ll reply quickly with clear pricing, no surprises."
        bgImage={heroBg}
        height="44vh"
        rounded
        align="left"
      />
      
      <div className="page-hero-band" aria-hidden="true" />

      <section className="container pop-into-band">
        <div className="quote-grid">
          <div className="card">
            <h2 className="h2">Request a quote</h2>
            <p className="muted">Fill this out and we’ll get back to you promptly.</p>

            <form className="quote-form" onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="fullName">Full name</label>
                  <input id="fullName" name="fullName" value={form.fullName} onChange={onChange} placeholder="Jane Doe" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="(555) 555-5555" required />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label htmlFor="city">City/Area</label>
                  <input id="city" name="city" value={form.city} onChange={onChange} placeholder="e.g., Woodstock, ON" />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select id="service" name="service" value={form.service} onChange={onChange} required>
                    <option value="">Select a service</option>
                    <option>Standard House Cleaning</option>
                    <option>Detailed Deep Cleaning</option>
                    <option>Weekly/ Monthly Home Cleaning</option>
                    <option>Office / Commercial Sanitization</option>
                    <option>Move In / Move Out Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="propertyType">Property type</label>
                  <select id="propertyType" name="propertyType" value={form.propertyType} onChange={onChange}>
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
                  <input id="bedrooms" name="bedrooms" value={form.bedrooms} onChange={onChange} placeholder="e.g., 3 bed / 1,400 sq ft" />
                </div>
                <div className="field">
                  <label htmlFor="date">Preferred date</label>
                  <input id="date" name="date" type="date" value={form.date} onChange={onChange} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Notes / special requests</label>
                <textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Any priorities, access info, pets, parking, etc." />
              </div>

              <div className="actions">
                <button className="btn-primary" disabled={loading}>
                  {loading ? "Sending..." : "Get my quote"}
                </button>

                  
                <span className="help">Prefer to talk? Call us: <strong>(438) 925-5351</strong></span>
                  {error && (  
                  <FormAlert kind="error" onClose={() => setError("")} autoHideMs={8000}>
                    Message Failed! Try Again.
                  </FormAlert>
                  )}
                
                {done && (
            <FormAlert kind="success" onClose={() => setDone(false)} autoHideMs={6000}>
              Request sent — we’ll reply shortly.
            </FormAlert>
          )}
              </div>
            </form>
          </div>

          <aside className="card">
            <h3 className="h3">What you’ll get</h3>
            <ul className="list">
              <li>Clear, itemized pricing</li>
              <li>No hidden fees or long contracts</li>
              <li>Flexible scheduling</li>
              <li>Licensed and vetted cleaners</li>
            </ul>

            <div className="spacer" />
            <h4 className="h4">Popular services</h4>
            <div className="badges">
              <span className="badge">Deep Clean</span>
              <span className="badge">Move In/Out</span>
              <span className="badge">Office Sanitization</span>
            </div>

            <div className="spacer" />
            <h4 className="h4">Service Hours</h4>
            <p className="muted">MON–FRI: <span>8:00 AM – 6:00 PM</span></p>
            <p className="muted">SAT–SUN: <span>CLOSED</span></p>

            <h4 className="h4">Response time</h4>
            <p className="muted">We usually reply within a few business hours.</p>
          </aside>
        </div>
      </section>

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
        <SiteFooter />
      </div>
    </main>
  );
}

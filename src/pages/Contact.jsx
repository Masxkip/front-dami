import React, { useState } from "react";
import SectionHero from "../components/SectionHero";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "../css/contact.css";
import FAQSection from "../components/FAQSection";
import SiteFooter from "../components/SiteFooter";

// REMOVE this if present:
// import { cld } from "../lib/cloudinary";
import { IMG } from "../assets/cloudinaryImages";





const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
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
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Backend accepts fullName (and name), email, phone, message
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      let data = null;
      try { data = await res.json(); } catch {}

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setDone(true);
      setForm({ fullName: "", email: "", phone: "", message: "" });

      if (data.preview) {
        // Ethereal preview URL (only during testing with Ethereal)
        console.log("Ethereal preview:", data.preview);
      }
    } catch (err) {
      setError(err.message || "We couldn’t send your message. Please try again.");
      setDone(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
  <SectionHero
  title="Contact Us"
  subtitle="Call, email, or send a quick message—our team will get back to you promptly."
  bgPublicId={IMG.hero}
  height="44vh"
  rounded
  align="left"
/>


      {/* NEW: black band under the curved hero */}
      <div className="page-hero-band" aria-hidden="true" />

      <section className="container pop-into-band">
        <div className="contact-grid">
          {/* Left: contact details */}
          <div className="card">
            <h2 className="h2">Get in touch</h2>

            <ul className="info-list">
              <li className="info-item">
                <span className="icon"><Phone size={22} /></span>
                <div>
                  <div className="info-label">Call Us</div>
                  <a href="tel:+14389265351" className="info-value">
                    (438) 925-5351
                  </a>
                </div>
              </li>

              <li className="info-item">
                <span className="icon"><Mail size={22} /></span>
                <div>
                  <div className="info-label">Email Us</div>
                  <a href="mailto:info@heartandcarecleaningservices.ca" className="info-value">
                    info@heartandcarecleaningservices.ca
                  </a>
                </div>
              </li>

              <li className="info-item">
                <span className="icon"><MapPin size={22} /></span>
                <div>
                  <div className="info-label">Location</div>
                  <address className="info-value not-italic">
                    Woodstock, ON<br />
                  </address>
                </div>
              </li>

              <li className="info-item">
                <span className="icon"><Clock size={22} /></span>
                <div className="hours">
                  <div className="info-label">Service Hours</div>
                  <ul>
                    <li><span>Mon-Fri</span><span>8:00 AM – 6:00 PM</span></li>                    
                    <li><span>Sat-Sun</span><span>Closed</span></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: message form */}
          <aside className="card">
            <h3 className="h3">Send a message</h3>
            <p className="muted">We usually reply the same business day.</p>

            <form className="contact-form" onSubmit={submit}>
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

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              {error && <p className="error" role="alert">{error}</p>}
              {done && <p className="success">Thanks! Your message was sent.</p>}

              <div className="actions">
                <button className="btn-primary" disabled={loading}>
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </aside>
        </div>
      </section>

      <FAQSection
              items={[
                { q: "What areas do you service?", a: "Woodstock, Tillsonburg, and Oxford County area." },
                { q: "Are your cleaners background-checked?", a: "Yes! Our team members are carefully vetted and trained before joining Heart & Care." },
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

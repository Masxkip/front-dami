import React, { useMemo, useState, useEffect, useId } from "react";
import SectionHero from "../components/SectionHero";
import "../css/fqs.css";
import heroBg from "../assets/i1.jpg";
import CTADuo from "../components/CTADuo";
import CtaGetQuote from "../components/CtaGetQuote";
import SiteFooter from "../components/SiteFooter";

const FAQ_DATA = [
  {
  id: "about-us",
  label: "About H&C Cleaning",
  items: [
    {
      q: "What is H&C Cleaning?",
      a: "H&C Cleaning is a licensed, family-owned cleaning company serving homes and businesses with dependable quality, clear communication, and flexible scheduling. We prioritize privacy, safety, and friendly service, with eco-friendly options available on request."
    },
    {
      q: "What makes H&C Cleaning different from other cleaning services?",
      a: "We’re local and community-driven. Our team follows clear checklists, uses modern tools, and tailors each clean to your space, schedule, and preferences. We’re known for showing up on time, communicating clearly, and delivering consistent results backed by a people-first approach."
    },
    {
      q: "Where does H&C Cleaning currently operate?",
      a: "We proudly serve Woodstock, Tillsonburg, and the Oxford County area."
    },

    {
      q: "Do you clean both homes and offices?",
      a: "Yes. We serve residential spaces (homes, condos, apartments) and small offices or commercial spaces, including post-construction sites."
    },
    {
      q: "What cleaning services does H&C Cleaning offer?",
      a: "Standard house cleaning, detailed deep cleaning, weekly/bi-weekly/monthly plans, office and commercial sanitization, move-in/move-out cleaning, and post-construction cleaning. Helpful add-ons include bed linen changes, dishwasher loading or unloading, and laundry folding."
    },
    {
      q: "Do you offer customized cleaning packages?",
      a: "Yes. We build plans around your priorities and timing, offer flexible scheduling and upfront pricing, and can use eco-friendly products on request. We bring our own supplies but can use yours if you prefer."
    }
  ]
},

  {
  id: "services-and-scope",
  label: "Services & Scope",
  items: [
    {
      q: "Can I customize what gets cleaned?",
      a: "Yes. We tailor each visit to your priorities—rooms, tasks, and add-ons. Tell us what matters most during booking, and we’ll build your checklist around it."
    },
    {
      q: "What’s included in a standard cleaning?",
      a: "General dusting and wipe-downs, kitchen and bathroom refresh, exterior appliance surfaces, mirrors, tidy counters, vacuuming and mopping of floors, and light spot checks. It’s designed to keep your home consistently fresh between deeper cleans."
    },
    {
      q: "How long will the cleaning take?",
      a: "Timing depends on size, condition, and scope. As a guide: 1–2 hours for studio/1-bed, 2–3.5 hours for 2–3 beds, 3.5–6 hours for larger homes or first-time cleans. We’ll give a clearer estimate with your quote."
    },
    {
      q: "What’s included in a deep cleaning?",
      a: "Detail work in often-missed areas: inside appliances (oven/fridge) and cabinets (on request), baseboards, trim, vents, door frames, tile grout touch-ups, and behind/under reachable furniture. It restores a like-new feel and pairs well before starting a recurring plan."
    },
    {
      q: "Do I need to provide cleaning supplies or equipment?",
      a: "No. We bring our own tools and products. If you prefer we use something specific in your home (e.g., a particular floor cleaner), we’re happy to use it."
    },
    {
      q: "Do you use eco-friendly cleaning products?",
      a: "Yes. We also provide eco-friendly options upon request. Let us know your preference when booking."
    }
  ]
},

{
  id: "pricing-and-booking",
  label: "Booking & Scheduling",
  items: [
    {
      q: "How do I book a cleaning with H&C Cleaning?",
      a: "You can request a free quote and book directly through our website, or by contacting us by phone or email. We’ll confirm the details and schedule your cleaning at a time that works best for you."
    },
    {
      q: "What happens after I book a cleaning?",
      a: "Once you book, we’ll send a confirmation with your scheduled date, time, and service details. Our team will arrive prepared with all supplies, follow your checklist, and keep you updated if anything changes."
    },
    {
      q: "How far in advance should I book a cleaning?",
      a: "We recommend booking at least a few days to a week in advance to secure your preferred time, especially for weekends or deep cleans. Same-week bookings may be available depending on our schedule."
    },
    {
      q: "Can I book recurring cleanings (weekly, bi-weekly, monthly)?",
      a: "Yes. We offer flexible recurring plans on a weekly, bi-weekly, or monthly basis. Recurring cleanings help keep your home consistently fresh, save you time, and come with predictable scheduling and upfront pricing. You can adjust or pause your plan anytime to fit your needs."
    },

    {
      q: "Can I schedule, reschedule, or cancel online?",
      a: "Yes. Scheduling changes can be made through our online booking system or by contacting us directly. We’ll adjust your appointment quickly and send confirmation."
    },
    {
      q: "What’s your cancellation policy?",
      a: "We ask for at least 24 hours’ notice if you need to cancel or reschedule. This allows us to adjust our team’s schedule and accommodate other clients. Last-minute cancellations may be subject to a small fee."
    }
  ]
},

{
  id: "pricing-and-payment",
  label: "Pricing & Payment",
  items: [
    {
      q: "How do you determine the price of a cleaning?",
      a: "Pricing is based on the size of your home or office, the type of service (standard, deep, post-construction, or move-in/out), and any add-ons you request. We provide upfront quotes so you always know what to expect."
    },
    {
      q: "Do you offer flat-rate or hourly pricing?",
      a: "Most services are quoted at a flat rate based on scope and size. For unique or one-time projects, hourly rates may apply. We’ll confirm this before your booking is finalized."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept major credit and debit cards, e-transfers, and online payments. Details are provided with your booking confirmation."
    },
    {
      q: "When is payment due?",
      a: "Payment is due on the day of service. For recurring clients, we can set up a regular billing schedule for convenience."
    },
    {
      q: "Do you require a deposit?",
      a: "For large or first-time bookings, we may request a small deposit to secure your appointment. The remaining balance is due after the cleaning is completed."
    },
    {
      q: "Do you offer discounts or promotions?",
      a: "Yes. We occasionally run seasonal promotions and offer discounts for recurring clients. Be sure to ask about our current offers when booking."
    }
  ]
},


  {
  id: "safety-and-privacy",
  label: "Safety & Privacy",
  items: [
    {
      q: "How do you protect my privacy?",
      a: "We treat your home and personal information with the highest level of care. Any entry instructions, contact details, or preferences you share are kept strictly confidential."
    },
    {
      q: "Are your cleaners background-checked?",
      a: "Yes. Every member of our team is vetted and trained before working in clients’ homes or offices. We only send people we would trust in our own homes."
    },
    {
      q: "Do I need to be home during the cleaning?",
      a: "Not at all. Many clients provide access instructions and return to a refreshed space. If you prefer to be present, we’ll work around your routine."
    },
    {
      q: "How do you ensure safety while cleaning?",
      a: "We follow safe working practices, use appropriate protective gear, and handle all products with care. Our team is trained to work safely in homes, offices, and post-construction environments."
    },
    {
      q: "Do you use eco-friendly cleaning products?",
      a: "Yes. We also provide eco-friendly cleaning options upon request. Just let us know your preference when booking."
    },
    {
      q: "What if I’m not satisfied with the cleaning?",
      a: "Your peace of mind matters to us. If something was missed or not completed to your expectations, let us know within 24 hours and we’ll make it right."
    }
  ]
}

];

export default function Fqs() {
  const [activeCat, setActiveCat] = useState("all");
  const [openKey, setOpenKey] = useState(null);     // which accordion item is open
  const [ready, setReady] = useState(false);        // avoid mount flicker
  const baseId = useId();

  useEffect(() => setReady(true), []);

  // Flatten for simple filtering
  const flatList = useMemo(() => {
    const list = [];
    FAQ_DATA.forEach(cat =>
      cat.items.forEach((item, idx) =>
        list.push({ ...item, catId: cat.id, catLabel: cat.label, key: `${cat.id}-${idx}` })
      )
    );
    return list;
  }, []);

  const filteredKeys = useMemo(() => {
    return flatList
      .filter(i => activeCat === "all" || i.catId === activeCat)
      .map(i => i.key);
  }, [flatList, activeCat]);

  // Group visible items by category for rendering the existing accordion list
  const grouped = useMemo(() => {
    const map = new Map();
    FAQ_DATA.forEach(cat => {
      const items = cat.items
        .map((it, idx) => ({ key: `${cat.id}-${idx}`, ...it }))
        .filter(it => filteredKeys.includes(it.key));
      if (items.length) map.set(cat, items);
    });
    return map;
  }, [filteredKeys]);

  // JSON-LD (SEO)
  const jsonLd = useMemo(() => {
    const visible = flatList.filter(i => filteredKeys.includes(i.key)).slice(0, 20);
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": visible.map(v => ({
        "@type": "Question",
        "name": v.q,
        "acceptedAnswer": { "@type": "Answer", "text": v.a }
      }))
    };
  }, [flatList, filteredKeys]);

  return (
    <main className="fqs-page">
      <SectionHero
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about pricing, scheduling, and what’s included."
        bgImage={heroBg}
        height="44vh"
        rounded
        align="left"
      />
      <div className="page-hero-band" aria-hidden="true" />

      {/* Only the pills*/}
      <section className="fqs-controls section">
        <div className="container">
          <nav className="fqs-pills center" aria-label="FAQ categories">
            <button
              className={`pill ${activeCat === "all" ? "is-active" : ""}`}
              onClick={() => setActiveCat("all")}
              type="button"
            >All</button>
            {FAQ_DATA.map(c => (
              <button
                key={c.id}
                className={`pill ${activeCat === c.id ? "is-active" : ""}`}
                onClick={() => setActiveCat(c.id)}
                type="button"
              >{c.label}</button>
            ))}
          </nav>
        </div>
      </section>

      {/* Keep your existing accordion list styles/classes intact */}
      <section className="fqs-groups section">
        <div className="container">
          {[...grouped.entries()].map(([cat, items]) => (
            <div className="fqs-group" key={cat.id} id={cat.id}>
              <h2 className="fqs-group-title">{cat.label}</h2>

              {/* DO NOT change these class names/styles */}
              <ul className="fqs-list" role="list" data-ready={ready}>
                {items.map(it => {
                  const isOpen = openKey === it.key;
                  const panelId = `${baseId}-panel-${it.key}`;
                  const btnId   = `${baseId}-button-${it.key}`;
                  return (
                    <li className="fqs-item" key={it.key}>
                      <button
                        id={btnId}
                        type="button"
                        className={`fqs-q ${isOpen ? "is-open" : ""}`}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenKey(isOpen ? null : it.key)}
                      >
                        <span className="fqs-q-text">{it.q}</span>
                        {/* your existing chevron is styled via .fqs-chevron */}
                        <span className="fqs-chevron" aria-hidden>▾</span>
                      </button>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        className={`fqs-a ${isOpen ? "open" : ""}`}
                      >
                        <p>{it.a}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {grouped.size === 0 && (
            <div className="fqs-empty muted">No results in this category.</div>
          )}
        </div>
      </section>


  <CTADuo
  primaryHref="/services"
  primaryLabel="Learn more about our Cleaning Services"
  secondaryHref="tel:+14389265351"
        secondaryLabel="Call us at 1-438-925-5351"
/>

      <div className="footer-wrap">
        <CtaGetQuote/>
        <SiteFooter />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}

import React, { useMemo, useState, useEffect, useId } from "react";
import SectionHero from "../components/SectionHero";
import "../css/fqs.css";
import heroBg from "../assets/i1.jpg";
import CTADuo from "../components/CTADuo";
import CtaGetQuote from "../components/CtaGetQuote";
import SiteFooter from "../components/SiteFooter";

const FAQ_DATA = [
  {
    id: "services",
    label: "Services",
    items: [
      { q: "What areas do you service?", a: "We proudly serve London, Woodstock, Tillsonburg, Ingersoll, Kitchener, Waterloo, and Brantford." },
      { q: "Do you offer post-construction cleaning?", a: "Yes—detailed dust removal, adhesive cleanup, inside cabinets, and more." },
      { q: "What types of spaces do you clean?", a: "Homes, condos, apartments, offices, and post-construction sites." },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    items: [
      { q: "How do you price a clean?", a: "Upfront pricing based on size, condition, and add-ons — no hidden fees." },
      { q: "Do you offer recurring discounts?", a: "Yes. Weekly, bi-weekly, and monthly plans include reduced rates." },
    ],
  },
  {
    id: "scheduling",
    label: "Scheduling",
    items: [
      { q: "How do I book or reschedule?", a: "Book online or contact us. Rescheduling is easy with advance notice." },
      { q: "Do I need to be home during the clean?", a: "No. Many clients provide secure entry instructions — we lock up when done." },
    ],
  },
  {
    id: "safety",
    label: "Safety & Privacy",
    items: [
      { q: "Are you licensed and insured?", a: "Yes. We’re fully licensed and insured for residential, office, and post-construction." },
      { q: "Do you offer eco-friendly options?", a: "We can accommodate eco-conscious products upon request." },
      { q: "How do you handle privacy?", a: "We safeguard personal information and follow safety-first protocols in your home." },
    ],
  },
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

      {/* Only the pills (centered) */}
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
  secondaryHref="tel:+18884776243"
  secondaryLabel="Call us at 1-888-477-MAID"
/>

      <div className="footer-wrap">
        <CtaGetQuote/>
        <SiteFooter />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}

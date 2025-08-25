// components/FAQSection.jsx
import React, { useState, useId, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import "../css/hfqs.css";

export default function FAQSection({
  title = "Frequently Asked Questions",
  ctaHref = "/faqs",
  ctaLabel = "VIEW ALL FAQS",
  items = [
    {
      q: "What areas do you service?",
      a: "We service London, Woodstock, Tillsonburg, Ingersoll, Kitchener, Brantford, and Waterloo.",
    },
    {
      q: "Are you insured?",
      a: "Yes. We’re fully licensed and insured for residential, office, and post-construction cleaning.",
    },
    {
      q: "What types of properties do you service?",
      a: "Houses, townhomes, condos, apartments, offices, and post-construction projects.",
    },
  ],
  /** When true, this section visually touches the next section (no bottom gap) */
  hugNext = true,
}) {
  // No item open on first load
  const [openIndex, setOpenIndex] = useState(-1);
  // Prevent first-paint animation flicker
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const baseId = useId();

  return (
    <section className={`faq-home ${hugNext ? "faq-flush" : ""}`}>
      <div className="container faq-wrap">
        {/* Title / CTA column */}
        <div className="faq-title-col">
          <h2 className="faq-title">{title}</h2>

          {ctaHref && (
            <a className="faq-cta" href={ctaHref}>
              {ctaLabel} <ArrowRight size={18} strokeWidth={2.4} />
            </a>
          )}
        </div>

        {/* FAQ list column */}
        <div className="faq-list-col">
          <ul className="faq-list" role="list" data-ready={ready}>
            {items.map((it, i) => {
              const isOpen = openIndex === i;
              const panelId = `${baseId}-panel-${i}`;
              const btnId = `${baseId}-button-${i}`;

              return (
                <li className="faq-item" key={i}>
                  <button
                    id={btnId}
                    className={`faq-q ${isOpen ? "is-open" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    type="button"
                  >
                    <span className="faq-q-text">{it.q}</span>
                    <ChevronDown className="faq-chevron" size={20} strokeWidth={2.6} />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`faq-a ${isOpen ? "open" : ""}`}
                  >
                    <p>{it.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { CheckCircle2 } from "lucide-react";
import "../css/why.css";

export default function WhyChoose({
  title = (
    <>
      Why Choose <span className="why-accent">H&C Cleaning?</span>
    </>
  ),
  intro = `At Blue Diamond Window Cleaning, we take pride in delivering unparalleled service with
  precision, professionalism, and a commitment to excellence. Whether it’s your home or
  business, we ensure every window shines with diamond brilliance.`,
  bullets = [
    "Exceptional Quality",
    "Professional Team",
    "Eco-Friendly Products",
    "Customer Satisfaction Guarantee",
    "Locally Owned and Operated",
  ],
  ctaText = "GET A QUOTE",
  ctaHref = "/quote",
  imgSrc = "../assets/i1.jpg",         
  imgAlt = "Blue Diamond service"
}) {
  return (
    <section className="why section">
      <div className="container">
        <div className="why-card">
          {/* image */}
          <div className="why-media">
            <img src={imgSrc} alt={imgAlt} className="why-img" />
          </div>

          {/* copy */}
          <div className="why-copy">
            <h2 className="why-title">{title}</h2>

            <p className="why-intro">
              {intro}
            </p>

            <ul className="why-list" role="list">
              {bullets.map((b, i) => (
                <li key={i} className="why-item">
                  <span className="why-icon">
                    <CheckCircle2 size={22} strokeWidth={2.4} />
                  </span>
                  <span className="why-text">{b}</span>
                </li>
              ))}
            </ul>

              <br />
            <a className="why-cta" href={ctaHref}>{ctaText}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

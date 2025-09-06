import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import "../css/why.css";

export default function WhyChoose({
  title = (
    <>
      Why Choose <span className="why-accent">H&C Cleaning?</span>
    </>
  ),
  intro = `  At Heart & Care Cleaning, we take pride in delivering service that blends precision,
  professionalism, and genuine care. Whether it’s your home or your business, our team of professionals shows up with dependable quality, clear communication, and a promise to
  leave every space healthier, brighter, and better than we found it.`,
  bullets = [
    "Exceptional Quality",
    "Professional Team",
    "Eco-Friendly Products",
    "Customer Satisfaction Guarantee",
    "Locally Owned and Operated",
  ],
  ctaText = "GET A QUOTE",
  imgSrc = "../assets/jjk1.png",         
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

            <Link to="/quote" className="btn-primary1">Get a quote →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

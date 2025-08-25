import React from "react";
import SectionHero from "../components/SectionHero";
import "../css/about.css";
import heroBg from "../assets/i1.jpg";
import storyImg from "../assets/i1.jpg";
import mission1 from "../assets/i1.jpg";
import mission2 from "../assets/i1.jpg";
import mission3 from "../assets/i1.jpg";


import FAQSection from "../components/FAQSection";
import CtaGetQuote from "../components/CtaGetQuote";
import SiteFooter from "../components/SiteFooter";



// use this instead
import { Handshake, MessageSquareText, ShieldCheck, Users, TrendingUp, BadgeCheck } from "lucide-react";



export default function About() {
  return (
    <main className="about-page">
      <SectionHero
        title="Heart & Care Cleaning Services"
        subtitle="Local, trustworthy, and detail-obsessed—meet the team behind the sparkle."
        bgImage={heroBg}
        height="44vh"
        rounded
        align="left"
      />
      <div className="page-hero-band" aria-hidden="true" />

      {/* OUR STORY */}
      <section className="story section">
        <div className="container story-grid">
          <div className="story-copy">
            <h2 className="h2 story-title">
              Our Story
              <span className="story-underline" style={{ backgroundColor: "#8b61ec" }} />
            </h2>
            <p className="muted">
              Heart &amp; Care began as a <strong>licensed, family-owned</strong> team with a simple goal:
              deliver dependable cleaning that neighbours can trust. What started as helping
              friends and local families grew into a small, community-oriented company known
              for consistency, kindness, and care.
              We’ve grown by word of mouth—investing in our people, refining our checklists,
              and using tools that help us clean smarter and safer. Through every stage, we’ve
              stayed true to who we are: a <strong>small local business</strong> that treats every home like
              our own and every client like a neighbour.
            </p>
            <p className="muted">
              Today we proudly serve <strong>Woodstock, Ingersoll, Tillsonburg, London, Kitchener,
              Waterloo,</strong> and <strong>Brantford</strong>. Whether it’s weekly home care, post-construction
              detail, or a sparkling office, our story is still the same—show up, do excellent
              work, and leave spaces better than we found them.
            </p>
          </div>

          <div className="story-media">
            <img src={storyImg} alt="Our team at Heart & Care Cleaning Services" className="story-img" />
          </div>
        </div>
      </section>


      {/* OUR CORE MISSION */}
    <section className="mission section" id="core-mission">
      <div className="container">
    <header className="mission-header">
      <h2 className="h2">Our Core Mission at H&amp;C Cleaning</h2>
      <p className="mission-subtitle">
        What guides every clean—and how we show up for our community.
      </p>
    </header>


    <div className="mission-list">
      {/* 1 — image LEFT, copy RIGHT */}
      <article className="mission-item">
        <div className="mission-media">
          <img src={mission1} alt="Consistent, high-standard cleaning" className="mission-img" />
        </div>
        <div className="mission-copy">
          <h3 className="h3">Quality, Every Visit</h3>
          <p className="muted">
            We deliver dependable results on each clean—guided by clear checklists, ongoing training,
            and modern tools—so every space meets our highest standards.
                        We deliver dependable results on each clean—guided by clear checklists, ongoing training,
            and modern tools—so every space meets our highest standards.
                        We deliver dependable results on each clean—guided by clear checklists, ongoing training,
            and modern tools—so every space meets our highest standards.
          </p>
        </div>
      </article>

      {/* 2 — copy LEFT, image RIGHT */}
      <article className="mission-item is-reverse">
        <div className="mission-copy">
          <h3 className="h3">Licensed, Family-Owned &amp; Community-Oriented</h3>
          <p className="muted">
            H&amp;C is proudly licensed and family-run. We’ve grown by caring for our neighbours and
            investing in our team—staying small enough to know you, and professional enough to earn your trust.
          </p>
        </div>
        <div className="mission-media">
          <img src={mission2} alt="Family-owned, community-focused team" className="mission-img" />
        </div>
      </article>

      {/* 3 — image LEFT, copy RIGHT */}
      <article className="mission-item">
        <div className="mission-media">
          <img src={mission3} alt="Simple, flexible service" className="mission-img" />
        </div>
        <div className="mission-copy">
          <h3 className="h3">Simple &amp; Flexible Service</h3>
          <p className="muted">
            Cleaning that fits your life—clear, upfront scheduling and plans tailored to your home or office,
            without hassle.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>



{/* OUR VALUES & WORK ETHIC */}
<section className="values section" id="values">
  <div className="container">
    <header className="values-header">
      <h2 className="h2">Our Values &amp; Work Ethic</h2>
      <p className="values-subtitle">
        The principles that guide how we clean, communicate, and care for every home.
      </p>
      <span className="values-underline" style={{ backgroundColor: "#7b61ff" }} />
    </header>

    <div className="values-copy">
      <p className="muted">
        We built H&amp;C as a <strong>licensed, family-owned</strong> company with a small-community mindset.
        That means showing up with <strong>mutual trust, integrity, and respect</strong>, being
        <strong> professional and reliable</strong> on every visit, and keeping
        <strong> communication efficient</strong> so your schedule—and your day—run smoothly.
      </p>
      <p className="muted">
        Your <strong>privacy and safety</strong> are non-negotiable. We safeguard personal information,
        follow safe working practices, and treat your space with care. We’re <strong>people-first</strong>—supporting
        our cleaners, serving our neighbours, and always <strong>improving</strong> our tools and checklists
        to deliver consistent results.
      </p>
    </div>

    {/* Six-value grid (2 rows × 3 columns on desktop) */}
    <ul className="values-grid" role="list">
      <li className="value-item">
        <div className="value-icon"><Handshake size={26} strokeWidth={2.25} /></div>
        <div className="value-title">Mutual Trust, Integrity, &amp; Respect</div>
      </li>

      <li className="value-item">
        <div className="value-icon"><BadgeCheck size={26} strokeWidth={2.25} /></div>
        <div className="value-title">Professionalism &amp; Reliability</div>
      </li>

      <li className="value-item">
          <div className="value-icon"><MessageSquareText size={26} strokeWidth={2.25} /></div>
        <div className="value-title">Quality Communication &amp; Efficiency</div>
      </li>

      <li className="value-item">
       <div className="value-icon"><ShieldCheck size={26} strokeWidth={2.25} /></div>
        <div className="value-title">Privacy &amp; Safety</div>
      </li>

      <li className="value-item">
       <div className="value-icon"><Users size={26} strokeWidth={2.25} /></div>
        <div className="value-title">Community-Oriented &amp; People-First</div>
      </li>

      <li className="value-item">
        <div className="value-icon"><TrendingUp size={26} strokeWidth={2.25} /></div>
        <div className="value-title">Continuous Improvement</div>
      </li>
    </ul>
  </div>
</section>

        {/* VIEW MORE + CALL */}
<section className="cta-duo section">
  <div className="container">
    <div className="cta-duo-row">
      <a href="/services" className="cta btn-solid">
        Learn more about our Cleaning Services
      </a>

      {/* tel: works on mobile/desktop to open dialer */}
      <a href="tel:+18884776243" className="cta btn-outline">
        Call us at 1-888-477-MAID
      </a>
    </div>
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
        <CtaGetQuote
        />
        <SiteFooter />
      </div>
    </main>
  );
}

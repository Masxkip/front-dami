import React from "react";
import { Link } from "react-router-dom";
import "../css/about.css";
import SectionHero from "../components/SectionHero";
import FAQSection from "../components/FAQSection";
import CtaGetQuote from "../components/CtaGetQuote";
import SiteFooter from "../components/SiteFooter";
import CTADuo from "../components/CTADuo";
import { Handshake, MessageSquareText, ShieldCheck, Users, TrendingUp, BadgeCheck } from "lucide-react";

import { cld } from "../lib/cloudinary";
import { IMG } from "../assets/cloudinaryImages";

// Cloudinary URLs
const aboutHero = cld(IMG.hero, "f_auto,q_auto,c_fill,g_auto,w_1920,h_520,dpr_auto");
const storyImgUrl = cld(IMG.story, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const mission1Url = cld(IMG.mission1, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const mission2Url = cld(IMG.mission2, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");
const mission3Url = cld(IMG.mission3, "f_auto,q_auto,c_fill,g_auto,w_1200,h_800,dpr_auto");

export default function About() {
  return (
    <main className="about-page">
      <SectionHero
        title="Heart & Care Cleaning Services"
        subtitle="Licensed, family-owned, and community-focused cleaning service you can count on."
        bgImage={aboutHero}
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
              to deliver dependable cleaning that neighbours can trust. What started as helping
              friends and local families grew into a small, community-oriented company known
              for consistency, kindness, and care. We’ve grown by word of mouth, investing in
              our people, refining our checklists, and using tools that help us clean smarter
              and safer. Through every stage, we’ve stayed true to who we are:
              a <strong>small local business</strong> that treats every home like our own and every client like a neighbour.
            </p>

            <p className="muted">
              Today we proudly serve <strong>Woodstock, Tillsonburg,</strong> and the <strong>Oxford County area</strong>.
              Whether it’s weekly home care, post-construction detail, or a sparkling office,
              our story is still the same: show up, do excellent work, and leave spaces better
              than we found them. As we continue to grow, our mission remains simple:
              to bring reliable, caring cleaning to every home and business we touch.
            </p>

            <p className="muted">
              Fully licensed and committed to excellence, we safeguard your privacy, respect your space,
              and deliver peace of mind on every visit. At Heart &amp; Care, cleaning is more than a service.
              It is our way of caring for people, families, and communities.
            </p>
          </div>

          <div className="story-media">
  <div className="story-photo">
    <img src={storyImgUrl} alt="Our team at Heart & Care Cleaning Services" className="story-img" />

    <div className="story-badge is-centered">
      <span className="story-badge-text">OUR STORY</span>
      <svg className="story-flourish" viewBox="0 0 240 30" aria-hidden="true">
        <path d="M5 15c30-20 60 20 90 0s60-20 90 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 22c10-8 20 8 30 0" fill="none" stroke="currentColor" strokeWidth="2" opacity=".7"/>
        <path d="M180 22c10-8 20 8 30 0" fill="none" stroke="currentColor" strokeWidth="2" opacity=".7"/>
      </svg>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* OUR CORE MISSION */}
      <section className="mission section" id="core-mission">
        <div className="container">
          <header className="mission-header">
            <h2 className="h2">Our Core Mission at H&amp;C Cleaning</h2>
            <p className="mission-subtitle">
              What guides every clean and how we show up for our community.
            </p>
          </header>

          <div className="mission-list">
        

            {/* 1 */}
            <article className="mission-item">
              <div className="mission-media">
                <div className="mission-photo">
                  <img src={mission1Url} alt="Consistent, high-standard cleaning" className="mission-img" />
                  <div className="mission-badge" aria-hidden="true">
                    <span className="mission-badge-text">Delighting Homeowners</span>
                    <svg className="mission-flourish" viewBox="0 0 240 30">
                      <path d="M5 15c30-20 60 20 90 0s60-20 90 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M30 22c10-8 20 8 30 0" fill="none" stroke="currentColor" strokeWidth="2" opacity=".7"/>
                      <path d="M180 22c10-8 20 8 30 0" fill="none" stroke="currentColor" strokeWidth="2" opacity=".7"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mission-copy">
                  <h3 className="h3">Delighting Homeowners</h3>
                <p className="muted">
                  We treat every home as if it were our own, with care, respect, and attention to detail.
                  From the first dusting to the final polish, our goal is to exceed expectations on every visit.
                  As a licensed, family-owned team, we follow clear checklists, respect your routines, and
                  communicate openly so you always know what has been done and what comes next. The result is
                  a space that feels refreshed, healthy, and genuinely cared for.
                </p>
                <ul className="service-bullets" role="list">
                  <li>Room-by-room checklists for consistent results</li>
                  <li>Respect for your time, privacy, and preferences</li>
                  <li>Eco-friendly options available on request</li>
                </ul>
              </div>
            </article>

          
<article className="mission-item is-reverse">
  <div className="mission-media">
    <div className="mission-photo">
      <img src={mission2Url} alt="Simple, flexible service" className="mission-img" />
      <div className="mission-badge" aria-hidden="true">
        <span className="mission-badge-text">Building Trust, Serving Community</span>
        <svg className="mission-flourish" viewBox="0 0 260 30">
          <path d="M5 15c30-20 60 20 90 0s60-20 90 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M30 22c10-8 20 8 30 0" fill="none" stroke="currentColor" strokeWidth="2" opacity=".7"/>
          <path d="M180 22c10-8 20 8 30 0" fill="none" stroke="currentColor" strokeWidth="2" opacity=".7"/>
        </svg>
      </div>
    </div>
  </div>
   <div className="mission-copy">
                <h3 className="h3">Building Trust, Serving Community</h3>
               <p className="muted">
                  Heart &amp; Care began by helping friends and neighbours, and we have grown by word of mouth
                  ever since. Trust is at the center of how we work. We show up reliably, safeguard personal
                  information, and take pride in leaving every space better than we found it. As a small,
                  community-oriented company, we invest in our people and keep our promises because that is
                  what good neighbours do.
                </p>
                <ul className="service-bullets" role="list">
                  <li>Licensed and accountability-first</li>
                  <li>Clear, friendly communication before and after each visit</li>
                  <li>People-first culture that supports our team and clients</li>
                </ul>
              </div>
</article>

            

           {/* 3 */}
{/* 3 */}
<article className="mission-item">
  <div className="mission-media">
    <div className="mission-photo">
      <img
        src={mission3Url}
        alt="Safety-focused cleaning with trained professionals"
        className="mission-img"
        loading="lazy"
        decoding="async"
      />
      <div className="mission-badge" aria-hidden="true">
        <span className="mission-badge-text">Safety in Every Step</span>
        <svg className="mission-flourish" viewBox="0 0 260 30">
          <path d="M5 15c30-20 60 20 90 0s60-20 90 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 22c10-8 20 8 30 0" fill="none" stroke="currentColor" strokeWidth="2" opacity=".7" />
          <path d="M180 22c10-8 20 8 30 0" fill="none" stroke="currentColor" strokeWidth="2" opacity=".7" />
        </svg>
      </div>
    </div>
  </div>

  <div className="mission-copy">
    <h3 className="h3">Safety in Every Step</h3>
    <p className="muted">
      We clean with care and intention at every stage. Our team follows clear checklists, safe product handling,
      and thoughtful workflows that protect your family, your pets, and your surfaces. From ventilation and dilution
      to careful tool selection and tidy close-out, we prioritize health, hygiene, and consistent results.
    </p>
    <ul className="service-bullets" role="list">
      <li>PPE, safe dilution, and labeled bottles</li>
      <li>Color-coded cloths to prevent cross-contamination</li>
      <li>High-touch sanitizing and careful ventilation</li>
    </ul>
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
              At H&amp;C, we’re a <strong>licensed, family-owned</strong> company with a small-community mindset.
              That means you can expect <strong>mutual trust, integrity, and respect</strong> every time we clean.
              We show up when we say we will, deliver work that’s <strong>professional and reliable</strong>,
              and keep <strong>communication clear and efficient</strong> so your schedule and your day run smoothly.
            </p>

            <p className="muted">
              Your <strong>privacy and safety</strong> always come first. We treat your home with the same care
              we give our own, protecting personal information, following safe practices, and paying attention
              to every detail. We are a <strong>people-first</strong> company, supporting our cleaners, serving our
              neighbours, and <strong>continually improving</strong> our tools and checklists to give you the peace
              of mind that comes with consistent, dependable results.
            </p>
          </div>

          {/* Six-value grid */}
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

      <CTADuo
        primaryHref="/services"
        primaryLabel="Learn more about our Cleaning Services"
        secondaryHref="tel:+14389265351"
        secondaryLabel="Call us at 1-438-925-5351"
      />

      <FAQSection
        items={[
          { q: "What areas do you service?", a: "Woodstock, Tillsonburg, and the Oxford County area." },
          { q: "What happens after I book a cleaning?", a: "Once you book, we’ll send a confirmation with your scheduled date, time, and service details. Our team will arrive prepared with all supplies, follow your checklist, and keep you updated if anything changes." },
          { q: "Do you use eco-friendly products?", a: "We can accommodate eco-conscious options upon request." }
        ]}
        ctaHref="/faqs"
        ctaLabel="VIEW ALL FAQS"
        hugNext
      />

      <div className="footer-wrap">
        <CtaGetQuote />
        <SiteFooter />
      </div>
    </main>
  );
}

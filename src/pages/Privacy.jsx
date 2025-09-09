import React, { useState } from "react";
import SectionHero from "../components/SectionHero";
import "../css/privacy.css";
import SiteFooter from "../components/SiteFooter";
import CtaGetQuote from "../components/CtaGetQuote";
import CTADuo from "../components/CTADuo";
import { IMG } from "../assets/cloudinaryImages";


export default function Privacy() {
         return (

            <main className="privacy-page">

            <SectionHero
            title="Privacy Policy"
            subtitle="How we collect, use, and protect your information."
            bgPublicId={IMG.hero}
            height="44vh"
            rounded
            align="left"
            />

               {/* black band under hero */}
      <div className="page-hero-band" aria-hidden="true" />


      <section className="policy section">
  <div className="container">
    <h2 className="h2">Privacy Policy</h2>
    <p className="muted policy-updated">Last updated: March 2025</p>

    <p className="muted">
      This Privacy Policy explains how H&amp;C Cleaning Services (“H&amp;C,” “we,” “us,” or “our”)
      collects, uses, shares, and protects information through this website and our online forms.
      It applies solely to information collected by this site.
    </p>

    <h3 className="h3">What this policy covers</h3>
    <ul className="policy-list">
      <li>What personal information we collect, how we use it, and with whom it may be shared,</li>
      <li>Your choices and controls over how we use your data,</li>
      <li>The security measures we take to protect your information,</li>
      <li>How to access, correct, or delete your information.</li>
    </ul>

    <h3 className="h3">Information we collect</h3>
    <ul className="policy-list">
      <li><strong>Contact details you submit</strong>: name, email, phone, city/area, and message content.</li>
      <li><strong>Service details</strong>: selected services, property type, preferred dates, special requests.</li>
      <li><strong>Communications</strong>: messages you send to us and our replies.</li>
      <li><strong>Usage data</strong>: basic technical data from your browser (e.g., IP address, device, pages visited) captured through logs and cookies for site functionality and performance.</li>
      <li><strong>Payments</strong> (if applicable): processed by third-party providers; we do not store full payment card numbers on our servers.</li>
    </ul>

    <h3 className="h3">How we use information</h3>
    <ul className="policy-list">
      <li>Respond to inquiries, provide quotes, and schedule services,</li>
      <li>Operate, maintain, and improve the website and our services,</li>
      <li>Send service updates, confirmations, and useful information you request,</li>
      <li>Send occasional marketing (only if you’ve opted in or as allowed by law; you can opt out anytime),</li>
      <li>Comply with legal obligations and enforce our policies.</li>
    </ul>

    <h3 className="h3">Information sharing</h3>
    <p className="muted">
      We are the sole owners of the information collected on this site. We do not sell or rent your
      personal information. We share it only:
    </p>
    <ul className="policy-list">
      <li><strong>Within H&amp;C</strong> to respond to your request or deliver the service,</li>
      <li><strong>With service providers</strong> who help us run our business (e.g., email, scheduling, analytics) under confidentiality obligations,</li>
      <li><strong>When required by law</strong> or to protect rights, safety, or property.</li>
    </ul>

    <h3 className="h3">Your choices &amp; rights</h3>
    <p className="muted">You may opt out of future contacts from us at any time. You can also request to:</p>
    <ul className="policy-list">
      <li>See what data we have about you,</li>
      <li>Correct or update your data,</li>
      <li>Have us delete your data,</li>
      <li>Express any concern about our use of your data.</li>
    </ul>
    <p className="muted">
      To exercise these rights, contact us at <a href="mailto:info@heartandcarecleaningservices.ca">info@heartandcarecleaningservices.ca</a> or
      call <a href="tel:+14389265351">(438) 925-5351</a>.
    </p>

    <h3 className="h3">Security</h3>
    <p className="muted">
      We take precautions to protect your information. Data sent through our forms is transmitted over HTTPS (TLS).
      While we use encryption to protect information online, we also protect information offline: only personnel who
      need the data to perform a specific job (e.g., customer service or billing) are granted access. Systems used to
      store personal information are kept in a secure environment.
    </p>

    <h3 className="h3">Cookies &amp; analytics</h3>
    <p className="muted">
      We may use essential cookies for site functionality and limited analytics to understand site usage. You can
      control cookies via your browser settings; disabling cookies may affect site features.
    </p>

    <h3 className="h3">Data retention</h3>
    <p className="muted">
      We keep personal information only as long as necessary to fulfill the purposes described above or as required by law,
      then delete or anonymize it.
    </p>

    <h3 className="h3">Updates to this policy</h3>
    <p className="muted">
      Our Privacy Policy may change from time to time. Any updates will be posted on this page with a revised “Last updated” date.
    </p>

    <h3 className="h3">Contact us</h3>
    <p className="muted">
      Questions about this policy? Email <a href="mailto:info@heartandcarecleaningservices.ca">info@heartandcarecleaningservices.ca</a> or call
      <a href="tel:+14389265351"> (438) 925-5351</a>. 
    </p>
  </div>
</section>




             <CTADuo
              primaryHref="/services"
              primaryLabel="Learn more about our Cleaning Services"
              secondaryHref="tel:+14389265351"
                    secondaryLabel="Call us at 1-438-925-5351"
            />

             <div className="footer-wrap">
                    <CtaGetQuote />
                    <SiteFooter />
                  </div>
            </main>

  );
}
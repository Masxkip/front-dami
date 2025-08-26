// components/SiteFooter.jsx
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "../css/footer.css";

export default function SiteFooter({
  // NEW: footer-only props
  serviceAreasText = "We proudly offer premium residential cleaning services across London, Woodstock, Tillsonburg, Ingersoll, Kitchener, Brantford, and Waterloo.",
  phoneLabel = "Call Us",
  phone = "(519) 681-7827",
  phoneHref = "tel:+15196817827",
  emailLabel = "Email Us",
  email = "info@bdwc.ca",
  emailHref = "mailto:info@bdwc.ca",
  locationLabel = "Location",
  addressLines = ["3 Langarth Street West", "London, ON N6J 1N5"],
  copyright = "Copyright © 2025 | All Rights Reserved.",
  privacyHref = "/privacy-policy",
}) {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Footer">
      {/* service areas line */}
      <div className="container">
        <div className="service-areas">{serviceAreasText}</div>
      </div>

      <div className="container footer-grid">
        <div className="footer-item">
          <div className="fi-icon"><Phone size={22} strokeWidth={2.25} /></div>
          <div className="fi-body">
            <div className="fi-title">{phoneLabel}</div>
            <a className="fi-link" href={phoneHref}>{phone}</a>
          </div>
        </div>

        <div className="footer-item">
          <div className="fi-icon"><Mail size={22} strokeWidth={2.25} /></div>
          <div className="fi-body">
            <div className="fi-title">{emailLabel}</div>
            <a className="fi-link" href={emailHref}>{email}</a>
          </div>
        </div>

        <div className="footer-item">
          <div className="fi-icon"><MapPin size={22} strokeWidth={2.25} /></div>
          <div className="fi-body">
            <div className="fi-title">{locationLabel}</div>
            <address className="fi-address">
              {addressLines.map((l, i) => <div key={i}>{l}</div>)}
            </address>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="copy">{copyright}</div>
        <a className="privacy" href={privacyHref}>Privacy Policy</a>
      </div>
    </footer>
  );
}

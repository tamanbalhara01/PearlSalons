import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="/" className="brand footer-logo">
            <img src="/logo.png" alt="Pearl Salons" className="brand-logo" />
            <span>Pearl Salons</span>
          </a>
          <p>Polished hair, skin, bridal, and grooming experiences across Gurugram and Delhi.</p>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <a href="/">Home</a>
          <a href="/book">Book Appointment</a>
          <a href="/#services">Services</a>
          <a href="/#reviews">Reviews</a>
        </div>

        <div>
          <p className="footer-heading">Visit</p>
          <a href="tel:+919996912205">+91 99969 12205</a>
          <a href="mailto:anuj@pearlsalons.in">anuj@pearlsalons.in</a>
          <a href="/#locations">View Locations</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Pearl Salons. All rights reserved.</span>
      </div>
    </footer>
  );
}

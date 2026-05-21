import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const navLinks = [
  ['/', 'Home'],
  ['/#services', 'Services'],
  ['/#reviews', 'Reviews'],
  ['/#locations', 'Locations'],
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Pearl Salons" className="brand-logo" />
          <span>Pearl Salons</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(value => !value)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-menu ${open ? 'is-open' : ''}`}>
          <div className="nav-links">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={pathname === href ? 'nav-link active' : 'nav-link'}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <Link to="/book" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

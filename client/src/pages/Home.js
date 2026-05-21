import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  { tag: 'Hair', title: 'Cut, Color & Styling', desc: 'Precision cuts, color refreshes, blowouts, smoothening, and event styling.', price: 'From ₹1,199' },
  { tag: 'Skin', title: 'Facials & Skin Rituals', desc: 'Deep-cleanse, detan, hydration, and glow treatments matched to your skin.', price: 'From ₹1,499' },
  { tag: 'Bride', title: 'Bridal Studio', desc: 'Makeup, hair, draping coordination, trial looks, and pre-wedding skin prep.', price: 'From ₹8,999' },
];

const LOCATIONS = [
  { name: 'Gurgaon, New Colony', desc: 'After-work cuts, quick facials, and festive looks.', addr: 'New Colony, Gurgaon, Haryana | 10 AM - 8:30 PM', img: '/salon-hero.png', comingSoon: true },
  { name: 'Nagpur, Umred', desc: 'Private studio feel for bridal trials and longer appointments.', addr: 'Umred, Nagpur, Maharashtra | 10 AM - 8:30 PM', img: '/salon-ramdaspeth.jpg' },
  { name: 'Nagpur, Ramdaspeth', desc: 'Premium lounge for color treatments and weekend refresh sessions.', addr: 'Ramdaspeth, Nagpur, Maharashtra | 9:30 AM - 9:30 PM', img: '/salon-umred.png' },
];

const fallbackReviews = [
  { id: 'fallback-1', name: 'Ananya', rating: 5, service: 'Bridal Package', location: 'Nagpur, Umred', text: 'The trial, prep, and wedding day styling were calm and beautifully handled.' },
  { id: 'fallback-2', name: 'Meera', rating: 5, service: 'Hair Styling', location: 'Gurgaon, New Colony', text: 'My color consultation felt thoughtful, and the final tone was exactly what I wanted.' },
  { id: 'fallback-3', name: 'Rhea', rating: 4, service: 'Skin & Facials', location: 'Nagpur, Ramdaspeth', text: 'Loved the facial and the way they explained what would suit my skin.' },
];

export default function Home() {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(d => {
        if (d.reviews && d.reviews.length) setReviews(d.reviews);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <h1>Salon days that feel personal, polished, and unhurried.</h1>
          <p className="hero-text">Hair, skin, bridal, and grooming appointments shaped around your routine, your event, and the way you want to feel when you leave.</p>
          <div className="hero-actions">
            <Link to="/book" className="btn btn-primary">Book an appointment</Link>
            <a href="#services" className="btn btn-secondary">View services</a>
          </div>
          <div className="hero-stats" aria-label="Salon highlights">
            <span><strong>3</strong> studios</span>
            <span><strong>1.2k+</strong> happy visits</span>
            <span><strong>20 min</strong> confirmations</span>
          </div>
        </div>

        <div className="hero-media">
          <img src="/salon-ramdaspeth.jpg" alt="Pearl Salons interior" />
          <div className="hero-note">
            <span>Today</span>
            <strong>Color refresh slots open</strong>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="services">
        <div className="section-head">
          <p className="eyebrow">What we offer</p>
          <h2>Designed for everyday glow-ups and once-in-a-lifetime moments.</h2>
          <p>Choose a focused appointment or build a full beauty plan with our stylists.</p>
        </div>
        <div className="card-grid">
          {SERVICES.map(service => (
            <article key={service.title} className="service-card">
              <span className="service-tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="section-head">
          <p className="eyebrow">Client love</p>
          <h2>Fresh from the chair.</h2>
          <p>Kind words from clients across our Gurgaon and Nagpur locations.</p>
        </div>
        <div className="card-grid">
          {reviews.slice(0, 3).map(review => (
            <article key={review._id || review.id} className="review-card">
              <div className="stars">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
              <blockquote>"{review.text}"</blockquote>
              <p className="reviewer">{review.name}</p>
              <p className="muted">{review.service}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-section" id="locations">
        <div className="section-head">
          <p className="eyebrow">Find us</p>
          <h2>Three calm spaces across Gurgaon & Nagpur.</h2>
          <p>Pick the studio that fits your day and we will hold the chair for you.</p>
        </div>
        <div className="location-grid">
          {LOCATIONS.map(location => (
            <article key={location.name} className="location-card">
              <div className="location-img-wrap">
                <img src={location.img} alt={`${location.name} salon interior`} />
                {location.comingSoon && <span className="opening-soon-badge">Opening Soon</span>}
              </div>
              <div>
                <h3>{location.name}</h3>
                <p>{location.desc}</p>
                <address>{location.addr}</address>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>Book your next salon visit in under 2 minutes.</h2>
            <p>Choose a service, studio, and time. We will confirm the appointment shortly.</p>
          </div>
          <Link to="/book" className="btn btn-light">Book Now</Link>
        </div>
      </section>
    </>
  );
}

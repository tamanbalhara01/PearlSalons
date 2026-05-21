import React, { useState } from 'react';

export default function BookPage() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Hair Styling', location: 'Gurgaon, New Colony', date: '', time: '', notes: '' });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setForm({ name: '', phone: '', service: 'Hair Styling', location: 'Gurgaon, New Colony', date: '', time: '', notes: '' });
      } else {
        setStatus('error');
        setMessage(data.message);
      }
    } catch {
      setStatus('error');
      setMessage('Could not connect to server. Please try again.');
    }
  };

  return (
    <section className="page-shell">
      <div className="section-head compact">
        <p className="eyebrow">Appointments</p>
        <h1>Book your visit</h1>
        <p>Tell us what you need and we will confirm your slot within 20 minutes.</p>
      </div>

      <div className="booking-layout">
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Full Name</span>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Service</span>
              <select name="service" value={form.service} onChange={handleChange}>
                <option>Hair Styling</option>
                <option>Skin & Facials</option>
                <option>Bridal Package</option>
                <option>Nails & Grooming</option>
              </select>
            </label>
            <label>
              <span>Location</span>
              <select name="location" value={form.location} onChange={handleChange}>
                <option>Gurgaon, New Colony</option>
                <option>Nagpur, Umred</option>
                <option>Nagpur, Ramdaspeth</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>Date</span>
              <input type="date" name="date" value={form.date} onChange={handleChange} required />
            </label>
            <label>
              <span>Time</span>
              <input type="time" name="time" value={form.time} onChange={handleChange} required />
            </label>
          </div>

          <label>
            <span>Notes (optional)</span>
            <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Mention your look reference or stylist preference" />
          </label>

          <button className="btn btn-primary form-submit" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Booking...' : 'Confirm Appointment'}
          </button>

          {status === 'success' && <div className="notice success">{message}</div>}
          {status === 'error' && <div className="notice error">{message}</div>}
        </form>

        <aside className="info-panel">
          <h2>Salon Hours</h2>
          {[
            ['Mon - Thu', '10:00 AM - 8:30 PM'],
            ['Fri - Sat', '9:30 AM - 9:30 PM'],
            ['Sunday', '10:00 AM - 7:00 PM'],
            ['Bridal consult', 'Free'],
            ['Confirmation', 'Within 20 mins'],
          ].map(([label, value]) => (
            <div key={label} className="info-row">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <p>Prefer WhatsApp? Text us at <strong>+91 99969 12205</strong>.</p>
        </aside>
      </div>
    </section>
  );
}

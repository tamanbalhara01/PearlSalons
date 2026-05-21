import React, { useState } from 'react';

export default function AdminPage() {
  const [secret, setSecret] = useState('');
  const [auth, setAuth] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  const load = async value => {
    const res = await fetch(`/api/appointments?secret=${value}`);
    const data = await res.json();
    if (data.success) {
      setAppointments(data.appointments);
      setAuth(true);
      setError('');
    } else {
      setError('Wrong admin password.');
    }
  };

  const cancel = async id => {
    await fetch(`/api/appointments/${id}?secret=${secret}`, { method: 'DELETE' });
    setAppointments(prev => prev.filter(appointment => appointment._id !== id));
  };

  return (
    <section className="page-shell wide">
      <div className="admin-head">
        <div>
          <p className="eyebrow">Operations</p>
          <h1>Admin Dashboard</h1>
        </div>
        {auth && <span className="count-pill">{appointments.length} appointment(s)</span>}
      </div>

      {!auth ? (
        <div className="login-card">
          <h2>Staff Login</h2>
          <p>Enter admin password to view and manage appointments.</p>
          <input type="password" placeholder="Admin password" value={secret} onChange={e => setSecret(e.target.value)} />
          {error && <p className="form-error">{error}</p>}
          <button className="btn btn-primary form-submit" type="button" onClick={() => load(secret)}>Login</button>
        </div>
      ) : (
        <div className="table-card">
          {appointments.length === 0 ? (
            <p className="empty-state">No appointments yet.</p>
          ) : (
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>{['Name', 'Phone', 'Service', 'Location', 'Date', 'Time', 'Status', 'Action'].map(header => <th key={header}>{header}</th>)}</tr>
                </thead>
                <tbody>
                  {appointments.map(appointment => (
                    <tr key={appointment._id}>
                      <td>{appointment.name}</td>
                      <td>{appointment.phone}</td>
                      <td>{appointment.service}</td>
                      <td>{appointment.location}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td><span className="status-badge">{appointment.status}</span></td>
                      <td><button className="ghost-btn" type="button" onClick={() => cancel(appointment._id)}>Cancel</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

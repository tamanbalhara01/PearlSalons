# Pearl Salons — Fullstack Website

A complete fullstack salon website built with **React** (frontend) + **Node.js/Express** (backend).

---

## Project Structure

```
pearlsalons-fullstack/
├── client/               ← React frontend
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── pages/
│       │   ├── Home.js       ← Hero, Services, Reviews, Locations
│       │   ├── BookPage.js   ← Appointment booking form (connected to API)
│       │   └── AdminPage.js  ← Admin dashboard to view/cancel appointments
│       └── components/
│           ├── Navbar.js
│           └── Footer.js
└── server/               ← Express backend
    ├── index.js          ← Main server entry point
    ├── routes/
    │   ├── appointments.js   ← POST/GET/DELETE appointments
    │   └── reviews.js        ← GET reviews
    └── data/
        ├── appointments.json ← Stores all bookings
        └── reviews.json      ← Seed reviews data
```

---

## Quick Start

### 1. Install dependencies
```bash
npm run install-all
```

### 2. Start both server and client
```bash
npm install        # installs concurrently at root
npm run dev
```

This runs:
- Backend at **http://localhost:5000**
- Frontend at **http://localhost:3000**

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, Services, Reviews, Locations |
| `/book` | Booking form connected to backend API |
| `/admin` | Admin dashboard (password: `pearl123`) |

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/reviews` | Get all reviews |
| POST | `/api/appointments` | Book a new appointment |
| GET | `/api/appointments?secret=pearl123` | View all bookings (admin) |
| DELETE | `/api/appointments/:id?secret=pearl123` | Cancel a booking (admin) |

---

## Deployment
- **Frontend**: Deploy `client/` to **Vercel** or **Netlify**
- **Backend**: Deploy `server/` to **Railway** or **Render**
- Update the `proxy` in `client/package.json` to your live backend URL after deployment.

const dotenv = require('dotenv');
const path = require('path');

// Load env from server/.env for local dev (Vercel injects env vars in production)
dotenv.config({ path: path.resolve(__dirname, '../server/.env') });

const express = require('express');
const cors = require('cors');
const connectDB = require('../server/db');
const appointmentRoutes = require('../server/routes/appointments');
const reviewRoutes = require('../server/routes/reviews');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/api', (req, res) => res.json({ message: 'Pearl Salons API is running.' }));

// Connect to MongoDB on cold start
let isConnected = false;
const ensureDbConnected = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

// Wrap the Express app for Vercel serverless
module.exports = async (req, res) => {
  await ensureDbConnected();
  return app(req, res);
};

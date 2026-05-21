require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const appointmentRoutes = require('./routes/appointments');
const reviewRoutes = require('./routes/reviews');

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => res.json({ message: 'Pearl Salons API is running.' }));

// Connect to MongoDB, then start the server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});

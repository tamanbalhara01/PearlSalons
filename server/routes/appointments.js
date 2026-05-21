const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'pearl123';

// GET all (admin)
router.get('/', async (req, res) => {
  if (req.query.secret !== ADMIN_SECRET)
    return res.status(401).json({ success: false, message: 'Unauthorized' });

  try {
    const appointments = await Appointment.find().sort({ bookedAt: -1 });
    res.json({ success: true, appointments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST book
router.post('/', async (req, res) => {
  const { name, phone, service, location, date, time, notes } = req.body;
  if (!name || !phone || !service || !location || !date || !time)
    return res.status(400).json({ success: false, message: 'All fields are required.' });

  try {
    const appointment = await Appointment.create({
      name, phone, service, location, date, time,
      notes: notes || '',
    });
    res.status(201).json({
      success: true,
      message: `Confirmed! See you on ${date} at ${time}.`,
      appointment,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE cancel (admin)
router.delete('/:id', async (req, res) => {
  if (req.query.secret !== ADMIN_SECRET)
    return res.status(401).json({ success: false, message: 'Unauthorized' });

  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Appointment cancelled.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

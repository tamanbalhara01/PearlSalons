const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  phone:    { type: String, required: true },
  service:  { type: String, required: true },
  location: { type: String, required: true },
  date:     { type: String, required: true },
  time:     { type: String, required: true },
  notes:    { type: String, default: '' },
  status:   { type: String, default: 'confirmed' },
  bookedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Appointment', appointmentSchema);

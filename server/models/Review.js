const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  rating:   { type: Number, required: true, min: 1, max: 5 },
  text:     { type: String, required: true },
  service:  { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model('Review', reviewSchema);

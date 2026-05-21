const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Seed default reviews if the collection is empty
const seedReviews = async () => {
  try {
    const count = await Review.countDocuments();
    if (count === 0) {
      await Review.insertMany([
        { name: 'Aarohi Mehta', rating: 5, text: 'My bridal makeup stayed flawless the entire day. The team was calm, professional, and knew exactly what I wanted.', service: 'Bridal Package', location: 'South Delhi Studio' },
        { name: 'Ritika S.', rating: 5, text: "Best hair cut I've had in years. Detailed consultation, clean finish, and the blowout lasted three days.", service: 'Hair Styling', location: 'Gurugram Central' },
        { name: 'Naina Verma', rating: 4, text: 'Super clean space, friendly staff and the facial was relaxing and effective. Booking was easy too.', service: 'Skin Ritual', location: 'Golf Course Road Lounge' },
      ]);
      console.log('Seeded default reviews into MongoDB');
    }
  } catch (err) {
    console.error('Review seed error:', err.message);
  }
};

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    // Seed on first request if collection is empty
    if (reviews.length === 0) {
      await seedReviews();
      const seeded = await Review.find();
      return res.json({ success: true, reviews: seeded });
    }
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

// routes/settings.js
const express = require('express');
const router = express.Router();

// Save settings (dummy endpoint)
router.post('/', (req, res) => {
  const { reminder } = req.body;
  // Save reminder logic (e.g., to a database)
  res.json({ message: 'Reminder saved successfully!' });
});

module.exports = router;

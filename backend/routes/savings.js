// routes/savings.js
const express = require('express');
const router = express.Router();

// Dummy savings data
let savings = [{ amount: 200 }, { amount: 150 }];

router.get('/', (req, res) => {
  res.json(savings);
});

router.post('/', (req, res) => {
  const { amount } = req.body;
  const newSaving = { amount: parseFloat(amount) };
  savings.push(newSaving);
  res.json(newSaving);
});

module.exports = router;

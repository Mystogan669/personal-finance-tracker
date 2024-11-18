const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal'); // Import the Goal model

// Get all goals
router.get('/', async (req, res) => {
  try {
    const goals = await Goal.find(); // Fetch all goals from the database
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching goals: ' + err.message });
  }
});

// Add a new goal
router.post('/', async (req, res) => {
  const { name, goalAmount } = req.body;

  if (!name || !goalAmount) {
    return res.status(400).json({ message: 'Name and Goal Amount are required.' });
  }

  const newGoal = new Goal({
    name,
    goalAmount: parseFloat(goalAmount),
    currentAmount: 0, // Default current amount
  });

  try {
    const savedGoal = await newGoal.save(); // Save the goal to the database
    res.status(201).json(savedGoal); // Return the saved goal
  } catch (err) {
    res.status(500).json({ message: 'Error saving goal: ' + err.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget'); // Assuming you have a Budget model

// POST request to save budget data
router.post('/budget', async (req, res) => {
    const { income, expenses, savings, status } = req.body;

    try {
        // Assuming you have a Budget schema that accepts these fields
        const newBudget = new Budget({
            income,
            expenses,
            savings,
            status
        });

        const savedBudget = await newBudget.save();
        res.status(201).json(savedBudget); // Return the saved data
    } catch (error) {
        console.error('Error saving budget data:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

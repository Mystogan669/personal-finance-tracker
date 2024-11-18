// backend/routes/incomeroutes.js
const express = require('express');
const { getIncome, addIncome, updateIncome, deleteIncome } = require('../controllers/incomeController');

const router = express.Router();

// GET all income records
router.get('/', getIncome);

// POST (add) a new income record
router.post('/', addIncome);

// PUT (update) an income record by ID
router.put('/:id', updateIncome);

// DELETE an income record by ID
router.delete('/:id', deleteIncome);

module.exports = router;

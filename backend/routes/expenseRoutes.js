// backend/routes/expensroutes.js
const express = require('express');
const { getExpenses, addExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');

const router = express.Router();

// GET all expense records
router.get('/', getExpenses);

// POST (add) a new expense record
router.post('/', addExpense);

// PUT (update) an expense record by ID
router.put('/:id', updateExpense);

// DELETE an expense record by ID
router.delete('/:id', deleteExpense);

module.exports = router;

const mongoose = require('mongoose');

// Define schema for Budget data
const budgetSchema = new mongoose.Schema({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
});

// Create and export the Budget model
const Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget;

const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    income: { type: Number, required: true },
    expenses: { type: Number, required: true },
    savings: { type: Number, required: true }, // Ensure savings is a number and required
  });
  
  module.exports = mongoose.model('Budget', BudgetSchema);
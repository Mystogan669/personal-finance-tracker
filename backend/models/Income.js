const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
 monthly: { type: String, required: true },
  additional: { type: Number, required: true },
});

module.exports = mongoose.model("Income", IncomeSchema);

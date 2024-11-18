const mongoose = require("mongoose");

const FinanceSchema = new mongoose.Schema({
goal: { type: Number, required: true },
  progress: { type: String, required: true },
});

module.exports = mongoose.model("Finance", FinanceSchema);

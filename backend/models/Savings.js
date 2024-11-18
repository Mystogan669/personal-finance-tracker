const mongoose = require("mongoose");

const SavingsSchema = new mongoose.Schema({
  saving:{type:String,required:true}
});

module.exports = mongoose.model("Savings", SavingsSchema);
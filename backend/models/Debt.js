const mongoose = require("mongoose");

const DebtSchema = new mongoose.Schema({
  debt:{type:String,required:true}
});

module.exports = mongoose.model("Debts", DebtSchema);
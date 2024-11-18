const Income = require("../models/Income");

// Get all income records
exports.getIncome = async (req, res) => {
  try {
    const incomeRecords = await Income.find();
    console.log("Fetched income records:", incomeRecords); // Debug log
    res.status(200).json(incomeRecords);
  } catch (error) {
    console.error("Error fetching income records:", error); // Debug log
    res.status(500).json({ error: "Failed to fetch income records" });
  }
};

// Add a new income record
exports.addIncome = async (req, res) => {
  try {
    const { source, amount } = req.body;
    const income = new Income({ source, amount });
    await income.save();
    console.log("Added income record:", income); // Debug log
    res.status(201).json(income);
  } catch (error) {
    console.error("Error adding income record:", error); // Debug log
    res.status(500).json({ error: "Failed to add income record" });
  }
};

// Update an income record
exports.updateIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const { source, amount } = req.body;
    const updatedIncome = await Income.findByIdAndUpdate(
      id,
      { source, amount },
      { new: true } // Return updated document
    );
    console.log("Updated income record:", updatedIncome); // Debug log
    res.status(200).json(updatedIncome);
  } catch (error) {
    console.error("Error updating income record:", error); // Debug log
    res.status(500).json({ error: "Failed to update income record" });
  }
};

// Delete an income record
exports.deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedIncome = await Income.findByIdAndDelete(id);
    console.log("Deleted income record:", deletedIncome); // Debug log
    res.status(200).json({ message: "Income record deleted successfully", deletedIncome });
  } catch (error) {
    console.error("Error deleting income record:", error); // Debug log
    res.status(500).json({ error: "Failed to delete income record" });
  }
};

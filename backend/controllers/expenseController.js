
const Expense = require("../models/Expense");

// Get all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    console.log("Fetched expenses:", expenses); // Debug log
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error); // Debug log
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};

// Add a new expense
exports.addExpense = async (req, res) => {
  try {
    const { amount, category, date } = req.body;
    const expense = new Expense({ amount, category, date });
    await expense.save();
    console.log("Added expense:", expense); // Debug log
    res.status(201).json(expense);
  } catch (error) {
    console.error("Error adding expense:", error); // Debug log
    res.status(500).json({ error: "Failed to add expense" });
  }
};

// Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, category, date } = req.body;
    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { amount, category, date },
      { new: true }
    );
    console.log("Updated expense:", updatedExpense); // Debug log
    res.status(200).json(updatedExpense);
  } catch (error) {
    console.error("Error updating expense:", error); // Debug log
    res.status(500).json({ error: "Failed to update expense" });
  }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete(id);
    console.log("Deleted expense:", deletedExpense); // Debug log
    res.status(200).json({ message: "Expense deleted successfully", deletedExpense });
  } catch (error) {
    console.error("Error deleting expense:", error); // Debug log
    res.status(500).json({ error: "Failed to delete expense" });
  }
};

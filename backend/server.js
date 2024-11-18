const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./models/Budget');
const Income=require('./models/Income')
const Expenses=require('./models/Expense')
const Savings=require('./models/Savings')
const Finance=require('./models/Finance')
const Debt=require('./models/Debt')
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/personalfinancetracker')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// POST route to save budget data
app.post('/api/budget', async (req, res) => {
  try {
    const { income, expenses, savings } = req.body;

    if (!income || !expenses || !savings) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBudget = new Budget({ income, expenses, savings });
    await newBudget.save();

    res.status(201).json({ message: 'Budget data saved successfully', data: newBudget });
  } catch (error) {
    console.error('Error saving budget data:', error);
    res.status(500).json({ message: 'Error saving budget data', error: error.message });
  }
});

app.post('/api/income', async (req, res) => {
  try {
    const { monthly,additional} = req.body;

    if (!monthly||!additional) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newIncome = new Income({ monthly,additional });
    await newIncome.save();

    res.status(201).json({ message: 'Income data saved successfully', data: newIncome });
  } catch (error) {
    console.error('Error saving income data:', error);
    res.status(500).json({ message: 'Error saving income data', error: error.message });
  }
});

app.post('/api/expenses', async (req, res) => {
  try {
    const { amount,category} = req.body;

    if (!amount || !category) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newExpenses = new Expenses({  amount, category });
    await newExpenses.save();

    res.status(201).json({ message: 'Expense data saved successfully', data: newExpenses});
  } catch (error) {
    console.error('Error saving expenses data:', error);
    res.status(500).json({ message: 'Error saving expenses data', error: error.message });
  }
});

app.post('/api/savings', async (req, res) => {
  try {
    const { saving} = req.body;

    if (!saving) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newSavings = new Savings({  saving });
    await newSavings.save();

    res.status(201).json({ message: 'Savings data saved successfully', data: newSavings});
  } catch (error) {
    console.error('Error saving Savings data:', error);
    res.status(500).json({ message: 'Error saving Savings data', error: error.message });
  }
});

app.post('/api/finance', async (req, res) => {
  try {
    const {goal,progress } = req.body;

    if (!goal||!progress) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newFinance = new Finance({  goal,progress });
    await newFinance.save();

    res.status(201).json({ message: 'Finance data saved successfully', data: newFinance});
  } catch (error) {
    console.error('Error saving Finance data:', error);
    res.status(500).json({ message: 'Error saving Finance data', error: error.message });
  }
});

app.post('/api/debt', async (req, res) => {
  try {
    const {debt} = req.body;

    if (!debt) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newDebt = new Debt({  debt });
    await newDebt.save();

    res.status(201).json({ message: 'Debt data saved successfully', data: newDebt});
  } catch (error) {
    console.error('Error saving Debt data:', error);
    res.status(500).json({ message: 'Error saving Debt data', error: error.message });
  }
});

// Start server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
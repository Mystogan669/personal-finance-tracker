// const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./models/Budget'); // Assuming you have a Budget model
const cors = require('cors');  // Use CORS if needed

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Allow cross-origin requests (if using frontend and backend on different ports)

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// POST route to save budget data
app.post('/api/budget', async (req, res) => {
  try {
    const { income, expenses, savings } = req.body;

    if (!income || !expenses || !savings) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBudget = new Budget({
      income,
      expenses,
      savings
    });

    await newBudget.save(); // Save the budget data to the database
    res.status(201).json({ message: 'Budget data saved successfully', data: newBudget });
  } catch (error) {
    console.error('Error saving budget data:', error);
    res.status(500).json({ message: 'Error saving budget data', error: error.message });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

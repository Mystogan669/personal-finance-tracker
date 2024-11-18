import React, { useState } from 'react';
import axios from 'axios';

const BudgetPage = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savings, setSavings] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const budgetData = {
      income: parseFloat(income),
      expenses: parseFloat(expenses),
      savings: parseFloat(savings),
    };

    try {
      const response = await axios.post('http://localhost:5000/api/budget', budgetData);
      console.log('Budget data saved:', response.data);
      setIncome('');
      setExpenses('');
      setSavings('');
    } catch (err) {
      console.error('Error saving budget data:', err);
      setError('Error saving budget data, please try again.');
    }
  };

  return (
    <div>
      <h1>Budget Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Income</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Expenses</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Savings</label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Budget</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default BudgetPage;

// src/pages/Expenses.js
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExpenseTracker.css';

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');

  useEffect(() => {
    axios.get('/api/expenses')  // Get all expenses from the backend
      .then(response => setExpenses(response.data))
      .catch(error => console.error('Error fetching expenses:', error));
  }, []);

  const handleAddExpense = () => {
    axios.post('/api/expenses', { amount: newExpense })
      .then(response => {
        setExpenses([...expenses, response.data]);
        setNewExpense('');
      })
      .catch(error => console.error('Error adding expense:', error));
  };

  return (
    <div>
      <h1>Expenses Page</h1>
      <input
        type="number"
        value={newExpense}
        onChange={(e) => setNewExpense(e.target.value)}
        placeholder="Enter new expense"
      />
      <button onClick={handleAddExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses; */


import React from 'react';
import './ExpenseTracker.css';

function ExpenseTracker() {
    return (
        <div className="expense-tracker">
            <h2>Track Your Expenses</h2>
            <div className="expense-form">
                <input type="text" placeholder="Amount" />
                <input type="text" placeholder="Category" />
                <button>Add Expense</button>
            </div>
            <div className="expense-list">
                <ul>
                    <li>Expense 1 - $100</li>
                    <li>Expense 2 - $200</li>
                </ul>
            </div>
        </div>
    );
}

export default ExpenseTracker;


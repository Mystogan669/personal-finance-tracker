
// src/IncomePage.js
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IncomePage.css';

const IncomePage = () => {
  const [income, setIncome] = useState([]);
  const [newIncome, setNewIncome] = useState({ source: '', amount: '' });

  // Fetch income data when the page loads
  useEffect(() => {
    axios.get('http://localhost:5000/api/income')
      .then(response => {
        setIncome(response.data); // Set state with fetched income data
      })
      .catch(error => {
        console.error('Error fetching income:', error);
      });
  }, []);

  // Handle form submission to add new income
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/income', newIncome)
      .then(response => {
        setIncome([...income, response.data]); // Add the new income to the list
        setNewIncome({ source: '', amount: '' }); // Reset form fields
      })
      .catch(error => {
        console.error('Error adding income:', error);
      });
  };

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIncome(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Income</h1>

      {}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Source:</label>
          <input
            type="text"
            name="source"
            value={newIncome.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={newIncome.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Income</button>
      </form>

      {}
      <ul>
        {income.map(item => (
          <li key={item._id}>
            {item.source}: ${item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomePage;*/

import React from 'react';
import './IncomePage.css';

function IncomePage() {
    return (
        <div className="income-page">
            <h2>Income Overview</h2>
            <div className="income-details">
                <p>Monthly Income: $5000</p>
                <p>Additional Income: $1000</p>
            </div>
        </div>
    );
}

export default IncomePage;



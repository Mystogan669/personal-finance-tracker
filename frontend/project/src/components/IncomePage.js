
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

import React, { useState } from 'react';
import './IncomePage.css';

function IncomePage() {
    const [income, setIncome] = useState([]); 
    const [monthlyIncome, setMonthlyIncome] = useState(''); 
    const [additionalIncome, setAdditionalIncome] = useState(''); 
    const [error, setError] = useState('');

    const handleAddIncome = async (e) => {
        e.preventDefault();

        if (!monthlyIncome || !additionalIncome) {
            setError('Please fill out both fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/income', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    monthly: parseFloat(monthlyIncome),
                    additional: parseFloat(additionalIncome),
                }),
            });

            if (!response.ok) throw new Error('Failed to save income data');

            const data = await response.json();

            
            setIncome([...income, data.data]);
            setMonthlyIncome('');
            setAdditionalIncome('');
            setError('');
        } catch (err) {
            console.error('Error adding income:', err);
            setError('Failed to add income.');
        }
    };

    return (
        <div className="income-page">
            <h2>Income Overview</h2>
            <form className="income-form" onSubmit={handleAddIncome}>
                <input
                    type="number"
                    placeholder="Monthly Income"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Additional Income"
                    value={additionalIncome}
                    onChange={(e) => setAdditionalIncome(e.target.value)}
                />
                <button type="submit">Add Income</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div className="income-details">
                <h3>Income Details</h3>
                <ul>
                    {income.map((entry, index) => (
                        <li key={index}>
                            Monthly Income: ${entry.monthly}, Additional Income: ${entry.additional}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default IncomePage;
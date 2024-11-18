// src/pages/Savings.js
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SavingsPage.css'; 

function Savings() {
  const [savings, setSavings] = useState([]);
  const [newSaving, setNewSaving] = useState('');

  useEffect(() => {
    axios.get('/api/savings')  // Get savings data from the backend
      .then(response => setSavings(response.data))
      .catch(error => console.error('Error fetching savings:', error));
  }, []);

  const handleAddSaving = () => {
    axios.post('/api/savings', { amount: newSaving })
      .then(response => {
        setSavings([...savings, response.data]);
        setNewSaving('');
      })
      .catch(error => console.error('Error adding saving:', error));
  };

  return (
    <div>
      <h1>Savings Page</h1>
      <input
        type="number"
        value={newSaving}
        onChange={(e) => setNewSaving(e.target.value)}
        placeholder="Enter new saving"
      />
      <button onClick={handleAddSaving}>Add Saving</button>
      <ul>
        {savings.map((saving, index) => (
          <li key={index}>${saving.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Savings;*/

import React from 'react';
import './SavingsPage.css';

function SavingsPage() {
    return (
        <div className="savings-page">
            <h2>Track Your Savings</h2>
            <div className="savings-summary">
                <p>Total Savings: $2000</p>
            </div>
        </div>
    );
}

export default SavingsPage;


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

import React, { useState } from 'react';
import './SavingsPage.css';

function SavingsPage() {
    const [savings, setSavings] = useState([]); 
    const [savingInput, setSavingInput] = useState(''); 
    const [error, setError] = useState(''); 

    const handleAddSaving = async (e) => {
        e.preventDefault();
        if (!savingInput) {
            setError('Please enter a valid saving amount.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/savings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ saving: parseFloat(savingInput) }),
            });

            if (!response.ok) throw new Error('Failed to add saving');
            const data = await response.json();

          
            setSavings([...savings, data.data]);
            setSavingInput(''); 
            setError('');
        } catch (err) {
            console.error('Error adding saving:', err);
            setError('Failed to add saving.');
        }
    };

    return (
        <div className="savings-page">
            <h2>Track Your Savings</h2>
            <form className="savings-form" onSubmit={handleAddSaving}>
                <input
                    type="number"
                    placeholder="Enter Saving Amount"
                    value={savingInput}
                    onChange={(e) => setSavingInput(e.target.value)}
                />
                <button type="submit">Add Saving</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div className="savings-summary">
                <h3>Savings Summary</h3>
                <ul>
                    {savings.map((saving, index) => (
                        <li key={index}>${saving.saving}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SavingsPage;


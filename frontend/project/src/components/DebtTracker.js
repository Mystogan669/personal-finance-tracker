// src/pages/DebtTracker.js
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DebtTracker.css';


function DebtTracker() {
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    axios.get('/api/debts')  // Fetch debts data from backend
      .then(response => setDebts(response.data))
      .catch(error => console.error('Error fetching debts:', error));
  }, []);

  return (
    <div>
      <h1>Debt Tracker Page</h1>
      <ul>
        {debts.map((debt, index) => (
          <li key={index}>
            {debt.loanName} - EMI: ${debt.emi} - Remaining: ${debt.remaining}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DebtTracker;*/

import React, { useState, useEffect } from 'react';
import './DebtTracker.css';

function DebtTracker() {
    const [debt, setDebt] = useState(''); 
    const [debtData, setDebtData] = useState(null); 
    const [error, setError] = useState(''); 

   
    const handleSaveDebt = async (e) => {
        e.preventDefault();

        if (!debt) {
            setError('Please enter a debt value.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/debt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    debt: parseFloat(debt), 
                }),
            });

            if (!response.ok) throw new Error('Failed to save debt data');

            const data = await response.json();

           
            setDebtData(data.data);
            setDebt(''); 
            setError(''); 
        } catch (err) {
            console.error('Error saving debt data:', err);
            setError('Failed to save debt data.');
        }
    };

    return (
        <div className="debt-tracker">
            <h2>Track Your Debt</h2>
            <form onSubmit={handleSaveDebt} className="debt-form">
                <input
                    type="number"
                    placeholder="Enter your debt"
                    value={debt}
                    onChange={(e) => setDebt(e.target.value)}
                />
                <button type="submit">Save Debt</button>
            </form>

            {error && <p className="error">{error}</p>}

            {debtData && (
                <div className="debt-summary">
                    <p>Total Debt: ${debtData.debt}</p>
                </div>
            )}
        </div>
    );
}

export default DebtTracker;

// src/pages/DebtTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

export default DebtTracker;

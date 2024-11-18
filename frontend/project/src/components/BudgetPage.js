// import React, { useState } from 'react';
// import axios from 'axios';

// const BudgetPage = () => {
//   const [income, setIncome] = useState('');
//   const [expenses, setExpenses] = useState('');
//   const [savings, setSavings] = useState('');
//   const [error, setError] = useState('');

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const budgetData = {
//       income: parseFloat(income),
//       expenses: parseFloat(expenses),
//       savings: parseFloat(savings),
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/budget', budgetData);
//       console.log('Budget data saved:', response.data);
//       setIncome('');
//       setExpenses('');
//       setSavings('');
//     } catch (err) {
//       console.error('Error saving budget data:', err);
//       setError('Error saving budget data, please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Budget Page</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Income</label>
//           <input
//             type="number"
//             value={income}
//             onChange={(e) => setIncome(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Expenses</label>
//           <input
//             type="number"
//             value={expenses}
//             onChange={(e) => setExpenses(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Savings</label>
//           <input
//             type="number"
//             value={savings}
//             onChange={(e) => setSavings(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Save Budget</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default BudgetPage;



import React, { useState } from 'react';

const BudgetPage = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savings, setSavings] = useState('');
  const [error, setError] = useState('');
  const [budgetData, setBudgetData] = useState(null); // State to display saved data

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const budget = {
      income: parseFloat(income),
      expenses: parseFloat(expenses),
      savings: parseFloat(savings),
    };

    try {
      const response = await fetch('http://localhost:4000/api/budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(budget),
      });

      if (!response.ok) {
        throw new Error('Failed to save budget data');
      }

      const result = await response.json();
      console.log('Budget data saved:', result);

      // Update the state to display the saved data
      setBudgetData(result.data);

      // Clear form fields
      setIncome('');
      setExpenses('');
      setSavings('');
      setError('');
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
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the saved data */}
      {budgetData && (
        <div>
          <h2>Saved Budget Data</h2>
          <p>Income: {budgetData.income}</p>
          <p>Expenses: {budgetData.expenses}</p>
          <p>Savings: {budgetData.savings}</p>
        </div>
      )}
    </div>
  );
};

export default BudgetPage;
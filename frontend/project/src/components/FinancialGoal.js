// src/pages/FinancialGoals.js
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FinancialGoal.css';

function FinancialGoals() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [goalAmount, setGoalAmount] = useState('');

  useEffect(() => {
    axios.get('/api/goals')  // Get goals data from the backend
      .then(response => setGoals(response.data))
      .catch(error => console.error('Error fetching goals:', error));
  }, []);

  const handleAddGoal = () => {
    axios.post('/api/goals', { name: newGoal, goalAmount })
      .then(response => {
        setGoals([...goals, response.data]);
        setNewGoal('');
        setGoalAmount('');
      })
      .catch(error => console.error('Error adding goal:', error));
  };

  const calculateProgress = (current, goal) => {
    return (current / goal) * 100;
  };

  return (
    <div>
      <h1>Financial Goals Page</h1>
      <input
        type="text"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="Goal name"
      />
      <input
        type="number"
        value={goalAmount}
        onChange={(e) => setGoalAmount(e.target.value)}
        placeholder="Goal amount"
      />
      <button onClick={handleAddGoal}>Add Goal</button>

      {goals.map((goal, index) => (
        <div key={index}>
          <h2>{goal.name}</h2>
          <p>Goal Amount: ${goal.goalAmount}</p>
          <p>Current Progress: ${goal.currentAmount}</p>
          <progress value={calculateProgress(goal.currentAmount, goal.goalAmount)} max="100"></progress>
          <p>{calculateProgress(goal.currentAmount, goal.goalAmount).toFixed(2)}% completed</p>
        </div>
      ))}
    </div>
  );
}

export default FinancialGoals;*/

import React, { useState } from 'react';
import './FinancialGoal.css';

function FinancialGoal() {
    const [goal, setGoal] = useState('');
    const [progress, setProgress] = useState(''); 
    const [financeData, setFinanceData] = useState(null);
    const [error, setError] = useState('');

    const handleSaveGoal = async (e) => {
        e.preventDefault();

        if (!goal || !progress) {
            setError('Please fill out both fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/finance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    goal,
                    progress: parseFloat(progress), 
                }),
            });

            if (!response.ok) throw new Error('Failed to save finance data');

            const data = await response.json();

            // Set the saved finance data
            setFinanceData(data.data);
            setGoal('');
            setProgress('');
            setError('');
        } catch (err) {
            console.error('Error saving finance data:', err);
            setError('Failed to save finance data.');
        }
    };

    return (
        <div className="goal-page">
            <h2>Financial Goals</h2>
            <form onSubmit={handleSaveGoal} className="goal-form">
                <input
                    type="text"
                    placeholder="Enter your financial goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter your progress (%)"
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                />
                <button type="submit">Save Goal</button>
            </form>

            {error && <p className="error">{error}</p>}

            {financeData && (
                <div className="goal-summary">
                    <p>Goal: {financeData.goal}</p>
                    <p>Progress: {financeData.progress}%</p>
                </div>
            )}
        </div>
    );
}

export default FinancialGoal;

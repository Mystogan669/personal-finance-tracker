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

import React from 'react';
import './FinancialGoal.css';

function FinancialGoal() {
    return (
        <div className="goal-page">
            <h2>Financial Goals</h2>
            <div className="goal-summary">
                <p>Goal: Save $5000</p>
                <p>Progress: 60%</p>
            </div>
        </div>
    );
}

export default FinancialGoal;


import React, { useState } from 'react';
import './ExpenseTracker.css';

function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]); 
    const [amount, setAmount] = useState(''); 
    const [category, setCategory] = useState(''); 
    const [error, setError] = useState(''); 

   
    const addExpense = async (e) => {
        e.preventDefault();
        if (!amount || !category) {
            setError('Please fill in all fields.');
            return;
        }

        const newExpense = { amount: parseFloat(amount), category };

        try {
            const response = await fetch('http://localhost:4000/api/expenses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newExpense),
            });

            if (!response.ok) throw new Error('Failed to add expense');
            const data = await response.json();

           
            setExpenses([...expenses, data.data]);
            setAmount('');
            setCategory('');
            setError('');
        } catch (err) {
            console.error('Error adding expense:', err);
            setError('Failed to add expense.');
        }
    };

    return (
        <div className="expense-tracker">
            <h2>Track Your Expenses</h2>
            <form className="expense-form" onSubmit={addExpense}>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button type="submit">Add Expense</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div className="expense-list">
                <h3>Expense List:</h3>
                <ul>
                    {expenses.map((expense, index) => (
                        <li key={index}>
                            {expense.category} - ${expense.amount}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExpenseTracker;
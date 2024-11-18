// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BarGraph from './components/BarGraph';
import BudgetPage from './components/BudgetPage';
import ExpenseTracker from './components/ExpenseTracker';
import SavingsPage from './components/SavingsPage';
import FinancialGoal from './components/FinancialGoal';
import DebtTracker from './components/DebtTracker';
import IncomePage from './components/IncomePage';
import SettingsPage from './components/SettingsPage';

// Import global styles
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<BarGraph />} />
                <Route path="/budget" element={<BudgetPage />} />
                <Route path="/expenses" element={<ExpenseTracker />} />
                <Route path="/savings" element={<SavingsPage />} />
                <Route path="/goals" element={<FinancialGoal />} />
                <Route path="/debt" element={<DebtTracker />} />
                <Route path="/income" element={<IncomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </Router>
    );
}

export default App;

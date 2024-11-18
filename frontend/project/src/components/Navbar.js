import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this path is correct

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Finance Tracker</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/budget">Budget</Link></li>
                <li><Link to="/expenses">Expenses</Link></li>
                <li><Link to="/savings">Savings</Link></li>
                <li><Link to="/goals">Financial Goals</Link></li>
                <li><Link to="/debt">Debt Tracker</Link></li>
                <li><Link to="/income">Income</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

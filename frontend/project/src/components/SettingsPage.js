

import React from 'react';
import './SettingsPage.css';

function SettingsPage() {
    return (
        <div className="settings-page">
            <h2>Settings</h2>
            <div className="settings-form">
                <label>Notification Preferences</label>
                <select>
                    <option>Daily</option>
                    <option>Weekly</option>
                </select>
            </div>
        </div>
    );
}

export default SettingsPage;


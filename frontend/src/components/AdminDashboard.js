import React from 'react';
import MainContent from './MainContent';
import AIChatbot from './AIChatbot';

function AdminDashboard() {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <MainContent />
            <AIChatbot />
        </div>
    );
}

export default AdminDashboard;

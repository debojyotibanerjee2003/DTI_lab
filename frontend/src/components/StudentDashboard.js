// src/components/StudentDashboard.js
import React from 'react';
import MainContent from './MainContent';
import AIChatbot from './AIChatbot';

function StudentDashboard() {
    return (
        <div>
            <h2>Student Dashboard</h2>
            <MainContent />
            <AIChatbot />
        </div>
    );
}

export default StudentDashboard;


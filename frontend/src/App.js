// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginSignUp from './components/LoginSignUp';
import StudentDashboard from './components/StudentDashboard';
import UniversityDashboard from './components/UniversityDashboard';
import SearchResults from './components/SearchResults';
import UniversityProfile from './components/UniversityProfile';
import ApplicationForm from './components/ApplicationForm';
import ScholarshipPortal from './components/ScholarshipPortal';
import ReviewFeedback from './components/ReviewFeedback';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginSignUp />} />
                    <Route path="/student-dashboard" element={<StudentDashboard />} />
                    <Route path="/university-dashboard" element={<UniversityDashboard />} />
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/university-profile" element={<UniversityProfile />} />
                    <Route path="/application-form" element={<ApplicationForm />} />
                    <Route path="/scholarship-portal" element={<ScholarshipPortal />} />
                    <Route path="/reviews" element={<ReviewFeedback />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

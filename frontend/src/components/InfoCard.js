import React from 'react';

const InfoCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Built by developers</h2>
            <h3 className="text-gray-600 mb-4">Student Dashboard</h3>
            <p className="text-gray-600 mb-4">From colors, cards, typography to complex elements, you will find the full documentation.</p>
            <a href="/student-dashboard" className="text-purple-600">Read More <i className="fas fa-arrow-right"></i></a>
        </div>
    );
};

export default InfoCard;

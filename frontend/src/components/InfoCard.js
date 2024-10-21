import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styling

const InfoCard = () => {
    // State to manage the selected date
    const [date, setDate] = useState(new Date());

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Built by developers</h2>
            <h3 className="text-gray-600 mb-4">Student Dashboard</h3>
            <p className="text-gray-600 mb-4">From colors, cards, typography to complex elements, you will find the full documentation.</p>
            <a href="/student-dashboard" className="text-purple-600">Read More <i className="fas fa-arrow-right"></i></a>

            {/* Add Calendar Component */}
            <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Select a date:</h3>
                <Calendar onChange={setDate} value={date} />
                <p className="mt-2 text-gray-600">Selected date: {date.toDateString()}</p>
            </div>
        </div>
    );
};

export default InfoCard;

import React from 'react';

const SalesOverview = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Sales overview</h2>
            <p className="text-gray-600 mb-4">↑ 4% more in 2021</p>
            <img src="https://placehold.co/300x200" alt="Line chart showing sales overview" className="rounded-lg" />
        </div>
    );
};

export default SalesOverview;

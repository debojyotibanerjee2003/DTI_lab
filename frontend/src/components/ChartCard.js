import React from 'react';

const ChartCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Active Users</h2>
            <p className="text-gray-600 mb-4">(+23%) than last week</p>
            <img src="https://placehold.co/300x200" alt="Bar chart showing active users" className="rounded-lg" />
            <div className="flex justify-between mt-4">
                <div className="text-center">
                    <p className="text-gray-600">Users</p>
                    <h3 className="text-xl font-bold">36K</h3>
                </div>
                <div className="text-center">
                    <p className="text-gray-600">Clicks</p>
                    <h3 className="text-xl font-bold">2m</h3>
                </div>
                <div className="text-center">
                    <p className="text-gray-600">Sales</p>
                    <h3 className="text-xl font-bold">435$</h3>
                </div>
                <div className="text-center">
                    <p className="text-gray-600">Items</p>
                    <h3 className="text-xl font-bold">43</h3>
                </div>
            </div>
        </div>
    );
};

export default ChartCard;

import React from 'react';

const Card = ({ title, value, percentage, icon }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-purple-600 text-white p-4 rounded-lg mr-4">
                <i className={`${icon} text-2xl`}></i>
            </div>
            <div>
                <p className="text-gray-600">{title}</p>
                <h2 className="text-2xl font-bold">{value}</h2>
                <p className="text-green-500">{percentage}</p>
            </div>
        </div>
    );
};

export default Card;

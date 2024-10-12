import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
    return (
        <div className="w-64 bg-white h-screen p-4 shadow-lg">
            <div className="flex items-center mb-8">
                <i className="fas fa-robot text-2xl mr-2"></i>
                <span className="text-xl font-bold">Soft UI Dashboard</span>
            </div>
            <nav>
                <ul>
                    <li className="mb-4">
                        <a href="/student-dashboard" className="flex items-center text-purple-600">
                            <i className="fas fa-tachometer-alt mr-2"></i>
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/student-dashboard" className="flex items-center text-gray-600">
                            <i className="fas fa-table mr-2"></i>
                            Tables
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/student-dashboard" className="flex items-center text-gray-600">
                            <i className="fas fa-file-invoice-dollar mr-2"></i>
                            Billing
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/student-dashboard" className="flex items-center text-gray-600">
                            <i className="fas fa-vr-cardboard mr-2"></i>
                            Virtual Reality
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/student-dashboard" className="flex items-center text-gray-600">
                            <i className="fas fa-sync-alt mr-2"></i>
                            RTL
                        </a>
                    </li>
                </ul>
                <div className="mt-8">
                    <h3 className="text-gray-600 mb-4">ACCOUNT PAGES</h3>
                    <ul>
                        <li className="mb-4">
                            <a href="/student-dashboard" className="flex items-center text-gray-600">
                                <i className="fas fa-user mr-2"></i>
                                Profile
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="/student-dashboard" className="flex items-center text-gray-600">
                                <i className="fas fa-sign-in-alt mr-2"></i>
                                Sign In
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="/student-dashboard" className="flex items-center text-gray-600">
                                <i className="fas fa-user-plus mr-2"></i>
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                    <p className="text-gray-600 mb-2">Need help?</p>
                    <button className="bg-white text-gray-600 px-4 py-2 rounded-lg shadow-md mb-4">DOCUMENTATION</button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md">UPGRADE TO PRO</button>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;

// src/components/SearchResults.js
import React from 'react';

const SearchResults = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
                <div className="text-3xl font-bold px-10">UniSearch</div>
                <div className="flex space-x-4">
                    <button className="bg-white text-blue-900 px-4 py-2 rounded">Register</button>
                    <button className="bg-white text-blue-900 px-4 py-2 rounded">Sign in</button>
                </div>
            </header>

            {/* Navigation Buttons */}
            <div className="bg-blue-900 text-white p-4 flex justify-center space-x-4">
                <button className="bg-blue-700 px-4 py-2 rounded">Universities</button>
                <button className="px-4 py-2 rounded">NIRF Ranking</button>
                <button className="px-4 py-2 rounded">QS ranking</button>
                <button className="px-4 py-2 rounded">Country</button>
            </div>

            {/* Search Section */}
            <div className="bg-white p-4 shadow-md flex justify-center items-center space-x-4">
                <input type="text" placeholder="Search by University" className="border p-2 rounded w-1/3" />
                <input type="text" placeholder="Search by Location" className="border p-2 rounded w-1/3" />
                <input type="text" placeholder="Search by Ranking" className="border p-2 rounded w-1/3" />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Search</button>
            </div>

            {/* Breadcrumbs and Results */}
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">MIT: 10 results found</h1>

                {/* Sorting and View Buttons */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-sort"></i>
                        <span>Sort by: Top ranks for Universities</span>
                    </div>
                    <div className="flex space-x-2">
                        <button className="border px-4 py-2 rounded">List</button>
                        <button className="border px-4 py-2 rounded">Grid</button>
                    </div>
                </div>

                {/* Main Content: Sidebar + Listings */}
                <div className="flex">
                    {/* Sidebar */}
                    <aside className="w-1/4 p-4 border rounded">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4">Show on map</button>
                        <div className="mb-4">
                            <h2 className="font-bold mb-2">Filter by:</h2>
                            <div className="mb-2">
                                <h3 className="font-semibold">Your previous filters</h3>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Indian Universities
                                </label>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold">Univeristy Course fee(excluding Scholarships)</h3>
                                <div className="flex items-center space-x-2 mb-2">
                                    <button className="border px-4 py-2 rounded">Per semester</button>
                                    <button className="border px-4 py-2 rounded">Per year</button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>₹20,000</span>
                                    <input type="range" className="w-full" />
                                    <span>₹20Lakh+</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Popular filters</h3>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    IITs & NITs
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Top Government Universities
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Top Nirf Ranking Universities
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Top Private Universities
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Top Universities in West Bengal
                                </label>
                            </div>
                        </div>
                    </aside>

                    {/* Property Listings */}
                    <main className="w-3/4 p-4">
                        <div className="border rounded p-4 mb-4">
                            <div className="flex">
                                <img src="https://placehold.co/150x150" alt="Room with a double bed and balcony" className="w-1/4 rounded" />
                                <div className="w-3/4 pl-4">
                                    <h2 className="text-xl font-bold">Indian Institute of Technology, Bombay</h2>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="bg-yellow-400 text-white px-2 py-1 rounded">Featured</span>
                                        <a href="#" className="text-blue-500 hover:underline">Research university in Mumbai, Maharashtra</a>
                                        <span>. In the downtown</span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="font-semibold">QS Ranking-</span>
                                        <span> 59</span>
                                        <br></br>
                                        <span className="font-semibold">Nirf Ranking-</span>
                                        <span> 1</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="font-semibold">Phone Number-</span>
                                        <span> 022 2572 2545</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded">See More</button>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-gray-500">Excellent</span>
                                            <span className="bg-blue-500 text-white px-2 py-1 rounded">9.6</span>
                                            <span className="text-gray-500">(42 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Property */}
                        <div className="border rounded p-4">
                            <div className="flex">
                                <img src="https://placehold.co/150x150" alt="Room with multiple beds" className="w-1/4 rounded" />
                                <div className="w-3/4 pl-4">
                                    <h2 className="text-xl font-bold">Indian Institute of Technology, Kharagpur</h2>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="bg-yellow-400 text-white px-2 py-1 rounded">Featured</span>
                                        <a href="#" className="text-blue-500 hover:underline">Research university in Mumbai, Maharashtra</a>
                                        <span>. In the downtown</span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="font-semibold">QS Ranking-</span>
                                        <span> 224</span>
                                        <br></br>
                                        <span className="font-semibold">Nirf Ranking-</span>
                                        <span> 4</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                    <span className="font-semibold">Phone Number-</span>
                                    <span> 032 2225 5221</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded">See More</button>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-gray-500">Excellent</span>
                                            <span className="bg-blue-500 text-white px-2 py-1 rounded">9.6</span>
                                            <span className="text-gray-500">(42 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;

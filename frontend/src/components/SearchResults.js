// src/components/SearchResults.js
import React from 'react';

const SearchResults = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Booking.com</div>
                <div className="flex space-x-4">
                    <button className="bg-white text-blue-900 px-4 py-2 rounded">Register</button>
                    <button className="bg-white text-blue-900 px-4 py-2 rounded">Sign in</button>
                </div>
            </header>

            {/* Navigation Buttons */}
            <div className="bg-blue-900 text-white p-4 flex justify-center space-x-4">
                <button className="bg-blue-700 px-4 py-2 rounded">Stays</button>
                <button className="px-4 py-2 rounded">Flights</button>
                <button className="px-4 py-2 rounded">Flight + Hotel</button>
                <button className="px-4 py-2 rounded">Car rentals</button>
                <button className="px-4 py-2 rounded">Attractions</button>
                <button className="px-4 py-2 rounded">Airport taxis</button>
            </div>

            {/* Search Section */}
            <div className="bg-white p-4 shadow-md flex justify-center items-center space-x-4">
                <input type="text" placeholder="Rishikesh" className="border p-2 rounded w-1/3" />
                <input type="text" placeholder="Sat, Oct 12 - Wed, Nov 20" className="border p-2 rounded w-1/3" />
                <input type="text" placeholder="2 adults · 0 children · 1 room" className="border p-2 rounded w-1/3" />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Search</button>
            </div>

            {/* Breadcrumbs and Results */}
            <div className="p-4">
                <nav className="text-sm text-gray-600 mb-4">
                    <a href="#" className="hover:underline">Home</a> &gt; 
                    <a href="#" className="hover:underline">India</a> &gt; 
                    <a href="#" className="hover:underline">Uttarakhand</a> &gt; 
                    <a href="#" className="hover:underline">Rishikesh</a> &gt; 
                    Search results
                </nav>
                <h1 className="text-2xl font-bold mb-4">Rishīkesh: 73 properties found</h1>

                {/* Sorting and View Buttons */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-sort"></i>
                        <span>Sort by: Top picks for long stays</span>
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
                                    Entire homes & apartments
                                </label>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold">Your budget (per night)</h3>
                                <div className="flex items-center space-x-2 mb-2">
                                    <button className="border px-4 py-2 rounded">Per night</button>
                                    <button className="border px-4 py-2 rounded">Entire stay</button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>US$5</span>
                                    <input type="range" className="w-full" />
                                    <span>US$200+</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Popular filters</h3>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Book without credit card
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    4 stars
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Hotels
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Resorts
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Kitchen/Kitchenette
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
                                    <h2 className="text-xl font-bold">The Namami Tapovan by Natures Hooks</h2>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="bg-yellow-400 text-white px-2 py-1 rounded">Featured</span>
                                        <a href="#" className="text-blue-500 hover:underline">River Rafting in Rishikesh, Rishikesh</a>
                                        <span>· 7.2 km from downtown</span>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded mb-2">Limited-time Deal</div>
                                    <div className="mb-2">
                                        <span className="font-semibold">Double Room with Balcony</span>
                                        <span> · 1 full bed</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-500 line-through">US$1,084</span>
                                        <span className="text-red-500 text-xl font-bold">US$941</span>
                                        <span className="text-gray-500">+US$113 taxes and fees</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded">See availability</button>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-gray-500">Excellent</span>
                                            <span className="bg-blue-500 text-white px-2 py-1 rounded">8.6</span>
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
                                    <h2 className="text-xl font-bold">Ganga Abode</h2>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="bg-yellow-400 text-white px-2 py-1 rounded">New to Booking.com</span>
                                        <a href="#" className="text-blue-500 hover:underline">Rishikesh</a>
                                        <span>· 5.6 km from downtown</span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="font-semibold">Two-Bedroom Apartment</span>
                                        <span> · 4 beds (1 twin, 1 sofa bed, 2 queens)</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-red-500 text-xl font-bold">US$456</span>
                                        <span className="text-gray-500">+US$52 taxes and fees</span>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded">See availability</button>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-gray-500">No reviews yet</span>
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

import React, { useState, useEffect } from 'react';


const SearchResults = () => {
    // Embedded JSON Data
    const universityData = [
        {
            name: "Indian Institute of Technology Bombay",
            location: "Mumbai, Maharashtra",
            qsRanking: 177,
            nirfRanking: 3,
            phoneNumber: "+91-22-25722545",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jGXDtpoKU2QoWvZJinXfw7LeRGrzNA_Xmg&s",  // Placeholder image
            reviews: {
                rating: 4.8,
                count: 320,
            },
            featured: true
        },
        {
            name: "Indian Institute of Technology Delhi",
            location: "Delhi, India",
            qsRanking: 185,
            nirfRanking: 2,
            phoneNumber: "+91-11-26597135",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNV3TffyfrOH4J_5wms17NEghMcl2PDM7pdQ&s",  // Placeholder image
            reviews: {
                rating: 4.7,
                count: 290,
            },
            featured: false
        },
        {
            name: "Indian Institute of Technology Kanpur",
            location: "Kanpur, Uttar Pradesh",
            qsRanking: 227,
            nirfRanking: 4,
            phoneNumber: "+91-512-2590151",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59H4g62ys-lMF-b4wK2AfEfqX_Is3FvCwtQ&s",  // Placeholder image
            reviews: {
                rating: 4.5,
                count: 280,
            },
            featured: true
        }
    ];

    // State to store universities (since there's no fetching, we set it directly)
    const [universities, setUniversities] = useState([]);

    // Simulate fetching data by using useEffect to set the JSON data
    useEffect(() => {
        setUniversities(universityData); // Simulates fetching
    }, []);

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
                <button className="px-4 py-2 rounded">QS Ranking</button>
                <button className="px-4 py-2 rounded">Country</button>
            </div>

            {/* Search Section */}
            <div className="bg-white p-4 shadow-md flex justify-center items-center space-x-4">
                <input type="text" placeholder="Search by University" className="border p-2 rounded w-1/3" />
                <input type="text" placeholder="Search by Location" className="border p-2 rounded w-1/3" />
                <input type="text" placeholder="Search by Ranking" className="border p-2 rounded w-1/3" />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Search</button>
            </div>

            {/* Breadcrumbs */}
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Universities: {universities.length} results found</h1>

                {/* Sorting and View Options */}
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

                {/* Sidebar + Listings */}
                <div className="flex">
                    {/* Sidebar Section */}
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
                                <h3 className="font-semibold">University Course Fee (Excl. Scholarships)</h3>
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

                    {/* University Listings */}
                    <main className="w-3/4 p-4">
                        {universities.map((university, index) => (
                            <div key={index} className="border rounded p-4 mb-4">
                                <div className="flex">
                                    <img src={university.image} alt={university.name} className="w-1/3 h-45 rounded" />
                                    <div className="w-3/4 pl-4">
                                        <h2 className="text-xl font-bold">{university.name}</h2>
                                        <div className="flex items-center space-x-2 mb-2">
                                            {university.featured && (
                                                <span className="bg-yellow-400 text-white px-2 py-1 rounded">Featured</span>
                                            )}
                                            <span>{university.location}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="font-semibold">QS Ranking: </span>
                                            <span>{university.qsRanking}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="font-semibold">NIRF Ranking: </span>
                                            <span>{university.nirfRanking}</span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="font-semibold">Phone: </span>
                                            <span>{university.phoneNumber}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded">See More</button>
                                            <div className="flex items-center space-x-1">
                                                <span className="text-gray-500">Excellent</span>
                                                <span className="bg-blue-500 text-white px-2 py-1 rounded">{university.reviews.rating}</span>
                                                <span className="text-gray-500">({university.reviews.count} reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;

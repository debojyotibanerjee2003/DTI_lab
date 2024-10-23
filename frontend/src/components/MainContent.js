import React, { useState, useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import InfoCard from './InfoCard';
import ImageCard from './ImageCard';
import ChartCard from './ChartCard';
import SalesOverview from './SalesOverview';
import Sidebar from './Sidebar';
import AIChatbot from './AIChatbot';

const MainContent = ({ onProfileClick }) => {
    // List of courses with images
    const courses = [
        { name: "BTech", image: "https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg" },
        { name: "BSc", image: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/11/23173212/BSc-Courses-List.jpg" },
        { name: "MTech", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzzyzlEj-arfR_bW3hpIzgJ7iv2RHMmswIQ&s" },
        { name: "PhD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcTsPrmWsyNO_0ackiSfXrlKVT80IgcqkDA&s" },
        { name: "MBA", image: "phttps://www.google.com/imgres?q=give%20me%20images%20of%20MBA%20course&imgurl=https%3A%2F%2Fe-gmat.com%2Fblogs%2Fwp-content%2Fuploads%2F2020%2F06%2Fmba-full-form.jpg&imgrefurl=https%3A%2F%2Fe-gmat.com%2Fblogs%2Fmba-master-of-business-administration%2F&docid=2tYpzV6CNYeZHM&tbnid=mt-jl7l9UzjSDM&vet=12ahUKEwiXhfO8oqSJAxVtFVkFHcCXIJwQM3oECH8QAA..i&w=750&h=317&hcb=2&ved=2ahUKEwiXhfO8oqSJAxVtFVkFHcCXIJwQM3oECH8QAA" },
        { name: "MSc", image: "path/to/msc.jpg" },
        { name: "BBA", image: "path/to/bba.jpg" },
        { name: "MCA", image: "path/to/mca.jpg" },
    ];

    // List of Indian universities with images
    const universities = [
        { name: "IIT Bombay", image: "path/to/iit_bombay.jpg" },
        { name: "IIT Delhi", image: "path/to/iit_delhi.jpg" },
        { name: "IISc Bangalore", image: "path/to/iisc_bangalore.jpg" },
        { name: "IIT Madras", image: "path/to/iit_madras.jpg" },
        { name: "BITS Pilani", image: "path/to/bits_pilani.jpg" },
        { name: "DU", image: "path/to/du.jpg" },
        { name: "IIT Kanpur", image: "path/to/iit_kanpur.jpg" },
        { name: "NIT Trichy", image: "path/to/nit_trichy.jpg" },
    ];

    // List of foreign universities with images
    const foreignUniversities = [
        { name: "Harvard University", image: "path/to/harvard.jpg" },
        { name: "Stanford University", image: "path/to/stanford.jpg" },
        { name: "MIT", image: "path/to/mit.jpg" },
        { name: "University of Cambridge", image: "path/to/cambridge.jpg" },
        { name: "University of Oxford", image: "path/to/oxford.jpg" },
        { name: "ETH Zurich", image: "path/to/eth_zurich.jpg" },
        { name: "University of Chicago", image: "path/to/chicago.jpg" },
        { name: "University of California, Berkeley", image: "path/to/uc_berkeley.jpg" },
    ];

    // List of branches with images
    const branches = [
        { name: "Computer Science", image: "path/to/cs.jpg" },
        { name: "Mechanical Engineering", image: "path/to/mechanical.jpg" },
        { name: "Civil Engineering", image: "path/to/civil.jpg" },
        { name: "Electrical Engineering", image: "path/to/electrical.jpg" },
        { name: "Electronics Engineering", image: "path/to/electronics.jpg" },
        { name: "Information Technology", image: "path/to/it.jpg" },
        { name: "MBA in Marketing", image: "path/to/mba_marketing.jpg" },
        { name: "MBA in Finance", image: "path/to/mba_finance.jpg" },
    ];

    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
    const [currentUniversityIndex, setCurrentUniversityIndex] = useState(0);
    const [currentForeignUniversityIndex, setCurrentForeignUniversityIndex] = useState(0);
    const [currentBranchIndex, setCurrentBranchIndex] = useState(0);

    // Auto slide function for courses
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
        }, 3000); // Change course every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [courses.length]);

    // Auto slide function for Indian universities
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentUniversityIndex((prevIndex) => (prevIndex + 1) % universities.length);
        }, 3000); // Change university every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [universities.length]);

    // Auto slide function for foreign universities
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentForeignUniversityIndex((prevIndex) => (prevIndex + 1) % foreignUniversities.length);
        }, 3000); // Change foreign university every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [foreignUniversities.length]);

    // Auto slide function for branches
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBranchIndex((prevIndex) => (prevIndex + 1) % branches.length);
        }, 3000); // Change branch every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [branches.length]);

    // Functions for previous and next buttons for courses
    const handlePreviousCourse = () => {
        setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
    };

    const handleNextCourse = () => {
        setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
    };

    // Functions for previous and next buttons for Indian universities
    const handlePreviousUniversity = () => {
        setCurrentUniversityIndex((prevIndex) => (prevIndex - 1 + universities.length) % universities.length);
    };

    const handleNextUniversity = () => {
        setCurrentUniversityIndex((prevIndex) => (prevIndex + 1) % universities.length);
    };

    // Functions for previous and next buttons for foreign universities
    const handlePreviousForeignUniversity = () => {
        setCurrentForeignUniversityIndex((prevIndex) => (prevIndex - 1 + foreignUniversities.length) % foreignUniversities.length);
    };

    const handleNextForeignUniversity = () => {
        setCurrentForeignUniversityIndex((prevIndex) => (prevIndex + 1) % foreignUniversities.length);
    };

    // Functions for previous and next buttons for branches
    const handlePreviousBranch = () => {
        setCurrentBranchIndex((prevIndex) => (prevIndex - 1 + branches.length) % branches.length);
    };

    const handleNextBranch = () => {
        setCurrentBranchIndex((prevIndex) => (prevIndex + 1) % branches.length);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <Header />
                
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {/* Courses Card */}
                    <div 
                        className="relative shadow-lg rounded-lg overflow-hidden h-64" 
                        style={{
                            backgroundImage: `url(${courses[currentCourseIndex].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-lg font-semibold p-4 text-white bg-black bg-opacity-50">Courses: {courses[currentCourseIndex].name}</h3>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4">
                            <button 
                                onClick={handlePreviousCourse} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextCourse} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Indian Universities Card */}
                    <div 
                        className="relative shadow-lg rounded-lg overflow-hidden h-64" 
                        style={{
                            backgroundImage: `url(${universities[currentUniversityIndex].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-lg font-semibold p-4 text-white bg-black bg-opacity-50">Indian Universities: {universities[currentUniversityIndex].name}</h3>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4">
                            <button 
                                onClick={handlePreviousUniversity} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextUniversity} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Foreign Universities Card */}
                    <div 
                        className="relative shadow-lg rounded-lg overflow-hidden h-64" 
                        style={{
                            backgroundImage: `url(${foreignUniversities[currentForeignUniversityIndex].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-lg font-semibold p-4 text-white bg-black bg-opacity-50">Foreign Universities: {foreignUniversities[currentForeignUniversityIndex].name}</h3>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4">
                            <button 
                                onClick={handlePreviousForeignUniversity} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextForeignUniversity} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Branches Card */}
                    <div 
                        className="relative shadow-lg rounded-lg overflow-hidden h-64" 
                        style={{
                            backgroundImage: `url(${branches[currentBranchIndex].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h3 className="text-lg font-semibold p-4 text-white bg-black bg-opacity-50">Branches: {branches[currentBranchIndex].name}</h3>
                        <div className="flex justify-between absolute bottom-4 left-4 right-4">
                            <button 
                                onClick={handlePreviousBranch} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextBranch} 
                                className="p-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded transition-transform transform hover:scale-105"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Other Components */}
                <div className="mt-6">
                    <ChartCard />
                    <ImageCard />
                    <InfoCard />
                    <SalesOverview />
                </div>

                {/* AI Chatbot */}
                <AIChatbot />
            </div>
        </div>
    );
};

export default MainContent;

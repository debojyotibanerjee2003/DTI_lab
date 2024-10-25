import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ChartCard = () => {
    const [universities, setUniversities] = useState([]);
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('');

    const universityOptions = [
        "Harvard University",
        "Stanford University",
        "MIT",
        "California Institute of Technology",
        "University of Chicago",
        "Columbia University",
        "Yale University",
        "University of Pennsylvania",
        "Princeton University",
        "University of California, Berkeley"
    ];

    const courseOptions = [
        "Computer Science",
        "Business Administration",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Biology",
        "Mathematics",
        "Physics",
        "Psychology",
        "Graphic Design"
    ];

    const branchOptions = [
        "Undergraduate",
        "Postgraduate",
        "PhD",
        "Diploma",
        "Certificate"
    ];

    const handleAddUniversity = () => {
        if (selectedUniversity && !universities.includes(selectedUniversity)) {
            setUniversities([...universities, selectedUniversity]);
            setSelectedUniversity('');
        }
    };

    const handleRemoveUniversity = (universityToRemove) => {
        setUniversities(universities.filter(university => university !== universityToRemove));
    };

    const handleAddCourse = () => {
        if (selectedCourse && !courses.includes(selectedCourse)) {
            setCourses([...courses, selectedCourse]);
            setSelectedCourse('');
        }
    };

    const handleRemoveCourse = (courseToRemove) => {
        setCourses(courses.filter(course => course !== courseToRemove));
    };

    const handleAddBranch = () => {
        if (selectedBranch && !branches.includes(selectedBranch)) {
            setBranches([...branches, selectedBranch]);
            setSelectedBranch('');
        }
    };

    const handleRemoveBranch = (branchToRemove) => {
        setBranches(branches.filter(branch => branch !== branchToRemove));
    };

    return (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg transform transition hover:scale-105 duration-300">
           <h1 className="text-3xl font-extrabold mb-4 text-gray-800">Your CheckList</h1>
           <br></br>
           <div style={{ marginLeft: '2rem'}}>
            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">University List</h2>
            
            <div className="bg-white p-4 rounded-lg shadow mb-8">
                <div className="flex mb-4 space-x-4">
                    <select
                        value={selectedUniversity}
                        onChange={(e) => setSelectedUniversity(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <option value="">Select a university</option>
                        {universityOptions.map((university, index) => (
                            <option key={index} value={university}>
                                {university}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleAddUniversity}
                        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-400 transition duration-300"
                    >
                        Add University
                    </button>
                </div>
                <ul className="list-disc pl-6 mb-2">
                    {universities.map((university, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            <span className="text-lg text-gray-900">{university}</span>
                            <button
                                onClick={() => handleRemoveUniversity(university)}
                                style={{ marginRight: '9rem' }}
                                className="text-red-500 hover:text-red-700 font-bold ml-4 transition duration-300"
                                title="Remove University"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Course List</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-8">
                <div className="flex mb-4 space-x-4">
                    <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <option value="">Select a course</option>
                        {courseOptions.map((course, index) => (
                            <option key={index} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleAddCourse}
                        className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-400 transition duration-300"
                    >
                        Add Course
                    </button>
                </div>
                <ul className="list-disc pl-6 mb-2">
                    {courses.map((course, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            <span className="text-lg text-gray-900">{course}</span>
                            <button
                                onClick={() => handleRemoveCourse(course)}
                                style={{ marginRight: '9rem' }}
                                className="text-red-500 hover:text-red-700 font-bold ml-4 transition duration-300"
                                title="Remove Course"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Branch List</h2>
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex mb-4 space-x-4">
                    <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <option value="">Select a branch</option>
                        {branchOptions.map((branch, index) => (
                            <option key={index} value={branch}>
                                {branch}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleAddBranch}
                        className="bg-gradient-to-r from-red-600 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-400 transition duration-300"
                    >
                        Add Branch
                    </button>
                </div>
                <ul className="list-disc pl-6 mb-2">
                    {branches.map((branch, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            <span className="text-lg text-gray-900">{branch}</span>
                            <button
                                onClick={() => handleRemoveBranch(branch)}
                                style={{ marginRight: '9rem' }}
                                className="text-red-500 hover:text-red-700 font-bold ml-4 transition duration-300"
                                title="Remove Branch"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default ChartCard;

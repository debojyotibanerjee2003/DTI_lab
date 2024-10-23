import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const SalesOverview = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        alert('Files submitted successfully!');
    };

    const handlePayment = () => {
        navigate('/payment'); // Redirect to the PaymentForm component
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', maxWidth: '600px', margin: 'auto' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>Sales Overview</h2>
            <p style={{ color: 'black', marginBottom: '20px' }}>↑ 4% more in 2021</p>
            <img src="https://placehold.co/300x200" alt="Line chart showing sales overview" style={{ borderRadius: '8px', marginBottom: '20px' }} />

            <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: 'black' }}>University Registration Document Upload</h1>
            
            <section style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>Required Documents</h2>
                <ul style={{ listStyleType: 'none', paddingLeft: '0', color: 'black' }}>
                    <li>Transcripts</li>
                    <li>Passport Copy</li>
                    <li>Letter of Recommendation</li>
                    <li>Statement of Purpose</li>
                    <li>Proof of English Proficiency</li>
                    <li>Financial Statement</li>
                    <li>High School Diploma</li>
                    <li>GRE/GMAT Scores</li>
                    <li>Portfolio (for Art/Design courses)</li>
                </ul>
            </section>

            <section>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>Upload Your Documents</h2>
                <form id="upload-form" onSubmit={handleSubmit}>
                    {['transcripts', 'passport', 'recommendation', 'sop', 'proficiency', 'financial', 'diploma', 'scores', 'portfolio'].map((doc, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <label htmlFor={doc} style={{ display: 'block', marginBottom: '5px', color: 'black' }}>{doc.charAt(0).toUpperCase() + doc.slice(1).replace(/_/g, ' ')}:</label>
                            <input type="file" id={doc} name={doc} style={{ width: '100%' }} />
                        </div>
                    ))}
                    <button type="submit" style={{ padding: '10px 15px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit & Save</button>
                    <br /><br />
                    <p style={{ color: 'black' }}>After submitting all documents, click below to proceed for payment.</p>
                    <button type="button" onClick={handlePayment} style={{ padding: '10px 15px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Proceed to Payment</button>
                    <br /><br />
                </form>
            </section>
        </div>
    );
};

export default SalesOverview;

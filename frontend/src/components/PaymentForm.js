import React, { useState } from 'react';
import '../styles/PaymentForm.css'; // Import your custom CSS file

const PaymentForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true); // Update state to show success message
    };

    return (
        <div className="payment-form-container">
            {!submitted ? (
                <div className="payment-form" id="payment-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-header">
                            <h2 className="form-title">Total</h2>
                            <input className="form-input amount-input" placeholder="Amount" type="text" required />
                        </div>
                        <div className="form-fields">
                            <div className="field-group">
                                <input className="form-input" placeholder="First name" type="text" required />
                                <input className="form-input" placeholder="Last name" type="text" required />
                            </div>
                            <div className="field-group">
                                <input className="form-input" placeholder="Card number" type="text" required />
                                <input className="form-input card-cw" placeholder="CW" type="text" required />
                            </div>
                            <div className="field-group">
                                <input className="form-input expiry-date" placeholder="MM / YY" type="text" required />
                            </div>
                        </div>
                        <button className="submit-button" type="submit">SUBMIT PAYMENT</button>
                    </form>
                </div>
            ) : (
                <div id="success-message" className="success-message">
                    <div className="success-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1 className="success-title">Your payment was successful</h1>
                    <p className="success-message-text">Thank you for your payment. We will be in contact with more details shortly.</p>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;

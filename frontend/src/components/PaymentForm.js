import React, { useState } from 'react';
import styles from '../styles/PaymentForm.module.css'; // Import your custom CSS file

const PaymentForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true); // Update state to show success message
    };

    return (
        <div className={styles.paymentFormContainer}>
            {!submitted ? (
                <div className={styles.paymentForm} id="payment-form">
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formHeader}>
                            <h2 className={styles.formTitle}>Total</h2>
                            <input className={`${styles.formInput} ${styles.amountInput}`} placeholder="Amount" type="text" required />
                        </div>
                        <div className={styles.formFields}>
                            <div className={styles.fieldGroup}>
                                <input className={styles.formInput} placeholder="First name" type="text" required />
                                <input className={styles.formInput} placeholder="Last name" type="text" required />
                            </div>
                            <div className={styles.fieldGroup}>
                                <input className={styles.formInput} placeholder="Card number" type="text" required />
                                <input className={`${styles.formInput} ${styles.cardCW}`} placeholder="CW" type="text" required />
                            </div>
                            <div className={styles.fieldGroup}>
                                <input className={`${styles.formInput} ${styles.expiryDate}`} placeholder="MM / YY" type="text" required />
                            </div>
                        </div>
                        <button className={styles.submitButton} type="submit">SUBMIT PAYMENT</button>
                    </form>
                </div>
            ) : (
                <div id="success-message" className={styles.successMessage}>
                    <div className={styles.successIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1 className={styles.successTitle}>Your payment was successful</h1>
                    <p className={styles.successMessageText}>Thank you for your payment. We will be in contact with more details shortly.</p>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;

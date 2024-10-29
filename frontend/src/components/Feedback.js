// src/components/Feedback.js
import React from 'react';
import styles from '../styles/Feedback.module.css'; // Adjust the path according to your folder structure

function FeedbackForm() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Feedback Form</h1>
            <p className={styles.subtitle}>
                We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!
            </p>
            <hr className={styles.separator} />
            <form>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Feedback Type</label>
                    <div className={styles.radioGroup}>
                        <label className={styles.radio}>
                            <input type="radio" name="feedbackType" className={styles.radioInput} />
                            <span className={styles.radioLabel}>Comments</span>
                        </label>
                        <label className={styles.radio}>
                            <input type="radio" name="feedbackType" className={styles.radioInput} />
                            <span className={styles.radioLabel}>Suggestions</span>
                        </label>
                        <label className={styles.radio}>
                            <input type="radio" name="feedbackType" className={styles.radioInput} />
                            <span className={styles.radioLabel}>Questions</span>
                        </label>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        Describe Your Feedback: <span className={styles.required}>*</span>
                    </label>
                    <textarea className={styles.textarea} rows="5" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        Name <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.nameGroup}>
                        <input type="text" className={styles.nameInput} placeholder="First Name" />
                        <input type="text" className={styles.nameInput} placeholder="Last Name" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        E-mail <span className={styles.required}>*</span>
                    </label>
                    <input type="email" className={styles.emailInput} placeholder="ex: myname@example.com" />
                    <p className={styles.helperText}>example@example.com</p>
                </div>
                <div className={styles.submitGroup}>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FeedbackForm;

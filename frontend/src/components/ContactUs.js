// ContactUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Update this import
import styles from '../styles/ContactUs.module.css';

const ContactUs = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className={`${styles.container} flex flex-col items-center min-h-screen`}>
      <div className="flex justify-center items-center">
        <div className={`${styles.gridContainer} grid grid-cols-2 gap-6 p-8`}>
          <div className={`${styles.card} ${styles.blueCard}`}>
            <i className="fas fa-info-circle text-3xl mb-4"></i>
            <h2 className={styles.cardTitle}>ADMISSION GUIDELINES</h2>
            <p>
              For detailed admission guidelines, visit our{' '}
              <a href="https://www.university.com/admission-guidelines" className={styles.link}>
                Admission Guidelines
              </a>{' '}
              page.
            </p>
          </div>
          <div className={`${styles.card} ${styles.greenCard}`}>
            <i className="fas fa-phone-alt text-3xl mb-4"></i>
            <h2 className={styles.cardTitle}>ADMISSION OFFICE</h2>
            <p>123-456-7890<br />800-123-4567 (Toll Free)</p>
          </div>
          <div className={`${styles.card} ${styles.purpleCard}`}>
            <i className="fas fa-info-circle text-3xl mb-4"></i>
            <h2 className={styles.cardTitle}>INFORMATION DESK</h2>
            <p>
              For general inquiries, visit our{' '}
              <a href="https://www.university.com/info" className={styles.link}>
                Information Desk
              </a>.
            </p>
          </div>
          <div className={`${styles.card} ${styles.redCard}`}>
            <i className="fas fa-envelope text-3xl mb-4"></i>
            <h2 className={styles.cardTitle}>EMAIL</h2>
            <p>
              <a href="mailto:admissions@university.com" className={styles.link}>
                admissions@university.com
              </a>
            </p>
          </div>
        </div>
        <div className={`${styles.formContainer} ml-6`}>
          <h1 className={`${styles.formTitle}`}>Contact Us</h1>
          <form>
            <input type="text" placeholder="Enter your Name" className={styles.input} />
            <input type="email" placeholder="Enter a valid email address" className={styles.input} />
            <textarea placeholder="Your Message" className={`${styles.input} ${styles.textarea}`}></textarea>
            <button type="submit" className={styles.submitButton}>SUBMIT</button>
          </form>
          <button onClick={handleBack} className={styles.backButton}>BACK</button> {/* Back button */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

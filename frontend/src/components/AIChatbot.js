import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';  // Use a valid FontAwesome icon
import styles from '../styles/AIChatbot.module.css';  // Import the module CSS file

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        if (inputValue.trim() === '') return;
    
        setMessages((prev) => [...prev, { type: 'user', text: inputValue }]);
        console.log('User message sent:', inputValue);  // Debugging line
    
        try {
            const response = await fetch('http://localhost:5001/api/chat', { // Updated API endpoint
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: inputValue }),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log('Bot response:', data.response);  // Debugging line
                setMessages((prev) => [...prev, { type: 'bot', text: data.response }]);
            } else {
                console.error('Error from server:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    
        setInputValue('');
    };    

    return (
        <div>
            <div className={styles.chatIcon} onClick={toggleChat}>
                <FontAwesomeIcon icon={faRobot} />
            </div>

            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h4>Chatbot</h4>
                        <button className={styles.closeChat} onClick={toggleChat}>X</button>
                    </div>
                    <div className={styles.chatBody}>
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.type === 'user' ? styles.userMessage : styles.botMessage}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className={styles.chatFooter}>
                        <input
                            type="text"
                            className={styles.chatInput}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button className={styles.sendButton} onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIChatbot;

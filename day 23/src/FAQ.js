import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const FAQ = () => {
    // Define an array of FAQ items (questions and answers) related to Hospital Management System
    const faqItems = [
        {
            question: 'What is Hospital Management System (HMS)?',
            answer: 'Hospital Management System (HMS) is a comprehensive software solution designed to manage and streamline various operations and processes within a hospital, including patient records, appointment scheduling, billing, and more.'
        },
        {
            question: 'How does HMS benefit healthcare facilities?',
            answer: 'HMS helps healthcare facilities improve efficiency, reduce paperwork, enhance patient care, and ensure better data accuracy by automating tasks such as patient registration, billing, and inventory management.'
        },
        {
            question: 'Can I access my medical records through the HMS?',
            answer: 'Yes, most HMS systems offer patients the ability to access their medical records, test results, and appointment history through secure online portals.'
        },
        {
            question: 'What are the key features of a Hospital Management System?',
            answer: 'Key features of an HMS include patient registration, appointment scheduling, electronic health records (EHR), billing and invoicing, pharmacy management, and reporting tools.'
        },
        {
            question: 'Is HMS software customizable to suit specific hospital needs?',
            answer: 'Yes, many HMS solutions offer customization options to tailor the software to the specific needs and workflows of different healthcare facilities.'
        },
        // Add more FAQ items as needed
    ];

    // Initialize state to keep track of which FAQ item is currently expanded
    const [activeItem, setActiveItem] = useState(null);

    // Function to toggle the active FAQ item
    const toggleItem = (index) => {
        if (activeItem === index) {
            // If the clicked item is already active, close it
            setActiveItem(null);
        } else {
            // Otherwise, open the clicked item
            setActiveItem(index);
        }
    };

    return (
        <div className='faq-main'>
            <div className="faq-container">
                <h2 className='faq-h2'>Hospital Management System FAQ</h2>
                <ul>
                    {faqItems.map((item, index) => (
                        <li key={index}>
                            <button className={`faq-question ${activeItem === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                                {item.question}
                            </button>
                            {activeItem === index && <p className="faq-answer">{item.answer}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FAQ;

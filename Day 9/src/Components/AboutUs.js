import React from "react";
import hospital from '../assets/hospital-management-image.jpg';
import './AboutUs.css';

const About = () => {
    return (
        <>
            <div className="about-body">
                <div className="heading">
                    <h1>About Our Hospital Management System</h1>
                    <p>Welcome to our Hospital Management System, your comprehensive solution for efficient and streamlined healthcare operations. With a strong commitment to improving patient care and administrative efficiency, we offer a state-of-the-art system that caters to the unique needs of healthcare facilities.</p>
                    <div className="heading-container">
                        <section className="about">
                            <div className="about-image">
                                {/* Insert an image related to hospital management */}
                                <img src={hospital} alt="Hospital Management" />
                            </div>
                            <div className="about-content">
                                <h2>Our Mission</h2>
                                <p>Our mission is to empower healthcare providers, administrators, and medical staff with the tools they need to deliver high-quality patient care. We strive to set new industry standards by offering innovative Hospital Management System solutions that not only enhance efficiency but also improve the overall healthcare experience for patients.</p>
                                <h2>Why Choose Our Hospital Management System?</h2>
                                <p>Choose our Hospital Management System for a comprehensive solution tailored to the unique needs of healthcare institutions. Our technology ensures reliability, security, and accuracy in every aspect of hospital management. With an intuitive interface, your staff can efficiently manage patient records, appointments, billing, and more, allowing them to focus on providing exceptional healthcare services. Plus, our dedicated support team is available 24/7 to assist with any questions or technical issues, ensuring seamless healthcare operations.</p>
                                <h2>Our Commitment to Healthcare Excellence</h2>
                                <p>We are dedicated to promoting healthcare excellence and efficiency. Our commitment extends to sustainable and responsible healthcare practices. We aim to minimize administrative burdens and maximize the positive impact our Hospital Management System has on healthcare institutions. Join us in the healthcare revolution and experience the difference our system can make in your hospital. Discover a new level of efficiency, precision, and patient satisfaction today.</p>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;


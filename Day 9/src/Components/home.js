import React from 'react';
import './home.css';
import Footer from './Footer';

function HomePage() {
  return (
    <>
    <div className="homepage">
    <header>
        <h1>Welcome to Our Hospital</h1>
        <p>Your Health is Our Priority</p>
      </header>
      
      <section className="services">
      <h2>Our Services</h2>
      <ul>
      <li>Emergency Care</li>
      <li>Primary Care</li>
          <li>Surgery</li>
          {/* Add more services as needed */}
          </ul>
      </section>
      
      <section className="appointment">
      <h2>Book an Appointment</h2>
        {/* Add a form or link to the appointment booking system */}
        </section>
        
      <section className="contact">
      <h2>Contact Us</h2>
      <p>123 Hospital Street</p>
      <p>City, State ZIP Code</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@hospital.com</p>
      </section>
      </div>
      <Footer/>
      </>
  );
}

export default HomePage;



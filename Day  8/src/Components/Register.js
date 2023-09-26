import React, { useState } from 'react';
import './register.css'; 
import {Link,Routes, Route, useNavigate} from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState(" ");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      phoneNumber,
      email,
      password,
    };

   
    setFirstName(" ");
    setPhoneNumber(" ");
    setEmail(" ");
    setPassword(" ");
  };

  return (
    <div className='body'>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="Enter Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" required />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" placeholder="Enter Your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phoneNumber" required />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />

        <button onClick={()=>nav('/login')}>Register</button>
      </form>
    </div>
  );
}

export default Register;

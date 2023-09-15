import React, { useState } from 'react';
import './register.css'; // You can create a separate CSS file for registration
import {Link,Routes, Route, useNavigate} from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here, such as sending data to a server
    // You can create an object containing all the user data and send it to an API
    const userData = {
      firstName,
      lastName,
      age,
      dateOfBirth,
      address,
      bloodGroup,
      gender,
      phoneNumber,
      email,
      password,
    };

    // Send userData to the server or handle registration as needed

    // Clear form fields after submission
    setFirstName("");
    setLastName("");
    setAge("");
    setDateOfBirth("");
    setAddress("");
    setBloodGroup("");
    setGender("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="Enter Your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" required />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="Enter Your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" required />

        <label htmlFor="age">Age</label>
        <input type="number" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)} name="age" required />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="text" placeholder="Enter Your Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} name="dateOfBirth" required />

        <label htmlFor="address">Address</label>
        <input type="text" placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} name="address" required />

        <label htmlFor="bloodGroup">Blood Group</label>
        <input type="text" placeholder="Enter Your Blood Group" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} name="bloodGroup" required />

        <label htmlFor="gender">Gender</label>
        <input type="text" placeholder="Enter Your Gender" value={gender} onChange={(e) => setGender(e.target.value)} name="gender" required />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" placeholder="Enter Your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phoneNumber" required />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;

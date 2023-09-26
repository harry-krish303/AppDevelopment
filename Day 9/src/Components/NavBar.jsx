import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { logout } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';

function Navbar() {
  
  return (
    <div className="navbar">
    <h1>Hospital Management System</h1>
    <a href='/home'>Home</a>
    <Link to="/contact">
    <a href='/#'>Contactus</a></Link>
    <Link to="/about">
    <a href='/#'>Aboutus</a></Link>
    <a href='/login'>Logout</a>
      
    </div>
  );
}

export default Navbar;

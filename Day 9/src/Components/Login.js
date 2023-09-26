import {Link,Routes, Route, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './login.css'
import { login } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const dispatch=useDispatch();
  const nav=useNavigate()
  const routeregister=()=>{
    localStorage.setItem('user',username);
    dispatch(login(username));
    nav("/");
  }

  return (
    <div className='body' >
    <form>
    
    <label htmlFor="email">Email</label>
    <input type="text" placeholder='Enter Your Mail' value={username} onChange={(e) => setEmail(e.target.value)} name='email' required />
    <label htmlFor="password">Password</label>
    <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' />
    <button  onClick={routeregister}>Sign In</button>
    <p>Don't have an account  </p>
    
    <button  onClick={routeregister}>Register</button>
    
    </form>
    </div>
  );
}

export default Login;

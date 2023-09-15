import {Link,Routes, Route, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const nav=useNavigate()
  const routeregister=()=>{
    nav('/register')
  }

  return (
    <>
      <form >
        <label htmlFor="email">Email</label>
        <input type="gmail" placeholder='Enter Your Mail' value={email} onChange={(e) => setEmail(e.target.value)} name='email' required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' />
        <button type='submit'>Sign In</button>
        <p>Don't have an account  </p>
        <button type='button' onClick={routeregister}>Register</button>
         
      </form>

    
    </>
  );
}

export default Login;

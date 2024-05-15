import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../../config/firebase';

import "./Main.css"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in!");
      navigate('/menu');
    } catch (error) {
      setError(error.message);
      console.error("Failed to log in:", error.message);
    }
  };

  return (
    <div className='login_container'>
      <h1 className='container_h1'>Login</h1>
      <form onSubmit={handleLogin} className='container_form'>
        <div className='form_email'>
            <label className='form_email-label'>Email:</label>
            <input
            type="email"
            className='form_email-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className='form_password'>
            <label className='form_password-label'>Password:</label>
            <input
            type="password"
            className='form_password-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <div className='container_buttons'>
            <button type="submit">Login</button>
            <button>Cancel</button>
        </div>
        {error && alert("Sorry, Something went wrong",{error})}
      </form>
    </div>
  );
};

export default Login;

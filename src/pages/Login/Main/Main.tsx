import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; 
import "./Main.css"; 

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { currentUser, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      await login(email, password);
      console.log("Logged in!");
      navigate('/menu');
    } catch (error: any) { 
      setError("Failed to log in: " + error.message);
      console.error("Failed to log in:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); 
    } catch (error: any) {
      setError("Failed to log out: " + error.message);
    }
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setError('');
  };

  if (currentUser) {
    return (
      <div className='login-container-logged'>
        <p>You are currently logged in as <span className='blue-text'>{currentUser.email}</span>.</p>
        <button className='primary' onClick={handleLogout}>Log out</button>
      </div>
    );
  }

  return (
    <div className='login-container'>
      <h1 className='login-title'>Log in</h1>
      <form onSubmit={handleLogin} className='login-form'>
        <div className='form-group-login'>
          <label className='form-label'>Username :</label>
          <input
            placeholder='your.email@email.com'
            type="email"
            className='form-input'
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group-login'>
          <label className='form-label'>Password :</label>
          <input
            placeholder='your password here'
            type="password"
            className='form-input'
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='button-group'>
          <button type="submit" className='button-submit'>Submit</button>
          <button type="button" className='button-cancel' onClick={handleCancel}>Cancel</button>
        </div>
        {error && <div className='error-message'>{error}</div>}
      </form>
    </div>
  );
};

export default Login;

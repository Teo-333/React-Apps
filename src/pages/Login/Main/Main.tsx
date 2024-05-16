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
      navigate('/'); // Redirect to home or login page after logout
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
      <div className='login_container-logged'>
        <p>You are currently logged in as <span className='blue-text'>{currentUser.email}</span>.</p>
        <button className='primary' onClick={handleLogout}>Log out</button>
      </div>
    );
  }

  return (
    <div className='login_container'>
      <h1 className='container_h1'>Login</h1>
      <form onSubmit={handleLogin} className='container_form'>
        <div className='form_email'>
          <label className='form_label'>Username:</label>
          <input
            type="email"
            className='form_input'
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form_password'>
          <label className='form_label'>Password:</label>
          <input
            type="password"
            className='form_input'
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='container_buttons'>
          <button type="submit" className='primary'>Login</button>
          <button type="button" className='buttons-cancel' onClick={handleCancel}>Cancel</button>
        </div>
        {error && <div className='error_message'>{error}</div>}
      </form>
    </div>
  );
};

export default Login;

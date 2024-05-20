import React, { useState, FormEvent, ChangeEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { useNavigate } from 'react-router-dom';
import "./Main.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in!");
      navigate('/menu');
    } catch (error: any) { // Using 'any' here because the type of error can vary depending on the library
      setError("Failed to log in: " + error.message);
      console.error("Failed to log in:", error.message);
    } finally {
      setEmail('');
      setPassword('');
    }
  };

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setError('');
  };

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

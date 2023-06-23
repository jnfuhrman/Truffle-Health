import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png'; // Import the logo image
import './login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || pass.trim() === '') {
      setError('Please enter your email and password');
      return;
    }

    const user = registeredUsers.find((user) => user.email === email && user.password === pass);
    if (!user) {
      setError('Invalid email or password');
      return;
    } else {
      console.log('Login successful!');
      navigate('/bill-form');
    }
  };

  return (
    <div>
      <nav>
        <ul className="login-nav">
            <Link to="/">
              <img src={logo} alt="Logo" className="lognav-logo" /> {/* Use the logo image */}
            </Link>
        </ul>
      </nav>
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Login</h2>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            type="password"
            placeholder="******"
            id="password"
            name="password"
            onChange={handlePassChange}
          />
          {error && <div className="error-message">{error}</div>}
          <button className="logi" type="submit">
            Log In
          </button>
          <Link className="login-link" to="/register">
            Don't have an Account? Register here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

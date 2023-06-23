

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png'; // Import the logo image
import './register.css';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear the error message when the email is changed
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const isEmailRegistered = (email) => {
    return registeredUsers.some(user => user.email === email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || pass.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: pass
    };

    if (isEmailRegistered(email)) {
      setError('Email already registered');
      return;
    }

    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    console.log('Registration successful!');
    navigate('/');
  };

  return (
    <div>
      <nav>
        <ul className="register-nav">
            <Link to="/">
              <img src={logo} alt="Logo" className="lognav-logo" /> {/* Use the logo image */}
            </Link>
        </ul>
      </nav>
      <div className="auth-format-containter">
        <form className="register-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            value={name}
            type="name"
            placeholder="Full Name"
            id="name"
            name="name"
            onChange={handleNameChange}
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={handleEmailChange}
          />
          {error && <div className="error-message">{error}</div>} {/* Display error message if it exists */}
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            type="password"
            placeholder="******"
            id="password"
            name="password"
            onChange={handlePassChange}
          />
          <button className="regi" type="submit">Register</button>
          <Link className='register-link' to="/login"> Already have an Account? Log in here </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo image
import './nav.css';

function HomePage({ bills, onAddNewBill }) {
  const navigate = useNavigate();
  const [currentBill, setCurrentBill] = useState(null);

  document.documentElement.style.backgroundColor = '#d3b7ff';
  
  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleAddNewBill = () => {
    setCurrentBill(null);
    navigate('/bill-form'); // Navigate to the BillForm page
  };

  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" className="navbar-logo" /> {/* Use the logo image */}
            </Link>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="container">
          <h1>Welcome the Frontend Assessment by Truffle Health</h1>
                  <p>The purpose of this assessment is to evaluate my React skills
                      by building a user-friendly and visually appealing web application. 
                      In this assessment, I will be creating a simple app that lets users 
                      upload their medical bills. The app should have a form where users 
                      can enter important details like the patient's name, address, hospital 
                      name, date of service, bill amount, and even attach a picture of the 
                      bill if available. After submitting the form, users should be able to 
                      see a summary page displaying the entered information. They should also
                      have the option to go back and edit any details if needed. On the home page, 
                      users will find a list of all the uploaded bills, along with a button to add 
                      new bills using the form. By completing this assessment, I will demonstrate my 
                      ability to create a seamless and engaging user experience using React.
                  </p>
                <button className='reg' onClick={handleRegisterClick}>Register</button>
                <button className='log' onClick={handleLoginClick}> Log In </button> 
        </div>
          </section>
          <div className="explanation">
            {/* <ul>
            {bills.map((bill, index) => (
                <li key={index}>
                <p>Patient Name: {bill.patientName}</p>
                <p>address: {bill.address}</p>
                <p>hospital Name: {bill.hospitalName}</p>
                <p>date Of Service: {bill.dateOfService}</p>
                <p>bill Amount: {bill.BillAmount}</p>
                </li>
            ))}
              </ul> */}
            <p>.</p>
            {/* <button className="custom-button" onClick={handleAddNewBill}>
            Add New Bill
              </button> */}
              
          </div>
    </div>
  );
}

export default HomePage;

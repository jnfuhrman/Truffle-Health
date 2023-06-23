

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import logo from '../assets/logo.png';
import './billForm.css';

function BillForm({ onSubmit }) {
  const [patientName, setPatientName] = useState('');
  const [address, setAddress] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [dateOfService, setDateOfService] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [billPicture, setBillPicture] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!patientName || !address || !hospitalName || !dateOfService || !billAmount) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    // Create a new bill object
    const newBill = {
      patientName,
      address,
      hospitalName,
      dateOfService,
      billAmount,
      billPicture,
    };
    // Call the onSubmit function passed from the parent component
    onSubmit(newBill);
    // Navigate to the SummaryPage
    navigate('/summary', { bill: newBill }); // Pass the newBill object as a parameter
  };

  return (
    <div>
      <nav>
        <ul className="bill-nav">
          <Link to="/">
            <img src={logo} alt="Logo" className="lognav-logo" />
          </Link>
        </ul>
      </nav>
      <div className="bill-page" id="bill-page">
        <div>
          <h1 className="title-h" id="title-h">
            Medical Form
          </h1>
          <div className="content" id="content">
            <p className='explanation' id='explanation' > Welcome to my Medical Bill Application!
              This application is designed to provide a convenient way for you to manage your medical 
              bills. By using this application, you can easily enter and organize your medical information. 
              This page allows you to input essential details such as the patient's name, address, 
              hospital name, date of service, and the bill amount. This enables you to keep track of your 
              medical expenses accurately. With this application, you can maintain a comprehensive record of 
              your medical bills, making it easier to monitor and manage your healthcare costs. Stay organized 
              and gain control over your medical expenses by utilizing this user-friendly Medical Bill
              Application!
            </p>
             <form className='format-bill' id='format-bill' onSubmit={handleSubmit}>
             <label className='patient-label'>
               Patient Name:
             </label>
             <input id='pat-input' className='pat-input' placeholder='John Doe' type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} />

             <label className='address-label'>
               Address:
             </label>
             <input className='add-input' placeholder='123 Main Street, Anytown, USA' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

             <label className='hospital-label'>
               Hospital Name:
             </label>
             <input className='hos-input' type="text" placeholder='General Hospital' value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />


             <label className='date-label'>
               Date of Service:
             </label>
             <input className='dat-input' type="text" placeholder='mm/dd/yyyy' value={dateOfService} onChange={(e) => setDateOfService(e.target.value)} />


             <label className='bill-label'>
               Bill Amount:
              </label>
             <input className='bil-input' placeholder='Enter Bill Amount' type="text" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />
               <label className="picture-label">Picture of the Bill:</label>
              <input 
                className="pic-input"
                type="file"
                onChange={(e) => setBillPicture(e.target.files[0])}
              />
              <button id='but' className='but' type="submit">Submit</button>
               {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillForm;

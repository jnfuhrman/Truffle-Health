
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './summary.css';

function SummaryPage({ bill }) {
  const [savedBill, setSavedBill] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  const handleSaveButtonClick = () => {
    setSavedBill(bill);
    setIsSaved(true);
    console.log('Save button clicked');
    console.log('Bill saved:', bill);
  };

  const handleEditButtonClick = () => {
    navigate('/bill-form');
  };

  const handleAddAnotherButtonClick = () => {
    navigate('/bill-form');
  };

  return (
    <div>
      <nav className="nav-sum" id="nav-sum">
        <ul>
          <Link to="/">
            <img src={logo} alt="Logo" className="lognav-logo" />
          </Link>
        </ul>
      </nav>
      <div className="sum-page">
        <h2 className="title">Summary Page</h2>
        <div className="form-sum">
          {!isSaved && (
            <>
              <p> Patient Name: {bill.patientName} </p>
              <p> Address: {bill.address} </p>
              <p> Hospital Name: {bill.hospitalName}</p>
              <p> Date of Service: {bill.dateOfService}</p>
              <p> Bill Amount: {bill.billAmount}</p>
              {bill.billPicture && <p>Bill Picture: {bill.billPicture.name}</p>}
            </>
          )}
          {savedBill ? (
            <div>
              <h3>Saved Bill</h3>
              <p> Patient Name: {savedBill.patientName} </p>
              <p> Address: {savedBill.address} </p>
              <p> Hospital Name: {savedBill.hospitalName}</p>
              <p> Date of Service: {savedBill.dateOfService}</p>
              <p> Bill Amount: {savedBill.billAmount}</p>
              {bill.billPicture && <p>Bill Picture: {bill.billPicture.name}</p>}
              <button  className='add' id='add' onClick={handleAddAnotherButtonClick}>Add Another Bill</button>
            </div>
          ) : (
            !isSaved && (
              <div>
                <button className="edit" id="edit" onClick={handleEditButtonClick}>
                  Edit
                </button>
                <button className="save" id="save" onClick={handleSaveButtonClick}>
                  Save
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;

// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
// import logo from '../assets/logo.png';
// import './summary.css';

// function SummaryPage() {
//   const [bills, setBills] = useState([]);
//   const [currentBill, setCurrentBill] = useState({});
//   const location = useLocation(); // Get the current location
//   const savedBill = location.state?.bill; // Get the saved bill from the location state

//   const handleSaveButtonClick = () => {
//     setBills([...bills, currentBill]);
//     setCurrentBill({});
//     console.log('Save button clicked');
//     console.log('Bill saved:', currentBill);
//   };

//   const handleEditButtonClick = () => {
//     // Redirect to the BillForm page for editing
//     window.history.back();
//   };

//   const handleAddAnotherButtonClick = () => {
//     // Redirect to the BillForm page for adding another bill
//     window.history.back();
//   };

//   return (
//     <div>
//       <nav className="nav-sum" id="nav-sum">
//         <ul>
//           <Link to="/">
//             <img src={logo} alt="Logo" className="lognav-logo" />
//           </Link>
//         </ul>
//       </nav>
//       <div className="sum-page">
//         <h2 className="title">Summary Page</h2>
//         <div className="form-sum">
//           {!savedBill && !location.state?.bill && (
//             <>
//               <p>No bill information entered yet.</p>
//               <button className="edit" id="edit" onClick={handleEditButtonClick}>
//                 Add a Bill
//               </button>
//             </>
//           )}
//           {(savedBill || location.state?.bill) && (
//             <>
//               <h3>Current Bill</h3>
//               <p> Patient Name: {savedBill?.patientName || currentBill.patientName} </p>
//               <p> Address: {savedBill?.address || currentBill.address} </p>
//               <p> Hospital Name: {savedBill?.hospitalName || currentBill.hospitalName}</p>
//               <p> Date of Service: {savedBill?.dateOfService || currentBill.dateOfService}</p>
//               <p> Bill Amount: {savedBill?.billAmount || currentBill.billAmount}</p>
//               <button className="save" id="save" onClick={handleSaveButtonClick}>
//                 Save
//               </button>
//               <button className="edit" id="edit" onClick={handleEditButtonClick}>
//                 Edit
//               </button>
//             </>
//           )}
//           {bills.length > 0 && (
//             <>
//               <h3>Saved Bills</h3>
//               {bills.map((bill, index) => (
//                 <div key={index}>
//                   <p> Patient Name: {bill.patientName} </p>
//                   <p> Address: {bill.address} </p>
//                   <p> Hospital Name: {bill.hospitalName}</p>
//                   <p> Date of Service: {bill.dateOfService}</p>
//                   <p> Bill Amount: {bill.billAmount}</p>
//                 </div>
//               ))}
//             </>
//           )}
//           {bills.length > 0 && (
//             <button onClick={handleAddAnotherButtonClick}>Add Another Bill</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SummaryPage;

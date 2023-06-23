
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillForm from './components/BillForm';
import SummaryPage from './components/SummaryPage';
import HomePage from './components/HomePage';
import { Login } from './Login';
import { Register } from './Register';



function App() {

  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const [bills, setBills] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBill, setCurrentBill] = useState(null);

  const handleAddNewBill = () => {
    setCurrentBill(null);
    setCurrentPage('form');
  };

  const handleEditBill = () => {
    setCurrentPage('form');
  };

  const handleFormSubmit = (newBill) => {
    // Add the new bill to the bills array
    setBills([...bills, newBill]);
    setCurrentBill(newBill);
    setCurrentPage('summary');
  };

  let pageContent;
  if (currentPage === 'home') {
    pageContent = (
      <HomePage bills={bills} onAddNewBill={handleAddNewBill} />
    );
  } else if (currentPage === 'form') {
    pageContent = (
      <BillForm onSubmit={handleFormSubmit} />
    );
  } else if (currentPage === 'summary') {
    pageContent = (
      <SummaryPage bill={currentBill} onEdit={handleEditBill} />
    );
  }

  //   return (
  //     <Router>
  //       <Routes>
  //         <Route
  //           path="/"
  //           element={<HomePage bills={bills} onAddNewBill={handleAddNewBill} />}
  //         />
  //         <Route
  //           path="/bill-form"
  //           element={<BillForm onSubmit={handleFormSubmit} />}
  //         />
  //         <Route
  //           path="/summary"
  //           element={<SummaryPage bill={currentBill} />}
  //         />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage bills={bills} onAddNewBill={handleAddNewBill} />}
        />
        <Route
          path="/bill-form"
          element={<BillForm onSubmit={handleFormSubmit} />}
        />
        <Route
          path="/summary"
          element={<SummaryPage bill={currentBill} />}
        />
        <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
        <Route path="/register" element={<Register onFormSwitch={toggleForm}/>} />
      </Routes>
    </Router>
  );
}

export default App;

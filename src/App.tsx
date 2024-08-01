import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import Transactions from './pages/history/Transactions';
// import AddIncome from './pages/income/AddIncome';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/history' element={<Transactions/>} />
        
        {/* <Route path='/income' element={<AddIncome/>} /> */}
      </Routes>
    </div>
  );
}

export default App;

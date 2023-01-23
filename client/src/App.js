import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';

import Login from './components/login/Login';
import SignUp from './components/Signup/SignUp';
import Home from './components/Home/Home';
function App() {
  return (
    <div className='App'>
      
      <Header/>
     <Routes>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/signup' element={<SignUp/>} ></Route>
     </Routes>
    
      
      
    </div>
  );
}

export default App;

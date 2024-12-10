import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter

import { Disco } from './components/Disco';
import { Black } from './components/Black';
import { White } from './components/White';
import { Color } from './components/Color';
import { Shop } from './components/Shop';
import { FormValidation } from './components/FormValidation';
import { Confirm } from './components/Confirm';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/disco" />} />
          <Route path='/black' element={<Black />} />
          <Route path='/white' element={<White />} />
          <Route path='/color' element={<Color />} />
          <Route path='/disco' element={<Disco />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/form-validation' element={<FormValidation />} />
          <Route path='/confirm' element={<Confirm />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;

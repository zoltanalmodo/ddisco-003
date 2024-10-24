import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Make sure to import Navigate

import { Disco } from './components/Disco';
import { Black } from './components/Black';
import { White } from './components/White';
import { Color } from './components/Color';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          {/* Redirect from "/" to "/Color" */}
          <Route path="/" element={<Navigate to="/disco" />} />
          <Route path='/black' element={<Black />} />
          <Route path='/white' element={<White />} />
          <Route path='/color' element={<Color />} />
          <Route path='/disco' element={<Disco />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;

import React from 'react';
import './App.css';

import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter

import { Disco } from './components/Disco';
import { Black } from './components/Black';
import { White } from './components/White';
import { Color } from './components/Color';
import { Buy } from './components/Buy';

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
          <Route path='/buy' element={<Buy />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;

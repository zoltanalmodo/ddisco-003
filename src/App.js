import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Disco } from './components/Disco';
import { Black } from './components/Black';
import { Start } from './components/Start';
import { White } from './components/White';
import { Color } from './components/Color';
import { Pastel } from './components/Pastel';

import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>

      <Router>
          <Route path='/' exact component={Start} />
          <Route path='/disco' component={Disco} />
          <Route path='/black' component={Black} />
          <Route path='/white' component={White} />
          <Route path='/color' component={Color} />
          <Route path='/pastel' component={Pastel} />
      </Router>

    </GlobalProvider>

  );
}

export default App;

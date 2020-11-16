import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Disco } from './components/Disco';
import { Black } from './components/Black';
import Navigation from './components/Navigation';
import { White } from './components/White';
import { GlobalProvider } from './context/GlobalState';
import { Color } from './components/Color';



function App() {
  return (
    <GlobalProvider>
      
        <Router>
          <Route path='/' exact component={Navigation} />
          <Route path='/disco' component={Disco} />
          <Route path='/black' component={Black} />
          <Route path='/white' component={White} />
          <Route path='/color' component={Color} />
        </Router>
      
    </GlobalProvider>

  );
}

export default App;

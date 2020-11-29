import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Disco } from './components/Disco';
import { Black } from './components/Black';
import { Start } from './components/Start';
import { Orientation } from './components/Orientation';
import { White } from './components/White';
import { GlobalProvider } from './context/GlobalState';
import { Color } from './components/Color';

import DeviceOrientation, { Orientation } from 'react-screen-orientation'

function App() {
  return (
    <GlobalProvider>

      <DeviceOrientation lockOrientation={'portrait'}>
        <Orientation orientation='portrait' alwaysRender={false}>

          <Router>
            <Route path='/' exact component={Start} />
            <Route path='/disco' component={Disco} />
            <Route path='/black' component={Black} />
            <Route path='/white' component={White} />
            <Route path='/color' component={Color} />
          </Router>

        </Orientation>
        <Orientation orientation='landscape' alwaysRender={false}>
          <Orientation />
        </Orientation>
      </DeviceOrientation>

    </GlobalProvider>

  );
}

export default App;

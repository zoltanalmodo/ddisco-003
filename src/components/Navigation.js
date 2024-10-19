import React, { useContext } from 'react'
import '../App.css';

import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState'



function Navigation() {

  const {

    globalState,
    setActiveButtonBlack,
    setActiveButtonWhite,
    setActiveButtonColor,
    setActiveButtonDisco,
    setIsPastel,
  
  } = useContext(GlobalContext);

  const activeBackgroundBlack = () => {
    return(
      globalState.activeButton === 'black' ? 'pink' : ''
    )
  }
  const activeBackgroundWhite = () => {
    return(
      globalState.activeButton === 'white' ? 'pink' : ''
    )
  }
  const activeBackgroundColor = () => {
    return(
      globalState.activeButton === 'color' ? 'pink' : ''
    )
  }
  const activeBackgroundDisco = () => {
    return(
      globalState.activeButton === 'disco' ? 'pink' : ''
    )
  }

  const activeBackgroundPastel = () => {
    return globalState.isPastel === 'true' ? 'pink' : 'yellow';
  };

  return (
    
    <div className='navigation_position'>

      <nav>
          <div className='nav_links'>
              <Link to='/black'>
                <div className='nav_links_li'>
                  <button
                    onClick={setActiveButtonBlack}
                    style={{ backgroundColor: (`${activeBackgroundBlack()}`) }}>Black
                  </button>
                </div>
              </Link>
              <Link to='/white'>
                <div className='nav_links_li'>
                  <button
                    onClick={setActiveButtonWhite}
                    style={{ backgroundColor: (`${activeBackgroundWhite()}`) }}>White
                  </button>
                </div>
              </Link>
              <Link to='/color'>
                <div className='nav_links_li'>
                  <button
                    onClick={setActiveButtonColor}
                    style={{ backgroundColor: (`${activeBackgroundColor()}`) }}>Color
                  </button>
                </div>
              </Link>
              <Link to='/disco'>
                <div className='nav_links_li'>
                  <button
                    onClick={setActiveButtonDisco}
                    style={{ backgroundColor: (`${activeBackgroundDisco()}`) }}>Disco
                  </button>
                </div>
              </Link>
              <Link to='/pastel'>
                <div className='nav_links_li'>
                  <button
                    onClick={setIsPastel}
                    style={{ backgroundColor: activeBackgroundPastel() }}>Pastel
                  </button>
                </div>
              </Link>
          </div>
      </nav>

    </div>

  );
}

export default Navigation;
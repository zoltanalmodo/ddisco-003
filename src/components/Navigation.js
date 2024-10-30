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
    setActiveButtonPosition,
    // setActiveButtonBuy,
    setIsPastel,
  
  } = useContext(GlobalContext);

  const activeBackgroundBlack = () => {
    return(
      globalState.activeButton === 'black' ? 'white' : ''
    )
  }
  const activeColorBlack = () => {
    return(
      globalState.activeButton === 'black' ? 'black' : ''
    )
  }
  const activeBackgroundWhite = () => {
    return(
      globalState.activeButton === 'white' ? 'white' : ''
    )
  }
  const activeColorWhite = () => {
    return(
      globalState.activeButton === 'white' ? 'black' : ''
    )
  }
  const activeBackgroundColor = () => {
    return(
      globalState.activeButton === 'color' ? 'white' : ''
    )
  }
  const activeColorColor = () => {
    return(
      globalState.activeButton === 'color' ? 'black' : ''
    )
  }
  const activeBackgroundDisco = () => {
    return(
      globalState.activeButton === 'disco' ? 'white' : ''
    )
  }
  const activeColorDisco = () => {
    return(
      globalState.activeButton === 'disco' ? 'black' : ''
    )
  }
  const activeBackgroundPosition = () => {
    return(
      globalState.activeButton === 'position' ? 'white' : ''
    )
  }
  const activeColorPosition = () => {
    return(
      globalState.activeButton === 'position' ? 'black' : ''
    )
  }
  const activeBackgroundPastel = () => {
    return globalState.isPastel === 'true' ? 'grey' : 'black';
  }
  const activeColorPastel = () => {
    return(
      globalState.isPastel === 'true' ? 'white' : 'white'
    )
  }

  return (
    
    <div className="navigation-wrapper">
      <div className='navigation_position'>

        <nav>
            <div className='nav_links'>
                <Link to='/black'>
                  <div className='nav_links_li'>
                    <button
                      onClick={setActiveButtonBlack}
                      style={{
                        backgroundColor: activeBackgroundBlack(),
                        color: activeColorBlack()
                      }}>black
                    </button>
                  </div>
                </Link>
                <Link to='/white'>
                  <div className='nav_links_li'>
                    <button
                      onClick={setActiveButtonWhite}
                      style={{
                        backgroundColor: activeBackgroundWhite(),
                        color: activeColorWhite()
                      }}>white
                    </button>
                  </div>
                </Link>
                <Link to='/color'>
                  <div className='nav_links_li'>
                    <button
                      onClick={setActiveButtonColor}
                      style={{
                        backgroundColor: activeBackgroundColor(),
                        color: activeColorColor()
                      }}>color
                    </button>
                  </div>
                </Link>
                <Link to='/disco'>
                  <div className='nav_links_li'>
                    <button
                      onClick={setActiveButtonDisco}
                      style={{
                        backgroundColor: activeBackgroundDisco(),
                        color: activeColorDisco()
                      }}>disco
                    </button>
                  </div>
                </Link>
                <Link to={`/${globalState.activeButton}`}>
                  <div className='nav_links_li'>
                    <button
                      onClick={setIsPastel}
                      style={{
                        backgroundColor: activeBackgroundPastel(),
                        color: activeColorPastel()
                      }}>pastel
                    </button>
                  </div>
                </Link>
                <Link to='/position'>
                  <div className='nav_links_li'>
                    <button
                      onClick={setActiveButtonPosition}
                      style={{
                        backgroundColor: activeBackgroundPosition(),
                        color: activeColorPosition()
                      }}>position
                    </button>
                  </div>
                </Link>
                {/* <Link to={`/buy`}>
                  <div className='nav_links_li'>
                  <button
                      style={{
                        backgroundColor: 'black',
                        color: 'white'
                      }}>buy
                    </button>
                  </div>
                </Link> */}
            </div>
        </nav>

      </div>
      
    </div>

  );
}

export default Navigation;
import React, { useContext, useRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Navigation from './Navigation';
import { GlobalContext } from '../context/GlobalState'

import ddisco_c_001_1 from '../images/c/ddisco_c_001_1.jpg';
import ddisco_c_001_2 from '../images/c/ddisco_c_001_2.jpg';
import ddisco_c_001_3 from '../images/c/ddisco_c_001_3.jpg';
import ddisco_c_002_1 from '../images/c/ddisco_c_002_1.jpg';
import ddisco_c_002_2 from '../images/c/ddisco_c_002_2.jpg';
import ddisco_c_002_3 from '../images/c/ddisco_c_002_3.jpg';
import ddisco_c_003_1 from '../images/c/ddisco_c_003_1.jpg';
import ddisco_c_003_2 from '../images/c/ddisco_c_003_2.jpg';
import ddisco_c_003_3 from '../images/c/ddisco_c_003_3.jpg';
import ddisco_c_004_1 from '../images/c/ddisco_c_004_1.jpg';
import ddisco_c_004_2 from '../images/c/ddisco_c_004_2.jpg';
import ddisco_c_004_3 from '../images/c/ddisco_c_004_3.jpg';
import ddisco_c_005_1 from '../images/c/ddisco_c_005_1.jpg';
import ddisco_c_005_2 from '../images/c/ddisco_c_005_2.jpg';
import ddisco_c_005_3 from '../images/c/ddisco_c_005_3.jpg';
import ddisco_c_006_1 from '../images/c/ddisco_c_006_1.jpg';
import ddisco_c_006_2 from '../images/c/ddisco_c_006_2.jpg';
import ddisco_c_006_3 from '../images/c/ddisco_c_006_3.jpg';
import ddisco_c_007_1 from '../images/c/ddisco_c_007_1.jpg';
import ddisco_c_007_2 from '../images/c/ddisco_c_007_2.jpg';
import ddisco_c_007_3 from '../images/c/ddisco_c_007_3.jpg';
import ddisco_c_008_1 from '../images/c/ddisco_c_008_1.jpg';
import ddisco_c_008_2 from '../images/c/ddisco_c_008_2.jpg';
import ddisco_c_008_3 from '../images/c/ddisco_c_008_3.jpg';
import ddisco_c_009_1 from '../images/c/ddisco_c_009_1.jpg';
import ddisco_c_009_2 from '../images/c/ddisco_c_009_2.jpg';
import ddisco_c_009_3 from '../images/c/ddisco_c_009_3.jpg';
import ddisco_c_010_1 from '../images/c/ddisco_c_010_1.jpg';
import ddisco_c_010_2 from '../images/c/ddisco_c_010_2.jpg';
import ddisco_c_010_3 from '../images/c/ddisco_c_010_3.jpg';
import ddisco_c_011_1 from '../images/c/ddisco_c_011_1.jpg';
import ddisco_c_011_2 from '../images/c/ddisco_c_011_2.jpg';
import ddisco_c_011_3 from '../images/c/ddisco_c_011_3.jpg';
import ddisco_c_012_1 from '../images/c/ddisco_c_012_1.jpg';
import ddisco_c_012_2 from '../images/c/ddisco_c_012_2.jpg';
import ddisco_c_012_3 from '../images/c/ddisco_c_012_3.jpg';

let galleryItems_001 = [
  <img key='c_001_1' alt='c_001_1' index={0} src={ddisco_c_001_1} className="CarouselSize" draggable={false} />,
  <img key='c_002_1' alt='c_002_1' index={1} src={ddisco_c_002_1} className="CarouselSize" draggable={false} />,
  <img key='c_003_1' alt='c_003_1' index={2} src={ddisco_c_003_1} className="CarouselSize" draggable={false} />,
  <img key='c_004_1' alt='c_004_1' index={3} src={ddisco_c_004_1} className="CarouselSize" draggable={false} />,
  <img key='c_005_1' alt='c_005_1' index={4} src={ddisco_c_005_1} className="CarouselSize" draggable={false} />,
  <img key='c_006_1' alt='c_006_1' index={5} src={ddisco_c_006_1} className="CarouselSize" draggable={false} />,
  <img key='c_007_1' alt='c_007_1' index={6} src={ddisco_c_007_1} className="CarouselSize" draggable={false} />,
  <img key='c_008_1' alt='c_008_1' index={7} src={ddisco_c_008_1} className="CarouselSize" draggable={false} />,
  <img key='c_009_1' alt='c_009_1' index={8} src={ddisco_c_009_1} className="CarouselSize" draggable={false} />,
  <img key='c_010_1' alt='c_010_1' index={9} src={ddisco_c_010_1} className="CarouselSize" draggable={false} />,
  <img key='c_011_1' alt='c_011_1' index={10} src={ddisco_c_011_1} className="CarouselSize" draggable={false} />,
  <img key='c_012_1' alt='c_012_1' index={11} src={ddisco_c_012_1} className="CarouselSize" draggable={false} />
]

let galleryItems_002 = [
  <img key='c_001_2' alt='c_001_2' index={0} src={ddisco_c_001_2} className="CarouselSize" draggable={false} />,
  <img key='c_002_2' alt='c_002_2' index={1} src={ddisco_c_002_2} className="CarouselSize" draggable={false} />,
  <img key='c_003_2' alt='c_003_2' index={2} src={ddisco_c_003_2} className="CarouselSize" draggable={false} />,
  <img key='c_004_2' alt='c_004_2' index={3} src={ddisco_c_004_2} className="CarouselSize" draggable={false} />,
  <img key='c_005_2' alt='c_005_2' index={4} src={ddisco_c_005_2} className="CarouselSize" draggable={false} />,
  <img key='c_006_2' alt='c_006_2' index={5} src={ddisco_c_006_2} className="CarouselSize" draggable={false} />,
  <img key='c_007_2' alt='c_007_2' index={6} src={ddisco_c_007_2} className="CarouselSize" draggable={false} />,
  <img key='c_008_2' alt='c_008_2' index={7} src={ddisco_c_008_2} className="CarouselSize" draggable={false} />,
  <img key='c_009_2' alt='c_009_2' index={8} src={ddisco_c_009_2} className="CarouselSize" draggable={false} />,
  <img key='c_010_2' alt='c_010_2' index={9} src={ddisco_c_010_2} className="CarouselSize" draggable={false} />,
  <img key='c_011_2' alt='c_011_2' index={10} src={ddisco_c_011_2} className="CarouselSize" draggable={false} />,
  <img key='c_012_2' alt='c_012_2' index={11} src={ddisco_c_012_2} className="CarouselSize" draggable={false} />
];

let galleryItems_003 = [
  <img key='c_001_3' alt='c_001_3' index={0} src={ddisco_c_001_3} className="CarouselSize" draggable={false} />,
  <img key='c_002_3' alt='c_002_3' index={1} src={ddisco_c_002_3} className="CarouselSize" draggable={false} />,
  <img key='c_003_3' alt='c_003_3' index={2} src={ddisco_c_003_3} className="CarouselSize" draggable={false} />,
  <img key='c_004_3' alt='c_004_3' index={3} src={ddisco_c_004_3} className="CarouselSize" draggable={false} />,
  <img key='c_005_3' alt='c_005_3' index={4} src={ddisco_c_005_3} className="CarouselSize" draggable={false} />,
  <img key='c_006_3' alt='c_006_3' index={5} src={ddisco_c_006_3} className="CarouselSize" draggable={false} />,
  <img key='c_007_3' alt='c_007_3' index={6} src={ddisco_c_007_3} className="CarouselSize" draggable={false} />,
  <img key='c_008_3' alt='c_008_3' index={7} src={ddisco_c_008_3} className="CarouselSize" draggable={false} />,
  <img key='c_009_3' alt='c_009_3' index={8} src={ddisco_c_009_3} className="CarouselSize" draggable={false} />,
  <img key='c_010_3' alt='c_010_3' index={9} src={ddisco_c_010_3} className="CarouselSize" draggable={false} />,
  <img key='c_011_3' alt='c_011_3' index={10} src={ddisco_c_011_3} className="CarouselSize" draggable={false} />,
  <img key='c_012_3' alt='c_012_3' index={11} src={ddisco_c_012_3} className="CarouselSize" draggable={false} />
]

export const Disco = () => {

  const {

    globalState,
    updateIndex_001,
    updateIndex_002,
    updateIndex_003,
    disableAutoplay_001,
    disableAutoplay_002,
    disableAutoplay_003,

  } = useContext(GlobalContext);

  const carouselRef_001 = useRef(null);
  const carouselRef_002 = useRef(null);
  const carouselRef_003 = useRef(null);

  // Disco page autoplay is working OK - runs continuously until user interacts
  // Autoplay is enabled on page load via initial state (autoplay_001, autoplay_002, autoplay_003 = true)
  // Each carousel stops its own autoplay when user interacts with it

  // Using slidePrev() and slideNext() instead of slideTo() for smooth loop transitions
  // This provides seamless wrap-around (012 → 001) without flickering
  const handlePrev_001 = () => {
    if (carouselRef_001.current) {
      carouselRef_001.current.slidePrev();
      disableAutoplay_001(); // Stop autoplay for this carousel when user interacts
    }
  };

  const handleNext_001 = () => {
    if (carouselRef_001.current) {
      carouselRef_001.current.slideNext();
      disableAutoplay_001(); // Stop autoplay for this carousel when user interacts
    }
  };

  const handlePrev_002 = () => {
    if (carouselRef_002.current) {
      carouselRef_002.current.slidePrev();
      disableAutoplay_002(); // Stop autoplay for this carousel when user interacts
    }
  };

  const handleNext_002 = () => {
    if (carouselRef_002.current) {
      carouselRef_002.current.slideNext();
      disableAutoplay_002(); // Stop autoplay for this carousel when user interacts
    }
  };

  const handlePrev_003 = () => {
    if (carouselRef_003.current) {
      carouselRef_003.current.slidePrev();
      disableAutoplay_003(); // Stop autoplay for this carousel when user interacts
    }
  };

  const handleNext_003 = () => {
    if (carouselRef_003.current) {
      carouselRef_003.current.slideNext();
      disableAutoplay_003(); // Stop autoplay for this carousel when user interacts
    }
  };

  

  return (
    
    <div className='body_white'>
       
      <Navigation />
     
      <div className='carousel_white'>

        <div style={{
            filter: (globalState.isPastel === true ? globalState.pastelValue : globalState.brightValue),
        }}>

          <div className="carousel-container">

            <div className="overlap-container">
              <div className="box-white-left"/>
              <div className="box-transparent-middle"/>
              <div className="box-white-right"/>
            </div>
            
{/* before alice carousel update */}

            <div className="frame-overlay-dark-grey"></div> {/* Transparent overlay with a frame */}

              <div className="carousel-with-nav">
                <button 
                  className="carousel-nav-button carousel-nav-left"
                  onClick={handlePrev_001}
                  aria-label="Previous image"
                >
                  <span className="carousel-nav-arrow">‹</span>
                </button>
                <div style={{ filter: (`hue-rotate(${globalState.degree_001}deg)`) }}>
                  <AliceCarousel
                    ref={carouselRef_001}
                    autoPlay={globalState.autoplay_001}
                    autoPlayStrategy={'action'}
                    autoPlayInterval={Math.floor(Math.random() * (3500 - 2500 + 1)) + 2500}
                    autoPlayDirection={'rtl'}
                    disableAutoPlayOnAction={true}
                    infinite={true}
                    mouseTrackingEnabled={true}
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    swipeDisabled={false}
                    touchTrackingEnabled={true}
                    swipeDelta={10}
                    preventEventOnTouchMove={true}
                    items={galleryItems_001}
                    startIndex={globalState.currentIndex_001}
                    onSlideChanged={ (e) => updateIndex_001( e.item ) }
                    disableDotsControls={true}
                    disableButtonsControls={true}
                  />
                </div>
                <button 
                  className="carousel-nav-button carousel-nav-right"
                  onClick={handleNext_001}
                  aria-label="Next image"
                >
                  <span className="carousel-nav-arrow">›</span>
                </button>
              </div>

              <div className="carousel-with-nav">
                <button 
                  className="carousel-nav-button carousel-nav-left"
                  onClick={handlePrev_002}
                  aria-label="Previous image"
                >
                  <span className="carousel-nav-arrow">‹</span>
                </button>
                <div style={{ filter: (`hue-rotate(${globalState.degree_002}deg)`) }}>
                  <AliceCarousel
                    ref={carouselRef_002}
                    autoPlay={globalState.autoplay_002}
                    autoPlayStrategy={'action'}
                    autoPlayInterval={Math.floor(Math.random() * (3500 - 2500 + 1)) + 2500}
                    autoPlayDirection={'ltr'}
                    disableAutoPlayOnAction={true}
                    infinite={true}
                    mouseTrackingEnabled={true}
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    swipeDisabled={false}
                    touchTrackingEnabled={true}
                    swipeDelta={10}
                    preventEventOnTouchMove={true}
                    items={galleryItems_002}
                    startIndex={globalState.currentIndex_002}
                    onSlideChanged={ (e) => updateIndex_002( e.item ) }
                    disableDotsControls={true}
                    disableButtonsControls={true}
                  />
                </div>
                <button 
                  className="carousel-nav-button carousel-nav-right"
                  onClick={handleNext_002}
                  aria-label="Next image"
                >
                  <span className="carousel-nav-arrow">›</span>
                </button>
              </div>

              <div className="carousel-with-nav">
                <button 
                  className="carousel-nav-button carousel-nav-left"
                  onClick={handlePrev_003}
                  aria-label="Previous image"
                >
                  <span className="carousel-nav-arrow">‹</span>
                </button>
                <div style={{ filter: (`hue-rotate(${globalState.degree_003}deg)`) }}>
                  <AliceCarousel
                    ref={carouselRef_003}
                    autoPlay={globalState.autoplay_003}
                    autoPlayStrategy={'action'}
                    autoPlayInterval={Math.floor(Math.random() * (3500 - 2500 + 1)) + 2500}
                    autoPlayDirection={'rtl'}
                    disableAutoPlayOnAction={true}
                    infinite={true}
                    mouseTrackingEnabled={true}
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    swipeDisabled={false}
                    touchTrackingEnabled={true}
                    swipeDelta={10}
                    preventEventOnTouchMove={true}
                    items={galleryItems_003}
                    startIndex={globalState.currentIndex_003}
                    onSlideChanged={ (e) => updateIndex_003( e.item ) }
                    disableDotsControls={true}
                    disableButtonsControls={true}
                  />
                </div>
                <button 
                  className="carousel-nav-button carousel-nav-right"
                  onClick={handleNext_003}
                  aria-label="Next image"
                >
                  <span className="carousel-nav-arrow">›</span>
                </button>
              </div>

          </div>

        </div>

      </div>
      
    </div>
  )
}

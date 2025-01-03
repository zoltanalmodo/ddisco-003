import React, { useContext } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Navigation from './Navigation';

import { GlobalContext } from '../context/GlobalState'

import ddisco_w_001_1 from '../images/w/ddisco_w_001_1.jpg';
import ddisco_w_001_2 from '../images/w/ddisco_w_001_2.jpg';
import ddisco_w_001_3 from '../images/w/ddisco_w_001_3.jpg';
import ddisco_w_002_1 from '../images/w/ddisco_w_002_1.jpg';
import ddisco_w_002_2 from '../images/w/ddisco_w_002_2.jpg';
import ddisco_w_002_3 from '../images/w/ddisco_w_002_3.jpg';
import ddisco_w_003_1 from '../images/w/ddisco_w_003_1.jpg';
import ddisco_w_003_2 from '../images/w/ddisco_w_003_2.jpg';
import ddisco_w_003_3 from '../images/w/ddisco_w_003_3.jpg';
import ddisco_w_004_1 from '../images/w/ddisco_w_004_1.jpg';
import ddisco_w_004_2 from '../images/w/ddisco_w_004_2.jpg';
import ddisco_w_004_3 from '../images/w/ddisco_w_004_3.jpg';
import ddisco_w_005_1 from '../images/w/ddisco_w_005_1.jpg';
import ddisco_w_005_2 from '../images/w/ddisco_w_005_2.jpg';
import ddisco_w_005_3 from '../images/w/ddisco_w_005_3.jpg';
import ddisco_w_006_1 from '../images/w/ddisco_w_006_1.jpg';
import ddisco_w_006_2 from '../images/w/ddisco_w_006_2.jpg';
import ddisco_w_006_3 from '../images/w/ddisco_w_006_3.jpg';
import ddisco_w_007_1 from '../images/w/ddisco_w_007_1.jpg';
import ddisco_w_007_2 from '../images/w/ddisco_w_007_2.jpg';
import ddisco_w_007_3 from '../images/w/ddisco_w_007_3.jpg';
import ddisco_w_008_1 from '../images/w/ddisco_w_008_1.jpg';
import ddisco_w_008_2 from '../images/w/ddisco_w_008_2.jpg';
import ddisco_w_008_3 from '../images/w/ddisco_w_008_3.jpg';
import ddisco_w_009_1 from '../images/w/ddisco_w_009_1.jpg';
import ddisco_w_009_2 from '../images/w/ddisco_w_009_2.jpg';
import ddisco_w_009_3 from '../images/w/ddisco_w_009_3.jpg';
import ddisco_w_010_1 from '../images/w/ddisco_w_010_1.jpg';
import ddisco_w_010_2 from '../images/w/ddisco_w_010_2.jpg';
import ddisco_w_010_3 from '../images/w/ddisco_w_010_3.jpg';
import ddisco_w_011_1 from '../images/w/ddisco_w_011_1.jpg';
import ddisco_w_011_2 from '../images/w/ddisco_w_011_2.jpg';
import ddisco_w_011_3 from '../images/w/ddisco_w_011_3.jpg';
import ddisco_w_012_1 from '../images/w/ddisco_w_012_1.jpg';
import ddisco_w_012_2 from '../images/w/ddisco_w_012_2.jpg';
import ddisco_w_012_3 from '../images/w/ddisco_w_012_3.jpg';

let galleryItems_001 = [
  <img alt='w_001_1' src={ddisco_w_001_1} className="CarouselSize" />,
  <img alt='w_002_1' src={ddisco_w_002_1} className="CarouselSize" />,
  <img alt='w_003_1' src={ddisco_w_003_1} className="CarouselSize" />,
  <img alt='w_004_1' src={ddisco_w_004_1} className="CarouselSize" />,
  <img alt='w_005_1' src={ddisco_w_005_1} className="CarouselSize" />,
  <img alt='w_006_1' src={ddisco_w_006_1} className="CarouselSize" />,
  <img alt='w_007_1' src={ddisco_w_007_1} className="CarouselSize" />,
  <img alt='w_008_1' src={ddisco_w_008_1} className="CarouselSize" />,
  <img alt='w_009_1' src={ddisco_w_009_1} className="CarouselSize" />,
  <img alt='w_010_1' src={ddisco_w_010_1} className="CarouselSize" />,
  <img alt='w_011_1' src={ddisco_w_011_1} className="CarouselSize" />,
  <img alt='w_012_1' src={ddisco_w_012_1} className="CarouselSize" />
]

let galleryItems_002 = [
  <img alt='w_001_2' src={ddisco_w_001_2} className="CarouselSize" />,
  <img alt='w_002_2' src={ddisco_w_002_2} className="CarouselSize" />,
  <img alt='w_003_2' src={ddisco_w_003_2} className="CarouselSize" />,
  <img alt='w_004_2' src={ddisco_w_004_2} className="CarouselSize" />,
  <img alt='w_005_2' src={ddisco_w_005_2} className="CarouselSize" />,
  <img alt='w_006_2' src={ddisco_w_006_2} className="CarouselSize" />,
  <img alt='w_007_2' src={ddisco_w_007_2} className="CarouselSize" />,
  <img alt='w_008_2' src={ddisco_w_008_2} className="CarouselSize" />,
  <img alt='w_009_2' src={ddisco_w_009_2} className="CarouselSize" />,
  <img alt='w_010_2' src={ddisco_w_010_2} className="CarouselSize" />,
  <img alt='w_011_2' src={ddisco_w_011_2} className="CarouselSize" />,
  <img alt='w_012_2' src={ddisco_w_012_2} className="CarouselSize" />
]

let galleryItems_003 = [
  <img alt='w_001_3' src={ddisco_w_001_3} className="CarouselSize" />,
  <img alt='w_002_3' src={ddisco_w_002_3} className="CarouselSize" />,
  <img alt='w_003_3' src={ddisco_w_003_3} className="CarouselSize" />,
  <img alt='w_004_3' src={ddisco_w_004_3} className="CarouselSize" />,
  <img alt='w_005_3' src={ddisco_w_005_3} className="CarouselSize" />,
  <img alt='w_006_3' src={ddisco_w_006_3} className="CarouselSize" />,
  <img alt='w_007_3' src={ddisco_w_007_3} className="CarouselSize" />,
  <img alt='w_008_3' src={ddisco_w_008_3} className="CarouselSize" />,
  <img alt='w_009_3' src={ddisco_w_009_3} className="CarouselSize" />,
  <img alt='w_010_3' src={ddisco_w_010_3} className="CarouselSize" />,
  <img alt='w_011_3' src={ddisco_w_011_3} className="CarouselSize" />,
  <img alt='w_012_3' src={ddisco_w_012_3} className="CarouselSize" />
]

export const White = () => {

  const {
    globalState,
    updateIndex_001,
    updateIndex_002,
    updateIndex_003,
  } = useContext(GlobalContext);

  return (
    
    <div className='body_white'>
       
      <Navigation />
     
      <div className='carousel_white'>

        <div className="carousel-container">

          <div className="overlap-container">
            <div className="box-white-left"/>
            <div className="box-transparent-middle"/>
            <div className="box-white-right"/>
          </div>

          <div className="frame-overlay-dark-grey"></div> {/* Transparent overlay with a frame */}

            <AliceCarousel
              autoPlay={false}
              autoPlayStrategy={'action'}
              autoPlayInterval={5000}
              autoPlayDirection={'rtl'}
              disableAutoPlayOnAction={true}
              infinite={true}
              mouseTrackingEnabled={true}
              dotsDisabled={true}
              buttonsDisabled={true}
              swipeDisabled={false}
              touchTrackingEnabled={true}
              swipeDelta={0.1}
              preventEventOnTouchMove={true}
              items={galleryItems_001}
              startIndex={globalState.currentIndex_001}
              onSlideChanged={ (e) => updateIndex_001( e.item ) }
              slideToIndex={globalState.currentIndex_001}
            />

            <AliceCarousel
              autoPlay={false}
              autoPlayStrategy={'action'}
              autoPlayInterval={5000}
              autoPlayDirection={'ltr'}
              disableAutoPlayOnAction={true}
              infinite={true}
              mouseTrackingEnabled={true}
              dotsDisabled={true}
              buttonsDisabled={true}
              swipeDisabled={false}
              touchTrackingEnabled={true}
              swipeDelta={0.1}
              preventEventOnTouchMove={true}
              items={galleryItems_002}
              startIndex={globalState.currentIndex_002}
              onSlideChanged={ (e) => updateIndex_002( e.item ) }
              slideToIndex={globalState.currentIndex_002}
            />
            
            <AliceCarousel
              autoPlay={false}
              autoPlayStrategy={'action'}
              autoPlayInterval={5000}
              autoPlayDirection={'rtl'}
              disableAutoPlayOnAction={true}
              infinite={true}
              mouseTrackingEnabled={true}
              dotsDisabled={true}
              buttonsDisabled={true}
              swipeDisabled={false}
              touchTrackingEnabled={true}
              swipeDelta={0.1}
              preventEventOnTouchMove={true}
              items={galleryItems_003}
              startIndex={globalState.currentIndex_003}
              onSlideChanged={ (e) => updateIndex_003( e.item ) }
              slideToIndex={globalState.currentIndex_003}
            />

        </div>

      </div>

    </div>
  )
}

import React, { useContext } from 'react'
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
  <img alt='c_001_1' index={0} src={ddisco_c_001_1} className="CarouselSize" />,
  <img alt='c_002_1' index={1} src={ddisco_c_002_1} className="CarouselSize" />,
  <img alt='c_003_1' index={2} src={ddisco_c_003_1} className="CarouselSize" />,
  <img alt='c_004_1' index={3} src={ddisco_c_004_1} className="CarouselSize" />,
  <img alt='c_005_1' index={4} src={ddisco_c_005_1} className="CarouselSize" />,
  <img alt='c_006_1' index={5} src={ddisco_c_006_1} className="CarouselSize" />,
  <img alt='c_007_1' index={6} src={ddisco_c_007_1} className="CarouselSize" />,
  <img alt='c_008_1' index={7} src={ddisco_c_008_1} className="CarouselSize" />,
  <img alt='c_009_1' index={8} src={ddisco_c_009_1} className="CarouselSize" />,
  <img alt='c_010_1' index={9} src={ddisco_c_010_1} className="CarouselSize" />,
  <img alt='c_011_1' index={10} src={ddisco_c_011_1} className="CarouselSize" />,
  <img alt='c_012_1' index={11} src={ddisco_c_012_1} className="CarouselSize" />
]

let galleryItems_002 = [
  <img alt='c_001_2' index={0} src={ddisco_c_001_2} className="CarouselSize" />,
  <img alt='c_002_2' index={1} src={ddisco_c_002_2} className="CarouselSize" />,
  <img alt='c_003_2' index={2} src={ddisco_c_003_2} className="CarouselSize" />,
  <img alt='c_004_2' index={3} src={ddisco_c_004_2} className="CarouselSize" />,
  <img alt='c_005_2' index={4} src={ddisco_c_005_2} className="CarouselSize" />,
  <img alt='c_006_2' index={5} src={ddisco_c_006_2} className="CarouselSize" />,
  <img alt='c_007_2' index={6} src={ddisco_c_007_2} className="CarouselSize" />,
  <img alt='c_008_2' index={7} src={ddisco_c_008_2} className="CarouselSize" />,
  <img alt='c_009_2' index={8} src={ddisco_c_009_2} className="CarouselSize" />,
  <img alt='c_010_2' index={9} src={ddisco_c_010_2} className="CarouselSize" />,
  <img alt='c_011_2' index={10} src={ddisco_c_011_2} className="CarouselSize" />,
  <img alt='c_012_2' index={11} src={ddisco_c_012_2} className="CarouselSize" />
];

let galleryItems_003 = [
  <img alt='c_001_3' index={0} src={ddisco_c_001_3} className="CarouselSize" />,
  <img alt='c_002_3' index={1} src={ddisco_c_002_3} className="CarouselSize" />,
  <img alt='c_003_3' index={2} src={ddisco_c_003_3} className="CarouselSize" />,
  <img alt='c_004_3' index={3} src={ddisco_c_004_3} className="CarouselSize" />,
  <img alt='c_005_3' index={4} src={ddisco_c_005_3} className="CarouselSize" />,
  <img alt='c_006_3' index={5} src={ddisco_c_006_3} className="CarouselSize" />,
  <img alt='c_007_3' index={6} src={ddisco_c_007_3} className="CarouselSize" />,
  <img alt='c_008_3' index={7} src={ddisco_c_008_3} className="CarouselSize" />,
  <img alt='c_009_3' index={8} src={ddisco_c_009_3} className="CarouselSize" />,
  <img alt='c_010_3' index={9} src={ddisco_c_010_3} className="CarouselSize" />,
  <img alt='c_011_3' index={10} src={ddisco_c_011_3} className="CarouselSize" />,
  <img alt='c_012_3' index={11} src={ddisco_c_012_3} className="CarouselSize" />
]

export const Disco = () => {

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

        <div style={{
            filter: (globalState.isPastel === 'true' ? 'brightness(105%) saturate(70%)' : 'brightness(100%) saturate(100%)'),
        }}>

          <div className="carousel-container">

            <div className="overlap-container">
              <div className="box-white-left"/>
              <div className="box-transparent-middle"/>
              <div className="box-white-right"/>
            </div>

            <div className="frame-overlay-dark-grey"></div> {/* Transparent overlay with a frame */}

              <div style={{ filter: (`hue-rotate(${globalState.degree_001}deg)`) }}>
                <AliceCarousel
                  autoPlay={false}
                  autoPlayStrategy={'all'}
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
              </div>

              <div style={{ filter: (`hue-rotate(${globalState.degree_002}deg)`) }}>
                <AliceCarousel
                  autoPlay={false}
                  autoPlayStrategy={'all'}
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
              </div>

              <div style={{ filter: (`hue-rotate(${globalState.degree_003}deg)`) }}>
                <AliceCarousel
                  autoPlay={false}
                  autoPlayStrategy={'all'}
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

      </div>
      
    </div>
  )
}

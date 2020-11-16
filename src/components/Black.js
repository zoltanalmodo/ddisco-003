import React, { useContext } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Navigation from './Navigation';

import { GlobalContext } from '../context/GlobalState'



import ddisco_b_001_1 from '../images/b/ddisco_b_001_1.jpg';
import ddisco_b_001_2 from '../images/b/ddisco_b_001_2.jpg';
import ddisco_b_001_3 from '../images/b/ddisco_b_001_3.jpg';
import ddisco_b_002_1 from '../images/b/ddisco_b_002_1.jpg';
import ddisco_b_002_2 from '../images/b/ddisco_b_002_2.jpg';
import ddisco_b_002_3 from '../images/b/ddisco_b_002_3.jpg';
import ddisco_b_003_1 from '../images/b/ddisco_b_003_1.jpg';
import ddisco_b_003_2 from '../images/b/ddisco_b_003_2.jpg';
import ddisco_b_003_3 from '../images/b/ddisco_b_003_3.jpg';
import ddisco_b_004_1 from '../images/b/ddisco_b_004_1.jpg';
import ddisco_b_004_2 from '../images/b/ddisco_b_004_2.jpg';
import ddisco_b_004_3 from '../images/b/ddisco_b_004_3.jpg';
import ddisco_b_005_1 from '../images/b/ddisco_b_005_1.jpg';
import ddisco_b_005_2 from '../images/b/ddisco_b_005_2.jpg';
import ddisco_b_005_3 from '../images/b/ddisco_b_005_3.jpg';
import ddisco_b_006_1 from '../images/b/ddisco_b_006_1.jpg';
import ddisco_b_006_2 from '../images/b/ddisco_b_006_2.jpg';
import ddisco_b_006_3 from '../images/b/ddisco_b_006_3.jpg';
import ddisco_b_007_1 from '../images/b/ddisco_b_007_1.jpg';
import ddisco_b_007_2 from '../images/b/ddisco_b_007_2.jpg';
import ddisco_b_007_3 from '../images/b/ddisco_b_007_3.jpg';
import ddisco_b_008_1 from '../images/b/ddisco_b_008_1.jpg';
import ddisco_b_008_2 from '../images/b/ddisco_b_008_2.jpg';
import ddisco_b_008_3 from '../images/b/ddisco_b_008_3.jpg';
import ddisco_b_009_1 from '../images/b/ddisco_b_009_1.jpg';
import ddisco_b_009_2 from '../images/b/ddisco_b_009_2.jpg';
import ddisco_b_009_3 from '../images/b/ddisco_b_009_3.jpg';
import ddisco_b_010_1 from '../images/b/ddisco_b_010_1.jpg';
import ddisco_b_010_2 from '../images/b/ddisco_b_010_2.jpg';
import ddisco_b_010_3 from '../images/b/ddisco_b_010_3.jpg';
import ddisco_b_011_1 from '../images/b/ddisco_b_011_1.jpg';
import ddisco_b_011_2 from '../images/b/ddisco_b_011_2.jpg';
import ddisco_b_011_3 from '../images/b/ddisco_b_011_3.jpg';
import ddisco_b_012_1 from '../images/b/ddisco_b_012_1.jpg';
import ddisco_b_012_2 from '../images/b/ddisco_b_012_2.jpg';
import ddisco_b_012_3 from '../images/b/ddisco_b_012_3.jpg';

let galleryItems_001 = [
  <img alt='b_001_1' src={ddisco_b_001_1} className="CarouselSize" />,
  <img alt='b_002_1' src={ddisco_b_002_1} className="CarouselSize" />,
  <img alt='b_003_1' src={ddisco_b_003_1} className="CarouselSize" />,
  <img alt='b_004_1' src={ddisco_b_004_1} className="CarouselSize" />,
  <img alt='b_005_1' src={ddisco_b_005_1} className="CarouselSize" />,
  <img alt='b_006_1' src={ddisco_b_006_1} className="CarouselSize" />,
  <img alt='b_007_1' src={ddisco_b_007_1} className="CarouselSize" />,
  <img alt='b_008_1' src={ddisco_b_008_1} className="CarouselSize" />,
  <img alt='b_009_1' src={ddisco_b_009_1} className="CarouselSize" />,
  <img alt='b_010_1' src={ddisco_b_010_1} className="CarouselSize" />,
  <img alt='b_011_1' src={ddisco_b_011_1} className="CarouselSize" />,
  <img alt='b_012_1' src={ddisco_b_012_1} className="CarouselSize" />
]

let galleryItems_002 = [
  <img alt='b_001_2' src={ddisco_b_001_2} className="CarouselSize" />,
  <img alt='b_002_2' src={ddisco_b_002_2} className="CarouselSize" />,
  <img alt='b_003_2' src={ddisco_b_003_2} className="CarouselSize" />,
  <img alt='b_004_2' src={ddisco_b_004_2} className="CarouselSize" />,
  <img alt='b_005_2' src={ddisco_b_005_2} className="CarouselSize" />,
  <img alt='b_006_2' src={ddisco_b_006_2} className="CarouselSize" />,
  <img alt='b_007_2' src={ddisco_b_007_2} className="CarouselSize" />,
  <img alt='b_008_2' src={ddisco_b_008_2} className="CarouselSize" />,
  <img alt='b_009_2' src={ddisco_b_009_2} className="CarouselSize" />,
  <img alt='b_010_2' src={ddisco_b_010_2} className="CarouselSize" />,
  <img alt='b_011_2' src={ddisco_b_011_2} className="CarouselSize" />,
  <img alt='b_012_2' src={ddisco_b_012_2} className="CarouselSize" />
]

let galleryItems_003 = [
  <img alt='b_001_3' src={ddisco_b_001_3} className="CarouselSize" />,
  <img alt='b_002_3' src={ddisco_b_002_3} className="CarouselSize" />,
  <img alt='b_003_3' src={ddisco_b_003_3} className="CarouselSize" />,
  <img alt='b_004_3' src={ddisco_b_004_3} className="CarouselSize" />,
  <img alt='b_005_3' src={ddisco_b_005_3} className="CarouselSize" />,
  <img alt='b_006_3' src={ddisco_b_006_3} className="CarouselSize" />,
  <img alt='b_007_3' src={ddisco_b_007_3} className="CarouselSize" />,
  <img alt='b_008_3' src={ddisco_b_008_3} className="CarouselSize" />,
  <img alt='b_009_3' src={ddisco_b_009_3} className="CarouselSize" />,
  <img alt='b_010_3' src={ddisco_b_010_3} className="CarouselSize" />,
  <img alt='b_011_3' src={ddisco_b_011_3} className="CarouselSize" />,
  <img alt='b_012_3' src={ddisco_b_012_3} className="CarouselSize" />
]



export const Black = () => {

  const {
    updateIndex_001,
    updateIndex_002,
    updateIndex_003 } = useContext(GlobalContext);

  const {
    globalState
  } = useContext(GlobalContext); 


  return (
    
    <div className='body_black'>
       
      <Navigation />
     

      <div className='carousel_black'>

        <AliceCarousel 
          autoPlay={false}
          autoPlayStrategy={'all'}
          autoPlayInterval={5000}
          autoPlayDirection={'rtl'}
          disableAutoPlayOnAction={true}

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
          autoPlayStrategy={'all'}
          autoPlayInterval={5000}
          autoPlayDirection={'ltr'}
          disableAutoPlayOnAction={true}

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
          autoPlayStrategy={'all'}
          autoPlayInterval={5000}
          autoPlayDirection={'rtl'}
          disableAutoPlayOnAction={true}

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
  )
}

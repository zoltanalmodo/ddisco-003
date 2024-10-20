import React, { useContext } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Navigation from './Navigation'
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

// galleryItems_001

let galleryItems_001_0 = [...Array(12)].map((element, index) => <img
alt='c_001_1'
src={ddisco_c_001_1}
className="CarouselSize" />)

let galleryItems_001_1 = [...Array(12)].map((element, index) => <img
alt='c_002_1'
src={ddisco_c_002_1}
className="CarouselSize" />)

let galleryItems_001_2 = [...Array(12)].map((element, index) => <img
alt='c_003_1'
src={ddisco_c_003_1}
className="CarouselSize" />)

let galleryItems_001_3 = [...Array(12)].map((element, index) => <img
alt='c_004_1'
src={ddisco_c_004_1}
className="CarouselSize" />)

let galleryItems_001_4 = [...Array(12)].map((element, index) => <img
alt='c_005_1'
src={ddisco_c_005_1}
className="CarouselSize" />)

let galleryItems_001_5 = [...Array(12)].map((element, index) => <img
alt='c_006_1'
src={ddisco_c_006_1}
className="CarouselSize" />)

let galleryItems_001_6 = [...Array(12)].map((element, index) => <img
alt='c_007_1'
src={ddisco_c_007_1}
className="CarouselSize" />)

let galleryItems_001_7 = [...Array(12)].map((element, index) => <img
alt='c_008_1'
src={ddisco_c_008_1}
className="CarouselSize" />)

let galleryItems_001_8 = [...Array(12)].map((element, index) => <img
alt='c_009_1'
src={ddisco_c_009_1}
className="CarouselSize" />)

let galleryItems_001_9 = [...Array(12)].map((element, index) => <img
alt='c_010_1'
src={ddisco_c_010_1}
className="CarouselSize" />)

let galleryItems_001_10 = [...Array(12)].map((element, index) => <img
alt='c_011_1'
src={ddisco_c_011_1}
className="CarouselSize" />)

let galleryItems_001_11 = [...Array(12)].map((element, index) => <img
alt='c_012_1'
src={ddisco_c_012_1}
className="CarouselSize" />)

// galleryItems_002

let galleryItems_002_0 = [...Array(12)].map((element, index) => <img
alt='c_001_2'
src={ddisco_c_001_2}
className="CarouselSize" />)

let galleryItems_002_1 = [...Array(12)].map((element, index) => <img
alt='c_002_2'
src={ddisco_c_002_2}
className="CarouselSize" />)

let galleryItems_002_2 = [...Array(12)].map((element, index) => <img
alt='c_003_2'
src={ddisco_c_003_2}
className="CarouselSize" />)

let galleryItems_002_3 = [...Array(12)].map((element, index) => <img
alt='c_004_2'
src={ddisco_c_004_2}
className="CarouselSize" />)

let galleryItems_002_4 = [...Array(12)].map((element, index) => <img
alt='c_005_2'
src={ddisco_c_005_2}
className="CarouselSize" />)

let galleryItems_002_5 = [...Array(12)].map((element, index) => <img
alt='c_006_2'
src={ddisco_c_006_2}
className="CarouselSize" />)

let galleryItems_002_6 = [...Array(12)].map((element, index) => <img
alt='c_007_2'
src={ddisco_c_007_2}
className="CarouselSize" />)

let galleryItems_002_7 = [...Array(12)].map((element, index) => <img
alt='c_008_2'
src={ddisco_c_008_2}
className="CarouselSize" />)

let galleryItems_002_8 = [...Array(12)].map((element, index) => <img
alt='c_009_2'
src={ddisco_c_009_2}
className="CarouselSize" />)

let galleryItems_002_9 = [...Array(12)].map((element, index) => <img
alt='c_010_2'
src={ddisco_c_010_2}
className="CarouselSize" />)

let galleryItems_002_10 = [...Array(12)].map((element, index) => <img
alt='c_011_2'
src={ddisco_c_011_2}
className="CarouselSize" />)

let galleryItems_002_11 = [...Array(12)].map((element, index) => <img
alt='c_012_2'
src={ddisco_c_012_2}
className="CarouselSize" />)

// galleryItems_003

let galleryItems_003_0 = [...Array(12)].map((element, index) => <img
alt='c_001_3'
src={ddisco_c_001_3}
className="CarouselSize" />)

let galleryItems_003_1 = [...Array(12)].map((element, index) => <img
alt='c_002_3'
src={ddisco_c_002_3}
className="CarouselSize" />)

let galleryItems_003_2 = [...Array(12)].map((element, index) => <img
alt='c_003_3'
src={ddisco_c_003_3}
className="CarouselSize" />)

let galleryItems_003_3 = [...Array(12)].map((element, index) => <img
alt='c_004_3'
src={ddisco_c_004_3}
className="CarouselSize" />)

let galleryItems_003_4 = [...Array(12)].map((element, index) => <img
alt='c_005_3'
src={ddisco_c_005_3}
className="CarouselSize" />)

let galleryItems_003_5 = [...Array(12)].map((element, index) => <img
alt='c_006_3'
src={ddisco_c_006_3}
className="CarouselSize" />)

let galleryItems_003_6 = [...Array(12)].map((element, index) => <img
alt='c_007_3'
src={ddisco_c_007_3}
className="CarouselSize" />)

let galleryItems_003_7 = [...Array(12)].map((element, index) => <img
alt='c_008_3'
src={ddisco_c_008_3}
className="CarouselSize" />)

let galleryItems_003_8 = [...Array(12)].map((element, index) => <img
alt='c_009_3'
src={ddisco_c_009_3}
className="CarouselSize" />)

let galleryItems_003_9 = [...Array(12)].map((element, index) => <img
alt='c_010_3'
src={ddisco_c_010_3}
className="CarouselSize" />)

let galleryItems_003_10 = [...Array(12)].map((element, index) => <img
alt='c_011_3'
src={ddisco_c_011_3}
className="CarouselSize" />)

let galleryItems_003_11 = [...Array(12)].map((element, index) => <img
alt='c_012_3'
src={ddisco_c_012_3}
className="CarouselSize" />)


export const Color = () => {

  const actualItems_001 = (value) => {
    return (      
      value === 0 ? galleryItems_001_0 :
      value === 1 ? galleryItems_001_1 :
      value === 2 ? galleryItems_001_2 :
      value === 3 ? galleryItems_001_3 :
      value === 4 ? galleryItems_001_4 :
      value === 5 ? galleryItems_001_5 :
      value === 6 ? galleryItems_001_6 :
      value === 7 ? galleryItems_001_7 :
      value === 8 ? galleryItems_001_8 :
      value === 9 ? galleryItems_001_9 :
      value === 10 ? galleryItems_001_10 :
      value === 11 ? galleryItems_001_11 :
      "error_001"    
    )
  }

  const actualItems_002 = (value) => {
    return (      
      value === 0 ? galleryItems_002_0 :
      value === 1 ? galleryItems_002_1 :
      value === 2 ? galleryItems_002_2 :
      value === 3 ? galleryItems_002_3 :
      value === 4 ? galleryItems_002_4 :
      value === 5 ? galleryItems_002_5 :
      value === 6 ? galleryItems_002_6 :
      value === 7 ? galleryItems_002_7 :
      value === 8 ? galleryItems_002_8 :
      value === 9 ? galleryItems_002_9 :
      value === 10 ? galleryItems_002_10 :
      value === 11 ? galleryItems_002_11 :
      "error_002"    
    )
  }

  const actualItems_003 = (value) => {
    return (      
      value === 0 ? galleryItems_003_0 :
      value === 1 ? galleryItems_003_1 :
      value === 2 ? galleryItems_003_2 :
      value === 3 ? galleryItems_003_3 :
      value === 4 ? galleryItems_003_4 :
      value === 5 ? galleryItems_003_5 :
      value === 6 ? galleryItems_003_6 :
      value === 7 ? galleryItems_003_7 :
      value === 8 ? galleryItems_003_8 :
      value === 9 ? galleryItems_003_9 :
      value === 10 ? galleryItems_003_10 :
      value === 11 ? galleryItems_003_11 :
      "error_003"
    )
  }

  const {
    globalState,
    setDegree_001,
    setDegree_002,
    setDegree_003,
  } = useContext(GlobalContext);


  return (
    
    <div className='body_white'>
       
      <Navigation />
     
      <div className='carousel_white'>

        <div style={{
            filter: (globalState.isPastel === 'true' ? 'brightness(105%) saturate(70%)' : 'brightness(100%) saturate(100%)'),
        }}>

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

              items={actualItems_001(globalState.currentIndex_001)}
              startIndex={globalState.currentIndex_001}
              slideToIndex={globalState.currentIndex_001}
              onSlideChanged={ (e) => setDegree_001( e.item * 30) }
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

              items={actualItems_002(globalState.currentIndex_002)}
              startIndex={globalState.currentIndex_002}
              slideToIndex={globalState.currentIndex_002}
              onSlideChanged={ (e) => setDegree_002( e.item * 30) }
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

              items={actualItems_003(globalState.currentIndex_003)}
              startIndex={globalState.currentIndex_003}
              slideToIndex={globalState.currentIndex_003}
              onSlideChanged={ (e) => setDegree_003( e.item * 30) }
            />
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
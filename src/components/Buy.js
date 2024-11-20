import React, { useContext } from 'react'
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

export const Buy = () => {

  const {

    globalState,

  } = useContext(GlobalContext);

  const selectedImageIndex_001 = globalState.currentIndex_001;
  const selectedImage_001 = galleryItems_001[selectedImageIndex_001]
  const selectedImageIndex_002 = globalState.currentIndex_002;
  const selectedImage_002 = galleryItems_002[selectedImageIndex_002]
  const selectedImageIndex_003 = globalState.currentIndex_003;
  const selectedImage_003 = galleryItems_003[selectedImageIndex_003]


// Determine the background color based on the active button value
const frameBackgroundColor =
globalState.previousActiveButton === "black" ? "black" : "white";

  return (
    <div className='body_white_buy'>
      <Navigation />

      <div className="carousel_white_buy">

        <div style={{ backgroundColor: frameBackgroundColor }} className="frame-overlay-dark-grey-buy">

          <div style={{
            filter: (globalState.isPastel === 'true' ? 'brightness(105%) saturate(70%)' : 'brightness(100%) saturate(100%)'),
            
          }}>

            <div className="single_image_display_container">
              <div className="single_image_display">
                {selectedImage_001}
              </div>
              <div className="single_image_display">
                {selectedImage_002}
              </div>
              <div className="single_image_display">
                {selectedImage_003}
              </div>
            </div>

          </div>

        </div>

        <div class="sizes_container">
          <div class="size_button">small</div>
          <div class="size_button">medium</div>
          <div class="size_button">large</div>
          <div className="buy_button">buy</div>
        </div>
       

      </div>

    </div>  
  )
}

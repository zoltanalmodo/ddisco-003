import React, { useContext } from 'react'
import Navigation from './Navigation';
import { GlobalContext } from '../context/GlobalState'
import { FormValidation } from '../components/FormValidation';

/* ============================================ black images START ============================================ */
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
/* ============================================ black images -END- ============================================ */

/* ============================================ white images -END- ============================================ */
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
/* ============================================ white images -END- ============================================ */

/* ============================================ color images START ============================================ */
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
/* ============================================ color images -END- ============================================ */


export const Buy = () => {

  const {

    globalState,
    setSelectedSizeSmall,
    setSelectedSizeMedium,
    setSelectedSizeLarge,

  } = useContext(GlobalContext);

  const activeBackgroundSizesSmall = () => {
    return(
      globalState.selectedSize === 'small' ? 'black' : 'white'
    )
  }
  const activeColorSizesSmall = () => {
    return(
      globalState.selectedSize === 'small' ? 'white' : 'black'
    )
  }
  const activeBackgroundSizesMedium = () => {
    return(
      globalState.selectedSize === 'medium' ? 'black' : 'white'
    )
  }
  const activeColorSizesMedium = () => {
    return(
      globalState.selectedSize === 'medium' ? 'white' : 'black'
    )
  }
  const activeBackgroundSizesLarge = () => {
    return(
      globalState.selectedSize === 'large' ? 'black' : 'white'
    )
  }
  const activeColorSizesLarge = () => {
    return(
      globalState.selectedSize === 'large' ? 'white' : 'black'
    )
  }


  window.galleryItems_black_001 = [
    <img alt='c_001_1' index={0} src={ddisco_b_001_1} className="CarouselSize" />,
    <img alt='c_002_1' index={1} src={ddisco_b_002_1} className="CarouselSize" />,
    <img alt='c_003_1' index={2} src={ddisco_b_003_1} className="CarouselSize" />,
    <img alt='c_004_1' index={3} src={ddisco_b_004_1} className="CarouselSize" />,
    <img alt='c_005_1' index={4} src={ddisco_b_005_1} className="CarouselSize" />,
    <img alt='c_006_1' index={5} src={ddisco_b_006_1} className="CarouselSize" />,
    <img alt='c_007_1' index={6} src={ddisco_b_007_1} className="CarouselSize" />,
    <img alt='c_008_1' index={7} src={ddisco_b_008_1} className="CarouselSize" />,
    <img alt='c_009_1' index={8} src={ddisco_b_009_1} className="CarouselSize" />,
    <img alt='c_010_1' index={9} src={ddisco_b_010_1} className="CarouselSize" />,
    <img alt='c_011_1' index={10} src={ddisco_b_011_1} className="CarouselSize" />,
    <img alt='c_012_1' index={11} src={ddisco_b_012_1} className="CarouselSize" />,
  ];
  window.galleryItems_black_002 = [
    <img alt='c_001_2' index={0} src={ddisco_b_001_2} className="CarouselSize" />,
    <img alt='c_002_2' index={1} src={ddisco_b_002_2} className="CarouselSize" />,
    <img alt='c_003_2' index={2} src={ddisco_b_003_2} className="CarouselSize" />,
    <img alt='c_004_2' index={3} src={ddisco_b_004_2} className="CarouselSize" />,
    <img alt='c_005_2' index={4} src={ddisco_b_005_2} className="CarouselSize" />,
    <img alt='c_006_2' index={5} src={ddisco_b_006_2} className="CarouselSize" />,
    <img alt='c_007_2' index={6} src={ddisco_b_007_2} className="CarouselSize" />,
    <img alt='c_008_2' index={7} src={ddisco_b_008_2} className="CarouselSize" />,
    <img alt='c_009_2' index={8} src={ddisco_b_009_2} className="CarouselSize" />,
    <img alt='c_010_2' index={9} src={ddisco_b_010_2} className="CarouselSize" />,
    <img alt='c_011_2' index={10} src={ddisco_b_011_2} className="CarouselSize" />,
    <img alt='c_012_2' index={11} src={ddisco_b_012_2} className="CarouselSize" />,
  ];
  window.galleryItems_black_003 = [
    <img alt='c_001_3' index={0} src={ddisco_b_001_3} className="CarouselSize" />,
    <img alt='c_002_3' index={1} src={ddisco_b_002_3} className="CarouselSize" />,
    <img alt='c_003_3' index={2} src={ddisco_b_003_3} className="CarouselSize" />,
    <img alt='c_004_3' index={3} src={ddisco_b_004_3} className="CarouselSize" />,
    <img alt='c_005_3' index={4} src={ddisco_b_005_3} className="CarouselSize" />,
    <img alt='c_006_3' index={5} src={ddisco_b_006_3} className="CarouselSize" />,
    <img alt='c_007_3' index={6} src={ddisco_b_007_3} className="CarouselSize" />,
    <img alt='c_008_3' index={7} src={ddisco_b_008_3} className="CarouselSize" />,
    <img alt='c_009_3' index={8} src={ddisco_b_009_3} className="CarouselSize" />,
    <img alt='c_010_3' index={9} src={ddisco_b_010_3} className="CarouselSize" />,
    <img alt='c_011_3' index={10} src={ddisco_b_011_3} className="CarouselSize" />,
    <img alt='c_012_3' index={11} src={ddisco_b_012_3} className="CarouselSize" />,
  ];

  window.galleryItems_white_001 = [
    <img alt='w_001_1' index={0} src={ddisco_w_001_1} className="CarouselSize" />,
    <img alt='w_002_1' index={1} src={ddisco_w_002_1} className="CarouselSize" />,
    <img alt='w_003_1' index={2} src={ddisco_w_003_1} className="CarouselSize" />,
    <img alt='w_004_1' index={3} src={ddisco_w_004_1} className="CarouselSize" />,
    <img alt='w_005_1' index={4} src={ddisco_w_005_1} className="CarouselSize" />,
    <img alt='w_006_1' index={5} src={ddisco_w_006_1} className="CarouselSize" />,
    <img alt='w_007_1' index={6} src={ddisco_w_007_1} className="CarouselSize" />,
    <img alt='w_008_1' index={7} src={ddisco_w_008_1} className="CarouselSize" />,
    <img alt='w_009_1' index={8} src={ddisco_w_009_1} className="CarouselSize" />,
    <img alt='w_010_1' index={9} src={ddisco_w_010_1} className="CarouselSize" />,
    <img alt='w_011_1' index={10} src={ddisco_w_011_1} className="CarouselSize" />,
    <img alt='w_012_1' index={11} src={ddisco_w_012_1} className="CarouselSize" />,
  ];  
  window.galleryItems_white_002 = [
    <img alt='w_001_2' index={0} src={ddisco_w_001_2} className="CarouselSize" />,
    <img alt='w_002_2' index={1} src={ddisco_w_002_2} className="CarouselSize" />,
    <img alt='w_003_2' index={2} src={ddisco_w_003_2} className="CarouselSize" />,
    <img alt='w_004_2' index={3} src={ddisco_w_004_2} className="CarouselSize" />,
    <img alt='w_005_2' index={4} src={ddisco_w_005_2} className="CarouselSize" />,
    <img alt='w_006_2' index={5} src={ddisco_w_006_2} className="CarouselSize" />,
    <img alt='w_007_2' index={6} src={ddisco_w_007_2} className="CarouselSize" />,
    <img alt='w_008_2' index={7} src={ddisco_w_008_2} className="CarouselSize" />,
    <img alt='w_009_2' index={8} src={ddisco_w_009_2} className="CarouselSize" />,
    <img alt='w_010_2' index={9} src={ddisco_w_010_2} className="CarouselSize" />,
    <img alt='w_011_2' index={10} src={ddisco_w_011_2} className="CarouselSize" />,
    <img alt='w_012_2' index={11} src={ddisco_w_012_2} className="CarouselSize" />,
  ];
  window.galleryItems_white_003 = [
    <img alt='w_001_3' index={0} src={ddisco_w_001_3} className="CarouselSize" />,
    <img alt='w_002_3' index={1} src={ddisco_w_002_3} className="CarouselSize" />,
    <img alt='w_003_3' index={2} src={ddisco_w_003_3} className="CarouselSize" />,
    <img alt='w_004_3' index={3} src={ddisco_w_004_3} className="CarouselSize" />,
    <img alt='w_005_3' index={4} src={ddisco_w_005_3} className="CarouselSize" />,
    <img alt='w_006_3' index={5} src={ddisco_w_006_3} className="CarouselSize" />,
    <img alt='w_007_3' index={6} src={ddisco_w_007_3} className="CarouselSize" />,
    <img alt='w_008_3' index={7} src={ddisco_w_008_3} className="CarouselSize" />,
    <img alt='w_009_3' index={8} src={ddisco_w_009_3} className="CarouselSize" />,
    <img alt='w_010_3' index={9} src={ddisco_w_010_3} className="CarouselSize" />,
    <img alt='w_011_3' index={10} src={ddisco_w_011_3} className="CarouselSize" />,
    <img alt='w_012_3' index={11} src={ddisco_w_012_3} className="CarouselSize" />,
  ];

  window.galleryItems_color_001 = [
    <img key='c_001_1' alt='c_001_1' index={0} src={ddisco_c_001_1} className="CarouselSize" />,
    <img key='c_002_1' alt='c_002_1' index={1} src={ddisco_c_002_1} className="CarouselSize" />,
    <img key='c_003_1' alt='c_003_1' index={2} src={ddisco_c_003_1} className="CarouselSize" />,
    <img key='c_004_1' alt='c_004_1' index={3} src={ddisco_c_004_1} className="CarouselSize" />,
    <img key='c_005_1' alt='c_005_1' index={4} src={ddisco_c_005_1} className="CarouselSize" />,
    <img key='c_006_1' alt='c_006_1' index={5} src={ddisco_c_006_1} className="CarouselSize" />,
    <img key='c_007_1' alt='c_007_1' index={6} src={ddisco_c_007_1} className="CarouselSize" />,
    <img key='c_008_1' alt='c_008_1' index={7} src={ddisco_c_008_1} className="CarouselSize" />,
    <img key='c_009_1' alt='c_009_1' index={8} src={ddisco_c_009_1} className="CarouselSize" />,
    <img key='c_010_1' alt='c_010_1' index={9} src={ddisco_c_010_1} className="CarouselSize" />,
    <img key='c_011_1' alt='c_011_1' index={10} src={ddisco_c_011_1} className="CarouselSize" />,
    <img key='c_012_1' alt='c_012_1' index={11} src={ddisco_c_012_1} className="CarouselSize" />,
  ];
  window.galleryItems_color_002 = [
    <img key='c_001_1' alt='c_001_2' index={0} src={ddisco_c_001_2} className="CarouselSize" />,
    <img key='c_002_1' alt='c_002_2' index={1} src={ddisco_c_002_2} className="CarouselSize" />,
    <img key='c_003_1' alt='c_003_2' index={2} src={ddisco_c_003_2} className="CarouselSize" />,
    <img key='c_004_1' alt='c_004_2' index={3} src={ddisco_c_004_2} className="CarouselSize" />,
    <img key='c_005_1' alt='c_005_2' index={4} src={ddisco_c_005_2} className="CarouselSize" />,
    <img key='c_006_1' alt='c_006_2' index={5} src={ddisco_c_006_2} className="CarouselSize" />,
    <img key='c_007_1' alt='c_007_2' index={6} src={ddisco_c_007_2} className="CarouselSize" />,
    <img key='c_008_1' alt='c_008_2' index={7} src={ddisco_c_008_2} className="CarouselSize" />,
    <img key='c_009_1' alt='c_009_2' index={8} src={ddisco_c_009_2} className="CarouselSize" />,
    <img key='c_010_1' alt='c_010_2' index={9} src={ddisco_c_010_2} className="CarouselSize" />,
    <img key='c_011_1' alt='c_011_2' index={10} src={ddisco_c_011_2} className="CarouselSize" />,
    <img key='c_012_1' alt='c_012_2' index={11} src={ddisco_c_012_2} className="CarouselSize" />,
  ];
  window.galleryItems_color_003 = [
    <img key='c_001_1' alt='c_001_3' index={0} src={ddisco_c_001_3} className="CarouselSize" />,
    <img key='c_002_1' alt='c_002_3' index={1} src={ddisco_c_002_3} className="CarouselSize" />,
    <img key='c_003_1' alt='c_003_3' index={2} src={ddisco_c_003_3} className="CarouselSize" />,
    <img key='c_004_1' alt='c_004_3' index={3} src={ddisco_c_004_3} className="CarouselSize" />,
    <img key='c_005_1' alt='c_005_3' index={4} src={ddisco_c_005_3} className="CarouselSize" />,
    <img key='c_006_1' alt='c_006_3' index={5} src={ddisco_c_006_3} className="CarouselSize" />,
    <img key='c_007_1' alt='c_007_3' index={6} src={ddisco_c_007_3} className="CarouselSize" />,
    <img key='c_008_1' alt='c_008_3' index={7} src={ddisco_c_008_3} className="CarouselSize" />,
    <img key='c_009_1' alt='c_009_3' index={8} src={ddisco_c_009_3} className="CarouselSize" />,
    <img key='c_010_1' alt='c_010_3' index={9} src={ddisco_c_010_3} className="CarouselSize" />,
    <img key='c_011_1' alt='c_011_3' index={10} src={ddisco_c_011_3} className="CarouselSize" />,
    <img key='c_012_1' alt='c_012_3' index={11} src={ddisco_c_012_3} className="CarouselSize" />,
  ];
  
  let imageColorState;
    if (globalState.previousActiveButton === "black") {
      imageColorState = "black";
    } else if (globalState.previousActiveButton === "white") {
      imageColorState = "white";
    } else if (globalState.previousActiveButton === "color" || globalState.previousActiveButton === "disco") {
      imageColorState = "color";
    } else {
      imageColorState = "color";
    }

  const selectedImageIndex_001 = globalState.currentIndex_001;
  const selectedImageIndex_002 = globalState.currentIndex_002;
  const selectedImageIndex_003 = globalState.currentIndex_003;

  const selectedImage_001 = window[`galleryItems_${imageColorState}_001`][selectedImageIndex_001];
  const selectedImage_002 = window[`galleryItems_${imageColorState}_002`][selectedImageIndex_002];
  const selectedImage_003 = window[`galleryItems_${imageColorState}_003`][selectedImageIndex_003];


// Determine the background color based on the active button value
const frameBackgroundColor =
globalState.previousActiveButton === "black" ? "black" : "white";



  return (
    <div className='body_white_buy'>
      <Navigation />

      <div className="carousel_white_buy">

        <div style={{ backgroundColor: frameBackgroundColor }} className="frame_overlay_dark_grey_buy">

          <div style={{
            filter: (globalState.isPastel === 'true' ? 'brightness(105%) saturate(70%)' : 'brightness(100%) saturate(100%)'),
          }}>

            <div className="single_image_display_container">
              
                <div className="hue_rotate" style={{
                  filter: (`hue-rotate(${globalState.degree_001}deg)`),
                }}>
                  {selectedImage_001}
                </div>
              
                <div className="hue_rotate" style={{
                  filter: (`hue-rotate(${globalState.degree_002}deg)`),
                }}>
                  {selectedImage_002}
                </div>
              
                <div className="hue_rotate" style={{
                  filter: (`hue-rotate(${globalState.degree_003}deg)`),
                }}>
                  {selectedImage_003}
                </div>
              
            </div>

          </div>

        </div>

        <div class="sizes_container">

          <div class="size_button_container">
            <button
              class="size_button"
              onClick={setSelectedSizeSmall}
              style={{
                backgroundColor: activeBackgroundSizesSmall(),
                color: activeColorSizesSmall()
              }}>small
            </button>
          </div>

          <div class="size_button_container">
            <button
              class="size_button"
              onClick={setSelectedSizeMedium}
              style={{
                backgroundColor: activeBackgroundSizesMedium(),
                color: activeColorSizesMedium()
              }}>medium
            </button>
          </div>

          <div class="size_button_container">
            <button
              class="size_button"
              onClick={setSelectedSizeLarge}
              style={{
                backgroundColor: activeBackgroundSizesLarge(),
                color: activeColorSizesLarge()
              }}>large
            </button>
          </div>

          <FormValidation />

        </div>

      </div>

    </div>  
  )
}
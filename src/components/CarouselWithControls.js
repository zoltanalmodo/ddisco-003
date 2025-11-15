import React, { useRef, useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const getClientX = (event) => {
  if (event.changedTouches && event.changedTouches.length) {
    return event.changedTouches[0].clientX;
  }
  return event.clientX;
};

const SWIPE_THRESHOLD = 30;

const CarouselWithControls = ({
  className = '',
  autoPlay = false,
  onSlideChanged,
  onUserInteraction,
  ...props
}) => {
  const carouselRef = useRef(null);
  const dragState = useRef({ startX: 0, isDragging: false });
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    setIsAutoPlaying(autoPlay);
  }, [autoPlay]);

  const stopAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
    }
    if (onUserInteraction) {
      onUserInteraction();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handlePointerDown = (event) => {
    dragState.current = { startX: getClientX(event), isDragging: true };
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.isDragging) return;
    const delta = getClientX(event) - dragState.current.startX;
    if (Math.abs(delta) > 5) {
      event.preventDefault();
    }
  };

  const handlePointerUp = (event) => {
    if (!dragState.current.isDragging) return;
    const delta = getClientX(event) - dragState.current.startX;
    stopAutoPlay();

    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta > 0 ? slidePrev() : slideNext();
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      const relativeX = getClientX(event) - rect.left;
      relativeX <= rect.width / 2 ? slidePrev() : slideNext();
    }

    dragState.current.isDragging = false;
  };

  return (
    <div
      className={`carousel-shell ${className}`.trim()}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={() => { dragState.current.isDragging = false; }}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      onTouchCancel={() => { dragState.current.isDragging = false; }}
    >
      <AliceCarousel
        ref={carouselRef}
        autoPlay={isAutoPlaying}
        disableDotsControls={true}
        disableButtonsControls={true}
        mouseTrackingEnabled={false}
        touchTrackingEnabled={false}
        swipeDisabled={true}
        preventEventOnTouchMove={true}
        onSlideChanged={onSlideChanged}
        {...props}
      />
    </div>
  );
};

export default CarouselWithControls;

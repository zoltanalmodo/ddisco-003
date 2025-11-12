import React, { useCallback, useEffect, useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const getClientX = (event) => {
  if (event.changedTouches && event.changedTouches.length) {
    return event.changedTouches[0].clientX;
  }
  if (event.touches && event.touches.length) {
    return event.touches[0].clientX;
  }
  return event.clientX;
};

const SWIPE_THRESHOLD = 35;

const CarouselWithControls = ({ className = '', autoPlay = false, onUserInteraction, ...props }) => {
  const carouselRef = useRef(null);
  const pointerStart = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    setIsAutoPlaying(autoPlay);
  }, [autoPlay]);

  const stopAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    if (onUserInteraction) {
      onUserInteraction();
    }
  }, [onUserInteraction]);

  const slidePrev = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  }, []);

  const slideNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  }, []);

  const handlePointerDown = (event) => {
    pointerStart.current = getClientX(event);
  };

  const resetPointer = () => {
    pointerStart.current = null;
  };

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) {
      return;
    }
    const endX = getClientX(event);
    const delta = endX - pointerStart.current;
    stopAutoPlay();

    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta > 0 ? slidePrev() : slideNext();
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      const relativeX = endX - rect.left;
      if (relativeX <= rect.width / 2) {
        slidePrev();
      } else {
        slideNext();
      }
    }

    resetPointer();
  };

  const sanitizedProps = {
    ...props,
    mouseTrackingEnabled: true,
    touchTrackingEnabled: true,
    swipeDisabled: false,
  };

  return (
    <div
      className={`carousel-shell ${className}`.trim()}
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onMouseLeave={resetPointer}
      onTouchStart={handlePointerDown}
      onTouchEnd={handlePointerUp}
      onTouchCancel={resetPointer}
    >
      <AliceCarousel
        ref={carouselRef}
        autoPlay={isAutoPlaying}
        {...sanitizedProps}
      />
    </div>
  );
};

export default CarouselWithControls;

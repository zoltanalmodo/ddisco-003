import React, { useCallback, useRef } from 'react';
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

const DRAG_THRESHOLD = 40;

const CarouselWithControls = ({ onUserInteraction, className = '', ...props }) => {
  const carouselRef = useRef(null);
  const pointerStart = useRef(null);

  const notify = useCallback(() => {
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

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return;
    const endX = getClientX(event);
    const delta = endX - pointerStart.current;
    notify();
    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      delta > 0 ? slidePrev() : slideNext();
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      const relativeX = endX - rect.left;
      relativeX <= rect.width / 2 ? slidePrev() : slideNext();
    }
    pointerStart.current = null;
  };

  return (
    <div
      className={`carousel-shell ${className}`.trim()}
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onMouseLeave={() => {
        pointerStart.current = null;
      }}
      onTouchStart={handlePointerDown}
      onTouchEnd={handlePointerUp}
      onTouchCancel={() => {
        pointerStart.current = null;
      }}
    >
      <AliceCarousel
        ref={carouselRef}
        mouseTrackingEnabled={false}
        touchTrackingEnabled={false}
        swipeDisabled={true}
        {...props}
      />
    </div>
  );
};

export default CarouselWithControls;

import React, { useRef, useCallback, useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const getPosition = (event) => {
  if (event.changedTouches && event.changedTouches.length) {
    return event.changedTouches[0].clientX;
  }
  return event.clientX;
};

const SWIPE_THRESHOLD = 30;

const CarouselWithControls = ({
  className = '',
  onUserInteraction,
  onSlideChanged,
  autoPlay = false,
  ...props
}) => {
  const carouselRef = useRef(null);
  const dragState = useRef({ startX: 0, isDragging: false });
  const hasStoppedRef = useRef(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!hasStoppedRef.current) {
      setIsAutoPlaying(autoPlay);
    }
  }, [autoPlay]);

  const notifyInteraction = useCallback(() => {
    if (onUserInteraction) {
      onUserInteraction();
    }
  }, [onUserInteraction]);

  const slidePrev = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      emitSlideChanged();
    }
  }, [emitSlideChanged]);

  const slideNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      emitSlideChanged();
    }
  }, [emitSlideChanged]);

  const handlePointerDown = (event) => {
    dragState.current = { startX: getPosition(event), isDragging: true };
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.isDragging) return;
    const delta = getPosition(event) - dragState.current.startX;
    if (Math.abs(delta) > 5) {
      event.preventDefault();
    }
  };

  const handlePointerUp = (event) => {
    if (!dragState.current.isDragging) return;
    const delta = getPosition(event) - dragState.current.startX;
    hasStoppedRef.current = true;
    setIsAutoPlaying(false);
    notifyInteraction();
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta > 0 ? slidePrev() : slideNext();
    } else {
      // treat as simple click: advance based on half width
      const wrapperRect = event.currentTarget.getBoundingClientRect();
      const relativeX = getPosition(event) - wrapperRect.left;
      relativeX <= wrapperRect.width / 2 ? slidePrev() : slideNext();
    }
    dragState.current.isDragging = false;
  };

  const emitSlideChanged = useCallback(() => {
    if (onSlideChanged && carouselRef.current) {
      const currentIndex = carouselRef.current.state?.currentIndex ?? 0;
      onSlideChanged({ item: currentIndex });
    }
  }, [onSlideChanged]);

  const sanitizedProps = {
    ...props,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: false,
    swipeDisabled: true,
    disableDotsControls: true,
    disableButtonsControls: true,
    onSlideChanged: emitSlideChanged,
  };

  return (
    <div
      className={`carousel-shell ${className}`.trim()}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={() => {
        dragState.current.isDragging = false;
      }}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      onTouchCancel={() => {
        dragState.current.isDragging = false;
      }}
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

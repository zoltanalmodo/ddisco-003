import React from 'react';

const handleDragStart = (event) => {
  event.preventDefault();
};

export const enhanceCarouselItems = (items) =>
  items.map((item, index) =>
    React.cloneElement(item, {
      onDragStart: handleDragStart,
      draggable: false,
      key: item.key ?? `${item.props?.alt || 'carousel-item'}-${index}`,
    })
  );

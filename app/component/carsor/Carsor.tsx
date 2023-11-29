// CarouselComponent.tsx
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './CarouselStyles.css';

const CarouselComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  const moveToSelected = (element: number) => {
    setCurrentIndex(element);
  };

  const renderItems = () => {
    const items = [-2, -1, 0, 1, 2];
    return items.map((item) => (
      <CSSTransition
        key={currentIndex + item}
        timeout={1000}
        classNames={item < 0 ? 'left' : 'right'}
      >
        <div
          className={`item level${Math.abs(item)}`}
          onClick={() => moveToSelected(currentIndex + item)}
        >
          {currentIndex + item}
        </div>
      </CSSTransition>
    ));
  };

  return (
    <div id="carousel" className="noselect">
      <TransitionGroup>{renderItems()}</TransitionGroup>
      <div className="arrow arrow-right" onClick={() => moveToSelected(currentIndex + 1)}>
        {'>'}
      </div>
      <div className="arrow arrow-left" onClick={() => moveToSelected(currentIndex - 1)}>
        {'<'}
      </div>
    </div>
  );
};

export default CarouselComponent;

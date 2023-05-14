import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 40px;
  cursor: pointer;
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <CarouselContainer>
      <Button onClick={goToPrevSlide}>◀️</Button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <Button onClick={goToNextSlide}>▶️</Button>
    </CarouselContainer>
  );
};

export default Carousel;

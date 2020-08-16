import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import Slide1 from '../../Images/Slide1.jpg';
import Slide2 from '../../Images/Slide2.jpg';
import Slide3 from '../../Images/Slide3.jpg';
import Slide4 from '../../Images/Slide4.jpg';
import Slide5 from '../../Images/Slide5.jpg';
import Slide6 from '../../Images/Slide6.jpg';

import './component.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div className="CarouselDiv" id="myDesigns">
      <h2 className="sectionHead">Designs</h2>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="slideImage" src={Slide1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImage" src={Slide2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImage" src={Slide3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImage" src={Slide4} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImage" src={Slide5} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slideImage" src={Slide6} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;

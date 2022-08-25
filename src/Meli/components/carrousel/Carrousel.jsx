import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarrouselDiv } from "./Carrousel.element";


export const Carrousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <CarrouselDiv>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 imgImg"
              src="https://http2.mlstatic.com/D_NQ_811507-MLA51012624253_082022-OO.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgImg"
              src="https://http2.mlstatic.com/D_NQ_978174-MLA51015429195_082022-OO.webp"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 imgImg"
              src="https://http2.mlstatic.com/D_NQ_645471-MLA51005272077_082022-OO.webp"
              alt="First slide"
            />

            
          </Carousel.Item>
        </Carousel>
      </CarrouselDiv>
    </>
  );
};

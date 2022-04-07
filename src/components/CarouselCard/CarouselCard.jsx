import React from 'react';

import {CarouselItem, Carousel} from 'react-bootstrap';

import './carouselcard.scss';

const CarouselCard = ({item}) => {
  const {title, description, image} = item;
  // const {githubUrl, url} = item;
  return (
    <CarouselItem className="carousel-card" interval={null}>
      <img className="d-block w-100" src={image} alt="First slide" />
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{description}</p>
      </Carousel.Caption>
    </CarouselItem>
  );
};

export default CarouselCard;

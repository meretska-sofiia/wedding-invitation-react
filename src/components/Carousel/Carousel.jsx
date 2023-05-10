import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import galleryPhoto1 from '../../images/gallery-1.jpg';
import galleryPhoto2 from '../../images/gallery-2.jpg';
import galleryPhoto3 from '../../images/gallery-3.jpg';
import galleryPhoto4 from '../../images/gallery-4.jpg';

import iconWest from 'images/west.svg';
import iconEast from 'images/east.svg';

import css from './Carousel.module.css';

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={4}
      infinite={true}
      className={css.slider}
    >
      <Slider>
        <Slide index={0}>
          <Image src={galleryPhoto1} alt={' '} hasMasterSpinner={true} />
        </Slide>
        <Slide index={1}>
          <Image src={galleryPhoto2} alt={' '} hasMasterSpinner={true} />
        </Slide>
        <Slide index={2}>
          <Image src={galleryPhoto3} alt={' '} hasMasterSpinner={true} />
        </Slide>
        <Slide index={3}>
          <Image src={galleryPhoto4} alt={' '} hasMasterSpinner={true} />
        </Slide>
      </Slider>
      <ButtonBack className={css.buttonWest}>
        <img src={iconWest} alt=" " className={css.iconArrows} width={80} />
      </ButtonBack>
      <ButtonNext className={css.buttonEast}>
        <img src={iconEast} alt=" " className={css.iconArrows} width={80} />
      </ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;

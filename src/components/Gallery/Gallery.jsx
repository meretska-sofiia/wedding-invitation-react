import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import galleryPhoto1 from '../../images/gallery-1.jpg';
import galleryPhoto2 from '../../images/gallery-2.jpg';
import galleryPhoto3 from '../../images/gallery-3.jpg';
import galleryPhoto4 from '../../images/gallery-4.jpg';
import sprite from '../../images/symbol-defs.svg';

import css from './Gallery.module.css';

const buttonStyle = {
  width: '20px',
  background: 'none',
  border: '0px',
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg width={40} fill="#fdfbf7" className={css.sliderIcon}>
        <use href={`${sprite}#icon-west`}></use>
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle, right: 30 }}>
      <svg width={40} fill="#fdfbf7" className={css.sliderIcon}>
        <use href={`${sprite}#icon-east`}></use>
      </svg>
    </button>
  ),
};

const Gallery = () => {
  return (
    <>
      <Slide {...properties}>
        <div className={css.slide}>
          <img
            src={galleryPhoto1}
            alt="Two people"
            className={css.galleryPhoto}
          />
        </div>
        <div className={css.slide}>
          <img
            src={galleryPhoto2}
            alt="Two people"
            className={css.galleryPhoto}
          />
        </div>
        <div className={css.slide}>
          <img
            src={galleryPhoto3}
            alt="Two people"
            className={css.galleryPhoto}
          />
        </div>
        <div className={css.slide}>
          <img
            src={galleryPhoto4}
            alt="Two people"
            className={css.galleryPhoto}
          />
        </div>
      </Slide>
    </>
  );
};

export default Gallery;

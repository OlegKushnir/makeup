import React, { useState } from 'react';
import Lightbox from 'react-spring-lightbox';
import app from './App.module.css';
import PropTypes from 'prop-types';


const GalleryLightbox = ({ links, currentImage, handleClick }) => {

  const images = [];
  links.map(link =>
    images.push({
      src: `../${link}`,
      loading: 'lazy',
      alt: link,
    })
  );
  const [currentImageIndex, setCurrentIndex] = useState(
    links.indexOf(currentImage)
  );

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);
  const handleClose = () => {
    handleClick('');
  };

  return (
    <Lightbox
      isOpen={true}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      renderPrevButton={() =>
        currentImageIndex !== 0 ? (
          <div className={app.gal__btn__wrapper}>
            <button
              className={app.gal__btn}
              onClick={() => {
                gotoPrevious();
              }}
            >
              &lt;
            </button>
          </div>
        ) : (
          ''
        )
      }
      renderNextButton={() =>
        currentImageIndex < images.length - 1 ? (
          <div className={app.gal__btn__wrapper}>
            <button
              className={app.gal__btn}
              onClick={() => {
                gotoNext();
              }}
            >
              &gt;
            </button>
          </div>
        ) : (
          ''
        )
      }
      className={app.gal}
      onClose={handleClose}
      singleClickToZoom
    />
  );
};

export default GalleryLightbox;

GalleryLightbox.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentImage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

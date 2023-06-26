import app from '../App.module.css';
import css from './Portfolio.module.css';

import { useState } from 'react';
import GalleryLightbox from './GalleryLightbox';
import photos from '../../db/photos.json';

const Brides = () => {
  const [openedLightBox, updateLightBox] = useState(false);
  const [image, updateImage] = useState('');
  const brides = photos.find(page => page.title === 'Brides');
  const { images } = brides;
  const handleClick = img => {
    updateImage(img);
    updateLightBox(!openedLightBox);
  };
  return (
    <section className={css.brides}>
      <h2 className={css.section__title}>Brides</h2>
      <div className={app.wrapper}>
        <ul className={app.list}>
        {images?.map(img => (
          <li key={img} className={css.item}>
              <div className={app.imgWrapper}>
              <img
                className={app.gal__img}
                onClick={() => handleClick(img)}
                src={`../${img?.split('.')[0]}_min.jpg`}
                alt={img?.split('.')[0]}
              ></img>
              </div>
          </li>
        ))}
      </ul>
      </div>
      {openedLightBox ? (
        <GalleryLightbox
          links={images}
          currentImage={image}
          handleClick={handleClick}
        />
      ) : (
        ''
      )}
    </section>
  );
};
export default Brides;

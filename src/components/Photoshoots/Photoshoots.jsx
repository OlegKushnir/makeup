import app from '../App.module.css';
import { useState } from 'react';
import GalleryLightbox from 'components/GalleryLightbox';
import photos from '../../db/photos.json';

const Photoshoots = () => {
  const [openedLightBox, updateLightBox] = useState(false);
  const [image, updateImage] = useState('');

  const photoshoots = photos.find(page => page.title === 'Photoshoots');
  const { images } = photoshoots;
  const handleClick = img => {
    updateImage(img);
    updateLightBox(!openedLightBox);
  };
  return (
    <section className={app.photoshoots}>
      <h2 className={app.section__title}>Photoshoots</h2>
      <div className={app.wrapper}>
        <ul className={app.list}>
        {images?.map(img => (
          <li key={img} className={app.item}>
              {/* <img
               className={app.gal__img}
                onClick={() => handleClick(img)}
                src={`../../${img?.split('.')[0]}_min.jpg`}
                alt={img?.split('.')[0]}
              ></img> */}
              <div className={app.imgWrapper}>
              <img
                className={app.gal__img}
                onClick={() => handleClick(img)}
                src={`${img?.split('.')[0]}_min.jpg`}
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
export default Photoshoots;
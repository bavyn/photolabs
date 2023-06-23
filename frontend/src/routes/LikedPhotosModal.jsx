import React from 'react';

import PhotoList from '../components/PhotoList';
import '../styles/LikedPhotosModal.scss';

const LikedPhotos = (props) => {

  const { closeModal, favePhotos, toggleFave, photos } = props;

  const likedPhotos = photos.filter(photo => favePhotos.includes(photo.id));

  const noLikedPhotos = likedPhotos.length === 0;

  return (
    <div className='liked-photos-modal'>
      <div className='liked-photos-modal__close'>
        <button className='liked-photos-modal--close-button' onClick={closeModal} >
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_428_287)">
              <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_428_287">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <h2 className='liked-photos-modal__header'>Favourite Photos</h2>

      <div className='liked-photos-modal__images'>
        {noLikedPhotos ? (
          <p>Uh oh! You haven&apos;t liked any photos yet :(</p>
        ) : (
          <PhotoList
            photos={likedPhotos}
            favePhotos={favePhotos}
            toggleFave={toggleFave}
          />
        )}
      </div>
    </div>
  );
};


export default LikedPhotos;
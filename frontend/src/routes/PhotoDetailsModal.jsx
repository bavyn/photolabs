import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';
import PhotoFav from '../components/PhotoFav';

const PhotoDetailsModal = (props) => {

  const { onClose, photos, selectedPhoto, favePhotos, toggleFave } = props;

  const suggestedPhotos = Object.values(selectedPhoto.similar_photos);

  //do i need this? i have this in PhotoListItem
  const handleToggleFave = (photoId) => toggleFave(photoId);


  return (
    <div className='photo-details-modal'>
      <div className='photo-details-modal__header'>
        <button className='photo-details-modal--close-button' onClick={onClose} >
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

      <div className="photo-details-modal__content">
        <PhotoFav
          handleClick={() => handleToggleFave(selectedPhoto.id)}
          favourite={favePhotos.includes(selectedPhoto.id)}
        />
        <img className='photo-details-modal__image' src={selectedPhoto.urls.full} />

        <div className="photo-details-modal__bar">
          <img className='photo-details-modal__photographer-profile' src={selectedPhoto.user.profile} />

          <div className="photo-details-modal__photographer-info">
            <p className='photo-details-modal__photographer-details'>{selectedPhoto.user.name}</p>
            <p className='photo-details-modal__photographer-location'>{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
          </div>
        </div>

        <h2 className="photo-details-modal__sug-header">Suggested Photos</h2>

        <div className='photo-details-modal__images'>
          <PhotoList
            photos={suggestedPhotos}
            favePhotos={favePhotos}
            toggleFave={handleToggleFave}
          />
        </div>
      </div>

    </div>
  );

};

export default PhotoDetailsModal;
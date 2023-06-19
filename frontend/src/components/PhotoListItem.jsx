import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFav from './PhotoFav';

const PhotoListItem = (props) => {

  const { id, imageSource, location, profile, username, favePhotos, toggleFave, onClickPhoto } = props;

  // how do i raise these when the id is obtained from the list in PhotoList?
  // toggle favouriting the photo
  const handleToggleFave = () => toggleFave(id);

  // handling error to check that favePhotos is indeed an array
  const isFave = Array.isArray(favePhotos) && favePhotos.includes(id);


  // open modal window
  const handleClickPhoto = () => onClickPhoto(id);

  return (
    <div className='photo-list__item'>
      <PhotoFav handleToggleFave={handleToggleFave} favourite={isFave} />
      <img className='photo-list__image' src={imageSource.regular} onClick={handleClickPhoto}></img>
      <div className='photo-list__footer'>
        <img className='photo-list__user-profile' src={profile}></img>
        <div className='photo-list__user-info'>
          <p className='photo-list__user-details' >{username}</p>
          <p className='photo-list__user-location'>{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
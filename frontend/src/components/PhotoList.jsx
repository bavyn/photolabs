import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const { photos, favePhotos, toggleFave, onClickPhoto } = props;

  const list = photos.map((photo) => (
    <PhotoListItem
    key={photo.id}
    id={photo.id}
    imageSource={photo.urls}
    location={photo.location}
    profile={photo.user.profile}
    username={photo.user.name}
    favePhotos={favePhotos}
    toggleFave={toggleFave}
    onClickPhoto={onClickPhoto}
    />
  ))

  return (
    <ul className="photo-list">
      {list}
    </ul>
  );
};


export default PhotoList;
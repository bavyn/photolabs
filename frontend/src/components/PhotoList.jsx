import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const { photos, favePhotos, openModal, toggleFave, selectedTopic } = props;

  const filteredPhotos = selectedTopic
    ? photos.filter(photo => photo.topic_id === (selectedTopic.id || null))
    : photos;

  const list = filteredPhotos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      id={photo.id}
      imageSource={photo.urls}
      location={photo.location}
      profile={photo.user.profile}
      username={photo.user.name}
      favePhotos={favePhotos}
      openModal={openModal}
      toggleFave={toggleFave}
    />
  ));

  return (
    <ul className="photo-list">
      {list}
    </ul>
  );
};


export default PhotoList;
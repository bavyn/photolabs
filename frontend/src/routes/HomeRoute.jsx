import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        favePhotos={props.favePhotos}
        topics={props.topics}
        setSelectedTopic={props.setSelectedTopic}
        fetchPhotosByTopic={props.fetchPhotosByTopic}
      />
      <PhotoList
        photos={props.photos}
        favePhotos={props.favePhotos}
        onClickPhoto={props.onClickPhoto}
        toggleFave={props.toggleFave}
        selectedTopic={props.selectedTopic}
      />
    </div>
  );
};

export default HomeRoute;
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
        selectTopic={props.selectTopic}
        fetchPhotosByTopic={props.fetchPhotosByTopic}
      />
      <PhotoList
        photos={props.photos}
        favePhotos={props.favePhotos}
        openModal={props.openModal}
        toggleFave={props.toggleFave}
        selectedTopic={props.selectedTopic}
      />
    </div>
  );
};

export default HomeRoute;
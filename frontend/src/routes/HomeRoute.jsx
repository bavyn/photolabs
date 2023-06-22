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
      />
      <PhotoList
      photos={props.photos}
      favePhotos={props.favePhotos}
      onClickPhoto={props.onClickPhoto}
      toggleFave={props.toggleFave}
      />
    </div>
  );
};

export default HomeRoute;
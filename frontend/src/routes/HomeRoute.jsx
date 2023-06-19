import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation favePhotos={props.favePhotos} />
      <PhotoList
      photos={props.photos}
      favePhotos={props.favePhotos}
      toggleFave={props.toggleFave}
      onClickPhoto={props.onClickPhoto}
      />
    </div>
  );
};

export default HomeRoute;
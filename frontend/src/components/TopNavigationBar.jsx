import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const isFavPhotoExist = props.favePhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        selectTopic={props.selectTopic}
        fetchPhotosByTopic={props.fetchPhotosByTopic}
      />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
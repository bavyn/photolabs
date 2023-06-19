import React from 'react';

import '../styles/PhotoFavButton.scss';
import PhotoFavButton from './PhotoFavButton';

function PhotoFav(props) {

  return (
    <>
      <PhotoFavButton handleToggleFave={props.handleToggleFave}
      favourite={props.favourite} />
    </>
  );
}

export default PhotoFav;
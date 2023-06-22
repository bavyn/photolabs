import React from 'react';

import '../styles/PhotoFavButton.scss';
import PhotoFavButton from './PhotoFavButton';

function PhotoFav(props) {

  return (
    <>
      <PhotoFavButton
        toggleFave={props.toggleFave}
        favourite={props.favourite}
        isModal={props.isModal}
      />
    </>
  );
}

export default PhotoFav;
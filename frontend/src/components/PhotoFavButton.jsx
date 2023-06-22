import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const switchFav = props.favourite ? 'filled' : '';
  const fill = props.favourite ? '#C80000' : '#EEEEEE';

  const buttonClass = props.isModal ? 'photo-modal__fav-icon' : 'photo-list__fav-icon';

  return (
    <button className={`${buttonClass} ${switchFav}`} onClick={props.toggleFave} >
      <div className={`${buttonClass}-svg`}>
        <FavIcon className={buttonClass} fill={fill} />
      </div>
    </button>
  );
}

export default PhotoFavButton;
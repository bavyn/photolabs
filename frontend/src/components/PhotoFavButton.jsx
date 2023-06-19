import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const switchFav = props.favourite ? 'filled' : '';
  const fill = props.favourite ? '#C80000' : '#EEEEEE'

  return (
    <button className={`photo-list__fav-icon ${ switchFav }`} onClick={ props.handleToggleFave } >
      <div className='photo-list__fav-icon-svg'>
        <FavIcon className='photo-list__fav-icon' fill={ fill }/>
      </div>
    </button>
  );
}

export default PhotoFavButton;
import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  const favCount = props.favePhotos.length;

  const handleClickLikedPhotos = () => props.openModal();

  return (
    <div className='fav-badge'>
      <button className='fav-badge__button' onClick={handleClickLikedPhotos}>
        <FavIcon
          width={20}
          height={17}
          fill="#C80000"
          displayAlert={!!props.isFavPhotoExist}
        />
      </button>

      <div className='fav-badge__count'>
        <span>{favCount}</span>
      </div>

    </div>
  );
};

export default FavBadge;
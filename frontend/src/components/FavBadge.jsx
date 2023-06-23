import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  const favCount = props.favePhotos.length;

  return (
    <div className='fav-badge'>
        <FavIcon
          width={20}
          height={17}
          fill="#C80000"
          displayAlert={!!props.isFavPhotoExist}
        />

      <div className='fav-badge__count'>
        <span>{favCount}</span>
      </div>

    </div>
  );
};

export default FavBadge;
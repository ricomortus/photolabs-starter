import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onClick, isFavorite}) {
  return (
      <div>
        <button className="photo-list__fav-icon" onClick={onClick}>
        <FavIcon selected={isFavorite}/>
        </button>
      </div>
  );
}

export default PhotoFavButton;
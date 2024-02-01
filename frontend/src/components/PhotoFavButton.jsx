import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//Destructure the onClick function of toggleFavorite and the boolean value of isFavorite
function PhotoFavButton({ onClick, isFavorite}) {
  return (
      <div>
        {/** Attach the onClick function to the button of the heart icon to trigger the toggleFavorite button, which updates the array of favoritePhotos */}
        <button className="photo-list__fav-icon" onClick={onClick}>
        {/**Passes the boolean value of isFavorite into the FavIcon heart badge to toggle the on and off of it */}
        <FavIcon selected={isFavorite}/>
        </button>
      </div>
  );
}

export default PhotoFavButton;
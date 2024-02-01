import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onClick, isFavorite}) {
  // const [like, setLike] = useState(false);

  // const clickHandler = () => {
  //   setLike(prevLike => !prevLike);
  //   console.log('clicked!', like);
  // }

  return (
      <div>
        <button className="photo-list__fav-icon" onClick={onClick}>
        <FavIcon selected={isFavorite}/>
        </button>
      </div>
  );
}

export default PhotoFavButton;


// .reduce .filter or another built-in js array method
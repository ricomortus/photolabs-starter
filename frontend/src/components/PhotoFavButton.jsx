import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  {/**below is the logic I need to move to the new component */}
  const [like, setLike] = useState(false);

  const clickHandler = () => {
    setLike(prevLike => !prevLike);
    console.log('clicked!', like);
  }

  return (
      <div>
        <button className="photo-list__fav-icon" onClick={clickHandler}>
        <FavIcon selected={like}/>
        </button>
      </div>
  );
}

export default PhotoFavButton;
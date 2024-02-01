import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

//Destructure the boolean from TopNavigationBar component isFavPhotoExist
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {/**Using the boolean from isFavPhotoExist to toggle the notification icon on the heart */}
      <FavIcon selected={true} displayAlert={isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;
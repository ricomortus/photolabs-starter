import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import '../App.scss';
import '../styles/PhotoListItem.scss'

const PhotoListItem = (props) => {
  //Destructure photo after
  const { photo, toggleFavorite, isFavorite } = props;

  return (
    <div className="photo-list__item"> 
      <PhotoFavButton onClick={toggleFavorite} isFavorite={isFavorite}/>
      <img src={photo.urls.regular}className="photo-list__image" />
      <div className="photo-list__user-info">
        <img src={photo.user.profile}className="photo-list__user-profile"/>
        <p>{photo.user.name}</p>
        <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
      </div>    
    </div>
  );
}

export default PhotoListItem;

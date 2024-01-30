import React from "react";
import PhotoFavButton from 'components/PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item"> 
      <PhotoFavButton />
      <img src={props.photo.imageSource}className="photo-list__image" />
      <div className="photo-list__user-info">
        <img src={props.photo.profile}className="photo-list__user-profile"/>
        <p>{props.photo.username}</p>
        <p className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</p>
      </div>    
    </div>
  );
}

export default PhotoListItem;

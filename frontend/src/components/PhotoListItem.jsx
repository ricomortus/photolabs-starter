import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import '../styles/PhotoListItem.scss'

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item"> 
      <PhotoFavButton onClick={props.clickHandler}/>
      <img src={props.photo.urls.regular}className="photo-list__image" />
      <div className="photo-list__user-info">
        <img src={props.photo.user.profile}className="photo-list__user-profile"/>
        <p>{props.photo.user.name}</p>
        <p className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</p>
      </div>    
    </div>
  );
}

export default PhotoListItem;

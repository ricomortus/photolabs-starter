import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item"> 
      <img src={props.photo.imageSource}className="photo-image" />
      {/* <img src={props.photo.profile}className="profile-image" />
      <p className="username">{props.photo.username}</p>
      <p className="location">{props.photo.location.city}, {props.photo.location.country}</p> */}
    </div>
  );
}

export default PhotoListItem;

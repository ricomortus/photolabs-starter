import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <>
      <img src={props.imageSource}></img>
      <img src={props.profile}></img>
      <p>{props.username}</p>
      <p>{props.city}, {props.country}</p>
    </>
  )
};

export default PhotoListItem;

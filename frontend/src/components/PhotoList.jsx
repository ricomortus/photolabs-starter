import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, toggleFavorite, favoritePhotos }= props;
  return (
    <ul className="photo-list">
      {photos.map((photo) =>  (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          toggleFavorite={() => toggleFavorite(photo.id)}
          isFavorite={favoritePhotos.includes(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;

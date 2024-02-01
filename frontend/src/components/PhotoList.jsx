import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  //Destructure the photos, toggleFavorite function, and favoritePhotos array props from HomeRoute
  const { photos, toggleFavorite, favoritePhotos, isModalOpen, toggleModal}= props;
  return (
    <ul className="photo-list">
      {photos.map((photo) =>  (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          toggleFavorite={() => toggleFavorite(photo.id)}
          isFavorite={favoritePhotos.includes(photo.id)}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;

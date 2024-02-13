// PhotoList.jsx
import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  // Destructure the photos, toggleFavorite function, and favoritePhotos array props
  const { photos, toggleFavorite, favoritePhotos, isModalOpen, toggleModal, selectedPhoto } = props;
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavorite={toggleFavorite}
          isFavorite={favoritePhotos.includes(photo.id)}
          favoritePhotos={favoritePhotos}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          selectedPhoto={selectedPhoto}
        />
      ))}
    </ul>
  );
};

export default PhotoList;

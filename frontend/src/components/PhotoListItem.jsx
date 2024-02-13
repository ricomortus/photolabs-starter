import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import '../App.scss';
import '../styles/PhotoListItem.scss'

const PhotoListItem = (props) => {
  const { photo, toggleFavorite, isFavorite, favoritePhotos, isModalOpen, toggleModal, selectedPhoto } = props;

  return (
    <div className="photo-list__item"  > 
      <PhotoFavButton onClick={() => toggleFavorite(photo.id)} isFavorite={isFavorite} />
      <img src={photo.urls.regular} className="photo-list__image" onClick={() => toggleModal(photo)}/>
      {isModalOpen && selectedPhoto === photo && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          photo={photo}
          isFavorite={isFavorite}
        />
      )}
      <div className="photo-list__user-info">
        <img src={photo.user.profile} className="photo-list__user-profile"/>
        <p>{photo.user.name}</p>
        <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
      </div>    
    </div>
  );
}

export default PhotoListItem;

// PhotoDetailsModal.jsx
import React from 'react';
import PhotoList from '../components/PhotoList'
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ toggleModal, photo, favoritePhotos, toggleFavorite }) => {
  const similarPhotosArray = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal" style={{ zIndex: 10000 }}>
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__image">
        <img src={photo.urls.full} alt={photo.description} className="photo-details-modal__image" />
        <div className="photo-details-modal__header">
          <img src={photo.user.profile} className="photo-list__user-profile"/>
          <p>{photo.user.name}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>  
      </div>
      <div className="photo-details-modal__similar-photos">
        <PhotoList
          photos={similarPhotosArray}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          isModal={true} // We pass a new prop to indicate that this list is inside the modal
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

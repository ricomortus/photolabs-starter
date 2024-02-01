import React from 'react';
import PhotoList from '../components/PhotoList'
import PhotoFavButton from '../components/PhotoFavButton'
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({toggleModal, photo, favoritePhotos, toggleFavorite, isFavorite}) => {
  console.log(photo);
  const { similar_photos } = photo;
  const similarPhotosArray = Object.values(similar_photos);
  console.log(similarPhotosArray);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton onClick={toggleFavorite} isFavorite={isFavorite}/>
      <div className="photo-details-modal__image">
        <img src={photo.urls.full} alt={photo.description} className="photo-details-modal__image" />
        <div className="photo-details-modal__header">
          <img src={photo.user.profile}className="photo-list__user-profile"/>
          <p>{photo.user.name}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>  
      </div>
      <div className="photo-details-modal__similar-photos">
      <PhotoList photos={similarPhotosArray} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} />
      </div>
      
    </div>
  )
};

export default PhotoDetailsModal;

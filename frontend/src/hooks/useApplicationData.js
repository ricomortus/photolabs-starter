// hooks/useApplicationData.js
import { useState } from 'react';

const useApplicationData = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleModal = (photo = null) => {
    setSelectedPhoto(photo);
    setModalOpen(!isModalOpen);
  };

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => {
      return prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId];
    });
  };

  // Corresponds to onClosePhotoDetailsModal
  const onClosePhotoDetailsModal = () => {
    setModalOpen(false);
  };

  // Corresponds to setPhotoSelected
  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
  };

  // Corresponds to updateToFavPhotoIds
  const updateToFavPhotoIds = (photoId) => {
    toggleFavorite(photoId);
  };

  return {
    state: {
      isModalOpen,
      selectedPhoto,
      favoritePhotos,
    },
    toggleModal,
    toggleFavorite,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
  };
};

export default useApplicationData;

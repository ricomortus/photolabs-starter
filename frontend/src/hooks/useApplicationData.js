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

  return {
    state: {
      isModalOpen,
      selectedPhoto,
      favoritePhotos,
    },
    toggleModal,
    toggleFavorite
  };
};

export default useApplicationData;

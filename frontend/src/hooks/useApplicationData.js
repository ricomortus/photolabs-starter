// // hooks/useApplicationData.js
// import { useState } from 'react';

// const useApplicationData = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [favoritePhotos, setFavoritePhotos] = useState([]);

//   const toggleModal = (photo = null) => {
//     setSelectedPhoto(photo);
//     setModalOpen(!isModalOpen);
//   };

//   const toggleFavorite = (photoId) => {
//     setFavoritePhotos((prevFavorites) => {
//       return prevFavorites.includes(photoId)
//         ? prevFavorites.filter((id) => id !== photoId)
//         : [...prevFavorites, photoId];
//     });
//   };

//   return {
//     state: {
//       isModalOpen,
//       selectedPhoto,
//       favoritePhotos,
//     },
//     toggleModal,
//     toggleFavorite
//   };
// };

// export default useApplicationData;


// hooks/useApplicationData.js
import { useReducer } from 'react';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: [],
};

const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhoto: action.payload || null, // Optionally set selectedPhoto when toggling modal
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.favoritePhotos.includes(action.payload);
      const favoritePhotos = isFavorite
        ? state.favoritePhotos.filter(id => id !== action.payload)
        : [...state.favoritePhotos, action.payload];
      return {
        ...state,
        favoritePhotos,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (photo = null) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: photo });
  };

  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
  };

  return {
    state,
    toggleModal,
    selectPhoto,
    toggleFavorite,
  };
};

export default useApplicationData;

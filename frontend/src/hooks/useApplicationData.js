// Import the useReducer hook from React.
import { useReducer, useEffect } from 'react';

// Define the initial state of the application.
const initialState = {
  photoData: [],
  topicData: [],
  isModalOpen: false, // Whether the modal is open or closed.
  selectedPhoto: null, // The photo currently selected, null if no photo is selected.
  favoritePhotos: [], // Array of photo IDs marked as favorites.
};

// Define action types to avoid typos and make actions easily manageable.
const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL', // Action to toggle the modal's visibility.
  SELECT_PHOTO: 'SELECT_PHOTO', // Action to select a photo.
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE', // Action to add/remove a photo from favorites.
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
};

// The reducer function that will handle state changes based on actions.
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      // Toggle the modal's visibility and optionally set a selected photo.
      return {
        ...state, // Spread the current state to maintain unaltered state parts.
        isModalOpen: !state.isModalOpen, // Invert the isModalOpen state.
        selectedPhoto: action.payload || null, // Set selectedPhoto if provided.
      };
    case ACTIONS.SELECT_PHOTO:
      // Set the selected photo.
      return {
        ...state, // Spread the current state.
        selectedPhoto: action.payload, // Update selectedPhoto with the payload.
      };
      case ACTIONS.TOGGLE_FAVORITE:
        // Check if the photo is already a favorite.
        const isFavorite = state.favoritePhotos.some(favPhoto => favPhoto.id === action.payload.id);
        // Add or remove the photo from the favorites list.
        const favoritePhotos = isFavorite
          ? state.favoritePhotos.filter(photo => photo.id !== action.payload.id) // Remove if exists.
          : [...state.favoritePhotos, action.payload]; // Add if not exists.
        return {
          ...state, // Spread the current state.
          favoritePhotos, // Update the favoritePhotos list.
      };
      
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      }
    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload,
      };
    default:
      // Handle unknown action types.
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// The custom hook that uses useReducer for state management.
const useApplicationData = () => {
  //state = initialState & dispatch = reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: data }))
      .catch(error => console.error("Failed to fetch photos for topic", error));
  };

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data}));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data}));
  }, []);

  // Function to toggle modal visibility.
  const toggleModal = (photo = null) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: photo });
  };

  // Function to select a photo.
  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  // Function to toggle a photo's favorite status.
  const toggleFavorite = (photoId) => {
    console.log('Toggling favorite for photo ID:', photoId);
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
  };

  // Return the state and functions to interact with the state.
  return {
    state, // The current state of the application.
    toggleModal, // Function to open/close the modal and optionally set a selected photo.
    selectPhoto, // Function to set a selected photo.
    toggleFavorite, // Function to add/remove a photo from favorites.
    fetchPhotosByTopic,
  };
};

// Export the custom hook to be used in other parts of the application.
export default useApplicationData;

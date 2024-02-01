// App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from '../src/mocks/photos';
import topics from '../src/mocks/topics';
import useApplicationData from './hooks/useApplicationData'; // Make sure the path is correct

const App = () => {
  const {
    state,
    toggleModal,
    toggleFavorite
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        isModalOpen={state.isModalOpen}
        selectedPhoto={state.selectedPhoto}
        toggleModal={toggleModal}
        toggleFavorite={toggleFavorite}
        favoritePhotos={state.favoritePhotos}
      />
    </div>
  );
};

export default App;

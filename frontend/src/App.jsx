// frontend/src/App.jsx
import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from '../src/mocks/photos';
import topics from '../src/mocks/topics';

 const App = () => {
  //Create state management for toggling modal
  const [ isModalOpen, setModalOpen ] = useState(false);
  //Create state management for which photo object is selected
  const [ selectedPhoto, setSelectedPhoto ] = useState(null);

  //Create function to toggle modal
  const toggleModal = (photo = null) => {
    //Change the state of selectedPhoto to the selected photo object
    setSelectedPhoto(photo);
    //Change the state of isModalOpen to the opposite boolean
    setModalOpen(!isModalOpen);
  };

  //set the default favoritePhotos state to am empty array and extract the setter function as setFavoritePhotos
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  //create a toggleFavorite function
  const toggleFavorite = (photoId) => {
    //use the setter function to set the state of favorited or unfavorited
    setFavoritePhotos(prevFavorites => {
      //check whether the previous state of favoritePhotos(prevFavorites) contains the photoId, if it does unfavourite it by filtering it out, otherwise, add the photoId to the favorites array
      return prevFavorites.includes(photoId) ? prevFavorites.filter(id => id !== photoId) : [...prevFavorites, photoId];
    });
  };
  


  return (
   <div className="App">
     <HomeRoute photos={photos} topics={topics} isModalOpen={isModalOpen} selectedPhoto={selectedPhoto} toggleModal={toggleModal} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos}/>
   </div>
 )}


export default App;

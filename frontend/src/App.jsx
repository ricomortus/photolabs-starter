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

  return (
   <div className="App">
     <HomeRoute photos={photos} topics={topics} isModalOpen={isModalOpen} selectedPhoto={selectedPhoto} toggleModal={toggleModal}/>
   </div>
 )}


export default App;

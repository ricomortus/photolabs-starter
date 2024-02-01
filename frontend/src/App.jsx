// frontend/src/App.jsx
import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from '../src/mocks/photos';
import topics from '../src/mocks/topics';

 const App = () => {
  //Create state management for toggling modal
  const [ isModalOpen, setModalOpen ] = useState(false);

  //Create function to toggle modal
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
   <div className="App">
     <HomeRoute photos={photos} topics={topics} isModalOpen={isModalOpen} toggleModal={toggleModal}/>
   </div>
 )}


export default App;

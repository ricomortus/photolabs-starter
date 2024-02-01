import React, { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
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

  const { isModalOpen, toggleModal } = props;

  return (
    <div className="home-route">
      {/* Pass down the length of the favoritePhotos array so it can check whether or not there are stored favourites to toggle the notification on the heart*/}
      <TopNavigation topics={props.topics} favoriteCount={favoritePhotos.length}/>
      {/** Pass down the toggleFavorite function as props and the favoritePhotos array into PhotoList */}
      <PhotoList photos={props.photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    </div>
  );
};

export default HomeRoute;

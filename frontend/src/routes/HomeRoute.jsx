import React, { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  

  const { isModalOpen, toggleModal, selectedPhoto, toggleFavorite, favoritePhotos } = props;

  return (
    <div className="home-route">
      {/* Pass down the length of the favoritePhotos array so it can check whether or not there are stored favourites to toggle the notification on the heart*/}
      <TopNavigation topics={props.topics} favoriteCount={favoritePhotos.length}/>
      {/** Pass down the toggleFavorite function as props and the favoritePhotos array into PhotoList */}
      <PhotoList photos={props.photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} isModalOpen={isModalOpen} toggleModal={toggleModal} selectedPhoto={selectedPhoto}/>
    </div>
  );
};

export default HomeRoute;

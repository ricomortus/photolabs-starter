import React, { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavoritePhotos(prevFavorites => {
      return prevFavorites.includes(photoId) ? prevFavorites.filter(id => id !== photoId) : [...prevFavorites, photoId];
    })
  }

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favoriteCount={favoritePhotos.length}/>
      <PhotoList photos={props.photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos}/>
    </div>
  );
};

export default HomeRoute;

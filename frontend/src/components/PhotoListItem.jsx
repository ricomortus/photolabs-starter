import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModel from "../routes/PhotoDetailsModal";
import '../App.scss';
import '../styles/PhotoListItem.scss'

const PhotoListItem = (props) => {
  //Destructure photo after, toggleFavorite function which passes in the photo id as its argument, and isFavorite which checks whether the favoritePhotos array includes the current photo and returns a boolean
  const { photo, toggleFavorite, isFavorite, isModalOpen, toggleModal } = props;

  // //Create state management for toggling modal
  // const [ isModalOpen, setModalOpen ] = useState(false);

  // //Create function to toggle modal
  // const toggleModal = () => {
  //   setModalOpen(!isModalOpen);
  // };

  return (
    <div className="photo-list__item"  > 
      {/**Pass the toggleFavorite function to the onClick event and the boolean value of isFavorite */}
      <PhotoFavButton onClick={toggleFavorite} isFavorite={isFavorite}/>
      <img src={photo.urls.regular} className="photo-list__image" onClick={toggleModal}/>
      {isModalOpen && < PhotoDetailsModel toggleModal={toggleModal} photo={photo}/> }
      <div className="photo-list__user-info">
        <img src={photo.user.profile}className="photo-list__user-profile"/>
        <p>{photo.user.name}</p>
        <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
      </div>    
    </div>
  );
}

export default PhotoListItem;

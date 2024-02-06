import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  //destructure the topics and favoriteCount passed down as props from HomeRoute component
  const { topics, favoriteCount, fetchPhotosByTopic } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/**Pass down the destructured topics prop to TopicList for rendering */}
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      {/**Pass down a boolean in the FavBadge by checking whether favoriteCount > 0 */}
      <FavBadge isFavPhotoExist={favoriteCount > 0}/>
    </div>
  )
}

export default TopNavigation;
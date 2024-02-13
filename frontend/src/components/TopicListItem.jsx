import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, fetchPhotosByTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(topic.id)}>
      <p className="top-nav-bar__topic-list">{topic.title}</p>
    </div>
  );
};

export default TopicListItem;

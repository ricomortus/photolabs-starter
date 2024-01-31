import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <p className="top-nav-bar__topic-list">{props.topic.title}</p>
    </div>
  );
};

export default TopicListItem;

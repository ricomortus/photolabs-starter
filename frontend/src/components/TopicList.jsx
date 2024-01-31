import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const topics = props.topics;
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => <TopicListItem key={topic.id} topic={topic}/>)}
    </div>
  );
};

export default TopicList;

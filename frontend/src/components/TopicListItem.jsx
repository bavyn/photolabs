import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { id, title, setSelectedTopic, fetchPhotosByTopic } = props;

  const handleClickTopic = () => {
    setSelectedTopic(id);
    fetchPhotosByTopic(id);
  };

  return (
    <div className="topic-list__item" onClick={handleClickTopic}>
      <span>{title}</span>
    </div>
  );
};


export default TopicListItem;
import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';


const TopicList = (props) => {

  const list = props.topics.map((topic) => (
    <TopicListItem
    key={topic.id}
    id={topic.id}
    slug={topic.slug}
    title={topic.title}
    />
  ))

  return (
    <div className="top-nav-bar__topic-list">
      {list}
    </div>);
};


export default TopicList;
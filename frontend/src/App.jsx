import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios(`/api/topics`)
      .then(response => setTopics(response.data));
  }, []);


  const {
    photos,
    favePhotos,
    toggleFave,
    modal,
    openModal,
    closeModal,
    selectedPhoto,
    setPhotoData,
    setTopicData,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        onClickPhoto={openModal}
        photos={photos}
        favePhotos={favePhotos}
        toggleFave={toggleFave}
      />
      {modal && <PhotoDetailsModal
        onClose={closeModal}
        photos={photos}
        selectedPhoto={selectedPhoto}
        favePhotos={favePhotos}
        toggleFave={toggleFave}
      />}
    </div>
  );
};

export default App;
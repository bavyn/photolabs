import React from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const {
    photos,
    topics,
    favePhotos,
    toggleFave,
    modal,
    openModal,
    closeModal,
    selectedPhoto,
    selectedTopic,
    selectTopic,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        openModal={openModal}
        photos={photos}
        favePhotos={favePhotos}
        toggleFave={toggleFave}
        selectedTopic={selectedTopic}
        selectTopic={selectTopic}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {modal && <PhotoDetailsModal
        closeModal={closeModal}
        selectedPhoto={selectedPhoto}
        favePhotos={favePhotos}
        toggleFave={toggleFave}
      />}
    </div>
  );
};

export default App;
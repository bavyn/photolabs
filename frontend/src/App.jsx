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
    setSelectedTopic,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        onClickPhoto={openModal}
        photos={photos}
        favePhotos={favePhotos}
        toggleFave={toggleFave}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        fetchPhotosByTopic={fetchPhotosByTopic}
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
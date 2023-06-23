import React from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import LikedPhotosModal from './routes/LikedPhotosModal';

const App = () => {

  const {
    photos,
    topics,
    favePhotos,
    toggleFave,
    displayPhotoDetailsModal,
    displayLikedPhotosModal,
    openModal,
    closeModal,
    selectedPhoto,
    selectedTopic,
    selectTopic,
    fetchPhotosByTopic,
    openLikedPhotosModal,
    closeLikedPhotosModal
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
        openLikedPhotosModal={openLikedPhotosModal}
      />
      {displayPhotoDetailsModal && <PhotoDetailsModal
        closeModal={closeModal}
        selectedPhoto={selectedPhoto}
        favePhotos={favePhotos}
        toggleFave={toggleFave}
      />}
      {displayLikedPhotosModal && <LikedPhotosModal
        closeModal={closeLikedPhotosModal}
        favePhotos={favePhotos}
        toggleFave={toggleFave}
        photos={photos}
      />}
    </div>
  );
};

export default App;
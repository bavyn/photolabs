import React from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const {
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
import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const { favePhotos, handleToggleFave, modal, openModal, closeModal, selectedPhoto } = useApplicationData();
  



  return (
    <div className="App">
      <HomeRoute
        onClickPhoto={openModal}
        photos={photos}
        favePhotos={favePhotos}
        handleToggleFave={handleToggleFave}
        />
      {modal && <PhotoDetailsModal
        onClose={closeModal}
        photos={photos}
        selectedPhoto={selectedPhoto}
        favePhotos={favePhotos}
        handleToggleFave={handleToggleFave}
      />}
    </div>
  );
};

export default App;
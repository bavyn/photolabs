import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';

const App = () => {

  // favourite photos
  const [favePhotos, setFavePhotos] = useState([]);

  const toggleFave = (photo) => {
    // check if already fave
    if (favePhotos.includes(photo)) {
      // unfavourite
      const filtered = favePhotos.filter((favePhotos) => favePhotos !== photo);
      return setFavePhotos(filtered);
    }
    // favourite
    setFavePhotos([...favePhotos, photo]);
    console.log('fave button clicked for photo:', photo);
  };
    // toggle favouriting the photo
    const handleToggleFave = (id) => toggleFave(id);

  // modal
  const [modal, setModal] = useState(null);

  const openModal = (photoId) => {
    setModal(photoId);
    console.log('photo clicked', photoId);
  };

  const closeModal = () => setModal(null);
  
  const selectedPhoto = photos.find((photo) => photo.id === modal);


  return (
    <div className="App">
      <HomeRoute
        onClickPhoto={openModal}
        photos={photos}
        favePhotos={favePhotos}
        toggleFave={toggleFave}
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
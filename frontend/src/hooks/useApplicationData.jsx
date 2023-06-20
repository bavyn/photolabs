import React from "react";
import { useState } from "react";
import photos from "../mocks/photos";

export default function useApplicationData() {
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
  
  // define selectedPhoto for modal
  const selectedPhoto = photos.find((photo) => photo.id === modal);

  return { favePhotos, setFavePhotos, toggleFave, handleToggleFave, modal, setModal, openModal, closeModal, selectedPhoto };
}
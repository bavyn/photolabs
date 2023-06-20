import React, { useReducer } from "react";
import photos from "../mocks/photos";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const appInitialState = {
  favPhotoIds: [],
  selectedPhoto: {},
  photos: [],
  topics: [],
  selectedPhoto: {},
  displayPhotoDetails: false
}; 

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED: {
      return {
        ...state,
        favPhotoIds: [...state.favePhotos, action.payload.photo]
      }
    }

  }
}



export default function useApplicationData() {


  // reducer
  const [state, dispatch] = useReducer(reducer, appInitialState);

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
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: {photo}})
    // setFavePhotos([...favePhotos, photo]);
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

  return { favePhotos, handleToggleFave, modal, openModal, closeModal, selectedPhoto };
}


// import React, { useReducer, useState } from "react";
// import photos from "../mocks/photos";

// const ACTIONS = {
//   OPEN_MODAL: 'OPEN_MODAL',
//   CLOSE_MODAL: 'CLOSE_MODAL'
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.OPEN_MODAL:
//       return
//   }
// }

// export default function useApplicationData() {

//   // reducer
//   const [state, dispatch] = useReducer(reducer,);


//   // modal
//   const [modal, setModal] = useState(null);

//   const openModal = (photoId) => {
//     setModal(photoId);
//     console.log('photo clicked', photoId);
//   };

//   const closeModal = () => setModal(null);

//   // define selectedPhoto for modal
//   const selectedPhoto = photos.find((photo) => photo.id === modal);


//   // favourite photos
//   const [favePhotos, setFavePhotos] = useState([]);
//   const toggleFave = (photo) => {
//     // check if already fave
//     if (favePhotos.includes(photo)) {
//       // unfavourite
//       const filtered = favePhotos.filter((favePhotos) => favePhotos !== photo);
//       return setFavePhotos(filtered);
//     }
//     // favourite
//     setFavePhotos([...favePhotos, photo]);
//     console.log('fave button clicked for photo:', photo);
//   };

//   // toggle favouriting the photo
//   const handleToggleFave = (id) => toggleFave(id);

//   return { favePhotos, handleToggleFave, modal, openModal, closeModal, selectedPhoto };
// }
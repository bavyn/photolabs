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
  selectedPhoto: null,
  photos: [],
  topics: [],
  displayPhotoDetails: false
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: {
      return {
        ...state,
        favPhotoIds: [...state.favPhotoIds, action.payload.photo]
      };
    }
    case ACTIONS.FAV_PHOTO_REMOVED: {
      const filtered = state.favPhotoIds.filter((id) => id !== action.payload.photo
      );
      return {
        ...state,
        favPhotoIds: filtered
      };
    }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos
      };

    case ACTIONS.SET_TOPIC_DATA: {
      return {
        ...state,
        topics: action.payload.topics
      };
    }
    case ACTIONS.SELECT_PHOTO: {
      return {
        ...state,
        selectedPhoto: action.payload.photo
      };
    }
    case ACTIONS.DISPLAY_PHOTO_DETAILS: {
      return {
        ...state,
        displayPhotoDetails: action.payload.display
      };
    }
    default:
      return state;
  }
}



export default function useApplicationData() {

  // reducer
  const [state, dispatch] = useReducer(reducer, appInitialState);

  // favourite photos
  //const [favePhotos, setFavePhotos] = useState([]);
  const toggleFave = (photoId) => {
    // check if already fave
    if (state.favPhotoIds.includes(photoId)) {
      // unfavourite
      return dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photo: photoId } });
      // const filtered = favePhotos.filter((favePhotos) => favePhotos !== photo);
      // return setFavePhotos(filtered);
    }
    // favourite
    return dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photo: photoId } });
    // setFavePhotos([...favePhotos, photo]);
    // console.log('fave button clicked for photo:', photo);
  };

  // toggle favouriting the photo
  // const handleToggleFave = (id) => toggleFave(id);

  // modal
  // const [modal, setModal] = useState(null);

  const openModal = (photoId) => {
    // setModal(photoId);
    // console.log('photo clicked', photoId);
    const findPhoto = photos.find(photo => photo.id === photoId);
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: findPhoto } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { display: true } });
  };

  // const closeModal = () => setModal(null);
  const closeModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: null } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { display: false } });
  };

  // define selectedPhoto for modal
  const selectedPhoto = photos.find((photo) => photo.id === state.selectedPhoto);

  // not using these yet
  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
  };

  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  return {
    favePhotos: state.favPhotoIds,
    toggleFave,
    modal: state.displayPhotoDetails,
    openModal,
    closeModal,
    selectedPhoto: state.selectedPhoto,
    setPhotoData,
    setTopicData,
  };
}

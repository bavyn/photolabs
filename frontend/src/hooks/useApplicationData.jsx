import React, { useEffect, useReducer } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SELECT_TOPIC: 'SELECT_TOPIC'
};

const appInitialState = {
  favPhotoIds: [],
  selectedPhoto: null,
  selectedTopic: null,
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
    case ACTIONS.SELECT_TOPIC: {
      return {
        ...state,
        selectedTopic: action.payload.topic
      };
    }
    default:
      return state;
  }
}

export default function useApplicationData() {

  // get photos from api
  useEffect(() => {
    axios(`/api/photos`)
      .then(response => setPhotoData(response.data));
  }, []);

  // get topics from api
  useEffect(() => {
    axios(`/api/topics`)
      .then(response => setTopicData(response.data));
  }, []);

  // get photos by topic
  const fetchPhotosByTopic = (topicId) => {
    axios(`/api/topics/photos/${topicId}`)
      .then(response => setPhotoData(response.data))
      .catch(error => console.log(error));
  };

  // reducer
  const [state, dispatch] = useReducer(reducer, appInitialState);

  // favourite photos
  const toggleFave = (photoId) => {
    // check if already fave
    if (state.favPhotoIds.includes(photoId)) {
      // unfavourite
      return dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photo: photoId } });
    }
    // favourite
    return dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photo: photoId } });
  };

  // modal
  const openModal = (photoId) => {
    const findPhoto = state.photos.find(photo => photo.id === photoId);
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: findPhoto } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { display: true } });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: null } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { display: false } });
  };

  // set and select photo and topic data
  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
  };

  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  const selectTopic = (topicId) => {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: { topicId } });
  };

  return {
    photos: state.photos,
    topics: state.topics,
    favePhotos: state.favPhotoIds,
    toggleFave,
    modal: state.displayPhotoDetails,
    openModal,
    closeModal,
    selectedPhoto: state.selectedPhoto,
    selectedTopic: state.selectedTopic,
    selectTopic,
    fetchPhotosByTopic
  };
}

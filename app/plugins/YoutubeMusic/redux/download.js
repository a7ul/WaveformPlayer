import { createAction } from 'redux-actions';

export const DOWNLOAD_GET_META = 'YOUTUBE_MUSIC/DOWNLOAD_GET_META';
export const DOWNLOAD_START = 'YOUTUBE_MUSIC/DOWNLOAD_START';
export const DOWNLOAD_SUCCESS = 'YOUTUBE_MUSIC/DOWNLOAD_SUCCESS';
export const DOWNLOAD_FAILED = 'YOUTUBE_MUSIC/DOWNLOAD_FAILED';


// Initial State
export const defaultState = [
//   {
//     url,
//     args,
//     progress,
//     status: ['QUEUED', 'SUCCESS', 'FAILED', 'INPROGRESS']
//   }
];

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case DOWNLOAD_START: {
      return { ...state };
    }
    case DOWNLOAD_SUCCESS: {
      return { ...state };
    }
    case DOWNLOAD_FAILED: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

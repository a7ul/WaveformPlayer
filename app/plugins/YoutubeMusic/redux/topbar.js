import { createAction } from 'redux-actions';

const SIDEMENU_TOGGLE = 'SIDEMENU/SET_SIDE_MENU_VISIBILITY';
const SET_CURRENT_URL = 'YOUTUBE_MUSIC/SET_CURRENT_URL';
const SET_PROGRESS = 'YOUTUBE_MUSIC/SET_PROGRESS';

export const DOWNLOAD_GET_META = 'YOUTUBE_MUSIC/DOWNLOAD_GET_META';
export const DOWNLOAD_START = 'YOUTUBE_MUSIC/DOWNLOAD_START';
export const DOWNLOAD_SUCCESS = 'YOUTUBE_MUSIC/DOWNLOAD_SUCCESS';
export const DOWNLOAD_FAILED = 'YOUTUBE_MUSIC/DOWNLOAD_FAILED';

export const sideMenuToggle = createAction(SIDEMENU_TOGGLE);
export const setCurretUrl = createAction(SET_CURRENT_URL);
export const setProgress = createAction(SET_PROGRESS);
export const startDownload = createAction(DOWNLOAD_START);

// Initial State
export const defaultState = {
  currentUrl: '',
  inProgress: false,
  downloads: []
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_URL: {
      const currentUrl = action.payload;
      return { ...state, currentUrl };
    }
    case SET_PROGRESS: {
      const inProgress = action.payload;
      return { ...state, inProgress };
    }
    default: {
      return state;
    }
  }
};

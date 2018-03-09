import { createAction } from 'redux-actions';

const SIDEMENU_TOGGLE = 'SIDEMENU/SET_SIDE_MENU_VISIBILITY';
const SET_CURRENT_URL = 'YOUTUBE_MUSIC/SET_CURRENT_URL';
const SET_PROGRESS = 'YOUTUBE_MUSIC/SET_PROGRESS';

export const sideMenuToggle = createAction(SIDEMENU_TOGGLE);
export const setCurretUrl = createAction(SET_CURRENT_URL);
export const setProgress = createAction(SET_PROGRESS);

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

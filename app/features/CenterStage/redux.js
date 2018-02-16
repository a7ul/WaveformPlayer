import { createAction } from 'redux-actions';

const SET_CENTER_VIEW_PLUGIN = 'CENTERSTAGE/SET_CENTER_VIEW_PLUGIN';

// Actions
export const setCenterView = createAction(SET_CENTER_VIEW_PLUGIN);

// Initial State
const defaultState = {
  activeView: 'com.yplayer.version'
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CENTER_VIEW_PLUGIN: {
      return { ...state, activeView: action.payload };
    }
    default: {
      return state;
    }
  }
};

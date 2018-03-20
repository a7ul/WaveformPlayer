import { createAction } from 'redux-actions';

const SHOW_MODAL = 'YOUTUBE_MUSIC/SHOW_MODAL';
const HIDE_MODAL = 'YOUTUBE_MUSIC/HIDE_MODAL';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

// Initial State
export const defaultState = {
  visible: false,
  props: {}
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      const props = action.payload;
      return { ...state, visible: true, props };
    }
    case HIDE_MODAL: {
      const props = action.payload;
      return { ...state, visible: false, props };
    }
    default: {
      return state;
    }
  }
};

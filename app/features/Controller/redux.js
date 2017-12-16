const PLAY_TOGGLE = 'CONTROLLER/PLAY_TOGGLE';

// Actions
export const togglePlay = () => ({
  type: PLAY_TOGGLE
});

// Initial State

const defaultState = {
  isPlaying: false
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_TOGGLE: {
      return {...state, isPlaying: !state.isPlaying};
    }
    default: {
      return state;
    }
  }
};

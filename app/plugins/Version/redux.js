const VERSION_UPDATE = 'VERSION/VERSION_UPDATE';

// Actions
export const setVersion = (versionData) => ({
  type: VERSION_UPDATE,
  payload: versionData
});

// Initial State

const defaultState = {
  ffmpegVersion: null,
  playerVersion: '1.0.0',
  youtubeDLVersion: null
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case VERSION_UPDATE: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

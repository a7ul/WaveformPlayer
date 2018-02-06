const ADD_TO_PLAYLIST = 'PLAYLIST/ADD_TO_PLAYLIST';

// Actions
export const addToPlaylist = (song) => ({
  type: ADD_TO_PLAYLIST,
  payload: song
});

// Initial State

const defaultState = {
  songs: []
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST: {
      return { ...state, songs: [...state.songs, action.payload] };
    }
    default: {
      return state;
    }
  }
};

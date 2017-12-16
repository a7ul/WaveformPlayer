const CONTROLLER_PLAY = 'CONTROLLER_PLAY';

// Actions
export const playAction = () => ({
  type: CONTROLLER_PLAY
});

// Reducers
export const reducer = (state, action) => {
  switch (action.type) {
  case CONTROLLER_PLAY:
    return {};
  default:
    return {};
  }
};

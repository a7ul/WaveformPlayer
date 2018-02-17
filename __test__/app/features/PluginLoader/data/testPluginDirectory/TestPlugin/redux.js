import { createAction } from 'redux-actions';

const TEST_ACTION = 'TEST_PLUGIN/SOME_ACTION';

// Actions
export const testAction = createAction(TEST_ACTION);

// Initial State

const defaultState = {

};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

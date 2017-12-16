import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  test: (state = {}) => {
    return state;
  },
  router: routerReducer
});

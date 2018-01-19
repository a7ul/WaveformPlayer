import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {reducer as controller} from '../features/Controller/redux';
// import {reducer as version} from '../features/Version/redux';
// import {reducer as playlist} from '../features/Playlist/redux';

export default combineReducers({
  controller,
  // version,
  // playlist,
  router
});

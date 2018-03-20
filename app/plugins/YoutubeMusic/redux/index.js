import { combineReducers } from 'redux';
import { reducer as download } from './download';
import { reducer as modal } from './modal';
import { reducer as topbar } from './topbar';

export const reducer = combineReducers({
  download,
  topbar,
  modal
});

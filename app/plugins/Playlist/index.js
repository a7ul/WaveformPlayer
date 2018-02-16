import PlaylistView from './PlaylistView';
import { reducer } from './redux';
import menuItem from './menuItem';
import sideMenuItem from './sideMenuItem';

import { PLUGIN_ID, PLUGIN_NAME } from './config';

export const init = () => ({
  name: PLUGIN_NAME,
  id: PLUGIN_ID,
  menuItem,
  reducer,
  sideMenuItem,
  settings: [],
  view: PlaylistView
});

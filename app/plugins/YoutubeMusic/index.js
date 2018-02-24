import YoutubeMusicView from './YoutubeMusicView';
import menuItem from './menuItem';
import sideMenuItem from './sideMenuItem';
import { reducer } from './redux';

import { PLUGIN_ID, PLUGIN_NAME } from './config';

export const init = () => ({
  name: PLUGIN_NAME,
  id: PLUGIN_ID,
  menuItem,
  sideMenuItem,
  settings: [],
  view: YoutubeMusicView,
  reducer
});

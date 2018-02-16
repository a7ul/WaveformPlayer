import YoutubeMusicView from './YoutubeMusicView';
import menuItem from './menuItem';
import sideMenuItem from './sideMenuItem';

import { PLUGIN_ID, PLUGIN_NAME } from './config';

export const init = () => ({
  name: PLUGIN_NAME,
  id: PLUGIN_ID,
  menuItem,
  sideMenuItem,
  settings: [],
  view: YoutubeMusicView
});

import VersionView from './VersionView';
import menuItem from './menuItem';
import sideMenuItem from './sideMenuItem';

import { PLUGIN_ID, PLUGIN_NAME } from './config';

export const init = () => ({
  name: PLUGIN_NAME,
  id: PLUGIN_ID,
  menuItem,
  reducer: null,
  saga: null,
  sideMenuItem,
  settings: [],
  view: VersionView
});

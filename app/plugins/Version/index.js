import VersionView from './VersionView';
import { reducer } from './redux';
import saga from './saga';
import menuItem from './menuItem';
import sideMenuItem from './sideMenuItem';

import { PLUGIN_ID, PLUGIN_NAME } from './config';

export const init = () => ({
  name: PLUGIN_NAME,
  id: PLUGIN_ID,
  menuItem,
  reducer,
  saga,
  sideMenuItem,
  settings: [],
  view: VersionView
});

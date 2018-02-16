import VersionView from './VersionView';
import { reducer } from './redux';
import saga from './saga';
import menuItem from './menuItem';
import sideMenuItem from './sideMenuItem';

export const init = () => ({
  name: 'version',
  id: 'com.yplayer.version',
  menuItem,
  reducer,
  saga,
  sideMenuItem,
  settings: [],
  view: VersionView
});

import PlaylistView from './PlaylistView';
import { reducer } from './redux';
import menuItem from './menuItem';
import sideMenuItem from './sideMenuItem';

export const init = () => ({
  name: 'playlist',
  id: 'com.yplayer.playlist',
  menuItem,
  sideMenuItem,
  reducer,
  settings: [],
  view: PlaylistView
});

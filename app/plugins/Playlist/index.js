import PlaylistView from './PlaylistView';
import { reducer } from './redux';
import menu from './menuItem';

export const init = () => ({
  name: 'playlist',
  menuItem: menu,
  reducer,
  sideMenuItem: [],
  settings: [],
  centerStageView: PlaylistView
});

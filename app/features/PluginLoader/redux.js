/* TODO: NEED TO CHECK IF THIS REDUCER IS NOW NEEDED?  */
import { createAction } from 'redux-actions';
// Actions
const ADD_PLUGIN = 'PLUGIN_LOADER/ADD_PLUGIN';
const REMOVE_PLUGIN = 'PLUGIN_LOADER/REMOVE_PLUGIN';
const ENABLE_PLUGIN = 'PLUGIN_LOADER/ENABLE_PLUGIN';
const DISABLE_PLUGIN = 'PLUGIN_LOADER/DISABLE_PLUGIN';
// Action creators
export const addPlugin = createAction(ADD_PLUGIN);
export const removePlugin = createAction(REMOVE_PLUGIN);
export const enablePlugin = createAction(ENABLE_PLUGIN);
export const disablePlugin = createAction(DISABLE_PLUGIN);

// Initial State
export const defaultState = {
  plugins: {
    // Comment left here for understanding the structure
    // pluginId: {
    //   enabled: true / false,
    //   plugin: {
    //     name: 'version',
    //     menuItems: [],
    //     reducer,
    //     sideMenuItems: [],
    //     settings: [],
    //     centerStageView: ReactComponent
    //   }
    // }
  }
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PLUGIN: {
      const { plugins } = state;
      const plugin = action.payload;
      const pluginId = plugin.id;
      plugins[pluginId] = {
        plugin,
        enabled: true
      };
      return { ...state, plugins: { ...plugins } };
    }
    case REMOVE_PLUGIN: {
      const { plugins } = state;
      const pluginId = action.payload;
      delete plugins[pluginId];
      return { ...state, plugins };
    }
    case ENABLE_PLUGIN: {
      const { plugins } = state;
      const pluginId = action.payload;
      if (plugins[pluginId]) {
        plugins[pluginId].enabled = true;
      }
      return { ...state, plugins };
    }
    case DISABLE_PLUGIN: {
      const { plugins } = state;
      const pluginId = action.payload;
      if (plugins[pluginId]) {
        plugins[pluginId].enabled = false;
      }
      return { ...state, plugins };
    }
    default: {
      return state;
    }
  }
};

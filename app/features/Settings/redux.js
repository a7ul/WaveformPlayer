import { createAction } from 'redux-actions';
// Actions
const ADD_SETTINGS_OF_PLUGIN = 'SETTINGS/ADD_SETTINGS_OF_PLUGIN';
const ENABLE_PLUGIN = 'SETTINGS/ENABLE_PLUGIN';
const DISABLE_PLUGIN = 'SETTINGS/DISABLE_PLUGIN';
// Action creators
export const addSettingsOfPlugin = createAction(ADD_SETTINGS_OF_PLUGIN);
export const enablePlugin = createAction(ENABLE_PLUGIN);
export const disablePlugin = createAction(DISABLE_PLUGIN);

// Initial State
export const defaultState = {
  plugins: {
    // Comment left here for understanding the structure
    // pluginId: {
    //   enabled: true / false,
    //   settings: { /* This is where the plugin's settings object will come */}
    // }
  }
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SETTINGS_OF_PLUGIN: {
      const { pluginId, settings } = action.payload;
      const pluginStatus = state.plugins[pluginId] || { enabled: true };
      pluginStatus.settings = settings;
      const newPlugins = { ...state.plugins, [pluginId]: pluginStatus };
      return { ...state, plugins: newPlugins };
    }
    case ENABLE_PLUGIN: {
      const pluginId = action.payload;
      const pluginStatus = state.plugins[pluginId];
      if (pluginStatus) {
        pluginStatus.enabled = true;
        const newPlugins = { ...state.plugins, [pluginId]: pluginStatus };
        return { ...state, plugins: newPlugins };
      }
      return state;
    }
    case DISABLE_PLUGIN: {
      const pluginId = action.payload;
      const pluginStatus = state.plugins[pluginId];
      if (pluginStatus) {
        pluginStatus.enabled = false;
        const newPlugins = { ...state.plugins, [pluginId]: pluginStatus };
        return { ...state, plugins: newPlugins };
      }
      return state;
    }
    default: {
      return state;
    }
  }
};

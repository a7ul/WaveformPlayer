const ADD_PLUGIN = 'PLUGIN_MANAGER/ADD_PLUGIN';
const REMOVE_PLUGIN = 'PLUGIN_MANAGER/REMOVE_PLUGIN';
const ENABLE_PLUGIN = 'PLUGIN_MANAGER/ENABLE_PLUGIN';
const DISABLE_PLUGIN = 'PLUGIN_MANAGER/DISABLE_PLUGIN';
// Actions
export const addPlugin = plugin => ({
  type: ADD_PLUGIN,
  payload: plugin
});

export const deletePlugin = pluginName => ({
  type: REMOVE_PLUGIN,
  payload: pluginName
});

export const enablePlugin = pluginName => ({
  type: ENABLE_PLUGIN,
  payload: pluginName
});

export const disablePlugin = pluginName => ({
  type: DISABLE_PLUGIN,
  payload: pluginName
});

// Initial State
const defaultState = {
  plugins: {
    // pluginName: {
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
      const pluginName = plugin.name;
      plugins[pluginName] = {
        plugin,
        enabled: true
      };
      return { ...state, plugins };
    }
    case REMOVE_PLUGIN: {
      const { plugins } = state;
      const pluginName = action.payload;
      delete plugins[pluginName];
      return { ...state, plugins };
    }
    case ENABLE_PLUGIN: {
      const { plugins } = state;
      const pluginName = action.payload;
      if (plugins[pluginName]) {
        plugins[pluginName].enabled = true;
      }
      return { ...state, plugins };
    }
    case DISABLE_PLUGIN: {
      const { plugins } = state;
      const pluginName = action.payload;
      if (plugins[pluginName]) {
        plugins[pluginName].enabled = false;
      }
      return { ...state, plugins };
    }
    default: {
      return state;
    }
  }
};

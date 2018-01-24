const ADD_PLUGIN = 'PLUGIN_MANAGER/ADD_PLUGIN';

// Actions
export const addPlugin = (plugin) => ({
  type: addPlugin,
  payload: plugin
});

// Initial State

const defaultState = {
  plugins: {}
};

// Reducers
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PLUGIN: {
      const {plugins} = state;
      const newPlugin = action.payload;
      plugins[newPlugin.name] = newPlugin;
      return {...state, plugins};
    }
    default: {
      return state;
    }
  }
};

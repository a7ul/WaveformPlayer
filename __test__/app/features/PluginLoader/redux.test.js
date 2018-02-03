import { reducer, addPlugin, removePlugin, enablePlugin, disablePlugin } from '../../../../app/features/PluginLoader/redux';

describe('Plugin Loader', () => {
  describe('reducer', () => {
    const defaultState = {
      plugins: {}
    };
    it('initial state', () => {
      const prevState = undefined;
      const action = {};
      const nextState = defaultState;
      expect(reducer(prevState, action)).toEqual(nextState);
    });
    it('ADD_PLUGIN: adds plugin to the state', () => {
      const plugin = {
        name: 'test',
        menuItems: [],
        reducer,
        sideMenuItems: [],
        settings: [],
        centerStageView: { random: 'reactcomponent' }
      };
      const prevState = { ...defaultState };
      const action = addPlugin(plugin);
      const nextState = {
        plugins: {
          test: {
            enabled: true,
            plugin
          }
        }
      };

      expect(reducer(prevState, action)).toEqual(nextState);
    });

    it('REMOVE_PLUGIN: removes a plugin from the state', () => {
      const prevState = {
        ...defaultState,
        plugins: {
          test: {
            enabled: true,
            plugin: {
              name: 'test',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          },
          abc: {
            enabled: true,
            plugin: {
              name: 'abc',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          }
        }
      };
      const action = removePlugin('test');
      const nextState = {
        ...prevState,
        plugins: {
          abc: {
            enabled: true,
            plugin: {
              name: 'abc',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          }
        }
      };
      expect(reducer(prevState, action)).toEqual(nextState);
    });

    it('ENABLE_PLUGIN: enables a plugin ', () => {
      const prevState = {
        ...defaultState,
        plugins: {
          test: {
            enabled: false,
            plugin: {
              name: 'test',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          },
          abc: {
            enabled: false,
            plugin: {
              name: 'abc',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          }
        }
      };
      const action = enablePlugin('test');
      const nextState = {
        ...prevState,
        plugins: {
          test: {
            enabled: true,
            plugin: {
              name: 'test',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          },
          abc: {
            enabled: false,
            plugin: {
              name: 'abc',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          }
        }
      };
      expect(reducer(prevState, action)).toEqual(nextState);
    });
    it('DISABLE_PLUGIN: disables a plugin ', () => {
      const prevState = {
        ...defaultState,
        plugins: {
          test: {
            enabled: true,
            plugin: {
              name: 'test',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          },
          abc: {
            enabled: true,
            plugin: {
              name: 'abc',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          }
        }
      };
      const action = disablePlugin('abc');
      const nextState = {
        ...prevState,
        plugins: {
          test: {
            enabled: true,
            plugin: {
              name: 'test',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          },
          abc: {
            enabled: false,
            plugin: {
              name: 'abc',
              menuItems: [],
              reducer,
              sideMenuItems: [],
              settings: [],
              centerStageView: { random: 'reactcomponent' }
            }
          }
        }
      };
      expect(reducer(prevState, action)).toEqual(nextState);
    });
  });
});

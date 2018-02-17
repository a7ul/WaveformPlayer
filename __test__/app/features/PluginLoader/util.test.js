import path from 'path';
import { getPluginList } from '../../../../app/features/PluginLoader/util';
import { initPlugin } from '../../../../app/features/PluginLoader/thunk';

describe('Plugin Loader', () => {
  describe('util', () => {
    it('getPluginList: gets the plugin list from the directory', (done) => {
      const pluginDir = path.resolve(__dirname, './data/testPluginDirectory');
      getPluginList(pluginDir).then((listOfPlugins) => {
        expect(listOfPlugins.length).toBe(1);
        done();
      });
    });
    describe('initPlugin: intialises a plugin', () => {
      it('load a valid plugin: take a plugin and call init (sync)', (done) => {
        const samplePluginInitSync = {
          name: 'testPlugin',
          menuItems: [],
          reducer: jest.fn(),
          sideMenuItems: [],
          settings: [],
          centerStageView: { test: 'view' }
        };
        const pluginValid = { init: jest.fn(() => samplePluginInitSync) };
        const dispatch = jest.fn();
        initPlugin(pluginValid)(dispatch).then((initialisedPlugin) => {
          expect(pluginValid.init).toHaveBeenCalled();
          expect(initialisedPlugin).toEqual(samplePluginInitSync);
          done();
        });
      });

      it('load a valid plugin: take a plugin and call init (async)', (done) => {
        const samplePluginInit = {
          name: 'testPlugin',
          menuItems: [],
          reducer: jest.fn(),
          sideMenuItems: [],
          settings: [],
          centerStageView: { test: 'view' }
        };
        const pluginValidAsync = { init: jest.fn(() => Promise.resolve(samplePluginInit)) };
        const dispatch = jest.fn();
        initPlugin(pluginValidAsync)(dispatch).then((initialisedPlugin) => {
          expect(pluginValidAsync.init).toHaveBeenCalled();
          expect(initialisedPlugin).toEqual(samplePluginInit);
          done();
        });
      });

      it('try loading a invalid plugin: reject promise with the error', (done) => {
        const pluginInvalid = {
          init: jest.fn(() => {
            throw new Error({ msg: 'some error' });
          })
        };
        const dispatch = jest.fn();
        initPlugin(pluginInvalid)(dispatch).then(() => {
          done('this plugin wasnt supposed to resolve');
        }).catch((err) => {
          expect(pluginInvalid.init).toHaveBeenCalled();
          expect(err).toEqual(new Error({ msg: 'some error' }));
          done();
        });
      });

      it('try loading a invalid plugin with async init: reject promise with the error', (done) => {
        const pluginInvalid = {
          init: jest.fn(() => {
            const err = new Error({ msg: 'some error' });
            return Promise.reject(err);
          })
        };
        const dispatch = jest.fn();
        initPlugin(pluginInvalid)(dispatch).then(() => {
          done('this plugin wasnt supposed to resolve');
        }).catch((err) => {
          expect(pluginInvalid.init).toHaveBeenCalled();
          expect(err).toEqual(new Error({ msg: 'some error' }));
          done();
        });
      });
    });
  });
});

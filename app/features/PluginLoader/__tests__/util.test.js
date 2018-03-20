import path from 'path';
import { getPluginList } from '../../../../app/features/PluginLoader/util';

describe('util', () => {
  it('getPluginList: gets the plugin list from the directory', (done) => {
    const pluginDir = path.resolve(__dirname, '../__mocks__/testPluginDirectory');
    getPluginList(pluginDir).then((listOfPlugins) => {
      expect(listOfPlugins.length).toBe(1);
      done();
    });
  });
});

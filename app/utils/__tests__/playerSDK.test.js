import path from 'path';
import fs from 'fs';

const mockAudioContext = {
  destination: 'speakerNode',
  decodeAudioData: jest.fn(),
  createBufferSource() {
    return { test: 1 };
  }
};
global.AudioContext = function AudioContext() {
  return mockAudioContext;
};

const playerSDK = require('../../../app/utils/playerSDK');

describe('PlayerSDK Utility', () => {
  describe('utils: should expose all utilites for the plugins to make use of', () => {
    it('utils: gets all the utils files as a object', () => {
      const { utils } = playerSDK;
      const utilDirPath = path.resolve(__dirname, '../../../app/utils');
      const allFilesInThePath = fs.readdirSync(utilDirPath);
      const utilsInThePath = allFilesInThePath.filter((e) => !['__tests__', '__mocks__'].includes(e));
      const exportedUtilsLength = Object.keys(utils).length;
      const totalActualUtilsIntheFolder = utilsInThePath.length;
      expect(exportedUtilsLength).toEqual(totalActualUtilsIntheFolder - 1);
    });
  });
});


import path from 'path';
import mockOS from 'mock-os';
import {getYoutubeDL, getYTDLVersion, getVideoMetaData} from '../youtubeDL.util';
jest.mock('../process.util');

import {executeSpy, ProcessExecutor} from '../process.util';

describe('youtubedl utility', () => {
  afterAll(() => {
    jest.unmock('../process.util');
  });

  it('getYoutubeDL : returns a processExecutorr ', () => {
    mockOS({'platform': 'darwin'});
    process.env.NODE_ENV = 'development';
    expect(getYoutubeDL()).toBeInstanceOf(ProcessExecutor);
    expect(getYoutubeDL().binaryPath).toEqual(path.join(__dirname, '../../assets/binaries/mac/youtube-dl.bin'));
    process.env.NODE_ENV = 'test';
    mockOS.restore();
  });

  it('getYTDLVersion: gets youtube-dl binary version', () => {
    const expectedParam = '--version';
    return getYTDLVersion().then(() => {
      expect(executeSpy).lastCalledWith(expectedParam);
    });
  });

  it('getVideoMetaData: gets video metadata', () => {
    const expectedParam = ['--skip-download', '--print-json', 'http://test.com/test'];
    return getVideoMetaData('http://test.com/test').then(() => {
      expect(executeSpy).lastCalledWith(...expectedParam);
    });
  });

});

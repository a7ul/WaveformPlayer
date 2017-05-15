import path from 'path';
import mockOS from 'mock-os';
import {getYoutubeDL, getYTDLVersion} from '../youtubeDL.util';
jest.mock('../process.util');

import {executeSpy, ProcessExecutor} from '../process.util';

const mockYTDLEnvironmentForTest = () => {
  mockOS({'platform': 'darwin'});
  process.env.NODE_ENV = 'development';
};

describe('youtubedl utility', () => {
  afterAll(() => {
    process.env.NODE_ENV = 'test';
    mockOS.restore();
    jest.unmock('../process.util');
  });

  it('getYoutubeDL : returns a processExecutorr ', () => {
    expect(getYoutubeDL()).toBeInstanceOf(ProcessExecutor);
    expect(getYoutubeDL().binaryPath).toEqual(path.join(__dirname, '../../assets/binaries/mac/youtube-dl.bin'));
  });

  it('getYTDLVersion: gets youtube-dl binary version', () => {
    mockYTDLEnvironmentForTest();
    return getYTDLVersion().then(() => {
      expect(executeSpy).toBeCalledWith('--version');
    });
  });
});

import {getExecutableRealFilePath, getCurrentOS, getOptimalMaxProcesses} from '../helper.util';
import youtubeDLMacPath from '../../assets/binaries/youtube-dl.bin';
import mockOS from 'mock-os';
import path from 'path';

describe('helper utility', () => {
  afterAll(() => {
    process.env.NODE_ENV = 'test';
    mockOS.restore();
  });

  it('getExecutableRealFilePath ', () => {
    // development test
    process.env.NODE_ENV = 'development';
    const binaryFilePathInSourceCode = path.join(__dirname, '../../assets/binaries/youtube-dl.bin');

    expect(getExecutableRealFilePath(youtubeDLMacPath)).toBe(binaryFilePathInSourceCode);

    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = '/User/testpath/index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    const binaryFilePathInElectron = path.join('/User/testpath', 'bundle', 'test2/test2.bin');

    expect(getExecutableRealFilePath('test2/test2.bin')).toEqual(binaryFilePathInElectron);
    process.env.NODE_ENV = 'test'; // bringing back the test env
  });

  it('getCurrentOS: gets current OS name', () => {
    mockOS({'platform': 'darwin'});
    expect(getCurrentOS()).toBe('MAC');
    mockOS.restore();
  });

  it('getCurrentOS: gets current OS name', () => {
    mockOS({'cpus': [1, 2, 3, 4]});
    expect(getOptimalMaxProcesses()).toBe(4);
  });

});

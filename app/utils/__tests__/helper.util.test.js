import {getExecutableFilePath, getCurrentOS, getOptimalMaxProcesses} from '../helper.util';
import mockOS from 'mock-os';
import path from 'path';

describe('helper utility', () => {
  afterAll(() => {
    process.env.NODE_ENV = 'test';
    mockOS.restore();
  });

  it('getExecutableFilePath : loads correct executable file path on mac', () => {
    mockOS({'platform': 'darwin'});
    const fileName = 'test-file';

    // development test
    process.env.NODE_ENV = 'development';
    const expectedFilePathOnMac = path.resolve(__dirname, '../../assets/binaries/mac/test-file.bin');
    expect(getExecutableFilePath(fileName)).toBe(expectedFilePathOnMac);

    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = '/User/testpath/index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    expect(getExecutableFilePath(fileName)).toEqual('/User/testpath/app/assets/binaries/mac/test-file.bin');

    mockOS.restore();
  });

  it('getExecutableFilePath : loads correct executable file path on linux', () => {
    mockOS({'platform': 'linux'});
    const fileName = 'test-file';

    // development test
    process.env.NODE_ENV = 'development';
    const expectedFilePathOnMac = path.resolve(__dirname, '../../assets/binaries/linux/test-file.bin');
    expect(getExecutableFilePath(fileName)).toBe(expectedFilePathOnMac);

    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = '/User/testpath/index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    expect(getExecutableFilePath(fileName)).toEqual('/User/testpath/app/assets/binaries/linux/test-file.bin');

    mockOS.restore();
  });

  it('getExecutableFilePath : loads correct executable file path on windows', () => {
    mockOS({'platform': 'win32'});
    const fileName = 'test-file';

    // development test
    process.env.NODE_ENV = 'development';
    const expectedFilePathOnMac = path.win32.resolve(__dirname, '../../assets/binaries/windows/test-file.exe');
    expect(getExecutableFilePath(fileName)).toBe(expectedFilePathOnMac);

    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = 'C:\\\\User\\testpath\\index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    expect(getExecutableFilePath(fileName)).toEqual('C:\\User\\testpath\\app\\assets\\binaries\\windows\\test-file.exe');

    mockOS.restore();
  });

  it('getCurrentOS: gets current OS name', () => {
    mockOS({'platform': 'darwin'});
    expect(getCurrentOS()).toBe('mac');
    mockOS.restore();
  });

  it('getOptimalMaxProcesses: gets max cpu cores available to run threads', () => {
    mockOS({'cpus': [1, 2, 3, 4]});
    expect(getOptimalMaxProcesses()).toBe(4);
  });

});

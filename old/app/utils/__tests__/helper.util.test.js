import {getBinaryDirectory, getCurrentOS, getOptimalMaxProcesses, setPathEnvironmentVariable} from '../helper.util';
import mockOS from 'mock-os';
import path from 'path';

describe('helper utility', () => {
  afterAll(() => {
    process.env.NODE_ENV = 'test';
    mockOS.restore();
  });

  it('getBinaryDirectory : loads correct binary directory path on mac', () => {
    mockOS({'platform': 'darwin'});

    // development test
    process.env.NODE_ENV = 'development';
    const expectedFilePathOnMac = path.resolve(__dirname, '../../assets/binaries/mac');
    expect(getBinaryDirectory()).toBe(expectedFilePathOnMac);

    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = '/User/testpath/index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    expect(getBinaryDirectory()).toEqual('/User/testpath/app/assets/binaries/mac');

    mockOS.restore();
  });

  it('getBinaryDirectory : loads correct binary directory path on linux', () => {
    mockOS({'platform': 'linux'});

    // development test
    process.env.NODE_ENV = 'development';
    const expectedFilePathOnMac = path.resolve(__dirname, '../../assets/binaries/linux');
    expect(getBinaryDirectory()).toBe(expectedFilePathOnMac);

    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = '/User/testpath/index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    expect(getBinaryDirectory()).toEqual('/User/testpath/app/assets/binaries/linux');

    mockOS.restore();
  });

  it('getBinaryDirectory : loads correct binary directory path on windows', () => {
    mockOS({'platform': 'win32'});

    // development test
    process.env.NODE_ENV = 'development';
    const expectedFilePathOnMac = path.win32.resolve(__dirname, '../../assets/binaries/windows');
    expect(getBinaryDirectory()).toBe(expectedFilePathOnMac);

    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = 'C:\\\\User\\testpath\\index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    expect(getBinaryDirectory()).toEqual('C:\\User\\testpath\\app\\assets\\binaries\\windows');

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

  it('setPathEnvironmentVariable: on Mac - sets path for the electron to include the binary directory onto path', () => {
    mockOS({'platform': 'darwin'});
    const beforePath = String(process.env.PATH);
    setPathEnvironmentVariable();
    const expectedAterPath =  getBinaryDirectory() + ':' + beforePath;
    expect(process.env.PATH).toBe(expectedAterPath);
    process.env.PATH = beforePath;
    mockOS.restore();
  });
});

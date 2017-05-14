import path from 'path';
import mockOS from 'mock-os';
import {getYoutubeDL, getYTDLVersion} from '../youtubeDL.util';
import youtubeDLMacPath from '../../assets/binaries/youtube-dl.bin';
import youtubeDLWinPath from '../../assets/binaries/youtube-dl.exe';
jest.mock('../process.util');
import {executeSpy, getProcessExecutor} from '../process.util';

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

  it('getYoutubeDL : loads correct youtube-dl on MAC', () => {
    mockOS({'platform': 'darwin'});
    // development test
    process.env.NODE_ENV = 'development';
    const sourceCodeYTDBinaryPath = path.join(__dirname, '../../assets/binaries/youtube-dl.bin');

    expect(getYoutubeDL().binaryPath).toBe(sourceCodeYTDBinaryPath);

    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = '/User/testpath/index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    const electronYTDBinaryPath = path.join('/User/testpath', 'bundle', youtubeDLMacPath);

    expect(getYoutubeDL().binaryPath).toEqual(electronYTDBinaryPath);
  });

  it('getYoutubeDL : loads correct youtube-dl on LINUX', () => {
    mockOS({'platform': 'linux'});
    // development test
    process.env.NODE_ENV = 'development';
    const sourceCodeYTDBinaryPath = path.join(__dirname, '../../assets/binaries/youtube-dl.bin');

    expect(getYoutubeDL().binaryPath).toBe(sourceCodeYTDBinaryPath);
    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = '/User/testpath/index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    const electronYTDBinaryPath = path.join('/User/testpath', 'bundle', youtubeDLMacPath);

    expect(getYoutubeDL().binaryPath).toEqual(electronYTDBinaryPath);
  });

  it('getYoutubeDL : loads correct youtube-dl on WINDOWS', () => {
    mockOS({'platform': 'win32'});
    // development test
    process.env.NODE_ENV = 'development';
    const sourceCodeYTDBinaryPath = path.join(__dirname, '../../assets/binaries/youtube-dl.exe');

    expect(getYoutubeDL().binaryPath).toBe(sourceCodeYTDBinaryPath);
    // production test
    process.env.NODE_ENV = 'production';
    const electronIndexFile = 'C:\\\\abc\\def\\index.html';
    Object.defineProperty(window.location, 'pathname', {writable: true, value: electronIndexFile});
    const electronYTDBinaryPath = path.join('C:\\\\abc\\def', 'bundle', youtubeDLWinPath);

    expect(getYoutubeDL().binaryPath).toEqual(electronYTDBinaryPath);
  });

  it('getYTDLVersion: gets youtube-dl binary version', () => {
    mockYTDLEnvironmentForTest();
    return getYTDLVersion().then(() => {
      expect(getProcessExecutor).lastCalledWith(youtubeDLMacPath, undefined);
      expect(executeSpy).toBeCalledWith('--version');
    });
  });
});

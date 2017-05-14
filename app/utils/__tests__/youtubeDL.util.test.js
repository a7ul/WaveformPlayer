import path from 'path';
import mockOS from 'mock-os';
import {getYoutubeDl} from '../youtubeDL.util';
import youtubedlMacPath from '../../assets/binaries/youtube-dl.bin';
import youtubedlWinPath from '../../assets/binaries/youtube-dl.exe';

describe('youtubedl utility', () => {
  afterAll(() => {
    process.env.NODE_ENV = 'test';
    mockOS.restore();
  });

  it('getYoutubeDl : loads correct youtube-dl on MAC', () => {
    mockOS({'platform': 'darwin'});
    // development test
    process.env.NODE_ENV = 'development';
    const sourceCodeYTD = path.join(__dirname, '../../assets/binaries/youtube-dl.bin');
    expect(getYoutubeDl()).toBe(sourceCodeYTD);

    // production test
    process.env.NODE_ENV = 'production';
    Object.defineProperty(window.location, 'pathname', {
      writable: true,
      value: '/User/testpath/index.html'
    });
    expect(getYoutubeDl()).toEqual(path.join('/User/testpath', 'bundle', youtubedlMacPath));
  });

  it('getYoutubeDl : loads correct youtube-dl on LINUX', () => {
    mockOS({'platform': 'linux'});
    // development test
    process.env.NODE_ENV = 'development';
    const sourceCodeYTD = path.join(__dirname, '../../assets/binaries/youtube-dl.bin');
    expect(getYoutubeDl()).toBe(sourceCodeYTD);
    // production test
    process.env.NODE_ENV = 'production';
    Object.defineProperty(window.location, 'pathname', {
      writable: true,
      value: '/User/testpath/index.html'
    });
    expect(getYoutubeDl()).toEqual(path.join('/User/testpath', 'bundle', youtubedlMacPath));
  });

  it('getYoutubeDl : loads correct youtube-dl on WINDOWS', () => {
    mockOS({'platform': 'win32'});
    // development test
    process.env.NODE_ENV = 'development';
    const sourceCodeYTD = path.join(__dirname, '../../assets/binaries/youtube-dl.exe');
    expect(getYoutubeDl()).toBe(sourceCodeYTD);
    // production test
    process.env.NODE_ENV = 'production';
    Object.defineProperty(window.location, 'pathname', {
      writable: true,
      value: 'C:\\\\abc\\def\\index.html'
    });
    expect(getYoutubeDl()).toEqual(path.join('C:\\\\abc\\def', 'bundle', youtubedlWinPath));
  });
});

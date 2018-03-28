import fs from 'fs';
import path from 'path';
import mockOS from 'mock-os';
import { getBinaryPaths, getCurrentOS, getBinaries } from '../../../app/utils/platform';
import { execFile } from '../common';

jest.mock('../common.js', () => ({
  execFile: jest.fn()
}));

describe('Platform Utility', () => {
  describe('getBinaryPaths: returns the binary paths respective to OS', () => {
    afterEach(() => {
      mockOS.restore();
    });
    it('Linux: returns the binary paths on different OS as expected', () => {
      mockOS({ type: 'linux' });
      const linuxBinaries = {
        youtubeDL: path.resolve(__dirname, '../../../app/assets/binaries/linux/youtube-dl.bin'),
        ffmpeg: path.resolve(__dirname, '../../../app/assets/binaries/linux/ffmpeg.bin')
      };
      expect(getBinaryPaths()).toEqual(linuxBinaries);
    });
    it('macOS: returns the binary paths on different OS as expected', () => {
      mockOS({ type: 'darwin' });
      const macBinaries = {
        youtubeDL: path.resolve(__dirname, '../../../app/assets/binaries/mac/youtube-dl.bin'),
        ffmpeg: path.resolve(__dirname, '../../../app/assets/binaries/mac/ffmpeg.bin')
      };
      return expect(getBinaryPaths()).toEqual(macBinaries);
    });
    it('windows: returns the binary paths on different OS as expected', () => {
      mockOS({ type: 'windows_nt' });
      const windowsBinaries = {
        youtubeDL: path.resolve(__dirname, '../../../app/assets/binaries/windows/youtube-dl.exe'),
        ffmpeg: path.resolve(__dirname, '../../../app/assets/binaries/windows/ffmpeg.exe')
      };
      return expect(getBinaryPaths()).toEqual(windowsBinaries);
    });
    it('Linux: expect the binaries to exists', () => {
      mockOS({ type: 'linux' });
      const binaries = getBinaryPaths();
      Object.values(binaries).forEach((executablePath) => {
        expect(fs.existsSync(executablePath)).toEqual(true);
      });
    });

    it('MacOS: expect the binaries to exists', () => {
      mockOS({ type: 'darwin' });
      const binaries = getBinaryPaths();
      Object.values(binaries).forEach((executablePath) => {
        expect(fs.existsSync(executablePath)).toEqual(true);
      });
    });

    it('Windows: expect the binaries to exists', () => {
      mockOS({ type: 'windows_nt' });
      const binaries = getBinaryPaths();
      Object.values(binaries).forEach((executablePath) => {
        expect(fs.existsSync(executablePath)).toEqual(true);
      });
    });
  });

  describe('getCurrentOS: returns the capital representation of OS', () => {
    it('Linux: returns the binary paths on different OS as expected', () => {
      mockOS({ type: 'linux' });
      expect(getCurrentOS()).toEqual('LINUX');
      mockOS.restore();
    });
  });

  describe('getBinaries: returns the binary executor for each binary', () => {
    it('should have binary executor for each binary', () => {
      const countOfBinaryPaths = Object.keys(getBinaryPaths());
      const countofExecutors = Object.keys(getBinaries());
      expect(countOfBinaryPaths.length).toEqual(countofExecutors.length);
    });
    it('should return a binary executor function', () => {
      const binaries = getBinaries();
      const binaryPaths = getBinaryPaths();
      Object.keys(binaries).forEach((eachBinary) => {
        const binaryExecutor = binaries[eachBinary];
        const binaryPath = binaryPaths[eachBinary];
        const command = 'test_command';
        const onProgress = jest.fn();
        binaryExecutor(command, onProgress);
        expect(execFile).toBeCalledWith(binaryPath, command, onProgress);
      });
    });
  });
});

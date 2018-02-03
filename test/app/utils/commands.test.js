
import * as commands from '../../../app/utils/commands';

describe('Commands Utility', () => {
  describe('FFMPEG commands', () => {
    it('Version: gets current FFMPEG version', () => {
      const { getFFMPEGVersion } = commands;
      const expectedCommand = '-version';
      expect(getFFMPEGVersion().toString()).toEqual(expectedCommand);
    });
  });
  describe('YoutubeDL commands', () => {
    it('Version: gets current YTDL version', () => {
      const { getYTDLVersion } = commands;
      const expectedCommand = '--version';
      expect(getYTDLVersion().toString()).toEqual(expectedCommand);
    });
  });
});

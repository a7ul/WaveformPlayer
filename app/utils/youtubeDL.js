import { BINARIES } from './platform';
import { execFile } from './common';

const defaultParams = [
  '--ffmpeg-location', BINARIES.FFMPEG,
  '--prefer-ffmpeg',
  '--geo-bypass'
];

export const getYTDLVersion = () => {
  const params = [...defaultParams, '--version'];
  return execFile(BINARIES.YTDL, params);
};

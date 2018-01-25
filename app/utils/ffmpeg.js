import { BINARIES } from './platform';
import { execFile } from './common';

export const getFFMPEGVersion = () => {
  const params = ['-version'];
  return execFile(BINARIES.FFMPEG, params);
};

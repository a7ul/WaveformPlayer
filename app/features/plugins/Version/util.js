export const parseFFMPEGVersion = (ffmpegVersionString) => {
  if (typeof ffmpegVersionString !== 'string') {
    return 'parseErr';
  }
  return ffmpegVersionString.split('\n', 1)[0];
};

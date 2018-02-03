// FFMPEG COMMANDS
// ===============
export const getFFMPEGVersion = () => ['-version'];


// ==================
// YOUTUBEDL COMMANDS
// ==================
export const getYTDLVersion = () => ['--version'];

// const getYTDLDefaults = () => {
//   const { FFMPEG } = getBinaries();
//   const defaultParams = [
//     '--ffmpeg-location', FFMPEG,
//     '--prefer-ffmpeg',
//     '--geo-bypass'
//   ];
//   return defaultParams;
// };

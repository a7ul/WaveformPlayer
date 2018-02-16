import { setVersion } from './redux';
import logger from '../../utils/logger';

export const findSoftwareVersion = () => (dispatch) => {
  const { commands, platform } = global.playerSDK.utils;
  const binaries = platform.getBinaries();
  binaries.youtubeDL(commands.getYTDLVersion()).then((version) => {
    dispatch(setVersion({ youtubeDLVersion: version }));
  }).catch((err) => {
    dispatch(setVersion({ youtubeDLVersion: 'ERR' }));
    logger.error(err);
  });
  binaries.ffmpeg(commands.getFFMPEGVersion()).then((version) => {
    dispatch(setVersion({ ffmpegVersion: version }));
  }).catch((err) => {
    dispatch(setVersion({ ffmpegVersion: 'ERR' }));
    logger.error(err);
  });
};

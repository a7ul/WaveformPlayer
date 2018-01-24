import {setVersion} from './redux';

export const findSoftwareVersion = () => (dispatch) => {
  const {youtubeDL, ffmpeg, logger} = global.playerSDK.utils;

  youtubeDL.getYTDLVersion().then((version) => {
    dispatch(setVersion({youtubeDLVersion: version}));
  }).catch((err) => {
    dispatch(setVersion({youtubeDLVersion: 'ERR'}));
    logger.error(err);
  });
  ffmpeg.getFFMPEGVersion().then((version) => {
    dispatch(setVersion({ffmpegVersion: version}));
  }).catch((err) => {
    dispatch(setVersion({ffmpegVersion: 'ERR'}));
    logger.error(err);
  });
};

import {setVersion} from './redux';

export const findSoftwareVersion = () => (dispatch) => {
  global.playerSDK.utils.youtubeDL.getYTDLVersion().then((version) => {
    dispatch(setVersion({youtubeDLVersion: version}));
  }).catch((err) => {
    dispatch(setVersion({youtubeDLVersion: 'ERR'}));
    console.log(err); // TODO implement debug switchable logs
  });
  global.playerSDK.utils.ffmpeg.getFFMPEGVersion().then((version) => {
    dispatch(setVersion({ffmpegVersion: version}));
  }).catch((err) => {
    dispatch(setVersion({ffmpegVersion: 'ERR'}));
    console.log(err);
  });
};

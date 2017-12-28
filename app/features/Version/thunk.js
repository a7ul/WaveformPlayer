import {getYTDLVersion} from '../../utils/youtubeDL';
import {getFFMPEGVersion} from '../../utils/ffmpeg';
import {setVersion} from './redux';

export const findSoftwareVersion = () => (dispatch, getState) => {
  getYTDLVersion().then((version) => {
    dispatch(setVersion({youtubeDLVersion: version}));
  }).catch((err) => {
    dispatch(setVersion({youtubeDLVersion: 'ERR'}));
    console.log(err); // TODO implement debug switchable logs
  });
  getFFMPEGVersion().then((version) => {
    dispatch(setVersion({ffmpegVersion: version}));
  }).catch((err) => {
    dispatch(setVersion({ffmpegVersion: 'ERR'}));
    console.log(err);
  });
};

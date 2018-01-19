import * as audio from './audio';
import * as common from './common';
import * as ffmpeg from './ffmpeg';
import * as logger from './logger';
import * as parser from './parser';
import * as platform from './platform';
import * as youtubeDL from './youtubeDL';

import constantStyles from '../styles/constants.css';
import globalStyles from '../styles/global.css';

module.exports = {
  utils: {
    audio,
    common,
    ffmpeg,
    logger,
    parser,
    platform,
    youtubeDL
  },
  styles: {
    constants: constantStyles,
    global: globalStyles
  }
};

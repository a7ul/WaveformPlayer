import * as audio from './audio';
import * as common from './common';
import * as ffmpeg from './ffmpeg';
import * as logger from './logger';
import * as parser from './parser';
import * as platform from './platform';
import * as youtubeDL from './youtubeDL';

module.exports = {
  utils: {
    audio,
    common,
    ffmpeg,
    logger,
    parser,
    platform,
    youtubeDL
  }
};

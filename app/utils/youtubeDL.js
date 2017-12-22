import {BINARIES} from './platform';
import {execFile} from './common';

execFile(BINARIES.YTDL, ['--version'], (message) => console.log('MSG', message))
  .then((final) => console.log('final', final))
  .catch((err) => console.log(err, 'err'));

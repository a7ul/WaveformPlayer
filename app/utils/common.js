const remote = require('electron').remote;
const fs = remote.require('fs');
import childProcess from 'child_process';

export const noop = () => {};

export function readFileToArrayBuffer (absolutePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(absolutePath, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data.buffer);
    });
  });
}

export function execFile (binaryFilePath, commands, onProgress = noop) {
  console.log(binaryFilePath, ...commands); //eslint-disable-line
  return new Promise((resolve, reject) => {
    const cprocess = childProcess.execFile(binaryFilePath, [...commands], {windowsHide: true},
      (error, stdout) => {
        if (error) {
          return reject(error);
        }
        return resolve(stdout);
      });
    cprocess.stdout.on('data', (data) => {
      onProgress(data);
    });
  });
}

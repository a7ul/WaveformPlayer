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

export class Timer {
  constructor (interval) {
    this.source = null;
    this.interval = interval;
    this.absoluteStartTime = null;
    this.currentTimeOffset = 0;
    this.seekOffset = 0;
    this.onTickHandler = noop;
    this.customOnTickHandler = noop;
  }
  setOnTickHandler = (customOnTickHandler = noop) => {
    this.customOnTickHandler = customOnTickHandler;
  }
  start = () => {
    this.onTickHandler = this.customOnTickHandler;
    this.absoluteStartTime = this.absoluteStartTime || Date.now();
    this.source = this.source || setInterval(() => {
      this.currentTimeOffset = Date.now() + this.seekOffset - this.absoluteStartTime;
      this.onTickHandler(this.currentTimeOffset);
    }, this.interval);
  }
  pause = () => {
    this.currentTimeOffset = Date.now() - this.absoluteStartTime;
    this.onTickHandler = noop;
    return this.currentTimeOffset;
  }
  seekBy = (milliseconds) => {
    this.seekOffset = milliseconds;
  }
  stop = () => {
    clearInterval(this.source);
    this.source = null;
    this.currentTimeOffset = 0;
    this.currentIntervalOffset = 0;
    const totalDuration = Date.now() - this.absoluteStartTime;
    this.absoluteStartTime = 0;
    return totalDuration;
  }
}

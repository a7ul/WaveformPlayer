import noop from 'lodash/noop';

export const executeSpy = jest.fn((...commands) => Promise.resolve({commands}));

export class ProcessExecutor {
  constructor (binaryPath = null, onDataHandler = noop) {
    this.binaryPath = binaryPath;
    this.onDataHandler = onDataHandler;
  }
  execute (...commands) {
    return executeSpy(...commands);
  }
}

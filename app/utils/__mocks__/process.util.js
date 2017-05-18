import noop from 'lodash/noop';

export const executeSpy = jest.fn((...commands) => Promise.resolve({commands}));

export class ProcessExecutor {
  constructor (binaryFileName = null, onDataHandler = noop) {
    this.binaryFileName = binaryFileName;
    this.onDataHandler = onDataHandler;
  }
  execute (...commands) {
    return executeSpy(...commands);
  }
}

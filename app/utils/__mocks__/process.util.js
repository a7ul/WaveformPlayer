export const executeSpy = jest.fn((...commands) => Promise.resolve({commands}));

export const getProcessExecutor = jest.fn((binaryPath) => (
  {
    binaryPath,
    execute: executeSpy
  }
));

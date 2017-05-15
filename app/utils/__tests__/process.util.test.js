jest.mock('child_process', () => ({
  execFile: jest.fn((executableFilePath, commandsarray, cb) => {
    if (executableFilePath === null) { // to test error case below
      return cb(new Error('some error'));
    }
    cb(null, 'test');
  })
}));

import childProcess from 'child_process';
import {ProcessExecutor} from '../process.util';

describe('process utility', () => {
  afterAll(() => {
    jest.unmock('child_process');
  });

  it('getProcessExecutor : returns a executor and file path passed ', () => {
    const pexecutor = new ProcessExecutor('./test.sh');
    expect(pexecutor).toBeInstanceOf(ProcessExecutor);
    expect(pexecutor.binaryPath).toEqual('./test.sh');
    expect(typeof pexecutor.execute).toBe('function');

    const error = new Error('some error');
    const executable = './test.sh';
    return Promise.all([
      expect(new ProcessExecutor(executable).execute('-v')).resolves.toEqual('test'),
      expect(childProcess.execFile.mock.calls[0][0]).toBe('./test.sh'), // to test that execFile was called with './test.sh' as first arg
      expect(childProcess.execFile.mock.calls[0][1]).toEqual(['-v']),
      expect(new ProcessExecutor(null).execute('-somearg')).rejects.toEqual(error)
    ]);
  });

});

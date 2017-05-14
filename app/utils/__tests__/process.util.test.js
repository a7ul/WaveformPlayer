jest.mock('child_process', () => ({
  execFile: jest.fn((executableFilePath, commandsarray, cb) => {
    if (executableFilePath === null) { // to test error case below
      return cb(new Error('some error'));
    }
    cb(null, 'test');
  })
}));

import childProcess from 'child_process';
import {getProcessExecutor} from '../process.util';

describe('process utility', () => {
  afterAll(() => {
    jest.unmock('child_process');
  });
  it('getProcessExecutor : returns a executor and file path passed ', () => {
    expect(typeof getProcessExecutor(null).execute).toEqual('function');
    expect(getProcessExecutor('./test.sh').binaryPath).toEqual('./test.sh');
    const error = new Error('some error');
    const executable = './test.sh';
    return Promise.all([
      expect(getProcessExecutor(executable).execute('-v')).resolves.toEqual('test'),
      expect(childProcess.execFile.mock.calls[0][0]).toBe('./test.sh'), // to test that execFile was called with './test.sh' as first arg
      expect(childProcess.execFile.mock.calls[0][1]).toEqual(['-v']),
      expect(getProcessExecutor(null).execute('-somearg')).rejects.toEqual(error)
    ]);
  });

});

jest.mock('child_process', () => ({
  exec: jest.fn((commandString, cb) => {
    if (commandString === null) { // to test error case below
      return cb(new Error('some error occured'));
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
    const pexecutor = new ProcessExecutor('test.sh');
    expect(new ProcessExecutor()).toBeInstanceOf(ProcessExecutor);
    expect(pexecutor).toBeInstanceOf(ProcessExecutor);
    expect(pexecutor.binaryFileName).toEqual('test.sh');
    expect(typeof pexecutor.execute).toBe('function');

    const error = new Error('No executable specified');
    const executable = 'test.sh';
    return Promise.all([
      expect(new ProcessExecutor(executable).execute('-v')).resolves.toEqual('test'),
      expect(childProcess.exec.mock.calls[0][0]).toBe('test.sh -v'), // to test that exec was called with 'test.sh -v'
      expect(new ProcessExecutor(null).execute('-somearg')).rejects.toEqual(error)
    ]);
  });

});

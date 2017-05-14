import {getOptimalMaxProcesses} from '../scheduler.util';

describe('Scheduler utility', () => {
  it('getOptimalMaxProcesses: gets number of cpu cores available on the system', () => {
    // we mock os in __mocks__/os.js to get result of 4
    expect(getOptimalMaxProcesses()).toBe(4);
  });
});

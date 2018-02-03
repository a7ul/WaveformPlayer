import logger from '../../../app/utils/logger';

describe('Logger Utility', () => {
  it('Should return an valid logger object', () => {
    expect(logger).toBeTruthy();
  });
});

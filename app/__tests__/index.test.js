
jest.mock('../utils/audio.js');
jest.mock('react-dom');

describe('index:  entry point', () => {
  it('runs without crashing', () => {
    expect(() => require('../index')).not.toThrow();
  });
});


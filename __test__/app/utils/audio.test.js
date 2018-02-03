// Mocking AudioContext
const decodeAudioData = jest.fn();
const mockBufferSource = {
  connect: jest.fn(),
  buffer: { test: 'buffer' },
  loop: false,
  onended: jest.fn(),
  start: jest.fn(),
  stop: jest.fn(),
  disconnect: jest.fn()
};
const mockAudioContext = {
  destination: 'speakerNode',
  decodeAudioData,
  createBufferSource() {
    return mockBufferSource;
  }
};
global.AudioContext = function AudioContext() {
  return mockAudioContext;
};
const Timer = require('seekable-timer').default;
const { decodeAudio, getSpeakerNode, MusicSource } = require('../../../app/utils/audio');

const timerMock = new Timer();

describe('Audio Utility', () => {
  describe('decodeAudio: promisify audioCtx.decodeAudioData', () => {
    it('should return a promise: actual work need not be tested as it is an inbuilt functionality', () => {
      const testData = 'TEST DATA';
      const returnValue = decodeAudio(testData);
      expect(returnValue).toBeInstanceOf(Promise);
      expect(decodeAudioData).toBeCalled();
      expect(decodeAudioData.mock.calls[0][0]).toBe(testData);
    });
  });

  describe('getSpeakerNode: returns the speaker node', () => {
    it('should return destination node', () => {
      const returnValue = getSpeakerNode();
      expect(returnValue).toBe(mockAudioContext.destination);
    });
  });

  describe('MusicSource: Music Source node class', () => {
    it('constructor: set necessary initial data', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      expect(instance.buffer).toBe(mockBufferSource.buffer);
      expect(instance.connectNode).toBe(mockAudioContext.destination);
      expect(instance.timer).toBeTruthy();
      expect(instance.node).toBe(mockBufferSource);
      expect(instance.playbackTime).toBe(0);
      expect(instance.isPlaying).toBe(false);
      expect(instance.timer.setOnTickHandler).toBeCalled();
    });
    it('onPlayEnd: stops the music source', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      instance.stop = jest.fn();
      instance.onPlayEnd();
      expect(instance.stop).toBeCalled();
    });
    it('getMusicSourceData: gets the Music sources current data', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      const data = instance.getMusicSourceData();
      expect(data.node).toBe(instance.node);
      expect(data.playbackTime).toBe(Math.round(instance.playbackTime));
      expect(data.isPlaying).toBe(instance.isPlaying);
    });
    it('connect: connects new destination node to the instance node', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      const mockDestination = { test: 'newdestination' };
      instance.connect(mockDestination);
      expect(instance.connectNode).toBe(mockDestination);
      expect(instance.node.connect).toBeCalledWith(mockDestination);
    });
    it('play: starts playing the node', () => {
      mockBufferSource.start.mockReset();
      const instance = new MusicSource(mockBufferSource.buffer);
      instance.onPlayHandler = jest.fn();
      instance.play();
      expect(instance.node).toBeTruthy();
      expect(instance.node.start).toBeCalled();
      expect(instance.isPlaying).toBe(true);
      expect(instance.timer.start).toBeCalled();
      expect(instance.onPlayHandler).toBeCalledWith(instance.getMusicSourceData());
      expect(instance.node.connect).toBeCalledWith(instance.connectNode);
      expect(instance.node.onended).toBe(instance.onPlayEnd);
      expect(instance.node.buffer).toBe(instance.buffer);
    });
    it('pause: pauses the node', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      instance.onPauseHandler = jest.fn();
      instance.pause();
      expect(instance.node).toBeFalsy();
      expect(mockBufferSource.stop).toBeCalled();
      expect(instance.isPlaying).toBe(false);
      expect(instance.timer.pause).toBeCalled();
      expect(instance.onPauseHandler).toBeCalled();
    });
    it('stop: stops the node', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      instance.onStopHandler = jest.fn();
      instance.stop();
      expect(instance.node).toBeFalsy();
      expect(mockBufferSource.stop).toBeCalled();
      expect(instance.isPlaying).toBe(false);
      expect(instance.timer.stop).toBeCalled();
      expect(instance.onStopHandler).toBeCalled();
    });
    it('seek: seeks the node to required time', () => {
      mockBufferSource.stop.mockReset();
      timerMock.stop.mockReset();
      const instance = new MusicSource(mockBufferSource.buffer);
      instance.onSeekHandler = jest.fn();
      instance.seek(101);
      expect(instance.playbackTime).toBe(101);
      expect(instance.timer.seekBy).toBeCalled();
      expect(instance.onSeekHandler).toBeCalled();
    });
    it('setOnTickHandler: sets the onTickHandler', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      const onTickHandler = jest.fn();
      instance.setOnTickHandler(onTickHandler);
      expect(instance.onTickHandler).toBe(onTickHandler);
    });
    it('setOnPlayHandler: sets the onPlayHandler', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      const onPlayHandler = jest.fn();
      instance.setOnPlayHandler(onPlayHandler);
      expect(instance.onPlayHandler).toBe(onPlayHandler);
    });
    it('setOnPauseHandler: sets the onPauseHandler', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      const onPauseHandler = jest.fn();
      instance.setOnPauseHandler(onPauseHandler);
      expect(instance.onPauseHandler).toBe(onPauseHandler);
    });
    it('setOnStopHandler: sets the onStopHandler', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      const onStopHandler = jest.fn();
      instance.setOnStopHandler(onStopHandler);
      expect(instance.onStopHandler).toBe(onStopHandler);
    });
    it('setOnSeekHandler: sets the onSeekHandler', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      const onSeekHandler = jest.fn();
      instance.setOnSeekHandler(onSeekHandler);
      expect(instance.onSeekHandler).toBe(onSeekHandler);
    });
    it('setOnErrorHandler: sets the onErrorHandler', () => {
      const instance = new MusicSource(mockBufferSource.buffer);
      const onErrorHandler = jest.fn();
      instance.setOnErrorHandler(onErrorHandler);
      expect(instance.onErrorHandler).toBe(onErrorHandler);
    });
  });
});

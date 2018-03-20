/*
1. Create a global AudioContext
2. Use AudioContext to decode audio to audiobuffer
3. Create a AudioSourceNode and attach decoded audio buffer to it
4. AudioSourceNode.start(0) to start the playback.
5. Use the audioCtx to resume and suspend all audioSourceNodes.
*/
import Timer from 'seekable-timer';

export const decodeAudio = () => Promise.resolve([]);

export const getSpeakerNode = () => ({ someval: 'speakerNode' });

export class MusicSource {
  constructor(buffer) {
    this.buffer = buffer;
    this.connectNode = { someval: 'speakerNode' };
    this.timer = new Timer(1000);
    this.node = null;
    this.playbackTime = 0;
    this.isPlaying = false;
    this.onTickHandler = jest.fn();
    this.onPlayHandler = jest.fn();
    this.onPauseHandler = jest.fn();
    this.onStopHandler = jest.fn();
    this.onSeekHandler = jest.fn();
    this.onErrorHandler = jest.fn();
    this.timer.setOnTickHandler((time) => {
      this.playbackTime = time / 1000;
      this.onTickHandler(this.getMusicSourceData());
    });
  }
  onPlayEnd = jest.fn();
  getMusicSourceData = jest.fn();
  connect = jest.fn();
  play = jest.fn();
  pause = jest.fn();
  stop = jest.fn();
  seek = jest.fn();
  setOnTickHandler = jest.fn();
  setOnPlayHandler = jest.fn();
  setOnPauseHandler = jest.fn();
  setOnStopHandler = jest.fn();
  setOnSeekHandler = jest.fn();
  setOnErrorHandler = jest.fn();
}

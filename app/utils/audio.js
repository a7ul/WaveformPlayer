/*
1. Create a global AudioContext
2. Use AudioContext to decode audio to audiobuffer
3. Create a AudioSourceNode and attach decoded audio buffer to it
4. AudioSourceNode.start(0) to start the playback.
5. Use the audioCtx to resume and suspend all audioSourceNodes.
*/
import Timer from 'seekable-timer';
import { noop } from './common';

const audioCtx = new AudioContext();
const speakerNode = audioCtx.destination; // saving speaker node reference

export const decodeAudio = (rawArrayBuffer) => (
  new Promise((resolve, reject) => audioCtx.decodeAudioData(rawArrayBuffer, resolve, reject))
);

export const getSpeakerNode = () => speakerNode;

export class MusicSource {
  constructor(audioBuffer) {
    this.buffer = audioBuffer;
    this.connectNode = speakerNode;
    this.timer = new Timer(1000);

    this.node = audioCtx.createBufferSource();
    this.playbackTime = 0;
    this.isPlaying = false;

    this.onTickHandler = noop;
    this.onPlayHandler = noop;
    this.onPauseHandler = noop;
    this.onStopHandler = noop;
    this.onSeekHandler = noop;
    this.onErrorHandler = noop;

    this.timer.setOnTickHandler((time) => {
      this.playbackTime = time / 1000;
      this.onTickHandler(this.getMusicSourceData());
    });
  }
  onPlayEnd = () => this.stop()

  getMusicSourceData = () => ({
    node: this.node,
    playbackTime: Math.round(this.playbackTime),
    isPlaying: this.isPlaying
  })

  connect = (destinationNode) => {
    try {
      this.connectNode = destinationNode;
      this.node.connect(destinationNode);
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  play = () => {
    try {
      this.node = audioCtx.createBufferSource();
      this.node.buffer = this.buffer;
      this.node.loop = false;
      this.node.onended = this.onPlayEnd;
      this.node.connect(this.connectNode);
      this.node.start(0, this.playbackTime);
      this.timer.start();
      this.isPlaying = true;
      this.onPlayHandler(this.getMusicSourceData());
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  pause = () => {
    try {
      this.isPlaying = false;
      this.node.stop(0);
      this.node.disconnect();
      this.onPauseHandler(this.getMusicSourceData());
      this.node = null;
      this.playbackTime = this.timer.pause() / 1000.0;
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  stop = () => {
    try {
      this.isPlaying = false;
      this.node.stop(0);
      this.node.disconnect();
      this.onStopHandler(this.getMusicSourceData());
      this.node = null;
      this.playbackTime = 0;
      this.timer.stop();
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  seek = (requiredPlaybackTime) => {
    try {
      this.stop();
      this.timer.seekBy(Math.round(requiredPlaybackTime - this.playbackTime) * 1000);
      this.playbackTime = requiredPlaybackTime;
      this.play();
      this.onSeekHandler(this.getMusicSourceData());
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  setOnTickHandler = (onTickHandler) => {
    this.onTickHandler = onTickHandler;
  }
  setOnPlayHandler = (onPlayHandler) => {
    this.onPlayHandler = onPlayHandler;
  }
  setOnPauseHandler = (onPauseHandler) => {
    this.onPauseHandler = onPauseHandler;
  }
  setOnStopHandler = (onStopHandler) => {
    this.onStopHandler = onStopHandler;
  }
  setOnSeekHandler = (onSeekHandler) => {
    this.onSeekHandler = onSeekHandler;
  }
  setOnErrorHandler = (onErrorHandler) => {
    this.onErrorHandler = onErrorHandler;
  }
}

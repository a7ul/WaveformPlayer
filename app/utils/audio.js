/*
1. Create a global AudioContext
2. Use AudioContext to decode audio to audiobuffer
3. Create a AudioSourceNode and attach decoded audio buffer to it
4. AudioSourceNode.start(0) to start the playback.
5. Use the _audioCtx to resume and suspend all audioSourceNodes.
*/
import {Timer, noop} from './common';

const _audioCtx = new AudioContext();
const _speakerNode = _audioCtx.destination; // saving speaker node reference

export const decodeAudio = (rawArrayBuffer) => (
  new Promise((resolve, reject) => _audioCtx.decodeAudioData(rawArrayBuffer, resolve, reject))
);

export const getSpeakerNode = () => _speakerNode;

export class MusicSource {
  constructor (audioBuffer) {
    this._buffer = audioBuffer;
    this._connectNode = _speakerNode;
    this._timer = new Timer(1000);

    this.node = _audioCtx.createBufferSource();
    this.playbackTime = 0;
    this.isPlaying = false;

    this.onTickHandler = noop;
    this.onPlayHandler = noop;
    this.onPauseHandler = noop;
    this.onStopHandler = noop;
    this.onSeekHandler = noop;
    this.onErrorHandler = noop;

    this._timer.setOnTickHandler((time) => {
      this.playbackTime = time / 1000;
      this.onTickHandler(this._getMusicSourceData());
    });
  }
  _onPlayEnd = () => this.stop()

  _getMusicSourceData = () => ({
    node: this.node,
    playbackTime: Math.round(this.playbackTime),
    isPlaying: this.isPlaying
  })

  connect = (destinationNode) => {
    try {
      this._connectNode = destinationNode;
      this.node.connect(destinationNode);
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  play = () => {
    try {
      this.node = _audioCtx.createBufferSource();
      this.node.buffer = this._buffer;
      this.node.loop = false;
      this.node.onended = this._onPlayEnd;
      this.node.connect(this._connectNode);
      this.node.start(0, this.playbackTime);
      this._timer.start();
      this.isPlaying = true;
      this.onPlayHandler(this._getMusicSourceData());
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  pause = () => {
    try {
      this.isPlaying = false;
      this.node.stop(0);
      this.node.disconnect();
      this.onPauseHandler(this._getMusicSourceData());
      this.node = null;
      this.playbackTime = this._timer.pause() / 1000.0;
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  stop = () => {
    try {
      this.isPlaying = false;
      this.node.stop(0);
      this.node.disconnect();
      this.onStopHandler(this._getMusicSourceData());
      this.node = null;
      this.playbackTime = 0;
      this._timer.stop();
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  seek = (requiredPlaybackTime) => {
    try {
      this.stop();
      this._timer.seekBy(Math.round(requiredPlaybackTime - this.playbackTime) * 1000);
      this.playbackTime = requiredPlaybackTime;
      this.play();
      this.onSeekHandler(this._getMusicSourceData());
    } catch (err) {
      this.onErrorHandler(err);
    }
  }
  setOnTickHandler = (onTickHandler = noop) => {
    this.onTickHandler = onTickHandler;
  }
  setOnPlayHandler = (onPlayHandler = noop) => {
    this.onPlayHandler = onPlayHandler;
  }
  setOnPauseHandler = (onPauseHandler = noop) => {
    this.onPauseHandler = onPauseHandler;
  }
  setOnStopHandler = (onStopHandler = noop) => {
    this.onStopHandler = onStopHandler;
  }
  setOnSeekHandler = (onSeekHandler = noop) => {
    this.onSeekHandler = onSeekHandler;
  }
  setOnErrorHandler = (onErrorHandler = noop) => {
    this.onErrorHandler = onErrorHandler;
  }
}

import {readFileToArrayBuffer} from './common';

export const getAudioSource = (arrayBuffer) => {
  const audioContext = new AudioContext();
  const source = audioContext.createBufferSource();
  return new Promise((resolve, reject) => {
    audioContext.decodeAudioData(arrayBuffer, (decodedBuffer) => {
      source.buffer = decodedBuffer;
      source.connect(audioContext.destination);
      resolve(source);
    }, (err) => {
      reject(err);
    });
  });
};

export const playAudio = (source) => {
  source.loop = true;
  source.start(0);
};

export const playSong = (audioFilePath) => {
  readFileToArrayBuffer(audioFilePath)
    .then((arrayBuffer) => getAudioSource(arrayBuffer))
    .then((audioSource) => console.log(audioSource) || playAudio(audioSource))
    .catch((err) => console.log(err));
};

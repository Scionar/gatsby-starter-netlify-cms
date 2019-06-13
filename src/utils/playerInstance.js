import { Howl } from 'howler';

let instance = null;

export default {
  get: () => instance,
  init: (...args) => {
    instance = new Howl(...args);
  },
  destroy: () => {
    if (instance) {
      instance.off();
      instance.stop();
      instance.unload();
      instance = null;
    }
  },
  play: callback => {
    const playing = instance.playing();
    // This functionality is not tested.
    if (!playing) {
      instance.play();
      if (callback) callback();
    }
  },
  pause: callback => {
    instance.pause();
    if (callback) callback();
  },
  rewind: callback => {
    instance.seek(0);
    if (callback) callback();
  },
  getDuration: () => {
    return instance.duration();
  },
  getRuntime: () => {
    instance.seek();
  }
};

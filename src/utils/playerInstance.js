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
    if (!instance) return;
    const playing = instance.playing();
    // This functionality is not tested.
    if (!playing) {
      instance.play();
      if (callback) callback();
    }
  },
  isPlaying: () => {
    if (!instance) return false;
    return instance.playing();
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
    const position = instance.seek();
    /* Prevent unexpected return. Howler returns object when audio is still loading.
      https://github.com/goldfire/howler.js/issues/1189 */
    if (typeof position !== 'number') return 0;
    return position;
  }
};

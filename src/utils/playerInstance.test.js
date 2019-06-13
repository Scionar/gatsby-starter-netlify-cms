jest.mock('howler');

import { Howl } from 'howler';

import playerInstance from './playerInstance';

describe('player util', () => {
  afterEach(() => {
    playerInstance.destroy();
  });

  it('can return null object when palyer not inited', () => {
    const playerObject = playerInstance.get();
    expect(playerObject).toEqual(null);
  });

  it('returns instance when player has been inited', () => {
    playerInstance.init();
    const playerObject = playerInstance.get();
    expect(playerObject).toBeInstanceOf(Howl);
  });

  it('forwards parameters for player when init', () => {
    playerInstance.init('param1', 'param2');
    expect(Howl).toHaveBeenCalledWith('param1', 'param2');
  });

  it('destroys instance on command', () => {
    playerInstance.init();
    playerInstance.destroy();
    const playerObject = playerInstance.get();
    expect(playerObject).toEqual(null);
  });

  it('calls right methods on destroy', () => {
    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.destroy();

    expect(playerObject.off).toHaveBeenCalledTimes(1);
    expect(playerObject.stop).toHaveBeenCalledTimes(1);
    expect(playerObject.unload).toHaveBeenCalledTimes(1);
  });

  it('calls right methods on play', () => {
    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.play();

    expect(playerObject.play).toHaveBeenCalledTimes(1);
  });

  it('runs callback on play', () => {
    const callback = jest.fn(() => {});

    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.play(callback);

    expect(callback).toBeCalled();
  });

  it('calls right methods on pause', () => {
    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.pause();

    expect(playerObject.pause).toHaveBeenCalledTimes(1);
  });

  it('runs callback on pause', () => {
    const callback = jest.fn(() => {});

    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.pause(callback);

    expect(callback).toBeCalled();
  });

  it('calls right methods on rewind', () => {
    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.rewind();

    expect(playerObject.seek).toHaveBeenCalledTimes(1);
    expect(playerObject.seek).toHaveBeenCalledWith(0);
  });

  it('runs callback on rewind', () => {
    const callback = jest.fn(() => {});

    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.rewind(callback);

    expect(callback).toBeCalled();
  });

  it('runs return duration on getDuration', () => {
    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.getDuration();

    expect(playerObject.duration).toHaveBeenCalledTimes(1);
  });

  it('calls right methods on getRuntime', () => {
    playerInstance.init();
    const playerObject = playerInstance.get();
    playerInstance.getRuntime();

    expect(playerObject.seek).toHaveBeenCalledTimes(1);
  });
});

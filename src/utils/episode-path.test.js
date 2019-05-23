import episodePath from './episode-path';

describe('episodePath', () => {
  it('converts title to url', () => {
    const title = 'Akseli Anttila : How do you design for VR?';
    const result = '/episode/Akseli-Anttila-How-do-you-design-for-VR';

    expect(episodePath(title)).toEqual(result);
  });

  it('throws error if undefined url', () => {
    expect(() => {
      episodePath();
    }).toThrow();
  });
});

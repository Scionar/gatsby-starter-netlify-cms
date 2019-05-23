import episodePlayerUrl from './episode-player-url';

describe('episodePlayerUrl', () => {
  const exampleUrl =
    'https://anchor.fm/nudgingpixels/episodes/Angelos-Arnis--Sonja-Krogius-Is-DesignOps-for-you-e3ng8s';
  const resultUrl =
    'https://anchor.fm/nudgingpixels/embed/episodes/Angelos-Arnis--Sonja-Krogius-Is-DesignOps-for-you-e3ng8s';

  it('converts URL', () => {
    expect(episodePlayerUrl(exampleUrl)).toEqual(resultUrl);
  });

  it("recover's when undefined URL provided", () => {
    expect(episodePlayerUrl()).toEqual('');
  });

  it("recover's when NULL URL provided", () => {
    expect(episodePlayerUrl(null)).toEqual('');
  });
});

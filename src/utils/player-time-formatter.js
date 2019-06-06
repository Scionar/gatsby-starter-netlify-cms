/**
 * Format the time from seconds to M:SS.
 * @param  {Number} secs Seconds to format.
 * @return {String}      Formatted time.
 */
export default secs => {
  const minutes = Math.floor(secs / 60) || 0;
  const seconds = secs - minutes * 60 || 0;

  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

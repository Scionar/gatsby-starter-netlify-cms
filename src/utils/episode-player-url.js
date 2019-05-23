/**
 * Transform episode page URL into embed URL.
 *
 * @param {string} url - Episodes page URL in Anchro FM.
 */
export default url => {
  if (!url) return '';
  return url.replace('/episodes/', '/embed/episodes/');
};

/**
 * Truncate value. If value is over wanted, length, cut it and add epllipses. If
 * no length specified, return same value.
 *
 * @param {string} value - Value to be cut if too long
 * @param {string} length - Maximum length of value
 */
export default (value, length) => {
  if (!length) return value;
  if (value.length > length) return value.substring(0, length) + '...';
  return input;
};

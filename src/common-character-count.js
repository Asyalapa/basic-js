const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const count = {};

  for (const char of s1) {
    count[char] = (count[char] || 0) + 1;
  }

  let result = 0;

  for (const char of s2) {
    if (count[char] > 0) {
      result += 1;
      count[char] -= 1;
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};

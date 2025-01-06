const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString();
  const numbers = [];

  for (let i = 0; i < nStr.length; i += 1) {
    const number = nStr.slice(0, i) + nStr.slice(i + 1);
    numbers.push(Number(number));
  }

  return Math.max(...numbers)
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) { return 'Unable to determine the time of year!'; }
  if (typeof date.getMonth !== 'function' || isNaN(date)) { throw new Error('Invalid date!'); }

  const month = date.getMonth();

  switch (true) {
    case month === 11 || month < 2:
      return 'winter';
    case month < 5:
      return 'spring';
    case month < 8:
      return 'summer';
    default:
      return 'autumn';
  }
}

module.exports = {
  getSeason
};

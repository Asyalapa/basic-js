const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * Определите возраст археологической находки, используя
 * заданные значения MODERN_ACTIVITY и HALF_LIFE_PERIOD.
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const sampleActivityFloat = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivityFloat) || sampleActivityFloat <= 0 || sampleActivityFloat > MODERN_ACTIVITY) { return false; }

  const k = Math.LN2 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / sampleActivityFloat) / k;

  return t > 0 ? Math.ceil(t) : false;
}

module.exports = {
  dateSample
};
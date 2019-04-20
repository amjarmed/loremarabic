/////////////////////////////   arLetter   ////////////////////////
const db = require('../db/db'),
  _rand = require("lodash/random");
/**
 * get one random arabic  [latter](https://en.wikipedia.org/wiki/arabic_latters).
 *
 * @static
 * @memberOf  loremarabic
 * @since 1.0.1
 * @category arabic
 * @param {no} [string=''] The string to convert.
 * @returns {string} Returns `string` one random arabic  latter.
 * @example
 *
 * loremar.arLetter();
 * // => 'أ'
 *
 * loremar.arLetter();
 * // => 'ي'
 *
 * loremar.arLetter();
 * // => 'ب'
 */
let arLetter = () => db().arlatters[0][_rand(0, db().arlatters[0].length)];

module.exports = arLetter;
/////////////////////////////   arWord   ////////////////////////
const db = require('../db/db'),
  _rand = require("lodash/random");

let arWord = () => {
  let data = db().arabicWords[0].split(" ");
  let word = '';
  for (let i = 0; i < 1; i++) {
    word += data[_rand(0, data.length)];
  }
  return word;
}
module.exports = arWord;
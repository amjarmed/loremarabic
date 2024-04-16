/////////////////////////////   arParagraph   ////////////////////////
const db = require('../db/LoremData');

(moment = require('moment')),
  (_ = require('lodash/array')),
  (_rand = require('lodash/random'));

let loremEnglish = (max = 1) => {
  // english lorem
  let loripsum = db().loremEngish;
  // store each word in array
  let fromlorems = [];
  // final string to return
  let paragraph = '-----';
  // build local array
  for (let i = 0; i < loripsum.length; i++) {
    fromlorems.push(loripsum[i]);
  }
  //////////

  if (typeof max === 'number' && max > 0) {
    for (let i = 0; i < max; i++) {
      paragraph += `--  ${fromlorems[_rand(0, fromlorems.length - 1)]}`;
    }
    return paragraph;
  } else {
    console.log('error : pass only numbers and greater than 0 !');
    return false;
  }
};

module.exports = loremEnglish;

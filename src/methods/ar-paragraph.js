/////////////////////////////   arParagraph   ////////////////////////
const db = require('../db/db'),
  moment = require('moment'),
  _ = require("lodash/array"),
  _rand = require("lodash/random");

let arParagraph = (max = 1) => {
  let fromlorems = [],
    arlorems = db().loremArbic,
    arwords = db().arabicWords,
    paragraph;
  // build local array
  for (let i = 0; i < arlorems.length; i++) {
    fromlorems.push(arlorems[i]);
  }

  for (let i = 0; i < arwords.length; i++) {
    fromlorems.push(arwords[i]);
  }
  //////////

  if (typeof max === "number" && max > 0) {

    for (let i = 0; i < max; i++) {
      paragraph += ` \r\n ${fromlorems[_rand(0, fromlorems.length - 1)]}`;
    }
    return paragraph;

  } else {
    console.log("error : pass only numbers and greater than 0 !");
    return false;
  }

}

module.exports = arParagraph;
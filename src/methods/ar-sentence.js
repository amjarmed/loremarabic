/////////////////////////////   arSentence   ////////////////////////
const db = require('../db/db'),
  moment = require('moment'),
  _ = require("lodash/array"),
  _rand = require("lodash/random");
let arSentence = (words = 10) => {
  let fromlorems = [],
    arlorems = db().loremArbic,
    arwords = db().arabicWords;
  // build local array
  for (let i = 0; i < arlorems.length; i++) {
    fromlorems.push(arlorems[i]);
  }
  for (let i = 0; i < arwords.length; i++) {
    fromlorems.push(arwords[i]);
  }
  // choose random el from array then convert it to array
  let allwords = fromlorems[_rand(0, fromlorems.length - 1)].split(" ");

  let ran = _rand(allwords.length),
    sentence, temp;

  if (typeof words === "number" && words > 0) {

    if (ran <= allwords.length - 10) {
      temp = _.slice(allwords, ran, ran + 10);
    } else {
      temp = _.slice(allwords, 0, 10);
    }
    //  console.log(temp.length);

    sentence = _.join(temp, " ");

    return sentence;
  } else {
    console.log("error : pass only numbers and greater than 0 !");
    return false;
  }

}

module.exports = arSentence;
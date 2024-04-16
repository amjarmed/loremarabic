/////////////////////////////   arWordsPara   ////////////////////////
const db = require('../db/LoremData');

let arWordsPara = (max = 1) => {
  let lorem = db().loremArbic[0];
  let data = '';
  if (typeof max === 'number' && max > 0) {
    for (let i = 0; i < max; i++) data += ` \r\n ${lorem}`;
    return data;
  } else {
    console.log('error : pass only numbers and greater than 0 !');
    return false;
  }
};

module.exports = arWordsPara;

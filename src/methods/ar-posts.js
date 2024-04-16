/////////////////////////////   arPosts   ////////////////////////
const db = require('../db/LoremData');

(arSentence = require('./ar-sentence')),
  (arWordsPara = require('./ar-words-para')),
  (moment = require('moment'));

let arPosts = () => {
  let lorem = db().loremArbic.txt1;
  let data = '';
  let post = {
    title: arSentence(15),
    date: moment().fromNow(),
    content: arWordsPara(3),
    thumb: 'https://placeholder.com/#333',
  };
  return post;
};
module.exports = arPosts;

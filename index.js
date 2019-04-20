/**
 * @name: `loremarabic`
 *@desc: a tool to generate arabic lorem text
 *@author : amjarino
 */
module.exports = {
  'arLetter': require("./src/methods/ar-letter"),
  'arWord': require("./src/methods/ar-word"),
  'arSentence': require("./src/methods/ar-sentence"),
  'arParagraph': require("./src/methods/ar-paragraph"),
  'arWordsPara': require("./src/methods/ar-words-para"),
  'loremEnglish': require("./src/methods/lorem-english"),
  'loremOriginal': require("./src/methods/lorem-original"),
  'arPosts': require("./src/methods/ar-posts")
}
const LoremAr = require('../index');

const dab = `
ar Letter:  ${LoremAr.arLetter()},
-------------------------------
ar Sentence : ${LoremAr.arSentence()},
-------------------------------
ar Paragraph:  ${LoremAr.arParagraph()},
-------------------------------
 ar Word : ${LoremAr.arWord()},
 -------------------------------
ar WordsPara : ${LoremAr.arWordsPara()},
-------------------------------
ar Posts : ${LoremAr.arPosts()}
-------------------------------
 lorem English: ${LoremAr.loremEnglish()}
 -------------------------------
 ${LoremAr.loremOriginal(1)},
 -------------------------------
`;

console.log(LoremAr.loremOriginal());

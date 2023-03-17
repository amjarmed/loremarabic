# Lorem Arabic

generate **arabic lorem text**, contain over sex methods , you have full optionality to choose what you like, random letters, paragraphs, sentences...

> **note :** I just start learning node js and npm, so this package i'ts not stable right now, and my english too :)

## features

- include 3 versions of arabic lorem text.
- include 1 real arabic text but make nonesense.
- arabic letters.
- include 3 versions of original lorem text.
- include 2 versions of english lorem text.

**important**: keep in mind that arabic language is RTL, and use UTF-8 for charset.

## Usage

```bash
  npm i loremarabic
```

## require

```js
// yourfile.js

    const loremar= require("loremarabic");
    console.log(loremar.arSentence());
    => 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا '
```

---

## methods

| method               | description                                                            | params                                               |
| -------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- | --- |
| `arLetter(max)`      | Return a random letter                                                 | No                                                   |
| `arWord()`           | Return a random word                                                   | No                                                   |
| `arSentence(words)`  | Return a sentence                                                      | **words:** words count in a sentence, default(10)    |
| `arParagraph(max)`   | Return a string of paragraphs                                          | **max:** repetition count of paragraphs, default (1) |
| `arWordsPara(max)`   | Return a string of paragraphs with real arabic words but make nonsense | **max:** repetition count of paragraphs, default (1) |
| `arPosts()`          | Return an object contain post structure                                | No                                                   |
| `loremEnglish(max)`  | Return string of the original lorem text                               | **max:** repetition count of paragraphs, default (1) |     |
| `loremOriginal(max)` | Return string of the original lorem text                               | **max:** repetition count of paragraphs, default (1) |     |

---

> text from [www.nabadv.com](https://www.nabadv.com/%D9%85%D9%82%D8%A7%D9%84%D8%A7%D8%AA-%D9%84%D9%84%D9%85%D8%AA%D8%AE%D8%B5%D8%B5%D9%8A%D9%86/411-lorem-ipsum.html).

---

> This project is licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).

---

---

note : new update comming soon 2023

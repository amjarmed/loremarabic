# Lorem Arabic (`loremarabic`)

[![npm version](https://img.shields.io/npm/v/loremarabic.svg)](https://www.npmjs.com/package/loremarabic)
[![downloads](https://img.shields.io/npm/dw/loremarabic.svg)](https://www.npmjs.com/package/loremarabic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/types-included-blue.svg)](./index.d.ts)

A lightweight, zero-dependency JavaScript/TypeScript package to generate **Arabic Lorem text**, alphabets, words, paragraphs, mock posts, and classical Latin/English placeholder text. Fully compatible with ESM and CommonJS.

> **Important**: Keep in mind that the Arabic language is **RTL (Right-to-Left)** and uses the **UTF-8** charset.

---

## Installation

```bash
npm i loremarabic
```

---

## Usage

### ES Modules (`import`)

```js
import loremarabic, { paragraph, word, post } from 'loremarabic';

// Generate a random paragraph
console.log(paragraph());
// Output: 'الإتحاد في, ذات أسيا للغزو، الخطّة و, الآخر لألمانيا جهة بل. في سحقت هيروشيما البريطاني يتم...'

// Generate a random word
console.log(word());

// Generate a mock post object
console.log(post());
```

### CommonJS (`require`)

```js
const loremarabic = require('loremarabic');

console.log(loremarabic.paragraph());
console.log(loremarabic.word());
```

---

## Methods & API Reference

| Method / Property | Type | Description |
| :--- | :--- | :--- |
| `alphabets` | `string[]` | Returns an array of Arabic alphabet letters (`['ا', 'ب', 'ت', ...]`). |
| `word()` | `Function` | Returns a random Arabic word string. |
| `paragraph()` | `Function` | Returns a random Arabic paragraph string. |
| `post()` | `Function` | Returns a mock blog post object containing `title`, `date`, `intro`, `content`, and `thumb`. |
| `naturalEnglish` | `string` | Returns a natural long English placeholder text string. |
| `naturalArabic` | `string` | Returns a natural long Arabic placeholder text string. |
| `loremIpsum` | `string` | Returns classical Latin Lorem Ipsum placeholder text string. |

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/amjarmed/loremarabic/issues).

---

## Author

- **Mohamed Amjar**
- Website: [https://www.amjarmed.com/](https://www.amjarmed.com/)

---

## License

This project is licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).

import test from 'node:test';
import assert from 'node:assert';
import loremarabic, {
  alphabets,
  word,
  paragraph,
  post,
  naturalEnglish,
  naturalArabic,
  loremIpsum,
} from './index.js';

test('alphabets should be an array of Arabic letters', () => {
  assert.ok(Array.isArray(alphabets));
  assert.ok(alphabets.length > 0);
  assert.strictEqual(alphabets[0], 'ا');
});

test('word() should return a random Arabic word string', () => {
  const w = word();
  assert.strictEqual(typeof w, 'string');
  assert.ok(w.length > 0);
});

test('paragraph() should return an Arabic paragraph string', () => {
  const p = paragraph();
  assert.strictEqual(typeof p, 'string');
  assert.ok(p.length > 0);
  assert.ok(p.endsWith('.'));
});

test('post() should return a post object with required fields', () => {
  const p = post();
  assert.strictEqual(typeof p, 'object');
  assert.strictEqual(typeof p.title, 'string');
  assert.strictEqual(typeof p.date, 'string');
  assert.strictEqual(typeof p.intro, 'string');
  assert.strictEqual(typeof p.content, 'string');
  assert.strictEqual(typeof p.thumb, 'string');
});

test('naturalEnglish, naturalArabic, and loremIpsum should be strings', () => {
  assert.strictEqual(typeof naturalEnglish, 'string');
  assert.strictEqual(typeof naturalArabic, 'string');
  assert.strictEqual(typeof loremIpsum, 'string');
  assert.ok(naturalEnglish.length > 0);
  assert.ok(naturalArabic.length > 0);
  assert.ok(loremIpsum.length > 0);
});

test('default export should contain all methods and properties', () => {
  assert.ok(loremarabic.alphabets);
  assert.strictEqual(typeof loremarabic.word, 'function');
  assert.strictEqual(typeof loremarabic.paragraph, 'function');
  assert.strictEqual(typeof loremarabic.post, 'function');
  assert.ok(loremarabic.naturalEnglish);
  assert.ok(loremarabic.naturalArabic);
  assert.ok(loremarabic.loremIpsum);
});

// test/testInvert.js
const invert = require('../invert');
const assert = require('assert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const expectedInvertedObject = { 'Bruce Wayne': 'name', '36': 'age', 'Gotham': 'location' };

assert.deepStrictEqual(invert(testObject), expectedInvertedObject, 'invert() function failed');
console.log('All tests passed for invert');

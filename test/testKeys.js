// test/testKeys.js
const keys = require('../keys');
const assert = require('assert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const expectedKeys = ['name', 'age', 'location'];

assert.deepStrictEqual(keys(testObject), expectedKeys, 'keys() function failed');
console.log('All tests passed for keys');

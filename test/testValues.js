// test/testValues.js
const values = require('../values');
const assert = require('assert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const expectedValues = ['Bruce Wayne', 36, 'Gotham'];

assert.deepStrictEqual(values(testObject), expectedValues, 'values() function failed');
console.log('All tests passed for values');

// test/testPairs.js
const pairs = require('../pairs');
const assert = require('assert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const expectedPairs = [['name', 'Bruce Wayne'], ['age', 36], ['location', 'Gotham']];

assert.deepStrictEqual(pairs(testObject), expectedPairs, 'pairs() function failed');
console.log('All tests passed for pairs');

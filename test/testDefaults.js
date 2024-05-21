// test/testDefaults.js
const defaults = require('../defaults');
const assert = require('assert');

const testObject = { name: 'Bruce Wayne', age: 36 };
const defaultProps = { age: 40, location: 'Gotham' };
const expectedObjectWithDefaults = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

assert.deepStrictEqual(defaults(testObject, defaultProps), expectedObjectWithDefaults, 'defaults() function failed');
console.log('All tests passed for defaults');

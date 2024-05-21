// test/testMapObject.js
const mapObject = require('../mapObject');
const assert = require('assert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const callback = (value) => typeof value === 'number' ? value + 1 : value.toUpperCase();
const expectedMappedObject = { name: 'BRUCE WAYNE', age: 37, location: 'GOTHAM' };

assert.deepStrictEqual(mapObject(testObject, callback), expectedMappedObject, 'mapObject() function failed');
console.log('All tests passed for mapObject');

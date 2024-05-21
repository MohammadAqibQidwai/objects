// invert.js
function invert(obj) {
    const result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }
    return result;
}

module.exports = invert;

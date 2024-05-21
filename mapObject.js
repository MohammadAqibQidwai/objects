// mapObject.js
function mapObject(obj, cb) {
    const result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = cb(obj[key], key, obj);
        }
    }
    return result;
}

module.exports = mapObject;

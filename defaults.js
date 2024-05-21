// defaults.js
function defaults(obj, defaultProps) {
    for (let key in defaultProps) {
        if (defaultProps.hasOwnProperty(key) && obj[key] === undefined) {
            obj[key] = defaultProps[key];
        }
    }
    return obj;
}

module.exports = defaults;

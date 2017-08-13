/**
 * Increments the values of an object based on the occurrence of it's keys in an array.
 * @param {object} obj with numerical values
 * @param {array} arr
 */
exports.keysInArr = function (obj, arr) {
    for (let key in obj) {
        for (let element of arr) {
            if (element === key) {
                obj[key]++;
            }
        }
    }
    return obj;
};

/**
 *  Set's the values within an object to 0;
 * @param {object} object with numerical values.
 */
exports.setKeysToZero = function (obj) {
    for (let key in obj) {
        obj[key] = 0;
    }
};

/**
 * Removes the first and last characters of a string.
 * Use to remove curly braces from a stringified JS object.
 * @param {JSON.stringify(obj)} A stringified JavaScript object
 */
exports.rmBraces = function (jsonStr) {
    jsonStr = jsonStr.split('');
    jsonStr.shift();
    jsonStr.pop();
    jsonStr = jsonStr.join('');
    return jsonStr;
};

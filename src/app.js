const fs = require('fs');

/* Path of desired directory */
const directory = './bacon-ipsum';
/* Object keys are the words to be counted. Values should be 0 */
const foods = {
    ribs: 0,
    chicken: 0,
    jerky: 0,
    tenderloin: 0,
    jalapeno: 0,
    lorem: 0
};

/* Used to keep track of the number of files in a dir. Should be set to 0 */

/**
 * Logs out the occurrence of an objects keys in a directory.
 * @param {string} dirPath: directory path relative to function evocation.
 * @param {object} wordsObj: keys will be iterated over and numerical values to be incremented.
 * @param {number} fileCount: (optional): Where index that displays next to the `File ${num}` output will start. Default is 1
 */
function dirWordCount(dirPath, wordsObj, fileCount = 1) {
    fs.readdir(dirPath, (error, files) => {
        if (error) {
            throw error;
        }

        for (let item of files) {
            let itemPath = `${dirPath}/${item}`;

            fs.stat(itemPath, (error, stat) => {
                if (error) {
                    throw error;
                }

                if (stat.isFile()) {
                    let words = fs.readFileSync(itemPath, 'utf-8').split(' ');
                    let output = util.rmBraces(
                        JSON.stringify(util.keysInArr(wordsObj, words), null, 4)
                    );

                    console.log(`File ${fileCount}\n${item}:${output}`); // eslint-disable-line no-console

                    util.setKeysToZero(wordsObj);
                    fileCount++;
                } else if (stat.isDirectory()) {
                    dirWordCount(itemPath, wordsObj, fileCount);
                }
            });
        }
    });
}

dirWordCount(directory, foods);

/**
 * Increments the values of an object based on the occurrence of it's keys in an array.
 * @param {object} obj with numerical values
 * @param {array} arr
 */
function keysInArr(obj, arr) {
    for (let key in obj) {
        for (let element of arr) {
            if (element === key) {
                obj[key]++;
            }
        }
    }
    return obj;
}

/**
 *  Set's the values within an object to 0;
 * @param {object} object with numerical values.
 */
function setKeysToZero(obj) {
    for (let key in obj) {
        obj[key] = 0;
    }
}

/**
 * Removes the first and last characters of a string.
 * Use to remove curly braces from a stringified JS object.
 * @param {JSON.stringify(obj)} A stringified JavaScript object
 */
function rmBraces(jsonStr) {
    jsonStr = jsonStr.split('');
    jsonStr.shift();
    jsonStr.pop();
    jsonStr = jsonStr.join('');
    return jsonStr;
}

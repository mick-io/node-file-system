const fs = require('fs');
const path = require('path');

const filePath = './bacon-ipsum';
const foods = {
    ribs: 0,
    chicken: 0,
    jerky: 0,
    tenderloin: 0,
    jalapeno: 0,
    lorem: 0
};

path.basename('./');

/**
 *
 * @param {*} dirPath
 * @param {*} wordsObj
 */
function dirWordCount(dirPath, wordsToCount) {

    fs.readdir(dirPath, (error, files) => {
        if (error) {
            throw new Error(error);
        }

        for (let file of files) {
            let filePath = `${dirPath}/${file}`;

            fs.stat(filePath, (error, stat) => {
                if (error) {
                    throw new Error(error);
                }
                if (stat.isFile()) {
                    fs.readFile(filePath, 'utf-8', (error, words) => {
                        if (error) {
                            throw new Error(error);
                        }
                        words = words.split(' ');
                        keysInArr(wordsToCount, words);
                        // console.log(wordsToCount);
                    });
                }
            });
        }
    });
}

/**
 *
 * @param {*} obj
 * @param {*} arr
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

dirWordCount(filePath, foods);

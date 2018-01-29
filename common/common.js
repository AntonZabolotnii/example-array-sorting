const fs = require('fs');
const path = require('path');

function writeFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, 2), err => {
        if (err) throw err;
    });
}
module.exports.generateArray = function (len = 1000, maxItemValue = len) {
    const arr = [];
    while (len--) {
        const random = Math.ceil(maxItemValue * Math.random());
        arr.push(random);
    }
    writeFile(path.join('generated', 'unsorted.json'), arr);
    return arr;
}
module.exports.log = function (data) {
    console.log(JSON.stringify(data));
}
module.exports.swap = function(arr, i) {
    const tmp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = tmp;
}
module.exports.measureTime = function(type, f) {
    return function() {
        const start = process.hrtime();
        const result = f.apply(null, arguments);
        const time = process.hrtime(start);
        console.log(`${type}: took ${time[0]} sec and ${time[1]/1e6} msec`);
        return result;
    }
}
module.exports.copyArr = function(arr) {
    return arr.slice();
}
module.exports.writeFile = writeFile;
const path = require('path');
const { generateArray, measureTime, writeFile, copyArr } = require('./lib/util');
const {
    insertionSort,
    bubbleSort,
    quickSort,
    selectionSort,
    mergeSort,
    heapSort
} = require('./lib/implementations');

const sortTypeFnMapping = {
    insertion: insertionSort,
    bubble: bubbleSort,
    quick: quickSort,
    selection: selectionSort,
    merge: mergeSort,
    heap: heapSort
};

const arr = generateArray(5e4);

Object.keys(sortTypeFnMapping).map(method => {
    return {
        method,
        sortFnDecorated: measureTime(`${method} sort`, sortTypeFnMapping[method])
    };
}).forEach(sortTypeMapping => {
    writeFile(path.join('output', `sorted_${sortTypeMapping.method}.json`),
        sortTypeMapping['sortFnDecorated'](copyArr(arr)));
});
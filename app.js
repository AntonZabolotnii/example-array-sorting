const path = require('path');
const { generateArray, measureTime, writeFile, copyArr } = require('./common/common');
const { insertionSort, bubbleSort } = require('./common/implementations');

const arr = generateArray(5e4);

const insertionSortWithMeasures = measureTime('Insertion sort', insertionSort);
const bubbleSortWithMeasures = measureTime('Bubble sort', bubbleSort);

writeFile(path.join('generated', 'sorted_insertion.json'), insertionSortWithMeasures(copyArr(arr)));
writeFile(path.join('generated', 'sorted_bubble.json'), bubbleSortWithMeasures(copyArr(arr)));
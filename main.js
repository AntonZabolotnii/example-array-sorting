const path = require('path');
const { generateArray, measureTime, writeFile, copyArr } = require('./lib/util');
const { insertionSort, bubbleSort, quickSort, selectionSort } = require('./lib/implementations');

const arr = generateArray(5e4);

const insertionSortWithMeasures = measureTime('Insertion sort', insertionSort);
const bubbleSortWithMeasures = measureTime('Bubble sort', bubbleSort);
const quickSortWithMeasures = measureTime('Quick sort', quickSort);
const selectionSortWithMeasures = measureTime('Selection sort', selectionSort);

writeFile(path.join('output', 'sorted_insertion.json'), insertionSortWithMeasures(copyArr(arr)));
writeFile(path.join('output', 'sorted_bubble.json'), bubbleSortWithMeasures(copyArr(arr)));
writeFile(path.join('output', 'sorted_quick.json'), quickSortWithMeasures(copyArr(arr)));
writeFile(path.join('output', 'sorted_selection.json'), selectionSortWithMeasures(copyArr(arr)));
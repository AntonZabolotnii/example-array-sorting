const { swap } = require('./common');

function insertionSort (arr) {
    for (let i=0, len = arr.length; i < len; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j-1]) {
            swap(arr, j-1);
            j--;
        }
    }
    return arr;
}

function bubbleSort(arr) {
    for (let len = arr.length, i = len-1; i >=0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j);
            }
        }
    }
    return arr;
}

module.exports = {
    insertionSort,
    bubbleSort
}
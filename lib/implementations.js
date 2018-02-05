const { swap } = require('./util');

function insertionSort (arr) {
    for (let i=0, len = arr.length; i < len; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j-1]) {
            swap(arr, j-1, j);
            j--;
        }
    }
    return arr;
}

function bubbleSort(arr) {
    for (let len = arr.length, i = len-1; i >=0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

function quickSort(arr) {
    function partition(arr, start, end) {
        let pivot = arr[end];
        let pIndex = start;

        for (let i = start; i < end; i++) {
            if (arr[i] <= pivot) {
                swap(arr, i, pIndex++);
            }
        }
        swap(arr, end, pIndex);

        return pIndex;
    }

    function quickSortRe(arr, start = 0, end = arr.length - 1) {
        if (start < end) {
            const pivot = partition(arr, start, end);
            quickSortRe(arr, start, pivot - 1);
            quickSortRe(arr, pivot + 1, end);
        }
        return arr;
    }

    return quickSortRe(arr);
}

function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        let minValue = arr[i];

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < minValue) {
                minValue = arr[j];
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, minIndex, i);
        }
    }

    return arr;
}

function mergeSort(arr) {

    function mergeSortRe(arr) {
        const len = arr.length;

        if (len <= 1) {
            return arr;
        }

        const splitIndex = Math.ceil(len/2);

        const arrLeft = mergeSortRe(arr.slice(0, splitIndex));
        const arrRight = mergeSortRe(arr.slice(splitIndex));

        return merge(arrLeft, arrRight);
    }

    function merge(a, b) {
        let c = [];

        while (a.length && b.length) {
            if (a[0] <= b[0]) {
                c.push(a.shift());
            } else {
                c.push(b.shift());
            }
        }

        if (a.length) {
            c = c.concat(a);
        }

        if (b.length) {
            c = c.concat(b);
        }

        return c;
    }

    return mergeSortRe(arr);
}

module.exports = {
    insertionSort,
    bubbleSort,
    quickSort,
    selectionSort,
    mergeSort
}
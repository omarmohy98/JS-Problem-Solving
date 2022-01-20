// Problem 32 (The bubble sort method)
function bubbleSort(array) {
    function swap(index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                swap(i, j);
            }
        }
    }
    return array;
}

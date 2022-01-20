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
console.log(
    bubbleSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);

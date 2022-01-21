// Problem 34 (Implement Insertion Sort)
function insertionSort(array) {
    function swap(index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] < array[j]) {
                swap(i, j);
                --i;
            }
        }
    }
    return array;
}

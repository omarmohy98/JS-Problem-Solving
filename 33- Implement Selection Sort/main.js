// Problem 33 (Implement Selection Sort)
function selectionSort(array) {
    function swap(index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    for (let i = 0; i < array.length; i++) {
        let min = Math.min(...array.slice(i));
        swap(i, array.lastIndexOf(min));
    }
    return array;
}
console.log(
    selectionSort([
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ])
);

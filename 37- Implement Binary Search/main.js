// problem 37 (Implement Binary Search)
const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70,
];

function binarySearch(searchList, value) {
    let arrayPath = [];
    let condition = searchList.length;
    while (condition > 0) {
        let sepertorIndex;
        searchList.length % 2 === 0
            ? (sepertorIndex = Math.floor(searchList.length / 2) - 1)
            : (sepertorIndex = Math.floor(searchList.length / 2));
        arrayPath.push(searchList[sepertorIndex]);
        if (searchList[sepertorIndex] > value) {
            searchList = searchList.slice(0, sepertorIndex);
        } else if (searchList[sepertorIndex] < value) {
            searchList = searchList.slice(sepertorIndex + 1);
        } else if (searchList[sepertorIndex] === value) {
            break;
        }
        condition = searchList.length;
    }
    return arrayPath[arrayPath.length - 1] === value
        ? arrayPath
        : "Value Not Found";
}

console.log(binarySearch(testArray, 0)); //[13, 5, 2, 0]
console.log(binarySearch(testArray, 6)); // Value Not Found

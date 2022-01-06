// Problem 16 (Flatten an Array)
function flattenArray(array) {
    let flatArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "object") {
            flatArray.push(array[i]);
        } else if (typeof array[i] === "object") {
            for (let j = 0; j < array[i].length; j++) {
                flatArray.push(array[i][j]);
            }
        }
    }
    return flatArray;
}
console.log(flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]));

// Problem 31 (Pairwise)
function pairwise(arr, arg) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j <= i) {
                continue;
            }
            if (
                arr[i] + arr[j] == arg &&
                indices.indexOf(i) === -1 &&
                indices.indexOf(j) === -1
            ) {
                indices.push(i, j);
            }
        }
    }
    return indices.reduce((acc, ele) => {
        return acc + ele;
    }, 0);
}

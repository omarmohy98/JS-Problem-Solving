// Problem 28 (Find the Symmetric Difference)
function sym(...args) {
    let symmetricDifference = args.slice();
    let length = symmetricDifference.length;
    while (length > 1) {
        let arr = [];
        for (let i = 0; i < symmetricDifference[0].length; i++) {
            if (
                symmetricDifference[1].indexOf(symmetricDifference[0][i]) ===
                    -1 &&
                arr.indexOf(symmetricDifference[0][i]) === -1
            ) {
                arr.push(symmetricDifference[0][i]);
            }
        }
        for (let i = 0; i < symmetricDifference[1].length; i++) {
            if (
                symmetricDifference[0].indexOf(symmetricDifference[1][i]) ===
                    -1 &&
                arr.indexOf(symmetricDifference[1][i]) === -1
            ) {
                arr.push(symmetricDifference[1][i]);
            }
        }
        symmetricDifference.splice(0, 2, arr);
        length = symmetricDifference.length;
    }
    return symmetricDifference[0];
}
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // [1, 4, 5]

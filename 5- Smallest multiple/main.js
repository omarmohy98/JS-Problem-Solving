// Problem 5 (Smallest multiple)
function findSmallestNumber(rangeStart, rangeEnd) {
    for (let i = 1; ; ) {
        for (let j = rangeStart; ; ) {
            if (i % j !== 0) {
                break;
            } else {
                j++;
                if (j === rangeEnd) {
                    return i;
                }
            }
        }
        i++;
    }
}
console.log(findSmallestNumber(1, 10));
console.log(findSmallestNumber(1, 20));

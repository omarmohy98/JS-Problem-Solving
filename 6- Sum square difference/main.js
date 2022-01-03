// Problem 6 (Sum square difference)
function getSumSquareDifference(startNum, endNum) {
    let sumOfSquares = 0;
    let squaresOfSum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sumOfSquares += i ** 2;
        squaresOfSum += i;
    }
    squaresOfSum = squaresOfSum ** 2;
    return squaresOfSum - sumOfSquares;
}
console.log(getSumSquareDifference(1, 10));
console.log(getSumSquareDifference(1, 100));

// Problem 2 (Even Fibonacci numbers)
// Generate Fibonacci sequence
function generateSequence() {
    let sequence = [1, 2];
    let target = 4000000;
    let nextTerm = 0;
    for (let i = 0; i < 1; ) {
        nextTerm =
            sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (nextTerm > target) {
            break;
        } else {
            sequence.push(nextTerm);
        }
    }
    return sequence;
}
// Get the sum of the even-valued terms
function getSum(arr) {
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        }
    }
    return evenSum;
}
// Functions Calling
let sequenceArray = generateSequence();
console.log(getSum(sequenceArray));

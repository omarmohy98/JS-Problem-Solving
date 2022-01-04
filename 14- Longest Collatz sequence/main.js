// Problem 14 (Longest Collatz sequence)
function getLongestCollatzsequence() {
    let start = 0;
    let longestSequence = 0;
    for (let i = 1; i < 1000000; i++) {
        let sequence = [];
        if (i === 1) {
            sequence = [1, 4, 2, 1];
        } else {
            sequence.push(i);
            for (let j = 0; ; j++) {
                if (sequence[sequence.length - 1] === 1) {
                    break;
                }
                if (sequence[sequence.length - 1] % 2 === 0) {
                    sequence.push(sequence[sequence.length - 1] / 2);
                } else {
                    sequence.push(3 * sequence[sequence.length - 1] + 1);
                }
            }
        }
        if (sequence.length > longestSequence) {
            longestSequence = sequence.length;
            start = i;
        }
    }
    return start;
}
console.log(getLongestCollatzsequence());

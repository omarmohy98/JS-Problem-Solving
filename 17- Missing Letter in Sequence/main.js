// Problem 17 (Missing Letter in Sequence)
function findMissingLetterInSequence(sequence) {
    let alpah = "abcdefghijklmnopqrstuvwxyz";
    let missingLetter = "";
    let start = alpah.indexOf(sequence[0]);
    let end = alpah.indexOf(sequence[sequence.length - 1]);
    let originSqguence = alpah.slice(start, end + 1);
    if (originSqguence.length === sequence.length) {
        return "No Missing Letter";
    } else {
        for (let i = 0; i < originSqguence.length; i++) {
            if (originSqguence[i] !== sequence[i]) {
                missingLetter = originSqguence[i];
                break;
            }
        }
    }
    return missingLetter;
}
console.log(findMissingLetterInSequence("abcdeghi")); // f
console.log(findMissingLetterInSequence("defgi")); // h
console.log(findMissingLetterInSequence("xyz")); // No Missing Letter

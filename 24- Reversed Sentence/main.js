// Problem 24 (Reversed Sentence)
function reverseSentence(str) {
    // First Way
    // return str.split(" ").reverse().join(" ");

    // Second Way
    str = str.split(" ");
    let arr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i]);
    }
    return arr.join(" ");
}

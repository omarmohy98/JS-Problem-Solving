// Problem 18 (Find English Letter Position)
function findLetterPosition(letter) {
    let alpah = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alpah.length; i++) {
        if (alpah[i] === letter.toLowerCase()) {
            return i + 1;
        }
    }
}
console.log(findLetterPosition("C")); // 3
console.log(findLetterPosition("c")); // 3
console.log(findLetterPosition("F")); // 6
console.log(findLetterPosition("K")); // 11
console.log(findLetterPosition("p")); // 16

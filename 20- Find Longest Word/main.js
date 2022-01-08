// Problem 20 (Find Longest Word)
function findLongestWord(str) {
    let strArray = str.split(" ");
    let max = 0;
    let index = 0;
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > max) {
            index = i;
            max = strArray[i].length;
        }
    }
    return strArray[index];
}
console.log(findLongestWord("In Programming We Love Elzero Academy Tooooooooooo Much")); // Tooooooooooo

// Problem 19 (Remove Duplicate Words)
function removeDupicateWords(str) {
    let strArray = str.split(" ");
    let notDupicateStr = [];
    for (let i = 0; i < strArray.length; i++) {
        if (notDupicateStr.indexOf(strArray[i]) === -1) {
            notDupicateStr.push(strArray[i]);
        }
    }
    return notDupicateStr.join(" ");
}
console.log(removeDupicateWords("Hello Elzero Web Web Hello School"));

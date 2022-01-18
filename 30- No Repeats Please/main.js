// Problem 30 (No Repeats Please)
function permAlone(str) {
    str = str.split("");
    function swap(index1, index2) {
        [str[index1], str[index2]] = [str[index2], str[index1]];
    }
    // Get All possible premutations using Heap's Algorithm
    let premutations = [];
    function getPermutations(length) {
        if (length === 1) {
            premutations.push(str.join(""));
        } else {
            for (let i = 0; i != length; i++) {
                getPermutations(length - 1);
                if ((length - 1) % 2 === 0) {
                    swap(length - 1, i);
                } else {
                    swap(length - 1, 0);
                }
            }
        }
    }
    getPermutations(str.length);
    // Filter all Premutations to get Premutations with no repeat
    let regex = /(.)\1+/;
    let nonRepeatPremutations = premutations.filter((ele) => {
        return !ele.match(regex);
    });
    return nonRepeatPremutations.length;
}

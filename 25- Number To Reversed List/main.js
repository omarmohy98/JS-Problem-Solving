// Problem 25 (Number To Reversed List)
function convartNumberToReversedList(num) {
    return num
        .toString()
        .split("")
        .reverse()
        .map((ele) => {
            return +ele;
        });
}

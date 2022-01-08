// Problem 22 (Swap Cases)
function swapCases(str) {
    str = str.split("");
    let strArray = [];
    for (let i = 0; i < str.length; i++) {
        if (Number.isNaN(+str[i])) {
            str[i] === str[i].toLowerCase()
                ? strArray.push(str[i].toUpperCase())
                : strArray.push(str[i].toLowerCase());
        }
    }
    return strArray.join("");
}
console.log(swapCases("HellO")); // hELLo
console.log(swapCases("WOrld")); // woRLD
console.log(swapCases("12ProGRAM12")); // pROgram

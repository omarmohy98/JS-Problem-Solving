// Problem 23 (Add Commas And Underscore)
function addCommasAndUnderscore(num) {
    if (num.toString().length <= 3) {
        return num;
    } else {
        let str = num.toString().split("");
        str.splice(-3, 0, "_");
        if (str.length > 6) {
            for (let i = 3; i < str.length - 3; i += 4) {
                str.splice(i, 0, ",");
            }
            if (str.lastIndexOf(",") + 1 === str.indexOf("_")) {
                str.splice(str.lastIndexOf(","), 1);
            }
        }
        num = str.join("");
        return num;
    }
}
console.log(addCommasAndUnderscore(120)); // 120
console.log(addCommasAndUnderscore(1530)); // 1_530
console.log(addCommasAndUnderscore(120510650)); // 120,510_650
console.log(addCommasAndUnderscore(510650480910)); // 510,650,480_910
console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032

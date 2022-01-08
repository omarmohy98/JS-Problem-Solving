// Problem 26 (Text Characters Location)
function findWordCharLocation(word) {
    let alpah = "abcdefghijklmnopqrstuvwxyz";
    return word
        .toLowerCase()
        .split("")
        .map((ele) => {
            return alpah.indexOf(ele) + 1;
        })
        .join(" ");
}

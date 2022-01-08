// Problem 27 (Phone Number Pattern)
function phoneNumber(arr) {
    if (arr.length === 10) {
        arr.splice(0,0,"(")
        arr.splice(4,0,")")
        arr.splice(5,0," ")
        arr.splice(9,0,"-")
        return arr.join("");
    } else {
        return "Invalid Phone Number";
    }
}

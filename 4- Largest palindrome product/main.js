// Problem 4 (Largest palindrome product)
function findLargestPalindrome() {
    let num = 0;
    let palindromeNums = [];
    // Get All palindromeNums generated from product of two three bits numbers
    for (let i = 100; i <= 999; i++) {
        for (let j = 100; j <= 999; j++) {
            num = i * j;
            let strArr = num.toString().split("");
            if (strArr.join("") === strArr.reverse().join("")) {
                palindromeNums.push(num);
            }
        }
    }
    // sort palindromeNumbers to get largest number
    palindromeNums.sort((a, b) => {
        return b - a;
    });
    return palindromeNums[0];
}
console.log(findLargestPalindrome());

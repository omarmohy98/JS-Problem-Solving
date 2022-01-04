// Problem 12 (Highly divisible triangular number)
function divisorsNumber(num) {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            counter++;
        }
    }
    return counter;
}
function triangleNumber(divisorsLimit) {
    let num = 0;
    for (let i = 1; ; i++) {
        num += i;
        if (divisorsNumber(num) >= divisorsLimit) {
            return num;
        }
    }
}
console.log(triangleNumber(500));

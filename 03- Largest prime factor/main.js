// Problem 3 (Largest prime factor)
function getLargestPrimeFactor(num) {
    while (num % 2 === 0) {
        num = Math.floor(num / 2);
    }
    // num must be odd at this point.
    // So we can skip one element
    // (Note i = i +2)
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i = i + 2) {
        // While i divides num, print i
        // and divide num
        while (num % i === 0) {
            num = Math.floor(num / i);
        }
    }
    // This condition is to handle the
    // case when num is a prime number
    // greater than 2
    if (num > 2) return num;
}
// console.log(getLargestPrimeFactor(13195));
console.log(getLargestPrimeFactor(600851475143));

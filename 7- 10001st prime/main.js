// Problem 7 (10001st prime)
// Check if number is prime or not
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// Generate primeNumbers till reach wanted primeNumber
function getPrimeNumber(numOrder) {
    let primeNumbers = [];
    for (let i = 2; primeNumbers.length <= numOrder - 1; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers[primeNumbers.length - 1];
}
console.log(getPrimeNumber(10001));

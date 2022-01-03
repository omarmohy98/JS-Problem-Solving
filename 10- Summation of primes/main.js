// Problem 10 (Summation of primes)
// Check if number is prime or not
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function findSum(limit) {
    let sum = 0;
    for (let i = 2; i < limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
console.log(findSum(10));
console.log(findSum(2000000));

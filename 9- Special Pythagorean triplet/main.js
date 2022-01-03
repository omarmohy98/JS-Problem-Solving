// Problem 9 (Special Pythagorean triplet)
function solution(n) {
    for (var i = Math.floor(n / 3 + 1); i < n / 2; i++) {
        var sqa_b = i * i - n * n + 2 * n * i;
        var a_b = Math.floor(Math.sqrt(sqa_b));
        if (a_b * a_b == sqa_b) {
            var b = (n - i + a_b) / 2;
            var a = n - b - i;
            return a * b * i;
        }
    }
    return -1;
}
console.log(solution(1000));

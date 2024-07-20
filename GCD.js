function findGCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return findGCD(b, a % b);
    }
}

// Example usage:
var number1 = 48;
var number2 = 18;

var gcd = findGCD(number1, number2);
console.log("GCD of " + number1 + " and " + number2 + " is " + gcd);
// Product/HCF==LCM
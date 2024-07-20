// The "LCM" stands for "Least Common Multiple." To find the least common multiple of two or more numbers, you can follow these steps:

// 1. **Prime Factorization:** Start by finding the prime factorization of each number.

// 2. **Multiply the Highest Powers:** For each prime factor, take the highest power of that factor found in any of the numbers, and multiply those powers together.

// 3. **The Result:** The result of this multiplication will be the least common multiple (LCM) of the numbers.

// Here's an example to find the LCM of 12 and 18:

// 1. Prime factorization:
//    - 12 = 2^2 * 3
//    - 18 = 2 * 3^2

// 2. Take the highest powers:
//    - The highest power of 2 is 2^2 (from 12).
//    - The highest power of 3 is 3^2 (from 18).

// 3. Multiply the highest powers:
//    LCM(12, 18) = 2^2 * 3^2 = 4 * 9 = 36

// So, the LCM of 12 and 18 is 36.

function findLCM(a, b) {
    // Calculate the LCM using the formula: LCM = (a * b) / GCD(a, b)
    return (a * b) / findGCD(a, b);
}

function findGCD(a, b) {
    // Calculate the Greatest Common Divisor (GCD) using the Euclidean algorithm
    if (b === 0) {
        return a;
    } else {
        return findGCD(b, a % b);
    }
}

// Example usage:
var number1 = 12;
var number2 = 18;

var lcm = findLCM(number1, number2);
console.log("LCM of " + number1 + " and " + number2 + " is " + lcm);

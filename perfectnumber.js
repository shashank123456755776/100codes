// perfect number, a positive integer that is equal to the sum of its proper divisors
function perfect(n, ar) {
    if (n < 1) {
      return false;
    }
    for (let i = 1; i < n; i++) { // Loop up to n - 1, not n
      if (n % i == 0) {
        ar.push(i);
      }
    }
    let sum = 0;
    for (let j = 0; j < ar.length; j++) {
      sum = sum + ar[j];
    }
    if (sum == n) {
      return "perfect number";
    } else {
      return "not a perfect number";
    }
  }
  
  let n = 28;
  let ar = [];
  console.log(perfect(n, ar));
  
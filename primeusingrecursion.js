
function prime(n) {
    if (n <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false; // If n is divisible by any number from 2 to n - 1, it's not prime
      }
    }
  
    return true; // If n is not divisible by any of the above conditions, it's prime
  }
  
  function checkPrimes(n) {
    if (n >= 2) {
      if (prime(n)) {
        console.log(n + " is a prime number.");
      }
      checkPrimes(n - 1);
    }
  }
  
  let n = 500;
  checkPrimes(n);
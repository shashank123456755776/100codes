// An automorphic number is one that has a square that
// ends in the same digits as the number Itself
function isAutomorphicNumber(number) {
    // Calculate the square of the number
    const square = number * number;
    
    // Convert the number and its square to strings
    const numStr = number.toString();
    const squareStr = square.toString();
    
    // Check if the last digits of the square match the original number
    return squareStr.endsWith(numStr);
  }
  
  // Test the function with a number
  const num = 25; // Change this to the number you want to test
  if (isAutomorphicNumber(num)) {
    console.log(num + ' is an automorphic number.');
  } else {
    console.log(num + ' is not an automorphic number.');
  }
  
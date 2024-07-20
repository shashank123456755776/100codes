// Letter Case Permutation Code 
function letterCasePermutation(input, output = '', index = 0) {
    if (index === input.length) {
      console.log(output);
      return;
    }
  
    // Include the current character in lowercase
    letterCasePermutation(input, output + input[index].toLowerCase(), index + 1);
  
    // Include the current character in uppercase
    letterCasePermutation(input, output + input[index].toUpperCase(), index + 1);
  }
  
  // Example usage:
  let inputString = "Ab";
  letterCasePermutation(inputString);
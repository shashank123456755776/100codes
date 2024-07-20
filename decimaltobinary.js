//recursion 
function decimalToBinary(decimal) {
    if (decimal=== 1) {
      return "1"; // Base case: 1 in binary is still 1
    } else {
      // For any other positive decimal number
      let remainder = decimal % 2;
      let quotient = Math.floor(decimal / 2);
      let binaryPartial = decimalToBinary(quotient);
      // console.log(binaryPartial)
      // console.log(remainder)
      return binaryPartial + remainder;
      
      
    }
  }
  
  const decimalNumber = 25;
  const binaryRepresentation = decimalToBinary(decimalNumber);
  console.log(binaryRepresentation); // Outputs "11001"
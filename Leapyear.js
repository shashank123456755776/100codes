//Leap year 
//When a number has been divided into 4 and 400 then it is said to be leap yaers 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    }
    return false;
  }
  
  let year = 2003;
  console.log(isLeapYear(year)); // Output will be false
  
let str = "234";
let sum = 0;

function fun() {
  for (let i = 0; i < str.length; i++) {
    sum = sum + parseInt(str[i]); // Convert the character to an integer
  }
  return sum;
}

console.log(fun());

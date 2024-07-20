let number = 371;
let sum = 0;
let re = String(number);

function isArmstrong(){
  for (let i = 0; i < re.length; i++) {
    sum += Math.pow(parseInt(re[i]), re.length);
  }

  return sum === number;
}

console.log(isArmstrong()); // true
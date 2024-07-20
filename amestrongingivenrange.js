let start = 371;
let end = 1000; // Adjusted to exclude 1001
let ame = [];

function isArmstrong(num) {
  let re = String(num);
  let sum = 0;
  for (let i = 0; i < re.length; i++) {
    sum += Math.pow(parseInt(re[i]), re.length);
  }
  return sum === num;
}

function findArmstrongNumbers() {
  for (let j = start; j <= end; j++) {
    if (isArmstrong(j)) {
      ame.push(j);
    }
  }
}

findArmstrongNumbers();
console.log(ame);


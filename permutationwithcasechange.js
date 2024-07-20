// letter case permutataions 
let inp = "ab";
let ar = [];
let op = "";

function fun(inp, op) {
  if (inp.length === 0) {
    ar.push(op);
    return;
  }
  fun(inp.slice(1), op + inp[0]);
  fun(inp.slice(1), op + inp[0].toUpperCase());
}

fun(inp, op);
console.log(ar);

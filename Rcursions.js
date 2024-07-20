// Permutation with spaces in js compliers

let inp = "abc";
let op = "";
let ar = [];
let be = "_";

function rev(inp, op) {
    if (inp.length === 0) {
        ar.push(op);
        return;
    }
    rev(inp.slice(1), op + inp[0] + be);
    rev(inp.slice(1), op + inp[0]);
}

rev(inp, op);

let ars = ar.filter(per => !per.endsWith("_"));

console.log(ars);
let input = [1, 2, 3, 4, 5, 6, 7];
let output = [];

function fun(inp, op) {
  if (inp.length === 0) {
    console.log(op);
    return;
  }

  // Clone the output array for two different recursive calls
  let o1 = [...op]; // Create a copy of 'op'
  let o2 = [...op]; // Create another copy of 'op'

  // Add the first element of 'inp' to o2
  o2.push(inp[0]);

  // Call the recursive functions with modified input and output
  fun(inp.slice(1), o1); // Excluding the first element
  fun(inp.slice(1), o2); // Including the first element
}

fun(input, output);
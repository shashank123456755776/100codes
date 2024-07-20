//Subsets Problems using javascript
let input = "ab";
let output = "";

function subset(input, output) {
  if (input.length == 0) {
    console.log(output);
    return [""];
  }

  let o1 = output;
  let o2 = output + input[0];

  input = input.slice(1);

  subset(input, o1);
  subset(input, o2);
}

subset(input, output);


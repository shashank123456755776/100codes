let input = "abcd";
let output= "";

function subset(input, output) {
  if (input.length == 0) {
    console.log(output)
    return [""];
  }

  let o1 = output;//output when we not include the zeroth index values
  let o2 = output + input[0];// output when we include the zeroth index values 

  input = input.slice(1);

  subset(input, o1);
  subset(input, o2);
}

subset(input, output);

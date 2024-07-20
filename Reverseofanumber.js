//reverse the stings 
//revesre a numbers 
let number =9373
function fun(n){
    const result =String(n).split('').reverse().join('')
    return parseInt(result)
}
console.log(fun(number))
  
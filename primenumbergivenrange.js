//prime number in given range 
function isprime(n){
    if(n<1){
        return false
    }
    for(let i =2;i<n;i++){
        if(n%2==0){
            return false
        }
    }
    return true
}
let number
let be = isprime(number)


let prime =[]
let start = 10
let end = 50 
  function funs(start,end,prime){
  for(let j = start ;j<=end;j++){
  if(isprime(j)){
        prime.push(j)
    }
}
  return prime
}
console.log(funs(start,end,prime))
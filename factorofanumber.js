//factor of a number
function fact(n,ar){
 for(let i =1;i<=6;i++){
    if(n%i==0){
      ar.push(i)
    }
 }
 return ar
}
let ar = []
let n =6
let re =fact(n,ar)
console.log(re)

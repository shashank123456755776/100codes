// Smallest Elements in array using Recursions
function small(n,ar){
    if(ar.length===1){
        return 1
    }
    else{
        let re = small(n-1,ar[n-1])
        let res= Math.min(re,ar[n-1])
        return res
    }
}
  let ar=[1,4,5,0,8]
let n = ar.length
let fe=small(n,ar)
console.log(fe)
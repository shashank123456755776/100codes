let ar = [1,2,6,3,5,3,9,8,88]
// largest numberc using recursion

function fun(ar,n){
    if(n===1){
        return ar[0]
    }
     let largest = fun(ar,n-1)
     let res =Math.max(largest,ar[n-1])
     return Math.max(res,ar[n-1])
}
let n = ar.length
let re = fun(ar,n)
console.log(re)
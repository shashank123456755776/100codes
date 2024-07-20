//Reversing a Numbers
//here we just applying the IBH methods to reduced the input only 
let  n1 = 12347668
let str = String(n1)
 let n = str.length
 function reverse(str,n){
       if(n===1){
           return str[0]
       }
         let re =parseInt(str[n-1]+reverse(str,n-1))//here stack rotatio goings on while write the code in induction methods 
         return re
 }
 let res = reverse(str,n)
 console.log(res)
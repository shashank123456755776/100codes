//claculate number of digit in an integers
let n = 123238726982
let count = 0
let n1 = String(n)
 function fun(n){
     for(let i =0;i<n1.length;i++){
         if(n1[i]){
             count ++
         }
     }
     return count 
 }
 let re = fun(n)
 console.log(re)
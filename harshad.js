// A number is said to be the Harshad number if it is
// divisible by the sum of its digit. For example, if number is 156, then sum of its digit will be 1 + 5 + 6 = 12. 
// Since 156 is divisible by 12. So, 156 is a Harshad number.
let n =156
let str = String(n)
let sum =0
function fun(str){
    for(let i =0;i<str.length;i++){
     sum =sum+parseInt(str[i])
  
    }
    if(n%sum==0){
        return  "number is harshad number"
      }
    else{
        return "number is not harshad number"
      }
 }

 let re = fun(str)
 console.log(re)

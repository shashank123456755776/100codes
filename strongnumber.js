//strong number 
// Strong number is a number Where the factorial sum of digits of a number is equal to original number

function factorial(n){
    if(n==0){
      return 1
    }
    else{
        return n*factorial(n-1)
    }
  

}

let number = 145
let sum = 0
let re = String(145)
 function strong(re,sum){
   for(let i=0;i<re.length;i++){
        sum =sum+factorial(parseInt(re[i]))
   }
   if(sum==number){
    return "number is a strong number"
   }
   else{
    return "number is not a strong number"
   }

 }
 let res = strong(re,sum)
 conmsoe.log(res)


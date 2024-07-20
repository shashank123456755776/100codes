// reverse the string 
let str = "string"
let str1 = ""
 function fun(){
     for(let i=str.length-1;i>=0;i--){
         str1 =str1+str[i]
     }
     return str1
 }
 console.log(fun())
// Reverse the String Without using the loop 
   let str2 = "shashank"
   let result = str2.split(" ").reverse().join()
   console.log(result)
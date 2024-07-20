//Length of a String Using Recursion
let str = "string"
let count = 0
 function fun(str){
    if(str === ""){
      return count
    }
    else{
         count++;
        return fun(str.substring(0,str.length - 1));
    }
       
}
let res = fun(str)
console.log(res)
function factorial(n){
    if(n==0){
      return 1
    }
    else{
        return n*factorial(n-1)
    }
  

}

let n = 5
let re =factorial(n)
console.log(re)
function isprime(num){
    if(num<1){
        return false
    }
    for(let i =2;i<num ;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
let number 
 isprime(number)
 
function prime(){
    
    for(let j=2;j<=n;j++){
        if(isprime(j)){
            ar.push(j)
        }
    }
    return ar
}
let n = 100
let ar = []
console.log(prime())
function fun(num){
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
let number =7
let result = fun(number)
console.log(result)
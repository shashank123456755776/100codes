//Pallindrome in js
//Reverse of the number is true 
let number = 124
function fun(){
    const res = String(number).split('').reverse().join('')
    if(res==number){
        return "number is pallindrome"
    }
    else{
        return "number is not pallindrome"
    }
}
let result = fun()
console.log(result)
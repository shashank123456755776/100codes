//Power of a number 
// Using Recursions
function power(n,el){
    if(el===0){
       return 1
    }
    else{
       return n*power(n,el-1)
    }    
}
let n =  2
let el = 4
let re =power(n,el)
console.log(re)
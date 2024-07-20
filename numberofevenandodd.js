let arr =[2,3,4,5,6,7,8,9,12,11]
let counteven =0 
let countodd =0
function counting(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2===0){
            counteven++
        }
       else{
           countodd++
       }
    }
 return {counteven,countodd}
}
let res = counting(arr)
console.log(res)
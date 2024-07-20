// HCF of a number 
// highest common factors between two numbers 
//not optimize
// let a = 48
// let b = 36
// let ar = []
// let ar1 =[]
// function fun (a,b){
//     for(let i =2;i<=a;i++){
//         if(a%i==0){
//            ar.push(i)
           
//         }
        
//     }
//     for(let j =2;j<=b;j++){
//         if(b%j==0){
//             ar1.push(j)
//         }
//     }
//     if(ar1.length>ar.length){
//         for(let k=ar1.length-1;k>0;k--){
//               for(let s=ar.length;s>0;s--){
//                   if(ar1[k]==ar[s]){
//                       return ar[k]
//                   }
//               }
//         }
//     }
//     else{
//          for(let k=ar.length-1;k>0;k--){
//               for(let s=ar1.length;s>0;s--){
//                   if(ar[k]==ar1[s]){
//                       return ar[s]
//                   }
//               }
//         }
//     }
// }
// let re =fun(a,b)
// console.log(re)

// optimize code 
function findHCF(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let a = 48;
let b = 36;
let hcf = findHCF(a, b);
console.log(hcf);
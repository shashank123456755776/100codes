let ar  =[0,1,2,3,4,56,8]
let n 
function fun(){
  for(let i = 0;i<ar.length;i++){
     if(ar[i]+ar[i+1]==ar[i+2]){
        return true 
     }
     else{
        return false
     }
  }
}
console.log(fun())

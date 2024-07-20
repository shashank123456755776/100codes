//need to print 8,7,6,5,4,3,2,1 
// how to print depends upon Induction 

function fun(n){
  if(n>0){//bace case
    console.log(n)//induction 
    fun(n-1)//hypothesis
  }
 
}
let n = 8
fun(n)
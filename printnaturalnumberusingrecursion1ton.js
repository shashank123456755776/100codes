//Print 1 to n using Recursion in js 
//Here We are generally using the IBH methods to resolve the Problems

function fun(n){

    if(n>0){//bace case terminates the loop
        fun(n-1)//hypothesis
        console.log(n)//induction methods code kaise likh rehe hai 
    }
    // if(n==1){
        // return 1
    //     console.log(1)

    // }
    // else{
    //  fun(n-1)//Internally call in Stack
    //  console.log(n)
        
    // }
   
}
let n = 8
fun(n)
// 2nd methods 
 
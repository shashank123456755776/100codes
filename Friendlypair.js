// Friendly pair(Amicable numbers) are two different numbers related in a way such that the Ratio's sum of 
// the proper divisors divided by number itself for each is same Example
  let a =6
  let b =28
  let sum =0
  let sum1=0
  function fun(a,b){
    for(let i =1;i<=a;i++){
        if(a%i==0){
       let se= sum =sum+i
        }
    }
    for(let j=1;j<=b;j++){
        if(b%j==0){
           let be= sum1=sum1+j
        }
    }
    if(be = se){
          return "Friendly pair"
    }
    else{
        return "not friendly pair"
    }
  }
  fun(a,b)
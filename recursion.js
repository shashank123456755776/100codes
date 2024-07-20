// reverse the array 
// arary reverses
let ar =[1,2,3,4,5,6]
function rev(ar){
 
    let re =[]
    if(ar.length===0){
        return []
    }
    let temp =ar.pop()
     re.push(temp)
    let re2 =re.concat(rev(ar))
    return re2
}
let reso =rev(ar.slice())
console.log(reso)
// stack never used extra spaces 
// how to reverse the stack uisng recursions 

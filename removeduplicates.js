function removeDuplicates(arr) {
    let uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    
    return uniqueArray;
  }
  
  let arr = [1, 2, 2, 3, 4, 4, 5];
  let result = removeDuplicates(arr);
  console.log(result); // This will print: [1, 2, 3, 4, 5]
  
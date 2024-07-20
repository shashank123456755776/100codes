// using recursions 
let ar = [1, 2, 3, 4, 5,6];
let k = Math.floor(ar.length / 2);

function del(arr, k) {
    if (k === 0) {
        arr.pop();
        return;
    }

    let temp = arr.pop();
    del(arr, k - 1);
    arr.push(temp);
}

del(ar, k);
console.log(ar);
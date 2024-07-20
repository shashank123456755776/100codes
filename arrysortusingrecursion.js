function sort(ar) {
    if (ar.length === 1) {
        return ar; // Return the sorted array
    } else {
        let temp = ar[ar.length - 1];
        ar.pop();
        sort(ar);
        insert(ar, temp);
    }
}

function insert(ar, temp) {
    if (ar.length === 0 || ar[ar.length - 1] <= temp) {
        ar.push(temp);
        return; // Inserted the element, so return
    } else {
        let val = ar[ar.length - 1];
        ar.pop();
        insert(ar, temp);
        ar.push(val);
    }
}

let ar = [1, 2, 3, 0];
sort(ar);

console.log(ar); // Print the sorted array
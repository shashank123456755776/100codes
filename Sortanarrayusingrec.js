let ar = [4, 8, 2, 1, 3, 0];

function sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...sort(left), pivot, ...sort(right)];
}

let sortedArray = sort(ar);
console.log(sortedArray);

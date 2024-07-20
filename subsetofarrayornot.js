let ar = [1, 2, 3];
let ar1 = [4, 5, 6, 5,1, 2,3];
let ar3 = [];

function isSubset(subset, superset) {
    for (let i = 0; i < subset.length; i++) {
        let found = false;

        for (let j = 0; j < superset.length; j++) {
            if (subset[i] === superset[j]) {
                ar3.push(j);
                found = true;
                break; // Exit the inner loop when a match is found.
            }
        }

        if (!found) {
            return false; // If an element from the subset is not found in the superset, it's not a subset.
        }
    }

    return true; // All elements from the subset are in the superset, so it's a subset.
}

const result = isSubset(ar, ar1);
console.log(result);
console.log(ar3)

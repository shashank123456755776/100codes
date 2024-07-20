function towerOfHanoi(n, source, auxiliary, target) {
    if (n === 1) {
        console.log(`Move disk 1 from rod ${source} to rod ${target}`);
        return;
    }

    towerOfHanoi(n - 1, source, target, auxiliary);
    console.log(`Move disk ${n} from rod ${source} to rod ${target}`);
    towerOfHanoi(n - 1, auxiliary, source, target);
}

// Usage
const numberOfDisks = 3; // Change this value for a different number of disks
towerOfHanoi(numberOfDisks, 'A', 'B', 'C'); // A, B, and C are the rod names

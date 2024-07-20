//  Reverse the stack using Recursion
//very very important question of backtrackings
let s = [1, 2, 3, 4, 5];

function rev(stack) {
    if (stack.length <= 1) {
        return stack;
    }
    const temp = stack.pop();
    rev(stack);
    insert(stack, temp);
}

function insert(stack, temp) {
    if (stack.length === 0) {
        stack.push(temp);
        return;
    }
    const item = stack.pop();
    insert(stack, temp);
    stack.push(item);//The line will push elements in back way in backtracking 
}
rev(s);
console.log(s);
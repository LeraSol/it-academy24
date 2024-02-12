//фибоначчи
function fib(n, m) {
    let a= 0;
    let b  = 1;
    let arr = [a, b];
    let c;
    for (let i = n; i < (n+m); i++) {
        c = a+b;
        arr.push(c);
        a = b;
        b = c;
    }
    return arr;
}
console.log(fib(3, 7));

//вставить данные в массив с заданного места

function addNumToArray(arr, pointerNum, ...inputNum) {
    const index = arr.findIndex(el => el === pointerNum);

    return index !== -1 ? [
        ...arr.slice(0, index + 1),
        ...inputNum,
        ...arr.slice(index + 1)
    ] : arr;
}
console.log(addNumToArray([1, 2, 3, 4, 5],3, 'a', 'b', 'c' ))

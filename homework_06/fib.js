//фибоначчи
function numbersOfFibonachi (n, m) {
    function fibonachi(n) {
        return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
    }
    let a = fibonachi(n);
    let b = fibonachi(n+1);
    let arr = [a, b];
    let c;
    for (let i = 2; i <= m; i++) {
        if (arr.length === m) {
            break;
        }
        c = a + b;
        arr.push(c);
        a = b;
        b = c;
    }
    if (arr.length > m) {
        arr.pop();
        return arr;
    }
    else {
        return arr;
    }
}
console.log(numbersOfFibonachi(6, 1))

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

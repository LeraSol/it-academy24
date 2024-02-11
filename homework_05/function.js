//среднее арифметическое элементов массива

const arr = [12, 15, 20, 25, 59, 79];

const getAverage = (ArrayElement) => {
    let sum = 0;
    for (let i = 0; i < ArrayElement.length; i++) {
        sum += ArrayElement[i];
    }
    return sum / ArrayElement.length;
};

console.log(getAverage(arr));

// проверить сумму первых и последующих трёх цифр

const nums = '976693';
const arrNum = Array.from(nums);

function Sum (Array, start, count) {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += Array[start + i];
    }
    return sum;
}

if (Sum( arrNum, 0, 3) > Sum(arrNum, 3, 3)) {
    console.log('да');
}
else {
    console.log('нет');
}


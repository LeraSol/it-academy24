// обратный порядок
let myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray);
myArray.reverse();
console.log(myArray);
// максимум
let newArray = [3, 67, 15, 23, 8, 28, 16, 333];
console.log(Math.max.apply(null, newArray));
// перебор по значению и и позиции
let n1 = 5674;
let n2 = 5496;
let arrayOfN1 = Array.from(String(n1), Number);
let arrayOfN2 = Array.from(String(n2), Number);
let count = 0;
let value = 0;
console.log(arrayOfN1);
console.log(arrayOfN2);
let i;
let j;

for (i = 0, j = 0; i <= (arrayOfN1.length-1), j <= (arrayOfN2.length-1); i++, j++) {
        if ((arrayOfN1[i] === arrayOfN2[j]) && (arrayOfN1.indexOf(i) === arrayOfN2.indexOf(j))) {
            value += 1;
        }
}
for (i = 0; i <= (arrayOfN1.length-1); i++) {
    for (j = 0; j <= (arrayOfN2.length - 1); j++) {
        if (arrayOfN1[i] === arrayOfN2[j]) {
            count += 1;
        }
    }
}
console.log(`${value} и ${count}`);
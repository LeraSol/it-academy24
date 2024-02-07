// деление числа на части
let ran = Math.random();
let array = [];
let numb = 15;
let parts = 3;
let sum = 0;

for (let step = 1; step<=parts; step++) {
    if (step === parts) {
        let last = numb - sum;
        array.push(last);
        break;
    }
    let min = 1;
    let max = numb - sum
   let rand = Math.floor(ran * (max - min) + min);
   array.push(rand);
   sum += rand;
   if (sum >= numb) {
       array.push(0);
       }
}
console.log(array.join());

let array2 = [];
let numb2 = 15;
let parts2 = 3;
let sum2 = 0;

for (let step2 = 1; step2<=parts2; step2++) {
    if (step2 === parts2) {
        let last2 = (numb2 - sum2).toFixed(2);
        array2.push(last2);
        break;
    }
    let min2 = 1;
    let max2 = numb2 - sum2;
    let rand2 = +(ran * (max2 - min2) + min2).toFixed(2);
    array2.push(rand2);
    sum2 += rand2;
    if (sum2 >= numb2) {
        array2.push(0);
    }
}
console.log(array2.join());

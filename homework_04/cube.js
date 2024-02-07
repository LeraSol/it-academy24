//игра в кубики
let step = 1;
let cycle = 3;
let sum1 = 0;
let sum2 = 0;

for (step; step<=cycle; step++) {
    let player1 = Math.floor(Math.random() * (6-1)+1);
    let player2 = Math.floor(Math.random() * (6-1)+1);
    console.log(`Игрок A бросил кубик ${player1}, Игрок B бросил кубик ${player2}`);
    sum1 += player1;
    sum2 += player2;
}
if (sum1 === sum2) {
    console.log(`Сумма бросков игрока А = ${sum1}, Сумма бросков игрока B = ${sum2}`);
    console.log("Ничья");
}
else if (sum1 > sum2) {
    console.log(`Сумма бросков игрока А = ${sum1}, Сумма бросков игрока B = ${sum2}`);
    console.log("Победил игрок A");
}
else if (sum1 < sum2) {
    console.log(`Сумма бросков игрока А = ${sum1}, Сумма бросков игрока B = ${sum2}`);
    console.log("Победил игрок B");
}

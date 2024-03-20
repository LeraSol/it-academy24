// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout
// со случайной задержкой от 1 до 5 секунд.
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и
// выведите результат его работы на экран.

function getRandom (min,max) {
    return Math.floor(Math.random()* (max-min)+min);
}

    const pr1 = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(1)
        }, getRandom(1,5) * 1000);
    });
    const pr2 = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(2)
        }, getRandom(1,5) * 1000);
    });
    const pr3 = new Promise(function (resolve) {
        setTimeout(() => {
            resolve(3)
        }, getRandom(1,5) * 1000);
    });
    Promise.race([pr1, pr2, pr3])
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

//Сделайте функцию getNum, которая возвращает промис, который
// с задержкой в 3 секунды выведет случайное число от 1 до 5. Создайте async функцию,
// которая с помощью await будет дожидаться результата getNum,
// затем возводить его в квадрат и выводить на экран.

function getNum (min,max, timeout) {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(getRandom(min, max))
    }, timeout);
});
}
async function add1() {
        const a = await getNum(1,5, 3000);
        return a*a;
}
add1().then((v) => {
    console.log(v);
})

//Сделайте функцию getNum, которая возвращает промис,
// который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Используйте также функцию getNum, чтобы вернуть промис,
// который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum,
// затем будет дожидаться результата getNum, а затем найдет сумму полученных чисел и выводит на экран.
async function add2() {
    const a = await getNum(1,5, 3000);
    const b = await getNum(6,10, 5000);
    return a+b;
}
add2().then((v) => {
    console.log(v);
})

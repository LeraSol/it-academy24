// кооличество пятниц 13-го

const countFriday13 = (year, month, day) => {
    let count = 0;
    for (; ; month++) {
        let t = new Date();
        let d = new Date(Date.UTC(year, month, 13));
        if (d>t) {
            break;
        }
        if (d.getDay() === 5) {
            count++;
        }
    }
    return count;
}

console.log(countFriday13(2000, 0, 1));
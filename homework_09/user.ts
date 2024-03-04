interface Person {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number,
}

const person1: Person = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW'
    }
const person2: Person = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
}
console.log(person1, person2)
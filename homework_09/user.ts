export interface User {
    name: string,
    age: number,
    occupation?: string,
    car?: string,
    children?: number,
}

const person: User = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW'
    }
const person2: User = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
}
console.log(person, person2)
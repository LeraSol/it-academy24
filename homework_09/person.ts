interface User {
    name: string,
    age: number,
    occupation: string,
}

interface Admin {
    role:string,
}

type person = User | Admin;

const firstPerson: person = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
}
const secondPerson: person = {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
}
const thirdPerson: person = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
}
const fourthPerson: person = {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
}

console.log(secondPerson, fourthPerson)
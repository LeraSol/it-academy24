import { User } from './user';

interface Admin extends User{
    role:string,
}

type admin = User | Admin;

const firstPerson: admin = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
}
const secondPerson: admin = {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
}
const thirdPerson: admin = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
}
const fourthPerson: admin = {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
}

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)
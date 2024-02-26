const SweetFactory = require('./sweets1');
const present = require('./present1');

const factory = new SweetFactory();

const minchanka = factory.createSweet('minchanka');
const mamba = factory.createSweet('mamba');
const halls = factory.createSweet('halls');
const alpenGold = factory.createSweet('alpen gold');
const snickers = factory.createSweet('snickers');
const ritterSport = factory.createSweet('ritter sport');

present.addSweet(minchanka);
present.addSweet(minchanka);
present.addSweet(mamba);
present.addSweet(halls);
present.addSweet(alpenGold);
present.addSweet(snickers);
present.addSweet(snickers);
present.addSweet(snickers);
present.addSweet(ritterSport);
present.addSweet(mamba);

console.log(present);
console.log(present.filterByCocoa(50));
console.log(present.getWeightOfPresent());
const Chocolate = require('./chocolate');
const Gummy = require('./gummy');
const HardCandy = require('./hardCandy');
const present = require('./present');

const sweet1 = new Chocolate('minchanka', 10, 30, 'milk chocolate');
const sweet2 = new Gummy('mamba', 20, 'raspberry', 'beer');
const sweet3 = new HardCandy('halls', 15, 'mint', false);
const sweet4 = new Chocolate('alpen gold', 100, 30, 'milk chocolate');
const sweet5 = new Chocolate('snickers', 30, 30, 'milk chocolate');
const sweet6 = new Chocolate('mars', 30, 30, 'milk chocolate');
const sweet7 = new Gummy('fruit-tella', 50, 'mango', 'squire');
const sweet8 = new HardCandy('bonpari', 30, 'cherries');
const sweet9 = new Chocolate('ritter sport', 100, 60, 'bitter chocolate');
const sweet10 = new Chocolate('spartak', 100, 90, 'bitter chocolate');

present.addSweet(sweet1);
present.addSweet(sweet2);
present.addSweet(sweet3);
present.addSweet(sweet4);
present.addSweet(sweet5);
present.addSweet(sweet6);
present.addSweet(sweet7);
present.addSweet(sweet8);
present.addSweet(sweet9);
present.addSweet(sweet10);

console.log(present);
console.log(present.filterByCocoa(10, 'bitter chocolate'));
console.log(present.getWeightOfPresent());
const Sweet = require('./sweets');
// жевательный мармелад
class Gummy extends Sweet {
    constructor(name, weight, flavor, shape) {
        super(name, weight);
        this.flavor = flavor; // вкус
        this.shape = shape; // форма
    }
}

module.exports = Gummy;
const Sweet = require('./sweets');
// леденец
class HardCandy extends Sweet {
    constructor(name, weight, flavor, filled) {
        super(name, weight);
        this.flavor = flavor; // вкус
        this.filled = filled; // начинка
        this.isSweetWithSugar = true;
    }
    removeSugar () {
        this.isSweetWithSugar = false;
        return this;
    }
    addSugar () {
        this.isSweetWithSugar = true;
        return this;
    }
}

module.exports = HardCandy;
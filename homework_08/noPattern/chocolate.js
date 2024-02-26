const Sweet = require('./sweets');

class Chocolate extends Sweet {
    constructor(name, weight, cocoaPercentage, chocolateType) {
        super(name, weight);
        this.cocoaPercentage = cocoaPercentage;
        this.chocolateType = chocolateType;
    }
}

module.exports = Chocolate;
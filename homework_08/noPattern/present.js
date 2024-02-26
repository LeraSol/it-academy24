class Present {
    constructor() {
        this.kidPresent = [];
    }
    addSweet(sweet) {
        this.kidPresent.push(sweet);
    }

    getWeightOfPresent () {
        let weight = 0;
        for (let sweet of this.kidPresent) {
            weight += sweet.weight;
        }
        return weight;
    }

    filterByCocoa (cocoa, type) {
        return this.kidPresent.filter(sweet => (sweet.cocoaPercentage>=cocoa && sweet.chocolateType===type));
    }
}

module.exports = new Present();
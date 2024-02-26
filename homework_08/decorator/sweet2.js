class Sweet {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = 30;
        this.price = 10;
    }
    getPrice() {
        return this.price;
    }
    getWeight() {
        return this.weight;
    }
    addCocoa () {
        this.sweet.cocoa = false;
    }
    addFlavor () {
        this.sweet.flavor = false;
    }
}

class Chocolate extends Sweet {
    constructor() {
        super();
        this.price = 25;
        this.weight = 100;
    }
    addCocoa () {
        this.sweet.cocoa = true;
    }
}

class Gummy {
    constructor(sweet) {
        this.sweet = sweet;
    }
    getWeight () {
        return this.sweet.getWeight() - 10;
    }
    addFlavor () {
        return this.sweet.flavor = true;
    }
}

class Sweet {
    constructor(name, weight, cocoa, filled) {
        this.name = name;
        this.weight = weight;
        this.cocoa = cocoa;
        this.filled = filled;
    }
}

class SweetFactory {
    createSweet(name) {
        if(name.toLowerCase() === 'minchanka') {
            return new Sweet(name, 10, 30, false)
        }
        if(name.toLowerCase() === 'mamba') {
            return new Sweet(name, 20, false, 'raspberry')
        }
        if(name.toLowerCase() === 'halls') {
            return new Sweet(name, 15, false, 'mint')
        }
        if(name.toLowerCase() === 'alpen gold') {
            return new Sweet(name, 100, 30, false)
        }
        if(name.toLowerCase() === 'snickers') {
            return new Sweet(name, 50, 30, 'nuts')
        }
        if(name.toLowerCase() === 'ritter sport') {
            return new Sweet(name, 100, 60, false)
        }
    }
}

module.exports = SweetFactory;
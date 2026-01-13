"use strict";
// class Chai {
//   flavour: string;
//   price: number
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(flavour: string, price: number){
//     this.flavour = flavour
//     this.price = price
//   }
// }
// const masalaChai = new Chai("adark",30);
// masalaChai.flavour = "masala"
class Chai {
    flavor = "Masala";
    secretIngredients = "Cardamom";
    reveal() {
        return this.secretIngredients;
    }
}
const c = new Chai();
c.reveal();
class Shop {
    shopName = "Chai corner";
}
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}
class Walet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new Walet();
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too sweet");
        this._sugar = value;
    }
}
const d = new ModernChai();
d.sugar = 3;
class EkChai {
    flavour;
    static shopName = "Chaicode caffe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
//# sourceMappingURL=oop.js.map
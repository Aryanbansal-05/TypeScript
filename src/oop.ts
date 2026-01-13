// class Chai {
//   flavour: string;
//   price: number

//   constructor(flavour: string, price: number){
//     this.flavour = flavour
//     this.price = price
//   }
// }

// const masalaChai = new Chai("adark",30);
// masalaChai.flavour = "masala"

class Chai {
  public flavor: string = "Masala"

  private secretIngredients = "Cardamom"

  reveal(){
    return this.secretIngredients
  }
}
const c = new Chai()
c.reveal();


class Shop {
  protected shopName = "Chai corner"
}

class Branch extends Shop {
  getName(){
    return this.shopName 
  }
}


class Walet {
  #balance = 100

  getBalance(){
    return this.#balance
  }
}

const w = new Walet()

class Cup {
  readonly capacity: number = 250

  constructor(capacity: number){
    this.capacity = capacity
  }
}

class ModernChai {
  private _sugar = 2

  get sugar(){
    return this._sugar
  }

  set sugar(value: number){
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value
  }
}
const d = new ModernChai();
d.sugar = 3;

class EkChai {
  static shopName = "Chaicode caffe"

  constructor(public flavour: string){}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void
}

class MyChai extends Drink {
  make(){
    console.log("Brewing chai");
  }
}
class Heater {
  heat(){}
}

class ChaiMaker {
  constructor(private heater: Heater){}

  make(){
    this.heater.heat
  }
}

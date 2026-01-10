"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true
};
let tea;
tea = {
    name: "adark chai",
    price: 25,
    isHot: true
};
const gingerChai = {
    name: "ginger chai",
    price: 20,
    ingredients: ["adark", "tea leaves"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew = coffee;
const u = {
    username: "aryan",
    password: "123"
};
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala Chai",
    quantity: 2
});
const chaiInfo = {
    name: "Lemon Tea",
    price: 30
};
//# sourceMappingURL=objectTS.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrice = [10, 20];
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];
const cities = ["Delhi", "Jaipur"];
// cities.push("Pune")❌   
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
let chaiTuple;
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "Masala"]❌
let userInfo;
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];
const location = [28.66, 32.22];
const chaiItems = ["Masala", 25];
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; // 102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making: ${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala")
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "chai";
})(RandomEnum || (RandomEnum = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
let t = ["Aryan", 50];
t.push("extra");
//# sourceMappingURL=arraysEnumTS.js.map
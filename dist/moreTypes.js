"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = '42';
let numericLength = response.length;
let bookString = '{"name":"Rich dad poor dad"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
const inputElement = document.getElementById("username");
let value;
value = "hello";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();
let newvalue;
newvalue = "chai";
newvalue = [1, 2, 3];
newvalue = 2.5;
if (typeof newvalue === "string") {
    newvalue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("error", error);
}
const data = "hello world";
const strData = data;
function redirectOnRole(role) {
    if (role === "admin") {
        console.log("admin");
        return;
    }
    if (role === "user") {
        console.log("user");
        return;
    }
    role;
}
//# sourceMappingURL=moreTypes.js.map
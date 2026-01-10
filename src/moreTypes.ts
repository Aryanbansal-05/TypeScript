let response: any = '42';

let numericLength:number = (response as string).length;

type Book = {
    name: string
}

let bookString = '{"name":"Rich dad poor dad"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value:any;
value = "hello";
value = [1,2,3];
value = 2.5;
value.toUpperCase();


let newvalue:unknown;
newvalue = "chai";
newvalue = [1,2,3];
newvalue = 2.5;
if(typeof newvalue === "string"){
    newvalue.toUpperCase();
}

try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("error", error);
}

const data:unknown = "hello world";
const strData: string = data as string;

type Role = "admin" | "user" | "superAdmin" ;

function redirectOnRole(role:Role): void{
    if(role === "admin"){
        console.log("admin");
        return;
    }
    if(role === "user"){
        console.log("user");
        return;
    }
 role;
}
 
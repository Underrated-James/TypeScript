// let myName: string = "Dave Gray";
// let meaning: number;
// let isloading: boolean;
// let album: number | string;
// let a: number = 2;
// let b: number = 3;
// meaning = 42;
// isloading = true;
// myName = "John Doe";
// album = 42;
// album = "The Dark Side of the Moon";
// const product = (a: number, b: number): number => {
//   return a * b;
// };
// console.log(product(a, b));
// let userId: string | number;
// let isActive: number | boolean;
// let re: RegExp = /\w+/g;
let stringArr = ["one", "two", "three"];
let guites = ["stat", "les paul", 15150];
let mixedData = ["EVH", 1084, true];
let any = [];
let bandss = [];
bandss.push("didyeey");
console.log(bandss);
stringArr[0] = "23";
stringArr.push("25");
guites[0] = 1984;
guites.unshift("flex", 2);
console.log(stringArr);
console.log(guites);
let myTuple = ["dave", false, 23];
let mixed = ["doe", true, 1];
myTuple[2] = 42;
// obejcts
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: "dave",
    prop2: 2,
    prop3: true,
};
let EVH = {
    name: "didyeey",
    active: true,
    albums: ["Van", 23],
};
let EV1H = {
    name: "didyeey",
    active: true,
    albums: ["IV", "V", 3],
};
const greet = (Guites) => {
    if (Guites.name) {
        return `Hello ${Guites.name?.toUpperCase()}`;
    }
    return "Hello";
};
console.log(greet(EV1H));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade);
// Literal Types
let myName;
myName = 23;
let userName;
userName = "Jor";
// Functions
const adds = (a, b) => {
    return a + b;
};
const logs = (message) => {
    console.log(message);
};
logs("hellows");
logs(adds(3, 4));
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(4, 2));
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(3, 5));
//optional parameters
const addAll = (a, b, c) => {
    return a + b + (c ?? 0);
};
const sumAll = (a, b, c = 2) => {
    return a * b * c;
};
logs(addAll(1, 2, 3));
logs(addAll(1, 2));
logs(sumAll(1, 2));
//rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4, 5));
const errMsg = (err) => {
    throw new Error(err);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        //if(i > 100) break
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrStrings = (value) => {
    if (typeof value == "string")
        return "string";
    if (isNumber(value))
        return "number";
    return errMsg("This should never happen!");
};
console.log(numberOrStrings("sSQ"));
/// type asertion
let values = "hello";
let strLength = values.length;
//1.)
let arr = ["hello", 42, true];
// answer is (string | number | boolean)
// 2.)
let bands = [];
bands.push("Metallica");
//answer = string
// 3.)
let tuple = ["doe", 12];
tuple.push(23);
console.log(tuple);
const greetUser = (user) => {
    if (user.name) {
        return user.name.toUpperCase();
    }
    return user;
};
console.log(greetUser);
//Code 2
const add = (a, b, c) => {
    return a + b + (c ?? 0);
};
//Code 3
let value = 123;
// console.log(value.toFixed(2));
let toValue = value.toFixed(2);
console.log(toValue);
//Part 4 q1
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    else {
        return "number";
    }
};
//q2
const averate = (...num) => {
    const sum = num.reduce((prev, curr) => prev + curr);
    const avg = sum / num.length;
    return avg;
};
console.log(averate(1, 2, 3, 4, 5, 6));
// q3
const logMsg = (msg) => {
    throw new Error(msg);
};
const getShape = (shape) => {
    if (shape === "circle")
        return 1;
    if (shape === "square")
        return 2;
    const exchausive = shape;
    return "unknown";
};
console.log(getShape("circle")); // 1
let user1 = {
    name: "didyeey",
    age: 12,
};
const printPerson = (person) => {
    if (person.name) {
        return `Name: ${person.name.toUpperCase()}, Age: ${person.age}`;
    }
    return `Age: ${person.age}`;
};
//hard mode
const test = (value) => {
    if (typeof value === "string")
        return value.toUpperCase();
    if (typeof value === "number")
        return value.toFixed(2);
    return value;
};
console.log(test("dwad")); // answer it would return a all caps DWAD or 22 with.00
console.log(test(22));
let word = "world";
//convert to more or less pecific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
console.log(word);
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
};
let myVal = addOrConcat(2, 2, "add");
let nextVal = addOrConcat(2, 23, "concat");
console.log(nextVal);
//The DOm
const img = document.querySelector("img.jpg");
const myImg = document.getElementById("img.jpg");
img.src;
myImg.src;
export {};
//# sourceMappingURL=main.js.map
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

let bandss: string[] = [];

bandss.push("didyeey");

console.log(bandss);
stringArr[0] = "23";
stringArr.push("25");

guites[0] = 1984;
guites.unshift("flex", 2);

console.log(stringArr);

console.log(guites);

let myTuple: [string, boolean, number] = ["dave", false, 23];

let mixed = ["doe", true, 1];

myTuple[2] = 42;

// obejcts

let myObj: object;
myObj = [];

console.log(typeof myObj);

const exampleObj = {
  prop1: "dave",
  prop2: 2,
  prop3: true,
};

interface guites {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let EVH: guites = {
  name: "didyeey",
  active: true,
  albums: ["Van", 23],
};

let EV1H: guites = {
  name: "didyeey",
  active: true,
  albums: ["IV", "V", 3],
};

const greet = (Guites: guites) => {
  if (Guites.name) {
    return `Hello ${Guites.name?.toUpperCase()}`;
  }

  return "Hello";
};

console.log(greet(EV1H));

//Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade);

//Type Alias

type stringOrNumber = number | string;

type StringOrNuberArray = (string | number)[];

type guitarist = {
  name?: string;
  active: boolean;
  albums: StringOrNuberArray;
};

type UserId = stringOrNumber;

// Literal Types

let myName: UserId;
myName = 23;

let userName: "Dave" | "Jor" | "smith";

userName = "Jor";

// Functions

const adds = (a: number, b: number): number => {
  return a + b;
};

const logs = (message: any): void => {
  console.log(message);
};

logs("hellows");
logs(adds(3, 4));

let subtract = function (c: number, d: number): number {
  return c - d;
};

console.log(subtract(4, 2));

//type alias
type mathFunctions = (a: number, b: number) => number;

let multiply: mathFunctions = function (c, d) {
  return c * d;
};

console.log(multiply(3, 5));

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  return a + b + (c ?? 0);
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a * b * c;
};

logs(addAll(1, 2, 3));
logs(addAll(1, 2));

logs(sumAll(1, 2));

//rest Parameters

const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3, 4, 5));

const errMsg = (err: string): never => {
  throw new Error(err);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    //if(i > 100) break
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrStrings = (value: number | string): string => {
  if (typeof value == "string") return "string";
  if (isNumber(value)) return "number";
  return errMsg("This should never happen!");
};

console.log(numberOrStrings("sSQ"));

/// type asertion

let values: unknown = "hello";

let strLength = (<string>values).length;

//1.)
let arr = ["hello", 42, true];
// answer is (string | number | boolean)

// 2.)
let bands = [];
bands.push("Metallica");
//answer = string

// 3.)
let tuple: [string, number] = ["doe", 12];
tuple.push(23);
console.log(tuple);
//answer  you can insert or push something only string or number you do unshift("string", 1) to make it look correct

// Part 2 Fix the error

interface User {
  name: string;
  age?: number;
}

const greetUser = (user: User) => {
  if (user.name) {
    return user.name.toUpperCase();
  }
  return user;
};

console.log(greetUser);

//Code 2
const add = (a: number, b: number, c?: number): number => {
  return a + b + (c ?? 0);
};

//Code 3
let value: unknown = 123;

// console.log(value.toFixed(2));

let toValue = (value as number).toFixed(2);

console.log(toValue);

//Part 3
type twoNumbers = (a: number, b: number) => number;

// Task 2
type userType = {
  username: string;
  isActive: boolean;
  roles: (string | number)[];
};
// task 3
type literal = "admin" | "user" | "guest";

//Part 4 q1
const numberOrString = (value: string | number): string => {
  if (typeof value === "string") {
    return "string";
  } else {
    return "number";
  }
};

//q2

const averate = (...num: number[]) => {
  const sum = num.reduce((prev, curr) => prev + curr);

  const avg = sum / num.length;

  return avg;
};

console.log(averate(1, 2, 3, 4, 5, 6));

// q3
const logMsg = (msg: string): void => {
  throw new Error(msg);
};

//Part 5
// answer 1.) declaration merging is the interface
//answer 2.) better for union types is the types
//answer 3.)commonly used with classes is the interface cause it can extends

//Part 6
type Shape = "circle" | "square";

const getShape = (shape: Shape) => {
  if (shape === "circle") return 1;
  if (shape === "square") return 2;

  const exchausive: never = shape;
  return "unknown";
};

console.log(getShape("circle")); // 1

// Part 7
type Person = {
  name?: string;
  age: number;
};

let user1: Person = {
  name: "didyeey",
  age: 12,
};

const printPerson = (person: Person) => {
  if (person.name) {
    return `Name: ${person.name.toUpperCase()}, Age: ${person.age}`;
  }
  return `Age: ${person.age}`;
};

//hard mode
const test = (value: string | number) => {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(2);

  return value;
};

console.log(test("dwad")); // answer it would return a all caps DWAD or 22 with.00
console.log(test(22));

type one = string;
type two = string | number;
type three = "hello";
let word = <one>"world";

//convert to more or less pecific
let a: one = "hello";
let b = a as two; // less specific
let c = a as three; // more specific

console.log(word);

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat",
): string | number => {
  if (c === "add") {
    return a + b;
  } else {
    return "" + a + b;
  }
};

let myVal: string = addOrConcat(2, 2, "add") as string;
let nextVal: unknown = addOrConcat(2, 23, "concat") as string;

console.log(nextVal);

//The DOm

const img = document.querySelector("img.jpg") as HTMLImageElement;
const myImg = document.getElementById("img.jpg")! as HTMLImageElement;

img.src;
myImg.src;

// ==============================
// TYPE INFERENCE
// ==============================
let inferredString = "hello"; // inferred as string
let inferredNumber = 42; // inferred as number

console.log(
  "Type Inference:",
  inferredString.toUpperCase(),
  inferredNumber.toFixed(2),
);

// ==============================
// TYPE ALIASES
// ==============================
type StringOrNumber = string | number;

type MathFunc = (a: number, b: number) => number;

const add: MathFunc = (a, b) => a + b;

console.log("Type Alias:", add(2, 3));

// ==============================
// OPTIONAL PARAMETERS
// ==============================
const addAll = (a: number, b: number, c?: number): number => {
  return a + b + (c ?? 0);
};

console.log("Optional Params:", addAll(1, 2), addAll(1, 2, 3));

// ==============================
// BASIC NARROWING
// ==============================
const printId = (id: StringOrNumber): void => {
  if (typeof id === "string") {
    console.log("Narrowed to string:", id.toUpperCase());
  } else {
    console.log("Narrowed to number:", id.toFixed(2));
  }
};

printId("abc");
printId(123);

// ==============================
// LITERAL TYPES vs TUPLES
// ==============================

// Literal type
type Role = "admin" | "user" | "guest";

let userRole: Role = "admin";
console.log("Literal Type:", userRole);

// Tuple
let myTuple: [string, number] = ["age", 25];
myTuple.push(30); // allowed but not part of fixed structure

console.log("Tuple:", myTuple);

// ==============================
// ASSERTION (TYPE ASSERTION)
// ==============================
let unknownValue: unknown = "TypeScript";

let strLength = (unknownValue as string).length;
console.log("Type Assertion:", strLength);

// ==============================
// NEVER USAGE
// ==============================
const throwError = (msg: string): never => {
  throw new Error(msg);
};

// Exhaustive check example
type Shape = "circle" | "square";

const getArea = (shape: Shape): number => {
  if (shape === "circle") return 1;
  if (shape === "square") return 2;

  const _exhaustive: never = shape;
  return _exhaustive;
};

console.log("Never Example:", getArea("circle"));

// ==============================
// FUNCTION RETURN CONSISTENCY
// ==============================
const addOrConcat = (
  a: number,
  b: number,
  mode: "add" | "concat",
): string | number => {
  if (mode === "add") {
    return a + b;
  } else {
    return `${a}${b}`; // must return!
  }
};

console.log("Return Consistency:", addOrConcat(2, 3, "add"));
console.log("Return Consistency:", addOrConcat(2, 3, "concat"));

// ==============================
// METHOD CALLS (COMMON MISTAKE)
// ==============================
const greet = (name?: string): string => {
  if (name) {
    return `Hello ${name.toUpperCase()}`; // ✅ correct
    // return `Hello ${name.toUpperCase}`; ❌ wrong (returns function)
  }
  return "Hello";
};

console.log("Method Call Fix:", greet("dave"));

// ==============================
// EXTRA: MIXED CONCEPTS
// ==============================
const processValue = (value: StringOrNumber): string => {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(2);

  return throwError("Unexpected type");
};

console.log("Combined Example:", processValue("hello"));
console.log("Combined Example:", processValue(10));

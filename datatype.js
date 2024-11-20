// variable.js

// Variable declarations
var globalVar = "I'm a global var!"; // Function-scoped
let blockScopedLet = "I'm a block-scoped let!"; // Block-scoped
const constantValue = "I'm a constant!"; // Block-scoped, immutable reference

console.log("var example:", globalVar);
console.log("let example:", blockScopedLet);
console.log("const example:", constantValue);

// Data Types in JavaScript
// 1. Number
let number = 42; // Integer
let float = 3.14; // Float
console.log("Number (Integer):", number);
console.log("Number (Float):", float);

// 2. String
let string = "Hello, World!";
console.log("String:", string);

// 3. Boolean
let isJavaScriptFun = true;
console.log("Boolean:", isJavaScriptFun);

// 4. Null
let emptyValue = null; // Intentionally no value
console.log("Null:", emptyValue);

// 5. Undefined
let notAssigned; // Not initialized
console.log("Undefined:", notAssigned);

// 6. Object
let person = {
    name: "Alice",
    age: 25,
    isStudent: true,
};
console.log("Object:", person);

// 7. Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Array:", fruits);

// 8. Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log("Function:", greet("Alice"));

// 9. BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntValue);

// 10. Symbol
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);

// Dynamic Typing Example
let dynamicVar = "I am a string!";
console.log("Dynamic (String):", dynamicVar);
dynamicVar = 100; // Now it's a number
console.log("Dynamic (Number):", dynamicVar);

// const with Objects and Arrays
const user = { name: "John" };
user.name = "Doe"; // Allowed (modifying contents)
console.log("Modified const object:", user);

const numbers = [1, 2, 3];
numbers.push(4); // Allowed
console.log("Modified const array:", numbers);

// Variable Scopes
if (true) {
    var scopedVar = "I'm accessible everywhere in this function!";
    let scopedLet = "I'm only accessible inside this block!";
    console.log("Inside block - var:", scopedVar);
    console.log("Inside block - let:", scopedLet);
}
console.log("Outside block - var:", scopedVar);
// console.log("Outside block - let:", scopedLet); // Error: scopedLet is not defined

// Hoisting Example
console.log("Hoisted var:", hoistedVar); // undefined (var is hoisted)
var hoistedVar = "I am hoisted!";

// Uncommenting the following lines will cause ReferenceError:
// console.log(hoistedLet); // let is not hoisted
// let hoistedLet = "I am not hoisted!";

// Summary of Data Types
console.log("\nData Types Summary:");
console.log("1. Number:", number);
console.log("2. String:", string);
console.log("3. Boolean:", isJavaScriptFun);
console.log("4. Null:", emptyValue);
console.log("5. Undefined:", notAssigned);
console.log("6. Object:", person);
console.log("7. Array:", fruits);
console.log("8. Function:", greet);
console.log("9. BigInt:", bigIntValue);
console.log("10. Symbol:", uniqueId);

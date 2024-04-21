// ES6 (ECMAScript 2015), let and const are two new ways to declare variables in JavaScript, replacing the older var keyword.

// let:It allows you to declare a variable that can be reassigned a new value.
// Variables declared with let are block-scoped, meaning they exist only within the block of code where they're defined.
// You can declare a variable with let like this:

let age = 25;
age = 30; // Valid - Reassignment is allowed

// const:It allows you to declare a variable that cannot be reassigned a new value once it's initialized.
// Variables declared with const are also block-scoped.
// You must assign a value to a const variable when you declare it, and you cannot change that value later.
// You can declare a variable with const like this:


// Using let
let x = 5;
if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
console.log(x); // Output: 5

// Using const
const y = 7;
// y = 10; // This would throw an error because you cannot reassign a const variable
console.log(y); // Output: 7

// In this example, the let keyword allows for reassignment of the variable x within the block scope, while the const keyword ensures that the value of y remains constant throughout the program execution.
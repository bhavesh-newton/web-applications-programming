// Example 1: Declaring a variable using let
// The 'let' keyword is used to declare a variable that can be changed later.
let age = 25;   // Declaring a variable named 'age' and assigning the value 25
console.log(age);  // Output: 25

// Example 2: Re-assigning a value to a 'let' variable
// 'let' allows you to change the value of a variable after it is declared.
age = 30;    // Re-assigning a new value to the variable 'age'
console.log(age);  // Output: 30

// Example 3: Declaring a constant using const
// The 'const' keyword is used for variables that should not be changed once declared.
const pi = 3.14159;  // Declaring a constant named 'pi'
console.log(pi);  // Output: 3.14159

// Example 4: Attempting to change the value of a 'const' variable
// Attempting to reassign a 'const' variable will result in an error.
// Uncommenting the next line will cause an error:
// pi = 3.14;  // Error: Assignment to constant variable

// Example 5: Declaring a variable using var
// The 'var' keyword is an older way to declare variables. It allows redeclaration.
var name = "John";  // Declaring a variable with 'var'
console.log(name);   // Output: John

// Example 6: Re-declaring a 'var' variable
// 'var' allows you to re-declare a variable, even in the same scope.
var name = "Alice";  // Re-declaring the variable 'name'
console.log(name);  // Output: Alice

// Example 7: Re-declaring variables in the same scope with 'let' - Error Case
// You cannot redeclare a variable declared with 'let' in the same scope.
// Uncommenting the next line will cause an error:
// let name = "Bob";  // First declaration
// let name = "Alice";  // Error: Identifier 'name' has already been declared

// Example 8: Re-declaring variables in the same scope with 'const' - Error Case
// You cannot redeclare a variable declared with 'const' in the same scope.
// Uncommenting the next line will cause an error:
// const city = "New York";  // First declaration
// const city = "Los Angeles";  // Error: Identifier 'city' has already been declared

// Example 9: Using variables with numbers
// You can use variables to store numbers and perform calculations.
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);  // Output: 15 (result of addition)

// Example 10: Using variables with text
// You can also store text (strings) in variables and print them.
let greeting = "Hello";
let person = "Alice";
console.log(greeting);  // Output: Hello
console.log(person);    // Output: Alice

// Example 11: Reassigning variables with different types
// JavaScript is dynamically typed, so variables can change types.
let dynamicVar = 100;  // Initially a number
console.log(dynamicVar);  // Output: 100
dynamicVar = "Now I'm a string!";  // Re-assigning a string
console.log(dynamicVar);  // Output: Now I'm a string!

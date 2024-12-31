// Comprehensive Examples for Function Declaration in JavaScript

// Example 1: Basic Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Calling the function
greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!

// Example 2: Function with Multiple Parameters
function add(a, b) {
  return a + b;
}

// Calling the function with arguments
let sum = add(5, 3);
console.log(`Sum: ${sum} (${typeof sum})`); // Output: Sum: 8 (number)

// Example 3: Function with Default Parameters
function multiply(a, b = 1) {
  return a * b;
}

// Calling the function with and without the second argument
console.log(`Multiply by default: ${multiply(5)}`); // Output: Multiply by default: 5
console.log(`Multiply with two arguments: ${multiply(5, 2)}`); // Output: Multiply with two arguments: 10

// Example 4: Function Expression vs. Function Declaration
// Function Declaration
function square(x) {
  return x * x;
}

// Function Expression
const cube = function(x) {
  return x * x * x;
};

// Calling both functions
console.log(`Square of 4: ${square(4)}`); // Output: Square of 4: 16
console.log(`Cube of 3: ${cube(3)}`);     // Output: Cube of 3: 27

// Example 5: Using the `return` Keyword
function findMax(a, b) {
  if (a > b) {
      return a; // Return the larger number
  } else {
      return b;
  }
}

// Calling the function and logging the result
let max = findMax(10, 20);
console.log(`Maximum value is: ${max}`); // Output: Maximum value is: 20

// Example 6: Practical Exercises

// Exercise 1: Calculate Area of a Rectangle
function calculateArea(length, width) {
  return length * width;
}
let area = calculateArea(5, 10);
console.log(`Area of Rectangle: ${area} (${typeof area})`); // Output: Area of Rectangle: 50 (number)

// Exercise 2: Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
let fahrenheit = celsiusToFahrenheit(25);
console.log(`25°C in Fahrenheit is: ${fahrenheit}°F`); // Output: 25°C in Fahrenheit is: 77°F

// Exercise 3: Check if a Number is Even or Odd
function isEven(num) {
  return num % 2 === 0;
}
console.log(`Is 4 even? ${isEven(4)}`); // Output: Is 4 even? true
console.log(`Is 7 even? ${isEven(7)}`); // Output: Is 7 even? false


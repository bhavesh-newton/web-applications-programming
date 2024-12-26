// Practice exercises for Object Methods in JavaScript

// Exercise 1: Object Property Counter
// TODO: Create a function that counts the number of properties in an object
function countProperties(obj) {
    // Your code here
}

// Exercise 2: Property Checker
// TODO: Write a function that checks if an object has all the required properties
function hasRequiredProperties(obj, requiredProps) {
    // Your code here
}

// Exercise 3: Average Calculator
// TODO: Calculate the average of all numeric values in an object
function calculateAverage(obj) {
    // Your code here
}

// Exercise 4: Array to Object Converter
// TODO: Convert an array of names to an object with IDs
function arrayToObject(names) {
    // Your code here
}

// Exercise 5: Property Validator
// TODO: Implement a validator that checks property types
function validateObjectTypes(obj, schema) {
    // Your code here
    // Schema example: { name: 'string', age: 'number' }
}

// Exercise 6: Case Converter
// TODO: Convert object keys from snake_case to camelCase
function convertToCamelCase(obj) {
    // Your code here
}

// Exercise 7: Object Statistics
// TODO: Calculate statistics (min, max, average) of numeric values
function calculateStats(obj) {
    // Your code here
}

// Exercise 8: Object Differ
// TODO: Find differences between two objects
function findDifferences(obj1, obj2) {
    // Your code here
}

// Test cases
const user = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    email: "john@example.com"
};

const numbers = {
    math: 95,
    science: 88,
    history: 92
};

const requiredFields = ["first_name", "email"];

const schema = {
    first_name: "string",
    age: "number",
    email: "string"
};

// Test Exercise 1
console.log("Exercise 1:", countProperties(user));  // Should print: 4

// Test Exercise 2
console.log("Exercise 2:", hasRequiredProperties(user, requiredFields));  // Should print: true

// Test Exercise 3
console.log("Exercise 3:", calculateAverage(numbers));  // Should print: 91.67

// Test Exercise 4
console.log("Exercise 4:", arrayToObject(["Alice", "Bob", "Charlie"]));
// Should print: { 1: "Alice", 2: "Bob", 3: "Charlie" }

// Test Exercise 5
console.log("Exercise 5:", validateObjectTypes(user, schema));
// Should print: { valid: true, errors: [] }

// Test Exercise 6
console.log("Exercise 6:", convertToCamelCase(user));
// Should print: { firstName: "John", lastName: "Doe", ... }

// Test Exercise 7
console.log("Exercise 7:", calculateStats(numbers));
// Should print: { min: 88, max: 95, average: 91.67 }

// Test Exercise 8
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 3, d: 4 };
console.log("Exercise 8:", findDifferences(obj1, obj2));
// Should print: { modified: ["b"], removed: ["c"], added: ["d"] } 
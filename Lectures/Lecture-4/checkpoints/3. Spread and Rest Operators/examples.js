// Examples for Spread and Rest Operators

// Example 1: Spread Operator with Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combining two arrays using the spread operator
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array
const copiedArray = [...array1];
console.log(copiedArray); // Output: [1, 2, 3]

// Using spread operator in function arguments
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Example 2: Rest Operator in Function Parameters
function collectArgs(...args) {
    console.log(args);
}
collectArgs(1, 2, 3); // Output: [1, 2, 3]

// Example 3: Rest Operator with Other Parameters
function logInfo(name, ...details) {
    console.log(`Name: ${name}`);
    console.log(`Details:`, details);
}
logInfo("Alice", "Engineer", "New York", "Loves coding");
// Output:
// Name: Alice
// Details: ["Engineer", "New York", "Loves coding"]

// Example 4: Using Rest Operator with Array Destructuring
const arr = [1, 2, 3, 4];
const [first, second, ...rest] = arr;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4]


// Example 5: Combining Spread and Rest Operators
function mergeAndLog(...arrays) {
    const mergedArray = [].concat(...arrays);
    console.log(mergedArray);
}

mergeAndLog([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

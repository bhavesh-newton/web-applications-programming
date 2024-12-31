// Examples for Higher Order Functions, Arrow Functions, and Callback Functions

// Example 1: Higher Order Function
function greetUser(greetingFunction) {
    return greetingFunction("Alice");
}

function sayHello(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser(sayHello)); // Output: Hello, Alice!

// Example 2: Higher Order Function Returning Another Function
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10 (5 * 2)
console.log(multiplier(3)(4)); // Output: 12 (4 * 3)

// Example 3: Arrow Functions
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

const square = x => x * x;
console.log(square(6)); // Output: 36

// Example 4: Arrow Functions with Higher Order Functions
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

// Example 5: Callback Functions
function fetchData(callback) {
    setTimeout(() => {
        const data = { user: "Alice", age: 25 };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(`User: ${data.user}, Age: ${data.age}`); // Output after 1 second: User: Alice, Age: 25
});

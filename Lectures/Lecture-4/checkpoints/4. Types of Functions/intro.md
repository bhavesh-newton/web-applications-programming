# Higher Order Functions in JavaScript: An Overview

## 🎯 Objective:
Understand the concept of higher order functions in JavaScript, including their syntax, usage, and how they relate to arrow functions and callback functions.

---

## **1. Higher Order Functions**
A higher order function is a function that either takes one or more functions as arguments or returns a function as its result. This allows for powerful functional programming techniques.

### Examples:
- **Function that takes a function as an argument**:
```javascript
function greetUser(greetingFunction) {
    return greetingFunction("Alice");
}

function sayHello(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser(sayHello)); // Output: Hello, Alice!
```

- **Function that returns another function**:
```javascript
function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

---

## **2. Arrow Functions**
Arrow functions provide a concise syntax for writing function expressions. They are particularly useful when working with higher order functions due to their brevity.

### Syntax:
```javascript
const functionName = (parameters) => {
    // Function body
};
```

### Example:
```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

// Using arrow functions with higher order functions
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```

---

## **3. Combining Higher Order Functions with Callbacks**
Higher order functions can utilize callback functions to create more dynamic and reusable code.

### Example:
```javascript
function processArray(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3];
const squared = processArray(numbers, (num) => num * num);
console.log(squared); // Output: [1, 4, 9]
```

---

## 🌟 Key Takeaways:
- **Higher Order Functions**: Functions that take other functions as arguments or return them.
- **Arrow Functions**: A concise way to write functions.
- **Callback Functions**: Functions passed as arguments to be executed later, often used in asynchronous operations.
- Combining these concepts allows for more flexible and powerful programming patterns in JavaScript.

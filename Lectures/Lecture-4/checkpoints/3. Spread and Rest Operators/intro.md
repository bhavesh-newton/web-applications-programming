# Spread and Rest Operators in JavaScript: An Overview

## 🎯 Objective:
Understand the spread and rest operators in JavaScript, their syntax, and how they are used to manipulate arrays and objects.

---

## **1. Spread Operator (`...`)**
The spread operator allows an iterable (like an array or object) to be expanded in places where multiple elements are expected. It is useful for combining arrays, copying arrays, or spreading elements into function arguments.

### Examples:
- **Combining Arrays**:
```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

- **Copying Arrays**:
```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
```

- **Spreading in Function Arguments**:
```javascript
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
```


---

## **2. Rest Operator (`...`)**
The rest operator collects multiple elements and condenses them into a single array. It is used in function parameters to gather arguments into an array.

### Examples:
- **Using Rest in Function Parameters**:
```javascript
function collectArgs(...args) {
    console.log(args);
}
collectArgs(1, 2, 3); // Output: [1, 2, 3]
```

- **Combining with Other Parameters**:
```javascript
function logInfo(name, ...details) {
    console.log(`Name: ${name}`);
    console.log(`Details:`, details);
}
logInfo("Alice", "Engineer", "New York", "Loves coding"); 
// Output:
// Name: Alice
// Details: ["Engineer", "New York", "Loves coding"]
```

---

## 🌟 Key Takeaways:
- The **spread operator** expands elements of an iterable into individual elements.
- The **rest operator** collects multiple arguments into a single array parameter.
- Both operators use the same syntax (`...`), but their context determines their function.
- They enhance code readability and simplify operations involving arrays and objects.

# JavaScript Lecture Plan: Array Iteration Methods (1.5 hours)

## 1. Pre-read Check (5 minutes)

- **Objective**: Ensure students understood the pre-read material.
  - Quickly quiz 2-3 students: 
    - What does the `forEach` method return?
    - What happens if no element satisfies the condition in the `find` method?
  - Clarify any doubts from the pre-read.

---

## 2. Introduction to Array Iteration Methods (5 minutes)

- **Objective**: Provide an overview of how iteration methods simplify working with arrays in JavaScript.
- **Key Points**:
  - Iteration methods process each element of an array.
  - They are concise, readable, and often replace traditional for loops.

---

## 3. The `forEach` Method (10 minutes)

### **Definition**:
The `forEach` method executes a provided function once for each array element. It is used for iteration but does not return a new array.

### **Example**:
```javascript
function printFunction(element, index, array) {
    console.log(element, index, array);
}
let numbers = [1, 2, 3, 4];
numbers.forEach(printFunction); // Logs: 1 0 [1, 2, 3, 4], then logs: 2 1 [1, 2, 3, 4], etc.
```

### **Practice Question**:
- Write a function using `forEach` to log each element of an array along with its index.

---

## 4. The `map` Method (10 minutes)

### **Definition**:
The `map` method creates and returns a new array populated with the results of calling a provided function on every element in the original array.

### **Example**:
```javascript
function multiplyByTwo(element) {
    return element * 2;
}
let numbers = [1, 2, 3, 4];
const resultArray = numbers.map(multiplyByTwo); // resultArray is [2, 4, 6, 8]
```

### **Practice Question**:
- Use `map` to convert an array of strings to their uppercase versions.

---

## 5. The `filter` Method (10 minutes)

### **Definition**:
The `filter` method creates a new array with all elements that pass a provided test.

### **Example**:
```javascript
function isEven(element) {
    return element % 2 === 0;
}
let numbers = [1, 2, 3, 4];
const resultArray = numbers.filter(isEven); // resultArray is [2, 4]
```

### **Practice Question**:
- Write a function using `filter` to return all elements in an array greater than a given value.

---

## 6. The `reduce` Method (10 minutes)

### **Definition**:
The `reduce` method reduces an array to a single value by applying a function iteratively on each element of the array.

### **Example**:
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, num) => accumulator + num, 0); // Output: sum is 10
```

### **Practice Questions**:
- Example: Find the maximum value in an array.
```javascript
let max = numbers.reduce((accumulator, num) => (num > accumulator ? num : accumulator), numbers); // Output: max is the maximum number
```
- Example: Count occurrences of items in an array.
```javascript
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((accumulator, fruit) => {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1;
    return accumulator;
}, {});
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }
```

---

## 7. The `find` Method (5 minutes)

### **Definition**:
The `find` method returns the first element that satisfies the provided testing function.

### **Example**:
```javascript
let numbers = [1, 2, 3, 4];
let firstEven = numbers.find(num => num % 2 === 0); // Output: firstEven is 2
```

### **Practice Question**:
- Find the first string in an array with more than five characters.

---

## 8. The `findIndex` Method (5 minutes)

### **Definition**:
The `findIndex` method returns the index of the first element that satisfies the test function or -1 if none match.

### **Example**:
```javascript
let numbers = [1, 2, 3, 4];
let index = numbers.findIndex(num => num % 2 === 0); // Output: index is 1
```

### **Practice Question**:
- Find the index of the first negative number in an array.

---

## 9. The `includes` Method (5 minutes)

### **Definition**:
The `includes` method checks if an array contains a specific value and returns true or false.

### **Example**:
```javascript
let campuses = ["NST PUNE", "NSTRU", "NST BANGALORE"];
let isNSTLucknowOpened = campuses.includes("NST LUCKNOW"); // Output: false
```

### **Practice Question**:
- Check if "NST BANGALORE" is included in the campuses array.

---

## What’s Next?
1. **Practice**: Implement these methods in small coding exercises.
2. **Experiment**: Modify examples to see different outputs and behaviors.
3. **Explore Further**: Look into additional JavaScript concepts such as objects and functions to enhance your understanding.

Remember that mastering these methods will greatly improve your ability to work with arrays in JavaScript!

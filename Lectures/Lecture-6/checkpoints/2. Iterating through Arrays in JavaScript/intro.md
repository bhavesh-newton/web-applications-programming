# Iterating Through Arrays in JavaScript

## 🎯 Objective:
Understand how to iterate through arrays using different JavaScript methods and their specific use cases.

---

## **1. Iterating with the `forEach` Method**
The `forEach` method executes a provided function once for each array element. It does not return a new array and is primarily used for performing operations like logging or modifying external variables.

### Syntax:
```javascript
array.forEach(function(element, index, array) {
  // Your code here
});
```

### Example:
```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: banana
// 2: cherry
```

---

## **2. Iterating with the `map` Method**
The `map` method creates and returns a new array with the results of applying a provided function to each element of the original array. It does not modify the original array.

### Syntax:
```javascript
let newArray = array.map(function(element, index, array) {
  return // transformed element;
});
```

### Example:
```javascript
let numbers = [1, 2, 3];
let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // [1, 4, 9]
```

---

## **3. Iterating with the `filter` Method**
The `filter` method creates a new array with all elements that pass a test implemented by the provided function. It does not modify the original array.

### Syntax:
```javascript
let filteredArray = array.filter(function(element, index, array) {
  return // condition;
});
```

### Example:
```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

---

## **4. Iterating with the `reduce` Method**
The `reduce` method reduces an array to a single value by applying a function on each element and carrying an accumulator along with the iterations. It requires an initial value for the accumulator.

### Syntax:
```javascript
let result = array.reduce(function(accumulator, currentValue, index, array) {
  return // new accumulator;
}, initialValue);
```

### Example:
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

---

## 🌟 Key Takeaways:
- **`forEach`**: For side effects like logging; does not return a new array.
- **`map`**: Creates a new array by transforming each element of the original array.
- **`filter`**: Returns a new array containing elements that satisfy a condition.
- **`reduce`**: Aggregates array elements into a single value using an accumulator.

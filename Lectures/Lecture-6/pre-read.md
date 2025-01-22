# Array Iteration Methods in JavaScript: Pre-Read Overview

## 🎯 Learning Objectives

By the end of this pre-read, you will:

- Understand the purpose and use cases for common array iteration methods.
- Learn how methods like `forEach`, `map`, `filter`, and `reduce` streamline array processing.
- Differentiate between iteration methods and their outcomes.

---

## **1. Introduction to Array Iteration Methods**

Array iteration methods simplify processing elements in arrays with clean and concise code. They often replace traditional `for` loops, improving readability and reducing the potential for errors.

### Common Methods:
- `forEach`: Perform actions on each element without returning a new array.
- `map`: Create a new array by transforming elements.
- `filter`: Extract elements that meet specific criteria.
- `reduce`: Condense an array into a single value.
- `find` and `findIndex`: Locate specific elements or their indices.
- `includes`: Check for the presence of a specific value.

---

## **2. The `forEach` Method**

- Executes a function on each array element.
- **Does not** return a new array.
- Best used for logging or modifying external variables.

### Example:
```javascript
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); 
// Output: 1 2 3
```

---

## **3. The `map` Method**

- Creates a **new array** by applying a function to each element.
- Does not modify the original array.

### Example:
```javascript
let numbers = [1, 2, 3];
let squares = numbers.map(num => num ** 2);
console.log(squares); // [1, 4, 9]
```

---

## **4. The `filter` Method**

- Creates a new array with elements that pass the test in the provided function.
- Returns only elements that evaluate to `true` for the condition.

### Example:
```javascript
let numbers = [1, 2, 3, 4];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

---

## **5. The `reduce` Method**

- Reduces an array to a single value by applying a function on each element.
- Carries an accumulator across iterations.
- Requires an initial value for the accumulator.

### Example:
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

---

## **6. The `find` Method**

- Returns the first element that satisfies the test in the provided function.
- Returns `undefined` if no element passes the test.

### Example:
```javascript
let numbers = [1, 2, 3, 4];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2
```

---

## **7. The `findIndex` Method**

- Returns the index of the first element that satisfies the test function.
- Returns `-1` if no elements pass the test.

### Example:
```javascript
let numbers = [1, 2, 3, 4];
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // 1
```

---

## **8. The `includes` Method**

- Checks if an array contains a specific value.
- Returns `true` or `false`.

### Example:
```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```

---

## 📝 Pre-Read Quiz

1. **What does the `forEach` method return?**  
   A. A new array  
   B. A boolean value  
   C. `undefined`  
   *(Answer: C)*

2. **What is the primary difference between `map` and `forEach`?**  
   A. `map` returns a new array, while `forEach` does not.  
   B. `forEach` can modify the original array, while `map` cannot.  
   C. `map` is faster than `forEach`.  
   *(Answer: A)*

3. **Which method would you use to find the index of the first even number in an array?**  
   A. `filter`  
   B. `find`  
   C. `findIndex`  
   *(Answer: C)*

4. **True or False: `reduce` requires an initial value for the accumulator.**  
   *(Answer: True)*

---

## 🚀 Quick Tips for Success

1. Use `map` and `filter` to create new arrays efficiently.
2. Choose `forEach` for side effects like logging, not for transformation.
3. Remember, `reduce` is powerful but can be more complex—practice it with simple cases first.
4. Test methods in the browser console to see their effects directly.

---

Get ready to explore these methods in action during Lecture 6!

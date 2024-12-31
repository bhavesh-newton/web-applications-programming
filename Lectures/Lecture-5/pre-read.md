# JavaScript Arrays: Pre-Read Material

## 🎯 Learning Objectives
By the end of this pre-read, you will:
- Understand what arrays are in JavaScript and their characteristics.
- Recognize the differences between JavaScript arrays and Python lists.
- Learn commonly used array methods and their applications.
- Comprehend the concepts of call by value vs. call by reference in relation to arrays.

---

## 1. What is an Array?
An array in JavaScript is a special object used to store multiple values in a single variable. Arrays can hold any data type (e.g., numbers, strings, objects) and can mix different types.

### Example:
```javascript
let campuses = ["NSTRU", "NSTPUNE", "NSTBANGALORE", "NSTLUCKNOW"];
```

---

## 2. Difference Between JavaScript Arrays and Python Lists

### Similarities:
- Both are dynamic and can store mixed data types.

### Differences:
- **Type**: JavaScript arrays are a type of object, while Python lists are built-in data structures.
- **Methods**: Python lists have additional features like list comprehensions, whereas JavaScript relies on methods like `map()` or `filter()` for similar operations.

### Practice Question:
- Create an array for this semester's courses. Log the second course.

### Debugging Question:
- Why does `arr = [1, 2, 3]; console.log(arr[3]);` return `undefined`?

---

## 3. Commonly Used Array Methods

### Manipulation Methods:
- **`push()`**: Adds elements to the end of an array.
  ```javascript
  campuses.push("NSTBANGALORE"); // Adds "NSTBANGALORE" to the end
  ```

- **`pop()`**: Removes the last element of an array.
  ```javascript
  campuses.pop(); // Removes the last element
  ```

- **`slice()`**: Extracts a portion of an array without modifying it.
  ```javascript
  let part = campuses.slice(0, 2); // Extracts elements from index 0 to 1
  ```

- **`splice()`**: Adds/removes elements from an array and can modify it.
  ```javascript
  campuses.splice(1, 1, "Grapes"); // Removes one element at index 1 and adds "Grapes"
  ```

---

## 4. Call by Value vs. Call by Reference

### Call by Value:
- Applies to primitive types like numbers, strings, and booleans; modifying a copy doesn’t affect the original.

### Call by Reference:
- Applies to arrays and objects; modifying a copy changes the original due to shared reference.

### Practice Question:
- Write a function that takes an array and modifies it by adding a new value. Observe how the original array changes.

### Debugging Question:
- Why does modifying an array inside a function also change the array outside the function?

---

## 5. Arrays as Objects

Arrays in JavaScript are technically objects, meaning their behavior includes properties and methods. 

### Example:
```javascript
console.log(typeof ["Apple", "Banana"]); // Output: "object"
```

### Key Concept:
- Since arrays are objects, they can have properties just like any other object in JavaScript.

---

## 🤔 Reflection Questions
1. How do JavaScript arrays differ from Python lists in terms of methods available?
2. What happens when you pass an array to a function in JavaScript?
3. Why is understanding call by reference important when working with arrays?

**Prepare for an engaging session on JavaScript arrays! Your understanding of these concepts will enhance your programming skills.**

# JavaScript Lecture Plan: Arrays (1.5 hours)

## 1. Pre-read Quiz (5 minutes)

- **Objective**: Ensure students understood the pre-read.
  - Quiz Questions:
    - How does JavaScript treat arrays in terms of data types?
    - Why are arrays in JavaScript considered to be passed by reference?
  - Clarify any doubts from the pre-read.

---

## 2. Introduction to Arrays in JavaScript (5 minutes)

### **What is an Array?**
- Arrays are special objects in JavaScript used to store multiple values in a single variable.
- **Example**:
  ```javascript
  let campuses = ["NSTRU", "NSTPUNE", "NSTBANGALORE"];
  ```

### **Difference Between Arrays in JavaScript and Python**
- In JavaScript, arrays are like Python lists; we can store any type of data in an array and manipulate them using various methods.
- Python lists offer list comprehensions, whereas JavaScript arrays rely on methods for manipulation.

### **Practice Question**:
- Create an array for this semester's courses. Log the second course.

### **Debugging Question**:
- Why does `arr = [1, 2, 3]; console.log(arr[3]);` return `undefined`?

---

## 3. Methods in JavaScript (2 minutes)

### **What is a Method?**
- A function associated with an array or object, invoked using the array or object it belongs to.
- Arrays have built-in methods for manipulation.

---

## 4. Call by Value vs. Call by Reference (5 minutes)

### **Call by Value**
- Works for primitive types like numbers, strings, and booleans. Changing the copy doesn't affect the original.

### **Call by Reference**
- Works for non-primitive types like arrays and objects. Modifications affect the original array.

### **Practice Question**:
- Write a function that takes an array and modifies it by adding a new value. Observe how the original array changes.

### **Debugging Question**:
- Why does modifying an array inside a function also change the array outside the function?

---

## 5. Arrays as Objects and Pass by Reference (5 minutes)

### **Concept Overview**
- Arrays are technically objects in JavaScript and are passed by reference.
- Modifying an array in one part of your code will reflect in other references to the same array.

### **Practice Question**:
- Write a function that adds a new element to the array at index 2. Pass the array as an argument and check if it reflects outside the function.

### **Debugging Question**:
- What will be the output of the following code?
  ```javascript
  let arr = [1, 2, 3];
  let copy = arr;
  copy.push(4);
  console.log(arr); // Output ?? 
  ```

---

## 6. Most Used Array Methods (20 minutes)

### **Manipulation Methods**
- `push()`: Adds elements to the end of an array.
- `pop()`: Removes the last element.
- `shift()`: Removes the first element.
- `unshift()`: Adds elements to the start of an array.

### **Practice Question**:
- Write a function that takes an array and adds "Hello" at the beginning and "World" at the end.

### **Debugging Question**:
- Why does `arr.pop("newValue")` not add "newValue" to the array?

### **Slicing and Splicing**
- `slice()`: Extracts a portion of an array without modifying the original.
- `splice()`: Adds/removes elements to/from an array.
  
#### Syntax:
```
array.splice(start, deleteCount, item1, item2, ...)
```
- `start`: The index at which to start changing the array.
- `deleteCount`: The number of elements to remove.
- `item1, item2, ...`: Elements to add (optional).

#### Remove Elements
```javascript
let campuses = ["NSTRU", "NSTPUNE", "NSTLUCKNOW", "NSTBANGALORE"];
campuses.splice(2, 1); // Start at index 2, remove 1 element
console.log(campuses); // Output: ["NSTRU", "NSTPUNE", "NSTBANGALORE"]
```

#### Add Elements
```javascript
let campuses = ["NSTRU", "NSTPUNE", "NSTBANGALORE"];
campuses.splice(2, 0, 'NSTLUCKNOW'); // Start at index 2, add elements
console.log(campuses); // Output: ["NSTRU", "NSTPUNE", "NSTLUCKNOW", "NSTBANGALORE"]
```

### **Practice Question**:
- Use `slice()` to extract the first three elements of an array. Use `splice()` to remove the last two elements of another array.

### **String Conversion Methods**
- `split()`: Splits a string into an array.
- `join()`: Joins array elements into a string.

### **Practice Question**:
- Convert a sentence into an array of words using `split()`. Then join it back into a sentence using `join()`.

### **Debugging Question**:
- Why does `"Now NST Campus is in Bangalore".split();` not split the string into words?

---

## 7. Practice and Challenge (10 minutes)

### **Challenge 1**: 
Write a function that removes duplicates from an array.

### **Challenge 2**: 
Combine two arrays using `push()` and `unshift()`, then sort them alphabetically.

---

## Objectives
The session aims to provide a clear understanding of JavaScript arrays, their structure, and manipulation methods like `push`, `pop`, `slice`, and `splice`. Students will explore concepts like call by value vs. call by reference, arrays as objects, and practice debugging and real-world problem-solving with arrays.

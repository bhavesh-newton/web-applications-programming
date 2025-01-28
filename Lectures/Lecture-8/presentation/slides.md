---
theme: seriph
colorSchema: light
background: https://cover.sli.dev
title: WAP 8 - Object Methods and Data Structures
info: |
  ## WAP Lecture 8: Object Methods and Data Structures
  Dive deep into JavaScript's object methods with practical examples, interactive learning, and live coding.

  Instructor: Krushn Dayshmookh
class: text-center
monaco: true
mdc: true
---

## Web Application Programming

Lecture 8

# Object Methods and Data Structures

Press Space for next page <carbon:arrow-right />

---
layout: image-right
image: images/table-of-contents.png
---

# Table of Contents

1. Introduction to Object Methods
2. Object.keys() and Object.values()
3. Object.entries() and Object.fromEntries()
4. Real-World Applications

---

# Introduction to Object Methods

- JavaScript objects are key-value pairs.
  - For example:

    ```javascript {monaco-run}
    const user = { name: "Alice", age: 25, city: "London" };
    ```

    Here, `name`, `age`, and `city` are keys, and `"Alice"`, `25`, and `"London"` are values.

- Objects have built-in methods for data manipulation.
- `Object.keys()`, `Object.values()`, `Object.entries()` and `Object.fromEntries()` are some of them.
- These methods make object manipulation easier and more efficient.

Let's dive into these methods with examples.

---

# Object.keys() and Object.values()

- `Object.keys()` returns an array of object keys.
- `Object.values()` returns an array of object values.

Example:

```javascript {monaco-run}
const user = { name: "Alice", age: 25, city: "London" };
const keys = Object.keys(user); 
const values = Object.values(user);
console.log("keys: ", keys); 
console.log("values: ", values);
```

---
layout: two-cols
---

# Example 1: Object.keys()

Interactive 

### Check Object Completeness

Write a function that checks if an object contains all required keys.

Given an object and an array of required keys, return `true` if the object contains all keys, otherwise `false`.

::right::

```javascript {monaco-run}
const user = { 
  name: "Alice", 
  age: 25, 
  city: "London" 
};

const requiredKeys = ["name", "age"];

function hasAllKeys(obj, keys) {
  






}

console.log()
```
<!--

```javascript
function hasAllKeys(obj, keys) {
  let objKeys = Object.keys(obj);
  for (let key of keys) {
    if (!objKeys.includes(key)) {
      return false;
    }
  }
  return true
}

const user = { name: "Alice", age: 25, city: "London" };
const requiredKeys = ["name", "age"];
console.log(hasAllKeys(user, requiredKeys)); // true

```
-->

---
layout: two-cols
---

# Example 2: Object.values()

Interactive

### Calculate Average

Given an object of scores, calculate the average score.

Return the average score as a number.

::right::

```javascript {monaco-run}
const scores = { math: 95, science: 88, history: 92 };

function calculateAverage(obj) {








}

console.log()
```

<!--

```javascript
// Approach 1
function calculateAverage(obj) {
  const values = Object.values(obj);
  return values.reduce((sum, val) => sum + val, 0) / values.length;
}

// Approach 2
function calculateAverage(obj) {
  let values = Object.values(obj);

  let sum = 0;

  for (let val of values) {
    sum += val;
  }

  const average = sum / values.length;

  return average;
}

const scores = { math: 95, science: 88, history: 92 };
console.log(calculateAverage(scores)); // 91.67
```

-->

---

# Object.entries() and Object.fromEntries()

- `Object.entries()` returns an array of key-value pairs.
- `Object.fromEntries()` converts an array of key-value pairs into an object.

Example:

```javascript {monaco-run}
const objAlice = { name: "Alice", age: 25, city: "London" };
// const entriesAlice = Object.entries(objAlice);
// console.log("entries: ", entriesAlice);

const entriesBob = [["name", "Bob"], ["age", 30], ["city", "New York"]];
// const objBob = Object.fromEntries(entriesBob);
// console.log("object: ", objBob);
```

<!--
uncomment the commented code to see the output
-->

---
layout: two-cols
---

# Example 3: Object.entries()

Interactive

### Filter Properties

Given an object, filter out properties with numeric values.

Return an array of key-value pairs with non-numeric values.

::right::

```javascript {monaco-run}
const character = { name: 
  "Mario", 
  age: 35, 
  power: 100, 
  lives: 3, 
  type: "hero" 
};

function filterProperties(obj) {








}

console.log(filterProperties(character));
```

<!--

```javascript

Appraoch 1

function filterProperties(obj) {
  const entries = Object.entries(obj);
  return entries.filter(([key, value]) => typeof value !== "number");
}

Approach 2

function filterProperties(obj) {
  let result = [];
  for (let entry of Object.entries(obj)) {
    if (typeof entry[1] !== "number") {
      result.push(entry);
    }
  }
  return result;
}

```
-->

---
layout: two-cols
---

# Exercise 1

Interactive

### Total Cost Calculation

Given a object of cart with items and quantities and another of items and their prices, calculate the total cost of the cart.

Return the total cost as a number.

Sample Input: 

```javascript
const cart = { apple: 2, banana: 3, orange: 1 };
const prices = { apple: 2, banana: 1, orange: 3 };
```

Sample Output:

```javascript
10
```

::right::

```javascript {monaco-run}
const cart = { apple: 2, banana: 3, orange: 1 };
const prices = { apple: 2, banana: 1, orange: 3 };

function calculateTotalCost(cart, prices) {







}

console.log(calculateTotalCost(cart, prices));
```

<!--

```javascript
function calculateTotalCost(cart, prices) {
  let total = 0;
  for (let [item, quantity] of Object.entries(cart)) {
    total += quantity * prices[item];
  }
  return total;
}
```
-->

---

# Key Takeaways

- `Object.keys()`, `Object.values()`, `Object.entries()`, and `Object.fromEntries()` are useful object methods.
- These methods make object manipulation easier and more efficient.
- They can be used to perform various operations on objects, such as filtering, checking completeness, and calculating averages.

---
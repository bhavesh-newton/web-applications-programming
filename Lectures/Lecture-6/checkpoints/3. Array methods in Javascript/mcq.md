# Checkpoint: Array Methods in JavaScript - Quiz

### Question 1:
What does the `find` method return when no elements satisfy the provided testing function?

```javascript
let numbers = [1, 2, 3];
let result = numbers.find(num => num > 5);
console.log(result);
```
- A) `undefined`
- B) `null`
- C) `-1`
- D) `0`

**Correct Answer:** A) `undefined`

---

### Question 2:
What will be the output of the following code?

```javascript
let numbers = [5, 12, 8, 130, 44];
let found = numbers.find(num => num > 10);
console.log(found);
```
- A) `5`
- B) `12`
- C) `8`
- D) `undefined`

**Correct Answer:** B) `12`

---

### Question 3:
What is the purpose of the `findIndex` method?

- A) To return the first element that satisfies a condition.
- B) To return the index of the first element that satisfies a condition.
- C) To check if an array contains a specific value.
- D) To create a new array from an existing one.

**Correct Answer:** B) To return the index of the first element that satisfies a condition.

---

### Question 4:
What will be the output of this code snippet?

```javascript
let numbers = [5, 12, 8, 130, 44];
let index = numbers.findIndex(num => num > 10);
console.log(index);
```
- A) `0`
- B) `1`
- C) `2`
- D) `-1`

**Correct Answer:** B) `1`

---

### Question 5:
How does the `includes` method determine if an array contains a specific value?

- A) It uses strict equality (`===`) to compare values.
- B) It uses loose equality (`==`) to compare values.
- C) It returns the index of the value if it exists.
- D) It performs a deep comparison.

**Correct Answer:** A) It uses strict equality (`===`) to compare values.

---

### Question 6:
What will be the output of the following code?

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana"));
```
- A) `true`
- B) `false`
- C) `undefined`
- D) `"banana"`

**Correct Answer:** A) `true`

---

### Question 7:
If you call `includes` with a start index greater than the length of the array, what will it return?

```javascript
let fruits = ["apple", "banana"];
console.log(fruits.includes("apple", 3));
```
- A) `true`
- B) `false`
- C) `undefined`
- D) An error

**Correct Answer:** B) `false`

---

### Question 8:
What will be the output of this code snippet?

```javascript
let numbers = [1, 2, 3];
let result = numbers.find(num => num > 2);
console.log(result);
```
- A) `1`
- B) `2`
- C) `3`
- D) `undefined`

**Correct Answer:** C) `3`

---

### Question 9:
Which method would you use to find the first even number in an array?

```javascript
let arr = [1, 3, 5, 4];
```
- A) `.filter()`
- B) `.map()`
- C) `.find()`
- D) `.includes()`

**Correct Answer:** C) `.find()`

---

### Question 10:
What does this code snippet return?

```javascript
let arr = [10, 20, 30];
let index = arr.findIndex(x => x === 20);
console.log(index);
```
- A) `0`
- B) `1`
- C) `2`
- D) `undefined`

**Correct Answer:** B) `1`

---

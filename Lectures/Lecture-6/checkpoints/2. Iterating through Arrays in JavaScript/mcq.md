# Checkpoint: Iterating Through Arrays in JavaScript - Quiz

### Question 1:
What does the `forEach` method return when applied to an array?
- A) A new array
- B) A single value
- C) `undefined`
- D) The original array

**Correct Answer:** C) `undefined`

---

### Question 2:
Which array iteration method creates a new array by applying a transformation function to each element of the original array?
- A) `forEach`
- B) `map`
- C) `filter`
- D) `reduce`

**Correct Answer:** B) `map`

---

### Question 3:
What does the `filter` method return?
- A) A new array with elements that passed the test condition
- B) A single value after aggregating elements
- C) `undefined`
- D) The original array with modified elements

**Correct Answer:** A) A new array with elements that passed the test condition

---

### Question 4:
Which of the following statements about the `reduce` method is true?
- A) It always returns an array
- B) It modifies the original array
- C) It reduces the array to a single value
- D) It filters elements based on a condition

**Correct Answer:** C) It reduces the array to a single value

---

### Question 5:
Given the code snippet below, what will be the output?
```javascript
let numbers = [1, 2, 3];
numbers.forEach((num, index) => {
  console.log(index, num * 2);
});
```
- A) `[2, 4, 6]`
- B) `0 2 \n 1 4 \n 2 6`
- C) `2 \n 4 \n 6`
- D) `Error`

**Correct Answer:** B) `0 2 \n 1 4 \n 2 6`

---

### Question 6:
Which of the following methods requires an initial value for its operation?
- A) `forEach`
- B) `map`
- C) `reduce`
- D) `filter`

**Correct Answer:** C) `reduce`